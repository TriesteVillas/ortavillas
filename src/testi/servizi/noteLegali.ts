import type { Lingua } from "@/lib/rotte";
import type { TestiLegale } from "./privacy";
import { RECAPITI, SOCIETA } from "@/content/shell";

const E = RECAPITI.email;
const T = RECAPITI.telefono;

const it: TestiLegale = {
  titolo: "Note legali · OrtaVillas",
  descrizione: "I dati societari dell'editore di ortavillas.com, sito del gruppo TriesteVillas: ragione sociale, sede, partita IVA, recapiti, attività di mediazione e hosting.",
  briciola: "Note legali",
  occhiello: "Note legali",
  h1: "Note legali",
  lead: "Chi pubblica ortavillas.com, e con quali dati.",
  sezioni: [
    { id: "editore", titolo: "Editore", blocchi: [{ dl: [
      ["Ragione sociale", SOCIETA.nome],
      ["Sede legale", `${SOCIETA.indirizzo}, Italia`],
      ["Rappresentante legale", "Davide Carlin"],
      ["Codice fiscale e partita IVA", SOCIETA.piva],
      ["Registro delle imprese", `Iscritta alla C.C.I.A.A. di Trieste · REA ${SOCIETA.rea}`],
      ["Capitale sociale", "10.200 €, interamente versato"],
      ["PEC", SOCIETA.pec],
      ["Email", `[${E}](mailto:${E})`],
      ["Telefono e WhatsApp", `[${T}](tel:${RECAPITI.tel}), numero dedicato a questo sito`],
    ] }] },
    { id: "attivita", titolo: "Che cosa facciamo, e dove", blocchi: [
      "TriesteVillas srl ha sede a Trieste ed è un'agenzia immobiliare iscritta: lavora nel mercato italiano con i marchi del gruppo, e può mediare anche sul lago d'Orta. Questo sito informa su luoghi, distanze, quotazioni e procedure, raccoglie le presentazioni dei proprietari e le iscrizioni alla Private Collection. Oggi non pubblica annunci: la collezione del lago è vuota. [A che punto siamo](stato).",
    ] },
    { id: "contenuti", titolo: "Contenuti, dati e immagini", blocchi: [
      "Testi e grafica © TriesteVillas srl. Dati delle carte © OpenStreetMap contributors (ODbL); quote Copernicus DEM ed EU-DEM; quotazioni e compravendite Agenzia delle Entrate – OMI (CC BY 4.0); popolazione ISTAT (CC BY 4.0); rischi ISPRA (CC BY 4.0). Fonti, metodi e licenze sono nella [pagina dei dati](dati); le immagini, con fonte e licenza, nei [titoli di coda](ai).",
      "Le informazioni su imposte, procedure e prezzi hanno fonte e data accanto, ma non sostituiscono il parere di un notaio, di un commercialista o di un avvocato.",
    ] },
    { id: "hosting", titolo: "Hosting", blocchi: ["Vercel Inc., Stati Uniti."] },
    { id: "link", titolo: "Collegamenti esterni", blocchi: ["I link verso altri siti (istituzioni, fonti dei dati, YouTube, Matterport, i siti del gruppo) portano a contenuti di cui non rispondiamo. Li controlliamo quando li pubblichiamo."] },
    { id: "dati-personali", titolo: "Dati personali", blocchi: ["Vedi l'[informativa sulla privacy](privacy) e la [pagina sui cookie](cookie)."] },
  ],
};

