import type { Lingua } from "@/lib/rotte";

// Chi siamo, con l'ancora #stato: il bersaglio di tutti i link «A che punto siamo».
export type TestiChiSiamo = {
  titolo: string; descrizione: string; briciola: string;
  occhiello: string; h1: string; lead: string; ctaStato: string; ctaContatti: string;
  gruppo: { occhiello: string; h2: string; lead: string; marchi: { nome: string; dove: string; href?: string }[]; corrente: string };
  numeri: { occhiello: string; h2: string; lead: string; dati: string };
  metodo: { occhiello: string; h2: string; riquadri: { h3: string; testo: string }[] };
  stato: {
    occhiello: string; h2: string; lead: string;
    voci: [string, string][];
    noiTitolo: string; noi: string[]; postoTitolo: string; posto: string[];
    agenzie: string; timbro: string;
  };
  recapiti: { occhiello: string; h2: string; testo: string };
};

const it: TestiChiSiamo = {
  titolo: "Chi siamo: TriesteVillas e il lago d'Orta",
  descrizione: "Il gruppo TriesteVillas, come presenta le case a Trieste e a che punto siamo sul lago d'Orta: che cosa possiamo fare oggi, che cosa manca, quando lo rivediamo.",
  briciola: "Chi siamo",
  occhiello: "Chi siamo",
  h1: "Un gruppo di Trieste che presenta case in quattro lingue.",
  lead: "OrtaVillas è un sito di TriesteVillas srl. Qui non trovate volti: trovate il metodo, i numeri e a che punto siamo sul lago d'Orta.",
  ctaStato: "A che punto siamo",
  ctaContatti: "Contatti",
  gruppo: {
    occhiello: "Il gruppo",
    h2: "Sette marchi, un solo ufficio a Trieste.",
    lead: "Ogni marchio ha il suo pubblico. Il lavoro sotto è lo stesso: analisi, rilievo, racconto, pubblicazione e, per alcune case, la Private Collection.",
    marchi: [
      { nome: "TriesteVillas", dove: "Case di pregio a Trieste e sulla costa, con la Private Collection.", href: "https://triestevillas.com/" },
      { nome: "TriesteImmobiliare", dove: "Le case di ogni giorno a Trieste.", href: "https://triesteimmobiliare.com/" },
      { nome: "TriesteAffitti", dove: "Affitti a Trieste, lunghi e transitori.", href: "https://triesteaffitti.com/" },
      { nome: "FriuliVillas", dove: "Ville e case di campagna in Friuli.", href: "https://friulivillas.com/" },
      { nome: "LignanoVillas", dove: "Case al mare a Lignano.", href: "https://lignanovillas.com/" },
      { nome: "SloveniaVillas", dove: "La costa slovena e il Carso, misurati da Trieste.", href: "https://sloveniavillas.com/" },
      { nome: "OrtaVillas", dove: "Il lago d'Orta, misurato da Milano. Questo sito." },
    ],
    corrente: "state leggendo questo",
  },
  numeri: {
    occhiello: "In numeri",
    h2: "Che cosa fa il gruppo, contato.",
    lead: "Conteggi fatti con un programma e verificati con un secondo metodo, il giorno prima dell'uscita di questa edizione. Il metodo è nella",
    dati: "pagina dei dati",
  },
  metodo: {
    occhiello: "Il metodo",
    h2: "Come una casa arriva a chi la compra.",
    riquadri: [
      { h3: "Un CRM costruito in casa", testo: "Richieste, visite, case e documenti stanno in un unico sistema scritto da noi, che tiene la memoria di ogni contatto." },
      { h3: "Quattro lingue, sempre", testo: "Italiano, inglese, tedesco e sloveno per ogni scheda: chi compra da Zurigo la legge in tedesco, chi abita a Milano in italiano." },
      { h3: "Film e tour 3D", testo: "Una casa si visita prima del viaggio: 34 schede di triestevillas.com hanno un tour Matterport." },
      { h3: "L'AI dichiarata", testo: "Quando una foto è ritoccata con l'intelligenza artificiale lo diciamo, foto per foto: oggi 1.789 foto hanno il loro registro. Su questo sito, nessuna." },
    ],
  },
  stato: {
    occhiello: "A che punto siamo · Ottobre 2026",
    h2: "Sul lago possiamo già mediare. In collezione, oggi, nessuna casa.",
    lead: "In Italia la mediazione immobiliare è riservata a chi è iscritto, e TriesteVillas srl lo è. Per questo, a differenza della Slovenia, sul lago d'Orta possiamo lavorare da subito. Ma l'atlante esce prima delle case, e lo diciamo.",
    voci: [
      ["Possiamo mediare", "Sì. TriesteVillas srl è un'agenzia iscritta alla Camera di Commercio di Trieste, REA TS 134793: può valutare, ricevere incarichi e presentare compratori anche sul lago."],
      ["In collezione", "0 case del lago, oggi. Nessun proprietario ci ha ancora affidato una casa: quando succederà, lo scriveremo qui."],
      ["Chi risponde", "Un numero dedicato solo a questo sito, +39 347 8628738, telefono e WhatsApp, in italiano, inglese e tedesco."],
      ["Dove siamo", "L'ufficio è a Trieste. Sul lago non abbiamo una sede, e non diciamo di averla."],
      ["Partner sul lago", "Nessun accordo firmato, oggi. I nomi delle agenzie con cui lavoreremo li pubblicheremo a contratto firmato."],
    ],
    noiTitolo: "Che cosa portiamo noi",
    noi: ["Il racconto della casa in quattro lingue, con film e tour 3D.", "La domanda da lontano: chi scrive a noi da Svizzera, Germania, Austria e Italia.", "La Private Collection, per le case che non vanno sui portali.", "Il CRM e il metodo con cui lavoriamo a Trieste."],
    postoTitolo: "Che cosa cerchiamo sul posto",
    posto: ["Agenzie del Cusio con cui collaborare, con accordi scritti.", "Tecnici di fiducia per catasto, conformità e APE.", "Le case dei proprietari che preferiscono la riservatezza ai portali."],
    agenzie: "Siete un'agenzia del lago? Leggete il nostro invito a collaborare",
    timbro: "Stato aggiornato al 6 ottobre 2026 · prossima revisione entro il 15 dicembre 2026",
  },
  recapiti: {
    occhiello: "Recapiti",
    h2: "Dove trovarci.",
    testo: "Un solo ufficio, a Trieste. Per una casa sul lago d'Orta, da vendere o da cercare.",
  },
};

