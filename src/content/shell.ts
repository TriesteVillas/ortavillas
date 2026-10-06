import type { Lingua } from "@/lib/rotte";

// I recapiti e la ragione sociale: UNA fonte. Il numero 347 8628738 è dedicato solo a
// questo sito (ogni chiamata lì è per definizione un lead OrtaVillas: README della v1).
export const RECAPITI = {
  email: "richieste@triestevillas.com",
  telefono: "+39 347 8628738",
  tel: "+393478628738",
  wa: "393478628738",
};

export const SOCIETA = {
  nome: "TriesteVillas srl",
  indirizzo: "Via Milano 5, 34132 Trieste",
  piva: "01235580329",
  rea: "TS 134793",
  capitale: "10.200,00 €",
  pec: "milou@pec.emailc.it",
};

export const EDIZIONE = { numero: "01", data: "2026-10-06" };

/** Le città dove si misura tutto. Coordinate di piazza del Duomo, Milano. */
export const ORIGINE = { lat: 45.4642, lon: 9.19 };

export const waLink = (testo: string) => `https://wa.me/${RECAPITI.wa}?text=${encodeURIComponent(testo)}`;

type Shell = {
  salta: string;
  nav: { luoghi: string; distanze: string; guide: string; strumenti: string; pc: string };
  navAria: string;
  linguaAria: string;
  nonTradotta: (lingua: string) => string;
  menu: string;
  chiudi: string;
  logoAria: string;
  menuSotto: { luoghi: (l: number, m: number) => string; distanze: (n: number) => string; guide: (n: number) => string; strumenti: (n: number) => string; pc: string };
  edizione: string;
  meseEdizione: string;
  statoCompatta: string;
  stato: { titolo: string; oggi: [string, string]; collezione: [string, string]; risposte: [string, string]; link: string };
  colophon: {
    claim: string;
    origineTitolo: string;
    origineNome: string;
    colonne: { luoghi: string; distanze: string; guide: string; strumenti: string; servizi: string; edizione: string; fonti: string; gruppo: string; recapiti: string };
    tutti: { luoghi: string; distanze: string; guide: string; strumenti: string };
    servizi: { proprietari: string; agenzie: string; pc: string; chiSiamo: string; contatti: string };
    edizioneLink: { dati: string; ai: string; privacy: string; noteLegali: string; cookie: string };
    comeCitare: string;
    fonti: { osm: string; rilievo: string; osrm: string; prezzi: string };
    lingueRisposta: string;
    legale: string;
    movimento: (on: boolean) => string;
    movimentoSotto: string;
    preferenzeCookie: string;
    fotoRiga: string;
    fotoLink: string;
    email: string;
    whatsapp: string;
    telefono: string;
    da: (citta: string) => string;
  };
  cookie: { testo: string; link: string; rifiuto: string; accetto: string; aria: string };
  assistente: {
    apri: string; sotto: string; aria: string; titolo: string; sottotitolo: string; nuova: string; chiudi: string;
    avviso: string; privacy: string; vuoto: string; suggerimentiTitolo: string; suggerimenti: string[];
    placeholder: string; invia: string; pensa: string; piede: string; persona: string; troppe: string; lunga: string; errore: string; riprova: string;
    spento: string; spentoPagine: string; waTesto: string;
  };
  waTesto: string;
  nonTrovata: { occhiello: string; titolo: string; testo: string; links: [string, string, string, string] };
  minuti: { min: string; h: string };
  breadcrumbHome: string;
};

