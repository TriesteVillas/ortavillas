// Le parole fisse della sezione Guide (indice + modello di guida), in quattro lingue.
import type { Lingua } from "@/lib/rotte";

export type TestiGuide = {
  // indice
  titolo: string;
  descrizione: string;
  occhiello: string;
  h1: string;
  lead: string;
  principioTitolo: string;
  principio: string[];
  principale: string;
  // modello
  sezione: string; // «Guide» nelle briciole
  aggiornata: string; // «Aggiornata al»
  fonti: (n: number) => string;
  minuti: (n: number) => string;
  inQuestaPagina: string;
  inBreve: string;
  nonSappiamo: string;
  nonSappiamoIntro: string;
  domande: string;
  fontiTitolo: string;
  letta: string; // «letta il»
  secondaria: string;
  parziale: string;
  altreGuide: string;
  rimando: (n: number) => string;
  // CTA
  ctaCompra: { occhiello: string; h2: string; testo: string; bottone: string; secondario: string };
  ctaVende: { occhiello: string; h2: string; testo: string; bottone: string; secondario: string };
};

const it: TestiGuide = {
  titolo: "Guide per comprare casa sul lago d'Orta",
  descrizione: "Comprare, pagare le imposte, scegliere la riva, leggere le quotazioni OMI, affittare: sette guide sul lago d'Orta con le fonti numerate e i limiti dichiarati.",
  occhiello: "Guide",
  h1: "Le regole del lago, lette sulle fonti.",
  lead: "Sette guide per chi compra o possiede una casa sul lago d'Orta. Ogni numero porta la sua fonte e la data in cui l'abbiamo letta; in fondo a ogni guida scriviamo che cosa non sappiamo ancora.",
  principioTitolo: "Il principio di queste pagine",
  principio: [
    "Scriviamo un numero solo se possiamo dire da dove viene e quando l'abbiamo letto. Le fonti ufficiali vengono prima; quelle secondarie (giornali, siti di settore, enciclopedie) le segnaliamo come tali.",
    "Quello che non abbiamo verificato non lo facciamo passare per certo: o non lo scriviamo, o lo scriviamo dicendo che è in verifica. Nessuna guida sostituisce un notaio, un commercialista o un avvocato.",
  ],
  principale: "Guida principale",
  sezione: "Guide",
  aggiornata: "Aggiornata al",
  fonti: (n) => `${n} ${n === 1 ? "fonte" : "fonti"}`,
  minuti: (n) => `${n} min di lettura`,
  inQuestaPagina: "In questa pagina",
  inBreve: "In breve",
  nonSappiamo: "Che cosa non sappiamo ancora",
  nonSappiamoIntro: "Quello che non abbiamo ancora letto su una fonte affidabile lo scriviamo qui, invece di farlo passare per certo.",
  domande: "Domande",
  fontiTitolo: "Fonti",
  letta: "letta il",
  secondaria: "fonte secondaria",
  parziale: "letta solo in sintesi",
  altreGuide: "Le altre guide",
  rimando: (n) => `Fonte ${n}`,
  ctaCompra: {
    occhiello: "Private Collection · Lago d'Orta",
    h2: "Le case del lago arriveranno qui, prima che altrove.",
    testo: "Oggi la Private Collection del lago d'Orta ha 0 case: lo diciamo com'è. Iscrivetevi e vi avvisiamo quando entra la prima, con le zone che vi interessano.",
    bottone: "Private Collection: avvisatemi",
    secondario: "Avete una casa sul lago? Presentatecela",
  },
  ctaVende: {
    occhiello: "Per i proprietari",
    h2: "Una casa sul lago, raccontata a chi compra da Zurigo, Monaco e Milano.",
    testo: "In Italia TriesteVillas srl è un'agenzia iscritta e sul lago può già mediare. Presentateci la casa: vi rispondiamo in italiano, inglese o tedesco.",
    bottone: "Presentateci la casa",
    secondario: "Cercate casa? Private Collection",
  },
};

