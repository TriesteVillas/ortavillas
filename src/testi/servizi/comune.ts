// Frasi e numeri che le pagine di servizio e di edizione condividono. I numeri del gruppo
// vengono dal CRM di TriesteVillas (conteggi del 5 ottobre 2026, esclusi collaudi, doppioni
// e spam): qui sono scritti una volta, e ogni pagina li formatta nella sua lingua.
import { INTL, type Lingua } from "@/lib/rotte";

export const GRUPPO_NUMERI = {
  immobiliOnline: 90,
  compratori12m: 1312,
  da500k: 391,
  da1m: 152,
  dach: 105,
  ville: 262,
  visite12m: 529,
  googleVoto: 4.5,
  googleRecensioni: 73,
  pcTrieste: 22,
  pcTriesteDa1m: 15,
  pcAccessi: 54,
  tour3d: 34,
  fotoRegistroAi: 1789,
  ytViste: 1990369,
  ytVideo: 140,
} as const;

/** Numeri con il separatore delle migliaia anche a quattro cifre (1.312, non 1312). */
export const n = (x: number, l: Lingua, dec = 0) =>
  new Intl.NumberFormat(INTL[l], { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: "always" } as Intl.NumberFormatOptions).format(x);

export const CASO_TRIESTE = {
  scheda: "https://triestevillas.com/annuncio/villa-storica-strada-costiera-0003",
  film: "https://www.youtube.com/watch?v=3d7Alzfxv3w",
  tour: "https://my.matterport.com/show/?m=H51vm1o64mF",
  pc: "https://triestevillas.com/private",
};

export type Comune = {
  fonteCrm: string;
  inQuestaPagina: string;
  aggiornato: string;
  recapiti: { whatsapp: string; telefono: string; email: string; sede: string; sedeValore: string };
  lingueRisposta: string;
  wa: { proprietari: string; compratori: string; agenzie: string };
  oggettoAgenzie: string;
  scriveteciWa: string;
  scriveteciEmail: string;
  statoRiga: string;
  numeri: { immobiliOnline: string; tour3d: string; ytViste: string; compratori12m: string; visite12m: string; pcAccessi: string; ytVideo: string; fotoRegistroAi: string };
  home: string;
};

const it: Comune = {
  fonteCrm: "CRM di TriesteVillas e cataloghi dei siti del gruppo, conteggi del 5 ottobre 2026, esclusi collaudi, doppioni e spam.",
  inQuestaPagina: "In questa pagina",
  aggiornato: "Ultimo aggiornamento: 6 ottobre 2026",
  recapiti: { whatsapp: "WhatsApp", telefono: "Telefono", email: "Email", sede: "Sede", sedeValore: "TriesteVillas srl · Via Milano 5, 34132 Trieste, Italia" },
  lingueRisposta: "Rispondiamo in italiano, inglese e tedesco.",
  wa: {
    proprietari: "Buongiorno, ho una casa sul lago d'Orta, a … e vorrei presentarvela.",
    compratori: "Buongiorno, vorrei essere avvisato quando entrano case sul lago d'Orta. Zona che mi interessa: …",
    agenzie: "Buongiorno, sono dell'agenzia … sul lago d'Orta e vorrei parlarvi di una collaborazione.",
  },
  oggettoAgenzie: "Collaborazione tra agenzie · Lago d'Orta",
  scriveteciWa: "Scriveteci su WhatsApp",
  scriveteciEmail: "Scriveteci per email",
  statoRiga: "Ottobre 2026 · Sul lago possiamo già mediare · In collezione oggi: 0 case",
  numeri: {
    immobiliOnline: "immobili online sui quattro siti del gruppo",
    tour3d: "schede di triestevillas.com con il tour 3D",
    ytViste: "visualizzazioni sul canale YouTube di TriesteVillas",
    compratori12m: "richieste di compratori negli ultimi dodici mesi",
    visite12m: "visite fatte negli ultimi dodici mesi",
    pcAccessi: "accessi attivi alla Private Collection di Trieste",
    ytVideo: "video sul canale YouTube, dal 2015",
    fotoRegistroAi: "foto con il registro di trasparenza sull'AI",
  },
  home: "Torna alla prima pagina",
};

const en: Comune = {
  fonteCrm: "TriesteVillas CRM and the catalogues of the group's sites, counts of 5 October 2026, excluding tests, duplicates and spam.",
  inQuestaPagina: "On this page",
  aggiornato: "Last updated: 6 October 2026",
  recapiti: { whatsapp: "WhatsApp", telefono: "Phone", email: "Email", sede: "Office", sedeValore: "TriesteVillas srl · Via Milano 5, 34132 Trieste, Italy" },
  lingueRisposta: "We reply in English, Italian and German.",
  wa: {
    proprietari: "Hello, I own a home on Lake Orta, in … and would like to present it to you.",
    compratori: "Hello, I would like to be told when homes on Lake Orta come in. Area I am interested in: …",
    agenzie: "Hello, I am with the agency … on Lake Orta and would like to talk about working together.",
  },
  oggettoAgenzie: "Agency cooperation · Lake Orta",
  scriveteciWa: "Write to us on WhatsApp",
  scriveteciEmail: "Write to us by email",
  statoRiga: "October 2026 · On the lake we can already act as agents · In the collection today: 0 homes",
  numeri: {
    immobiliOnline: "properties online on the group's four sites",
    tour3d: "triestevillas.com listings with a 3D tour",
    ytViste: "views on the TriesteVillas YouTube channel",
    compratori12m: "buyer enquiries in the last twelve months",
    visite12m: "viewings in the last twelve months",
    pcAccessi: "active logins to the Trieste Private Collection",
    ytVideo: "videos on the YouTube channel, since 2015",
    fotoRegistroAi: "photos with the AI transparency record",
  },
  home: "Back to the home page",
};

