// Il modello di una guida. Una guida = un oggetto per lingua; le fonti stanno a parte
// (fonti.ts), uguali in tutte le lingue, perché i rimandi [^n] puntino allo stesso numero.
//
// Markup ammesso nelle stringhe (renderizzato da components/guide/Inline.tsx):
//   **grassetto**   [testo](url o /percorso)   [^3] = rimando alla fonte n. 3
import type { GuidaId } from "@/content/indice";

export type Tabella = {
  testa: string[];
  righe: string[][];
  /** indici delle colonne numeriche (allineate a destra) */
  num?: number[];
  didascalia?: string;
};

export type Blocco =
  | string
  | { lista: string[]; numerata?: boolean }
  | { tabella: Tabella }
  | { nota: string }
  | { h3: string };

export type Sezione = { id: string; h2: string; blocchi: Blocco[] };

export type Guida = {
  /** <title> SEO */
  titolo: string;
  /** meta description */
  descrizione: string;
  occhiello: string;
  h1: string;
  lead: string;
  inBreve: string[];
  sezioni: Sezione[];
  nonSappiamo: string[];
  faq: { d: string; r: string }[];
};

export type Fonte = {
  /** «Editore: titolo, edizione» nella lingua originale del documento */
  etichetta: string;
  url: string;
  /** data di lettura (ISO); se manca vale 2026-10-06 */
  letta?: string;
  /** giornale, sito di settore, enciclopedia */
  secondaria?: boolean;
  /** vista solo nella sintesi di una ricerca, il documento non è stato aperto per intero */
  parziale?: boolean;
};

export type Pubblico = "compra" | "vende";
export type SchedaGuida = { id: GuidaId; pubblico: Pubblico; principale?: boolean };
