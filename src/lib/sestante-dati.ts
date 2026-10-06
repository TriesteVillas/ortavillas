// I dati dei sedici luoghi per il Sestante, calcolati lato server dalle misure.
import { LUOGHI } from "./luoghi";
import { minuti, omiComune } from "./dati";
import { ORIGINI_ID, type OrigineId } from "@/content/indice";
import type { DatiLuogo } from "./sestante";

/** Le frazioni (Legro, Ronco, Vacciago) non hanno un conteggio ISTAT proprio: contano come paese piccolo. */
export const ABITANTI_FRAZIONE = 200;

export function datiSestante(): DatiLuogo[] {
  return LUOGHI.map((l) => {
    const c = omiComune(l.comuneOmi);
    const omiMax = c?.sintesi_2025_2.ville_villini_zona_piu_cara?.[1] ?? c?.sintesi_2025_2.intervallo_residenziale_eur_m2[1] ?? 0;
    return {
      id: l.id, mondo: l.mondo, sopraLago: l.sopraLago, omiMax, soleMin: l.soleDic?.minuti ?? 0,
      abitanti: l.abitanti ?? ABITANTI_FRAZIONE, stazioneKm: l.stazione?.km ?? 9, imbarcaderoKm: l.imbarcadero?.km ?? 9,
      malpensa: l.daMalpensa,
      tempi: Object.fromEntries(ORIGINI_ID.map((o) => [o, minuti(o, l.id)])) as Record<OrigineId, number>,
    };
  });
}