const de: Comune = {
  fonteCrm: "CRM von TriesteVillas und Kataloge der Websites der Gruppe, Zählung vom 5. Oktober 2026, ohne Tests, Dubletten und Spam.",
  inQuestaPagina: "Auf dieser Seite",
  aggiornato: "Zuletzt aktualisiert: 6. Oktober 2026",
  recapiti: { whatsapp: "WhatsApp", telefono: "Telefon", email: "E-Mail", sede: "Sitz", sedeValore: "TriesteVillas srl · Via Milano 5, 34132 Triest, Italien" },
  lingueRisposta: "Wir antworten auf Deutsch, Englisch und Italienisch.",
  wa: {
    proprietari: "Guten Tag, ich besitze ein Haus am Ortasee, in … und möchte es Ihnen vorstellen.",
    compratori: "Guten Tag, ich möchte benachrichtigt werden, wenn Häuser am Ortasee dazukommen. Gegend, die mich interessiert: …",
    agenzie: "Guten Tag, ich schreibe von der Agentur … am Ortasee und möchte über eine Zusammenarbeit sprechen.",
  },
  oggettoAgenzie: "Zusammenarbeit unter Maklern · Ortasee",
  scriveteciWa: "Schreiben Sie uns auf WhatsApp",
  scriveteciEmail: "Schreiben Sie uns per E-Mail",
  statoRiga: "Oktober 2026 · Am See dürfen wir bereits vermitteln · Heute in der Collection: 0 Häuser",
  numeri: {
    immobiliOnline: "Immobilien online auf den vier Websites der Gruppe",
    tour3d: "Exposés auf triestevillas.com mit 3D-Rundgang",
    ytViste: "Aufrufe auf dem YouTube-Kanal von TriesteVillas",
    compratori12m: "Anfragen von Käufern in den letzten zwölf Monaten",
    visite12m: "Besichtigungen in den letzten zwölf Monaten",
    pcAccessi: "aktive Zugänge zur Private Collection in Triest",
    ytVideo: "Videos auf dem YouTube-Kanal, seit 2015",
    fotoRegistroAi: "Fotos mit dem KI-Transparenzregister",
  },
  home: "Zurück zur Startseite",
};

const sl: Comune = {
  fonteCrm: "CRM TriesteVillas in katalogi spletnih mest skupine, štetje s 5. oktobra 2026, brez preizkusov, dvojnikov in neželene pošte.",
  inQuestaPagina: "Na tej strani",
  aggiornato: "Zadnja posodobitev: 6. oktobra 2026",
  recapiti: { whatsapp: "WhatsApp", telefono: "Telefon", email: "E-pošta", sede: "Sedež", sedeValore: "TriesteVillas srl · Via Milano 5, 34132 Trst, Italija" },
  lingueRisposta: "Odgovarjamo v italijanščini, angleščini in nemščini.",
  wa: {
    proprietari: "Dober dan, imam hišo ob jezeru Orta, v kraju … in bi vam jo rad predstavil.",
    compratori: "Dober dan, rad bi bil obveščen, ko pridejo v ponudbo hiše ob jezeru Orta. Območje, ki me zanima: …",
    agenzie: "Dober dan, pišem iz agencije … ob jezeru Orta in bi se rad pogovoril o sodelovanju.",
  },
  oggettoAgenzie: "Sodelovanje med agencijami · jezero Orta",
  scriveteciWa: "Pišite nam na WhatsApp",
  scriveteciEmail: "Pišite nam po e-pošti",
  statoRiga: "Oktober 2026 · Ob jezeru že lahko posredujemo · V zbirki danes: 0 hiš",
  numeri: {
    immobiliOnline: "nepremičnin na spletu na štirih spletnih mestih skupine",
    tour3d: "predstavitev na triestevillas.com s 3D-ogledom",
    ytViste: "ogledov na kanalu YouTube TriesteVillas",
    compratori12m: "povpraševanj kupcev v zadnjih dvanajstih mesecih",
    visite12m: "opravljenih ogledov v zadnjih dvanajstih mesecih",
    pcAccessi: "aktivnih dostopov do Private Collection v Trstu",
    ytVideo: "videoposnetkov na kanalu YouTube, od leta 2015",
    fotoRegistroAi: "fotografij z evidenco preglednosti glede UI",
  },
  home: "Nazaj na prvo stran",
};

export const COMUNE: Record<Lingua, Comune> = { it, en, de, sl };
