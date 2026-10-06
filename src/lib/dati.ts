// Accesso tipizzato ai dati misurati (src/data/*.json, generati il 6 ottobre 2026: vedi FONTI
// in /dati). Le pagine non leggono mai il JSON direttamente: passano da qui.
import tempiJson from "@/data/tempi.json";
import prezziJson from "@/data/prezzi.json";
import { ORIGINE_DATI, type LuogoId, type OrigineId } from "@/content/indice";

type Tratto = { ref: string | null; nome: string; km: number };
type RigaTempo = { da: string; a: string; minuti: number; km: number; sintesi_osrm?: string; strade_principali?: Tratto[]; uscite?: unknown[] };
const T = tempiJson as unknown as {
  _meta: { misurato_il: string };
  origini: { id: string; nome: string; lat: number; lon: number }[];
  luoghi: { id: string; nome: string; lat: number; lon: number }[];
  tempi: RigaTempo[];
  confronto_laghi: { da: string; a: string; nome: string; lat: number; lon: number; minuti: number; km: number }[];
  percorsi_verso_orta: Record<string, { geometria_semplificata: [number, number][] }>;
};

export const MISURATO_IL = T._meta.misurato_il; // "2026-10-06"

const indiceTempi = new Map<string, RigaTempo>();
for (const r of T.tempi) indiceTempi.set(`${r.da}>${r.a}`, r);

export function tempoDa(o: OrigineId, luogo: LuogoId): RigaTempo | undefined {
  return indiceTempi.get(`${ORIGINE_DATI[o]}>${luogo}`);
}
export function minuti(o: OrigineId, luogo: LuogoId): number {
  return tempoDa(o, luogo)?.minuti ?? NaN;
}
export function puntoOrigine(o: OrigineId) {
  return T.origini.find((x) => x.id === ORIGINE_DATI[o])!;
}
export function puntoLuogoOsrm(id: LuogoId) {
  return T.luoghi.find((x) => x.id === id);
}
export function percorso(o: OrigineId): [number, number][] {
  return T.percorsi_verso_orta[ORIGINE_DATI[o]]?.geometria_semplificata ?? [];
}
export function confrontoLaghi(o: "milano" | "malpensa") {
  return T.confronto_laghi.filter((r) => r.da === ORIGINE_DATI[o]);
}

// ── prezzi OMI ────────────────────────────────────────────────────────────
export type QuotazioneOmi = {
  tipologia: string; stato: string; eur_m2_min: number; eur_m2_max: number;
  affitto_eur_m2_mese_min?: number; affitto_eur_m2_mese_max?: number; variazione_centro_intervallo_vs_2024_2_pct?: number | null;
};
export type ZonaOmi = { zona_omi: string; fascia: string; descrizione: string; quotazioni_2025_2: QuotazioneOmi[] };
export type ComuneOmi = {
  id_comune: string; comune: string; provincia: string;
  sintesi_2025_2: { intervallo_residenziale_eur_m2: [number, number]; abitazioni_civili_zona_piu_cara?: [number, number, string, string]; ville_villini_zona_piu_cara?: [number, number, string, string] };
  zone: ZonaOmi[];
};
const P = prezziJson as unknown as { _meta: Record<string, unknown>; comuni: ComuneOmi[]; compravendite_provinciali: { righe: Record<string, unknown>[]; fonte: string } };
export const OMI_META = P._meta;
export const OMI_COMUNI = P.comuni;
export const NTN = P.compravendite_provinciali;
export function omiComune(id: string): ComuneOmi | undefined {
  return P.comuni.find((c) => c.id_comune === id);
}
