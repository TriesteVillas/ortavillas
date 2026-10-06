// Il Sestante: sei domande → una classifica dei sedici luoghi, deterministica.
// Stessa matematica di sloveniavillas (media pesata delle vicinanze, 0–100), criteri del lago:
//  · tempo dalla città di partenza (OSRM)                       w 1    bersaglio 0
//  · l'acqua a piedi o la collina (metri sopra il lago, rango)   w 2    bersaglio m/4
//  · budget: livello delle quotazioni OMI del comune             w 1,5  bersaglio per fascia
//  · sole d'inverno (minuti di sole diretto il 21 dicembre)      w v    bersaglio 1
//  · ritmo: cittadina ↔ silenzio (abitanti, in log)              w 1    bersaglio 1 − r/4
//  · ogni «vicino» spuntato (stazione, battello, Malpensa)       w 1    bersaglio 0
import type { LuogoId, OrigineId } from "@/content/indice";

export type DatiLuogo = {
  id: LuogoId; mondo: string; sopraLago: number; omiMax: number; soleMin: number; abitanti: number;
  stazioneKm: number; imbarcaderoKm: number; malpensa: number; tempi: Record<OrigineId, number>;
};
export type Risposte = { o: OrigineId; m: number; b: number | null; v: number; r: number | null; n: string[] };
export const INIZIALI: Risposte = { o: "milano", m: 2, b: null, v: 0, r: null, n: [] };
export const VICINI = ["stazione", "battello", "malpensa"] as const;
export const FASCE = [
  { pc: "f1", medio: 375000, t: 0 },
  { pc: "f2", medio: 750000, t: 0.4 },
  { pc: "f3", medio: 1500000, t: 0.8 },
  { pc: "f4", medio: 2500000, t: 1 },
] as const;

export type Motivo = { chiave: string; punti: number; peso: number; valore: number };
export type Risultato = { id: LuogoId; punteggio: number; motivi: Motivo[] };

const minmax = (xs: number[]) => {
  const lo = Math.min(...xs), hi = Math.max(...xs);
  return (x: number) => (hi === lo ? 0.5 : (x - lo) / (hi - lo));
};
const rango = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return (x: number) => {
    const a = s.indexOf(x), b = s.lastIndexOf(x);
    return s.length > 1 ? (a + b) / 2 / (s.length - 1) : 0.5;
  };
};

export function classifica(dati: DatiLuogo[], r: Risposte): Risultato[] {
  const crit: { chiave: string; w: number; t: number; f: (d: DatiLuogo) => number; grezzo: (d: DatiLuogo) => number }[] = [];
  const nTempo = minmax(dati.map((d) => d.tempi[r.o]));
  crit.push({ chiave: "tempo", w: 1, t: 0, f: (d) => nTempo(d.tempi[r.o]), grezzo: (d) => d.tempi[r.o] });
  const nQuota = rango(dati.map((d) => d.sopraLago));
  crit.push({ chiave: "quota", w: 2, t: r.m / 4, f: (d) => nQuota(d.sopraLago), grezzo: (d) => d.sopraLago });
  if (r.b !== null) {
    const nOmi = minmax(dati.map((d) => d.omiMax));
    crit.push({ chiave: "budget", w: 1.5, t: FASCE[r.b].t, f: (d) => nOmi(d.omiMax), grezzo: (d) => d.omiMax });
  }
  if (r.v > 0) {
    const nSole = minmax(dati.map((d) => d.soleMin));
    crit.push({ chiave: "sole", w: r.v, t: 1, f: (d) => nSole(d.soleMin), grezzo: (d) => d.soleMin });
  }
  if (r.r !== null) {
    const nAb = minmax(dati.map((d) => Math.log1p(d.abitanti)));
    crit.push({ chiave: "ritmo", w: 1, t: 1 - r.r / 4, f: (d) => nAb(Math.log1p(d.abitanti)), grezzo: (d) => d.abitanti });
  }
  for (const k of r.n) {
    const g = k === "stazione" ? (d: DatiLuogo) => d.stazioneKm : k === "battello" ? (d: DatiLuogo) => d.imbarcaderoKm : (d: DatiLuogo) => d.malpensa;
    const n = minmax(dati.map(g));
    crit.push({ chiave: k, w: 1, t: 0, f: (d) => n(g(d)), grezzo: g });
  }
  const sw = crit.reduce((s, c) => s + c.w, 0);
  return dati
    .map((d, i) => {
      const motivi = crit.map((c) => ({ chiave: c.chiave, peso: c.w, punti: c.w * (1 - Math.abs(c.f(d) - c.t)), valore: c.grezzo(d) }));
      const punteggio = (100 * motivi.reduce((s, m) => s + m.punti, 0)) / sw;
      return { id: d.id, punteggio, motivi: [...motivi].sort((a, b) => b.punti - a.punti || b.peso - a.peso).slice(0, 3), i };
    })
    .sort((a, b) => b.punteggio - a.punteggio || a.i - b.i)
    .map(({ i: _i, ...x }) => x);
}

const ORIGINI_OK = ["milano", "malpensa", "linate", "novara", "torino", "lugano", "zurigo", "basilea", "berna", "ginevra", "monaco"];
const ALIAS: Record<string, string> = { milan: "milano", mailand: "milano", turin: "torino", zurich: "zurigo", zuerich: "zurigo", basel: "basilea", bern: "berna", geneva: "ginevra", geneve: "ginevra", genf: "ginevra", munich: "monaco", muenchen: "monaco" };

export function codifica(r: Risposte): string {
  const q = new URLSearchParams();
  q.set("o", r.o); q.set("m", String(r.m));
  if (r.b !== null) q.set("b", String(r.b));
  if (r.v > 0) q.set("v", String(r.v));
  if (r.r !== null) q.set("r", String(r.r));
  if (r.n.length) q.set("n", r.n.join(","));
  return q.toString().replace(/%2C/g, ",");
}
export function decodifica(h: string, base: Risposte = INIZIALI): Risposte {
  const q = new URLSearchParams(h.replace(/^#/, ""));
  const int = (k: string, lo: number, hi: number) => { const v = Number(q.get(k)); return q.has(k) && Number.isInteger(v) && v >= lo && v <= hi ? v : null; };
  let o = q.get("o") ?? base.o; o = ALIAS[o] ?? o;
  return {
    o: (ORIGINI_OK.includes(o) ? o : base.o) as OrigineId,
    m: int("m", 0, 4) ?? base.m,
    b: int("b", 0, 3),
    v: int("v", 1, 2) ?? 0,
    r: int("r", 0, 4),
    n: (q.get("n") ?? "").split(",").filter((x) => (VICINI as readonly string[]).includes(x)),
  };
}
export const PAESE_DA_ORIGINE: Record<string, string> = {
  milano: "IT", malpensa: "IT", linate: "IT", novara: "IT", torino: "IT", lugano: "CH", zurigo: "CH", basilea: "CH", berna: "CH", ginevra: "CH", monaco: "DE",
};
export function hashPC(mondi: string[], b: number | null, o: string, da = "sestante"): string {
  const q = new URLSearchParams();
  q.set("zone", [...new Set(mondi)].join(","));
  if (b !== null) q.set("fascia", FASCE[b].pc);
  q.set("paese", PAESE_DA_ORIGINE[o] ?? "altro");
  q.set("da", da);
  return q.toString().replace(/%2C/g, ",");
}
