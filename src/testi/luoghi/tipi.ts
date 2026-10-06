import type { Lingua } from "@/lib/rotte";

export type Fonte = { titolo: string; url: string; data: string };
export type Faq = { d: string; r: string };
export type Sezione = { titolo: string; testo: string };

/** I testi di un luogo. Numeri solo da src/data (luoghi.json, tempi, prezzi) o da fatti.md, con la fonte in `fonti`. */
export type TestiLuogo = {
  titolo: string;        // <title>, ~60 caratteri, descrittivo per la ricerca
  descrizione: string;   // meta description, ~155 caratteri
  frase: string;         // «In una frase»
  vivere: Sezione[];     // 4–5 sezioni «Vivere a …»: storia e identità; il paese e i dintorni; vita di ogni giorno (servizi, scuole, limiti); che cosa si compra e a che prezzo (OMI); come si arriva
  perChi: { si: string[]; no: string[] };
  faq: Faq[];            // 4–6
  fonti: Fonte[];
};

export type TestiMondoPagina = {
  titolo: string; descrizione: string; h1: string;
  minuto: string;              // «In un minuto»
  vivere: Sezione[];           // 4–5 sezioni «Come si vive»
  perChi: { si: string[]; no: string[] };
  confronto: { titolo: string; altro: string; righe: [string, string, string][] }; // voce | questo mondo | l'altro
  faq: Faq[];
  fonti: Fonte[];
};

export type PerLingua<T> = Record<Lingua, T>;
