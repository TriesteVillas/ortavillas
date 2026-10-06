// Formati numerici degli strumenti, uguali sul server e nel browser.
import { INTL, type Lingua } from "@/lib/rotte";

// «always»: anche 3.000 col separatore (it/es di default non raggruppano le quattro cifre).
const G = { useGrouping: "always" } as unknown as Intl.NumberFormatOptions;
export const fmtEuro = (n: number, l: Lingua) => new Intl.NumberFormat(INTL[l], { style: "currency", currency: "EUR", maximumFractionDigits: 0, ...G }).format(n);
export const fmtNum = (n: number, l: Lingua, dec = 0) => new Intl.NumberFormat(INTL[l], { minimumFractionDigits: dec, maximumFractionDigits: dec, ...G }).format(n);
/** «3%» in it/en, «3 %» (spazio unificatore) in de/sl, come vogliono le guide di stile. */
export const fmtPct = (n: number, l: Lingua) => {
  const dec = Number.isInteger(n) ? 0 : Number.isInteger(n * 10) ? 1 : 2;
  return `${fmtNum(n, l, dec)}${l === "de" || l === "sl" ? " " : ""}%`;
};
export const fmtM2 = (n: number, l: Lingua) => `${fmtNum(n, l)} m²`;
export const fmtEuroM2 = (n: number, l: Lingua) => `${fmtNum(n, l)} €/m²`;
export const fmtForchetta = (a: number, b: number, l: Lingua) => (a === b ? fmtEuro(a, l) : `${fmtEuro(a, l)} – ${fmtEuro(b, l)}`);
