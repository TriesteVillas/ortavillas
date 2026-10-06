// Titoli brevi (menu, colophon, schede) di guide, strumenti e città di partenza.
import type { Lingua } from "@/lib/rotte";
import type { GuidaId, OrigineId, StrumentoId } from "./indice";

type T = Record<Lingua, { titolo: string; breve: string }>;

export const TITOLI_GUIDE: Record<GuidaId, T> = {
  comprare: {
    it: { titolo: "Comprare casa in Italia", breve: "La procedura per chi viene da fuori, passo per passo: codice fiscale, proposta, compromesso, rogito." },
    en: { titolo: "Buying property in Italy", breve: "The procedure for buyers from abroad, step by step: tax code, offer, preliminary contract, deed." },
    de: { titolo: "Immobilienkauf in Italien", breve: "Der Ablauf für Käufer aus dem Ausland, Schritt für Schritt: Steuernummer, Angebot, Vorvertrag, Urkunde." },
    sl: { titolo: "Nakup nepremičnine v Italiji", breve: "Postopek za kupce iz tujine, korak za korakom: davčna številka, ponudba, predpogodba, notarska listina." },
  },
  costi: {
    it: { titolo: "Costi d'acquisto a confronto", breve: "Italia, Svizzera, Germania e Austria sulla stessa casa, voce per voce." },
    en: { titolo: "Purchase costs compared", breve: "Italy, Switzerland, Germany and Austria on the same home, line by line." },
    de: { titolo: "Kaufnebenkosten im Vergleich", breve: "Italien, Schweiz, Deutschland und Österreich beim selben Haus, Posten für Posten." },
    sl: { titolo: "Stroški nakupa v primerjavi", breve: "Italija, Švica, Nemčija in Avstrija pri isti hiši, postavka za postavko." },
  },
  "est-ovest": {
    it: { titolo: "Sponda est o sponda ovest", breve: "Sole, strade, acqua, servizi e quotazioni: le due rive messe a confronto." },
    en: { titolo: "East shore or west shore", breve: "Sun, roads, water, services and price quotations: the two shores compared." },
    de: { titolo: "Ostufer oder Westufer", breve: "Sonne, Straßen, Wasser, Versorgung und Preise: die beiden Ufer im Vergleich." },
    sl: { titolo: "Vzhodna ali zahodna obala", breve: "Sonce, ceste, voda, storitve in cene: obe obali v primerjavi." },
  },
  "orta-maggiore": {
    it: { titolo: "Orta o Maggiore?", breve: "Due laghi separati dal Mottarone: tempi da Milano e da Malpensa, dimensioni, acque, che cosa si sa e che cosa no." },
    en: { titolo: "Orta or Maggiore?", breve: "Two lakes divided by the Mottarone: times from Milan and Malpensa, size, water, what is known and what is not." },
    de: { titolo: "Orta oder Lago Maggiore?", breve: "Zwei Seen, getrennt vom Mottarone: Zeiten ab Mailand und Malpensa, Größe, Wasser, was man weiß und was nicht." },
    sl: { titolo: "Orta ali Lago Maggiore?", breve: "Dve jezeri, ki ju loči Mottarone: časi iz Milana in Malpense, velikost, voda, kaj vemo in česa ne." },
  },
  arrivare: {
    it: { titolo: "Come arrivare", breve: "Aeroporti, autostrade, vignetta svizzera, treni e battelli, con le fonti e i buchi lasciati in vista." },
    en: { titolo: "Getting here", breve: "Airports, motorways, the Swiss vignette, trains and boats, with sources and the gaps left visible." },
    de: { titolo: "Anreise", breve: "Flughäfen, Autobahnen, Schweizer Vignette, Züge und Schiffe, mit Quellen und offen gelassenen Lücken." },
    sl: { titolo: "Kako priti", breve: "Letališča, avtoceste, švicarska vinjeta, vlaki in ladje, z viri in vidnimi vrzelmi." },
  },
  quotazioni: {
    it: { titolo: "I prezzi del lago", breve: "Le quotazioni OMI comune per comune, zona per zona: come si leggono e che cosa non dicono." },
    en: { titolo: "Lake Orta property prices", breve: "The OMI quotations municipality by municipality, zone by zone: how to read them and what they do not say." },
    de: { titolo: "Immobilienpreise am Ortasee", breve: "Die OMI-Richtwerte Gemeinde für Gemeinde, Zone für Zone: wie man sie liest und was sie nicht sagen." },
    sl: { titolo: "Cene nepremičnin ob jezeru", breve: "Ocene OMI po občinah in conah: kako jih brati in česa ne povedo." },
  },
  affitti: {
    it: { titolo: "Affittare la casa sul lago", breve: "CIN, CIR, comunicazioni, imposte: le regole per mettere a reddito una casa sul lago d'Orta." },
    en: { titolo: "Renting out your lake home", breve: "CIN, CIR, guest reporting, taxes: the rules for letting a home on Lake Orta." },
    de: { titolo: "Ferienvermietung am See", breve: "CIN, CIR, Gästemeldung, Steuern: die Regeln für die Vermietung eines Hauses am Ortasee." },
    sl: { titolo: "Oddajanje hiše ob jezeru", breve: "CIN, CIR, prijava gostov, davki: pravila za oddajanje hiše ob jezeru Orta." },
  },
};

