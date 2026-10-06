// Le voci della lista di controllo di chi vende: fase e fonti. I testi stanno in
// src/testi/strumenti/documenti.ts. Una voce è «verificata» solo se tutte le sue fonti lo sono.
import { FONTI, type FonteId } from "./regole";

export type Fase = "prima" | "compromesso" | "rogito";
export type VoceDoc = { id: string; fase: Fase; fonti: FonteId[] };

export const VOCI_DOC: VoceDoc[] = [
  { id: "visura", fase: "prima", fonti: ["adeConsultazione"] },
  { id: "planimetria", fase: "prima", fonti: ["adeConsultazione"] },
  { id: "conformitaCatastale", fase: "prima", fonti: ["adeGuida"] },
  { id: "urbanistica", fase: "prima", fonti: ["dpr380"] },
  { id: "agibilita", fase: "prima", fonti: ["dpr380"] },
  { id: "ape", fase: "prima", fonti: ["sipee", "apeSanzione"] },
  { id: "provenienza", fase: "compromesso", fonti: ["adeConsultazione"] },
  { id: "ipoteche", fase: "compromesso", fonti: ["adeConsultazione"] },
  { id: "impianti", fase: "compromesso", fonti: ["dm37"] },
  { id: "condominio", fase: "compromesso", fonti: ["condominio"] },
  { id: "affitti", fase: "compromesso", fonti: ["cin"] },
  { id: "identita", fase: "rogito", fonti: ["codiceFiscale"] },
  { id: "plusvalenza", fase: "rogito", fonti: ["plusvalenza"] },
];
export const FASI: Fase[] = ["prima", "compromesso", "rogito"];
export const voceVerificata = (v: VoceDoc) => v.fonti.every((f) => FONTI[f].verificato);
export const CHIAVE_DOC = "ov-documenti-vendita";
