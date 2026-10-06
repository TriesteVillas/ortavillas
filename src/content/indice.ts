// L'indice dell'atlante: chi esiste e con quale slug in ogni lingua. I contenuti stanno
// altrove (luoghi.ts, guide/, strumenti/): qui solo l'identità, perché routing, sitemap,
// menu e colophon contino dalla stessa lista e non da un numero scritto a mano.
import type { Lingua } from "@/lib/rotte";

export type Slug = Record<Lingua, string>;
export type Figlio = { id: string; slug: Slug; tipo?: "mondo" | "luogo"; lingue?: Lingua[] };

const ugual = (s: string): Slug => ({ it: s, en: s, de: s, sl: s });

export const MONDI_ID = ["est", "ovest", "colline", "capi"] as const;
export type MondoId = (typeof MONDI_ID)[number];

export const MONDI_SLUG: Record<MondoId, Slug> = {
  est: { it: "sponda-est", en: "east-shore", de: "ostufer", sl: "vzhodna-obala" },
  ovest: { it: "sponda-ovest", en: "west-shore", de: "westufer", sl: "zahodna-obala" },
  colline: { it: "colline-del-mottarone", en: "mottarone-hills", de: "mottarone-huegel", sl: "griciji-mottarone" },
  capi: { it: "capi-del-lago", en: "lake-ends", de: "seeenden", sl: "konca-jezera" },
};

/** I sedici luoghi, nell'ordine geografico (da Orta in senso orario). */
export const LUOGHI_ID = [
  "orta-san-giulio", "legro", "pettenasco", "vacciago", "ameno", "miasino", "armeno",
  "omegna", "nonio", "quarna-sopra", "ronco", "pella", "madonna-del-sasso", "san-maurizio-dopaglio",
  "gozzano", "bolzano-novarese",
] as const;
export type LuogoId = (typeof LUOGHI_ID)[number];

export const LUOGHI_SLUG: Record<LuogoId, Slug> = {
  "orta-san-giulio": ugual("orta-san-giulio"),
  legro: ugual("legro"),
  pettenasco: ugual("pettenasco"),
  vacciago: ugual("vacciago"),
  ameno: ugual("ameno"),
  miasino: ugual("miasino"),
  armeno: ugual("armeno"),
  omegna: ugual("omegna"),
  nonio: ugual("nonio"),
  "quarna-sopra": ugual("quarna-sopra"),
  ronco: ugual("ronco"),
  pella: ugual("pella"),
  "madonna-del-sasso": ugual("madonna-del-sasso"),
  "san-maurizio-dopaglio": ugual("san-maurizio-dopaglio"),
  gozzano: ugual("gozzano"),
  "bolzano-novarese": ugual("bolzano-novarese"),
};

export const GUIDE_ID = ["comprare", "costi", "est-ovest", "orta-maggiore", "arrivare", "quotazioni", "affitti"] as const;
export type GuidaId = (typeof GUIDE_ID)[number];
export const GUIDE_SLUG: Record<GuidaId, Slug> = {
  comprare: { it: "comprare-casa-in-italia", en: "buying-property-in-italy", de: "immobilienkauf-in-italien", sl: "nakup-nepremicnine-v-italiji" },
  costi: { it: "costi-di-acquisto-a-confronto", en: "purchase-costs-compared", de: "kaufnebenkosten-im-vergleich", sl: "stroski-nakupa-primerjava" },
  "est-ovest": { it: "sponda-est-o-sponda-ovest", en: "east-or-west-shore", de: "ostufer-oder-westufer", sl: "vzhodna-ali-zahodna-obala" },
  "orta-maggiore": { it: "orta-o-maggiore", en: "orta-or-maggiore", de: "orta-oder-lago-maggiore", sl: "orta-ali-lago-maggiore" },
  arrivare: { it: "come-arrivare", en: "getting-here", de: "anreise-und-flughaefen", sl: "prihod-in-letalisca" },
  quotazioni: { it: "quotazioni-omi-del-lago", en: "lake-orta-property-prices", de: "immobilienpreise-ortasee", sl: "cene-nepremicnin-ob-jezeru" },
  affitti: { it: "affittare-la-casa-sul-lago", en: "renting-out-your-lake-home", de: "ferienvermietung-am-see", sl: "oddajanje-hise-ob-jezeru" },
};

