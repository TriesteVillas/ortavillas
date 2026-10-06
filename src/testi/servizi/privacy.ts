import type { Lingua } from "@/lib/rotte";
import type { SezioneLegale } from "@/components/servizi/Parti";
import { RECAPITI, SOCIETA } from "@/content/shell";

// Informativa sulla privacy (GDPR) di ortavillas.com. I link interni si scrivono [testo](chiave).
export type TestiLegale = { titolo: string; descrizione: string; briciola: string; occhiello: string; h1: string; lead: string; sezioni: SezioneLegale[] };

const E = RECAPITI.email;

const it: TestiLegale = {
  titolo: "Informativa sulla privacy · OrtaVillas",
  descrizione: "Come trattiamo i dati personali su ortavillas.com: i moduli, il CRM di TriesteVillas, l'assistente AI, Google Analytics solo con il vostro consenso, i vostri diritti.",
  briciola: "Privacy",
  occhiello: "Note legali",
  h1: "Informativa sulla privacy",
  lead: "Come trattiamo i dati personali raccolti da ortavillas.com, secondo il Regolamento (UE) 2016/679 (GDPR). Il sito è di TriesteVillas srl.",
  sezioni: [
    { id: "titolare", titolo: "Titolare del trattamento", blocchi: [
      `${SOCIETA.nome}, ${SOCIETA.indirizzo}, Italia · C.F. e P.IVA ${SOCIETA.piva} · email [${E}](mailto:${E}) · PEC ${SOCIETA.pec}.`,
      "ortavillas.com è un sito del gruppo TriesteVillas: le richieste arrivano alle stesse persone che lavorano a Trieste.",
    ] },
    { id: "dati", titolo: "Quali dati", blocchi: [
      { lista: [
        "Modulo della Private Collection: email e nome e, se li indicate, telefono, lingua, paese e città di partenza, zone d'interesse, fascia di budget, orizzonte e uso, oltre alle vostre scelte sulle caselle di consenso.",
        "Modulo per i proprietari: nome, email o telefono, comune e tipo dell'immobile, superficie indicativa, la descrizione che scrivete, il link a un annuncio, quando pensate di vendere, il canale e la lingua che preferite. Non chiediamo foto.",
        "Strumenti di calcolo (per esempio la stima del valore): i dati che inserite restano nel vostro browser; arrivano a noi solo se scegliete di inviarceli con il modulo.",
        "Contatti diretti: quello che ci scrivete su WhatsApp, per email o ci dite al telefono.",
        "Navigazione: i dati tecnici che servono a mostrare le pagine (indirizzo IP, tipo di browser) e, solo con il vostro consenso, le statistiche di Google Analytics. Vedi la [pagina sui cookie](cookie).",
      ] },
    ] },
    { id: "finalita", titolo: "Perché, e su quale base", blocchi: [
      "Per rispondere alla vostra richiesta, valutare la casa che ci presentate e, se lo decidete, preparare un incarico; per avvisarvi quando entra in collezione una casa nelle zone che ci avete indicato. La base è il consenso che date con la casella del modulo (art. 6.1.a GDPR) e, per la presentazione di una casa, le misure precontrattuali che avete chiesto voi (art. 6.1.b). Per gli obblighi di legge, a partire da quelli fiscali e antiriciclaggio di un'agenzia, la legge stessa (art. 6.1.c).",
      "Senza un recapito non possiamo rispondervi; tutto il resto è facoltativo.",
    ] },
    { id: "crm", titolo: "Dove finiscono i dati", blocchi: [
      "Nel CRM di TriesteVillas, il sistema interno in cui il gruppo gestisce richieste, case e contatti. La richiesta viaggia firmata dal sito al CRM, e lì la leggono le persone autorizzate del gruppo.",
      "Per smistarla e riassumerla, il CRM può farla leggere anche a strumenti automatici, compresi strumenti di intelligenza artificiale. Nessuna decisione che vi riguardi è presa solo da una macchina (art. 22 GDPR).",
    ] },
    { id: "assistente", titolo: "L'assistente AI", blocchi: [
      "L'assistente del sito è un programma di intelligenza artificiale, e lo dichiara in apertura. Quello che gli scrivete arriva firmato al CRM di TriesteVillas, dove un modello di Anthropic (Claude) prepara la risposta partendo dai testi e dai dati di questo sito. Per rispondere e per frenare gli abusi il CRM conserva le domande, le risposte, la lingua, il paese e un'impronta dell'indirizzo IP da cui l'indirizzo non si ricava.",
      "Dalla quarta domanda l'assistente vi chiede nome ed email o telefono. Se li date, nel CRM nasce una richiesta come per i moduli, con le domande che avete fatto. La base è la vostra richiesta (art. 6.1.b GDPR) e, per quei dati, il consenso che date con la casella (art. 6.1.a). Non scrivetegli dati che non volete far leggere: le conversazioni si conservano per il tempo che serve a rispondere e a prevenire gli abusi, poi si cancellano o si rendono anonime.",
    ] },
    { id: "trieste", titolo: "Il passaggio alla Private Collection di Trieste", blocchi: [
      "Solo se spuntate la casella dedicata («Mandatemi anche le case riservate di Trieste»), la vostra iscrizione genera anche una richiesta d'accesso alla Private Collection di TriesteVillas, a Trieste. È un consenso separato: senza quella casella i vostri dati servono solo per il lago d'Orta. Se la richiesta viene approvata, le credenziali arrivano per email.",
    ] },
    { id: "agenzie", titolo: "Altre agenzie", blocchi: [
      "Oggi non passiamo dati a nessuna agenzia del lago. Se per la vostra casa lavoreremo con un'altra agenzia, i vostri dati arriveranno a lei solo con il vostro consenso, chiesto in quel momento.",
    ] },
    { id: "conservazione", titolo: "Per quanto tempo", blocchi: [
      "Finché restate iscritti, o finché serve per la casa che ci avete presentato, e poi per il tempo richiesto dagli obblighi di legge. Dopo, i dati vengono cancellati o resi anonimi. Potete chiederne la cancellazione in ogni momento.",
    ] },
    { id: "destinatari", titolo: "Chi altro li tratta", blocchi: [
      "Fornitori che lavorano per noi come responsabili del trattamento: l'hosting del sito (Vercel Inc.) e i fornitori di infrastruttura cloud del CRM, la posta elettronica (Google), i fornitori degli strumenti di intelligenza artificiale usati nel CRM e dall'assistente (fra cui Anthropic) e, solo con il vostro consenso, Google Ireland Ltd per le statistiche. Se ci scrivete su WhatsApp, il messaggio passa anche per WhatsApp, secondo le sue regole. I dati non vengono diffusi né venduti.",
    ] },
    { id: "estero", titolo: "Trasferimenti fuori dall'Unione europea", blocchi: [
      "Alcuni fornitori, fra cui l'hosting del sito negli Stati Uniti, possono trattare dati fuori dall'Unione europea. In quel caso il trasferimento si basa su garanzie adeguate, come una decisione di adeguatezza della Commissione europea o le sue clausole contrattuali tipo.",
    ] },
    { id: "diritti", titolo: "I vostri diritti", blocchi: [
      `Potete chiedere l'accesso ai vostri dati, la rettifica, la cancellazione, la limitazione e la portabilità, opporvi al trattamento e revocare il consenso in ogni momento, scrivendo a [${E}](mailto:${E}). La revoca non toglie valore a ciò che è stato fatto prima.`,
      "Potete anche proporre reclamo a un'autorità di controllo (art. 77 GDPR): in Italia il [Garante per la protezione dei dati personali](https://www.garanteprivacy.it), oppure l'autorità del paese in cui vivete o lavorate.",
    ] },
    { id: "terzi", titolo: "Video e tour 3D", blocchi: [
      "I video di YouTube, in modalità senza cookie, e i tour di Matterport si caricano solo quando li aprite con un clic. Da quel momento YouTube e Matterport possono trattare dati e impostare cookie secondo le loro regole.",
    ] },
    { id: "modifiche", titolo: "Modifiche", blocchi: [
      "Possiamo aggiornare questa informativa. La versione valida è sempre questa pagina, con la data in alto.",
    ] },
  ],
};

