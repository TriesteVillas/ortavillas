import type { Lingua } from "@/lib/rotte";
import type { Domanda } from "@/components/servizi/Parti";

// Per le agenzie del Cusio. Norme citate e verificate il 6 ottobre 2026: art. 1755 e 1758 c.c.
// (Brocardi, testo del R.D. 262/1942); legge 39/1989, art. 6 c. 1 (testo pubblicato dalla
// Camera di Commercio di Genova); uso provinciale di Novara 2005 (fatti.md, §12).
export type TestiAgenzie = {
  titolo: string; descrizione: string; briciola: string;
  occhiello: string; h1: string; lead: string;
  chi: { occhiello: string; testo: string; righe: { dach: string; da1m: string; pc: string; online: string } };
  lettera: { occhiello: string; h2: string; a: string; luogo: string; paragrafi: string[]; firma: string };
  insieme: { occhiello: string; h2: string; lead: string; noi: string; voi: string; noiVoci: string[]; voiVoci: string[]; chiusa: string };
  legge: { occhiello: string; h2: string; paragrafi: string[]; catenaTitolo: string; catena: { nodi: [string, string][]; legami: string[] }; didascalia: string; oggiTitolo: string; oggi: string[] };
  forme: { occhiello: string; h2: string; lead: string; voci: { titolo: string; testo: string }[] };
  domande: { occhiello: string; h2: string; voci: Domanda[] };
  contatto: { occhiello: string; h2: string; testo: string };
};

