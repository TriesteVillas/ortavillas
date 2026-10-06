import type { Fonte, PerLingua, TestiMondoPagina } from "../luoghi/tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 (Omegna, Nonio, Quarna Sopra, Gozzano, Bolzano Novarese, Ameno, Miasino, Armeno)", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità per comune", url: "https://idrogeo.isprambiente.it/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quote: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Ferrovia Domodossola-Novara (stazioni del lago)", url: "https://it.wikipedia.org/wiki/Ferrovia_Domodossola-Novara", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna; DEA di I livello Verbania e Domodossola (BUR Piemonte 20/7/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/30/attach/co_azienda%20sanitaria%20locale%20vco_2026-07-20_101592.pdf", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
  { titolo: "Alessi – History (Fratelli Alessi Omegna, 1921)", url: "https://alessi.com/pages/history", data: "2026-10-06" },
  { titolo: "Bonacina, Lake Orta: the undermining of an ecosystem, J. Limnol. 60(1), 2001", url: "https://jlimnol.it/jlimnol/article/download/jlimnol.2001.53/402/803", data: "2026-10-06" },
  { titolo: "EEA – Qualità delle acque di balneazione, stagione 2024", url: "https://discodata.eea.europa.eu/", data: "2026-10-06" },
];

const it: TestiMondoPagina = {
  titolo: "I capi del lago d'Orta: Omegna, Gozzano e dintorni",
  descrizione: "I due capi del lago d'Orta: Omegna, Nonio e Quarna Sopra a nord, Gozzano e Bolzano Novarese a sud. Servizi, scuole superiori, treno, quotazioni OMI 2025.",
  h1: "Omegna, Nonio, Quarna Sopra, Gozzano e Bolzano Novarese: i due capi del lago d'Orta",
  minuto: "I capi del lago sono i due estremi dove stanno i servizi e l'industria. A nord Omegna, 14.185 abitanti, l'unica città del lago, dove l'acqua esce verso nord; sopra, in provincia del Verbano-Cusio-Ossola, Nonio a 465 m e Quarna Sopra a 844 m, il punto più alto dell'atlante. A sud Gozzano, 5.499 abitanti, e Bolzano Novarese, con le loro stazioni e la strada verso Borgomanero. Li teniamo in un mondo solo perché per chi compra sono la stessa scelta: vita di paese o di città, con negozi, scuole superiori e treno, e quotazioni sotto quelle della riva di Orta. Gozzano è il luogo più vicino a Milano (67 min); Quarna Sopra il più lontano (96 min).",
  vivere: [
    {
      titolo: "Due capi, cinque luoghi",
      testo: "A nord: Omegna, città industriale, patria di Gianni Rodari e sede storica di Alessi dal 1921; Nonio, 830 abitanti, a 7 min sopra la riva ovest; Quarna Sopra, 242 abitanti, paese di montagna. A sud: Gozzano, il paese della Bemberg e della basilica di San Giuliano; Bolzano Novarese, 1.128 abitanti, il comune più piccolo dell'atlante per superficie."
    },
    {
      titolo: "Treni, scuole, ospedali",
      testo: "Quattro stazioni sulla linea Novara–Domodossola: Omegna, Omegna-Crusinallo, Gozzano e Bolzano Novarese; per Milano si cambia a Novara. Le scuole superiori statali del lago sono qui, a Omegna (licei, tecnico, professionale) e a Gozzano (sezione di liceo scientifico). Per la sanità il nord fa capo a Omegna, che ha un Punto di Primo Intervento e non un pronto soccorso, e ai DEA di Verbania e Domodossola; il sud al DEA di Borgomanero."
    },
    {
      titolo: "Che cosa costa",
      testo: "L'OMI (2° semestre 2025) quota le abitazioni civili 1.150–1.650 €/m² nel centro di Omegna, 1.000–1.500 €/m² nella zona più cara di Gozzano e di Bolzano Novarese, 900–1.350 €/m² a Nonio e 800–1.100 €/m² a Quarna Sopra, il minimo dell'atlante. Le ville arrivano a 1.500–2.200 €/m² alla Bagnella, sul lago a Omegna. Sono quotazioni, non prezzi di compravendita."
    },
    {
      titolo: "I limiti",
      testo: "Omegna ha il sole d'inverno più corto dei sedici luoghi, 5 h 37 min il 21 dicembre, e i soli due punti di balneazione del lago in classe «sufficiente» nel 2024. Gozzano, Bolzano Novarese e il centro di Quarna Sopra stanno a 1,3–2,1 km dalla riva: il lago è vicino, non sotto casa. Quarna Sopra è a 96 min da Milano, su strade di montagna."
    },
  ],
  perChi: {
    si: [
      "Volete scuole superiori, treno e negozi senza prendere la macchina per tutto.",
      "Cercate il lago a quotazioni più basse della riva di Orta.",
      "Gozzano: volete il punto del lago più vicino a Milano, 67 min.",
    ],
    no: [
      "Cercate la cartolina: qui ci sono fabbriche, traffico e lavoro.",
      "Omegna: volete sole d'inverno, che lì dura 5 h 37 min il 21 dicembre.",
      "Volete un pronto soccorso vicino a nord: Omegna ha solo un Punto di Primo Intervento.",
    ],
  },
  confronto: {
    titolo: "Capi del lago e colline del Mottarone a confronto",
    altro: "Colline del Mottarone",
    righe: [
      ["Quota del punto", "307–844 m", "478–543 m"],
      ["Distanza dalla riva", "0,5–2,1 km", "0,5–2,5 km"],
      ["Sole diretto il 21 dicembre", "5 h 37 min – 7 h 48 min", "7 h 38 min – 8 h 04 min"],
      ["Residenti dei comuni (2025)", "21.884", "3.769"],
      ["Da Milano Duomo, senza traffico", "67–96 min", "72–77 min"],
      ["Ville, zona OMI più cara", "1.500–2.200 €/m² (Omegna, Bagnella)", "1.500–2.200 €/m² (Miasino)"],
      ["Scuole superiori statali", "A Omegna e a Gozzano", "Nessuna"],
    ],
  },
  faq: [
    { d: "Perché Omegna e Gozzano stanno nello stesso mondo?", r: "Perché per chi compra sono la stessa scelta: paesi o città con servizi, scuole superiori e treno, quotazioni sotto quelle della riva di Orta. Stanno ai due capi opposti del lago, a 22 min d'auto l'uno dall'altro. Omegna e il nord sono in provincia del Verbano-Cusio-Ossola, Gozzano e Bolzano Novarese in quella di Novara." },
    { d: "Qual è il luogo del lago più vicino a Milano?", r: "Gozzano: 67 min (79 km) da piazza del Duomo e 46 min da Malpensa T1, senza traffico. Bolzano Novarese segue con 69 min. Il più lontano è Quarna Sopra, 96 min." },
    { d: "Quanto costa vivere ai capi del lago?", r: "Le abitazioni civili sono quotate da 800–1.100 €/m² a Quarna Sopra a 1.150–1.650 €/m² nel centro di Omegna; le ville arrivano a 1.500–2.200 €/m² alla Bagnella (OMI, 2° semestre 2025). Sono intervalli stimati, non prezzi firmati." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiMondoPagina = {
  titolo: "Lake Orta's two ends: Omegna, Gozzano and around",
  descrizione: "The two ends of Lake Orta: Omegna, Nonio and Quarna Sopra to the north, Gozzano and Bolzano Novarese to the south. Services, schools, trains, OMI values 2025.",
  h1: "Omegna, Nonio, Quarna Sopra, Gozzano and Bolzano Novarese: the two ends of Lake Orta",
  minuto: "The lake's ends are the two extremes where the services and industry are. To the north is Omegna, 14,185 residents, the only town on the lake, where the water flows out northwards; above it, in the province of Verbano-Cusio-Ossola, Nonio at 465 m and Quarna Sopra at 844 m, the highest point in the atlas. To the south are Gozzano, 5,499 residents, and Bolzano Novarese, with their stations and the road to Borgomanero. We keep them in one world because for a buyer they are the same choice: village or town life, with shops, upper secondary schools and a train, and values below those of Orta's shore. Gozzano is the place closest to Milan (67 min); Quarna Sopra the furthest (96 min).",
  vivere: [
    {
      titolo: "Two ends, five places",
      testo: "To the north: Omegna, an industrial town, birthplace of Gianni Rodari and Alessi's historic home since 1921; Nonio, 830 residents, 7 min away above the west shore; Quarna Sopra, 242 residents, a mountain village. To the south: Gozzano, the town of the Bemberg plant and the basilica of San Giuliano; Bolzano Novarese, 1,128 residents, the smallest municipality in the atlas by area."
    },
    {
      titolo: "Trains, schools, hospitals",
      testo: "Four stations on the Novara–Domodossola line: Omegna, Omegna-Crusinallo, Gozzano and Bolzano Novarese; for Milan you change at Novara. The lake's state upper secondary schools are here, in Omegna (licei, technical, vocational) and Gozzano (a science liceo section). For healthcare the north relies on Omegna, which has a first-aid point and not an emergency department, and on the emergency departments of Verbania and Domodossola; the south on Borgomanero's."
    },
    {
      titolo: "What it costs",
      testo: "OMI (2nd half of 2025) values standard homes at €1,150–1,650/m² in central Omegna, €1,000–1,500/m² in the highest zone of Gozzano and Bolzano Novarese, €900–1,350/m² in Nonio and €800–1,100/m² in Quarna Sopra, the atlas minimum. Villas reach €1,500–2,200/m² at Bagnella, on the lake in Omegna. These are valuations, not sale prices."
    },
    {
      titolo: "The limits",
      testo: "Omegna has the shortest winter sun of the sixteen places, 5 h 37 min on 21 December, and the only two bathing points on the lake rated \"sufficient\" in 2024. Gozzano, Bolzano Novarese and the centre of Quarna Sopra are 1.3–2.1 km from the shore: the lake is close, not at your door. Quarna Sopra is 96 min from Milan, on mountain roads."
    },
  ],
  perChi: {
    si: [
      "You want upper secondary schools, a train and shops without driving for everything.",
      "You want the lake at values below Orta's shore.",
      "Gozzano: you want the point of the lake closest to Milan, 67 min.",
    ],
    no: [
      "You want the postcard: here there are factories, traffic and work.",
      "Omegna: you want winter sun, which there lasts 5 h 37 min on 21 December.",
      "You want an emergency department nearby in the north: Omegna has only a first-aid point.",
    ],
  },
  confronto: {
    titolo: "The lake's ends and the Mottarone hills compared",
    altro: "The Mottarone hills",
    righe: [
      ["Height of the point", "307–844 m", "478–543 m"],
      ["Distance from the shore", "0.5–2.1 km", "0.5–2.5 km"],
      ["Direct sun on 21 December", "5 h 37 min – 7 h 48 min", "7 h 38 min – 8 h 04 min"],
      ["Residents of the municipalities (2025)", "21,884", "3,769"],
      ["From Milan's Duomo, no traffic", "67–96 min", "72–77 min"],
      ["Villas, highest OMI zone", "€1,500–2,200/m² (Omegna, Bagnella)", "€1,500–2,200/m² (Miasino)"],
      ["State upper secondary schools", "In Omegna and Gozzano", "None"],
    ],
  },
  faq: [
    { d: "Why are Omegna and Gozzano in the same world?", r: "Because for a buyer they are the same choice: villages or towns with services, upper secondary schools and a train, at values below Orta's shore. They sit at opposite ends of the lake, 22 min apart by car. Omegna and the north are in the province of Verbano-Cusio-Ossola, Gozzano and Bolzano Novarese in the province of Novara." },
    { d: "Which place on the lake is closest to Milan?", r: "Gozzano: 67 min (79 km) from Piazza del Duomo and 46 min from Malpensa T1, without traffic. Bolzano Novarese follows with 69 min. The furthest is Quarna Sopra, 96 min." },
    { d: "How much does it cost to live at the lake's ends?", r: "Standard homes are valued from €800–1,100/m² in Quarna Sopra to €1,150–1,650/m² in central Omegna; villas reach €1,500–2,200/m² at Bagnella (OMI, 2nd half of 2025). These are estimated ranges, not signed prices." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiMondoPagina = {
  titolo: "Die Enden des Ortasees: Omegna, Gozzano und Umgebung",
  descrizione: "Die beiden Enden des Ortasees: Omegna, Nonio und Quarna Sopra im Norden, Gozzano und Bolzano Novarese im Süden. Versorgung, Schulen, Bahn, OMI-Werte 2025.",
  h1: "Omegna, Nonio, Quarna Sopra, Gozzano und Bolzano Novarese: die beiden Enden des Ortasees",
  minuto: "Die Seeenden sind die beiden Enden, an denen Versorgung und Industrie liegen. Im Norden Omegna, 14.185 Einwohner, die einzige Stadt am See, wo das Wasser nach Norden abfließt; darüber, in der Provinz Verbano-Cusio-Ossola, Nonio auf 465 m und Quarna Sopra auf 844 m, der höchste Punkt im Atlas. Im Süden Gozzano, 5.499 Einwohner, und Bolzano Novarese, mit ihren Bahnhöfen und der Straße nach Borgomanero. Wir fassen sie in einer Welt zusammen, weil sie für Käufer dieselbe Wahl sind: Dorf- oder Stadtleben mit Geschäften, Oberschulen und Bahn, zu Werten unter denen am Ufer von Orta. Gozzano liegt Mailand am nächsten (67 Min.), Quarna Sopra am weitesten (96 Min.).",
  vivere: [
    {
      titolo: "Zwei Enden, fünf Orte",
      testo: "Im Norden: Omegna, Industriestadt, Geburtsort von Gianni Rodari und seit 1921 historischer Sitz von Alessi; Nonio, 830 Einwohner, 7 Min. entfernt über dem Westufer; Quarna Sopra, 242 Einwohner, ein Bergdorf. Im Süden: Gozzano, der Ort der Bemberg und der Basilika San Giuliano; Bolzano Novarese, 1.128 Einwohner, die flächenmäßig kleinste Gemeinde des Atlas."
    },
    {
      titolo: "Züge, Schulen, Krankenhäuser",
      testo: "Vier Bahnhöfe an der Strecke Novara–Domodossola: Omegna, Omegna-Crusinallo, Gozzano und Bolzano Novarese; nach Mailand steigt man in Novara um. Die staatlichen Oberschulen des Sees sind hier, in Omegna (Gymnasien, Fach- und Berufsschule) und Gozzano (Zweig eines naturwissenschaftlichen Gymnasiums). Gesundheit: Der Norden ist auf Omegna angewiesen, das eine Erste-Hilfe-Stelle und keine Notaufnahme hat, sowie auf die Notaufnahmen in Verbania und Domodossola; der Süden auf Borgomanero."
    },
    {
      titolo: "Was es kostet",
      testo: "Die OMI (2. Halbjahr 2025) bewertet Wohnungen mit 1.150–1.650 €/m² im Zentrum von Omegna, 1.000–1.500 €/m² in der teuersten Zone von Gozzano und Bolzano Novarese, 900–1.350 €/m² in Nonio und 800–1.100 €/m² in Quarna Sopra, dem Minimum im Atlas. Villen erreichen 1.500–2.200 €/m² in Bagnella, am See in Omegna. Das sind Richtwerte, keine Kaufpreise."
    },
    {
      titolo: "Die Grenzen",
      testo: "Omegna hat die kürzeste Wintersonne der sechzehn Orte, 5 h 37 min am 21. Dezember, und 2024 die einzigen zwei Badestellen des Sees mit „ausreichend“. Gozzano, Bolzano Novarese und das Zentrum von Quarna Sopra liegen 1,3–2,1 km vom Ufer: Der See ist nah, aber nicht vor der Tür. Quarna Sopra ist 96 Min. von Mailand entfernt, über Bergstraßen."
    },
  ],
  perChi: {
    si: [
      "Sie wollen Oberschulen, Bahn und Geschäfte, ohne für alles das Auto zu nehmen.",
      "Sie suchen den See zu Werten unter denen am Ufer von Orta.",
      "Gozzano: Sie wollen den Punkt des Sees, der Mailand am nächsten ist, 67 Min.",
    ],
    no: [
      "Sie suchen die Postkarte: Hier gibt es Fabriken, Verkehr und Arbeit.",
      "Omegna: Sie wollen Wintersonne, die dort am 21. Dezember 5 h 37 min dauert.",
      "Sie wollen im Norden eine nahe Notaufnahme: Omegna hat nur eine Erste-Hilfe-Stelle.",
    ],
  },
  confronto: {
    titolo: "Die Seeenden und die Hügel am Mottarone im Vergleich",
    altro: "Die Hügel am Mottarone",
    righe: [
      ["Höhe des Punktes", "307–844 m", "478–543 m"],
      ["Entfernung vom Ufer", "0,5–2,1 km", "0,5–2,5 km"],
      ["Direkte Sonne am 21. Dezember", "5 h 37 min – 7 h 48 min", "7 h 38 min – 8 h 04 min"],
      ["Einwohner der Gemeinden (2025)", "21.884", "3.769"],
      ["Ab Mailänder Dom, ohne Verkehr", "67–96 Min.", "72–77 Min."],
      ["Villen, teuerste OMI-Zone", "1.500–2.200 €/m² (Omegna, Bagnella)", "1.500–2.200 €/m² (Miasino)"],
      ["Staatliche Oberschulen", "In Omegna und Gozzano", "Keine"],
    ],
  },
  faq: [
    { d: "Warum stehen Omegna und Gozzano in derselben Welt?", r: "Weil sie für Käufer dieselbe Wahl sind: Orte oder Städte mit Versorgung, Oberschulen und Bahn, zu Werten unter denen am Ufer von Orta. Sie liegen an entgegengesetzten Enden des Sees, 22 Autominuten voneinander. Omegna und der Norden gehören zur Provinz Verbano-Cusio-Ossola, Gozzano und Bolzano Novarese zur Provinz Novara." },
    { d: "Welcher Ort am See liegt Mailand am nächsten?", r: "Gozzano: 67 Min. (79 km) vom Domplatz und 46 Min. von Malpensa T1, ohne Verkehr. Bolzano Novarese folgt mit 69 Min. Am weitesten entfernt ist Quarna Sopra, 96 Min." },
    { d: "Was kostet das Leben an den Seeenden?", r: "Wohnungen werden von 800–1.100 €/m² in Quarna Sopra bis 1.150–1.650 €/m² im Zentrum von Omegna bewertet; Villen erreichen 1.500–2.200 €/m² in Bagnella (OMI, 2. Halbjahr 2025). Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiMondoPagina = {
  titolo: "Konca jezera Orta: Omegna, Gozzano in okolica",
  descrizione: "Konca jezera Orta: Omegna, Nonio in Quarna Sopra na severu, Gozzano in Bolzano Novarese na jugu. Storitve, šole, vlak, vrednosti OMI 2025.",
  h1: "Omegna, Nonio, Quarna Sopra, Gozzano in Bolzano Novarese: konca jezera Orta",
  minuto: "Konca jezera sta skrajna dela, kjer so storitve in industrija. Na severu Omegna, 14.185 prebivalcev, edino mesto ob jezeru, kjer voda odteka proti severu; nad njo, v pokrajini Verbano-Cusio-Ossola, Nonio na 465 m in Quarna Sopra na 844 m, najvišja točka atlasa. Na jugu Gozzano, 5.499 prebivalcev, in Bolzano Novarese, s postajama in cesto proti Borgomaneru. V en svet ju združujemo, ker sta za kupca ista izbira: življenje v vasi ali mestu, s trgovinami, višjimi srednjimi šolami in vlakom, po vrednostih pod tistimi na obali v Orti. Gozzano je Milanu najbližji (67 min), Quarna Sopra najbolj oddaljena (96 min).",
  vivere: [
    {
      titolo: "Dva konca, pet krajev",
      testo: "Na severu: Omegna, industrijsko mesto, rojstni kraj Giannija Rodarija in od leta 1921 zgodovinski sedež podjetja Alessi; Nonio, 830 prebivalcev, 7 min stran nad zahodno obalo; Quarna Sopra, 242 prebivalcev, gorska vas. Na jugu: Gozzano, kraj tovarne Bemberg in bazilike San Giuliano; Bolzano Novarese, 1.128 prebivalcev, po površini najmanjša občina atlasa."
    },
    {
      titolo: "Vlaki, šole, bolnišnice",
      testo: "Štiri postaje na progi Novara–Domodossola: Omegna, Omegna-Crusinallo, Gozzano in Bolzano Novarese; za Milano prestopite v Novari. Državne višje srednje šole ob jezeru so tu, v Omegni (gimnazije, strokovna in poklicna šola) in Gozzanu (oddelek naravoslovne gimnazije). Za zdravstvo je sever vezan na Omegno, ki ima točko prve pomoči in ne urgence, ter na urgenci v Verbanii in Domodossoli; jug na Borgomanero."
    },
    {
      titolo: "Koliko stane",
      testo: "OMI (2. polletje 2025) vrednoti običajna stanovanja na 1.150–1.650 €/m² v središču Omegne, 1.000–1.500 €/m² v najdražji coni Gozzana in Bolzana Novarese, 900–1.350 €/m² v Noniu in 800–1.100 €/m² v Quarni Sopra, kar je najmanj v atlasu. Vile dosežejo 1.500–2.200 €/m² v Bagnelli ob jezeru v Omegni. To so ocenjene vrednosti, ne kupnine."
    },
    {
      titolo: "Omejitve",
      testo: "Omegna ima najkrajše zimsko sonce med šestnajstimi kraji, 5 h 37 min 21. decembra, in leta 2024 edini kopalni mesti ob jezeru v razredu »zadostno«. Gozzano, Bolzano Novarese in središče Quarne Sopra so 1,3–2,1 km od obale: jezero je blizu, ne pred vrati. Quarna Sopra je 96 min od Milana, po gorskih cestah."
    },
  ],
  perChi: {
    si: [
      "Želite višje srednje šole, vlak in trgovine, ne da bi za vse potrebovali avto.",
      "Iščete jezero po vrednostih pod obalo v Orti.",
      "Gozzano: želite točko jezera, ki je Milanu najbližja, 67 min.",
    ],
    no: [
      "Iščete razglednico: tu so tovarne, promet in delo.",
      "Omegna: želite zimsko sonce, ki tam 21. decembra traja 5 h 37 min.",
      "Na severu želite urgenco v bližini: Omegna ima le točko prve pomoči.",
    ],
  },
  confronto: {
    titolo: "Konca jezera in griči pod Mottaronejem v primerjavi",
    altro: "Griči pod Mottaronejem",
    righe: [
      ["Nadmorska višina točke", "307–844 m", "478–543 m"],
      ["Oddaljenost od obale", "0,5–2,1 km", "0,5–2,5 km"],
      ["Neposredno sonce 21. decembra", "5 h 37 min – 7 h 48 min", "7 h 38 min – 8 h 04 min"],
      ["Prebivalci občin (2025)", "21.884", "3.769"],
      ["Od milanske stolnice, brez prometa", "67–96 min", "72–77 min"],
      ["Vile, najdražja cona OMI", "1.500–2.200 €/m² (Omegna, Bagnella)", "1.500–2.200 €/m² (Miasino)"],
      ["Državne višje srednje šole", "V Omegni in Gozzanu", "Nobene"],
    ],
  },
  faq: [
    { d: "Zakaj sta Omegna in Gozzano v istem svetu?", r: "Ker sta za kupca ista izbira: kraja ali mesti s storitvami, višjimi srednjimi šolami in vlakom, po vrednostih pod obalo v Orti. Ležita na nasprotnih koncih jezera, 22 min vožnje drug od drugega. Omegna in sever spadata v pokrajino Verbano-Cusio-Ossola, Gozzano in Bolzano Novarese v pokrajino Novara." },
    { d: "Kateri kraj ob jezeru je Milanu najbližji?", r: "Gozzano: 67 min (79 km) od trga Piazza del Duomo in 46 min od letališča Malpensa T1, brez prometa. Sledi Bolzano Novarese z 69 min. Najbolj oddaljena je Quarna Sopra, 96 min." },
    { d: "Koliko stane življenje na koncih jezera?", r: "Običajna stanovanja so ovrednotena od 800–1.100 €/m² v Quarni Sopra do 1.150–1.650 €/m² v središču Omegne; vile dosežejo 1.500–2.200 €/m² v Bagnelli (OMI, 2. polletje 2025). To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiMondoPagina> = { it, en, de, sl };
export default testi;
