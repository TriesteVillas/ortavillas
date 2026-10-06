// Testi comuni alle pagine strumento (template, indice, CTA, avvertenza) in quattro lingue.
import type { Lingua } from "@/lib/rotte";

const MESI: Record<Lingua, string[]> = {
  it: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  sl: ["januarja", "februarja", "marca", "aprila", "maja", "junija", "julija", "avgusta", "septembra", "oktobra", "novembra", "decembra"],
};
/** «6 ottobre 2026», «6 October 2026», «6. Oktober 2026», «6. oktobra 2026». */
export function dataLunga(iso: string, l: Lingua): string {
  const [a, m, g] = iso.split("-").map(Number);
  const mese = MESI[l][m - 1];
  return l === "de" || l === "sl" ? `${g}. ${mese} ${a}` : `${g} ${mese} ${a}`;
}
/** Plurale sloveno a quattro forme (one, two, few, other) sulle ultime due cifre. */
export function plSl(n: number, f: [string, string, string, string]): string {
  const r = n % 100;
  return r === 1 ? f[0] : r === 2 ? f[1] : r === 3 || r === 4 ? f[2] : f[3];
}

export type TestiComuni = {
  sezione: string; strumento: string; pubblico: { compra: string; vende: string }; briciole: string;
  aggiornato: (data: string) => string; fonti: (n: number) => string; inVerifica: (n: number) => string;
  come: string; fontiTitolo: string; letta: string; inVerificaDal: string; senzaLink: string;
  avvertenza: [string, string];
  cta: Record<"compra" | "vende", { occhiello: string; h2: string; testo: string; bottone: string; riga: string }>;
  altri: string; apri: string; almeno: string; inVerificaBreve: string; dettaglio: string; voce: string; importo: string; fonte: string; chi: string;
  indice: {
    titolo: string; descrizione: string; occhiello: string; h1: string; lead: (n: number) => string;
    compraH2: string; compraLead: string; vendeH2: string; vendeLead: string;
    principio: string; principioTesto: string; principioSotto: string; guide: string;
  };
};