const it: TestiAgenzie = {
  titolo: "Per le agenzie del lago d'Orta: collaborare con TriesteVillas",
  descrizione: "Alle agenzie immobiliari del Cusio: noi portiamo compratori dall'estero, racconto in quattro lingue e Private Collection; voi la conoscenza del lago. Come collaborare, e che cosa dice la legge.",
  briciola: "Per le agenzie",
  occhiello: "Per le agenzie",
  h1: "Sul lago d'Orta non cerchiamo concorrenti. Cerchiamo alleati.",
  lead: "Sul lago possiamo già mediare, ma non vogliamo farlo contro chi ci lavora da anni. Vogliamo farlo con voi: noi con i compratori che ci scrivono da lontano, voi con la conoscenza delle case, delle strade e delle persone del Cusio.",
  chi: {
    occhiello: "Chi ci scrive",
    testo: "compratori ci hanno scritto negli ultimi dodici mesi, per case a Trieste. Fra loro:",
    righe: {
      dach: "da Austria, Germania e Svizzera, fra quelli di cui conosciamo la nazionalità",
      da1m: "con un budget, o una casa richiesta, da un milione di euro in su",
      pc: "accessi attivi alla Private Collection di Trieste",
      online: "immobili online sui quattro siti del gruppo",
    },
  },
  lettera: {
    occhiello: "Una lettera alle agenzie",
    h2: "A Trieste siamo cresciuti collaborando.",
    a: "Alle agenzie del lago d'Orta",
    luogo: "Trieste, ottobre 2026",
    paragrafi: [
      "A Trieste abbiamo fatto della collaborazione trasparente e proattiva la carta che ci ha portati ad affermarci, in breve tempo, nel lusso. E delle case grandi, complicate, ciascuna diversa dalle altre, il nostro pane quotidiano.",
      "Sul lago d'Orta arriviamo da fuori, e lo sappiamo. Voi conoscete le case, i vicini, i vincoli, le strade che d'inverno gelano. Noi abbiamo compratori che scrivono da Zurigo, da Monaco, da Milano, e un modo di raccontare una casa in quattro lingue.",
      "Con voi possiamo definire, con tutta l'elasticità che serve, modi di lavorare insieme che portino vantaggio a tutti: per primi a chi vende e a chi compra.",
      "Basta un WhatsApp, e dall'altra parte troverete persone che rispondono.",
    ],
    firma: "TriesteVillas",
  },
  insieme: {
    occhiello: "Chi porta che cosa",
    h2: "Noi portiamo compratori da lontano. Voi il lago.",
    lead: "Una casa, due agenzie, ciascuna con quello che sa fare. Così nessuno fa il lavoro due volte e nessuno pesta i piedi all'altro.",
    noi: "Che cosa portiamo noi",
    voi: "Che cosa portate voi",
    noiVoci: [
      "Le richieste di chi ci scrive da Svizzera, Germania, Austria e Italia, registrate nel nostro CRM.",
      "Schede e presentazioni in italiano, inglese, tedesco e sloveno.",
      "Film e tour 3D: 34 schede di triestevillas.com hanno un tour Matterport.",
      "La Private Collection, per le case che non devono andare sui portali.",
    ],
    voiVoci: [
      "Le case e i proprietari del Cusio, e la loro fiducia.",
      "La conoscenza del posto: prezzi veri, vicini, servitù, accessi al lago, ciò che negli annunci non si vede.",
      "La presenza: le visite, le chiavi, i tecnici, il geometra di fiducia.",
      "I documenti fino al rogito: catasto, conformità, APE, notaio.",
    ],
    chiusa: "Al centro ci sono chi vende e chi compra. È per loro che lo facciamo.",
  },
  legge: {
    occhiello: "Che cosa dice la legge",
    h2: "In Italia la collaborazione fra agenzie è prevista dal codice civile.",
    paragrafi: [
      "Il codice civile disciplina la mediazione negli articoli dal 1754 al 1765. Il mediatore ha diritto alla provvigione da ciascuna delle parti, se l'affare si conclude per effetto del suo intervento (art. 1755). E quando l'affare si conclude con l'intervento di più mediatori, ciascuno ha diritto a una quota della provvigione (art. 1758).",
      "La provvigione spetta soltanto a chi è iscritto (legge 3 febbraio 1989 n. 39, art. 6). TriesteVillas srl è iscritta alla Camera di Commercio di Trieste, REA TS 134793. In provincia di Novara l'uso, salvo patto diverso, è del 3% per ciascuna parte (Raccolta provinciale degli usi, 2005).",
      "La legge non dice come dividere la provvigione fra due agenzie: per questo, da noi, la divisione si scrive prima, caso per caso.",
    ],
    catenaTitolo: "Una casa, due agenzie",
    catena: {
      nodi: [["Chi vende", "il vostro cliente"], ["La vostra agenzia", "incarico, documenti, visite"], ["TriesteVillas", "racconto, film, 3D, Private Collection"], ["Chi compra da lontano", "Svizzera, Germania, Austria, Milano"]],
      legami: ["incarico di mediazione", "accordo di collaborazione, scritto", "quattro lingue"],
    },
    didascalia: "Chi vende resta legato alla vostra agenzia. La provvigione si divide come scritto nell'accordo (art. 1758 c.c.).",
    oggiTitolo: "Che cosa possiamo fare già oggi",
    oggi: [
      "Conoscerci: al telefono, su WhatsApp o davanti a un caffè, sul lago o a Trieste.",
      "Mostrarvi come lavoriamo a Trieste, con case e numeri veri.",
      "Lavorare insieme su una casa, con un accordo scritto e chi vende informato.",
    ],
  },
  forme: {
    occhiello: "Come collaborare",
    h2: "Canali e modi, decisi insieme a voi.",
    lead: "Non c'è un solo schema. Queste sono le forme di cui possiamo parlare già oggi. Le condizioni si scrivono caso per caso, e chi vende le conosce.",
    voci: [
      { titolo: "La vostra casa, il nostro racconto", testo: "La casa resta nel vostro incarico. Noi la raccontiamo in quattro lingue, con film e tour 3D, a chi ci scrive da lontano." },
      { titolo: "Il nostro compratore, la vostra casa", testo: "Chi ci chiede una casa sul lago la visita con voi. Voi seguite l'affare sul posto, noi restiamo il suo interlocutore nella sua lingua." },
      { titolo: "Case senza portale", testo: "Per chi vende e non vuole un annuncio pubblico: la Private Collection, con il consenso di chi vende e l'accesso solo a compratori che conosciamo." },
      { titolo: "La vostra proposta", testo: "Avete un'idea diversa? Raccontatecela. Se è trasparente per chi vende e per chi compra, ne parliamo volentieri." },
    ],
  },
  domande: {
    occhiello: "Domande",
    h2: "Le domande che probabilmente vi state facendo.",
    voci: [
      { d: "Ci porterete via i clienti?", r: "No. Chi vende resta legato a voi, con il vostro incarico. Noi portiamo compratori e racconto, non un incarico concorrente: e se un proprietario con un vostro incarico in esclusiva scrive a noi, gli diciamo di rispettarlo." },
      { d: "Perché collaborare, se potete mediare da soli?", r: "Perché sul lago arriviamo da fuori. Una casa si vende meglio con chi la conosce e con chi ha il compratore: separati, nessuno dei due ha tutto." },
      { d: "Quali sono le condizioni?", r: "Non c'è un listino. Le condizioni si scrivono caso per caso, prima, e chi vende le conosce. Il codice civile prevede la quota di ciascun mediatore (art. 1758), non la sua misura." },
      { d: "Con quali agenzie collaborate già sul lago?", r: "Oggi con nessuna. I nomi li pubblicheremo quando ci saranno accordi firmati." },
      { d: "In che lingua parliamo?", r: "In italiano, inglese o tedesco. Con chi compra parliamo noi nella sua lingua." },
      { d: "Chi siete?", r: "TriesteVillas srl, di Trieste, con i suoi marchi.", link: ["Chi siamo e a che punto siamo.", "stato"] },
    ],
  },
  contatto: {
    occhiello: "Scriveteci",
    h2: "Basta un WhatsApp.",
    testo: "Diteci da quale agenzia scrivete e in quale zona del lago lavorate. Vi risponde una persona del gruppo, da Trieste.",
  },
};

