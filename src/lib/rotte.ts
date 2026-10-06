// Le rotte del sito, in quattro lingue. UNA tabella: il routing, gli hreflang, la sitemap,
// il selettore lingua e llms.txt leggono tutti da qui. Una pagina che non è qui non esiste.
//
// La radice è italiana (come la v1 statica di ortavillas.com, già indicizzata così);
// en/de/sl stanno sotto il loro prefisso. Gli slug sono tradotti, come su sloveniavillas.com.

export const LINGUE = ["it", "en", "de", "sl"] as const;
export type Lingua = (typeof LINGUE)[number];

export const PREFISSO: Record<Lingua, string> = { it: "", en: "/en", de: "/de", sl: "/sl" };

/** Chiave di pagina → segmento (senza prefisso lingua) per ogni lingua. */
export const SEGMENTI = {
  home: { it: "", en: "", de: "", sl: "" },
  luoghi: { it: "luoghi", en: "places", de: "orte", sl: "kraji" },
  distanze: { it: "distanze", en: "distances", de: "entfernungen", sl: "razdalje" },
  guide: { it: "guide", en: "guides", de: "ratgeber", sl: "vodniki" },
  strumenti: { it: "strumenti", en: "tools", de: "werkzeuge", sl: "orodja" },
  proprietari: { it: "proprietari", en: "owners", de: "eigentuemer", sl: "za-lastnike" },
  agenzie: { it: "agenzie", en: "agencies", de: "fuer-makler", sl: "za-agencije" },
  pc: { it: "private-collection", en: "private-collection", de: "private-collection", sl: "private-collection" },
  chiSiamo: { it: "chi-siamo", en: "about", de: "ueber-uns", sl: "o-nas" },
  contatti: { it: "contatti", en: "contact", de: "kontakt", sl: "kontakt" },
  ai: { it: "ai", en: "ai", de: "ki", sl: "ui" },
  dati: { it: "dati", en: "data", de: "daten", sl: "podatki" },
  privacy: { it: "privacy", en: "privacy", de: "datenschutz", sl: "zasebnost" },
  noteLegali: { it: "note-legali", en: "imprint", de: "impressum", sl: "pravno-obvestilo" },
  cookie: { it: "cookie", en: "cookies", de: "cookies", sl: "piskotki" },
} as const satisfies Record<string, Record<Lingua, string>>;

export type ChiavePagina = keyof typeof SEGMENTI;

/** Il segmento «grazie» dopo un modulo inviato. */
export const GRAZIE: Record<Lingua, string> = { it: "grazie", en: "thanks", de: "danke", sl: "hvala" };

/** Le sezioni con figli (luoghi/<slug>, guide/<slug>, strumenti/<slug>). */
export type Sezione = "luoghi" | "guide" | "strumenti";

export function percorso(l: Lingua, chiave: ChiavePagina, figlio?: string): string {
  const seg = SEGMENTI[chiave][l];
  const parti = [PREFISSO[l], seg, figlio].filter(Boolean).join("/").replace(/\/+/g, "/");
  const p = parti.startsWith("/") ? parti : "/" + parti;
  return p === "" ? "/" : p;
}

export const DOMINIO = "https://ortavillas.com";
export const assoluto = (p: string) => DOMINIO + (p === "/" ? "" : p);

export const NOME_LINGUA: Record<Lingua, string> = {
  it: "Italiano", en: "English", de: "Deutsch", sl: "Slovenščina",
};
export const HTML_LANG: Record<Lingua, string> = { it: "it", en: "en", de: "de", sl: "sl" };
export const OG_LOCALE: Record<Lingua, string> = { it: "it_IT", en: "en_GB", de: "de_DE", sl: "sl_SI" };
export const INTL: Record<Lingua, string> = { it: "it-IT", en: "en-GB", de: "de-DE", sl: "sl-SI" };
