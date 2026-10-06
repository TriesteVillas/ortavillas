// Strumento 06 — Dalla rendita catastale al mercato. Testi in quattro lingue.
import type { Lingua } from "@/lib/rotte";
import { IT } from "@/lib/strumenti/regole";
import { fmtNum, fmtPct } from "@/lib/strumenti/formato";

export type TestiCatasto = {
  titolo: string; descrizione: string; h1: string; lead: string;
  passi: [string, string][]; rendita: string; renditaAiuto: string;
  categoria: string; categorie: { abitazione: string; altro: string }; categoriaAiuto: { abitazione: string; altro: string };
  prima: string; primaAiuto: string;
  valore: string; formula: (r: string, m: number) => string; nonCalcolato: string; vuoto: string;
  imposta: (aliq: string, imp: string) => string;
  confronto: string; omiVuoto: string; forchetta: (a: string, b: string) => string;
  rapporto: (pct: string) => string; perche: string;
  metodo: (l: Lingua) => string[];
  tabTitolo: string; tabCaption: string; colRendita: string; colSeconda: string; colPrima: string; colReg: string; colRegPrima: string; tabNota: string;
};

const m = (l: Lingua) => fmtNum(1 + IT.rivalutazione / 100, l, 2);

export const CATASTO: Record<Lingua, TestiCatasto> = {
  it: {
    titolo: "Dalla rendita catastale al valore di mercato, sul lago d'Orta",
    descrizione: "Rendita catastale × 1,05 × 120 (110 prima casa): il valore catastale della vostra casa sul lago d'Orta, confrontato con la forchetta delle quotazioni OMI. Perché non è il prezzo.",
    h1: "Dalla rendita catastale al mercato.",
    lead: "La rendita catastale è il numero che il catasto attribuisce alla casa; moltiplicata per un coefficiente di legge diventa il valore catastale, la base delle imposte. Qui lo calcoliamo e lo mettiamo accanto alle quotazioni OMI: quasi sempre è molto più basso, e non è un prezzo.",
    passi: [
      ["Dove si legge", "Nella visura catastale: la potete scaricare gratis, coi dati dei vostri immobili, dal servizio «Consultazione personale» dell'Agenzia delle Entrate, con SPID, CIE o CNS."],
      ["Che cosa cercare", "La riga dell'unità abitativa: categoria (A/2, A/7…), classe, consistenza e «rendita» in euro."],
      ["Le pertinenze", "Cantina, box e posto auto hanno una rendita propria (C/2, C/6, C/7): sommatela, se si vendono insieme."],
    ],
    rendita: "Rendita catastale", renditaAiuto: "Somma delle rendite dell'abitazione e delle pertinenze che si vendono insieme.",
    categoria: "Categoria", categorie: { abitazione: "abitazione e pertinenze", altro: "un'altra categoria" },
    categoriaAiuto: {
      abitazione: "Gruppo A escluso A/10 (uffici), con le pertinenze C/2, C/6, C/7.",
      altro: "Uffici, negozi, capannoni hanno coefficienti diversi, che non abbiamo riletto su una fonte ufficiale: non li calcoliamo.",
    },
    prima: "Prima casa", primaAiuto: `Il moltiplicatore scende da ${IT.moltiplicatore} a ${IT.moltiplicatorePrima}.`,
    valore: "Valore catastale", formula: (r, mm) => `${r} × 1,05 × ${mm}`, nonCalcolato: "non calcolato per questa categoria", vuoto: "Scrivete la rendita catastale.",
    imposta: (a, i) => `Con il prezzo-valore, da un privato: imposta di registro ${a} = ${i}.`,
    confronto: "Le quotazioni OMI per la stessa casa", omiVuoto: "Scrivete la superficie commerciale per il confronto.",
    forchetta: (a, b) => `${a} – ${b}`,
    rapporto: (p) => `Il valore catastale è il ${p} del centro della forchetta OMI.`,
    perche: "Il valore catastale nasce da una rendita fissata dal catasto e da coefficienti di legge: non segue il mercato e non tiene conto di vista, stato, giardino. Serve a calcolare le imposte, non a fissare un prezzo.",
    metodo: (l) => [
      `Valore catastale = rendita × ${m(l)} × ${IT.moltiplicatore}, oppure × ${IT.moltiplicatorePrima} se la casa sarà prima casa di chi compra. Il ${m(l)} è la rivalutazione del ${fmtPct(IT.rivalutazione, l)} prevista dalla legge; il moltiplicatore vale per le abitazioni e le loro pertinenze, come scrive la guida dell'Agenzia delle Entrate.`,
      `Con il prezzo-valore (L. 266/2005, art. 1 c. 497), nelle vendite tra persone fisiche di abitazioni e pertinenze, le imposte si pagano su questo valore invece che sul prezzo: registro ${fmtPct(IT.registro, l)} o ${fmtPct(IT.registroPrima, l)}, con un minimo di ${fmtNum(IT.registroMin, l)} €. Il prezzo vero va comunque dichiarato nell'atto.`,
      "Il confronto usa le quotazioni OMI della zona e della tipologia che scegliete, moltiplicate per la superficie lorda: il rapporto è fra il valore catastale e il centro di quella forchetta. Non dice quanto vale la casa: dice quanto la base delle imposte è lontana dalle stime di mercato.",
      "Per le altre categorie (uffici, negozi, capannoni) i coefficienti sono diversi: non li abbiamo riletti su una fonte ufficiale e il calcolatore non li usa.",
    ],
    tabTitolo: "Rendite d'esempio", tabCaption: "Valore catastale e imposta di registro col prezzo-valore, per alcune rendite d'esempio",
    colRendita: "Rendita", colSeconda: "Valore catastale, seconda casa", colPrima: "Valore catastale, prima casa", colReg: "Registro 9%", colRegPrima: "Registro 2%",
    tabNota: "Rendite d'esempio, non dati di case reali. Imposta di registro con il minimo di 1.000 €; ipotecaria e catastale (50 + 50 €) a parte.",
  },
  en: {
    titolo: "From cadastral income to market value, on Lake Orta",
    descrizione: "Cadastral income × 1.05 × 120 (110 for a main home): the cadastral value of your home on Lake Orta, compared with the range of OMI quotations. Why it is not the price.",
    h1: "From cadastral income to market.",
    lead: "The cadastral income (rendita catastale) is the figure the land registry assigns to a home; multiplied by a statutory coefficient it becomes the cadastral value, the basis for taxes. Here we calculate it and set it next to the OMI quotations: it is almost always much lower, and it is not a price.",
    passi: [
      ["Where to read it", "In the cadastral record (visura catastale): you can download it free, with the data on your properties, from the Revenue Agency's «Consultazione personale» service, with SPID, CIE or CNS."],
      ["What to look for", "The line for the dwelling: category (A/2, A/7…), class, size and «rendita» in euros."],
      ["Annexes", "Cellar, garage and parking space have their own income (C/2, C/6, C/7): add it if they are sold together."],
    ],
    rendita: "Cadastral income", renditaAiuto: "The sum of the incomes of the dwelling and of the annexes sold with it.",
    categoria: "Category", categorie: { abitazione: "dwelling and annexes", altro: "another category" },
    categoriaAiuto: {
      abitazione: "Group A except A/10 (offices), with annexes C/2, C/6, C/7.",
      altro: "Offices, shops and warehouses have different coefficients, which we have not re-read on an official source: we do not calculate them.",
    },
    prima: "Main home", primaAiuto: `The multiplier drops from ${IT.moltiplicatore} to ${IT.moltiplicatorePrima}.`,
    valore: "Cadastral value", formula: (r, mm) => `${r} × 1.05 × ${mm}`, nonCalcolato: "not calculated for this category", vuoto: "Enter the cadastral income.",
    imposta: (a, i) => `Under prezzo-valore, from a private seller: registration tax ${a} = ${i}.`,
    confronto: "OMI quotations for the same home", omiVuoto: "Enter the gross floor area for the comparison.",
    forchetta: (a, b) => `${a} – ${b}`,
    rapporto: (p) => `The cadastral value is ${p} of the middle of the OMI range.`,
    perche: "The cadastral value comes from an income set by the land registry and statutory coefficients: it does not follow the market and ignores view, condition and garden. It is used to calculate taxes, not to set a price.",
    metodo: (l) => [
      `Cadastral value = income × ${m(l)} × ${IT.moltiplicatore}, or × ${IT.moltiplicatorePrima} if the home will be the buyer's main home. The ${m(l)} is the statutory ${fmtPct(IT.rivalutazione, l)} revaluation; the multiplier applies to dwellings and their annexes, as the Revenue Agency's guide states.`,
      `Under prezzo-valore (Law 266/2005, art. 1 para. 497), in sales of dwellings and annexes between private individuals, taxes are paid on this value instead of the price: registration ${fmtPct(IT.registro, l)} or ${fmtPct(IT.registroPrima, l)}, with a minimum of €${fmtNum(IT.registroMin, l)}. The real price must still be declared in the deed.`,
      "The comparison uses the OMI quotations for the zone and type you choose, multiplied by the gross floor area: the ratio is between the cadastral value and the middle of that range. It does not say what the home is worth: it says how far the tax base is from market estimates.",
      "For other categories (offices, shops, warehouses) the coefficients differ: we have not re-read them on an official source and the calculator does not use them.",
    ],
    tabTitolo: "Example incomes", tabCaption: "Cadastral value and registration tax under prezzo-valore, for some example incomes",
    colRendita: "Income", colSeconda: "Cadastral value, second home", colPrima: "Cadastral value, main home", colReg: "Registration 9%", colRegPrima: "Registration 2%",
    tabNota: "Example incomes, not data from real homes. Registration tax with the €1,000 minimum; mortgage and cadastral taxes (€50 + €50) extra.",
  },
  de: {
    titolo: "Vom Katasterertrag zum Marktwert, am Ortasee",
    descrizione: "Katasterertrag × 1,05 × 120 (110 beim Hauptwohnsitz): der Katasterwert Ihres Hauses am Ortasee, verglichen mit der Spanne der OMI-Richtwerte. Warum er nicht der Preis ist.",
    h1: "Vom Katasterertrag zum Markt.",
    lead: "Der Katasterertrag (rendita catastale) ist die Zahl, die das Kataster einem Haus zuweist; mit einem gesetzlichen Koeffizienten multipliziert wird er zum Katasterwert, der Steuerbasis. Hier berechnen wir ihn und stellen ihn neben die OMI-Richtwerte: Er ist fast immer viel niedriger und kein Preis.",
    passi: [
      ["Wo man ihn findet", "Im Katasterauszug (visura catastale): kostenlos herunterzuladen, mit den Daten Ihrer Immobilien, über den Dienst „Consultazione personale“ der Agenzia delle Entrate, mit SPID, CIE oder CNS."],
      ["Wonach suchen", "Die Zeile der Wohneinheit: Kategorie (A/2, A/7 …), Klasse, Größe und „rendita“ in Euro."],
      ["Zubehör", "Keller, Garage und Stellplatz haben einen eigenen Ertrag (C/2, C/6, C/7): Addieren Sie ihn, wenn sie mitverkauft werden."],
    ],
    rendita: "Katasterertrag", renditaAiuto: "Summe der Erträge der Wohnung und des mitverkauften Zubehörs.",
    categoria: "Kategorie", categorie: { abitazione: "Wohnung und Zubehör", altro: "eine andere Kategorie" },
    categoriaAiuto: {
      abitazione: "Gruppe A außer A/10 (Büros), mit Zubehör C/2, C/6, C/7.",
      altro: "Büros, Läden und Hallen haben andere Koeffizienten, die wir nicht an einer amtlichen Quelle nachgelesen haben: Wir rechnen sie nicht.",
    },
    prima: "Hauptwohnsitz", primaAiuto: `Der Multiplikator sinkt von ${IT.moltiplicatore} auf ${IT.moltiplicatorePrima}.`,
    valore: "Katasterwert", formula: (r, mm) => `${r} × 1,05 × ${mm}`, nonCalcolato: "für diese Kategorie nicht berechnet", vuoto: "Tragen Sie den Katasterertrag ein.",
    imposta: (a, i) => `Mit prezzo-valore, Kauf von privat: Registersteuer ${a} = ${i}.`,
    confronto: "Die OMI-Richtwerte für dasselbe Haus", omiVuoto: "Tragen Sie die Bruttofläche für den Vergleich ein.",
    forchetta: (a, b) => `${a} – ${b}`,
    rapporto: (p) => `Der Katasterwert beträgt ${p} der Mitte der OMI-Spanne.`,
    perche: "Der Katasterwert entsteht aus einem vom Kataster festgesetzten Ertrag und gesetzlichen Koeffizienten: Er folgt nicht dem Markt und kennt weder Aussicht noch Zustand noch Garten. Er dient der Steuerberechnung, nicht der Preisfindung.",
    metodo: (l) => [
      `Katasterwert = Ertrag × ${m(l)} × ${IT.moltiplicatore}, oder × ${IT.moltiplicatorePrima}, wenn das Haus Hauptwohnsitz des Käufers wird. ${m(l)} ist die gesetzliche Aufwertung um ${fmtPct(IT.rivalutazione, l)}; der Multiplikator gilt für Wohnungen und ihr Zubehör, wie der Leitfaden der Agenzia delle Entrate schreibt.`,
      `Mit prezzo-valore (Gesetz 266/2005, Art. 1 Abs. 497) werden bei Verkäufen von Wohnungen und Zubehör zwischen Privatpersonen die Steuern auf diesen Wert statt auf den Preis gezahlt: Registersteuer ${fmtPct(IT.registro, l)} oder ${fmtPct(IT.registroPrima, l)}, mindestens ${fmtNum(IT.registroMin, l)} €. Der echte Preis muss trotzdem in der Urkunde stehen.`,
      "Der Vergleich nutzt die OMI-Richtwerte der gewählten Zone und des gewählten Typs, multipliziert mit der Bruttofläche: Das Verhältnis besteht zwischen Katasterwert und Mitte dieser Spanne. Es sagt nicht, was das Haus wert ist, sondern wie weit die Steuerbasis von den Marktschätzungen entfernt ist.",
      "Für andere Kategorien (Büros, Läden, Hallen) gelten andere Koeffizienten: Wir haben sie nicht an einer amtlichen Quelle nachgelesen, und der Rechner verwendet sie nicht.",
    ],
    tabTitolo: "Beispielerträge", tabCaption: "Katasterwert und Registersteuer mit prezzo-valore, für einige Beispielerträge",
    colRendita: "Ertrag", colSeconda: "Katasterwert, Zweitwohnsitz", colPrima: "Katasterwert, Hauptwohnsitz", colReg: "Register 9 %", colRegPrima: "Register 2 %",
    tabNota: "Beispielerträge, keine Daten echter Häuser. Registersteuer mit Mindestbetrag 1.000 €; Hypotheken- und Katastersteuer (50 + 50 €) extra.",
  },
  sl: {
    titolo: "Od katastrskega donosa do tržne vrednosti, ob jezeru Orta",
    descrizione: "Katastrski donos × 1,05 × 120 (110 za prvo bivališče): katastrska vrednost vaše hiše ob jezeru Orta v primerjavi z razponom ocen OMI. Zakaj to ni cena.",
    h1: "Od katastrskega donosa do trga.",
    lead: "Katastrski donos (rendita catastale) je številka, ki jo kataster pripiše hiši; pomnožena z zakonskim količnikom postane katastrska vrednost, osnova za davke. Tu jo izračunamo in postavimo ob ocene OMI: skoraj vedno je precej nižja in ni cena.",
    passi: [
      ["Kje ga najdete", "V katastrskem izpisku (visura catastale): brezplačno ga prenesete, s podatki o svojih nepremičninah, prek storitve »Consultazione personale« davčne uprave, s SPID, CIE ali CNS."],
      ["Kaj iskati", "Vrstico stanovanjske enote: kategorija (A/2, A/7 …), razred, velikost in »rendita« v evrih."],
      ["Pripadajoči prostori", "Klet, garaža in parkirno mesto imajo svoj donos (C/2, C/6, C/7): prištejte ga, če se prodajajo skupaj."],
    ],
    rendita: "Katastrski donos (rendita catastale)", renditaAiuto: "Vsota donosov stanovanja in pripadajočih prostorov, ki se prodajajo skupaj.",
    categoria: "Kategorija", categorie: { abitazione: "stanovanje in pripadajoči prostori", altro: "druga kategorija" },
    categoriaAiuto: {
      abitazione: "Skupina A razen A/10 (pisarne), s pripadajočimi prostori C/2, C/6, C/7.",
      altro: "Pisarne, trgovine in hale imajo druge količnike, ki jih nismo preverili v uradnem viru: ne računamo jih.",
    },
    prima: "Prvo bivališče", primaAiuto: `Količnik se zniža s ${IT.moltiplicatore} na ${IT.moltiplicatorePrima}.`,
    valore: "Katastrska vrednost", formula: (r, mm) => `${r} × 1,05 × ${mm}`, nonCalcolato: "za to kategorijo ni izračunana", vuoto: "Vpišite katastrski donos.",
    imposta: (a, i) => `Po pravilu prezzo-valore, pri nakupu od zasebnika: davek na registracijo ${a} = ${i}.`,
    confronto: "Ocene OMI za isto hišo", omiVuoto: "Za primerjavo vpišite bruto površino.",
    forchetta: (a, b) => `${a} – ${b}`,
    rapporto: (p) => `Katastrska vrednost znaša ${p} sredine razpona OMI.`,
    perche: "Katastrska vrednost izhaja iz donosa, ki ga določi kataster, in zakonskih količnikov: ne sledi trgu in ne upošteva razgleda, stanja in vrta. Služi za izračun davkov, ne za določanje cene.",
    metodo: (l) => [
      `Katastrska vrednost = donos × ${m(l)} × ${IT.moltiplicatore}, ali × ${IT.moltiplicatorePrima}, če bo hiša kupčevo prvo bivališče. ${m(l)} je zakonska revalorizacija za ${fmtPct(IT.rivalutazione, l)}; količnik velja za stanovanja in pripadajoče prostore, kot piše v vodniku davčne uprave.`,
      `Po pravilu prezzo-valore (zakon 266/2005, 1. člen, 497. odstavek) se pri prodaji stanovanj in pripadajočih prostorov med fizičnimi osebami davki plačajo na to vrednost namesto na ceno: davek na registracijo ${fmtPct(IT.registro, l)} ali ${fmtPct(IT.registroPrima, l)}, najmanj ${fmtNum(IT.registroMin, l)} €. Pravo ceno je treba v pogodbi vseeno navesti.`,
      "Primerjava uporablja ocene OMI za izbrano cono in vrsto, pomnožene z bruto površino: razmerje je med katastrsko vrednostjo in sredino tega razpona. Ne pove, koliko je hiša vredna, temveč kako daleč je davčna osnova od tržnih ocen.",
      "Za druge kategorije (pisarne, trgovine, hale) veljajo drugi količniki: nismo jih preverili v uradnem viru in jih kalkulator ne uporablja.",
    ],
    tabTitolo: "Primeri donosov", tabCaption: "Katastrska vrednost in davek na registracijo po pravilu prezzo-valore, za nekaj primerov donosa",
    colRendita: "Donos", colSeconda: "Katastrska vrednost, druga nepremičnina", colPrima: "Katastrska vrednost, prvo bivališče", colReg: "Registracija 9 %", colRegPrima: "Registracija 2 %",
    tabNota: "Primeri donosov, ne podatki resničnih hiš. Davek na registracijo z najnižjim zneskom 1.000 €; hipotekarni in katastrski davek (50 + 50 €) posebej.",
  },
};
