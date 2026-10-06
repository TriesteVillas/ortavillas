import type { Lingua } from "@/lib/rotte";

// Cookie e consenso. Le chiavi elencate sono quelle che il codice scrive davvero:
// ov_consenso_v1 (Preferenze.tsx), ov-motion (layout + Preferenze), ov-origine (Sestante,
// TempiDaCasa), ov-documenti-vendita (strumento «documenti per vendere»); _ga solo col sì.
export type TestiCookie = {
  titolo: string; descrizione: string; briciola: string; occhiello: string; h1: string; lead: string;
  indice: { scelta: string; elenco: string; analytics: string; terzi: string; browser: string };
  scelta: string; bottone: string; senzaGa: string;
  colonne: [string, string, string, string, string];
  locale: string; finche: string; dueAnni: string; cookie: string;
  usi: { consenso: string; motion: string; origine: string; documenti: string; ga: string };
  analytics: string; terzi: string; browser: string;
};

const it: TestiCookie = {
  titolo: "Cookie e consenso · OrtaVillas",
  descrizione: "Quali cookie e quali dati salva nel browser ortavillas.com, a che cosa servono e come cambiare la vostra scelta: Google Analytics parte solo dopo il consenso.",
  briciola: "Cookie",
  occhiello: "Note legali",
  h1: "Cookie e consenso",
  lead: "Questo sito usa un solo servizio di statistica, Google Analytics, e lo usa per contare solo se dite di sì.",
  indice: { scelta: "La vostra scelta", elenco: "Che cosa salviamo nel vostro browser", analytics: "Google Analytics, nel dettaglio", terzi: "Video e tour 3D", browser: "Dal vostro browser" },
  scelta: "Alla prima visita un banner vi chiede se accettate le statistiche di Google Analytics. Potete cambiare idea quando volete, con il bottone qui sotto o con «Preferenze cookie» in fondo a ogni pagina.",
  bottone: "Preferenze cookie",
  senzaGa: "Se il banner non compare, le statistiche non sono attive su questo sito: non c'è niente da accettare.",
  colonne: ["Nome", "Tipo", "Di chi", "A che cosa serve", "Durata"],
  locale: "Archivio locale del browser", finche: "Finché non lo cancellate", dueAnni: "Fino a due anni", cookie: "Cookie",
  usi: {
    consenso: "Ricorda se avete accettato o rifiutato le statistiche.",
    motion: "Ricorda se avete spento il movimento delle animazioni.",
    origine: "Ricorda la città di partenza scelta per i tempi di viaggio.",
    documenti: "Ricorda le voci che avete spuntato nella lista dei documenti per vendere.",
    ga: "Statistiche di visita aggregate. Solo con il vostro consenso.",
  },
  analytics: "Il tag di Google si carica in modalità di consenso (Consent Mode v2), con l'archiviazione delle statistiche negata. Prima del vostro sì non scrive cookie di statistica; può inviare a Google segnali senza cookie e senza identificativi, che Google usa per stime aggregate. Con il sì scrive i cookie _ga e _ga_*. Nessun cookie pubblicitario, in nessun caso.",
  terzi: "I video di YouTube, in modalità senza cookie, e i tour di Matterport si caricano solo quando li aprite con un clic. Da quel momento YouTube e Matterport possono impostare cookie propri.",
  browser: "Potete cancellare cookie e archivio locale anche dalle impostazioni del browser: il sito continua a funzionare. I dettagli sul trattamento dei dati sono nell'[informativa sulla privacy](privacy).",
};

const en: TestiCookie = {
  titolo: "Cookies and consent · OrtaVillas",
  descrizione: "Which cookies and browser storage ortavillas.com uses, what they are for and how to change your choice: Google Analytics starts only after consent.",
  briciola: "Cookies",
  occhiello: "Legal",
  h1: "Cookies and consent",
  lead: "This site uses a single statistics service, Google Analytics, and uses it to count only if you say yes.",
  indice: { scelta: "Your choice", elenco: "What we store in your browser", analytics: "Google Analytics in detail", terzi: "Videos and 3D tours", browser: "From your browser" },
  scelta: "On your first visit a banner asks whether you accept Google Analytics statistics. You can change your mind at any time, with the button below or with “Cookie preferences” at the foot of every page.",
  bottone: "Cookie preferences",
  senzaGa: "If the banner does not appear, statistics are not active on this site: there is nothing to accept.",
  colonne: ["Name", "Type", "Whose", "What it is for", "Duration"],
  locale: "Browser local storage", finche: "Until you delete it", dueAnni: "Up to two years", cookie: "Cookie",
  usi: {
    consenso: "Remembers whether you accepted or declined statistics.",
    motion: "Remembers whether you switched off animation movement.",
    origine: "Remembers the departure city chosen for travel times.",
    documenti: "Remembers the items you ticked in the documents-to-sell checklist.",
    ga: "Aggregated visit statistics. Only with your consent.",
  },
  analytics: "Google's tag loads in consent mode (Consent Mode v2), with analytics storage denied. Before your yes it writes no statistics cookies; it may send Google cookieless signals without identifiers, which Google uses for aggregate estimates. With your yes it writes the _ga and _ga_* cookies. No advertising cookies, ever.",
  terzi: "YouTube videos, in no-cookie mode, and Matterport tours load only when you open them with a click. From then on YouTube and Matterport may set their own cookies.",
  browser: "You can also delete cookies and local storage from your browser settings: the site keeps working. Details on data processing are in the [privacy notice](privacy).",
};

