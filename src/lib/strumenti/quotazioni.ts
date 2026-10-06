// Tipi e funzioni pure sulle quotazioni OMI (usabili anche nel browser).
export type Tipologia = "civili" | "economiche" | "ville";
export const TIPOLOGIE: Tipologia[] = ["ville", "civili", "economiche"];

export type ZonaQ = { codice: string; fascia: string; descr: string; q: Partial<Record<Tipologia, [number, number]>> };
export type ComuneQ = { id: string; nome: string; prov: string; zone: ZonaQ[] };

/** Il campo di variazione di una tipologia in un comune: minimo dei minimi, massimo dei massimi, zona più cara. */
export function intervallo(c: ComuneQ, t: Tipologia): { min: number; max: number; zonaCara: string; zone: number } | null {
  const zs = c.zone.filter((z) => z.q[t]);
  if (!zs.length) return null;
  const min = Math.min(...zs.map((z) => z.q[t]![0]));
  const cara = zs.reduce((a, b) => (b.q[t]![1] > a.q[t]![1] ? b : a));
  return { min, max: cara.q[t]![1], zonaCara: cara.codice, zone: zs.length };
}