const en: TestiAgenzie = {
  titolo: "For estate agencies on Lake Orta: working with TriesteVillas",
  descrizione: "To the estate agencies of the Cusio: we bring buyers from abroad, presentation in four languages and the Private Collection; you bring knowledge of the lake. How to work together, and what Italian law says.",
  briciola: "For agencies",
  occhiello: "For agencies",
  h1: "On Lake Orta we are not looking for competitors. We are looking for allies.",
  lead: "On the lake we can already act as agents, but we do not want to do it against those who have worked here for years. We want to do it with you: we with the buyers who write to us from afar, you with your knowledge of the homes, roads and people of the Cusio.",
  chi: {
    occhiello: "Who writes to us",
    testo: "buyers wrote to us in the last twelve months, for homes in Trieste. Among them:",
    righe: {
      dach: "from Austria, Germany and Switzerland, among those whose nationality we know",
      da1m: "with a budget, or a home requested, of one million euros or more",
      pc: "active logins to the Trieste Private Collection",
      online: "properties online on the group's four sites",
    },
  },
  lettera: {
    occhiello: "A letter to agencies",
    h2: "In Trieste we grew by working together.",
    a: "To the estate agencies of Lake Orta",
    luogo: "Trieste, October 2026",
    paragrafi: [
      "In Trieste, transparent and proactive cooperation is what allowed us to establish ourselves quickly at the top end of the market. And large, complicated homes, each different from the others, are our daily bread.",
      "On Lake Orta we come from outside, and we know it. You know the homes, the neighbours, the planning constraints, the roads that freeze in winter. We have buyers who write from Zurich, Munich and Milan, and a way of presenting a home in four languages.",
      "Together we can define, with all the flexibility needed, ways of working that benefit everyone: first of all those who sell and those who buy.",
      "One WhatsApp message is enough, and on the other side you will find people who answer.",
    ],
    firma: "TriesteVillas",
  },
  insieme: {
    occhiello: "Who brings what",
    h2: "We bring buyers from afar. You bring the lake.",
    lead: "One home, two agencies, each doing what it does best. That way nobody does the work twice and nobody treads on anyone's toes.",
    noi: "What we bring",
    voi: "What you bring",
    noiVoci: [
      "The enquiries of people writing to us from Switzerland, Germany, Austria and Italy, recorded in our CRM.",
      "Listings and presentations in Italian, English, German and Slovenian.",
      "Film and 3D tours: 34 triestevillas.com listings have a Matterport tour.",
      "The Private Collection, for homes that should not go on the portals.",
    ],
    voiVoci: [
      "The homes and owners of the Cusio, and their trust.",
      "Local knowledge: real prices, neighbours, easements, lake access, what listings do not show.",
      "Presence: viewings, keys, technicians, the trusted surveyor.",
      "The documents up to the deed: land registry, compliance, energy certificate, notary.",
    ],
    chiusa: "At the centre are those who sell and those who buy. We do it for them.",
  },
  legge: {
    occhiello: "What the law says",
    h2: "In Italy, cooperation between agencies is provided for by the Civil Code.",
    paragrafi: [
      "The Italian Civil Code governs brokerage in articles 1754 to 1765. The agent is entitled to a commission from each party if the deal is concluded as a result of their intervention (art. 1755). And when a deal is concluded through more than one agent, each is entitled to a share of the commission (art. 1758).",
      "Only registered agents are entitled to a commission (Law no. 39 of 3 February 1989, art. 6). TriesteVillas srl is registered with the Trieste Chamber of Commerce, REA TS 134793. In the province of Novara, unless agreed otherwise, local custom is 3% from each party (provincial collection of customs, 2005).",
      "The law does not say how two agencies split the commission: that is why, with us, the split is written down beforehand, case by case.",
    ],
    catenaTitolo: "One home, two agencies",
    catena: {
      nodi: [["The seller", "your client"], ["Your agency", "mandate, documents, viewings"], ["TriesteVillas", "story, film, 3D, Private Collection"], ["The buyer from afar", "Switzerland, Germany, Austria, Milan"]],
      legami: ["agency mandate", "written cooperation agreement", "four languages"],
    },
    didascalia: "The seller remains bound to your agency. The commission is split as written in the agreement (art. 1758 of the Civil Code).",
    oggiTitolo: "What we can already do today",
    oggi: [
      "Get to know each other: by phone, on WhatsApp or over a coffee, on the lake or in Trieste.",
      "Show you how we work in Trieste, with real homes and numbers.",
      "Work together on a home, with a written agreement and the seller informed.",
    ],
  },
  forme: {
    occhiello: "How to work together",
    h2: "Channels and methods, decided with you.",
    lead: "There is no single scheme. These are the forms we can discuss today. Terms are written case by case, and the seller knows them.",
    voci: [
      { titolo: "Your home, our story", testo: "The home stays under your mandate. We present it in four languages, with film and 3D tour, to those who write to us from afar." },
      { titolo: "Our buyer, your home", testo: "Whoever asks us for a home on the lake views it with you. You follow the deal on site; we remain their contact in their language." },
      { titolo: "Homes without a portal", testo: "For sellers who do not want a public listing: the Private Collection, with the seller's consent and access only for buyers we know." },
      { titolo: "Your proposal", testo: "Have a different idea? Tell us. If it is transparent for seller and buyer, we are glad to talk." },
    ],
  },
  domande: {
    occhiello: "Questions",
    h2: "The questions you are probably asking.",
    voci: [
      { d: "Will you take our clients away?", r: "No. The seller stays bound to you, under your mandate. We bring buyers and presentation, not a competing mandate: and if an owner with an exclusive mandate from you writes to us, we tell them to respect it." },
      { d: "Why cooperate, if you can act alone?", r: "Because on the lake we come from outside. A home sells better with those who know it and those who have the buyer: apart, neither has everything." },
      { d: "What are the terms?", r: "There is no price list. Terms are written case by case, beforehand, and the seller knows them. The Civil Code provides for each agent's share (art. 1758), not its size." },
      { d: "Which agencies on the lake do you already work with?", r: "None today. We will publish names once agreements are signed." },
      { d: "What language do we speak?", r: "English, Italian or German. With buyers, we speak their language." },
      { d: "Who are you?", r: "TriesteVillas srl, of Trieste, with its brands.", link: ["About us and where we stand.", "stato"] },
    ],
  },
  contatto: {
    occhiello: "Write to us",
    h2: "One WhatsApp is enough.",
    testo: "Tell us which agency you write from and which part of the lake you work in. A person from the group replies, from Trieste.",
  },
};

