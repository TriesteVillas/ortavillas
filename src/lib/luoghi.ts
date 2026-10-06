// I luoghi completi: identità (content/luoghi-base) + misure (data/luoghi.json, 6 ottobre 2026).
import luoghiJson from "@/data/luoghi.json";
import { LUOGHI_BASE, type LuogoBase } from "@/content/luoghi-base";
import type { LuogoId, MondoId } from "@/content/indice";
import { minuti } from "./dati";

type Grezzo = {
  id: string;
  quota_m: { punto_copernicus_glo90: number; sopra_il_lago_m?: number; terrain_tiles_400m?: { min: number; mediana: number; max: number } };
  distanza_riva_m: { valore: number };
  popolazione?: { al_1_gennaio_2025?: number | null } | null;
  superficie_comune_km2?: { valore: number } | null;
  carattere?: { testo: string; fonte: string; consultato: string }[];
  servizi: {
    stazione_piu_vicina: { nome: string; distanza_linea_aria_km: number }[];
    imbarcadero_piu_vicino: { nome: string; distanza_linea_aria_km: number }[];
    scuole_statali_nel_comune?: { grado: string; nome: string; codice: string }[];
  };
  rischi_ispra_comune?: { frane_popolazione_p3p4_pct?: number; idraulica_popolazione_p2_pct?: number; frane_area_p3p4_pct?: number; idraulica_area_p2_pct?: number } | null;
  sole?: { "21_dicembre"?: { minuti_sole_diretto_terreno: number; minuti_sole_orizzonte_piatto: number; primo_sole_ora_locale: string; ultimo_sole_ora_locale: string }; "21_giugno"?: { minuti_sole_diretto_terreno: number } } | null;
  limiti?: string[];
};
const D = luoghiJson as unknown as { luoghi: Grezzo[]; mondi: { id: string; perche: string }[] };

export type Luogo = LuogoBase & {
  quota: number;
  sopraLago: number;
  quotaMin?: number;
  quotaMax?: number;
  riva: number;
  abitanti: number | null;
  stazione: { nome: string; km: number } | null;
  imbarcadero: { nome: string; km: number } | null;
  scuole: string[];
  frane: number | null;
  alluvioni: number | null;
  soleDic: { minuti: number; teorici: number; primo: string; ultimo: string } | null;
  carattere: { testo: string; fonte: string }[];
  limiti: string[];
  daMilano: number;
  daMalpensa: number;
};

const MAPPA_MONDO: Record<string, MondoId> = { "sponda-est": "est", "sponda-ovest": "ovest", "colline-mottarone": "colline", "teste-del-lago": "capi" };

export const LUOGHI: Luogo[] = LUOGHI_BASE.map((b) => {
  const g = D.luoghi.find((x) => x.id === b.id)!;
  const sole = g.sole?.["21_dicembre"];
  return {
    ...b,
    quota: Math.round(g.quota_m.punto_copernicus_glo90),
    sopraLago: g.quota_m.sopra_il_lago_m ?? Math.round(g.quota_m.punto_copernicus_glo90 - 290),
    quotaMin: g.quota_m.terrain_tiles_400m?.min,
    quotaMax: g.quota_m.terrain_tiles_400m?.max,
    riva: g.distanza_riva_m.valore,
    abitanti: g.popolazione?.al_1_gennaio_2025 ?? null,
    stazione: g.servizi.stazione_piu_vicina[0] ? { nome: g.servizi.stazione_piu_vicina[0].nome, km: g.servizi.stazione_piu_vicina[0].distanza_linea_aria_km } : null,
    imbarcadero: g.servizi.imbarcadero_piu_vicino[0] ? { nome: g.servizi.imbarcadero_piu_vicino[0].nome, km: g.servizi.imbarcadero_piu_vicino[0].distanza_linea_aria_km } : null,
    scuole: (g.servizi.scuole_statali_nel_comune ?? []).map((s) => s.grado),
    frane: g.rischi_ispra_comune?.frane_popolazione_p3p4_pct ?? null,
    alluvioni: g.rischi_ispra_comune?.idraulica_popolazione_p2_pct ?? null,
    soleDic: sole ? { minuti: sole.minuti_sole_diretto_terreno, teorici: sole.minuti_sole_orizzonte_piatto, primo: sole.primo_sole_ora_locale, ultimo: sole.ultimo_sole_ora_locale } : null,
    carattere: (g.carattere ?? []).map((c) => ({ testo: c.testo, fonte: c.fonte })),
    limiti: g.limiti ?? [],
    daMilano: minuti("milano", b.id),
    daMalpensa: minuti("malpensa", b.id),
  };
});

export const luogo = (id: string) => LUOGHI.find((l) => l.id === id);
export const luoghiDelMondo = (m: MondoId) => LUOGHI.filter((l) => l.mondo === m);
export const perTempo = (lista = LUOGHI) => [...lista].sort((a, b) => a.daMilano - b.daMilano);
export const percheMondo = (m: MondoId) => D.mondi.find((x) => MAPPA_MONDO[x.id] === m)?.perche ?? "";
export type { LuogoId };