const it: Shell = {
  salta: "Salta al contenuto",
  nav: { luoghi: "Luoghi", distanze: "Distanze", guide: "Guide", strumenti: "Strumenti", pc: "Private Collection" },
  navAria: "Navigazione principale",
  linguaAria: "Lingua",
  nonTradotta: (l) => `${l}: questa pagina non è ancora tradotta, si apre la prima pagina`,
  menu: "Menu",
  chiudi: "Chiudi",
  logoAria: "OrtaVillas: prima pagina",
  menuSotto: {
    luoghi: (l, m) => `${l} luoghi in ${m} mondi`,
    distanze: (n) => `Da ${n} città, senza traffico`,
    guide: (n) => `${n} guide da leggere con calma`,
    strumenti: (n) => `${n} strumenti per fare i conti`,
    pc: "Avvisatemi per primi",
  },
  edizione: "Edizione 01 · Ottobre 2026",
  meseEdizione: "Ottobre 2026",
  statoCompatta: "Ottobre 2026 · Sul lago d'Orta oggi in collezione: 0 case · Rispondiamo dal 347 8628738",
  stato: {
    titolo: "A che punto siamo · Ottobre 2026",
    oggi: ["Oggi", "Sul lago d'Orta possiamo già mediare: TriesteVillas è un'agenzia iscritta in Italia. L'atlante esce prima delle case."],
    collezione: ["In collezione", "0 case sul lago, oggi. Vi scriviamo quando entra la prima, e non prima."],
    risposte: ["Chi risponde", "Un numero dedicato solo a questo sito, 347 8628738, in italiano, inglese e tedesco."],
    link: "A che punto siamo",
  },
  colophon: {
    claim: "Un atlante del lago d'Orta, misurato in minuti da piazza del Duomo a Milano.",
    origineTitolo: "Da qui si misurano tutti i tempi",
    origineNome: "Piazza del Duomo, Milano",
    colonne: { luoghi: "Luoghi", distanze: "Distanze", guide: "Guide", strumenti: "Strumenti", servizi: "Servizi", edizione: "L'edizione", fonti: "Fonti dei dati", gruppo: "Il gruppo", recapiti: "Recapiti" },
    tutti: { luoghi: "Tutti i luoghi →", distanze: "Tutte le distanze →", guide: "Tutte le guide →", strumenti: "Tutti gli strumenti →" },
    servizi: { proprietari: "Per i proprietari", agenzie: "Per le agenzie", pc: "Private Collection", chiSiamo: "Chi siamo", contatti: "Contatti" },
    edizioneLink: { dati: "Dati e metodo", ai: "Immagini: titoli di coda", privacy: "Privacy", noteLegali: "Note legali", cookie: "Cookie" },
    comeCitare: "Come citare →",
    fonti: { osm: "© OpenStreetMap contributors", rilievo: "Rilievo: Terrain Tiles (SRTM, EU-DEM © Copernicus)", osrm: "Tempi: OSRM", prezzi: "Quotazioni: OMI, Agenzia delle Entrate" },
    lingueRisposta: "Rispondiamo in italiano, inglese e tedesco.",
    legale: `OrtaVillas è un'edizione di ${SOCIETA.nome}. ${SOCIETA.nome} · ${SOCIETA.indirizzo} · C.F. / P.IVA ${SOCIETA.piva} · Iscritta alla C.C.I.A.A. di Trieste · REA n° ${SOCIETA.rea} · Capitale sociale ${SOCIETA.capitale} i.v. · PEC ${SOCIETA.pec}`,
    movimento: (on) => `Movimento: ${on ? "sì" : "no"}`,
    movimentoSotto: "Animazioni, video in loop e scorrimento morbido",
    preferenzeCookie: "Preferenze cookie",
    fotoRiga: "Le immagini dei luoghi sono rielaborate con l'AI da foto con licenza libera.",
    fotoLink: "L'elenco completo →",
    email: "Email",
    whatsapp: "WhatsApp",
    telefono: "Telefono",
    da: (c) => `Da ${c}`,
  },
  cookie: {
    testo: "Usiamo Google Analytics per capire quali pagine aiutano di più chi legge. Solo con il vostro consenso: prima della scelta non si registra nulla.",
    link: "Privacy e cookie",
    rifiuto: "Rifiuto",
    accetto: "Accetto",
    aria: "Cookie di statistica",
  },
  assistente: {
    apri: "Fate una domanda",
    sotto: "Assistente AI",
    aria: "Apri l'assistente AI: domande su luoghi, tempi, prezzi e procedure",
    titolo: "Assistente AI",
    sottotitolo: "Risponde con i testi e i dati di OrtaVillas",
    nuova: "Nuova conversazione",
    chiudi: "Chiudi l'assistente",
    avviso: "Vi risponde un sistema di intelligenza artificiale, non una persona. Usa i testi e i dati di questo sito, ma può sbagliare: prima di decidere, controllate le fonti o scriveteci. Le conversazioni sono registrate nel CRM di TriesteVillas e il nostro team può rileggerle.",
    privacy: "Informativa sulla privacy",
    vuoto: "Potete chiedere dei luoghi intorno al lago, dei tempi in auto, delle quotazioni, delle imposte e di come si compra o si vende in Italia.",
    suggerimentiTitolo: "Qualche domanda per cominciare",
    suggerimenti: ["Quanto costa comprare a Orta San Giulio?", "Quanto dista il lago da Zurigo?", "Che tasse paga chi compra una seconda casa?", "Sponda est o sponda ovest: che differenza c'è?"],
    placeholder: "Scrivete la vostra domanda…",
    invia: "Invia",
    pensa: "Sto pensando…",
    piede: "Risposte generate dall'intelligenza artificiale: verificatele sulle pagine citate.",
    persona: "Preferite una persona?",
    troppe: "Avete fatto molte domande in poco tempo. Riprovate fra qualche minuto, oppure scriveteci.",
    lunga: "La domanda è troppo lunga: riassumetela in poche righe.",
    errore: "Non sono riuscito a rispondere. Riprovate fra poco, oppure scriveteci.",
    riprova: "Riprova",
    spento: "L'assistente AI di questo sito non è ancora acceso, quindi a questa domanda non posso rispondere io.",
    spentoPagine: "Queste pagine ne parlano:",
    waTesto: "Buongiorno, vi scrivo da ortavillas.com.",
  },
  waTesto: "Buongiorno, vi scrivo da ortavillas.com: vorrei parlare di una casa sul lago d'Orta.",
  nonTrovata: {
    occhiello: "Fuori carta",
    titolo: "Questa pagina non è sulla carta.",
    testo: "L'indirizzo non porta da nessuna parte: forse è cambiato, forse è scritto male. Da qui si riparte.",
    links: ["Prima pagina", "I luoghi", "Le distanze", "Le guide"],
  },
  minuti: { min: "min", h: "h" },
  breadcrumbHome: "OrtaVillas",
};