const en: TestiLegale = {
  titolo: "Privacy notice · OrtaVillas",
  descrizione: "How we process personal data on ortavillas.com: the forms, the TriesteVillas CRM, the AI assistant, Google Analytics only with your consent, your rights.",
  briciola: "Privacy",
  occhiello: "Legal",
  h1: "Privacy notice",
  lead: "How we process the personal data collected by ortavillas.com, under Regulation (EU) 2016/679 (GDPR). The site belongs to TriesteVillas srl.",
  sezioni: [
    { id: "titolare", titolo: "Data controller", blocchi: [
      `${SOCIETA.nome}, ${SOCIETA.indirizzo}, Italy · Tax code and VAT ${SOCIETA.piva} · email [${E}](mailto:${E}) · PEC ${SOCIETA.pec}.`,
      "ortavillas.com is a site of the TriesteVillas group: requests reach the same people who work in Trieste.",
    ] },
    { id: "dati", titolo: "What data", blocchi: [
      { lista: [
        "Private Collection form: email and name and, if you give them, phone, language, country and city of departure, areas of interest, budget band, timing and use, plus your choices on the consent boxes.",
        "Owners' form: name, email or phone, municipality and type of property, approximate area, the description you write, the link to a listing, when you plan to sell, your preferred channel and language. We do not ask for photos.",
        "Calculation tools (for example the value estimate): the data you enter stays in your browser; it reaches us only if you choose to send it with the form.",
        "Direct contact: what you write to us on WhatsApp, by email or tell us on the phone.",
        "Browsing: the technical data needed to show the pages (IP address, browser type) and, only with your consent, Google Analytics statistics. See the [cookies page](cookie).",
      ] },
    ] },
    { id: "finalita", titolo: "Why, and on what basis", blocchi: [
      "To answer your request, assess the home you present and, if you decide so, prepare an agency agreement; to tell you when a home in the areas you gave us enters the collection. The basis is the consent you give with the form's box (art. 6.1.a GDPR) and, for the presentation of a home, the pre-contractual steps you asked for (art. 6.1.b). For legal obligations, starting with an agency's tax and anti-money-laundering duties, the law itself (art. 6.1.c).",
      "Without a contact we cannot reply; everything else is optional.",
    ] },
    { id: "crm", titolo: "Where the data goes", blocchi: [
      "Into the TriesteVillas CRM, the internal system where the group manages enquiries, homes and contacts. The request travels signed from the site to the CRM, where authorised people of the group read it.",
      "To sort and summarise it, the CRM may also have it read by automated tools, including artificial intelligence tools. No decision concerning you is taken by a machine alone (art. 22 GDPR).",
    ] },
    { id: "assistente", titolo: "The AI assistant", blocchi: [
      "The site's assistant is an artificial intelligence program, and it says so at the start. What you write reaches the TriesteVillas CRM signed, where an Anthropic model (Claude) prepares the answer from this site's texts and data. To answer and to curb abuse, the CRM keeps the questions, the answers, the language, the country and a fingerprint of the IP address from which the address cannot be derived.",
      "From the fourth question the assistant asks for your name and email or phone. If you give them, a request is created in the CRM as with the forms, with the questions you asked. The basis is your request (art. 6.1.b GDPR) and, for those data, the consent you give with the box (art. 6.1.a). Do not write anything you do not want read: conversations are kept as long as needed to answer and prevent abuse, then deleted or anonymised.",
    ] },
    { id: "trieste", titolo: "Passing on to the Trieste Private Collection", blocchi: [
      "Only if you tick the dedicated box (“Send me the private homes in Trieste too”) does your sign-up also create an access request to the TriesteVillas Private Collection in Trieste. It is a separate consent: without that box your data serves Lake Orta only. If the request is approved, login details arrive by email.",
    ] },
    { id: "agenzie", titolo: "Other agencies", blocchi: [
      "Today we pass data to no agency on the lake. If we work with another agency on your home, your data will reach it only with your consent, asked for at that time.",
    ] },
    { id: "conservazione", titolo: "How long", blocchi: [
      "As long as you stay signed up, or as long as needed for the home you presented, and then for the time required by legal obligations. After that the data is deleted or anonymised. You can ask for deletion at any time.",
    ] },
    { id: "destinatari", titolo: "Who else processes it", blocchi: [
      "Providers working for us as processors: the site hosting (Vercel Inc.) and the CRM's cloud infrastructure providers, email (Google), the providers of the artificial intelligence tools used in the CRM and by the assistant (including Anthropic) and, only with your consent, Google Ireland Ltd for statistics. If you write to us on WhatsApp, the message also passes through WhatsApp, under its own rules. Data is neither published nor sold.",
    ] },
    { id: "estero", titolo: "Transfers outside the European Union", blocchi: [
      "Some providers, including the site hosting in the United States, may process data outside the European Union. In that case the transfer relies on appropriate safeguards, such as a European Commission adequacy decision or its standard contractual clauses.",
    ] },
    { id: "diritti", titolo: "Your rights", blocchi: [
      `You can request access to your data, rectification, erasure, restriction and portability, object to processing and withdraw consent at any time, by writing to [${E}](mailto:${E}). Withdrawal does not affect what was done before.`,
      "You can also lodge a complaint with a supervisory authority (art. 77 GDPR): in Italy the [Garante per la protezione dei dati personali](https://www.garanteprivacy.it), or the authority of the country where you live or work.",
    ] },
    { id: "terzi", titolo: "Videos and 3D tours", blocchi: [
      "YouTube videos, in no-cookie mode, and Matterport tours load only when you open them with a click. From then on YouTube and Matterport may process data and set cookies under their own rules.",
    ] },
    { id: "modifiche", titolo: "Changes", blocchi: [
      "We may update this notice. The valid version is always this page, with the date at the top.",
    ] },
  ],
};