const en: TestiChiSiamo = {
  titolo: "About us: TriesteVillas and Lake Orta",
  descrizione: "The TriesteVillas group, how it presents homes in Trieste and where we stand on Lake Orta: what we can do today, what is missing, when we review it.",
  briciola: "About us",
  occhiello: "About us",
  h1: "A Trieste group that presents homes in four languages.",
  lead: "OrtaVillas is a site of TriesteVillas srl. You will not find faces here: you will find the method, the numbers and where we stand on Lake Orta.",
  ctaStato: "Where we stand",
  ctaContatti: "Contact",
  gruppo: {
    occhiello: "The group",
    h2: "Seven brands, one office in Trieste.",
    lead: "Each brand has its audience. The work underneath is the same: analysis, survey, story, publication and, for some homes, the Private Collection.",
    marchi: [
      { nome: "TriesteVillas", dove: "Fine homes in Trieste and on the coast, with the Private Collection.", href: "https://triestevillas.com/" },
      { nome: "TriesteImmobiliare", dove: "Everyday homes in Trieste.", href: "https://triesteimmobiliare.com/" },
      { nome: "TriesteAffitti", dove: "Rentals in Trieste, long and short term.", href: "https://triesteaffitti.com/" },
      { nome: "FriuliVillas", dove: "Villas and country houses in Friuli.", href: "https://friulivillas.com/" },
      { nome: "LignanoVillas", dove: "Seaside homes in Lignano.", href: "https://lignanovillas.com/" },
      { nome: "SloveniaVillas", dove: "The Slovenian coast and the Karst, measured from Trieste.", href: "https://sloveniavillas.com/" },
      { nome: "OrtaVillas", dove: "Lake Orta, measured from Milan. This site." },
    ],
    corrente: "you are reading this one",
  },
  numeri: {
    occhiello: "In numbers",
    h2: "What the group does, counted.",
    lead: "Counts made with a program and checked with a second method, the day before this edition came out. The method is on the",
    dati: "data page",
  },
  metodo: {
    occhiello: "The method",
    h2: "How a home reaches its buyer.",
    riquadri: [
      { h3: "A CRM built in-house", testo: "Enquiries, viewings, homes and documents live in a single system we wrote ourselves, which keeps the memory of every contact." },
      { h3: "Four languages, always", testo: "Italian, English, German and Slovenian for every listing: a buyer from Zurich reads it in German, one living in Milan in Italian." },
      { h3: "Film and 3D tours", testo: "A home is visited before the journey: 34 triestevillas.com listings have a Matterport tour." },
      { h3: "AI declared", testo: "When a photo is retouched with artificial intelligence we say so, photo by photo: today 1,789 photos have their record. On this site, none." },
    ],
  },
  stato: {
    occhiello: "Where we stand · October 2026",
    h2: "On the lake we can already act as agents. In the collection, today, no home.",
    lead: "In Italy, estate agency is reserved to registered agents, and TriesteVillas srl is one. That is why, unlike in Slovenia, we can work on Lake Orta right away. But the atlas comes out before the homes, and we say so.",
    voci: [
      ["Can we act as agents?", "Yes. TriesteVillas srl is an agency registered with the Trieste Chamber of Commerce, REA TS 134793: it can value homes, take mandates and introduce buyers on the lake too."],
      ["In the collection", "0 Lake Orta homes, today. No owner has entrusted us with a home yet: when it happens, we will write it here."],
      ["Who answers", "A number dedicated to this site only, +39 347 8628738, phone and WhatsApp, in English, Italian and German."],
      ["Where we are", "Our office is in Trieste. We have no office on the lake, and we do not claim to."],
      ["Partners on the lake", "No signed agreement, today. We will publish the names of the agencies we work with once contracts are signed."],
    ],
    noiTitolo: "What we bring",
    noi: ["The story of the home in four languages, with film and 3D tour.", "Demand from afar: people writing to us from Switzerland, Germany, Austria and Italy.", "The Private Collection, for homes that do not go on the portals.", "The CRM and the method we use in Trieste."],
    postoTitolo: "What we are looking for locally",
    posto: ["Agencies in the Cusio to work with, under written agreements.", "Trusted technicians for land registry, compliance and energy certificates.", "Homes of owners who prefer discretion to the portals."],
    agenzie: "Are you an agency on the lake? Read our invitation to work together",
    timbro: "Status updated on 6 October 2026 · next review by 15 December 2026",
  },
  recapiti: {
    occhiello: "Contacts",
    h2: "Where to find us.",
    testo: "One office, in Trieste. For a home on Lake Orta, to sell or to find.",
  },
};

