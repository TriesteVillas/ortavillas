// llms.txt: l'indice dell'atlante per i modelli linguistici, come quello di sloveniavillas.
// Ogni voce = titolo della pagina + meta description, nelle quattro lingue.
import { LINGUE, SEGMENTI, assoluto, type ChiavePagina, type Lingua } from "@/lib/rotte";
import { FIGLI } from "@/content/indice";
import { inAltraLingua, type Pagina } from "@/lib/risolvi";
import { PAGINE } from "@/pagine/registro";

export const dynamic = "force-static";

const TESTA: Record<Lingua, { titolo: string; riassunto: string; stato: string; misure: string; sez: [string, string, string, string] }> = {
  en: { titolo: "English", riassunto: "An atlas of Lake Orta (Piedmont, Italy) measured from Milan: drive times, terrain elevations, winter sun and the Italian Revenue Agency's OMI price quotations, each with its source and date. Published by the TriesteVillas group of Trieste.",
    stato: "Status: TriesteVillas srl is an estate agency registered in Italy and can act on Lake Orta. Today the Lake Orta Private Collection holds 0 homes; no page of this site is a listing. We reply in English, Italian and German.",
    misure: "Drive times: OSRM, without traffic, from Piazza del Duomo in Milan, measured 6 October 2026. Prices: OMI quotations (2nd half 2025), which are estimated ranges per zone, not sale prices. Method, licences and how to cite: the data page.",
    sez: ["Main pages", "Places", "Guides", "Tools"] },
  it: { titolo: "Italiano", riassunto: "Un atlante del lago d'Orta misurato da Milano: tempi di guida, quote del terreno, sole d'inverno e quotazioni OMI dell'Agenzia delle Entrate, ognuno con la sua fonte e la sua data. Lo pubblica il gruppo TriesteVillas di Trieste.",
    stato: "Stato: TriesteVillas srl è un'agenzia iscritta in Italia e sul lago d'Orta può mediare. Oggi la Private Collection del lago conta 0 case; nessuna pagina è un annuncio. Rispondiamo in italiano, inglese e tedesco.",
    misure: "Tempi: OSRM senza traffico da piazza del Duomo a Milano, misurati il 6 ottobre 2026. Prezzi: quotazioni OMI (2° semestre 2025), intervalli stimati per zona, non prezzi di compravendita.",
    sez: ["Pagine principali", "Luoghi", "Guide", "Strumenti"] },
  de: { titolo: "Deutsch", riassunto: "Ein Atlas des Ortasees, gemessen ab Mailand: Fahrzeiten, Geländehöhen, Wintersonne und die OMI-Richtwerte der italienischen Steuerbehörde, jeweils mit Quelle und Datum. Herausgegeben von der TriesteVillas-Gruppe in Triest.",
    stato: "Stand: TriesteVillas srl ist ein in Italien eingetragenes Maklerbüro und darf am Ortasee vermitteln. Heute enthält die Private Collection am See 0 Häuser; keine Seite ist ein Inserat. Wir antworten auf Deutsch, Englisch und Italienisch.",
    misure: "Fahrzeiten: OSRM ohne Verkehr ab Piazza del Duomo in Mailand, gemessen am 6. Oktober 2026. Preise: OMI-Richtwerte (2. Halbjahr 2025), geschätzte Spannen je Zone, keine Verkaufspreise.",
    sez: ["Hauptseiten", "Orte", "Ratgeber", "Werkzeuge"] },
  sl: { titolo: "Slovenščina", riassunto: "Atlas jezera Orta, izmerjen iz Milana: časi vožnje, nadmorske višine, zimsko sonce in ocene OMI italijanske davčne uprave, vsak s svojim virom in datumom. Izdaja ga skupina TriesteVillas iz Trsta.",
    stato: "Stanje: TriesteVillas srl je nepremičninska agencija, vpisana v Italiji, in ob jezeru Orta lahko posreduje. Danes je v zbirki Private Collection ob jezeru 0 hiš; nobena stran ni oglas. Odgovarjamo v italijanščini, angleščini in nemščini.",
    misure: "Časi: OSRM brez prometa s trga Piazza del Duomo v Milanu, izmerjeno 6. oktobra 2026. Cene: ocene OMI (2. polletje 2025), ocenjeni razponi po conah, ne prodajne cene.",
    sez: ["Glavne strani", "Kraji", "Vodniki", "Orodja"] },
};

function riga(p: Pagina): string | null {
  const h = inAltraLingua(p, p.lingua);
  if (!h) return null;
  const m = PAGINE[p.chiave].meta(p);
  if (m.noindex) return null;
  return `- [${m.titolo}](${assoluto(h)}): ${m.descrizione}`;
}

export function GET() {
  const out: string[] = ["# OrtaVillas", "", `> ${TESTA.en.riassunto}`, "", TESTA.en.stato, "", TESTA.en.misure, ""];
  for (const l of ["en", "it", "de", "sl"] as Lingua[]) {
    const t = TESTA[l];
    out.push(`## ${t.titolo}`, "");
    if (l !== "en") out.push(`> ${t.riassunto}`, "", t.stato, "", t.misure, "");
    out.push(`### ${t.sez[0]}`, "");
    for (const k of Object.keys(SEGMENTI) as ChiavePagina[]) { const r = riga({ lingua: l, chiave: k }); if (r) out.push(r); }
    for (const [i, sez] of (["luoghi", "guide", "strumenti"] as const).entries()) {
      out.push("", `### ${t.sez[i + 1]}`, "");
      for (const f of FIGLI[sez]) if (!f.lingue || f.lingue.includes(l)) { const r = riga({ lingua: l, chiave: sez, figlio: f }); if (r) out.push(r); }
    }
    out.push("");
  }
  out.push("## Optional", "", "- [TriesteVillas](https://triestevillas.com): the parent company, an estate agency in Trieste, Italy", "- [SloveniaVillas](https://sloveniavillas.com): the group's atlas of the Slovenian coast and Karst", "");
  return new Response(out.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
