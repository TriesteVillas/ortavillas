// La mappa del bacino: un rilievo ombreggiato in proiezione Web Mercator, zoom 13,
// ritagliato a un bbox fisso (generato da ~/dev/.wt/ortavillas/rilievo/rilievo.py dalle
// tessere Terrarium). Ogni coordinata del sito si posa sull'immagine passando da qui:
// cambiare il bbox nello script senza cambiare queste costanti sposta tutti i punti.

export const RILIEVO = {
  src: "/geo/rilievo-scuro.webp",
  srcPiccolo: "/geo/rilievo-scuro-728.webp",
  w: 1456,
  h: 2216,
  z: 13,
  origine: [4284.188444444445, 2915.546636102477] as const,
};

/** lat/lon → pixel sull'immagine del rilievo (0..w, 0..h). */
export function proietta(lat: number, lon: number): { x: number; y: number } {
  const n = 2 ** RILIEVO.z;
  const tx = ((lon + 180) / 360) * n;
  const ty = ((1 - Math.asinh(Math.tan((lat * Math.PI) / 180)) / Math.PI) / 2) * n;
  return { x: (tx - RILIEVO.origine[0]) * 256, y: (ty - RILIEVO.origine[1]) * 256 };
}

/** Stessa cosa in percentuale, per posizionare in CSS su un contenitore che scala. */
export function percento(lat: number, lon: number): { left: string; top: string } {
  const { x, y } = proietta(lat, lon);
  return { left: `${((x / RILIEVO.w) * 100).toFixed(3)}%`, top: `${((y / RILIEVO.h) * 100).toFixed(3)}%` };
}