const en: TestiLegale = {
  titolo: "Imprint · OrtaVillas",
  descrizione: "Company details of the publisher of ortavillas.com, a TriesteVillas group site: company name, registered office, VAT number, contacts, estate agency activity and hosting.",
  briciola: "Imprint",
  occhiello: "Legal",
  h1: "Imprint",
  lead: "Who publishes ortavillas.com, and with what details.",
  sezioni: [
    { id: "editore", titolo: "Publisher", blocchi: [{ dl: [
      ["Company name", SOCIETA.nome],
      ["Registered office", `${SOCIETA.indirizzo}, Italy`],
      ["Legal representative", "Davide Carlin"],
      ["Tax code and VAT number", `IT${SOCIETA.piva}`],
      ["Companies register", `Registered with the Trieste Chamber of Commerce · REA ${SOCIETA.rea}`],
      ["Share capital", "€10,200, fully paid"],
      ["PEC (certified email)", SOCIETA.pec],
      ["Email", `[${E}](mailto:${E})`],
      ["Phone and WhatsApp", `[${T}](tel:${RECAPITI.tel}), a number dedicated to this site`],
    ] }] },
    { id: "attivita", titolo: "What we do, and where", blocchi: [
      "TriesteVillas srl is based in Trieste and is a registered estate agency: it works in the Italian market with the group's brands, and may act as agent on Lake Orta too. This site provides information on places, distances, price quotations and procedures, and collects owners' presentations and Private Collection sign-ups. Today it publishes no listings: the lake collection is empty. [Where we stand](stato).",
    ] },
    { id: "contenuti", titolo: "Content, data and images", blocchi: [
      "Texts and design © TriesteVillas srl. Map data © OpenStreetMap contributors (ODbL); elevations Copernicus DEM and EU-DEM; quotations and sales Agenzia delle Entrate – OMI (CC BY 4.0); population ISTAT (CC BY 4.0); hazards ISPRA (CC BY 4.0). Sources, methods and licences are on the [data page](dati); images, with source and licence, in the [closing credits](ai).",
      "Information on taxes, procedures and prices carries its source and date, but does not replace the advice of a notary, an accountant or a lawyer.",
    ] },
    { id: "hosting", titolo: "Hosting", blocchi: ["Vercel Inc., United States."] },
    { id: "link", titolo: "External links", blocchi: ["Links to other sites (institutions, data sources, YouTube, Matterport, the group's sites) lead to content we are not responsible for. We check them when we publish them."] },
    { id: "dati-personali", titolo: "Personal data", blocchi: ["See the [privacy notice](privacy) and the [cookies page](cookie)."] },
  ],
};

const de: TestiLegale = {
  titolo: "Impressum · OrtaVillas",
  descrizione: "Die Unternehmensangaben des Herausgebers von ortavillas.com, einer Website der Gruppe TriesteVillas: Firma, Sitz, USt-IdNr., Kontakt, Maklertätigkeit und Hosting.",
  briciola: "Impressum",
  occhiello: "Rechtliches",
  h1: "Impressum",
  lead: "Wer ortavillas.com herausgibt, und mit welchen Angaben.",
  sezioni: [
    { id: "editore", titolo: "Herausgeber", blocchi: [{ dl: [
      ["Firma", SOCIETA.nome],
      ["Sitz", `${SOCIETA.indirizzo}, Italien`],
      ["Gesetzlicher Vertreter", "Davide Carlin"],
      ["Steuernummer und USt-IdNr.", `IT${SOCIETA.piva}`],
      ["Handelsregister", `Eingetragen bei der Handelskammer Triest · REA ${SOCIETA.rea}`],
      ["Stammkapital", "10.200 €, voll eingezahlt"],
      ["PEC (zertifizierte E-Mail)", SOCIETA.pec],
      ["E-Mail", `[${E}](mailto:${E})`],
      ["Telefon und WhatsApp", `[${T}](tel:${RECAPITI.tel}), eine Nummer nur für diese Website`],
    ] }] },
    { id: "attivita", titolo: "Was wir tun, und wo", blocchi: [
      "Die TriesteVillas srl hat ihren Sitz in Triest und ist ein eingetragenes Maklerbüro: Sie arbeitet mit den Marken der Gruppe auf dem italienischen Markt und darf auch am Ortasee vermitteln. Diese Website informiert über Orte, Entfernungen, Preisrichtwerte und Abläufe und sammelt Vorstellungen von Eigentümern und Anmeldungen zur Private Collection. Heute veröffentlicht sie keine Angebote: Die Collection am See ist leer. [Wo wir stehen](stato).",
    ] },
    { id: "contenuti", titolo: "Inhalte, Daten und Bilder", blocchi: [
      "Texte und Gestaltung © TriesteVillas srl. Kartendaten © OpenStreetMap-Mitwirkende (ODbL); Höhen Copernicus DEM und EU-DEM; Richtwerte und Verkäufe Agenzia delle Entrate – OMI (CC BY 4.0); Bevölkerung ISTAT (CC BY 4.0); Gefahren ISPRA (CC BY 4.0). Quellen, Methoden und Lizenzen stehen auf der [Datenseite](dati); die Bilder, mit Quelle und Lizenz, im [Abspann](ai).",
      "Angaben zu Steuern, Abläufen und Preisen tragen Quelle und Datum, ersetzen aber nicht den Rat eines Notars, Steuerberaters oder Anwalts.",
    ] },
    { id: "hosting", titolo: "Hosting", blocchi: ["Vercel Inc., Vereinigte Staaten."] },
    { id: "link", titolo: "Externe Links", blocchi: ["Links zu anderen Websites (Behörden, Datenquellen, YouTube, Matterport, die Websites der Gruppe) führen zu Inhalten, für die wir nicht verantwortlich sind. Wir prüfen sie bei der Veröffentlichung."] },
    { id: "dati-personali", titolo: "Personenbezogene Daten", blocchi: ["Siehe die [Datenschutzerklärung](privacy) und die [Cookie-Seite](cookie)."] },
  ],
};