const de: TestiLegale = {
  titolo: "Datenschutzerklärung · OrtaVillas",
  descrizione: "Wie wir personenbezogene Daten auf ortavillas.com verarbeiten: die Formulare, das CRM von TriesteVillas, der KI-Assistent, Google Analytics nur mit Ihrer Einwilligung, Ihre Rechte.",
  briciola: "Datenschutz",
  occhiello: "Rechtliches",
  h1: "Datenschutzerklärung",
  lead: "Wie wir die von ortavillas.com erhobenen personenbezogenen Daten nach der Verordnung (EU) 2016/679 (DSGVO) verarbeiten. Die Website gehört der TriesteVillas srl.",
  sezioni: [
    { id: "titolare", titolo: "Verantwortlicher", blocchi: [
      `${SOCIETA.nome}, ${SOCIETA.indirizzo}, Italien · Steuernr. und USt-IdNr. ${SOCIETA.piva} · E-Mail [${E}](mailto:${E}) · PEC ${SOCIETA.pec}.`,
      "ortavillas.com ist eine Website der Gruppe TriesteVillas: Anfragen erreichen dieselben Menschen, die in Triest arbeiten.",
    ] },
    { id: "dati", titolo: "Welche Daten", blocchi: [
      { lista: [
        "Formular der Private Collection: E-Mail und Name und, wenn Sie sie angeben, Telefon, Sprache, Land und Stadt der Abreise, Gegenden, Budgetrahmen, Zeithorizont und Nutzung, dazu Ihre Wahl bei den Einwilligungskästchen.",
        "Formular für Eigentümer: Name, E-Mail oder Telefon, Gemeinde und Art der Immobilie, ungefähre Fläche, Ihre Beschreibung, der Link zu einer Anzeige, wann Sie verkaufen möchten, bevorzugter Kanal und Sprache. Fotos verlangen wir nicht.",
        "Rechenwerkzeuge (zum Beispiel die Wertschätzung): Ihre Eingaben bleiben in Ihrem Browser; sie erreichen uns nur, wenn Sie sie mit dem Formular senden.",
        "Direkter Kontakt: was Sie uns auf WhatsApp oder per E-Mail schreiben oder am Telefon sagen.",
        "Nutzung der Website: die technischen Daten, die zur Anzeige der Seiten nötig sind (IP-Adresse, Browsertyp), und nur mit Ihrer Einwilligung die Statistiken von Google Analytics. Siehe die [Cookie-Seite](cookie).",
      ] },
    ] },
    { id: "finalita", titolo: "Wozu, und auf welcher Grundlage", blocchi: [
      "Um Ihre Anfrage zu beantworten, das vorgestellte Haus einzuschätzen und, wenn Sie es wünschen, einen Auftrag vorzubereiten; um Sie zu benachrichtigen, wenn ein Haus in Ihren Gegenden in die Collection kommt. Grundlage ist Ihre Einwilligung über das Kästchen im Formular (Art. 6 Abs. 1 lit. a DSGVO) und, bei der Vorstellung eines Hauses, die von Ihnen gewünschten vorvertraglichen Maßnahmen (lit. b). Für gesetzliche Pflichten, etwa die steuerlichen und Geldwäschepflichten eines Maklers, das Gesetz selbst (lit. c).",
      "Ohne Kontaktangabe können wir nicht antworten; alles andere ist freiwillig.",
    ] },
    { id: "crm", titolo: "Wohin die Daten gehen", blocchi: [
      "In das CRM von TriesteVillas, das interne System, in dem die Gruppe Anfragen, Häuser und Kontakte verwaltet. Die Anfrage reist signiert von der Website ins CRM, wo sie befugte Mitarbeiter der Gruppe lesen.",
      "Um sie zuzuordnen und zusammenzufassen, kann das CRM sie auch automatischen Werkzeugen vorlegen, einschließlich KI-Werkzeugen. Keine Entscheidung über Sie trifft allein eine Maschine (Art. 22 DSGVO).",
    ] },
    { id: "assistente", titolo: "Der KI-Assistent", blocchi: [
      "Der Assistent der Website ist ein Programm künstlicher Intelligenz und sagt das zu Beginn. Was Sie ihm schreiben, erreicht signiert das CRM von TriesteVillas, wo ein Modell von Anthropic (Claude) die Antwort aus den Texten und Daten dieser Website erstellt. Zum Antworten und gegen Missbrauch speichert das CRM Fragen, Antworten, Sprache, Land und einen Fingerabdruck der IP-Adresse, aus dem sich die Adresse nicht ableiten lässt.",
      "Ab der vierten Frage bittet der Assistent um Name und E-Mail oder Telefon. Wenn Sie sie angeben, entsteht im CRM eine Anfrage wie bei den Formularen, mit Ihren Fragen. Grundlage ist Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO) und, für diese Daten, Ihre Einwilligung über das Kästchen (lit. a). Schreiben Sie nichts, was nicht gelesen werden soll: Gespräche werden so lange aufbewahrt, wie es für Antwort und Missbrauchsschutz nötig ist, dann gelöscht oder anonymisiert.",
    ] },
    { id: "trieste", titolo: "Weitergabe an die Private Collection in Triest", blocchi: [
      "Nur wenn Sie das eigene Kästchen ankreuzen („Schicken Sie mir auch die privaten Häuser in Triest“), erzeugt Ihre Anmeldung auch eine Zugangsanfrage zur Private Collection von TriesteVillas in Triest. Das ist eine eigene Einwilligung: Ohne dieses Kästchen dienen Ihre Daten nur dem Ortasee. Wird die Anfrage genehmigt, kommen die Zugangsdaten per E-Mail.",
    ] },
    { id: "agenzie", titolo: "Andere Makler", blocchi: [
      "Heute geben wir keine Daten an Makler am See weiter. Arbeiten wir für Ihr Haus mit einem anderen Makler zusammen, erhält er Ihre Daten nur mit Ihrer Einwilligung, die wir dann einholen.",
    ] },
    { id: "conservazione", titolo: "Wie lange", blocchi: [
      "Solange Sie angemeldet bleiben oder solange es für das vorgestellte Haus nötig ist, danach für die gesetzlich vorgeschriebene Zeit. Danach werden die Daten gelöscht oder anonymisiert. Sie können die Löschung jederzeit verlangen.",
    ] },
    { id: "destinatari", titolo: "Wer sie noch verarbeitet", blocchi: [
      "Dienstleister, die als Auftragsverarbeiter für uns arbeiten: das Hosting der Website (Vercel Inc.) und die Cloud-Anbieter des CRM, die E-Mail (Google), die Anbieter der KI-Werkzeuge im CRM und im Assistenten (darunter Anthropic) und nur mit Ihrer Einwilligung Google Ireland Ltd für die Statistik. Wenn Sie uns auf WhatsApp schreiben, läuft die Nachricht auch über WhatsApp, nach dessen Regeln. Die Daten werden weder veröffentlicht noch verkauft.",
    ] },
    { id: "estero", titolo: "Übermittlungen außerhalb der Europäischen Union", blocchi: [
      "Einige Dienstleister, darunter das Hosting der Website in den Vereinigten Staaten, können Daten außerhalb der Europäischen Union verarbeiten. Die Übermittlung stützt sich dann auf geeignete Garantien, etwa einen Angemessenheitsbeschluss der Europäischen Kommission oder deren Standardvertragsklauseln.",
    ] },
    { id: "diritti", titolo: "Ihre Rechte", blocchi: [
      `Sie können Auskunft, Berichtigung, Löschung, Einschränkung und Übertragbarkeit verlangen, der Verarbeitung widersprechen und die Einwilligung jederzeit widerrufen, mit einer E-Mail an [${E}](mailto:${E}). Der Widerruf berührt nicht, was vorher geschehen ist.`,
      "Sie können sich auch bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO): in Italien beim [Garante per la protezione dei dati personali](https://www.garanteprivacy.it) oder bei der Behörde des Landes, in dem Sie leben oder arbeiten.",
    ] },
    { id: "terzi", titolo: "Videos und 3D-Rundgänge", blocchi: [
      "YouTube-Videos im cookiefreien Modus und Matterport-Rundgänge laden erst, wenn Sie sie per Klick öffnen. Ab dann können YouTube und Matterport Daten verarbeiten und Cookies setzen, nach ihren eigenen Regeln.",
    ] },
    { id: "modifiche", titolo: "Änderungen", blocchi: [
      "Wir können diese Erklärung aktualisieren. Gültig ist immer diese Seite, mit dem Datum oben.",
    ] },
  ],
};