const de: TestiChiSiamo = {
  titolo: "Über uns: TriesteVillas und der Ortasee",
  descrizione: "Die Gruppe TriesteVillas, wie sie in Triest Häuser vorstellt und wo wir am Ortasee stehen: was wir heute tun können, was fehlt, wann wir es überprüfen.",
  briciola: "Über uns",
  occhiello: "Über uns",
  h1: "Eine Gruppe aus Triest, die Häuser in vier Sprachen vorstellt.",
  lead: "OrtaVillas ist eine Website der TriesteVillas srl. Gesichter finden Sie hier nicht: Sie finden die Methode, die Zahlen und wo wir am Ortasee stehen.",
  ctaStato: "Wo wir stehen",
  ctaContatti: "Kontakt",
  gruppo: {
    occhiello: "Die Gruppe",
    h2: "Sieben Marken, ein Büro in Triest.",
    lead: "Jede Marke hat ihr Publikum. Die Arbeit darunter ist dieselbe: Analyse, Aufnahme, Darstellung, Veröffentlichung und, für manche Häuser, die Private Collection.",
    marchi: [
      { nome: "TriesteVillas", dove: "Hochwertige Häuser in Triest und an der Küste, mit der Private Collection.", href: "https://triestevillas.com/" },
      { nome: "TriesteImmobiliare", dove: "Die alltäglichen Wohnungen und Häuser in Triest.", href: "https://triesteimmobiliare.com/" },
      { nome: "TriesteAffitti", dove: "Mieten in Triest, lang- und kurzfristig.", href: "https://triesteaffitti.com/" },
      { nome: "FriuliVillas", dove: "Villen und Landhäuser im Friaul.", href: "https://friulivillas.com/" },
      { nome: "LignanoVillas", dove: "Häuser am Meer in Lignano.", href: "https://lignanovillas.com/" },
      { nome: "SloveniaVillas", dove: "Die slowenische Küste und der Karst, gemessen von Triest.", href: "https://sloveniavillas.com/" },
      { nome: "OrtaVillas", dove: "Der Ortasee, gemessen von Mailand. Diese Website." },
    ],
    corrente: "Sie lesen gerade diese",
  },
  numeri: {
    occhiello: "In Zahlen",
    h2: "Was die Gruppe tut, gezählt.",
    lead: "Zählungen mit einem Programm, geprüft mit einer zweiten Methode, am Tag vor dem Erscheinen dieser Ausgabe. Die Methode steht auf der",
    dati: "Datenseite",
  },
  metodo: {
    occhiello: "Die Methode",
    h2: "Wie ein Haus zu seinem Käufer kommt.",
    riquadri: [
      { h3: "Ein selbst gebautes CRM", testo: "Anfragen, Besichtigungen, Häuser und Unterlagen liegen in einem einzigen, von uns geschriebenen System, das jeden Kontakt im Gedächtnis behält." },
      { h3: "Vier Sprachen, immer", testo: "Italienisch, Englisch, Deutsch und Slowenisch für jedes Exposé: Wer aus Zürich kauft, liest es auf Deutsch, wer in Mailand wohnt, auf Italienisch." },
      { h3: "Film und 3D-Rundgang", testo: "Ein Haus wird vor der Reise besichtigt: 34 Exposés auf triestevillas.com haben einen Matterport-Rundgang." },
      { h3: "KI offen deklariert", testo: "Wenn ein Foto mit künstlicher Intelligenz bearbeitet ist, sagen wir es, Foto für Foto: Heute haben 1.789 Fotos ihren Registereintrag. Auf dieser Website: keines." },
    ],
  },
  stato: {
    occhiello: "Wo wir stehen · Oktober 2026",
    h2: "Am See dürfen wir bereits vermitteln. In der Collection ist heute kein Haus.",
    lead: "In Italien ist die Immobilienvermittlung eingetragenen Maklern vorbehalten, und TriesteVillas srl ist eingetragen. Deshalb können wir, anders als in Slowenien, am Ortasee sofort arbeiten. Aber der Atlas erscheint vor den Häusern, und wir sagen es.",
    voci: [
      ["Dürfen wir vermitteln?", "Ja. TriesteVillas srl ist ein bei der Handelskammer Triest eingetragenes Maklerbüro, REA TS 134793: Es kann bewerten, Aufträge annehmen und Käufer vorstellen, auch am See."],
      ["In der Collection", "Heute 0 Häuser vom See. Noch hat uns kein Eigentümer ein Haus anvertraut: Wenn es so weit ist, schreiben wir es hier."],
      ["Wer antwortet", "Eine Nummer nur für diese Website, +39 347 8628738, Telefon und WhatsApp, auf Deutsch, Englisch und Italienisch."],
      ["Wo wir sind", "Unser Büro ist in Triest. Am See haben wir keinen Sitz, und wir behaupten es auch nicht."],
      ["Partner am See", "Heute keine unterschriebene Vereinbarung. Die Namen der Maklerbüros, mit denen wir arbeiten, veröffentlichen wir nach Vertragsabschluss."],
    ],
    noiTitolo: "Was wir einbringen",
    noi: ["Die Darstellung des Hauses in vier Sprachen, mit Film und 3D-Rundgang.", "Die Nachfrage von weit her: wer uns aus der Schweiz, Deutschland, Österreich und Italien schreibt.", "Die Private Collection, für Häuser, die nicht auf die Portale gehen.", "Das CRM und die Methode, mit der wir in Triest arbeiten."],
    postoTitolo: "Was wir vor Ort suchen",
    posto: ["Maklerbüros im Cusio für eine Zusammenarbeit mit schriftlichen Vereinbarungen.", "Techniker des Vertrauens für Kataster, Konformität und Energieausweis.", "Häuser von Eigentümern, die Diskretion den Portalen vorziehen."],
    agenzie: "Sie sind ein Maklerbüro am See? Lesen Sie unsere Einladung zur Zusammenarbeit",
    timbro: "Stand vom 6. Oktober 2026 · nächste Überprüfung bis 15. Dezember 2026",
  },
  recapiti: {
    occhiello: "Kontakt",
    h2: "Wo Sie uns finden.",
    testo: "Ein Büro, in Triest. Für ein Haus am Ortasee, zum Verkaufen oder zum Suchen.",
  },
};

