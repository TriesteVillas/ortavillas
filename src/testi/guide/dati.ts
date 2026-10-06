// Numeri delle guide presi dai dati misurati (src/lib/*), non scritti a mano. I testi in
// quattro lingue chiamano queste funzioni: un dato cambia qui e cambia ovunque.
import type { Lingua } from "@/lib/rotte";
import { LUOGHI, type Luogo } from "@/lib/luoghi";
import { confrontoLaghi, minuti, tempoDa, OMI_COMUNI, NTN, type ComuneOmi } from "@/lib/dati";
import { numero, euro, tempo } from "@/lib/fmt";
import type { LuogoId, MondoId, OrigineId } from "@/content/indice";
import type { Tabella } from "./tipi";

export const AGGIORNATA = "2026-10-06";

export const L = (id: LuogoId): Luogo => LUOGHI.find((x) => x.id === id)!;
export const n = (x: number, l: Lingua, dec = 0) => numero(x, l, dec);
export const eur = (x: number, l: Lingua) => euro(x, l);
export const t = (min: number, l: Lingua) => tempo(min, l);
/** Ora «09:10» → «9.10» in sloveno (Pravopis), invariata altrove. */
export const ora = (s: string, l: Lingua) => (l === "sl" ? s.replace(/^0/, "").replace(":", ".") : s);
export const pct = (x: number, l: Lingua, dec = 1) => (l === "sl" || l === "de" ? `${numero(x, l, dec)} %` : `${numero(x, l, dec)}%`);

/** Minuti d'auto, senza traffico, verso Orta San Giulio. */
export const daA = (o: OrigineId, luogo: LuogoId = "orta-san-giulio") => minuti(o, luogo);

/** Milano e Malpensa verso i cinque laghi (Stresa, Como, Bellagio, Sirmione, Orta). */
export function laghi(o: "milano" | "malpensa") {
  return confrontoLaghi(o).map((r) => ({ a: r.a, nome: r.nome, minuti: r.minuti, km: r.km }));
}

export function tabellaLaghi(l: Lingua, testa: [string, string, string, string, string], nomi: Record<string, string>): Tabella {
  const mi = laghi("milano");
  const mx = laghi("malpensa");
  const ordine = [...mi].sort((a, b) => a.minuti - b.minuti).map((r) => r.a);
  return {
    testa,
    num: [1, 2, 3, 4],
    righe: ordine.map((id) => {
      const a = mi.find((r) => r.a === id)!;
      const b = mx.find((r) => r.a === id)!;
      return [nomi[id] ?? a.nome, t(a.minuti, l), `${n(a.km, l)} km`, t(b.minuti, l), `${n(b.km, l)} km`];
    }),
  };
}

/** Partenze verso Orta San Giulio: tempo, km e strade numerate principali (≥ 10 km). */
export function tabellaOrigini(l: Lingua, testa: [string, string, string, string], origini: OrigineId[], nomi: Record<OrigineId, Record<Lingua, string>>): Tabella {
  return {
    testa,
    num: [1, 2],
    righe: origini.map((o) => {
      const r = tempoDa(o, "orta-san-giulio")!;
      const refs: string[] = [];
      for (const s of r.strade_principali ?? []) if (s.ref && s.km >= 10 && !refs.includes(s.ref)) refs.push(s.ref);
      return [nomi[o][l], t(r.minuti, l), `${n(r.km, l)} km`, refs.join(" · ")];
    }),
  };
}

// ── sponde ────────────────────────────────────────────────────────────────
export const RIVA_EST: LuogoId[] = ["orta-san-giulio", "legro", "pettenasco"];
export const RIVA_OVEST: LuogoId[] = ["pella", "ronco", "san-maurizio-dopaglio", "madonna-del-sasso"];

export function tabellaSole(l: Lingua, testa: string[], nomeMondo: Record<"est" | "ovest", string>): Tabella {
  const riga = (id: LuogoId, m: "est" | "ovest") => {
    const x = L(id);
    const s = x.soleDic!;
    return [x.nome, nomeMondo[m], `${n(x.quota, l)} m`, `${n(s.minuti, l)}`, ora(s.primo, l), ora(s.ultimo, l)];
  };
  return {
    testa,
    num: [2, 3, 4, 5],
    righe: [...RIVA_EST.map((id) => riga(id, "est")), ...RIVA_OVEST.map((id) => riga(id, "ovest"))],
  };
}

export function tabellaServizi(l: Lingua, testa: string[], nd: string): Tabella {
  const ids = [...RIVA_EST, ...RIVA_OVEST];
  return {
    testa,
    num: [1, 3, 4, 5],
    righe: ids.map((id) => {
      const x = L(id);
      return [
        x.nome + (x.frazioneDi ? ` (${x.frazioneDi})` : ""),
        t(x.daMilano, l),
        x.stazione ? `${x.stazione.nome} · ${n(x.stazione.km, l, 1)} km` : nd,
        x.frane === null ? nd : pct(x.frane, l),
        x.alluvioni === null ? nd : pct(x.alluvioni, l),
        String(x.scuole.length),
      ];
    }),
  };
}