const en: Shell = {
  salta: "Skip to content",
  nav: { luoghi: "Places", distanze: "Distances", guide: "Guides", strumenti: "Tools", pc: "Private Collection" },
  navAria: "Main navigation",
  linguaAria: "Language",
  nonTradotta: (l) => `${l}: this page is not translated yet, the home page opens`,
  menu: "Menu",
  chiudi: "Close",
  logoAria: "OrtaVillas: home page",
  menuSotto: {
    luoghi: (l, m) => `${l} places in ${m} worlds`,
    distanze: (n) => `From ${n} cities, no traffic`,
    guide: (n) => `${n} guides to read at leisure`,
    strumenti: (n) => `${n} tools to do the sums`,
    pc: "Tell me first",
  },
  edizione: "Edition 01 · October 2026",
  meseEdizione: "October 2026",
  statoCompatta: "October 2026 · Lake Orta homes in the collection today: 0 · We answer on +39 347 8628738",
  stato: {
    titolo: "Where we stand · October 2026",
    oggi: ["Today", "On Lake Orta we can already act as agents: TriesteVillas is an estate agency registered in Italy. The atlas comes out before the homes."],
    collezione: ["In the collection", "0 homes on the lake, today. We write to you when the first one arrives, and not before."],
    risposte: ["Who answers", "A number dedicated to this site only, +39 347 8628738, in English, Italian and German."],
    link: "Where we stand",
  },
  colophon: {
    claim: "An atlas of Lake Orta, measured in minutes from Piazza del Duomo in Milan.",
    origineTitolo: "All times are measured from here",
    origineNome: "Piazza del Duomo, Milan",
    colonne: { luoghi: "Places", distanze: "Distances", guide: "Guides", strumenti: "Tools", servizi: "Services", edizione: "The edition", fonti: "Data sources", gruppo: "The group", recapiti: "Contacts" },
    tutti: { luoghi: "All places →", distanze: "All distances →", guide: "All guides →", strumenti: "All tools →" },
    servizi: { proprietari: "For owners", agenzie: "For agencies", pc: "Private Collection", chiSiamo: "About us", contatti: "Contact" },
    edizioneLink: { dati: "Data and method", ai: "Images: closing credits", privacy: "Privacy", noteLegali: "Imprint", cookie: "Cookies" },
    comeCitare: "How to cite →",
    fonti: { osm: "© OpenStreetMap contributors", rilievo: "Relief: Terrain Tiles (SRTM, EU-DEM © Copernicus)", osrm: "Times: OSRM", prezzi: "Quotations: OMI, Italian Revenue Agency" },
    lingueRisposta: "We reply in English, Italian and German.",
    legale: `OrtaVillas is an edition of ${SOCIETA.nome}. ${SOCIETA.nome} · ${SOCIETA.indirizzo}, Italy · Tax code / VAT IT${SOCIETA.piva} · Registered with the Trieste Chamber of Commerce · REA no. ${SOCIETA.rea} · Share capital €10,200.00 fully paid · PEC ${SOCIETA.pec}`,
    movimento: (on) => `Motion: ${on ? "on" : "off"}`,
    movimentoSotto: "Animations, looping video and smooth scrolling",
    preferenzeCookie: "Cookie preferences",
    fotoRiga: "The images of the places are reworked with AI from freely licensed photos.",
    fotoLink: "The full list →",
    email: "Email",
    whatsapp: "WhatsApp",
    telefono: "Phone",
    da: (c) => `From ${c}`,
  },
  cookie: {
    testo: "We use Google Analytics to understand which pages help readers most. Only with your consent: nothing is recorded before you choose.",
    link: "Privacy and cookies",
    rifiuto: "Decline",
    accetto: "Accept",
    aria: "Statistics cookies",
  },
  assistente: {
    apri: "Ask a question",
    sotto: "AI assistant",
    aria: "Open the AI assistant: questions on places, times, prices and procedures",
    titolo: "AI assistant",
    sottotitolo: "Answers with the texts and data of OrtaVillas",
    nuova: "New conversation",
    chiudi: "Close the assistant",
    avviso: "You are talking to an artificial intelligence system, not a person. It uses the texts and data of this site, but it can be wrong: check the sources or write to us before deciding. Conversations are recorded in the TriesteVillas CRM and our team may read them.",
    privacy: "Privacy notice",
    vuoto: "You can ask about the places around the lake, drive times, price quotations, taxes and how to buy or sell in Italy.",
    suggerimentiTitolo: "A few questions to start",
    suggerimenti: ["What does it cost to buy in Orta San Giulio?", "How far is the lake from Zurich?", "What taxes does a second-home buyer pay?", "East shore or west shore: what is the difference?"],
    placeholder: "Write your question…",
    invia: "Send",
    pensa: "Thinking…",
    piede: "Answers generated by artificial intelligence: check them on the pages cited.",
    persona: "Prefer a person?",
    troppe: "You have asked many questions in a short time. Try again in a few minutes, or write to us.",
    lunga: "The question is too long: summarise it in a few lines.",
    errore: "I could not answer. Try again shortly, or write to us.",
    riprova: "Try again",
    spento: "The AI assistant of this site is not switched on yet, so I cannot answer this question myself.",
    spentoPagine: "These pages cover it:",
    waTesto: "Hello, I am writing from ortavillas.com.",
  },
  waTesto: "Hello, I am writing from ortavillas.com: I would like to talk about a home on Lake Orta.",
  nonTrovata: {
    occhiello: "Off the map",
    titolo: "This page is not on the map.",
    testo: "The address leads nowhere: perhaps it changed, perhaps it is misspelt. Start again from here.",
    links: ["Home page", "The places", "The distances", "The guides"],
  },
  minuti: { min: "min", h: "h" },
  breadcrumbHome: "OrtaVillas",
};

