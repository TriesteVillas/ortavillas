// La matematica degli strumenti: funzioni pure, senza testi, usate dai calcolatori nel browser
// e dalle tabelle statiche sul server (stessi numeri in tutti e due i posti).
import { ESTERO, IT, VENDITA, valoreCatastale, type FonteId } from "./regole";

export type Gruppo = "imposte" | "registri" | "agenzia";
export type Stato = "ok" | "in-verifica" | "manca-rendita" | "nessuna";
/** Una riga di costo. `voce` è la chiave del testo (nei file di testi), `p` i numeri da interpolare. */
export type Riga = { voce: string; gruppo: Gruppo; importo: number; stato: Stato; fonte: FonteId; p?: Record<string, number> };

export type Totale = { totale: number; incompleto: boolean; inVerifica: string[] };
export function totale(righe: Riga[]): Totale {
  const ok = righe.filter((r) => r.stato === "ok");
  const inVerifica = righe.filter((r) => r.stato === "in-verifica" || r.stato === "manca-rendita").map((r) => r.voce);
  return { totale: ok.reduce((s, r) => s + r.importo, 0), incompleto: inVerifica.length > 0, inVerifica };
}

// ── costi d'acquisto ──────────────────────────────────────────────────
export type ScenarioIT = {
  prezzo: number; venditore: "privato" | "impresa"; primaCasa: boolean; lusso: boolean;
  base: "catastale" | "prezzo"; rendita: number | null; agenzia: boolean; pct: number;
};
export const SCENARIO_IT: ScenarioIT = { prezzo: 600000, venditore: "privato", primaCasa: false, lusso: false, base: "catastale", rendita: 2000, agenzia: true, pct: IT.agenzia.pct };

export function costiItalia(s: ScenarioIT): Riga[] {
  const righe: Riga[] = [];
  const prima = s.primaCasa && !s.lusso;
  if (s.venditore === "privato") {
    const aliq = prima ? IT.registroPrima : IT.registro;
    if (s.base === "catastale") {
      if (!s.rendita || s.rendita <= 0) {
        righe.push({ voce: "registro", gruppo: "imposte", importo: 0, stato: "manca-rendita", fonte: IT.fonteRegistro, p: { aliq } });
      } else {
        const vc = valoreCatastale(s.rendita, prima);
        righe.push({ voce: "registroCatastale", gruppo: "imposte", importo: Math.max(IT.registroMin, Math.round((vc * aliq) / 100)), stato: "ok", fonte: IT.fonteRegistro, p: { aliq, vc, min: IT.registroMin } });
      }
    } else {
      righe.push({ voce: "registroPrezzo", gruppo: "imposte", importo: Math.max(IT.registroMin, Math.round((s.prezzo * aliq) / 100)), stato: "ok", fonte: IT.fonteRegistro, p: { aliq, min: IT.registroMin } });
    }
    righe.push({ voce: "ipocatastali", gruppo: "imposte", importo: IT.ipotecaria + IT.catastale, stato: "ok", fonte: IT.fonteIpocatastali, p: { ip: IT.ipotecaria, cat: IT.catastale } });
  } else {
    const aliq = s.lusso ? IT.ivaLusso : prima ? IT.ivaPrima : IT.ivaAltre;
    righe.push({ voce: "iva", gruppo: "imposte", importo: Math.round((s.prezzo * aliq) / 100), stato: "ok", fonte: IT.fonteImpresa, p: { aliq } });
    righe.push({ voce: "fisse", gruppo: "imposte", importo: IT.fisseImpresa * 3, stato: "ok", fonte: IT.fonteImpresa, p: { una: IT.fisseImpresa } });
  }
  righe.push({ voce: "notaio", gruppo: "registri", importo: 0, stato: "in-verifica", fonte: IT.notaio.fonte });
  if (s.agenzia) righe.push({ voce: "agenzia", gruppo: "agenzia", importo: Math.round(s.prezzo * (s.pct / 100) * (1 + IT.agenzia.iva / 100)), stato: "ok", fonte: IT.agenzia.fonte, p: { pct: s.pct, iva: IT.agenzia.iva } });
  return righe;
}

export type Paese = "it" | "ch" | "de" | "at";
export const PAESI: Paese[] = ["it", "ch", "de", "at"];