const de: TestiAgenzie = {
  titolo: "Für Makler am Ortasee: Zusammenarbeit mit TriesteVillas",
  descrizione: "An die Maklerbüros des Cusio: Wir bringen Käufer aus dem Ausland, Darstellung in vier Sprachen und die Private Collection; Sie die Kenntnis des Sees. Wie wir zusammenarbeiten und was das italienische Recht sagt.",
  briciola: "Für Makler",
  occhiello: "Für Makler",
  h1: "Am Ortasee suchen wir keine Konkurrenten. Wir suchen Verbündete.",
  lead: "Am See dürfen wir bereits vermitteln, aber wir wollen es nicht gegen die tun, die hier seit Jahren arbeiten. Wir wollen es mit Ihnen tun: wir mit den Käufern, die uns von weit her schreiben, Sie mit Ihrer Kenntnis der Häuser, Straßen und Menschen des Cusio.",
  chi: {
    occhiello: "Wer uns schreibt",
    testo: "Käufer haben uns in den letzten zwölf Monaten geschrieben, für Häuser in Triest. Darunter:",
    righe: {
      dach: "aus Österreich, Deutschland und der Schweiz, unter denen mit bekannter Staatsangehörigkeit",
      da1m: "mit einem Budget oder einem gesuchten Haus ab einer Million Euro",
      pc: "aktive Zugänge zur Private Collection in Triest",
      online: "Immobilien online auf den vier Websites der Gruppe",
    },
  },
  lettera: {
    occhiello: "Ein Brief an die Makler",
    h2: "In Triest sind wir durch Zusammenarbeit gewachsen.",
    a: "An die Maklerbüros am Ortasee",
    luogo: "Triest, Oktober 2026",
    paragrafi: [
      "In Triest hat uns transparente und aktive Zusammenarbeit in kurzer Zeit im Luxussegment etabliert. Und große, komplizierte Häuser, jedes anders als die anderen, sind unser tägliches Brot.",
      "Am Ortasee kommen wir von außen, und das wissen wir. Sie kennen die Häuser, die Nachbarn, die Auflagen, die Straßen, die im Winter vereisen. Wir haben Käufer, die aus Zürich, München und Mailand schreiben, und eine Art, ein Haus in vier Sprachen zu erzählen.",
      "Mit Ihnen können wir, mit aller nötigen Beweglichkeit, Formen der Zusammenarbeit festlegen, die allen nützen: zuerst denen, die verkaufen, und denen, die kaufen.",
      "Eine WhatsApp-Nachricht genügt, und auf der anderen Seite finden Sie Menschen, die antworten.",
    ],
    firma: "TriesteVillas",
  },
  insieme: {
    occhiello: "Wer was einbringt",
    h2: "Wir bringen Käufer von weit her. Sie bringen den See.",
    lead: "Ein Haus, zwei Maklerbüros, jedes mit dem, was es kann. So macht niemand die Arbeit doppelt, und niemand tritt dem anderen auf die Füße.",
    noi: "Was wir einbringen",
    voi: "Was Sie einbringen",
    noiVoci: [
      "Die Anfragen von Menschen, die uns aus der Schweiz, Deutschland, Österreich und Italien schreiben, erfasst in unserem CRM.",
      "Exposés und Präsentationen auf Italienisch, Englisch, Deutsch und Slowenisch.",
      "Film und 3D-Rundgang: 34 Exposés auf triestevillas.com haben einen Matterport-Rundgang.",
      "Die Private Collection, für Häuser, die nicht auf die Portale sollen.",
    ],
    voiVoci: [
      "Die Häuser und Eigentümer des Cusio, und ihr Vertrauen.",
      "Ortskenntnis: echte Preise, Nachbarn, Dienstbarkeiten, Seezugang, was man in Anzeigen nicht sieht.",
      "Präsenz: Besichtigungen, Schlüssel, Techniker, der Vermesser des Vertrauens.",
      "Die Unterlagen bis zur Urkunde: Kataster, Konformität, Energieausweis, Notar.",
    ],
    chiusa: "Im Mittelpunkt stehen die, die verkaufen, und die, die kaufen. Für sie tun wir es.",
  },
  legge: {
    occhiello: "Was das Gesetz sagt",
    h2: "In Italien ist die Zusammenarbeit von Maklern im Zivilgesetzbuch vorgesehen.",
    paragrafi: [
      "Das italienische Zivilgesetzbuch regelt die Vermittlung in den Artikeln 1754 bis 1765. Der Makler hat Anspruch auf Provision von jeder Partei, wenn das Geschäft durch sein Tätigwerden zustande kommt (Art. 1755). Kommt das Geschäft durch mehrere Makler zustande, hat jeder Anspruch auf einen Teil der Provision (Art. 1758).",
      "Anspruch auf Provision haben nur eingetragene Makler (Gesetz Nr. 39 vom 3. Februar 1989, Art. 6). TriesteVillas srl ist bei der Handelskammer Triest eingetragen, REA TS 134793. In der Provinz Novara sind ohne andere Vereinbarung 3 % je Partei üblich (Sammlung der Provinzgebräuche, 2005).",
      "Das Gesetz sagt nicht, wie zwei Maklerbüros die Provision teilen: Deshalb wird die Aufteilung bei uns vorher schriftlich festgelegt, Fall für Fall.",
    ],
    catenaTitolo: "Ein Haus, zwei Maklerbüros",
    catena: {
      nodi: [["Wer verkauft", "Ihr Kunde"], ["Ihr Maklerbüro", "Auftrag, Unterlagen, Besichtigungen"], ["TriesteVillas", "Darstellung, Film, 3D, Private Collection"], ["Wer von weit her kauft", "Schweiz, Deutschland, Österreich, Mailand"]],
      legami: ["Maklerauftrag", "schriftliche Kooperationsvereinbarung", "vier Sprachen"],
    },
    didascalia: "Wer verkauft, bleibt an Ihr Büro gebunden. Die Provision wird geteilt, wie in der Vereinbarung festgelegt (Art. 1758 ZGB).",
    oggiTitolo: "Was wir schon heute tun können",
    oggi: [
      "Uns kennenlernen: am Telefon, auf WhatsApp oder bei einem Kaffee, am See oder in Triest.",
      "Ihnen zeigen, wie wir in Triest arbeiten, mit echten Häusern und Zahlen.",
      "Gemeinsam an einem Haus arbeiten, mit schriftlicher Vereinbarung und informiertem Verkäufer.",
    ],
  },
  forme: {
    occhiello: "Wie wir zusammenarbeiten",
    h2: "Kanäle und Formen, gemeinsam mit Ihnen festgelegt.",
    lead: "Es gibt kein einziges Schema. Über diese Formen können wir schon heute sprechen. Die Bedingungen werden Fall für Fall schriftlich festgelegt, und wer verkauft, kennt sie.",
    voci: [
      { titolo: "Ihr Haus, unsere Darstellung", testo: "Das Haus bleibt in Ihrem Auftrag. Wir stellen es in vier Sprachen vor, mit Film und 3D-Rundgang, für die, die uns von weit her schreiben." },
      { titolo: "Unser Käufer, Ihr Haus", testo: "Wer bei uns ein Haus am See sucht, besichtigt es mit Ihnen. Sie betreuen das Geschäft vor Ort, wir bleiben sein Ansprechpartner in seiner Sprache." },
      { titolo: "Häuser ohne Portal", testo: "Für Verkäufer ohne öffentliche Anzeige: die Private Collection, mit Zustimmung des Verkäufers und Zugang nur für Käufer, die wir kennen." },
      { titolo: "Ihr Vorschlag", testo: "Sie haben eine andere Idee? Erzählen Sie sie uns. Wenn sie für Verkäufer und Käufer transparent ist, sprechen wir gern darüber." },
    ],
  },
  domande: {
    occhiello: "Fragen",
    h2: "Die Fragen, die Sie sich wahrscheinlich stellen.",
    voci: [
      { d: "Nehmen Sie uns die Kunden weg?", r: "Nein. Wer verkauft, bleibt mit Ihrem Auftrag an Sie gebunden. Wir bringen Käufer und Darstellung, keinen konkurrierenden Auftrag: Und wenn uns ein Eigentümer mit Ihrem Alleinauftrag schreibt, sagen wir ihm, dass er ihn respektieren soll." },
      { d: "Warum zusammenarbeiten, wenn Sie allein vermitteln dürfen?", r: "Weil wir am See von außen kommen. Ein Haus verkauft sich besser mit dem, der es kennt, und dem, der den Käufer hat: Getrennt hat keiner alles." },
      { d: "Welche Bedingungen gelten?", r: "Es gibt keine Preisliste. Die Bedingungen werden vorher, Fall für Fall, schriftlich festgelegt, und wer verkauft, kennt sie. Das Zivilgesetzbuch sieht den Anteil jedes Maklers vor (Art. 1758), nicht seine Höhe." },
      { d: "Mit welchen Maklern am See arbeiten Sie schon?", r: "Heute mit keinem. Namen veröffentlichen wir, wenn Vereinbarungen unterschrieben sind." },
      { d: "In welcher Sprache sprechen wir?", r: "Auf Deutsch, Englisch oder Italienisch. Mit Käufern sprechen wir in ihrer Sprache." },
      { d: "Wer sind Sie?", r: "TriesteVillas srl aus Triest, mit ihren Marken.", link: ["Über uns und wo wir stehen.", "stato"] },
    ],
  },
  contatto: {
    occhiello: "Schreiben Sie uns",
    h2: "Eine WhatsApp genügt.",
    testo: "Sagen Sie uns, von welchem Büro Sie schreiben und in welchem Teil des Sees Sie arbeiten. Ein Mensch aus der Gruppe antwortet Ihnen, aus Triest.",
  },
};