const de: Shell = {
  salta: "Zum Inhalt springen",
  nav: { luoghi: "Orte", distanze: "Entfernungen", guide: "Ratgeber", strumenti: "Werkzeuge", pc: "Private Collection" },
  navAria: "Hauptnavigation",
  linguaAria: "Sprache",
  nonTradotta: (l) => `${l}: Diese Seite ist noch nicht übersetzt, es öffnet sich die Startseite`,
  menu: "Menü",
  chiudi: "Schließen",
  logoAria: "OrtaVillas: Startseite",
  menuSotto: {
    luoghi: (l, m) => `${l} Orte in ${m} Welten`,
    distanze: (n) => `Aus ${n} Städten, ohne Verkehr`,
    guide: (n) => `${n} Ratgeber zum Nachlesen`,
    strumenti: (n) => `${n} Werkzeuge zum Rechnen`,
    pc: "Benachrichtigen Sie mich zuerst",
  },
  edizione: "Ausgabe 01 · Oktober 2026",
  meseEdizione: "Oktober 2026",
  statoCompatta: "Oktober 2026 · Häuser am Ortasee in der Collection heute: 0 · Wir antworten unter +39 347 8628738",
  stato: {
    titolo: "Wo wir stehen · Oktober 2026",
    oggi: ["Heute", "Am Ortasee dürfen wir bereits vermitteln: TriesteVillas ist ein in Italien eingetragenes Maklerbüro. Der Atlas erscheint vor den Häusern."],
    collezione: ["In der Collection", "Heute 0 Häuser am See. Wir schreiben Ihnen, wenn das erste dazukommt, und nicht vorher."],
    risposte: ["Wer antwortet", "Eine Nummer nur für diese Website, +39 347 8628738, auf Deutsch, Englisch und Italienisch."],
    link: "Wo wir stehen",
  },
  colophon: {
    claim: "Ein Atlas des Ortasees, gemessen in Minuten von der Piazza del Duomo in Mailand.",
    origineTitolo: "Von hier aus werden alle Zeiten gemessen",
    origineNome: "Piazza del Duomo, Mailand",
    colonne: { luoghi: "Orte", distanze: "Entfernungen", guide: "Ratgeber", strumenti: "Werkzeuge", servizi: "Leistungen", edizione: "Die Ausgabe", fonti: "Datenquellen", gruppo: "Die Gruppe", recapiti: "Kontakt" },
    tutti: { luoghi: "Alle Orte →", distanze: "Alle Entfernungen →", guide: "Alle Ratgeber →", strumenti: "Alle Werkzeuge →" },
    servizi: { proprietari: "Für Eigentümer", agenzie: "Für Makler", pc: "Private Collection", chiSiamo: "Über uns", contatti: "Kontakt" },
    edizioneLink: { dati: "Daten und Methode", ai: "Bilder: Abspann", privacy: "Datenschutz", noteLegali: "Impressum", cookie: "Cookies" },
    comeCitare: "Wie man zitiert →",
    fonti: { osm: "© OpenStreetMap-Mitwirkende", rilievo: "Relief: Terrain Tiles (SRTM, EU-DEM © Copernicus)", osrm: "Fahrzeiten: OSRM", prezzi: "Richtwerte: OMI, italienische Steuerbehörde" },
    lingueRisposta: "Wir antworten auf Deutsch, Englisch und Italienisch.",
    legale: `OrtaVillas ist eine Ausgabe der ${SOCIETA.nome}. ${SOCIETA.nome} · ${SOCIETA.indirizzo}, Italien · Steuernr. / USt-IdNr. IT${SOCIETA.piva} · Eingetragen bei der Handelskammer Triest · REA Nr. ${SOCIETA.rea} · Stammkapital 10.200,00 € voll eingezahlt · PEC ${SOCIETA.pec}`,
    movimento: (on) => `Bewegung: ${on ? "an" : "aus"}`,
    movimentoSotto: "Animationen, Videoschleifen und weiches Scrollen",
    preferenzeCookie: "Cookie-Einstellungen",
    fotoRiga: "Die Bilder der Orte sind mit KI aus frei lizenzierten Fotos bearbeitet.",
    fotoLink: "Die vollständige Liste →",
    email: "E-Mail",
    whatsapp: "WhatsApp",
    telefono: "Telefon",
    da: (c) => `Aus ${c}`,
  },
  cookie: {
    testo: "Wir nutzen Google Analytics, um zu verstehen, welche Seiten unseren Lesern am meisten helfen. Nur mit Ihrer Zustimmung: Vor Ihrer Wahl wird nichts erfasst.",
    link: "Datenschutz und Cookies",
    rifiuto: "Ablehnen",
    accetto: "Zustimmen",
    aria: "Statistik-Cookies",
  },
  assistente: {
    apri: "Stellen Sie eine Frage",
    sotto: "KI-Assistent",
    aria: "KI-Assistent öffnen: Fragen zu Orten, Fahrzeiten, Preisen und Abläufen",
    titolo: "KI-Assistent",
    sottotitolo: "Antwortet mit den Texten und Daten von OrtaVillas",
    nuova: "Neues Gespräch",
    chiudi: "Assistent schließen",
    avviso: "Ihnen antwortet ein System künstlicher Intelligenz, kein Mensch. Es nutzt die Texte und Daten dieser Website, kann sich aber irren: Prüfen Sie vor einer Entscheidung die Quellen oder schreiben Sie uns. Die Gespräche werden im CRM von TriesteVillas gespeichert und können von unserem Team gelesen werden.",
    privacy: "Datenschutzerklärung",
    vuoto: "Sie können nach den Orten rund um den See fragen, nach Fahrzeiten, Preisrichtwerten, Steuern und danach, wie man in Italien kauft oder verkauft.",
    suggerimentiTitolo: "Ein paar Fragen für den Anfang",
    suggerimenti: ["Was kostet ein Kauf in Orta San Giulio?", "Wie weit ist der See von Zürich entfernt?", "Welche Steuern zahlt, wer ein Zweithaus kauft?", "Ostufer oder Westufer: Was ist der Unterschied?"],
    placeholder: "Schreiben Sie Ihre Frage…",
    invia: "Senden",
    pensa: "Ich denke nach…",
    piede: "Von künstlicher Intelligenz erzeugte Antworten: Prüfen Sie sie auf den genannten Seiten.",
    persona: "Lieber mit einem Menschen sprechen?",
    troppe: "Sie haben in kurzer Zeit viele Fragen gestellt. Versuchen Sie es in einigen Minuten erneut oder schreiben Sie uns.",
    lunga: "Die Frage ist zu lang: Fassen Sie sie in wenigen Zeilen zusammen.",
    errore: "Ich konnte nicht antworten. Versuchen Sie es gleich noch einmal oder schreiben Sie uns.",
    riprova: "Erneut versuchen",
    spento: "Der KI-Assistent dieser Website ist noch nicht eingeschaltet, deshalb kann ich diese Frage nicht selbst beantworten.",
    spentoPagine: "Diese Seiten behandeln das Thema:",
    waTesto: "Guten Tag, ich schreibe Ihnen von ortavillas.com.",
  },
  waTesto: "Guten Tag, ich schreibe Ihnen von ortavillas.com: Ich möchte über ein Haus am Ortasee sprechen.",
  nonTrovata: {
    occhiello: "Außerhalb der Karte",
    titolo: "Diese Seite steht nicht auf der Karte.",
    testo: "Die Adresse führt nirgendwohin: Vielleicht hat sie sich geändert, vielleicht ist sie falsch geschrieben. Von hier geht es weiter.",
    links: ["Startseite", "Die Orte", "Die Entfernungen", "Die Ratgeber"],
  },
  minuti: { min: "Min.", h: "Std." },
  breadcrumbHome: "OrtaVillas",
};