export function costiEstero(paese: Exclude<Paese, "it">, prezzo: number): Riga[] {
  if (paese === "ch") {
    const c = ESTERO.ch;
    return [
      { voce: "chHand", gruppo: "imposte", importo: 0, stato: "nessuna", fonte: c.fonti[0] },
      { voce: "chBeurk", gruppo: "registri", importo: Math.max(c.minimo, Math.round((prezzo * c.beurkundungPm) / 1000)), stato: "ok", fonte: c.fonti[1], p: { pm: c.beurkundungPm, min: c.minimo } },
      { voce: "chGrundbuch", gruppo: "registri", importo: Math.max(c.minimo, Math.round((prezzo * c.grundbuchPm) / 1000)), stato: "ok", fonte: c.fonti[1], p: { pm: c.grundbuchPm, min: c.minimo } },
      { voce: "makler", gruppo: "agenzia", importo: 0, stato: "in-verifica", fonte: c.makler },
    ];
  }
  if (paese === "de") {
    const d = ESTERO.de;
    return [
      { voce: "deGrest", gruppo: "imposte", importo: Math.floor((prezzo * d.grest) / 100), stato: "ok", fonte: d.fonti[0], p: { aliq: d.grest } },
      { voce: "deNotar", gruppo: "registri", importo: 0, stato: "in-verifica", fonte: d.notar },
      { voce: "makler", gruppo: "agenzia", importo: 0, stato: "in-verifica", fonte: d.makler },
    ];
  }
  const a = ESTERO.at;
  return [
    { voce: "atGrest", gruppo: "imposte", importo: Math.round((prezzo * a.grest) / 100), stato: "ok", fonte: a.fonti[0], p: { aliq: a.grest } },
    { voce: "atEintragung", gruppo: "registri", importo: Math.round((prezzo * a.eintragung) / 100) + a.eingabe, stato: "ok", fonte: a.fonti[1], p: { aliq: a.eintragung, eingabe: a.eingabe } },
    { voce: "atNotar", gruppo: "registri", importo: 0, stato: "in-verifica", fonte: a.notar },
    { voce: "makler", gruppo: "agenzia", importo: 0, stato: "in-verifica", fonte: a.makler },
  ];
}

export function costiPaese(paese: Paese, s: ScenarioIT): Riga[] {
  return paese === "it" ? costiItalia(s) : costiEstero(paese, s.prezzo);
}

// ── budget e quotazioni OMI ───────────────────────────────────────────
/** m² raggiungibili, arrotondati a 5. */
export const mq = (budget: number, eurM2: number) => (eurM2 > 0 ? Math.max(0, 5 * Math.round(budget / eurM2 / 5)) : 0);
export const arrotonda = (x: number, passo = 1000) => passo * Math.round(x / passo);
/** La forchetta OMI per la superficie, arrotondata al migliaio. */
export const forchettaOmi = (q: [number, number], m2: number) => [arrotonda(q[0] * m2), arrotonda(q[1] * m2)] as const;

// ── netto di chi vende ───────────────────────────────────────────────
export type ScenarioVendita = {
  prezzo: number; acquisto: number | null; anni: number; principale: boolean; successione: boolean; superbonus: boolean;
  costi: number; agenzia: boolean; pct: number; altre: number; mutuo: number;
};
export const SCENARIO_VENDITA: ScenarioVendita = { prezzo: 600000, acquisto: 450000, anni: 3, principale: false, successione: false, superbonus: false, costi: 0, agenzia: true, pct: VENDITA.agenzia.pct, altre: 0, mutuo: 0 };

export type EsitoPlus =
  | { tipo: "esente"; motivo: "anni" | "principale" | "successione" }
  | { tipo: "manca-acquisto" }
  | { tipo: "tassata"; regola: "cinque" | "superbonus"; base: number; imposta: number };

export function plusvalenza(s: ScenarioVendita): EsitoPlus {
  const regolaSuperbonus = s.superbonus && !s.successione && !s.principale;
  const regolaCinque = s.anni < VENDITA.anniPlusvalenza && !s.principale && !s.successione;
  if (!regolaSuperbonus && !regolaCinque) {
    return { tipo: "esente", motivo: s.principale ? "principale" : s.successione ? "successione" : "anni" };
  }
  if (s.acquisto === null || s.acquisto <= 0) return { tipo: "manca-acquisto" };
  const base = Math.max(0, s.prezzo - s.acquisto - s.costi);
  return { tipo: "tassata", regola: regolaCinque ? "cinque" : "superbonus", base, imposta: Math.round((base * VENDITA.sostitutiva) / 100) };
}

export function netto(s: ScenarioVendita) {
  const provvigione = s.agenzia ? Math.round(s.prezzo * (s.pct / 100) * (1 + VENDITA.agenzia.iva / 100)) : 0;
  const plus = plusvalenza(s);
  const imposta = plus.tipo === "tassata" ? plus.imposta : 0;
  const netto = s.prezzo - provvigione - imposta - s.altre - s.mutuo;
  /** Se oggi la regola dei 5 anni tassa la vendita, quanto si risparmia aspettando. */
  const attesa = plus.tipo === "tassata" && plus.regola === "cinque" && !s.superbonus ? { fra: VENDITA.anniPlusvalenza - s.anni, risparmio: plus.imposta } : null;
  return { provvigione, plus, imposta, netto, attesa, incompleto: plus.tipo === "manca-acquisto" };
}