const en: TestiGuide = {
  titolo: "Guides to buying a home on Lake Orta",
  descrizione: "Buying, paying the taxes, choosing a shore, reading the OMI price quotations, letting: seven guides to Lake Orta with numbered sources and stated limits.",
  occhiello: "Guides",
  h1: "The rules of the lake, read at the source.",
  lead: "Seven guides for anyone buying or owning a home on Lake Orta. Every figure carries its source and the date we read it; at the end of each guide we write down what we do not know yet.",
  principioTitolo: "The principle behind these pages",
  principio: [
    "We publish a figure only if we can say where it comes from and when we read it. Official sources come first; secondary ones (newspapers, trade sites, encyclopaedias) are labelled as such.",
    "What we have not verified we do not pass off as certain: either we leave it out, or we write it and say it is being checked. No guide replaces a notary, a tax adviser or a lawyer.",
  ],
  principale: "Main guide",
  sezione: "Guides",
  aggiornata: "Updated",
  fonti: (n) => `${n} ${n === 1 ? "source" : "sources"}`,
  minuti: (n) => `${n} min read`,
  inQuestaPagina: "On this page",
  inBreve: "In short",
  nonSappiamo: "What we do not know yet",
  nonSappiamoIntro: "Whatever we have not yet read in a reliable source we list here, instead of passing it off as certain.",
  domande: "Questions",
  fontiTitolo: "Sources",
  letta: "read on",
  secondaria: "secondary source",
  parziale: "read in summary only",
  altreGuide: "The other guides",
  rimando: (n) => `Source ${n}`,
  ctaCompra: {
    occhiello: "Private Collection · Lake Orta",
    h2: "The lake's homes will arrive here first.",
    testo: "Today the Lake Orta Private Collection holds 0 homes, and we say so. Sign up and we will tell you when the first one comes in, in the areas you care about.",
    bottone: "Private Collection: notify me",
    secondario: "Own a home on the lake? Tell us about it",
  },
  ctaVende: {
    occhiello: "For owners",
    h2: "A home on the lake, presented to buyers from Zurich, Munich and Milan.",
    testo: "In Italy TriesteVillas srl is a registered agency and can already act on the lake. Tell us about your home: we reply in Italian, English or German.",
    bottone: "Tell us about your home",
    secondario: "Looking for a home? Private Collection",
  },
};

const de: TestiGuide = {
  titolo: "Ratgeber zum Hauskauf am Ortasee",
  descrizione: "Kaufen, Steuern zahlen, das Ufer wählen, OMI-Richtwerte lesen, vermieten: sieben Ratgeber zum Ortasee mit nummerierten Quellen und offen genannten Grenzen.",
  occhiello: "Ratgeber",
  h1: "Die Regeln des Sees, an der Quelle gelesen.",
  lead: "Sieben Ratgeber für alle, die am Ortasee ein Haus kaufen oder besitzen. Jede Zahl trägt ihre Quelle und das Datum, an dem wir sie gelesen haben; am Ende jedes Ratgebers steht, was wir noch nicht wissen.",
  principioTitolo: "Der Grundsatz dieser Seiten",
  principio: [
    "Wir schreiben eine Zahl nur, wenn wir sagen können, woher sie stammt und wann wir sie gelesen haben. Amtliche Quellen gehen vor; Sekundärquellen (Zeitungen, Fachportale, Enzyklopädien) kennzeichnen wir als solche.",
    "Was wir nicht geprüft haben, geben wir nicht als sicher aus: Entweder lassen wir es weg, oder wir schreiben es und sagen, dass es noch geprüft wird. Kein Ratgeber ersetzt Notar, Steuerberater oder Anwalt.",
  ],
  principale: "Hauptratgeber",
  sezione: "Ratgeber",
  aggiornata: "Stand:",
  fonti: (n) => `${n} ${n === 1 ? "Quelle" : "Quellen"}`,
  minuti: (n) => `${n} Min. Lesezeit`,
  inQuestaPagina: "Auf dieser Seite",
  inBreve: "Kurz gesagt",
  nonSappiamo: "Was wir noch nicht wissen",
  nonSappiamoIntro: "Was wir noch nicht in einer verlässlichen Quelle gelesen haben, steht hier, statt als sicher durchzugehen.",
  domande: "Fragen",
  fontiTitolo: "Quellen",
  letta: "gelesen am",
  secondaria: "Sekundärquelle",
  parziale: "nur in Zusammenfassung gelesen",
  altreGuide: "Die anderen Ratgeber",
  rimando: (n) => `Quelle ${n}`,
  ctaCompra: {
    occhiello: "Private Collection · Ortasee",
    h2: "Die Häuser des Sees kommen zuerst hierher.",
    testo: "Heute umfasst die Private Collection am Ortasee 0 Häuser, und das sagen wir offen. Tragen Sie sich ein: Wir melden uns, sobald das erste Haus dazukommt, in den Gegenden, die Sie interessieren.",
    bottone: "Private Collection: benachrichtigen",
    secondario: "Sie besitzen ein Haus am See? Stellen Sie es uns vor",
  },
  ctaVende: {
    occhiello: "Für Eigentümer",
    h2: "Ein Haus am See, vorgestellt für Käufer aus Zürich, München und Mailand.",
    testo: "In Italien ist TriesteVillas srl eine eingetragene Maklerfirma und darf am See bereits vermitteln. Stellen Sie uns Ihr Haus vor: Wir antworten auf Italienisch, Englisch oder Deutsch.",
    bottone: "Haus vorstellen",
    secondario: "Sie suchen ein Haus? Private Collection",
  },
};

