// Identità dei luoghi: nome, mondo, comune (per le quotazioni OMI), coordinate del centro.
// Le coordinate sono gli stessi punti usati come arrivo per i tempi OSRM (Nominatim,
// 6 ottobre 2026: raw/punti.json), così tempo e punto sulla carta parlano dello stesso posto.
import type { Lingua } from "@/lib/rotte";
import type { LuogoId, MondoId } from "./indice";

export type LuogoBase = {
  id: LuogoId;
  nome: string;
  /** Frazione di un altro comune: lo si dice, perché prezzi e servizi sono quelli del comune. */
  frazioneDi?: string;
  comuneOmi: string;
  mondo: MondoId;
  lat: number;
  lon: number;
  /** Preposizione per «una casa a/ad/sul…» per lingua. */
  in: Record<Lingua, string>;
};

const std = (nome: string, it = `a ${nome}`): Record<Lingua, string> => ({ it, en: `in ${nome}`, de: `in ${nome}`, sl: `v kraju ${nome}` });

export const LUOGHI_BASE: LuogoBase[] = [
  { id: "orta-san-giulio", nome: "Orta San Giulio", comuneOmi: "orta-san-giulio", mondo: "est", lat: 45.798, lon: 8.4059, in: std("Orta San Giulio") },
  { id: "legro", nome: "Legro", frazioneDi: "Orta San Giulio", comuneOmi: "orta-san-giulio", mondo: "est", lat: 45.7956, lon: 8.4217, in: std("Legro") },
  { id: "pettenasco", nome: "Pettenasco", comuneOmi: "pettenasco", mondo: "est", lat: 45.8172, lon: 8.4087, in: std("Pettenasco") },
  { id: "vacciago", nome: "Vacciago", frazioneDi: "Ameno", comuneOmi: "ameno", mondo: "colline", lat: 45.7864, lon: 8.4294, in: std("Vacciago") },
  { id: "ameno", nome: "Ameno", comuneOmi: "ameno", mondo: "colline", lat: 45.7887, lon: 8.4413, in: std("Ameno", "ad Ameno") },
  { id: "miasino", nome: "Miasino", comuneOmi: "miasino", mondo: "colline", lat: 45.802, lon: 8.4297, in: std("Miasino") },
  { id: "armeno", nome: "Armeno", comuneOmi: "armeno", mondo: "colline", lat: 45.8225, lon: 8.4392, in: std("Armeno", "ad Armeno") },
  { id: "omegna", nome: "Omegna", comuneOmi: "omegna", mondo: "capi", lat: 45.8798, lon: 8.408, in: std("Omegna", "a Omegna") },
  { id: "nonio", nome: "Nonio", comuneOmi: "nonio", mondo: "capi", lat: 45.8458, lon: 8.3775, in: std("Nonio") },
  { id: "quarna-sopra", nome: "Quarna Sopra", comuneOmi: "quarna-sopra", mondo: "capi", lat: 45.8722, lon: 8.3737, in: std("Quarna Sopra") },
  { id: "ronco", nome: "Ronco", frazioneDi: "Pella", comuneOmi: "pella", mondo: "ovest", lat: 45.8271, lon: 8.3819, in: std("Ronco") },
  { id: "pella", nome: "Pella", comuneOmi: "pella", mondo: "ovest", lat: 45.8016, lon: 8.3848, in: std("Pella") },
  { id: "madonna-del-sasso", nome: "Madonna del Sasso", comuneOmi: "madonna-del-sasso", mondo: "ovest", lat: 45.7924, lon: 8.3684, in: std("Madonna del Sasso") },
  { id: "san-maurizio-dopaglio", nome: "San Maurizio d'Opaglio", comuneOmi: "san-maurizio-dopaglio", mondo: "ovest", lat: 45.7735, lon: 8.3904, in: std("San Maurizio d'Opaglio") },
  { id: "gozzano", nome: "Gozzano", comuneOmi: "gozzano", mondo: "capi", lat: 45.7465, lon: 8.4361, in: std("Gozzano") },
  { id: "bolzano-novarese", nome: "Bolzano Novarese", comuneOmi: "bolzano-novarese", mondo: "capi", lat: 45.7628, lon: 8.4452, in: std("Bolzano Novarese") },
];

export const luogoBase = (id: string) => LUOGHI_BASE.find((l) => l.id === id)!;

export const COLORE_MONDO: Record<MondoId, { notte: string; carta: string }> = {
  est: { notte: "var(--mondo-est)", carta: "var(--mondo-est-carta)" },
  ovest: { notte: "var(--mondo-ovest)", carta: "var(--mondo-ovest-carta)" },
  colline: { notte: "var(--mondo-colline)", carta: "var(--mondo-colline-carta)" },
  capi: { notte: "var(--mondo-capi)", carta: "var(--mondo-capi-carta)" },
};
