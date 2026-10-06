import type { Lingua } from "@/lib/rotte";
import type { Domanda } from "@/components/servizi/Parti";

// Private Collection · Lago d'Orta (+ grazie). Il contatore dice 0, perché è 0.
export type TestiPC = {
  titolo: string; descrizione: string; briciola: string;
  occhiello: string; h1: string; lead: string; cta: string; trieste: string; zero: string;
  cosa: { occhiello: string; h2: string; colonne: { etichetta: string; h3: string; testo: string }[] };
  tempi: { occhiello: string; h2: string; tappe: { quando: string; titolo: string; testo: string }[]; box: string; boxLink: string };
  iscrizione: { occhiello: string; h2: string; testo: string; garanzie: string[] };
  domande: { occhiello: string; h2: string; voci: Domanda[] };
  grazie: { titolo: string; descrizione: string; occhiello: string; h1: string; testo: string; guideOcchiello: string; guideH2: string };
};

const it: TestiPC = {
  titolo: "Private Collection · Lago d'Orta: case riservate, avviso per primi",
  descrizione: "Iscrivetevi per sapere per primi quando entra una casa riservata sul lago d'Orta. Oggi la collezione è vuota, e lo diciamo. Intanto c'è quella di Trieste, con 22 case.",
  briciola: "Private Collection",
  occhiello: "Oggi in collezione: 0 case",
  h1: "Private Collection · Lago d'Orta",
  lead: "Le case del lago che non vanno sui portali arriveranno qui, prima che altrove. Oggi la collezione è vuota: sul lago possiamo già mediare, ma nessun proprietario ci ha ancora affidato una casa.",
  cta: "Iscrivetemi per primi",
  trieste: "La collezione di Trieste",
  zero: "case del lago in collezione, oggi",
  cosa: {
    occhiello: "La collezione",
    h2: "Che cos'è, che cosa sarà, che cosa ricevete.",
    colonne: [
      { etichetta: "Che cos'è", h3: "Una collezione privata, non un portale.", testo: "A Trieste la Private Collection di TriesteVillas conta oggi 22 case riservate, 15 delle quali da un milione di euro in su. Non vanno sui portali: le vede chi ha un accesso personale, e oggi gli accessi attivi sono 54." },
      { etichetta: "Che cosa sarà sul lago", h3: "Oggi nessuna casa del lago.", testo: "Entreranno quando un proprietario ci affiderà una casa che preferisce non pubblicare. Fino ad allora la collezione resta vuota, e lo diciamo." },
      { etichetta: "Che cosa ricevete", h3: "Un avviso, quando entra una casa.", testo: "Un'email quando entra una casa nelle zone che ci avete indicato, nella vostra lingua. Se lo chiedete con la casella dedicata, anche l'accesso alla Private Collection di Trieste. Niente newsletter." },
    ],
  },
  tempi: {
    occhiello: "Come entra una casa",
    h2: "Dalla presentazione alla collezione.",
    tappe: [
      { quando: "Oggi", titolo: "L'atlante e le presentazioni", testo: "Luoghi, tempi, quotazioni del lago; e le case che i proprietari ci presentano." },
      { quando: "Con un incarico", titolo: "Una casa riservata", testo: "Se il proprietario preferisce non andare sui portali, la casa entra qui, con analisi, foto, tour 3D e film." },
      { quando: "Subito dopo", titolo: "Chi è iscritto vede per primo", testo: "L'avviso parte dagli iscritti alle zone di quella casa, prima di qualsiasi altro canale." },
    ],
    box: "A Trieste la nostra Private Collection conta oggi 22 case riservate.",
    boxLink: "Andate alla collezione di Trieste",
  },
  iscrizione: {
    occhiello: "Iscrizione",
    h2: "Iscrivetevi per primi.",
    testo: "Diteci dove guardereste e con quale budget. Quando entrerà una casa di quelle zone, vi scriveremo prima di tutti gli altri.",
    garanzie: ["Un'email per ogni casa che entra nelle vostre zone, e nient'altro.", "Nessun contatore, nessun posto limitato.", "Vi cancellate con un'email, quando volete."],
  },
  domande: {
    occhiello: "Domande",
    h2: "Prima di iscrivervi.",
    voci: [
      { d: "Perché iscriversi se la collezione è vuota?", r: "Perché quando entra una casa l'avviso parte dagli iscritti, con le zone e il budget che ci avete indicato. Se poi non vi interessa più, basta un'email." },
      { d: "Quanto costa?", r: "Niente." },
      { d: "Che differenza c'è con la Private Collection di Trieste?", r: "Quella di Trieste esiste già: oggi conta 22 case ed è di TriesteVillas. L'accesso si chiede a parte, con la casella dedicata del modulo, perché è un consenso diverso.", link: ["La collezione di Trieste.", "triestePc"] },
      { d: "Chi legge i miei dati?", r: "Le persone di TriesteVillas, a Trieste, nel CRM del gruppo. Nessun passaggio ad altri senza il vostro consenso.", link: ["L'informativa sulla privacy.", "privacy"] },
    ],
  },
  grazie: {
    titolo: "Grazie: iscrizione ricevuta",
    descrizione: "Abbiamo ricevuto la vostra iscrizione alla Private Collection del lago d'Orta.",
    occhiello: "Private Collection",
    h1: "Iscrizione registrata.",
    testo: "Vi scriveremo quando entrerà una casa nelle vostre zone, all'indirizzo che ci avete lasciato. Se avete chiesto anche le case riservate di Trieste, vi scriviamo noi per l'accesso alla Private Collection di TriesteVillas, dopo la verifica.",
    guideOcchiello: "Intanto",
    guideH2: "Tre guide per arrivare preparati.",
  },
};

