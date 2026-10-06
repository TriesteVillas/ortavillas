import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Pettenasco", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Pettenasco", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3116", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Pettenasco (chiesa dei Santi Audenzio e Caterina, Museo della tornitura del legno, Ecomuseo del Cusio)", url: "https://www.illagomaggiore.com/destination/pettenasco/", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Pettenasco (mulini e tornerie idrauliche dalla metà dell'Ottocento)", url: "https://it.wikipedia.org/wiki/Pettenasco", data: "2026-10-06" },
  { titolo: "EEA – Qualità delle acque di balneazione, stagione 2024", url: "https://discodata.eea.europa.eu/", data: "2026-10-06" },
  { titolo: "Trenitalia, motore orari lefrecce.it – campione del 7 e 10 ottobre 2026", url: "https://www.lefrecce.it/", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – orari 2025 e 2026", url: "https://www.navigazionelagodorta.it/", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Pettenasco: vivere sulla sponda est del lago d'Orta, prezzi",
  descrizione: "Pettenasco, 1.308 abitanti a 17 m sopra il lago d'Orta, con stazione e imbarcadero: quotazioni OMI 2025, rischi ISPRA, sole d'inverno, 75 min da Milano.",
  frase: "Pettenasco è il paese a metà della sponda est con treno, battello e spiaggia: 1.308 abitanti, 17 m sopra il lago, 75 min da Milano e 5 min da Orta.",
  vivere: [
    {
      titolo: "Un paese di tornitori",
      testo: "Dalla metà dell'Ottocento i mulini di Pettenasco, mossi da un canale, diventarono tornerie idrauliche per oggetti in legno. Una di queste ospita oggi il Museo dell'arte della tornitura del legno. La chiesa dei Santi Audenzio e Caterina fu ricostruita nel 1778 e conserva un campanile romanico. In paese ha sede anche l'Ecomuseo del Cusio, nato nel 1997 da un'iniziativa della Regione Piemonte.\n\nIl paese sta a 307 m, 17 m sopra il lago; il punto centrale è a circa 380 m dalla riva. Ha una piccola spiaggia e un pontile. I tre punti di balneazione attribuiti al comune (Punta di Crabbia, Camping Allegro, Verde Lago) risultano «eccellenti» nella stagione 2024 secondo i dati EEA."
    },
    {
      titolo: "Servizi di paese, scuole fino alla primaria",
      testo: "Pettenasco ha 1.308 residenti (ISTAT, 1° gennaio 2025; stima 2026: 1.296). Le scuole statali in comune sono la scuola dell'infanzia e la primaria; per la secondaria si va a Orta (5 min) o a Omegna (13 min). Per l'ospedale il riferimento vicino è Omegna, che ha un Punto di Primo Intervento e non un pronto soccorso; il DEA di I livello è a Borgomanero.\n\nIl sole d'inverno è il più corto della sponda est: il 21 dicembre il rilievo lascia 6 h 19 min di sole diretto, dalle 09:33 alle 15:51. Il 21 giugno sono 13 h 38 min. È un calcolo nostro sul terreno, senza edifici né alberi."
    },
    {
      titolo: "Frane e allagamenti: numeri da leggere",
      testo: "Per ISPRA il 18,9% dei residenti del comune vive in aree a pericolosità da frana elevata o molto elevata, che coprono il 3,6% della superficie. Il 19,8% dei residenti sta in aree a pericolosità idraulica media (scenario con tempo di ritorno di 100–200 anni), sul 3,6% del territorio: sul lago significa soprattutto la fascia di riva.\n\nSono le percentuali più alte della sponda est. Dicono dove guardare, non com'è una casa: prima di comprare si controlla il singolo lotto sulle carte del piano regolatore e del PAI."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) sul lungolago, zona B2, le abitazioni civili sono quotate 1.250–1.800 €/m² e ville e villini 1.500–2.250 €/m². Nel centro (B1) le civili stanno a 1.200–1.750 €/m², nella zona collinare D1 a 1.100–1.600 €/m², con ville a 1.300–1.850 €/m². Sul 2° semestre 2024 le civili a lago sono salite del 5,2% al centro dell'intervallo.\n\nSul lungolago Pettenasco è quotata circa il 40% in meno di Orta. Sono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 75 min (89 km) da Milano Duomo, 54 min da Malpensa T1, 82 min da Lugano. La stazione di Pettenasco, sulla linea Novara–Domodossola, è a 400 m in linea d'aria; i treni sono regionali e per Milano si cambia a Novara. Dalla vicina Orta-Miasino, in un mercoledì campione, partono 8 treni diretti per Novara.\n\nL'imbarcadero è a circa 400 m. Pettenasco è tra gli approdi della Navigazione Lago d'Orta, che fa servizio di linea da marzo a ottobre; da novembre a febbraio non risulta servizio."
    },
  ],
  perChi: {
    si: [
      "Volete stazione, imbarcadero e spiaggia a pochi passi, senza la folla di Orta.",
      "Cercate la riva est a quotazioni più basse di Orta: 1.250–1.800 €/m² sul lungolago.",
      "Vi interessa un paese con una storia artigiana e un museo che la racconta.",
    ],
    no: [
      "Volete sole d'inverno: qui il 21 dicembre è di 6 h 19 min.",
      "Vi preoccupano i rischi: quasi un residente su cinque sta in area di frana P3–P4.",
      "Vi servono le scuole medie in paese: ci sono solo infanzia e primaria.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Pettenasco?", r: "L'OMI quota sul lungolago le abitazioni civili 1.250–1.800 €/m² e le ville 1.500–2.250 €/m² (2° semestre 2025). In collina, zona D1, le civili sono a 1.100–1.600 €/m². Sono quotazioni stimate, non prezzi di vendita." },
    { d: "Pettenasco è a rischio frane?", r: "Secondo ISPRA il 18,9% dei residenti vive in aree a pericolosità da frana elevata o molto elevata, sul 3,6% della superficie. È un dato sull'intero comune, non sulla singola casa. Il lotto si controlla sulle carte del PAI e del piano regolatore." },
    { d: "Si arriva a Pettenasco in treno?", r: "Sì, la stazione è sulla linea Novara–Domodossola, a 400 m dal centro. I treni sono regionali; per Milano si cambia a Novara, con viaggi di 1 h 33 min – 1 h 54 min nel campione da Orta-Miasino. Prima di contare su un orario, verificatelo su Trenitalia." },
    { d: "Si può fare il bagno a Pettenasco?", r: "I tre punti di balneazione attribuiti al comune risultano «eccellenti» nella stagione 2024 secondo i dati ufficiali trasmessi all'UE. L'attribuzione al comune è dedotta dal codice ISTAT del punto. Il paese ha una piccola spiaggia." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Pettenasco: living on Lake Orta's east shore, prices",
  descrizione: "Pettenasco, 1,308 residents 17 m above Lake Orta, with a station and boat landing: OMI values 2025, ISPRA hazards, winter sun, 75 min from Milan.",
  frase: "Pettenasco is the village halfway up the east shore with train, boat and beach: 1,308 residents, 17 m above the lake, 75 min from Milan and 5 min from Orta.",
  vivere: [
    {
      titolo: "A village of wood turners",
      testo: "From the mid-19th century Pettenasco's mills, driven by a channel, became water-powered turning workshops for wooden objects. One of them now houses the Museum of the Art of Wood Turning. The church of Saints Audenzio and Caterina was rebuilt in 1778 and keeps a Romanesque bell tower. The village is also home to the Cusio Ecomuseum, started in 1997 on an initiative of the Piedmont Region.\n\nThe village is at 307 m, 17 m above the lake; its centre is about 380 m from the shore. It has a small beach and a jetty. The three bathing points assigned to the municipality (Punta di Crabbia, Camping Allegro, Verde Lago) were rated \"excellent\" in the 2024 season according to EEA data."
    },
    {
      titolo: "Village services, schools up to primary",
      testo: "Pettenasco has 1,308 residents (ISTAT, 1 January 2025; 2026 estimate: 1,296). The state schools in the municipality are a nursery and a primary school; for secondary school pupils go to Orta (5 min) or Omegna (13 min). The nearby hospital reference is Omegna, which has a first-aid point and not an emergency department; the level-I emergency department is in Borgomanero.\n\nWinter sun is the shortest on the east shore: on 21 December the terrain leaves 6 h 19 min of direct sun, from 9:33 am to 3:51 pm. On 21 June it is 13 h 38 min. This is our own terrain calculation, without buildings or trees."
    },
    {
      titolo: "Landslides and floods: figures to read",
      testo: "According to ISPRA, 18.9% of the municipality's residents live in areas of high or very high landslide hazard, which cover 3.6% of the area. 19.8% of residents live in areas of medium flood hazard (a 100–200-year return period), on 3.6% of the territory: on the lake this mostly means the shoreline.\n\nThese are the highest percentages on the east shore. They tell you where to look, not what a house is like: before buying, check the individual plot on the zoning and hydrogeological (PAI) maps."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), on the lakefront, zone B2, standard homes are valued at €1,250–1,800/m² and villas at €1,500–2,250/m². In the centre (B1) standard homes are at €1,200–1,750/m², on the hillside zone D1 at €1,100–1,600/m², with villas at €1,300–1,850/m². Against the 2nd half of 2024, lakefront standard homes rose by 5.2% at the midpoint.\n\nOn the lakefront Pettenasco is valued about 40% lower than Orta. These are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 75 min (89 km) from Milan's Duomo, 54 min from Malpensa T1, 82 min from Lugano. Pettenasco station, on the Novara–Domodossola line, is 400 m away as the crow flies; trains are regional and for Milan you change at Novara. From nearby Orta-Miasino, on a sample Wednesday, 8 direct trains leave for Novara.\n\nThe boat landing is about 400 m away. Pettenasco is one of the stops of Navigazione Lago d'Orta, which runs a scheduled service from March to October; from November to February no service is listed."
    },
  ],
  perChi: {
    si: [
      "You want a station, boat landing and beach a short walk away, without Orta's crowds.",
      "You want the east shore at lower values than Orta: €1,250–1,800/m² on the lakefront.",
      "You like a village with a craft history and a museum that tells it.",
    ],
    no: [
      "You want winter sun: here 21 December gives 6 h 19 min.",
      "Hazards worry you: almost one resident in five lives in a P3–P4 landslide area.",
      "You need a lower secondary school in the village: there are only nursery and primary.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Pettenasco?", r: "OMI values lakefront standard homes at €1,250–1,800/m² and villas at €1,500–2,250/m² (2nd half of 2025). On the hillside, zone D1, standard homes are at €1,100–1,600/m². These are estimated valuations, not sale prices." },
    { d: "Is Pettenasco at risk of landslides?", r: "According to ISPRA, 18.9% of residents live in areas of high or very high landslide hazard, on 3.6% of the area. The figure covers the whole municipality, not a single house. Check the plot on the PAI and zoning maps." },
    { d: "Can I reach Pettenasco by train?", r: "Yes, the station is on the Novara–Domodossola line, 400 m from the centre. Trains are regional; for Milan you change at Novara, with journeys of 1 h 33 min – 1 h 54 min in the sample from Orta-Miasino. Check the timetable with Trenitalia before relying on it." },
    { d: "Can you swim in Pettenasco?", r: "The three bathing points assigned to the municipality were rated \"excellent\" in the 2024 season according to official data reported to the EU. The assignment to the municipality is inferred from each point's ISTAT code. The village has a small beach." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Pettenasco: Leben am Ostufer des Ortasees, Preise",
  descrizione: "Pettenasco, 1.308 Einwohner, 17 m über dem Ortasee, mit Bahnhof und Anlegestelle: OMI-Werte 2025, ISPRA-Risiken, Wintersonne, 75 Min. von Mailand.",
  frase: "Pettenasco ist der Ort in der Mitte des Ostufers mit Zug, Schiff und Strand: 1.308 Einwohner, 17 m über dem See, 75 Min. von Mailand und 5 Min. von Orta.",
  vivere: [
    {
      titolo: "Ein Dorf der Drechsler",
      testo: "Ab Mitte des 19. Jahrhunderts wurden die Mühlen von Pettenasco, von einem Kanal angetrieben, zu wasserbetriebenen Drechslereien für Holzgegenstände. In einer davon ist heute das Museum der Drechselkunst untergebracht. Die Kirche der Heiligen Audenzio und Caterina wurde 1778 neu gebaut und bewahrt einen romanischen Glockenturm. Im Ort sitzt auch das Ecomuseo del Cusio, 1997 auf Initiative der Region Piemont gegründet.\n\nDer Ort liegt auf 307 m, 17 m über dem See; das Zentrum ist etwa 380 m vom Ufer entfernt. Es gibt einen kleinen Strand und einen Steg. Die drei der Gemeinde zugeordneten Badestellen (Punta di Crabbia, Camping Allegro, Verde Lago) wurden in der Saison 2024 laut EEA mit „ausgezeichnet“ bewertet."
    },
    {
      titolo: "Dorfversorgung, Schulen bis zur Grundschule",
      testo: "Pettenasco hat 1.308 Einwohner (ISTAT, 1. Januar 2025; Schätzung 2026: 1.296). Staatliche Schulen in der Gemeinde sind Kindergarten und Grundschule; zur Mittelschule fährt man nach Orta (5 Min.) oder Omegna (13 Min.). Das nahe Krankenhaus ist Omegna, mit einer Erste-Hilfe-Stelle und keiner Notaufnahme; die Notaufnahme der Stufe I ist in Borgomanero.\n\nDie Wintersonne ist die kürzeste am Ostufer: Am 21. Dezember lässt das Relief 6 h 19 min direkte Sonne, von 9.33 bis 15.51 Uhr. Am 21. Juni sind es 13 h 38 min. Es ist unsere eigene Geländeberechnung, ohne Gebäude und Bäume."
    },
    {
      titolo: "Rutschungen und Hochwasser: Zahlen zum Lesen",
      testo: "Laut ISPRA leben 18,9 % der Einwohner der Gemeinde in Gebieten mit hoher oder sehr hoher Rutschungsgefahr, die 3,6 % der Fläche bedecken. 19,8 % der Einwohner leben in Gebieten mittlerer Hochwassergefahr (Wiederkehrzeit 100–200 Jahre), auf 3,6 % des Gebiets: Am See ist das vor allem der Uferstreifen.\n\nDas sind die höchsten Werte am Ostufer. Sie sagen, wo man hinschauen muss, nicht wie ein Haus ist: Vor dem Kauf prüft man das einzelne Grundstück auf den Karten des Bebauungsplans und des PAI."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) werden am Seeufer, Zone B2, Wohnungen mit 1.250–1.800 €/m² und Villen mit 1.500–2.250 €/m² bewertet. Im Zentrum (B1) liegen Wohnungen bei 1.200–1.750 €/m², in der Hangzone D1 bei 1.100–1.600 €/m², Villen dort bei 1.300–1.850 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen am See um 5,2 % in der Mitte der Spanne.\n\nAm Ufer liegt Pettenasco etwa 40 % unter Orta. Das sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 75 Min. (89 km) vom Mailänder Dom, 54 Min. von Malpensa T1, 82 Min. von Lugano. Der Bahnhof Pettenasco an der Strecke Novara–Domodossola liegt 400 m Luftlinie entfernt; es fahren Regionalzüge, nach Mailand steigt man in Novara um. Vom nahen Orta-Miasino fahren an einem Stichproben-Mittwoch 8 direkte Züge nach Novara.\n\nDie Anlegestelle ist etwa 400 m entfernt. Pettenasco ist eine Station der Navigazione Lago d'Orta, die von März bis Oktober im Liniendienst fährt; von November bis Februar ist kein Dienst ausgewiesen."
    },
  ],
  perChi: {
    si: [
      "Sie wollen Bahnhof, Anlegestelle und Strand in Gehweite, ohne den Andrang von Orta.",
      "Sie suchen das Ostufer zu niedrigeren Werten als Orta: 1.250–1.800 €/m² am Ufer.",
      "Sie mögen einen Ort mit Handwerksgeschichte und einem Museum dazu.",
    ],
    no: [
      "Sie wollen Wintersonne: Hier sind es am 21. Dezember 6 h 19 min.",
      "Risiken beunruhigen Sie: Fast jeder fünfte Einwohner lebt in einem Rutschgebiet P3–P4.",
      "Sie brauchen eine Mittelschule im Ort: Es gibt nur Kindergarten und Grundschule.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Pettenasco?", r: "Die OMI bewertet Wohnungen am Ufer mit 1.250–1.800 €/m² und Villen mit 1.500–2.250 €/m² (2. Halbjahr 2025). Am Hang, Zone D1, liegen Wohnungen bei 1.100–1.600 €/m². Das sind geschätzte Richtwerte, keine Kaufpreise." },
    { d: "Ist Pettenasco rutschungsgefährdet?", r: "Laut ISPRA leben 18,9 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr, auf 3,6 % der Fläche. Die Zahl gilt für die ganze Gemeinde, nicht für ein Haus. Das Grundstück prüft man auf den Karten des PAI und des Bebauungsplans." },
    { d: "Kommt man mit dem Zug nach Pettenasco?", r: "Ja, der Bahnhof liegt an der Strecke Novara–Domodossola, 400 m vom Zentrum. Es fahren Regionalzüge; nach Mailand steigt man in Novara um, in der Stichprobe ab Orta-Miasino 1 h 33 min – 1 h 54 min. Prüfen Sie den Fahrplan bei Trenitalia." },
    { d: "Kann man in Pettenasco baden?", r: "Die drei der Gemeinde zugeordneten Badestellen wurden in der Saison 2024 laut den an die EU gemeldeten Daten mit „ausgezeichnet“ bewertet. Die Zuordnung zur Gemeinde ist aus dem ISTAT-Code abgeleitet. Der Ort hat einen kleinen Strand." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Pettenasco: življenje na vzhodni obali jezera Orta, cene",
  descrizione: "Pettenasco, 1.308 prebivalcev 17 m nad jezerom Orta, s postajo in pristanom: vrednosti OMI 2025, tveganja ISPRA, zimsko sonce, 75 min od Milana.",
  frase: "Pettenasco je kraj sredi vzhodne obale z vlakom, ladjo in plažo: 1.308 prebivalcev, 17 m nad jezerom, 75 min od Milana in 5 min od Orte.",
  vivere: [
    {
      titolo: "Kraj strugarjev",
      testo: "Od sredine 19. stoletja so se mlini v Pettenascu, ki jih je poganjal kanal, spremenili v vodne strugarske delavnice za lesene predmete. V eni od njih je danes Muzej umetnosti struženja lesa. Cerkev svetih Avdencija in Katarine je bila prezidana leta 1778 in ima romanski zvonik. V kraju je tudi Ekomuzej Cusio, ustanovljen leta 1997 na pobudo dežele Piemont.\n\nKraj leži na 307 m, 17 m nad jezerom; središče je približno 380 m od obale. Ima majhno plažo in pomol. Tri kopalna mesta, pripisana občini (Punta di Crabbia, Camping Allegro, Verde Lago), so bila v sezoni 2024 po podatkih EEA ocenjena kot »odlična«."
    },
    {
      titolo: "Vaške storitve, šole do osnovne",
      testo: "Pettenasco ima 1.308 prebivalcev (ISTAT, 1. januar 2025; ocena 2026: 1.296). Državni šoli v občini sta vrtec in osnovna šola; za nižjo srednjo šolo se vozi v Orto (5 min) ali Omegno (13 min). Bližnja bolnišnica je v Omegni, s točko prve pomoči in brez urgence; urgenca I. stopnje je v Borgomaneru.\n\nZimsko sonce je najkrajše na vzhodni obali: 21. decembra relief pusti 6 h 19 min neposrednega sonca, od 9.33 do 15.51. 21. junija je sonca 13 h 38 min. To je naš izračun na terenu, brez stavb in dreves."
    },
    {
      titolo: "Plazovi in poplave: številke za branje",
      testo: "Po podatkih ISPRA 18,9 % prebivalcev občine živi na območjih z visoko ali zelo visoko nevarnostjo zemeljskih plazov, ki pokrivajo 3,6 % površine. 19,8 % prebivalcev živi na območjih srednje poplavne nevarnosti (povratna doba 100–200 let), na 3,6 % ozemlja: ob jezeru je to predvsem obalni pas.\n\nTo so najvišji deleži na vzhodni obali. Povedo, kam pogledati, ne kakšna je hiša: pred nakupom posamezno parcelo preverite na kartah prostorskega načrta in PAI."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) so ob obali, v coni B2, običajna stanovanja ovrednotena na 1.250–1.800 €/m², vile na 1.500–2.250 €/m². V središču (B1) so stanovanja po 1.200–1.750 €/m², v gričevnati coni D1 po 1.100–1.600 €/m², vile tam po 1.300–1.850 €/m². Glede na 2. polletje 2024 so se stanovanja ob jezeru v sredini razpona podražila za 5,2 %.\n\nOb obali je Pettenasco ovrednoten približno 40 % niže od Orte. To so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 75 min (89 km) od milanske stolnice, 54 min od letališča Malpensa T1, 82 min od Lugana. Postaja Pettenasco na progi Novara–Domodossola je 400 m zračne črte stran; vozijo regionalni vlaki, za Milano prestopite v Novari. Z bližnje postaje Orta-Miasino na vzorčno sredo odpelje 8 neposrednih vlakov v Novaro.\n\nPristan je približno 400 m stran. Pettenasco je postajališče Navigazione Lago d'Orta, ki redno vozi od marca do oktobra; od novembra do februarja vožnje niso navedene."
    },
  ],
  perChi: {
    si: [
      "Želite postajo, pristan in plažo na dosegu peš, brez gneče v Orti.",
      "Iščete vzhodno obalo po nižjih vrednostih kot Orta: 1.250–1.800 €/m² ob obali.",
      "Všeč vam je kraj z obrtno zgodovino in muzejem, ki jo pripoveduje.",
    ],
    no: [
      "Želite zimsko sonce: tu ga je 21. decembra 6 h 19 min.",
      "Skrbijo vas tveganja: skoraj vsak peti prebivalec živi na plazovitem območju P3–P4.",
      "Potrebujete nižjo srednjo šolo v kraju: sta le vrtec in osnovna šola.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Pettenascu?", r: "OMI vrednoti stanovanja ob obali na 1.250–1.800 €/m², vile na 1.500–2.250 €/m² (2. polletje 2025). Na pobočju, v coni D1, so stanovanja po 1.100–1.600 €/m². To so ocenjene vrednosti, ne kupnine." },
    { d: "Ali Pettenascu grozijo plazovi?", r: "Po podatkih ISPRA 18,9 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov, na 3,6 % površine. Podatek velja za vso občino, ne za posamezno hišo. Parcelo preverite na kartah PAI in prostorskega načrta." },
    { d: "Ali se v Pettenasco pride z vlakom?", r: "Da, postaja je na progi Novara–Domodossola, 400 m od središča. Vozijo regionalni vlaki; za Milano prestopite v Novari, v vzorcu z Orta-Miasino traja vožnja 1 h 33 min – 1 h 54 min. Vozni red preverite pri Trenitalii." },
    { d: "Ali se v Pettenascu lahko kopate?", r: "Tri kopalna mesta, pripisana občini, so bila v sezoni 2024 po uradnih podatkih, sporočenih EU, ocenjena kot »odlična«. Pripis občini je izpeljan iz kode ISTAT posameznega mesta. Kraj ima majhno plažo." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