const de: TestiCookie = {
  titolo: "Cookies und Einwilligung · OrtaVillas",
  descrizione: "Welche Cookies und Browserdaten ortavillas.com speichert, wozu sie dienen und wie Sie Ihre Wahl ändern: Google Analytics startet erst nach Ihrer Einwilligung.",
  briciola: "Cookies",
  occhiello: "Rechtliches",
  h1: "Cookies und Einwilligung",
  lead: "Diese Website nutzt einen einzigen Statistikdienst, Google Analytics, und zählt damit nur, wenn Sie zustimmen.",
  indice: { scelta: "Ihre Wahl", elenco: "Was wir in Ihrem Browser speichern", analytics: "Google Analytics im Detail", terzi: "Videos und 3D-Rundgänge", browser: "In Ihrem Browser" },
  scelta: "Beim ersten Besuch fragt ein Banner, ob Sie die Statistik von Google Analytics akzeptieren. Sie können Ihre Meinung jederzeit ändern, mit der Schaltfläche unten oder mit „Cookie-Einstellungen“ am Fuß jeder Seite.",
  bottone: "Cookie-Einstellungen",
  senzaGa: "Erscheint kein Banner, ist die Statistik auf dieser Website nicht aktiv: Dann gibt es nichts zuzustimmen.",
  colonne: ["Name", "Art", "Von wem", "Wozu", "Dauer"],
  locale: "Lokaler Browserspeicher", finche: "Bis Sie ihn löschen", dueAnni: "Bis zu zwei Jahre", cookie: "Cookie",
  usi: {
    consenso: "Merkt sich, ob Sie die Statistik akzeptiert oder abgelehnt haben.",
    motion: "Merkt sich, ob Sie die Bewegung der Animationen ausgeschaltet haben.",
    origine: "Merkt sich die für Fahrzeiten gewählte Ausgangsstadt.",
    documenti: "Merkt sich, was Sie in der Liste der Verkaufsunterlagen abgehakt haben.",
    ga: "Zusammengefasste Besuchsstatistik. Nur mit Ihrer Einwilligung.",
  },
  analytics: "Das Google-Tag lädt im Einwilligungsmodus (Consent Mode v2), mit verweigerter Statistikspeicherung. Vor Ihrem Ja schreibt es keine Statistik-Cookies; es kann Google cookielose Signale ohne Kennungen senden, die Google für zusammengefasste Schätzungen nutzt. Mit Ihrem Ja schreibt es die Cookies _ga und _ga_*. Keine Werbe-Cookies, in keinem Fall.",
  terzi: "YouTube-Videos im cookiefreien Modus und Matterport-Rundgänge laden erst, wenn Sie sie per Klick öffnen. Ab dann können YouTube und Matterport eigene Cookies setzen.",
  browser: "Cookies und lokalen Speicher können Sie auch in den Browsereinstellungen löschen: Die Website funktioniert weiter. Einzelheiten zur Datenverarbeitung stehen in der [Datenschutzerklärung](privacy).",
};

const sl: TestiCookie = {
  titolo: "Piškotki in soglasje · OrtaVillas",
  descrizione: "Katere piškotke in podatke v brskalniku uporablja ortavillas.com, čemu služijo in kako spremenite svojo izbiro: Google Analytics se zažene šele po soglasju.",
  briciola: "Piškotki",
  occhiello: "Pravno",
  h1: "Piškotki in soglasje",
  lead: "To spletno mesto uporablja eno samo storitev za statistiko, Google Analytics, in z njo šteje le, če se strinjate.",
  indice: { scelta: "Vaša izbira", elenco: "Kaj shranjujemo v vašem brskalniku", analytics: "Google Analytics podrobno", terzi: "Videoposnetki in 3D-ogledi", browser: "V vašem brskalniku" },
  scelta: "Ob prvem obisku vas pasica vpraša, ali sprejmete statistiko Google Analytics. Premislite si lahko kadar koli, z gumbom spodaj ali z »Nastavitve piškotkov« na dnu vsake strani.",
  bottone: "Nastavitve piškotkov",
  senzaGa: "Če se pasica ne prikaže, statistika na tem spletnem mestu ni dejavna: ni česa sprejeti.",
  colonne: ["Ime", "Vrsta", "Čigav", "Čemu služi", "Trajanje"],
  locale: "Lokalna shramba brskalnika", finche: "Dokler ga ne izbrišete", dueAnni: "Do dveh let", cookie: "Piškotek",
  usi: {
    consenso: "Zapomni si, ali ste statistiko sprejeli ali zavrnili.",
    motion: "Zapomni si, ali ste izklopili gibanje animacij.",
    origine: "Zapomni si izhodiščno mesto, izbrano za čase potovanja.",
    documenti: "Zapomni si postavke, ki ste jih označili na seznamu dokumentov za prodajo.",
    ga: "Združena statistika obiskov. Samo z vašim soglasjem.",
  },
  analytics: "Googlova oznaka se naloži v načinu soglasja (Consent Mode v2), z zavrnjeno shrambo statistike. Pred vašim »da« ne zapiše statističnih piškotkov; Googlu lahko pošlje signale brez piškotkov in brez identifikatorjev, ki jih Google uporablja za združene ocene. Z vašim »da« zapiše piškotka _ga in _ga_*. Oglaševalskih piškotkov ni, v nobenem primeru.",
  terzi: "Videoposnetki YouTube v načinu brez piškotkov in ogledi Matterport se naložijo šele, ko jih odprete s klikom. Od takrat lahko YouTube in Matterport nastavljata svoje piškotke.",
  browser: "Piškotke in lokalno shrambo lahko izbrišete tudi v nastavitvah brskalnika: spletno mesto deluje naprej. Podrobnosti o obdelavi podatkov so v [obvestilu o zasebnosti](privacy).",
};

export const COOKIE: Record<Lingua, TestiCookie> = { it, en, de, sl };