const en: TestiPC = {
  titolo: "Private Collection · Lake Orta: private homes, first notice",
  descrizione: "Sign up to be the first to know when a private home on Lake Orta comes in. Today the collection is empty, and we say so. Meanwhile there is the Trieste one, with 22 homes.",
  briciola: "Private Collection",
  occhiello: "In the collection today: 0 homes",
  h1: "Private Collection · Lake Orta",
  lead: "Lake homes that do not go on the portals will arrive here, before anywhere else. Today the collection is empty: on the lake we can already act as agents, but no owner has entrusted us with a home yet.",
  cta: "Sign me up first",
  trieste: "The Trieste collection",
  zero: "Lake Orta homes in the collection, today",
  cosa: {
    occhiello: "The collection",
    h2: "What it is, what it will be, what you receive.",
    colonne: [
      { etichetta: "What it is", h3: "A private collection, not a portal.", testo: "In Trieste the TriesteVillas Private Collection holds 22 private homes today, 15 of them from one million euros up. They do not go on the portals: only people with a personal login see them, and today there are 54 active logins." },
      { etichetta: "What it will be on the lake", h3: "No Lake Orta home today.", testo: "Homes will come in when an owner entrusts us with one they would rather not publish. Until then the collection stays empty, and we say so." },
      { etichetta: "What you receive", h3: "A notice, when a home comes in.", testo: "An email when a home comes in within the areas you gave us, in your language. If you ask with the dedicated box, access to the Trieste Private Collection too. No newsletter." },
    ],
  },
  tempi: {
    occhiello: "How a home comes in",
    h2: "From presentation to collection.",
    tappe: [
      { quando: "Today", titolo: "The atlas and the presentations", testo: "Places, times and price quotations for the lake; and the homes owners present to us." },
      { quando: "With a mandate", titolo: "A private home", testo: "If the owner prefers to stay off the portals, the home comes in here, with analysis, photos, 3D tour and film." },
      { quando: "Straight after", titolo: "Subscribers see it first", testo: "The notice goes first to those signed up for that home's areas, before any other channel." },
    ],
    box: "In Trieste our Private Collection holds 22 private homes today.",
    boxLink: "Go to the Trieste collection",
  },
  iscrizione: {
    occhiello: "Sign up",
    h2: "Sign up first.",
    testo: "Tell us where you would look and with what budget. When a home in those areas comes in, we will write to you before anyone else.",
    garanzie: ["One email for each home that comes into your areas, and nothing else.", "No countdown, no limited places.", "You unsubscribe with one email, whenever you like."],
  },
  domande: {
    occhiello: "Questions",
    h2: "Before you sign up.",
    voci: [
      { d: "Why sign up if the collection is empty?", r: "Because when a home comes in, the notice goes first to subscribers, with the areas and budget you gave us. If you lose interest, one email is enough." },
      { d: "What does it cost?", r: "Nothing." },
      { d: "How is it different from the Trieste Private Collection?", r: "The Trieste one already exists: today it holds 22 homes and belongs to TriesteVillas. Access is requested separately, with the dedicated box in the form, because it is a different consent.", link: ["The Trieste collection.", "triestePc"] },
      { d: "Who reads my data?", r: "The people of TriesteVillas, in Trieste, in the group's CRM. Nothing is passed to others without your consent.", link: ["The privacy notice.", "privacy"] },
    ],
  },
  grazie: {
    titolo: "Thank you: sign-up received",
    descrizione: "We have received your sign-up to the Lake Orta Private Collection.",
    occhiello: "Private Collection",
    h1: "Sign-up recorded.",
    testo: "We will write when a home comes in within your areas, to the address you gave us. If you also asked for the private homes in Trieste, we will write to you about access to the TriesteVillas Private Collection, after checking the request.",
    guideOcchiello: "Meanwhile",
    guideH2: "Three guides to arrive prepared.",
  },
};

