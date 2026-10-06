import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Nonio", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Nonio", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/103048", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Nonio (cave di serpentino nel territorio)", url: "https://it.wikipedia.org/wiki/Nonio", data: "2026-10-06" },
  { titolo: "OpenStreetMap (Overpass) – imbarcaderi del lago, estratto del 6/10/2026", url: "https://www.openstreetmap.org/relation/2024365", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – orari 2025 e 2026", url: "https://www.navigazionelagodorta.it/", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna; DEA di I livello Verbania e Domodossola (BUR Piemonte 20/7/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/30/attach/co_azienda%20sanitaria%20locale%20vco_2026-07-20_101592.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Nonio: vivere sopra la riva ovest del lago d'Orta, prezzi",
  descrizione: "Nonio, 830 abitanti a 465 m sopra la sponda ovest del lago d'Orta, 7 min da Omegna: quotazioni OMI 2025, rischi ISPRA, sole d'inverno, 83 min da Milano.",
  frase: "Nonio è il paese che sovrasta la sponda ovest nel tratto nord, a 7 min da Omegna: 830 abitanti, 175 m sopra il lago, 83 min da Milano.",
  vivere: [
    {
      titolo: "Un paese sopra la riva, vicino alla città",
      testo: "Nonio sta a 465 m, 175 m sopra il lago e a circa 650 m in linea d'aria dalla riva, sul versante occidentale nel tratto nord. Ha 830 residenti (ISTAT, 1° gennaio 2025; stima 2026: 820) ed è in provincia del Verbano-Cusio-Ossola. Secondo Wikipedia nel territorio comunale ci sono cave di serpentino.\n\nLa sua forza è la posizione: Omegna, con scuole, stazione e servizi da città, è a 7 min d'auto; San Maurizio d'Opaglio a 11, Pella a 12."
    },
    {
      titolo: "Servizi a Omegna",
      testo: "In comune c'è la scuola dell'infanzia statale; primaria, medie e superiori sono a Omegna. Per la sanità, Omegna ha un Punto di Primo Intervento, non un pronto soccorso; i DEA di I livello dell'ASL VCO sono a Verbania e Domodossola.\n\nL'imbarcadero più vicino in OpenStreetMap è a circa 700 m in linea d'aria; i battelli di linea viaggiano da marzo a ottobre, e da novembre a febbraio non risulta servizio."
    },
    {
      titolo: "Un versante ripido: frane e sole",
      testo: "Per ISPRA il 7,6% della superficie comunale è a pericolosità da frana elevata o molto elevata: è la quota più alta dei comuni dell'atlante, anche se riguarda l'1,1% dei residenti, perché il territorio ripido è in gran parte disabitato. Lo 0,9% dei residenti sta in aree a pericolosità idraulica media.\n\nIl 21 dicembre il nostro calcolo dà 6 h 57 min di sole diretto, dalle 08:28 alle 15:24: 18 minuti più di piazza Motta, con il sole del mattino. A ovest la montagna alle spalle chiude l'orizzonte fino a 27°, e il 21 giugno il sole si ferma a 12 h 27 min. Il calcolo considera solo il rilievo."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) nel centro abitato (B1) le abitazioni civili sono quotate 900–1.350 €/m², ville e villini 1.000–1.450 €/m², le economiche 600–850 €/m². Nella zona rurale montana R1 sono quotate solo le economiche, 450–600 €/m². Sul 2° semestre 2024 le civili sono salite del 2,3% al centro dell'intervallo, le ville sono ferme.\n\nSono tra le quotazioni più basse del lago, vicine a quelle di Madonna del Sasso. Sono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 83 min (94 km) da Milano Duomo, 62 min (54 km) da Malpensa T1, 90 min da Lugano. La stazione più comoda è Omegna, a 4 km in linea d'aria e 7 min d'auto, sulla linea Novara–Domodossola; per Milano si cambia a Novara. Pettenasco è più vicina in linea d'aria (3,6 km) ma sta sull'altra riva."
    },
  ],
  perChi: {
    si: [
      "Volete stare sopra il lago con Omegna e i suoi servizi a 7 min.",
      "Cercate quotazioni basse: civili a 900–1.350 €/m².",
      "Vi basta il sole del mattino: il 21 dicembre arriva alle 08:28.",
    ],
    no: [
      "Vi servono scuole oltre l'infanzia in paese.",
      "Vi preoccupa un versante ripido: il 7,6% del comune è in area di frana P3–P4.",
      "Volete la vita da borgo turistico, con piazza e lungolago.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Nonio?", r: "L'OMI quota nel centro abitato le abitazioni civili 900–1.350 €/m² e le ville 1.000–1.450 €/m² (2° semestre 2025). Nella zona rurale montana le economiche sono a 450–600 €/m². Sono intervalli stimati, non prezzi firmati." },
    { d: "Nonio è a rischio frane?", r: "Per ISPRA il 7,6% della superficie comunale è a pericolosità da frana elevata o molto elevata, ma solo l'1,1% dei residenti vive in quelle aree. Il dato è comunale: il singolo lotto si verifica sulle carte del PAI e del piano regolatore." },
    { d: "Quanto dista Nonio da Omegna?", r: "7 min in auto senza traffico. A Omegna ci sono scuole fino alle superiori, la stazione e il Punto di Primo Intervento. Per un pronto soccorso vero servono i DEA di Verbania, Domodossola o Borgomanero." },
    { d: "Quanto sole c'è a Nonio d'inverno?", r: "Il 21 dicembre 6 h 57 min di sole diretto, dalle 08:28 alle 15:24, secondo il nostro calcolo sul rilievo. Il versante guarda a est: luce del mattino, tramonto anticipato dietro il monte. Edifici e alberi non sono considerati." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Nonio: living above Lake Orta's west shore, prices",
  descrizione: "Nonio, 830 residents at 465 m above Lake Orta's west shore, 7 min from Omegna: OMI values 2025, ISPRA hazards, winter sun, 83 min from Milan.",
  frase: "Nonio is the village overlooking the northern stretch of the west shore, 7 min from Omegna: 830 residents, 175 m above the lake, 83 min from Milan.",
  vivere: [
    {
      titolo: "A village above the shore, close to town",
      testo: "Nonio lies at 465 m, 175 m above the lake and about 650 m from the shore as the crow flies, on the western slope of the northern stretch. It has 830 residents (ISTAT, 1 January 2025; 2026 estimate: 820) and is in the province of Verbano-Cusio-Ossola. According to Wikipedia there are serpentine quarries in the municipality.\n\nIts strength is its position: Omegna, with schools, a station and town services, is 7 min by car; San Maurizio d'Opaglio 11, Pella 12."
    },
    {
      titolo: "Services in Omegna",
      testo: "The municipality has a state nursery school; primary, lower and upper secondary are in Omegna. For healthcare, Omegna has a first-aid point, not an emergency department; the ASL VCO level-I emergency departments are in Verbania and Domodossola.\n\nThe nearest boat landing in OpenStreetMap is about 700 m away as the crow flies; scheduled boats run from March to October, and from November to February no service is listed."
    },
    {
      titolo: "A steep slope: landslides and sun",
      testo: "According to ISPRA, 7.6% of the municipal area has high or very high landslide hazard: the highest share among the atlas's municipalities, though it concerns 1.1% of residents, because the steep ground is largely uninhabited. 0.9% of residents live in areas of medium flood hazard.\n\nOn 21 December our calculation gives 6 h 57 min of direct sun, from 8:28 am to 3:24 pm: 18 minutes more than Piazza Motta, with morning sun. To the west the mountain behind closes the horizon up to 27°, and on 21 June the sun stops at 12 h 27 min. The calculation covers terrain only."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), in the built-up centre (B1) standard homes are valued at €900–1,350/m², villas at €1,000–1,450/m², economy homes at €600–850/m². In the rural mountain zone R1 only economy homes are valued, at €450–600/m². Against the 2nd half of 2024 standard homes rose by 2.3% at the midpoint; villas are flat.\n\nThese are among the lowest values on the lake, close to Madonna del Sasso. They are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 83 min (94 km) from Milan's Duomo, 62 min (54 km) from Malpensa T1, 90 min from Lugano. The handiest station is Omegna, 4 km away as the crow flies and 7 min by car, on the Novara–Domodossola line; for Milan you change at Novara. Pettenasco is closer as the crow flies (3.6 km) but on the other shore."
    },
  ],
  perChi: {
    si: [
      "You want to live above the lake with Omegna and its services 7 min away.",
      "You are looking for low values: standard homes at €900–1,350/m².",
      "Morning sun is enough for you: on 21 December it arrives at 8:28 am.",
    ],
    no: [
      "You need schools beyond nursery in the village.",
      "A steep slope worries you: 7.6% of the municipality is in a P3–P4 landslide area.",
      "You want tourist-village life, with a piazza and a lakefront.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Nonio?", r: "In the built-up centre OMI values standard homes at €900–1,350/m² and villas at €1,000–1,450/m² (2nd half of 2025). In the rural mountain zone economy homes are at €450–600/m². These are estimated ranges, not signed prices." },
    { d: "Is Nonio at risk of landslides?", r: "According to ISPRA, 7.6% of the municipal area has high or very high landslide hazard, but only 1.1% of residents live in those areas. The figure is municipal: check the individual plot on the PAI and zoning maps." },
    { d: "How far is Nonio from Omegna?", r: "7 min by car without traffic. Omegna has schools up to upper secondary, the station and the first-aid point. For a full emergency department you need Verbania, Domodossola or Borgomanero." },
    { d: "How much winter sun does Nonio get?", r: "On 21 December, 6 h 57 min of direct sun, from 8:28 am to 3:24 pm, according to our terrain calculation. The slope faces east: morning light, early sunset behind the mountain. Buildings and trees are not considered." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Nonio: Wohnen über dem Westufer des Ortasees, Preise",
  descrizione: "Nonio, 830 Einwohner auf 465 m über dem Westufer des Ortasees, 7 Min. von Omegna: OMI-Werte 2025, ISPRA-Risiken, Wintersonne, 83 Min. von Mailand.",
  frase: "Nonio ist der Ort über dem nördlichen Abschnitt des Westufers, 7 Min. von Omegna: 830 Einwohner, 175 m über dem See, 83 Min. von Mailand.",
  vivere: [
    {
      titolo: "Ein Ort über dem Ufer, nah an der Stadt",
      testo: "Nonio liegt auf 465 m, 175 m über dem See und etwa 650 m Luftlinie vom Ufer, am Westhang im nördlichen Abschnitt. Es hat 830 Einwohner (ISTAT, 1. Januar 2025; Schätzung 2026: 820) und gehört zur Provinz Verbano-Cusio-Ossola. Laut Wikipedia gibt es im Gemeindegebiet Serpentinbrüche.\n\nSeine Stärke ist die Lage: Omegna mit Schulen, Bahnhof und städtischer Versorgung ist 7 Autominuten entfernt, San Maurizio d'Opaglio 11, Pella 12."
    },
    {
      titolo: "Versorgung in Omegna",
      testo: "In der Gemeinde gibt es einen staatlichen Kindergarten; Grund-, Mittel- und Oberschule sind in Omegna. Omegna hat eine Erste-Hilfe-Stelle, keine Notaufnahme; die Notaufnahmen der Stufe I der ASL VCO sind in Verbania und Domodossola.\n\nDie nächste Anlegestelle laut OpenStreetMap liegt etwa 700 m Luftlinie entfernt; Linienschiffe fahren von März bis Oktober, von November bis Februar ist kein Dienst ausgewiesen."
    },
    {
      titolo: "Ein steiler Hang: Rutschungen und Sonne",
      testo: "Laut ISPRA haben 7,6 % der Gemeindefläche eine hohe oder sehr hohe Rutschungsgefahr: der höchste Anteil unter den Gemeinden des Atlas, auch wenn er nur 1,1 % der Einwohner betrifft, weil das steile Gelände großteils unbewohnt ist. 0,9 % der Einwohner leben in Gebieten mittlerer Hochwassergefahr.\n\nAm 21. Dezember ergibt unsere Berechnung 6 h 57 min direkte Sonne, von 8.28 bis 15.24 Uhr: 18 Minuten mehr als an der Piazza Motta, mit Morgensonne. Im Westen schließt der Berg den Horizont bis 27°, und am 21. Juni sind es nur 12 h 27 min. Berechnet ist nur das Gelände."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) werden im Ortskern (B1) Wohnungen mit 900–1.350 €/m² bewertet, Villen mit 1.000–1.450 €/m², einfache Wohnungen mit 600–850 €/m². In der ländlichen Bergzone R1 sind nur einfache Wohnungen bewertet, 450–600 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen um 2,3 % in der Mitte der Spanne, Villen blieben gleich.\n\nDas gehört zu den niedrigsten Werten am See, nahe bei Madonna del Sasso. Es sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 83 Min. (94 km) vom Mailänder Dom, 62 Min. (54 km) von Malpensa T1, 90 Min. von Lugano. Der praktischste Bahnhof ist Omegna, 4 km Luftlinie und 7 Autominuten entfernt, an der Strecke Novara–Domodossola; nach Mailand steigt man in Novara um. Pettenasco ist in Luftlinie näher (3,6 km), liegt aber am anderen Ufer."
    },
  ],
  perChi: {
    si: [
      "Sie wollen über dem See wohnen, mit Omegna und seiner Versorgung in 7 Min.",
      "Sie suchen niedrige Werte: Wohnungen zu 900–1.350 €/m².",
      "Ihnen reicht Morgensonne: Am 21. Dezember kommt sie um 8.28 Uhr.",
    ],
    no: [
      "Sie brauchen Schulen über den Kindergarten hinaus im Ort.",
      "Ein steiler Hang beunruhigt Sie: 7,6 % der Gemeinde liegen in Rutschgebieten P3–P4.",
      "Sie wollen Ferienortleben mit Piazza und Seepromenade.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Nonio?", r: "Im Ortskern bewertet die OMI Wohnungen mit 900–1.350 €/m² und Villen mit 1.000–1.450 €/m² (2. Halbjahr 2025). In der ländlichen Bergzone liegen einfache Wohnungen bei 450–600 €/m². Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Ist Nonio rutschungsgefährdet?", r: "Laut ISPRA haben 7,6 % der Gemeindefläche eine hohe oder sehr hohe Rutschungsgefahr, aber nur 1,1 % der Einwohner leben dort. Die Zahl gilt für die Gemeinde: Das Grundstück prüft man auf den Karten des PAI und des Bebauungsplans." },
    { d: "Wie weit ist Nonio von Omegna entfernt?", r: "7 Min. mit dem Auto ohne Verkehr. In Omegna gibt es Schulen bis zur Oberstufe, den Bahnhof und die Erste-Hilfe-Stelle. Für eine echte Notaufnahme braucht man Verbania, Domodossola oder Borgomanero." },
    { d: "Wie viel Wintersonne hat Nonio?", r: "Am 21. Dezember 6 h 57 min direkte Sonne, von 8.28 bis 15.24 Uhr, nach unserer Geländeberechnung. Der Hang schaut nach Osten: Morgenlicht, früher Sonnenuntergang hinter dem Berg. Gebäude und Bäume sind nicht berücksichtigt." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Nonio: življenje nad zahodno obalo jezera Orta, cene",
  descrizione: "Nonio, 830 prebivalcev na 465 m nad zahodno obalo jezera Orta, 7 min od Omegne: vrednosti OMI 2025, tveganja ISPRA, zimsko sonce, 83 min od Milana.",
  frase: "Nonio je kraj nad severnim delom zahodne obale, 7 min od Omegne: 830 prebivalcev, 175 m nad jezerom, 83 min od Milana.",
  vivere: [
    {
      titolo: "Kraj nad obalo, blizu mesta",
      testo: "Nonio leži na 465 m, 175 m nad jezerom in približno 650 m zračne črte od obale, na zahodnem pobočju v severnem delu. Ima 830 prebivalcev (ISTAT, 1. januar 2025; ocena 2026: 820) in spada v pokrajino Verbano-Cusio-Ossola. Po navedbah Wikipedije so v občini kamnolomi serpentina.\n\nNjegova moč je lega: Omegna s šolami, postajo in mestnimi storitvami je 7 min vožnje stran, San Maurizio d'Opaglio 11, Pella 12."
    },
    {
      titolo: "Storitve v Omegni",
      testo: "V občini je državni vrtec; osnovna, nižja in višja srednja šola so v Omegni. Omegna ima točko prve pomoči, ne urgence; urgenci I. stopnje ASL VCO sta v Verbanii in Domodossoli.\n\nNajbližji pristan v OpenStreetMap je približno 700 m zračne črte stran; redne ladje vozijo od marca do oktobra, od novembra do februarja vožnje niso navedene."
    },
    {
      titolo: "Strmo pobočje: plazovi in sonce",
      testo: "Po podatkih ISPRA ima 7,6 % površine občine visoko ali zelo visoko nevarnost plazov: največji delež med občinami atlasa, čeprav zadeva le 1,1 % prebivalcev, ker je strmi teren večinoma nenaseljen. 0,9 % prebivalcev živi na območjih srednje poplavne nevarnosti.\n\n21. decembra naš izračun da 6 h 57 min neposrednega sonca, od 8.28 do 15.24: 18 minut več kot na trgu Piazza Motta, z jutranjim soncem. Na zahodu gora zapre obzorje do 27°, in 21. junija se sonce ustavi pri 12 h 27 min. Izračun upošteva le teren."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) so v naselju (B1) običajna stanovanja ovrednotena na 900–1.350 €/m², vile na 1.000–1.450 €/m², skromnejša stanovanja na 600–850 €/m². V podeželski gorski coni R1 so ovrednotena le skromnejša stanovanja, 450–600 €/m². Glede na 2. polletje 2024 so se stanovanja v sredini razpona podražila za 2,3 %, vile so ostale enake.\n\nTo je med najnižjimi vrednostmi ob jezeru, blizu Madonna del Sasso. To so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 83 min (94 km) od milanske stolnice, 62 min (54 km) od letališča Malpensa T1, 90 min od Lugana. Najprikladnejša postaja je Omegna, 4 km zračne črte in 7 min vožnje, na progi Novara–Domodossola; za Milano prestopite v Novari. Pettenasco je zračno bližje (3,6 km), vendar na drugi obali."
    },
  ],
  perChi: {
    si: [
      "Želite živeti nad jezerom z Omegno in njenimi storitvami na 7 min.",
      "Iščete nizke vrednosti: stanovanja po 900–1.350 €/m².",
      "Zadostuje vam jutranje sonce: 21. decembra pride ob 8.28.",
    ],
    no: [
      "Potrebujete šole nad vrtcem v kraju.",
      "Skrbi vas strmo pobočje: 7,6 % občine je na plazovitih območjih P3–P4.",
      "Želite življenje turističnega kraja s trgom in obalno promenado.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Noniu?", r: "V naselju OMI vrednoti običajna stanovanja na 900–1.350 €/m², vile na 1.000–1.450 €/m² (2. polletje 2025). V podeželski gorski coni so skromnejša stanovanja po 450–600 €/m². To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali Noniu grozijo plazovi?", r: "Po podatkih ISPRA ima 7,6 % površine občine visoko ali zelo visoko nevarnost plazov, tam pa živi le 1,1 % prebivalcev. Podatek je občinski: posamezno parcelo preverite na kartah PAI in prostorskega načrta." },
    { d: "Kako daleč je Nonio od Omegne?", r: "7 min z avtom brez prometa. V Omegni so šole do višje srednje, postaja in točka prve pomoči. Za pravo urgenco potrebujete Verbanio, Domodossolo ali Borgomanero." },
    { d: "Koliko zimskega sonca ima Nonio?", r: "21. decembra 6 h 57 min neposrednega sonca, od 8.28 do 15.24, po našem izračunu na reliefu. Pobočje gleda na vzhod: jutranja svetloba, zgoden zahod za goro. Stavbe in drevesa niso upoštevani." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