export const TITOLI_STRUMENTI: Record<StrumentoId, T & { pubblico: "compra" | "vende" }> = {
  costi: {
    pubblico: "compra",
    it: { titolo: "Costi d'acquisto a confronto", breve: "Italia, Svizzera, Germania e Austria sulla stessa scala, voce per voce." },
    en: { titolo: "Purchase costs compared", breve: "Italy, Switzerland, Germany and Austria on the same scale, line by line." },
    de: { titolo: "Kaufnebenkosten im Vergleich", breve: "Italien, Schweiz, Deutschland und Österreich auf derselben Skala, Posten für Posten." },
    sl: { titolo: "Stroški nakupa v primerjavi", breve: "Italija, Švica, Nemčija in Avstrija na isti lestvici, postavka za postavko." },
  },
  budget: {
    pubblico: "compra",
    it: { titolo: "Cosa compra il vostro budget", breve: "I metri quadrati che un budget raggiunge, comune per comune, alle quotazioni OMI." },
    en: { titolo: "What your budget buys", breve: "The square metres a budget reaches, municipality by municipality, at OMI quotations." },
    de: { titolo: "Was Ihr Budget kauft", breve: "Die Quadratmeter, die ein Budget erreicht, Gemeinde für Gemeinde, zu OMI-Richtwerten." },
    sl: { titolo: "Kaj kupite s proračunom", breve: "Kvadratni metri, ki jih doseže proračun, po občinah, po ocenah OMI." },
  },
  trova: {
    pubblico: "compra",
    it: { titolo: "Trova il vostro lago", breve: "Sei domande, sedici luoghi, una classifica motivata dai dati." },
    en: { titolo: "Find your lake", breve: "Six questions, sixteen places, a ranking explained by the data." },
    de: { titolo: "Ihren See finden", breve: "Sechs Fragen, sechzehn Orte, eine Rangliste mit Begründung aus den Daten." },
    sl: { titolo: "Najdite svoje jezero", breve: "Šest vprašanj, šestnajst krajev, razvrstitev, utemeljena s podatki." },
  },
  netto: {
    pubblico: "vende",
    it: { titolo: "Dal prezzo al netto", breve: "Plusvalenza, provvigione, documenti: quanto resta a chi vende." },
    en: { titolo: "From price to net", breve: "Capital gains, commission, documents: what the seller keeps." },
    de: { titolo: "Vom Preis zum Nettoerlös", breve: "Veräußerungsgewinn, Provision, Unterlagen: was dem Verkäufer bleibt." },
    sl: { titolo: "Od cene do neto zneska", breve: "Kapitalski dobiček, provizija, dokumenti: koliko ostane prodajalcu." },
  },
  valore: {
    pubblico: "vende",
    it: { titolo: "Quanto vale casa tua", breve: "La forchetta delle quotazioni OMI per la vostra casa, e una valutazione fatta da una persona." },
    en: { titolo: "What is my home worth", breve: "The OMI quotation range for your home, and a valuation made by a person." },
    de: { titolo: "Was ist mein Haus wert", breve: "Die OMI-Spanne für Ihr Haus und eine Bewertung durch einen Menschen." },
    sl: { titolo: "Koliko je vredna vaša hiša", breve: "Razpon ocen OMI za vašo hišo in vrednotenje, ki ga opravi človek." },
  },
  catasto: {
    pubblico: "vende",
    it: { titolo: "Dalla rendita catastale al mercato", breve: "Che cos'è il valore catastale, dove si legge e perché non è il prezzo." },
    en: { titolo: "From cadastral value to market", breve: "What the cadastral value is, where to find it and why it is not the price." },
    de: { titolo: "Vom Katasterwert zum Markt", breve: "Was der Katasterwert ist, wo man ihn findet und warum er nicht der Preis ist." },
    sl: { titolo: "Od katastrske vrednosti do trga", breve: "Kaj je katastrska vrednost, kje jo najdete in zakaj ni cena." },
  },
  documenti: {
    pubblico: "vende",
    it: { titolo: "I documenti per vendere", breve: "La lista di controllo, dalla visura catastale all'attestato energetico." },
    en: { titolo: "Documents to sell", breve: "The checklist, from the cadastral record to the energy certificate." },
    de: { titolo: "Unterlagen für den Verkauf", breve: "Die Checkliste, vom Katasterauszug bis zum Energieausweis." },
    sl: { titolo: "Dokumenti za prodajo", breve: "Kontrolni seznam, od katastrskega izpiska do energetske izkaznice." },
  },
};

export const NOMI_ORIGINI: Record<OrigineId, Record<Lingua, string>> = {
  milano: { it: "Milano", en: "Milan", de: "Mailand", sl: "Milano" },
  malpensa: { it: "Malpensa", en: "Malpensa", de: "Malpensa", sl: "Malpensa" },
  linate: { it: "Linate", en: "Linate", de: "Linate", sl: "Linate" },
  novara: { it: "Novara", en: "Novara", de: "Novara", sl: "Novara" },
  torino: { it: "Torino", en: "Turin", de: "Turin", sl: "Torino" },
  lugano: { it: "Lugano", en: "Lugano", de: "Lugano", sl: "Lugano" },
  zurigo: { it: "Zurigo", en: "Zurich", de: "Zürich", sl: "Zürich" },
  basilea: { it: "Basilea", en: "Basel", de: "Basel", sl: "Basel" },
  berna: { it: "Berna", en: "Bern", de: "Bern", sl: "Bern" },
  ginevra: { it: "Ginevra", en: "Geneva", de: "Genf", sl: "Ženeva" },
  monaco: { it: "Monaco di Baviera", en: "Munich", de: "München", sl: "München" },
};