export const COMUNE: Record<Lingua, TestiComuni> = {
  it: {
    sezione: "Strumenti", strumento: "Strumento", pubblico: { compra: "Per chi compra", vende: "Per chi vende" }, briciole: "Briciole",
    aggiornato: (d) => `Dati aggiornati al ${d}`,
    fonti: (n) => (n === 1 ? "1 fonte" : `${n} fonti`),
    inVerifica: (n) => (n === 1 ? "1 voce in verifica" : `${n} voci in verifica`),
    come: "Come calcoliamo", fontiTitolo: "Fonti", letta: "letta il", inVerificaDal: "in verifica, dal", senzaLink: "senza un documento da linkare",
    avvertenza: ["Indicativo.", "Questi calcoli non sono una consulenza fiscale o legale e non sostituiscono il notaio, l'avvocato o il commercialista. Le regole cambiano: ogni voce porta la data in cui l'abbiamo letta sulla fonte."],
    cta: {
      compra: {
        occhiello: "Private Collection · Lago d'Orta",
        h2: "Le case del lago arriveranno qui, prima che altrove.",
        testo: "Oggi la Private Collection del lago ha 0 case, e lo scriviamo. Iscrivetevi: vi avvisiamo quando arriva la prima, con le zone e la fascia di prezzo che ci indicate.",
        bottone: "Private Collection: avvisatemi per primi",
        riga: "Avete invece una casa sul lago da vendere? Presentatecela.",
      },
      vende: {
        occhiello: "Per i proprietari",
        h2: "La vostra casa sul lago, raccontata a chi compra da Milano, Zurigo e Monaco.",
        testo: "In Italia TriesteVillas srl è un'agenzia iscritta: sul lago possiamo già mediare. Presentateci la casa: vi rispondiamo in italiano, inglese o tedesco.",
        bottone: "Presentateci la casa",
        riga: "Cercate invece casa sul lago? Iscrivetevi alla Private Collection.",
      },
    },
    altri: "Gli altri strumenti", apri: "Apri lo strumento", almeno: "almeno", inVerificaBreve: "in verifica",
    dettaglio: "Voce per voce", voce: "Voce", importo: "Importo", fonte: "Fonte", chi: "Chi paga",
    indice: {
      titolo: "Strumenti per comprare e vendere casa sul lago d'Orta | OrtaVillas",
      descrizione: "Costi d'acquisto a confronto con Svizzera, Germania e Austria, metri quadrati alle quotazioni OMI, il netto di chi vende, la rendita catastale, i documenti: calcoli con fonte e data.",
      occhiello: "Strumenti",
      h1: "Fare i conti prima di scegliere il lago.",
      lead: (n) => `${n} strumenti sui dati pubblici italiani, svizzeri, tedeschi e austriaci. Ogni numero ha una fonte e una data. Quando una regola non è ancora riletta su una fonte ufficiale, lo strumento scrive «in verifica» e non la somma.`,
      compraH2: "Per chi compra",
      compraLead: "Quanto costa comprare oltre al prezzo, quanto spazio raggiunge il vostro budget, quale parte del lago vi somiglia.",
      vendeH2: "Per chi vende",
      vendeLead: "Quanto resta dopo imposte e provvigione, che forchetta danno le quotazioni, che cosa dice la rendita catastale, quali documenti preparare.",
      principio: "Il principio",
      principioTesto: "Nessun numero senza fonte. Nessun calcolo che faccia sembrare certa una regola che non lo è.",
      principioSotto: "Le guide spiegano le stesse regole per esteso, con le fonti a margine.",
      guide: "Tutte le guide",
    },
  },
  en: {
    sezione: "Tools", strumento: "Tool", pubblico: { compra: "For buyers", vende: "For sellers" }, briciole: "Breadcrumbs",
    aggiornato: (d) => `Data updated on ${d}`,
    fonti: (n) => (n === 1 ? "1 source" : `${n} sources`),
    inVerifica: (n) => (n === 1 ? "1 item being checked" : `${n} items being checked`),
    come: "How we calculate", fontiTitolo: "Sources", letta: "read on", inVerificaDal: "being checked since", senzaLink: "no document to link",
    avvertenza: ["Indicative.", "These calculations are not tax or legal advice and do not replace the notary, the lawyer or the accountant. Rules change: every item carries the date on which we read it at the source."],
    cta: {
      compra: {
        occhiello: "Private Collection · Lake Orta",
        h2: "The lake's homes will arrive here first.",
        testo: "Today the lake's Private Collection holds 0 homes, and we say so. Sign up: we will tell you when the first one arrives, for the areas and price band you give us.",
        bottone: "Private Collection: tell me first",
        riga: "Do you have a home on the lake to sell instead? Introduce it to us.",
      },
      vende: {
        occhiello: "For owners",
        h2: "Your lake home, presented to buyers from Milan, Zurich and Munich.",
        testo: "In Italy TriesteVillas srl is a registered agency: on the lake we can already act as agents. Introduce your home to us: we reply in Italian, English or German.",
        bottone: "Introduce your home",
        riga: "Looking for a home on the lake instead? Join the Private Collection.",
      },
    },
    altri: "The other tools", apri: "Open the tool", almeno: "at least", inVerificaBreve: "being checked",
    dettaglio: "Line by line", voce: "Item", importo: "Amount", fonte: "Source", chi: "Who pays",
    indice: {
      titolo: "Tools for buying and selling a home on Lake Orta | OrtaVillas",
      descrizione: "Purchase costs compared with Switzerland, Germany and Austria, square metres at OMI quotations, the seller's net, the cadastral income, the documents: calculations with source and date.",
      occhiello: "Tools",
      h1: "Do the sums before you choose the lake.",
      lead: (n) => `${n} tools built on Italian, Swiss, German and Austrian public data. Every number has a source and a date. When a rule has not yet been re-read on an official source, the tool says "being checked" and leaves it out of the total.`,
      compraH2: "For buyers",
      compraLead: "What buying costs on top of the price, how much space your budget reaches, which part of the lake suits you.",
      vendeH2: "For sellers",
      vendeLead: "What is left after tax and commission, what range the quotations give, what the cadastral income says, which documents to prepare.",
      principio: "The principle",
      principioTesto: "No number without a source. No calculation that makes an uncertain rule look certain.",
      principioSotto: "The guides explain the same rules at length, with the sources in the margin.",
      guide: "All guides",
    },
  },
  de: {
    sezione: "Werkzeuge", strumento: "Werkzeug", pubblico: { compra: "Für Käufer", vende: "Für Verkäufer" }, briciole: "Brotkrumen",
    aggiornato: (d) => `Daten aktualisiert am ${d}`,
    fonti: (n) => (n === 1 ? "1 Quelle" : `${n} Quellen`),
    inVerifica: (n) => (n === 1 ? "1 Posten in Prüfung" : `${n} Posten in Prüfung`),
    come: "Wie wir rechnen", fontiTitolo: "Quellen", letta: "gelesen am", inVerificaDal: "in Prüfung seit", senzaLink: "kein Dokument zum Verlinken",
    avvertenza: ["Unverbindlich.", "Diese Berechnungen sind keine Steuer- oder Rechtsberatung und ersetzen weder Notar noch Anwalt noch Steuerberater. Regeln ändern sich: Jeder Posten trägt das Datum, an dem wir ihn an der Quelle gelesen haben."],
    cta: {
      compra: {
        occhiello: "Private Collection · Ortasee",
        h2: "Die Häuser am See kommen zuerst hierher.",
        testo: "Heute enthält die Private Collection am See 0 Häuser, und wir schreiben das. Melden Sie sich an: Wir benachrichtigen Sie, sobald das erste kommt, für die Gegenden und die Preisspanne, die Sie angeben.",
        bottone: "Private Collection: zuerst informieren",
        riga: "Haben Sie stattdessen ein Haus am See zu verkaufen? Stellen Sie es uns vor.",
      },
      vende: {
        occhiello: "Für Eigentümer",
        h2: "Ihr Haus am See, erzählt für Käufer aus Mailand, Zürich und München.",
        testo: "In Italien ist TriesteVillas srl eine eingetragene Agentur: Am See können wir bereits vermitteln. Stellen Sie uns Ihr Haus vor: Wir antworten auf Italienisch, Englisch oder Deutsch.",
        bottone: "Haus vorstellen",
        riga: "Suchen Sie stattdessen ein Haus am See? Melden Sie sich bei der Private Collection an.",
      },
    },
    altri: "Die anderen Werkzeuge", apri: "Werkzeug öffnen", almeno: "mindestens", inVerificaBreve: "in Prüfung",
    dettaglio: "Posten für Posten", voce: "Posten", importo: "Betrag", fonte: "Quelle", chi: "Wer zahlt",
    indice: {
      titolo: "Werkzeuge für Kauf und Verkauf am Ortasee | OrtaVillas",
      descrizione: "Kaufnebenkosten im Vergleich mit der Schweiz, Deutschland und Österreich, Quadratmeter zu OMI-Richtwerten, der Nettoerlös des Verkäufers, der Katasterertrag, die Unterlagen: Rechnungen mit Quelle und Datum.",
      occhiello: "Werkzeuge",
      h1: "Rechnen, bevor Sie den See wählen.",
      lead: (n) => `${n} Werkzeuge auf Grundlage öffentlicher Daten aus Italien, der Schweiz, Deutschland und Österreich. Jede Zahl hat eine Quelle und ein Datum. Ist eine Regel noch nicht an einer amtlichen Quelle nachgelesen, schreibt das Werkzeug „in Prüfung“ und rechnet sie nicht mit.`,
      compraH2: "Für Käufer",
      compraLead: "Was der Kauf über den Preis hinaus kostet, wie viel Fläche Ihr Budget erreicht, welcher Teil des Sees zu Ihnen passt.",
      vendeH2: "Für Verkäufer",
      vendeLead: "Was nach Steuern und Provision bleibt, welche Spanne die Richtwerte ergeben, was der Katasterertrag sagt, welche Unterlagen nötig sind.",
      principio: "Der Grundsatz",
      principioTesto: "Keine Zahl ohne Quelle. Keine Rechnung, die eine unsichere Regel sicher aussehen lässt.",
      principioSotto: "Die Ratgeber erklären dieselben Regeln ausführlich, mit den Quellen am Rand.",
      guide: "Alle Ratgeber",
    },
  },
  sl: {
    sezione: "Orodja", strumento: "Orodje", pubblico: { compra: "Za kupce", vende: "Za prodajalce" }, briciole: "Drobtinice",
    aggiornato: (d) => `Podatki posodobljeni ${d}`,
    fonti: (n) => `${n} ${plSl(n, ["vir", "vira", "viri", "virov"])}`,
    inVerifica: (n) => `${n} ${plSl(n, ["postavka", "postavki", "postavke", "postavk"])} v preverjanju`,
    come: "Kako računamo", fontiTitolo: "Viri", letta: "prebrano", inVerificaDal: "v preverjanju od", senzaLink: "brez dokumenta za povezavo",
    avvertenza: ["Okvirno.", "Ti izračuni niso davčno ali pravno svetovanje in ne nadomeščajo notarja, odvetnika ali računovodje. Pravila se spreminjajo: vsaka postavka nosi datum, ko smo jo prebrali v viru."],
    cta: {
      compra: {
        occhiello: "Private Collection · jezero Orta",
        h2: "Hiše ob jezeru bodo najprej prišle sem.",
        testo: "Danes ima Private Collection ob jezeru 0 hiš in to tudi zapišemo. Prijavite se: obvestili vas bomo, ko pride prva, za območja in cenovni razred, ki nam jih navedete.",
        bottone: "Private Collection: obvestite me med prvimi",
        riga: "Imate hišo ob jezeru, ki jo želite prodati? Predstavite nam jo.",
      },
      vende: {
        occhiello: "Za lastnike",
        h2: "Vaša hiša ob jezeru, predstavljena kupcem iz Milana, Züricha in Münchna.",
        testo: "V Italiji je TriesteVillas srl registrirana nepremičninska agencija: ob jezeru že lahko posredujemo. Predstavite nam hišo: odgovorimo v italijanščini, angleščini ali nemščini.",
        bottone: "Predstavite nam hišo",
        riga: "Iščete hišo ob jezeru? Prijavite se v Private Collection.",
      },
    },
    altri: "Druga orodja", apri: "Odprite orodje", almeno: "najmanj", inVerificaBreve: "v preverjanju",
    dettaglio: "Postavka za postavko", voce: "Postavka", importo: "Znesek", fonte: "Vir", chi: "Kdo plača",
    indice: {
      titolo: "Orodja za nakup in prodajo hiše ob jezeru Orta | OrtaVillas",
      descrizione: "Stroški nakupa v primerjavi s Švico, Nemčijo in Avstrijo, kvadratni metri po ocenah OMI, neto znesek prodajalca, katastrski donos, dokumenti: izračuni z virom in datumom.",
      occhiello: "Orodja",
      h1: "Izračunajte, preden izberete jezero.",
      lead: (n) => `${n} orodij na javnih podatkih iz Italije, Švice, Nemčije in Avstrije. Vsaka številka ima vir in datum. Ko pravilo še ni preverjeno v uradnem viru, orodje zapiše »v preverjanju« in ga ne prišteje.`,
      compraH2: "Za kupce",
      compraLead: "Koliko stane nakup poleg cene, koliko prostora doseže vaš proračun, kateri del jezera vam ustreza.",
      vendeH2: "Za prodajalce",
      vendeLead: "Koliko ostane po davkih in proviziji, kakšen razpon dajo ocene, kaj pove katastrski donos, katere dokumente pripraviti.",
      principio: "Načelo",
      principioTesto: "Nobene številke brez vira. Nobenega izračuna, zaradi katerega bi bilo negotovo pravilo videti gotovo.",
      principioSotto: "Vodniki ista pravila razložijo podrobno, z viri ob robu.",
      guide: "Vsi vodniki",
    },
  },
};