const sl: TestiLegale = {
  titolo: "Pravno obvestilo · OrtaVillas",
  descrizione: "Podatki o izdajatelju ortavillas.com, spletnega mesta skupine TriesteVillas: firma, sedež, ID za DDV, kontakti, posredniška dejavnost in gostovanje.",
  briciola: "Pravno obvestilo",
  occhiello: "Pravno",
  h1: "Pravno obvestilo",
  lead: "Kdo izdaja ortavillas.com in s katerimi podatki.",
  sezioni: [
    { id: "editore", titolo: "Izdajatelj", blocchi: [{ dl: [
      ["Firma", SOCIETA.nome],
      ["Sedež", `${SOCIETA.indirizzo}, Italija`],
      ["Zakoniti zastopnik", "Davide Carlin"],
      ["Davčna številka in ID za DDV", `IT${SOCIETA.piva}`],
      ["Register podjetij", `Vpisana pri Gospodarski zbornici v Trstu · REA ${SOCIETA.rea}`],
      ["Osnovni kapital", "10.200 €, v celoti vplačan"],
      ["PEC (overjena e-pošta)", SOCIETA.pec],
      ["E-pošta", `[${E}](mailto:${E})`],
      ["Telefon in WhatsApp", `[${T}](tel:${RECAPITI.tel}), številka samo za to spletno mesto`],
    ] }] },
    { id: "attivita", titolo: "Kaj delamo in kje", blocchi: [
      "TriesteVillas srl ima sedež v Trstu in je vpisana nepremičninska agencija: z znamkami skupine dela na italijanskem trgu in lahko posreduje tudi ob jezeru Orta. To spletno mesto obvešča o krajih, razdaljah, ocenah vrednosti in postopkih ter zbira predstavitve lastnikov in prijave v Private Collection. Danes ne objavlja oglasov: zbirka ob jezeru je prazna. [Kje smo](stato).",
    ] },
    { id: "contenuti", titolo: "Vsebine, podatki in slike", blocchi: [
      "Besedila in oblikovanje © TriesteVillas srl. Podatki zemljevidov © sodelavci OpenStreetMap (ODbL); višine Copernicus DEM in EU-DEM; ocene vrednosti in prodaje Agenzia delle Entrate – OMI (CC BY 4.0); prebivalstvo ISTAT (CC BY 4.0); nevarnosti ISPRA (CC BY 4.0). Viri, metode in licence so na [strani s podatki](dati); slike, z virom in licenco, v [odjavni špici](ai).",
      "Podatki o davkih, postopkih in cenah imajo ob sebi vir in datum, a ne nadomeščajo nasveta notarja, računovodje ali odvetnika.",
    ] },
    { id: "hosting", titolo: "Gostovanje", blocchi: ["Vercel Inc., Združene države."] },
    { id: "link", titolo: "Zunanje povezave", blocchi: ["Povezave na druga spletna mesta (ustanove, viri podatkov, YouTube, Matterport, spletna mesta skupine) vodijo do vsebin, za katere ne odgovarjamo. Preverimo jih ob objavi."] },
    { id: "dati-personali", titolo: "Osebni podatki", blocchi: ["Glejte [obvestilo o zasebnosti](privacy) in [stran o piškotkih](cookie)."] },
  ],
};

export const NOTE_LEGALI: Record<Lingua, TestiLegale> = { it, en, de, sl };