const sl: TestiChiSiamo = {
  titolo: "O nas: TriesteVillas in jezero Orta",
  descrizione: "Skupina TriesteVillas, kako v Trstu predstavlja hiše in kje smo ob jezeru Orta: kaj lahko naredimo danes, kaj manjka in kdaj to preverimo.",
  briciola: "O nas",
  occhiello: "O nas",
  h1: "Tržaška skupina, ki hiše predstavlja v štirih jezikih.",
  lead: "OrtaVillas je spletno mesto družbe TriesteVillas srl. Obrazov tu ne boste našli: našli boste metodo, številke in kje smo ob jezeru Orta.",
  ctaStato: "Kje smo",
  ctaContatti: "Stik",
  gruppo: {
    occhiello: "Skupina",
    h2: "Sedem znamk, ena pisarna v Trstu.",
    lead: "Vsaka znamka ima svoje občinstvo. Delo pod njimi je enako: analiza, popis, predstavitev, objava in pri nekaterih hišah Private Collection.",
    marchi: [
      { nome: "TriesteVillas", dove: "Prestižne hiše v Trstu in na obali, s Private Collection.", href: "https://triestevillas.com/" },
      { nome: "TriesteImmobiliare", dove: "Vsakdanja stanovanja in hiše v Trstu.", href: "https://triesteimmobiliare.com/" },
      { nome: "TriesteAffitti", dove: "Najemi v Trstu, dolgoročni in začasni.", href: "https://triesteaffitti.com/" },
      { nome: "FriuliVillas", dove: "Vile in podeželske hiše v Furlaniji.", href: "https://friulivillas.com/" },
      { nome: "LignanoVillas", dove: "Hiše ob morju v Lignanu.", href: "https://lignanovillas.com/" },
      { nome: "SloveniaVillas", dove: "Slovenska obala in Kras, izmerjena iz Trsta.", href: "https://sloveniavillas.com/" },
      { nome: "OrtaVillas", dove: "Jezero Orta, izmerjeno iz Milana. To spletno mesto." },
    ],
    corrente: "berete to",
  },
  numeri: {
    occhiello: "V številkah",
    h2: "Kaj dela skupina, prešteto.",
    lead: "Štetja s programom, preverjena z drugo metodo, dan pred izidom te izdaje. Metoda je opisana na",
    dati: "strani s podatki",
  },
  metodo: {
    occhiello: "Metoda",
    h2: "Kako hiša pride do kupca.",
    riquadri: [
      { h3: "CRM, zgrajen doma", testo: "Povpraševanja, ogledi, hiše in dokumenti so v enem samem sistemu, ki smo ga napisali sami in ki hrani spomin na vsak stik." },
      { h3: "Vedno štirje jeziki", testo: "Italijanščina, angleščina, nemščina in slovenščina za vsako predstavitev: kupec iz Züricha jo prebere v nemščini, kdor živi v Milanu, v italijanščini." },
      { h3: "Film in 3D-ogled", testo: "Hišo si ogledate pred potjo: 34 predstavitev na triestevillas.com ima ogled Matterport." },
      { h3: "Priznana UI", testo: "Ko je fotografija obdelana z umetno inteligenco, to povemo, fotografijo za fotografijo: danes ima evidenco 1.789 fotografij. Na tem spletnem mestu nobena." },
    ],
  },
  stato: {
    occhiello: "Kje smo · oktober 2026",
    h2: "Ob jezeru že lahko posredujemo. V zbirki danes ni nobene hiše.",
    lead: "V Italiji je nepremičninsko posredovanje pridržano vpisanim posrednikom, TriesteVillas srl pa je vpisana. Zato lahko ob jezeru Orta, drugače kot v Sloveniji, delamo takoj. A atlas izide pred hišami, in to povemo.",
    voci: [
      ["Lahko posredujemo?", "Da. TriesteVillas srl je agencija, vpisana pri Gospodarski zbornici v Trstu, REA TS 134793: lahko ocenjuje, prevzema posredniške pogodbe in predstavlja kupce, tudi ob jezeru."],
      ["V zbirki", "Danes 0 hiš ob jezeru. Noben lastnik nam še ni zaupal hiše: ko se bo to zgodilo, bomo to zapisali tukaj."],
      ["Kdo odgovarja", "Številka samo za to spletno mesto, +39 347 8628738, telefon in WhatsApp, v italijanščini, angleščini in nemščini."],
      ["Kje smo", "Naša pisarna je v Trstu. Ob jezeru nimamo sedeža in tega ne trdimo."],
      ["Partnerji ob jezeru", "Danes ni podpisanega dogovora. Imena agencij, s katerimi bomo sodelovali, bomo objavili po podpisu pogodbe."],
    ],
    noiTitolo: "Kaj prinašamo mi",
    noi: ["Predstavitev hiše v štirih jezikih, s filmom in 3D-ogledom.", "Povpraševanje od daleč: kdor nam piše iz Švice, Nemčije, Avstrije in Italije.", "Private Collection za hiše, ki ne gredo na portale.", "CRM in metodo, s katero delamo v Trstu."],
    postoTitolo: "Kaj iščemo na kraju samem",
    posto: ["Agencije območja Cusio za sodelovanje s pisnimi dogovori.", "Zaupanja vredne tehnike za kataster, skladnost in energetsko izkaznico.", "Hiše lastnikov, ki imajo raje diskretnost kot portale."],
    agenzie: "Ste agencija ob jezeru? Preberite naše povabilo k sodelovanju",
    timbro: "Stanje na dan 6. oktobra 2026 · naslednji pregled do 15. decembra 2026",
  },
  recapiti: {
    occhiello: "Stik",
    h2: "Kje nas najdete.",
    testo: "Ena pisarna, v Trstu. Za hišo ob jezeru Orta, ki jo prodajate ali iščete.",
  },
};

export const CHI_SIAMO: Record<Lingua, TestiChiSiamo> = { it, en, de, sl };