export const STRUMENTI_ID = ["costi", "budget", "trova", "netto", "valore", "catasto", "documenti"] as const;
export type StrumentoId = (typeof STRUMENTI_ID)[number];
export const STRUMENTI_SLUG: Record<StrumentoId, Slug> = {
  costi: { it: "calcolatore-costi-acquisto", en: "purchase-cost-calculator", de: "kaufnebenkosten-rechner", sl: "kalkulator-stroskov-nakupa" },
  budget: { it: "cosa-compra-il-vostro-budget", en: "what-your-budget-buys", de: "was-ihr-budget-kauft", sl: "kaj-kupite-s-proracunom" },
  trova: { it: "trova-il-vostro-lago", en: "find-your-lake", de: "ihren-see-finden", sl: "najdite-svoje-jezero" },
  netto: { it: "netto-dalla-vendita", en: "seller-net-proceeds", de: "verkaufserloes-netto", sl: "neto-izkupicek-prodaje" },
  valore: { it: "quanto-vale-casa-tua", en: "what-is-my-home-worth", de: "was-ist-mein-haus-wert", sl: "koliko-je-vredna-vasa-hisa" },
  catasto: { it: "dalla-rendita-catastale-al-mercato", en: "from-cadastral-value-to-market", de: "vom-katasterwert-zum-markt", sl: "od-katastrske-vrednosti-do-trga" },
  documenti: { it: "documenti-per-vendere", en: "documents-to-sell-in-italy", de: "unterlagen-verkauf-italien", sl: "dokumenti-za-prodajo-v-italiji" },
};

export const ORIGINI_ID = ["milano", "malpensa", "linate", "novara", "torino", "lugano", "zurigo", "basilea", "berna", "ginevra", "monaco"] as const;
export type OrigineId = (typeof ORIGINI_ID)[number];
/** id nostro → id nei dati OSRM (tempi.json). */
export const ORIGINE_DATI: Record<OrigineId, string> = {
  milano: "milano-duomo", malpensa: "malpensa-t1", linate: "linate", novara: "novara", torino: "torino",
  lugano: "lugano", zurigo: "zuerich", basilea: "basel", berna: "bern", ginevra: "geneve", monaco: "muenchen",
};
export const ORIGINI_SLUG: Record<OrigineId, Slug> = {
  milano: { it: "milano", en: "milan", de: "mailand", sl: "milano" },
  malpensa: ugual("malpensa"),
  linate: ugual("linate"),
  novara: ugual("novara"),
  torino: { it: "torino", en: "turin", de: "turin", sl: "torino" },
  lugano: ugual("lugano"),
  zurigo: { it: "zurigo", en: "zurich", de: "zuerich", sl: "zurich" },
  basilea: { it: "basilea", en: "basel", de: "basel", sl: "basel" },
  berna: { it: "berna", en: "bern", de: "bern", sl: "bern" },
  ginevra: { it: "ginevra", en: "geneva", de: "genf", sl: "zeneva" },
  monaco: { it: "monaco-di-baviera", en: "munich", de: "muenchen", sl: "munchen" },
};

export const FIGLI: Record<"luoghi" | "guide" | "strumenti" | "distanze", Figlio[]> = {
  luoghi: [
    ...MONDI_ID.map((id) => ({ id, slug: MONDI_SLUG[id], tipo: "mondo" as const })),
    ...LUOGHI_ID.map((id) => ({ id, slug: LUOGHI_SLUG[id], tipo: "luogo" as const })),
  ],
  guide: GUIDE_ID.map((id) => ({ id, slug: GUIDE_SLUG[id] })),
  strumenti: STRUMENTI_ID.map((id) => ({ id, slug: STRUMENTI_SLUG[id] })),
  distanze: ORIGINI_ID.map((id) => ({ id, slug: ORIGINI_SLUG[id] })),
};
