import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 e stima 2026 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Armeno", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità e superficie, comune di Armeno", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3006", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Armeno (territorio fino a quasi 1.400 m, SP41 per il Mottarone, legno e casalinghi)", url: "https://it.wikipedia.org/wiki/Armeno_(Italia)", data: "2026-10-06" },
  { titolo: "ANSA – Mottarone, la funivia ancora ferma al quinto anniversario (23/5/2026)", url: "https://www.ansa.it/piemonte/notizie/2026/05/23/cinque-anni-da-tragedia-del-mottarone-qua-una-pesante-ombra-di-morte_b8d62fdc-a99e-4445-a47d-a5080c82bb40.html", data: "2026-10-06" },
  { titolo: "Stresa Turismo – Funivia Stresa-Alpino-Mottarone: la funivia è chiusa", url: "https://www.stresaturismo.it/it/cosa-fare/funivia-stresa-alpino-mottarone-la-funivia-e-chiusa/", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Armeno: vivere ai piedi del Mottarone sopra il lago d'Orta",
  descrizione: "Armeno, 2.085 abitanti a 543 m, porta della strada per il Mottarone: scuole fino alle medie, quotazioni OMI, 7 h 38 min di sole a dicembre, 77 min da Milano.",
  frase: "Armeno è il paese più grande delle colline e la porta della strada per il Mottarone: 2.085 abitanti, 543 m di quota, 2,5 km dal lago, 77 min da Milano.",
  vivere: [
    {
      titolo: "Il paese sotto il Mottarone",
      testo: "Armeno ha un territorio di 31,5 km² che sale sulle pendici del Mottarone fino a quasi 1.400 m. Da qui parte la SP41, la strada principale e senza pedaggio per la vetta. La funivia da Stresa, sull'altro versante, è ferma dal 23 maggio 2021, quando la caduta della cabina uccise 14 persone; a ottobre 2026 non ha una data di riapertura.\n\nAccanto alle attività tradizionali del legno, Wikipedia ricorda aziende di articoli casalinghi, come in tutto il distretto del Cusio. Il punto centrale del paese sta a 543 m, 253 m sopra il lago e a 2,5 km in linea d'aria dalla riva: è il luogo delle colline più lontano dall'acqua."
    },
    {
      titolo: "Un paese con le sue scuole",
      testo: "Con 2.085 residenti (ISTAT, 1° gennaio 2025) Armeno è il comune più popoloso delle colline, ed è l'unico dell'atlante che l'ISTAT stima in crescita: 2.089 al 1° gennaio 2026. In comune ci sono scuola dell'infanzia, primaria e secondaria di primo grado statali; il liceo più vicino è a Gozzano, o a Omegna (13 min).\n\nPer la sanità, Omegna ha un Punto di Primo Intervento, non un pronto soccorso; il DEA di I livello è a Borgomanero. Per ISPRA il 2,4% dei residenti vive in aree a pericolosità da frana elevata o molto elevata e il 4,3% in aree a pericolosità idraulica media."
    },
    {
      titolo: "Sole di collina, inverni di quota",
      testo: "Il 21 dicembre il nostro calcolo dà ad Armeno 7 h 38 min di sole diretto, dalle 08:44 alle 16:21: un'ora più di piazza Motta. Il 21 giugno sono 14 h 23 min. Il calcolo considera solo il rilievo.\n\nIl rovescio è la quota: a 543 m, e più su verso il Mottarone, l'inverno è più freddo che in riva al lago. Non abbiamo una stazione meteo locale con medie pubblicate: è un'indicazione, non una misura."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) nel vecchio nucleo centrale (B1) le abitazioni civili sono quotate 990–1.450 €/m², le economiche 550–810 €/m². Nella zona collinare residenziale D1 le civili stanno a 950–1.400 €/m² e ville e villini a 1.150–1.650 €/m². Sul 2° semestre 2024 le civili sono salite del 4,3–4,4% al centro dell'intervallo, le ville del 3,7%.\n\nLe ville sono quotate come ad Ameno. Sono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 77 min (90 km) da Milano Duomo, 57 min (50 km) da Malpensa T1, 85 min da Lugano. Le stazioni più vicine sono Pettenasco (2,5 km in linea d'aria) e Orta-Miasino (3,3 km), sulla linea Novara–Domodossola; per Milano si cambia a Novara.\n\nMiasino è a 4 min, Orta e Pettenasco a 8, Omegna a 13. I battelli partono da Pettenasco e da Orta, da marzo a ottobre."
    },
  ],
  perChi: {
    si: [
      "Volete scuole dall'infanzia alle medie in paese.",
      "Cercate spazio e terreno sotto il Mottarone, a 8 min dal lago.",
      "Volete una villa a 1.150–1.650 €/m² con 7 h 38 min di sole a dicembre.",
    ],
    no: [
      "Volete vedere il lago da casa: la riva è a 2,5 km e il paese guarda il monte.",
      "Volete inverni miti di riva.",
      "Contate sulla funivia del Mottarone: è chiusa dal 2021.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa ad Armeno?", r: "L'OMI quota le abitazioni civili 950–1.450 €/m² a seconda della zona e ville e villini 1.150–1.650 €/m² (2° semestre 2025). Le economiche del vecchio nucleo sono a 550–810 €/m². Sono intervalli stimati, non prezzi firmati." },
    { d: "Che scuole ci sono ad Armeno?", r: "Scuola dell'infanzia, primaria e secondaria di primo grado statali. Per le superiori si va a Omegna (13 min) o a Gozzano. Le paritarie non sono nel dato del Ministero." },
    { d: "Da Armeno si sale al Mottarone?", r: "Sì: la SP41 parte da Armeno ed è la via principale per la vetta, senza pedaggio. La funivia da Stresa è chiusa dall'incidente del 23 maggio 2021, e a ottobre 2026 non ha una data di riapertura." },
    { d: "Armeno ha vista lago?", r: "Il centro del paese sta a 2,5 km in linea d'aria dalla riva e 253 m sopra il lago, sul versante del Mottarone. Da alcune posizioni il lago si vede, da molte no. Va verificato casa per casa." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Armeno: living at the foot of Mottarone above Lake Orta",
  descrizione: "Armeno, 2,085 residents at 543 m, the gateway to the Mottarone road: schools to lower secondary, OMI values 2025, 7 h 38 min of December sun, 77 min from Milan.",
  frase: "Armeno is the largest of the hill villages and the gateway to the Mottarone road: 2,085 residents, 543 m up, 2.5 km from the lake, 77 min from Milan.",
  vivere: [
    {
      titolo: "The village below Mottarone",
      testo: "Armeno's territory covers 31.5 km² and climbs the slopes of Mottarone to almost 1,400 m. The SP41 starts here, the main toll-free road to the summit. The cable car from Stresa, on the other side, has been shut since 23 May 2021, when the cabin fell and 14 people died; in October 2026 it has no reopening date.\n\nAlongside traditional woodworking, Wikipedia mentions household-goods companies, as across the Cusio district. The village centre is at 543 m, 253 m above the lake and 2.5 km from the shore as the crow flies: the hill place furthest from the water."
    },
    {
      titolo: "A village with its own schools",
      testo: "With 2,085 residents (ISTAT, 1 January 2025) Armeno is the most populous municipality in the hills, and the only one in the atlas that ISTAT estimates as growing: 2,089 on 1 January 2026. It has a state nursery, primary and lower secondary school; the nearest upper secondary schools are in Gozzano or Omegna (13 min).\n\nFor healthcare, Omegna has a first-aid point, not an emergency department; the level-I emergency department is in Borgomanero. According to ISPRA, 2.4% of residents live in areas of high or very high landslide hazard and 4.3% in areas of medium flood hazard."
    },
    {
      titolo: "Hill sun, upland winters",
      testo: "On 21 December our calculation gives Armeno 7 h 38 min of direct sun, from 8:44 am to 4:21 pm: an hour more than Piazza Motta. On 21 June it is 14 h 23 min. The calculation covers terrain only.\n\nThe flip side is altitude: at 543 m, and higher up towards Mottarone, winter is colder than on the shore. We have no local weather station with published averages: this is an indication, not a measurement."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), in the old central core (B1) standard homes are valued at €990–1,450/m², economy homes at €550–810/m². In the residential hill zone D1 standard homes are at €950–1,400/m² and villas at €1,150–1,650/m². Against the 2nd half of 2024, standard homes rose by 4.3–4.4% at the midpoint, villas by 3.7%.\n\nVillas are valued the same as in Ameno. These are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 77 min (90 km) from Milan's Duomo, 57 min (50 km) from Malpensa T1, 85 min from Lugano. The nearest stations are Pettenasco (2.5 km as the crow flies) and Orta-Miasino (3.3 km), on the Novara–Domodossola line; for Milan you change at Novara.\n\nMiasino is 4 min away, Orta and Pettenasco 8, Omegna 13. Boats leave from Pettenasco and Orta, from March to October."
    },
  ],
  perChi: {
    si: [
      "You want schools from nursery to lower secondary in the village.",
      "You want space and land below Mottarone, 8 min from the lake.",
      "You want a villa at €1,150–1,650/m² with 7 h 38 min of December sun.",
    ],
    no: [
      "You want a lake view from home: the shore is 2.5 km away and the village faces the mountain.",
      "You want mild lakeside winters.",
      "You are counting on the Mottarone cable car: it has been shut since 2021.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Armeno?", r: "OMI values standard homes at €950–1,450/m² depending on the zone and villas at €1,150–1,650/m² (2nd half of 2025). Economy homes in the old core are at €550–810/m². These are estimated ranges, not signed prices." },
    { d: "Which schools are in Armeno?", r: "A state nursery, primary and lower secondary school. For upper secondary you go to Omegna (13 min) or Gozzano. Private (paritarie) schools are not in the Ministry data." },
    { d: "Can you drive up Mottarone from Armeno?", r: "Yes: the SP41 starts in Armeno and is the main toll-free road to the summit. The cable car from Stresa has been closed since the accident of 23 May 2021, and in October 2026 has no reopening date." },
    { d: "Does Armeno have a lake view?", r: "The village centre is 2.5 km from the shore as the crow flies and 253 m above the lake, on the Mottarone side. From some spots you see the lake, from many you do not. Check house by house." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Armeno: Leben am Fuß des Mottarone über dem Ortasee",
  descrizione: "Armeno, 2.085 Einwohner auf 543 m, Tor zur Straße auf den Mottarone: Schulen bis zur Mittelschule, OMI-Werte, 7 h 38 min Dezembersonne, 77 Min. von Mailand.",
  frase: "Armeno ist das größte der Hügeldörfer und das Tor zur Straße auf den Mottarone: 2.085 Einwohner, 543 m hoch, 2,5 km vom See, 77 Min. von Mailand.",
  vivere: [
    {
      titolo: "Das Dorf unter dem Mottarone",
      testo: "Das Gemeindegebiet von Armeno umfasst 31,5 km² und steigt an den Hängen des Mottarone bis fast 1.400 m. Hier beginnt die SP41, die mautfreie Hauptstraße zum Gipfel. Die Seilbahn von Stresa auf der anderen Seite steht seit dem 23. Mai 2021 still, als der Absturz der Kabine 14 Menschen tötete; im Oktober 2026 gibt es kein Datum für die Wiedereröffnung.\n\nNeben dem traditionellen Holzhandwerk nennt Wikipedia Firmen für Haushaltswaren, wie im ganzen Bezirk Cusio. Das Ortszentrum liegt auf 543 m, 253 m über dem See und 2,5 km Luftlinie vom Ufer: der Hügelort, der am weitesten vom Wasser entfernt ist."
    },
    {
      titolo: "Ein Dorf mit eigenen Schulen",
      testo: "Mit 2.085 Einwohnern (ISTAT, 1. Januar 2025) ist Armeno die bevölkerungsreichste Gemeinde der Hügel und die einzige im Atlas, die ISTAT wachsend schätzt: 2.089 am 1. Januar 2026. Es gibt einen staatlichen Kindergarten, eine Grundschule und eine Mittelschule; die nächsten Oberschulen sind in Gozzano oder Omegna (13 Min.).\n\nOmegna hat eine Erste-Hilfe-Stelle, keine Notaufnahme; die Notaufnahme der Stufe I ist in Borgomanero. Laut ISPRA leben 2,4 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr und 4,3 % in Gebieten mittlerer Hochwassergefahr."
    },
    {
      titolo: "Hügelsonne, Bergwinter",
      testo: "Am 21. Dezember ergibt unsere Berechnung für Armeno 7 h 38 min direkte Sonne, von 8.44 bis 16.21 Uhr: eine Stunde mehr als an der Piazza Motta. Am 21. Juni sind es 14 h 23 min. Berechnet ist nur das Gelände.\n\nDie Kehrseite ist die Höhe: Auf 543 m, und weiter oben Richtung Mottarone, ist der Winter kälter als am Ufer. Eine lokale Wetterstation mit veröffentlichten Mittelwerten haben wir nicht: Das ist ein Hinweis, keine Messung."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) werden im alten Ortskern (B1) Wohnungen mit 990–1.450 €/m² bewertet, einfache Wohnungen mit 550–810 €/m². In der Hangwohnzone D1 liegen Wohnungen bei 950–1.400 €/m² und Villen bei 1.150–1.650 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen um 4,3–4,4 % in der Mitte der Spanne, Villen um 3,7 %.\n\nVillen sind gleich bewertet wie in Ameno. Das sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 77 Min. (90 km) vom Mailänder Dom, 57 Min. (50 km) von Malpensa T1, 85 Min. von Lugano. Die nächsten Bahnhöfe sind Pettenasco (2,5 km Luftlinie) und Orta-Miasino (3,3 km) an der Strecke Novara–Domodossola; nach Mailand steigt man in Novara um.\n\nMiasino ist 4 Min. entfernt, Orta und Pettenasco 8, Omegna 13. Schiffe fahren ab Pettenasco und Orta, von März bis Oktober."
    },
  ],
  perChi: {
    si: [
      "Sie wollen Schulen vom Kindergarten bis zur Mittelschule im Ort.",
      "Sie suchen Platz und Grund unter dem Mottarone, 8 Min. vom See.",
      "Sie wollen eine Villa zu 1.150–1.650 €/m² mit 7 h 38 min Dezembersonne.",
    ],
    no: [
      "Sie wollen Seeblick vom Haus: Das Ufer ist 2,5 km entfernt, der Ort schaut auf den Berg.",
      "Sie wollen milde Winter wie am Ufer.",
      "Sie rechnen mit der Mottarone-Seilbahn: Sie ist seit 2021 geschlossen.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Armeno?", r: "Die OMI bewertet Wohnungen je nach Zone mit 950–1.450 €/m² und Villen mit 1.150–1.650 €/m² (2. Halbjahr 2025). Einfache Wohnungen im alten Kern liegen bei 550–810 €/m². Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Welche Schulen gibt es in Armeno?", r: "Einen staatlichen Kindergarten, eine Grundschule und eine Mittelschule. Zur Oberschule fährt man nach Omegna (13 Min.) oder Gozzano. Private Schulen sind in den Daten des Ministeriums nicht enthalten." },
    { d: "Kommt man von Armeno auf den Mottarone?", r: "Ja: Die SP41 beginnt in Armeno und ist die mautfreie Hauptstraße zum Gipfel. Die Seilbahn von Stresa ist seit dem Unglück vom 23. Mai 2021 geschlossen und hat im Oktober 2026 kein Datum für die Wiedereröffnung." },
    { d: "Hat Armeno Seeblick?", r: "Das Ortszentrum liegt 2,5 km Luftlinie vom Ufer und 253 m über dem See, am Hang des Mottarone. Von manchen Stellen sieht man den See, von vielen nicht. Das prüft man Haus für Haus." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Armeno: življenje ob vznožju Mottaroneja nad jezerom Orta",
  descrizione: "Armeno, 2.085 prebivalcev na 543 m, vstop na cesto proti Mottaroneju: šole do nižje srednje, vrednosti OMI, 7 h 38 min decembrskega sonca, 77 min od Milana.",
  frase: "Armeno je največja od gričevnatih vasi in vstopna točka ceste na Mottarone: 2.085 prebivalcev, 543 m nadmorske višine, 2,5 km od jezera, 77 min od Milana.",
  vivere: [
    {
      titolo: "Vas pod Mottaronejem",
      testo: "Ozemlje Armena obsega 31,5 km² in se po pobočjih Mottaroneja vzpne skoraj do 1.400 m. Tu se začne SP41, glavna cesta brez cestnine do vrha. Žičnica iz Strese na drugi strani stoji od 23. maja 2021, ko je padec kabine zahteval 14 življenj; oktobra 2026 datuma ponovnega odprtja ni.\n\nPoleg tradicionalne obdelave lesa Wikipedija omenja podjetja za gospodinjske izdelke, kot v vsem okrožju Cusio. Središče vasi je na 543 m, 253 m nad jezerom in 2,5 km zračne črte od obale: gričevnati kraj, ki je od vode najbolj oddaljen."
    },
    {
      titolo: "Vas z lastnimi šolami",
      testo: "Z 2.085 prebivalci (ISTAT, 1. januar 2025) je Armeno najštevilčnejša občina na gričih in edina v atlasu, za katero ISTAT ocenjuje rast: 2.089 na 1. januar 2026. Ima državni vrtec, osnovno šolo in nižjo srednjo šolo; najbližje višje srednje šole so v Gozzanu ali Omegni (13 min).\n\nOmegna ima točko prve pomoči, ne urgence; urgenca I. stopnje je v Borgomaneru. Po podatkih ISPRA 2,4 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov, 4,3 % pa na območjih srednje poplavne nevarnosti."
    },
    {
      titolo: "Sonce na griču, gorske zime",
      testo: "21. decembra naš izračun Armenu da 7 h 38 min neposrednega sonca, od 8.44 do 16.21: uro več kot na trgu Piazza Motta. 21. junija je sonca 14 h 23 min. Izračun upošteva le teren.\n\nDruga plat je višina: na 543 m, in više proti Mottaroneju, je zima hladnejša kot ob obali. Lokalne vremenske postaje z objavljenimi povprečji nimamo: to je nakazilo, ne meritev."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) so v starem jedru (B1) običajna stanovanja ovrednotena na 990–1.450 €/m², skromnejša stanovanja na 550–810 €/m². V gričevnati stanovanjski coni D1 so stanovanja po 950–1.400 €/m², vile po 1.150–1.650 €/m². Glede na 2. polletje 2024 so se stanovanja v sredini razpona podražila za 4,3–4,4 %, vile za 3,7 %.\n\nVile so ovrednotene enako kot v Amenu. To so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 77 min (90 km) od milanske stolnice, 57 min (50 km) od letališča Malpensa T1, 85 min od Lugana. Najbližji postaji sta Pettenasco (2,5 km zračne črte) in Orta-Miasino (3,3 km) na progi Novara–Domodossola; za Milano prestopite v Novari.\n\nMiasino je 4 min stran, Orta in Pettenasco 8, Omegna 13. Ladje odplujejo iz Pettenasca in Orte, od marca do oktobra."
    },
  ],
  perChi: {
    si: [
      "Želite šole od vrtca do nižje srednje v kraju.",
      "Iščete prostor in zemljišče pod Mottaronejem, 8 min od jezera.",
      "Želite vilo po 1.150–1.650 €/m² s 7 h 38 min decembrskega sonca.",
    ],
    no: [
      "Želite pogled na jezero iz hiše: obala je 2,5 km stran, vas gleda proti gori.",
      "Želite mile obalne zime.",
      "Računate na žičnico na Mottarone: zaprta je od leta 2021.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Armenu?", r: "OMI vrednoti običajna stanovanja glede na cono na 950–1.450 €/m², vile na 1.150–1.650 €/m² (2. polletje 2025). Skromnejša stanovanja v starem jedru so po 550–810 €/m². To so ocenjeni razponi, ne podpisane cene." },
    { d: "Katere šole so v Armenu?", r: "Državni vrtec, osnovna šola in nižja srednja šola. Za višjo srednjo šolo se vozi v Omegno (13 min) ali Gozzano. Zasebne šole niso v podatkih ministrstva." },
    { d: "Ali se iz Armena pride na Mottarone?", r: "Da: cesta SP41 se začne v Armenu in je glavna pot na vrh, brez cestnine. Žičnica iz Strese je zaprta od nesreče 23. maja 2021 in oktobra 2026 nima datuma ponovnega odprtja." },
    { d: "Ali ima Armeno pogled na jezero?", r: "Središče vasi je 2,5 km zračne črte od obale in 253 m nad jezerom, na pobočju Mottaroneja. Z nekaterih mest se jezero vidi, z mnogih ne. Preverite za vsako hišo posebej." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
