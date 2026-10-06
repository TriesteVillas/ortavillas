// Le quotazioni OMI in forma compatta, per i calcolatori (props serializzabili) e per le
// tabelle statiche. Solo lato server: legge src/lib/dati.ts.
import { OMI_COMUNI, OMI_META } from "@/lib/dati";

import type { ComuneQ, Tipologia, ZonaQ } from "./quotazioni";
export * from "./quotazioni";
const DA_OMI: Record<string, Tipologia> = { "Abitazioni civili": "civili", "Abitazioni di tipo economico": "economiche", "Ville e Villini": "ville" };

const nomeBello = (s: string) => s.replace("Madonna Del Sasso", "Madonna del Sasso");

export function comuniOmi(): ComuneQ[] {
  return OMI_COMUNI.map((c) => ({
    id: c.id_comune,
    nome: nomeBello(c.comune),
    prov: c.provincia,
    zone: c.zone
      .map((z) => {
        const q: ZonaQ["q"] = {};
        for (const x of z.quotazioni_2025_2) { const t = DA_OMI[x.tipologia]; if (t) q[t] = [x.eur_m2_min, x.eur_m2_max]; }
        return { codice: z.zona_omi, fascia: z.fascia, descr: z.descrizione, q };
      })
      .filter((z) => Object.keys(z.q).length > 0),
  })).sort((a, b) => a.nome.localeCompare(b.nome, "it"));
}

export const OMI_SEMESTRE = "2025/2";
export const OMI_ESTRATTO = String(OMI_META.estratto_il ?? "2026-10-06");