const sl: TestiAgenzie = {
  titolo: "Za agencije ob jezeru Orta: sodelovanje s TriesteVillas",
  descrizione: "Nepremičninskim agencijam območja Cusio: mi prinašamo kupce iz tujine, predstavitev v štirih jezikih in Private Collection, vi poznavanje jezera. Kako sodelovati in kaj pravi italijansko pravo.",
  briciola: "Za agencije",
  occhiello: "Za agencije",
  h1: "Ob jezeru Orta ne iščemo konkurentov. Iščemo zaveznike.",
  lead: "Ob jezeru že lahko posredujemo, a tega nočemo početi proti tistim, ki tu delajo že leta. Želimo to početi z vami: mi s kupci, ki nam pišejo od daleč, vi s poznavanjem hiš, cest in ljudi območja Cusio.",
  chi: {
    occhiello: "Kdo nam piše",
    testo: "kupcev nam je pisalo v zadnjih dvanajstih mesecih, za hiše v Trstu. Med njimi:",
    righe: {
      dach: "iz Avstrije, Nemčije in Švice, med tistimi, katerih državljanstvo poznamo",
      da1m: "s proračunom ali iskano hišo od milijona evrov naprej",
      pc: "aktivnih dostopov do Private Collection v Trstu",
      online: "nepremičnin na spletu na štirih spletnih mestih skupine",
    },
  },
  lettera: {
    occhiello: "Pismo agencijam",
    h2: "V Trstu smo zrasli s sodelovanjem.",
    a: "Nepremičninskim agencijam ob jezeru Orta",
    luogo: "Trst, oktober 2026",
    paragrafi: [
      "V Trstu nam je pregledno in dejavno sodelovanje v kratkem času utrdilo mesto v segmentu prestižnih nepremičnin. Velike, zahtevne hiše, vsaka drugačna od drugih, pa so naš vsakdanji kruh.",
      "Ob jezero Orta prihajamo od zunaj in to vemo. Vi poznate hiše, sosede, omejitve, ceste, ki pozimi zamrznejo. Mi imamo kupce, ki pišejo iz Züricha, Münchna in Milana, in način, kako hišo predstaviti v štirih jezikih.",
      "Z vami lahko z vso potrebno prožnostjo določimo načine sodelovanja, ki koristijo vsem: najprej tistim, ki prodajajo, in tistim, ki kupujejo.",
      "Dovolj je sporočilo na WhatsApp in na drugi strani boste našli ljudi, ki odgovorijo.",
    ],
    firma: "TriesteVillas",
  },
  insieme: {
    occhiello: "Kdo prinese kaj",
    h2: "Mi prinašamo kupce od daleč. Vi prinašate jezero.",
    lead: "Ena hiša, dve agenciji, vsaka s tistim, kar zna. Tako nihče ne dela dvakrat in nihče ne stopa drugemu na prste.",
    noi: "Kaj prinašamo mi",
    voi: "Kaj prinašate vi",
    noiVoci: [
      "Povpraševanja ljudi, ki nam pišejo iz Švice, Nemčije, Avstrije in Italije, vpisana v naš CRM.",
      "Predstavitve v italijanščini, angleščini, nemščini in slovenščini.",
      "Film in 3D-ogled: 34 predstavitev na triestevillas.com ima ogled Matterport.",
      "Private Collection za hiše, ki ne smejo na portale.",
    ],
    voiVoci: [
      "Hiše in lastnike območja Cusio ter njihovo zaupanje.",
      "Poznavanje kraja: resnične cene, sosedje, služnosti, dostop do jezera, kar se v oglasih ne vidi.",
      "Prisotnost: ogledi, ključi, tehniki, geodet, ki mu zaupate.",
      "Dokumente do notarske listine: kataster, skladnost, energetska izkaznica, notar.",
    ],
    chiusa: "V središču so tisti, ki prodajajo, in tisti, ki kupujejo. Zanje to počnemo.",
  },
  legge: {
    occhiello: "Kaj pravi zakon",
    h2: "V Italiji sodelovanje med agencijami predvideva civilni zakonik.",
    paragrafi: [
      "Italijanski civilni zakonik ureja posredovanje v členih od 1754 do 1765. Posrednik ima pravico do provizije od vsake stranke, če je posel sklenjen zaradi njegovega posredovanja (1755. člen). Če je posel sklenjen s posredovanjem več posrednikov, ima vsak pravico do deleža provizije (1758. člen).",
      "Pravico do provizije imajo le vpisani posredniki (zakon št. 39 z dne 3. februarja 1989, 6. člen). TriesteVillas srl je vpisana pri Gospodarski zbornici v Trstu, REA TS 134793. V pokrajini Novara je, če ni drugače dogovorjeno, običaj 3 % od vsake stranke (zbirka pokrajinskih običajev, 2005).",
      "Zakon ne pove, kako si dve agenciji razdelita provizijo: zato pri nas delitev zapišemo vnaprej, primer za primerom.",
    ],
    catenaTitolo: "Ena hiša, dve agenciji",
    catena: {
      nodi: [["Prodajalec", "vaša stranka"], ["Vaša agencija", "mandat, dokumenti, ogledi"], ["TriesteVillas", "predstavitev, film, 3D, Private Collection"], ["Kupec od daleč", "Švica, Nemčija, Avstrija, Milano"]],
      legami: ["posredniška pogodba", "pisni dogovor o sodelovanju", "štirje jeziki"],
    },
    didascalia: "Prodajalec ostane vezan na vašo agencijo. Provizija se razdeli, kot je zapisano v dogovoru (1758. člen civilnega zakonika).",
    oggiTitolo: "Kaj lahko naredimo že danes",
    oggi: [
      "Spoznamo se: po telefonu, na WhatsApp ali ob kavi, ob jezeru ali v Trstu.",
      "Pokažemo vam, kako delamo v Trstu, z resničnimi hišami in številkami.",
      "Skupaj delamo pri hiši, s pisnim dogovorom in obveščenim prodajalcem.",
    ],
  },
  forme: {
    occhiello: "Kako sodelovati",
    h2: "Kanali in načini, določeni skupaj z vami.",
    lead: "Ni ene same sheme. O teh oblikah se lahko pogovorimo že danes. Pogoji se zapišejo primer za primerom, prodajalec pa jih pozna.",
    voci: [
      { titolo: "Vaša hiša, naša predstavitev", testo: "Hiša ostane v vašem mandatu. Mi jo predstavimo v štirih jezikih, s filmom in 3D-ogledom, tistim, ki nam pišejo od daleč." },
      { titolo: "Naš kupec, vaša hiša", testo: "Kdor pri nas išče hišo ob jezeru, si jo ogleda z vami. Vi vodite posel na kraju samem, mi ostanemo njegov sogovornik v njegovem jeziku." },
      { titolo: "Hiše brez portala", testo: "Za prodajalce, ki ne želijo javnega oglasa: Private Collection, s soglasjem prodajalca in dostopom le za kupce, ki jih poznamo." },
      { titolo: "Vaš predlog", testo: "Imate drugačno zamisel? Povejte nam jo. Če je pregledna za prodajalca in kupca, se bomo radi pogovorili." },
    ],
  },
  domande: {
    occhiello: "Vprašanja",
    h2: "Vprašanja, ki si jih verjetno zastavljate.",
    voci: [
      { d: "Nam boste odvzeli stranke?", r: "Ne. Prodajalec ostane vezan na vas, z vašim mandatom. Mi prinašamo kupce in predstavitev, ne konkurenčnega mandata: če nam piše lastnik z vašim ekskluzivnim mandatom, mu rečemo, naj ga spoštuje." },
      { d: "Zakaj sodelovati, če lahko posredujete sami?", r: "Ker ob jezero prihajamo od zunaj. Hiša se bolje proda s tistim, ki jo pozna, in s tistim, ki ima kupca: ločeno nihče nima vsega." },
      { d: "Kakšni so pogoji?", r: "Cenika ni. Pogoji se zapišejo vnaprej, primer za primerom, prodajalec pa jih pozna. Civilni zakonik predvideva delež vsakega posrednika (1758. člen), ne njegove višine." },
      { d: "S katerimi agencijami ob jezeru že sodelujete?", r: "Danes z nobeno. Imena bomo objavili, ko bodo dogovori podpisani." },
      { d: "V katerem jeziku se pogovarjamo?", r: "V italijanščini, angleščini ali nemščini. S kupci se pogovarjamo v njihovem jeziku." },
      { d: "Kdo ste?", r: "TriesteVillas srl iz Trsta s svojimi znamkami.", link: ["O nas in kje smo.", "stato"] },
    ],
  },
  contatto: {
    occhiello: "Pišite nam",
    h2: "Dovolj je WhatsApp.",
    testo: "Povejte nam, iz katere agencije pišete in na katerem delu jezera delate. Odgovori vam človek iz skupine, iz Trsta.",
  },
};

export const AGENZIE: Record<Lingua, TestiAgenzie> = { it, en, de, sl };