const de: TestiPC = {
  titolo: "Private Collection · Ortasee: diskrete Häuser, zuerst informiert",
  descrizione: "Melden Sie sich an, um als Erste zu erfahren, wenn ein diskretes Haus am Ortasee dazukommt. Heute ist die Collection leer, und wir sagen es. Inzwischen gibt es die von Triest, mit 22 Häusern.",
  briciola: "Private Collection",
  occhiello: "Heute in der Collection: 0 Häuser",
  h1: "Private Collection · Ortasee",
  lead: "Häuser vom See, die nicht auf die Portale gehen, kommen hierher, vor allen anderen Kanälen. Heute ist die Collection leer: Am See dürfen wir bereits vermitteln, aber noch hat uns kein Eigentümer ein Haus anvertraut.",
  cta: "Melden Sie mich zuerst an",
  trieste: "Die Collection in Triest",
  zero: "Häuser vom See in der Collection, heute",
  cosa: {
    occhiello: "Die Collection",
    h2: "Was sie ist, was sie sein wird, was Sie erhalten.",
    colonne: [
      { etichetta: "Was sie ist", h3: "Eine private Sammlung, kein Portal.", testo: "In Triest umfasst die Private Collection von TriesteVillas heute 22 diskrete Häuser, 15 davon ab einer Million Euro. Sie stehen nicht auf den Portalen: Sie sieht nur, wer einen persönlichen Zugang hat, und heute gibt es 54 aktive Zugänge." },
      { etichetta: "Was sie am See sein wird", h3: "Heute kein Haus vom See.", testo: "Häuser kommen dazu, wenn ein Eigentümer uns eines anvertraut, das er lieber nicht veröffentlicht. Bis dahin bleibt die Collection leer, und wir sagen es." },
      { etichetta: "Was Sie erhalten", h3: "Eine Nachricht, wenn ein Haus dazukommt.", testo: "Eine E-Mail, wenn ein Haus in Ihren Gegenden dazukommt, in Ihrer Sprache. Wenn Sie es mit dem eigenen Kästchen wünschen, auch den Zugang zur Private Collection in Triest. Kein Newsletter." },
    ],
  },
  tempi: {
    occhiello: "Wie ein Haus dazukommt",
    h2: "Von der Vorstellung zur Collection.",
    tappe: [
      { quando: "Heute", titolo: "Der Atlas und die Vorstellungen", testo: "Orte, Fahrzeiten, Preisrichtwerte des Sees; und die Häuser, die uns Eigentümer vorstellen." },
      { quando: "Mit einem Auftrag", titolo: "Ein diskretes Haus", testo: "Wenn der Eigentümer nicht auf die Portale will, kommt das Haus hierher, mit Analyse, Fotos, 3D-Rundgang und Film." },
      { quando: "Gleich danach", titolo: "Wer angemeldet ist, sieht zuerst", testo: "Die Nachricht geht zuerst an die für die Gegend dieses Hauses Angemeldeten, vor jedem anderen Kanal." },
    ],
    box: "In Triest umfasst unsere Private Collection heute 22 diskrete Häuser.",
    boxLink: "Zur Collection in Triest",
  },
  iscrizione: {
    occhiello: "Anmeldung",
    h2: "Melden Sie sich zuerst an.",
    testo: "Sagen Sie uns, wo Sie suchen würden und mit welchem Budget. Wenn ein Haus in diesen Gegenden dazukommt, schreiben wir Ihnen vor allen anderen.",
    garanzie: ["Eine E-Mail für jedes Haus in Ihren Gegenden, sonst nichts.", "Kein Countdown, keine begrenzten Plätze.", "Abmeldung mit einer E-Mail, wann Sie wollen."],
  },
  domande: {
    occhiello: "Fragen",
    h2: "Bevor Sie sich anmelden.",
    voci: [
      { d: "Warum anmelden, wenn die Collection leer ist?", r: "Weil die Nachricht, wenn ein Haus dazukommt, zuerst an die Angemeldeten geht, mit den Gegenden und dem Budget, die Sie angegeben haben. Wenn es Sie nicht mehr interessiert, genügt eine E-Mail." },
      { d: "Was kostet das?", r: "Nichts." },
      { d: "Was ist der Unterschied zur Private Collection in Triest?", r: "Die in Triest gibt es schon: Sie umfasst heute 22 Häuser und gehört TriesteVillas. Der Zugang wird separat beantragt, mit dem eigenen Kästchen im Formular, weil es eine andere Einwilligung ist.", link: ["Die Collection in Triest.", "triestePc"] },
      { d: "Wer liest meine Daten?", r: "Die Mitarbeiter von TriesteVillas in Triest, im CRM der Gruppe. Keine Weitergabe ohne Ihre Zustimmung.", link: ["Die Datenschutzerklärung.", "privacy"] },
    ],
  },
  grazie: {
    titolo: "Danke: Anmeldung erhalten",
    descrizione: "Wir haben Ihre Anmeldung zur Private Collection am Ortasee erhalten.",
    occhiello: "Private Collection",
    h1: "Anmeldung erfasst.",
    testo: "Wir schreiben Ihnen, wenn ein Haus in Ihren Gegenden dazukommt, an die Adresse, die Sie uns gegeben haben. Wenn Sie auch die privaten Häuser in Triest angefragt haben, schreiben wir Ihnen nach der Prüfung wegen des Zugangs zur Private Collection von TriesteVillas.",
    guideOcchiello: "Inzwischen",
    guideH2: "Drei Ratgeber, um vorbereitet anzukommen.",
  },
};

