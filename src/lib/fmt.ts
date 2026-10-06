import { INTL, type Lingua } from "./rotte";
import { SHELL } from "@/content/shell";

/** Tempi: sotto i 90 minuti «78 min», sopra «1 h 39 min» (come sloveniavillas). */
export function tempo(min: number, l: Lingua): string {
  const u = SHELL[l].minuti;
  if (min < 90) return `${Math.round(min)} ${u.min}`;
  const h = Math.floor(min / 60);
  const m = Math.round(min - h * 60);
  return `${h} ${u.h} ${String(m).padStart(2, "0")} ${u.min}`;
}
export const numero = (n: number, l: Lingua, dec = 0) =>
  new Intl.NumberFormat(INTL[l], { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: "always" }).format(n);
export const euro = (n: number, l: Lingua) =>
  new Intl.NumberFormat(INTL[l], { style: "currency", currency: "EUR", maximumFractionDigits: 0, useGrouping: "always" }).format(n);
export const km = (n: number, l: Lingua) => `${numero(n, l, n < 10 ? 1 : 0)} km`;
export const coord = (lat: number, lon: number) => `${lat.toFixed(3)}° N · ${lon.toFixed(3)}° E`;