const sl: Shell = {
  salta: "Preskoči na vsebino",
  nav: { luoghi: "Kraji", distanze: "Razdalje", guide: "Vodniki", strumenti: "Orodja", pc: "Private Collection" },
  navAria: "Glavna navigacija",
  linguaAria: "Jezik",
  nonTradotta: (l) => `${l}: ta stran še ni prevedena, odpre se prva stran`,
  menu: "Meni",
  chiudi: "Zapri",
  logoAria: "OrtaVillas: prva stran",
  menuSotto: {
    luoghi: (l, m) => `${l} krajev v ${m} svetovih`,
    distanze: (n) => `Iz ${n} mest, brez prometa`,
    guide: (n) => `${n} vodnikov za branje v miru`,
    strumenti: (n) => `${n} orodij za izračune`,
    pc: "Obvestite me prvega",
  },
  edizione: "Izdaja 01 · oktober 2026",
  meseEdizione: "oktober 2026",
  statoCompatta: "Oktober 2026 · Hiš ob jezeru Orta v zbirki danes: 0 · Odgovarjamo na +39 347 8628738",
  stato: {
    titolo: "Kje smo · oktober 2026",
    oggi: ["Danes", "Ob jezeru Orta že lahko posredujemo: TriesteVillas je nepremičninska agencija, vpisana v Italiji. Atlas izide pred hišami."],
    collezione: ["V zbirki", "Danes 0 hiš ob jezeru. Pisali vam bomo, ko pride prva, in ne prej."],
    risposte: ["Kdo odgovarja", "Številka samo za to spletno mesto, +39 347 8628738, v italijanščini, angleščini in nemščini."],
    link: "Kje smo",
  },
  colophon: {
    claim: "Atlas jezera Orta, izmerjen v minutah od trga Piazza del Duomo v Milanu.",
    origineTitolo: "Od tu merimo vse čase",
    origineNome: "Piazza del Duomo, Milano",
    colonne: { luoghi: "Kraji", distanze: "Razdalje", guide: "Vodniki", strumenti: "Orodja", servizi: "Storitve", edizione: "Izdaja", fonti: "Viri podatkov", gruppo: "Skupina", recapiti: "Stik" },
    tutti: { luoghi: "Vsi kraji →", distanze: "Vse razdalje →", guide: "Vsi vodniki →", strumenti: "Vsa orodja →" },
    servizi: { proprietari: "Za lastnike", agenzie: "Za agencije", pc: "Private Collection", chiSiamo: "O nas", contatti: "Stik" },
    edizioneLink: { dati: "Podatki in metoda", ai: "Slike: odjavna špica", privacy: "Zasebnost", noteLegali: "Pravno obvestilo", cookie: "Piškotki" },
    comeCitare: "Kako citirati →",
    fonti: { osm: "© sodelavci OpenStreetMap", rilievo: "Relief: Terrain Tiles (SRTM, EU-DEM © Copernicus)", osrm: "Časi: OSRM", prezzi: "Ocene vrednosti: OMI, italijanska davčna uprava" },
    lingueRisposta: "Odgovarjamo v italijanščini, angleščini in nemščini.",
    legale: `OrtaVillas je izdaja družbe ${SOCIETA.nome}. ${SOCIETA.nome} · ${SOCIETA.indirizzo}, Italija · Davčna št. / ID za DDV IT${SOCIETA.piva} · Vpisana pri Gospodarski zbornici v Trstu · REA št. ${SOCIETA.rea} · Osnovni kapital 10.200,00 € v celoti vplačan · PEC ${SOCIETA.pec}`,
    movimento: (on) => `Gibanje: ${on ? "vključeno" : "izključeno"}`,
    movimentoSotto: "Animacije, video v zanki in mehko drsenje",
    preferenzeCookie: "Nastavitve piškotkov",
    fotoRiga: "Slike krajev so z umetno inteligenco predelane iz fotografij s prosto licenco.",
    fotoLink: "Celoten seznam →",
    email: "E-pošta",
    whatsapp: "WhatsApp",
    telefono: "Telefon",
    da: (c) => `Iz kraja ${c}`,
  },
  cookie: {
    testo: "Google Analytics uporabljamo, da razumemo, katere strani bralcem najbolj pomagajo. Samo z vašim soglasjem: preden izberete, se ne beleži nič.",
    link: "Zasebnost in piškotki",
    rifiuto: "Zavrnem",
    accetto: "Sprejmem",
    aria: "Statistični piškotki",
  },
  assistente: {
    apri: "Zastavite vprašanje",
    sotto: "Pomočnik UI",
    aria: "Odprite pomočnika UI: vprašanja o krajih, časih, cenah in postopkih",
    titolo: "Pomočnik UI",
    sottotitolo: "Odgovarja z besedili in podatki OrtaVillas",
    nuova: "Nov pogovor",
    chiudi: "Zapri pomočnika",
    avviso: "Odgovarja vam sistem umetne inteligence, ne človek. Uporablja besedila in podatke tega spletnega mesta, a se lahko zmoti: preden se odločite, preverite vire ali nam pišite. Pogovori se shranjujejo v CRM TriesteVillas in naša ekipa jih lahko prebere.",
    privacy: "Obvestilo o zasebnosti",
    vuoto: "Vprašate lahko o krajih okoli jezera, o časih vožnje, ocenah vrednosti, davkih in o tem, kako se v Italiji kupuje ali prodaja.",
    suggerimentiTitolo: "Nekaj vprašanj za začetek",
    suggerimenti: ["Koliko stane nakup v Orti San Giulio?", "Kako daleč je jezero od Züricha?", "Katere davke plača kupec druge hiše?", "Vzhodna ali zahodna obala: kakšna je razlika?"],
    placeholder: "Napišite svoje vprašanje …",
    invia: "Pošlji",
    pensa: "Razmišljam …",
    piede: "Odgovore ustvarja umetna inteligenca: preverite jih na navedenih straneh.",
    persona: "Bi raje govorili s človekom?",
    troppe: "V kratkem času ste zastavili veliko vprašanj. Poskusite znova čez nekaj minut ali nam pišite.",
    lunga: "Vprašanje je predolgo: povzemite ga v nekaj vrsticah.",
    errore: "Nisem mogel odgovoriti. Poskusite znova čez trenutek ali nam pišite.",
    riprova: "Poskusi znova",
    spento: "Pomočnik UI tega spletnega mesta še ni vključen, zato na to vprašanje ne morem odgovoriti sam.",
    spentoPagine: "O tem govorijo te strani:",
    waTesto: "Dober dan, pišem vam z ortavillas.com.",
  },
  waTesto: "Dober dan, pišem vam z ortavillas.com: rad bi govoril o hiši ob jezeru Orta.",
  nonTrovata: {
    occhiello: "Zunaj zemljevida",
    titolo: "Te strani ni na zemljevidu.",
    testo: "Naslov ne vodi nikamor: morda se je spremenil, morda je napačno zapisan. Od tu se začne znova.",
    links: ["Prva stran", "Kraji", "Razdalje", "Vodniki"],
  },
  minuti: { min: "min", h: "h" },
  breadcrumbHome: "OrtaVillas",
};

export const SHELL: Record<Lingua, Shell> = { it, en, de, sl };