const sl: TestiLegale = {
  titolo: "Obvestilo o zasebnosti · OrtaVillas",
  descrizione: "Kako obdelujemo osebne podatke na ortavillas.com: obrazci, CRM TriesteVillas, pomočnik UI, Google Analytics samo z vašim soglasjem in vaše pravice.",
  briciola: "Zasebnost",
  occhiello: "Pravno",
  h1: "Obvestilo o zasebnosti",
  lead: "Kako obdelujemo osebne podatke, zbrane na ortavillas.com, v skladu z Uredbo (EU) 2016/679 (GDPR). Spletno mesto je last družbe TriesteVillas srl.",
  sezioni: [
    { id: "titolare", titolo: "Upravljavec", blocchi: [
      `${SOCIETA.nome}, ${SOCIETA.indirizzo}, Italija · davčna št. in ID za DDV ${SOCIETA.piva} · e-pošta [${E}](mailto:${E}) · PEC ${SOCIETA.pec}.`,
      "ortavillas.com je spletno mesto skupine TriesteVillas: povpraševanja pridejo do istih ljudi, ki delajo v Trstu.",
    ] },
    { id: "dati", titolo: "Kateri podatki", blocchi: [
      { lista: [
        "Obrazec Private Collection: e-pošta in ime ter, če ju navedete, telefon, jezik, država in mesto odhoda, območja, proračunski razred, časovni okvir in namen, poleg vaših izbir pri poljih za soglasje.",
        "Obrazec za lastnike: ime, e-pošta ali telefon, občina in vrsta nepremičnine, približna površina, vaš opis, povezava do oglasa, kdaj nameravate prodati, želeni kanal in jezik. Fotografij ne zahtevamo.",
        "Orodja za izračun (na primer ocena vrednosti): podatki, ki jih vnesete, ostanejo v vašem brskalniku; do nas pridejo le, če se odločite, da jih pošljete z obrazcem.",
        "Neposreden stik: kar nam napišete na WhatsApp, po e-pošti ali poveste po telefonu.",
        "Brskanje: tehnični podatki, potrebni za prikaz strani (naslov IP, vrsta brskalnika), in samo z vašim soglasjem statistika Google Analytics. Glejte [stran o piškotkih](cookie).",
      ] },
    ] },
    { id: "finalita", titolo: "Zakaj in na kateri podlagi", blocchi: [
      "Da odgovorimo na vaše povpraševanje, ocenimo hišo, ki nam jo predstavite, in, če se tako odločite, pripravimo posredniško pogodbo; da vas obvestimo, ko pride v zbirko hiša na območjih, ki ste jih navedli. Podlaga je soglasje, ki ga daste s poljem v obrazcu (člen 6(1)(a) GDPR), in pri predstavitvi hiše predpogodbeni ukrepi, ki ste jih zahtevali (točka b). Za zakonske obveznosti, začenši z davčnimi in tistimi proti pranju denarja, ki jih ima agencija, zakon sam (točka c).",
      "Brez kontaktnega podatka vam ne moremo odgovoriti; vse drugo je neobvezno.",
    ] },
    { id: "crm", titolo: "Kam gredo podatki", blocchi: [
      "V CRM TriesteVillas, notranji sistem, v katerem skupina upravlja povpraševanja, hiše in stike. Povpraševanje potuje s spletnega mesta v CRM podpisano, tam pa ga berejo pooblaščeni ljudje skupine.",
      "Za razvrstitev in povzetek ga lahko CRM da prebrati tudi samodejnim orodjem, vključno z orodji umetne inteligence. Nobene odločitve o vas ne sprejme samo stroj (člen 22 GDPR).",
    ] },
    { id: "assistente", titolo: "Pomočnik UI", blocchi: [
      "Pomočnik spletnega mesta je program umetne inteligence in to pove na začetku. Kar mu napišete, pride podpisano v CRM TriesteVillas, kjer model družbe Anthropic (Claude) pripravi odgovor na podlagi besedil in podatkov tega spletnega mesta. Za odgovarjanje in preprečevanje zlorab CRM hrani vprašanja, odgovore, jezik, državo in prstni odtis naslova IP, iz katerega naslova ni mogoče razbrati.",
      "Od četrtega vprašanja naprej vas pomočnik prosi za ime in e-pošto ali telefon. Če ju navedete, v CRM nastane povpraševanje kot pri obrazcih, z vprašanji, ki ste jih zastavili. Podlaga je vaše povpraševanje (člen 6(1)(b) GDPR) in za te podatke soglasje, ki ga daste s poljem (točka a). Ne pišite mu ničesar, česar ne želite dati v branje: pogovori se hranijo toliko časa, kot je potrebno za odgovor in preprečevanje zlorab, nato se izbrišejo ali anonimizirajo.",
    ] },
    { id: "trieste", titolo: "Posredovanje v Private Collection v Trstu", blocchi: [
      "Samo če označite posebno polje (»Pošljite mi tudi zasebne hiše v Trstu«), vaša prijava ustvari tudi zahtevo za dostop do Private Collection TriesteVillas v Trstu. To je ločeno soglasje: brez tega polja se vaši podatki uporabijo samo za jezero Orta. Če je zahteva odobrena, prejmete poverilnice po e-pošti.",
    ] },
    { id: "agenzie", titolo: "Druge agencije", blocchi: [
      "Danes podatkov ne posredujemo nobeni agenciji ob jezeru. Če bomo pri vaši hiši sodelovali z drugo agencijo, bo vaše podatke prejela le z vašim soglasjem, za katero vas bomo takrat prosili.",
    ] },
    { id: "conservazione", titolo: "Koliko časa", blocchi: [
      "Dokler ste prijavljeni ali dokler je potrebno za hišo, ki ste nam jo predstavili, nato toliko časa, kot zahtevajo zakonske obveznosti. Potem se podatki izbrišejo ali anonimizirajo. Izbris lahko zahtevate kadar koli.",
    ] },
    { id: "destinatari", titolo: "Kdo jih še obdeluje", blocchi: [
      "Ponudniki, ki za nas delajo kot obdelovalci: gostovanje spletnega mesta (Vercel Inc.) in ponudniki oblačne infrastrukture CRM, e-pošta (Google), ponudniki orodij umetne inteligence v CRM in pomočniku (med njimi Anthropic) ter samo z vašim soglasjem Google Ireland Ltd za statistiko. Če nam pišete na WhatsApp, gre sporočilo tudi prek WhatsAppa, po njegovih pravilih. Podatkov ne objavljamo in ne prodajamo.",
    ] },
    { id: "estero", titolo: "Prenosi zunaj Evropske unije", blocchi: [
      "Nekateri ponudniki, med njimi gostovanje spletnega mesta v Združenih državah, lahko podatke obdelujejo zunaj Evropske unije. Takrat prenos temelji na ustreznih zaščitnih ukrepih, kot je sklep Evropske komisije o ustreznosti ali njene standardne pogodbene klavzule.",
    ] },
    { id: "diritti", titolo: "Vaše pravice", blocchi: [
      `Zahtevate lahko dostop do svojih podatkov, popravek, izbris, omejitev in prenosljivost, ugovarjate obdelavi in kadar koli prekličete soglasje, s sporočilom na [${E}](mailto:${E}). Preklic ne vpliva na to, kar je bilo storjeno prej.`,
      "Pritožbo lahko vložite tudi pri nadzornem organu (člen 77 GDPR): v Italiji pri [Garante per la protezione dei dati personali](https://www.garanteprivacy.it), v Sloveniji pri Informacijskem pooblaščencu ali pri organu države, v kateri živite ali delate.",
    ] },
    { id: "terzi", titolo: "Videoposnetki in 3D-ogledi", blocchi: [
      "Videoposnetki YouTube v načinu brez piškotkov in ogledi Matterport se naložijo šele, ko jih odprete s klikom. Od takrat lahko YouTube in Matterport obdelujeta podatke in nastavljata piškotke po svojih pravilih.",
    ] },
    { id: "modifiche", titolo: "Spremembe", blocchi: [
      "To obvestilo lahko posodobimo. Veljavna je vedno ta stran, z datumom zgoraj.",
    ] },
  ],
};

export const PRIVACY: Record<Lingua, TestiLegale> = { it, en, de, sl };