const sl: TestiGuide = {
  titolo: "Vodniki za nakup hiše ob jezeru Orta",
  descrizione: "Nakup, davki, izbira obale, branje ocen OMI, oddajanje: sedem vodnikov o jezeru Orta z oštevilčenimi viri in odkrito navedenimi omejitvami.",
  occhiello: "Vodniki",
  h1: "Pravila jezera, prebrana v virih.",
  lead: "Sedem vodnikov za vse, ki ob jezeru Orta kupujejo ali imajo nepremičnino. Vsaka številka ima svoj vir in datum, ko smo jo prebrali; na koncu vsakega vodnika zapišemo, česa še ne vemo.",
  principioTitolo: "Načelo teh strani",
  principio: [
    "Številko objavimo le, če lahko povemo, od kod je in kdaj smo jo prebrali. Uradni viri imajo prednost; sekundarne (časopise, strokovne portale, enciklopedije) označimo kot take.",
    "Česar nismo preverili, ne predstavljamo kot gotovo: ali tega ne zapišemo ali pa zapišemo in povemo, da je še v preverjanju. Noben vodnik ne nadomesti notarja, davčnega svetovalca ali odvetnika.",
  ],
  principale: "Glavni vodnik",
  sezione: "Vodniki",
  aggiornata: "Posodobljeno",
  fonti: (n) => `${n} ${n % 100 === 1 ? "vir" : n % 100 === 2 ? "vira" : n % 100 === 3 || n % 100 === 4 ? "viri" : "virov"}`,
  minuti: (n) => `${n} min branja`,
  inQuestaPagina: "Na tej strani",
  inBreve: "Na kratko",
  nonSappiamo: "Česa še ne vemo",
  nonSappiamoIntro: "Kar še nismo prebrali v zanesljivem viru, zapišemo tukaj, namesto da bi to predstavili kot gotovo.",
  domande: "Vprašanja",
  fontiTitolo: "Viri",
  letta: "prebrano",
  secondaria: "sekundarni vir",
  parziale: "prebrano le v povzetku",
  altreGuide: "Drugi vodniki",
  rimando: (n) => `Vir ${n}`,
  ctaCompra: {
    occhiello: "Private Collection · jezero Orta",
    h2: "Nepremičnine ob jezeru bodo najprej tukaj.",
    testo: "Danes ima Private Collection ob jezeru Orta 0 nepremičnin, in to povemo odkrito. Prijavite se in obvestili vas bomo, ko pride prva, na območjih, ki vas zanimajo.",
    bottone: "Private Collection: obvestite me",
    secondario: "Imate hišo ob jezeru? Predstavite nam jo",
  },
  ctaVende: {
    occhiello: "Za lastnike",
    h2: "Hiša ob jezeru, predstavljena kupcem iz Züricha, Münchna in Milana.",
    testo: "V Italiji je TriesteVillas srl registrirana nepremičninska agencija in ob jezeru že lahko posreduje. Predstavite nam hišo: odgovorimo v italijanščini, angleščini ali nemščini.",
    bottone: "Predstavite nam hišo",
    secondario: "Iščete hišo? Private Collection",
  },
};

export const GUIDE_TESTI: Record<Lingua, TestiGuide> = { it, en, de, sl };