// ── OMI ───────────────────────────────────────────────────────────────────
type Q = { tipologia: string; stato: string; eur_m2_min: number; eur_m2_max: number; variazione_centro_intervallo_vs_2024_2_pct?: number | null };
type ZonaPiena = { zona_omi: string; fascia: string; descrizione: string; quotazioni_2025_2: Q[]; quotazioni_2024_2?: Q[] };

export const comuneOmi = (id: string) => OMI_COMUNI.find((c) => c.id_comune === id)! as ComuneOmi & { zone: ZonaPiena[] };

/** Intervallo €/m² di una tipologia in una zona (2° sem. 2025). */
export function q(comune: string, zona: string, tip: "civili" | "ville" | "economico") {
  const nome = { civili: "Abitazioni civili", ville: "Ville e Villini", economico: "Abitazioni di tipo economico" }[tip];
  const z = comuneOmi(comune).zone.find((x) => x.zona_omi === zona);
  const r = z?.quotazioni_2025_2.find((x) => x.tipologia === nome);
  return r ? { min: r.eur_m2_min, max: r.eur_m2_max, varPct: r.variazione_centro_intervallo_vs_2024_2_pct ?? null } : null;
}
export const fq = (comune: string, zona: string, tip: "civili" | "ville" | "economico", l: Lingua) => {
  const r = q(comune, zona, tip);
  return r ? `${n(r.min, l)}–${n(r.max, l)} €/m²` : "—";
};

const COMUNI_LAGO = ["orta-san-giulio", "pettenasco", "pella", "san-maurizio-dopaglio", "madonna-del-sasso", "omegna", "nonio", "quarna-sopra", "ameno", "miasino", "armeno", "gozzano", "bolzano-novarese"];

/** Tabella completa: comune, zona, tipologia, 2025-2, 2024-2, variazione. Solo civili e ville. */
export function tabellaOmi(l: Lingua, testa: string[], tipologie: Record<"Abitazioni civili" | "Ville e Villini", string>, nq: string): Tabella {
  const righe: string[][] = [];
  for (const id of COMUNI_LAGO) {
    const c = comuneOmi(id);
    let primo = true;
    for (const z of c.zone) {
      for (const tip of ["Abitazioni civili", "Ville e Villini"] as const) {
        const a = z.quotazioni_2025_2.find((x) => x.tipologia === tip);
        if (!a) continue;
        const b = z.quotazioni_2024_2?.find((x) => x.tipologia === tip);
        const v = a.variazione_centro_intervallo_vs_2024_2_pct;
        righe.push([
          primo ? `${c.comune.replace("Madonna Del Sasso", "Madonna del Sasso")} (${c.provincia})` : "",
          `${z.zona_omi} · ${z.descrizione.charAt(0) + z.descrizione.slice(1).toLowerCase()}`,
          tipologie[tip],
          `${n(a.eur_m2_min, l)}–${n(a.eur_m2_max, l)}`,
          b ? `${n(b.eur_m2_min, l)}–${n(b.eur_m2_max, l)}` : nq,
          v === null || v === undefined ? nq : `${v > 0 ? "+" : ""}${pct(v, l)}`,
        ]);
        primo = false;
      }
    }
  }
  return { testa, righe, num: [3, 4, 5] };
}

export function ntn(prov: "NO" | "VB") {
  const r = (NTN.righe as Record<string, number | string>[]).find((x) => x.provincia === prov && String(x.ambito).startsWith("tutti"))!;
  return { a2023: r.ntn_2023 as number, a2024: r.ntn_2024 as number, a2025: r.ntn_2025_provvisorio as number, s2026: r.ntn_2026_s1_provvisorio as number, varPct: r.variazione_2025_vs_2024_pct as number };
}

// ── l'esempio dei costi: una casa da 600.000 € comprata da un privato ──────
export const ES = (() => {
  const prezzo = 600_000;
  const rendita = 2_000; // ipotesi dichiarata nel testo
  const valCat2 = rendita * 1.05 * 120; // seconda casa
  const valCat1 = rendita * 1.05 * 110; // prima casa
  const registro2 = Math.max(1000, valCat2 * 0.09);
  const registro1 = Math.max(1000, valCat1 * 0.02);
  const fisse = 100; // ipotecaria 50 + catastale 50
  const agenzia = prezzo * 0.03 * 1.22; // 3% + IVA 22%
  const ivaImpresa = prezzo * 0.1 + 600; // IVA 10% + 200×3
  const atGrest = prezzo * 0.035;
  const atGb = prezzo * 0.011 + 85;
  const atMakler = prezzo * 0.03 * 1.2;
  const atAvvMin = prezzo * 0.01, atAvvMax = prezzo * 0.03;
  const deBy = prezzo * 0.035;
  const deNrw = prezzo * 0.065;
  const tiRf = prezzo * 0.011;
  return { prezzo, rendita, valCat2, valCat1, registro2, registro1, fisse, agenzia, ivaImpresa, atGrest, atGb, atMakler, atAvvMin, atAvvMax, deBy, deNrw, tiRf, imuAliquota: 0.96 };
})();
export const sulPrezzo = (x: number, l: Lingua) => pct((x / ES.prezzo) * 100, l);

export type { MondoId };