const sl: TestiPC = {
  titolo: "Private Collection · jezero Orta: diskretne hiše, obvestilo med prvimi",
  descrizione: "Prijavite se in med prvimi izveste, ko pride v ponudbo diskretna hiša ob jezeru Orta. Danes je zbirka prazna, in to povemo. Medtem je tu tržaška, z 22 hišami.",
  briciola: "Private Collection",
  occhiello: "V zbirki danes: 0 hiš",
  h1: "Private Collection · jezero Orta",
  lead: "Hiše ob jezeru, ki ne gredo na portale, bodo prišle sem, prej kot kamor koli drugam. Danes je zbirka prazna: ob jezeru že lahko posredujemo, a nam noben lastnik še ni zaupal hiše.",
  cta: "Prijavite me med prvimi",
  trieste: "Tržaška zbirka",
  zero: "hiš ob jezeru v zbirki, danes",
  cosa: {
    occhiello: "Zbirka",
    h2: "Kaj je, kaj bo in kaj prejmete.",
    colonne: [
      { etichetta: "Kaj je", h3: "Zasebna zbirka, ne portal.", testo: "V Trstu ima Private Collection – zasebna zbirka nepremičnin TriesteVillas izven javnega trga – danes 22 hiš, od tega 15 od milijona evrov naprej. Ne gredo na portale: vidijo jih le tisti z osebnim dostopom, danes je aktivnih dostopov 54." },
      { etichetta: "Kaj bo ob jezeru", h3: "Danes nobene hiše ob jezeru.", testo: "Hiše bodo prišle, ko nam bo lastnik zaupal hišo, ki je raje ne bi objavil. Do takrat zbirka ostane prazna, in to povemo." },
      { etichetta: "Kaj prejmete", h3: "Obvestilo, ko pride hiša.", testo: "E-sporočilo, ko pride hiša na območjih, ki ste nam jih navedli, v vašem jeziku. Če to želite s posebnim poljem, tudi dostop do Private Collection v Trstu. Brez e-novic." },
    ],
  },
  tempi: {
    occhiello: "Kako pride hiša",
    h2: "Od predstavitve do zbirke.",
    tappe: [
      { quando: "Danes", titolo: "Atlas in predstavitve", testo: "Kraji, časi in ocene vrednosti ob jezeru; in hiše, ki nam jih predstavijo lastniki." },
      { quando: "S pogodbo", titolo: "Diskretna hiša", testo: "Če lastnik ne želi na portale, hiša pride sem, z analizo, fotografijami, 3D-ogledom in filmom." },
      { quando: "Takoj zatem", titolo: "Prijavljeni vidijo prvi", testo: "Obvestilo gre najprej prijavljenim za območje te hiše, pred vsemi drugimi kanali." },
    ],
    box: "V Trstu ima naša Private Collection danes 22 diskretnih hiš.",
    boxLink: "Na tržaško zbirko",
  },
  iscrizione: {
    occhiello: "Prijava",
    h2: "Prijavite se med prvimi.",
    testo: "Povejte nam, kje bi iskali in s kakšnim proračunom. Ko pride hiša na teh območjih, vam bomo pisali pred vsemi drugimi.",
    garanzie: ["Eno e-sporočilo za vsako hišo na vaših območjih, nič drugega.", "Brez odštevanja, brez omejenih mest.", "Odjavite se z enim e-sporočilom, kadar želite."],
  },
  domande: {
    occhiello: "Vprašanja",
    h2: "Preden se prijavite.",
    voci: [
      { d: "Zakaj se prijaviti, če je zbirka prazna?", r: "Ker gre ob prihodu hiše obvestilo najprej prijavljenim, z območji in proračunom, ki ste jih navedli. Če vas ne zanima več, je dovolj e-sporočilo." },
      { d: "Koliko stane?", r: "Nič." },
      { d: "Kakšna je razlika s Private Collection v Trstu?", r: "Tržaška že obstaja: danes ima 22 hiš in je last TriesteVillas. Dostop se zahteva posebej, s posebnim poljem v obrazcu, ker gre za drugačno soglasje.", link: ["Tržaška zbirka.", "triestePc"] },
      { d: "Kdo bere moje podatke?", r: "Ljudje pri TriesteVillas v Trstu, v CRM skupine. Brez vašega soglasja jih ne posredujemo drugim.", link: ["Obvestilo o zasebnosti.", "privacy"] },
    ],
  },
  grazie: {
    titolo: "Hvala: prijava prejeta",
    descrizione: "Prejeli smo vašo prijavo v Private Collection ob jezeru Orta.",
    occhiello: "Private Collection",
    h1: "Prijava je zabeležena.",
    testo: "Pisali vam bomo, ko pride hiša na vaših območjih, na naslov, ki ste nam ga pustili. Če ste zahtevali tudi zasebne hiše v Trstu, vam bomo po preverjanju pisali glede dostopa do Private Collection TriesteVillas.",
    guideOcchiello: "Medtem",
    guideH2: "Trije vodniki, da pridete pripravljeni.",
  },
};

export const PC: Record<Lingua, TestiPC> = { it, en, de, sl };
