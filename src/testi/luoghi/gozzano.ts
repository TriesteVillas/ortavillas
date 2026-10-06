import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Gozzano", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Gozzano", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3076", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Bonacina, Lake Orta: the undermining of an ecosystem, J. Limnol. 60(1), 2001 (scarichi della fabbrica di rayon 1927–1986)", url: "https://jlimnol.it/jlimnol/article/download/jlimnol.2001.53/402/803", data: "2026-10-06" },
  { titolo: "Calderoni & Tartari, J. Limnol. 60 (Suppl. 1), 2000 (liming 1989–1990 e recupero)", url: "https://jlimnol.it/jlimnol/article/download/jlimnol.2001.69/404/807", data: "2026-10-06" },
  { titolo: "ARPA Piemonte – Stato di qualità dei laghi, triennio 2020–2022", url: "https://old-static.arpa.piemonte.it/approfondimenti/temi-ambientali/acqua/acque-superficiali-laghi/Relazione%20triennio_2020_2022%20LAGHI.pdf", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Gozzano (Bemberg, frazione Monterosso, chiusa nel 2009; basilica di San Giuliano)", url: "https://it.wikipedia.org/wiki/Gozzano", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Ferrovia Domodossola-Novara (stazione di Gozzano del 2011)", url: "https://it.wikipedia.org/wiki/Ferrovia_Domodossola-Novara", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – itinerario «Nature and Faith» (basilica di San Giuliano)", url: "https://www.illagomaggiore.com/en_US/26446,Poi.html", data: "2026-10-06" },
  { titolo: "EEA – Qualità delle acque di balneazione, stagione 2024", url: "https://discodata.eea.europa.eu/", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – approdi e orari", url: "https://www.navigazionelagodorta.it/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Gozzano: vivere al capo sud del lago d'Orta, prezzi e treni",
  descrizione: "Gozzano, 5.499 abitanti al capo sud del lago d'Orta, il luogo più vicino a Milano (67 min): stazione, liceo, quotazioni OMI 2025, rischi bassi, sole d'inverno.",
  frase: "Gozzano è il paese al capo sud del lago, il più vicino a Milano dei sedici luoghi: 5.499 abitanti, stazione in paese, 67 min da Milano e 46 da Malpensa.",
  vivere: [
    {
      titolo: "Il paese della fabbrica e della basilica",
      testo: "Per decenni l'economia di Gozzano è stata la Bemberg, lo stabilimento di rayon al cuproammonio nella frazione di Monterosso. Dal 1927 al 1986 i suoi scarichi di rame e solfato d'ammonio acidificarono il lago (CNR, 2001); tra il 1989 e il 1990 il lago fu neutralizzato con il calcare, e oggi l'ARPA lo classifica in stato ecologico «buono». Secondo Wikipedia la fabbrica ha chiuso del tutto nel 2009.\n\nSull'altura che domina il paese sta la basilica di San Giuliano, che custodisce nella cripta il corpo del santo; la tradizione la vuole la novantanovesima chiesa fondata dai fratelli Giulio e Giuliano."
    },
    {
      titolo: "Servizi da paese grande",
      testo: "Gozzano ha 5.499 residenti (ISTAT, 1° gennaio 2025; stima 2026: 5.464): è il secondo comune dell'atlante dopo Omegna. Ci sono scuola dell'infanzia, primaria, secondaria di primo grado e una sezione di liceo scientifico statali, raccolte nell'istituto comprensivo Pascoli. Per la sanità il riferimento è il DEA di I livello dell'ospedale di Borgomanero, a sud; il tempo d'auto non l'abbiamo misurato.\n\nIl centro sta a 360 m, 70 m sopra il lago e a 2,1 km in linea d'aria dalla riva: il lago è a nord del paese, non sotto le finestre. Il Lido, attribuito al comune, è classificato «eccellente» nella stagione 2024 (dati EEA)."
    },
    {
      titolo: "Sole e rischi: i numeri sono buoni",
      testo: "Il 21 dicembre il nostro calcolo dà a Gozzano 7 h 48 min di sole diretto, dalle 08:26 alle 16:13: è il terzo valore dell'atlante dopo Ameno e Vacciago, e 69 minuti più di piazza Motta. Il 21 giugno sono 14 h 29 min. Il calcolo considera solo il rilievo.\n\nPer ISPRA lo 0,02% dei residenti vive in aree a pericolosità da frana elevata o molto elevata. Il 3,6% del territorio è a pericolosità idraulica media, con lo 0,9% dei residenti."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) la zona più quotata è la semicentrale C2, «con nord est abitato, nord lago»: abitazioni civili 1.000–1.500 €/m², ville e villini 1.100–1.600 €/m². In centro (B1) le civili stanno a 1.000–1.450 €/m²; ad Auzate e Bugnate (D2) a 790–1.150 €/m², con ville a 940–1.400 €/m². Nelle zone agricole le ville sono quotate 870–1.300 €/m². Sul 2° semestre 2024 le civili del centro sono salite del 4,7% al centro dell'intervallo.\n\nSono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale. Le ville della zona C2 sono quotate circa il 47% in meno di quelle sul lungolago di Orta."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 67 min (79 km) da Milano Duomo e 46 min (39 km) da Malpensa T1, i tempi più brevi dell'atlante; 42 min da Novara, 74 da Lugano. La stazione di Gozzano, sulla linea Novara–Domodossola, è a 400 m in linea d'aria; i treni sono regionali e per Milano si cambia a Novara.\n\nNavigazione Lago d'Orta elenca Gozzano tra i suoi approdi; il servizio di linea è attivo da marzo a ottobre. Bolzano Novarese è a 4 min, San Maurizio d'Opaglio a 7, Orta a 10."
    },
  ],
  perChi: {
    si: [
      "Volete il lago più vicino a Milano: 67 min senza traffico.",
      "Vi servono stazione, scuole fino al liceo e un paese con negozi.",
      "Cercate quotazioni sotto i 1.600 €/m² anche per le ville.",
    ],
    no: [
      "Volete l'acqua davanti casa: il centro è a 2,1 km dalla riva.",
      "Cercate un borgo turistico: Gozzano è un paese di lavoro.",
      "Volete la vista su Orta e l'isola: da qui il lago si apre verso nord.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Gozzano?", r: "L'OMI quota le abitazioni civili 790–1.500 €/m² a seconda della zona e ville e villini 870–1.600 €/m² (2° semestre 2025). La zona più quotata è la semicentrale C2. Sono intervalli stimati, non prezzi firmati." },
    { d: "Il lago a Gozzano è ancora inquinato?", r: "Lo stabilimento Bemberg scaricò rame e solfato d'ammonio dal 1927 al 1986, e il lago divenne acido. Dopo la neutralizzazione del 1989–1990 il pH è tornato ai valori naturali, e per l'ARPA lo stato ecologico è «buono» dal 2009; lo stato chimico 2020–2022 è «non buono» per i PFOS. Il Lido di Gozzano è «eccellente» nel 2024." },
    { d: "Si arriva a Gozzano in treno?", r: "Sì: la stazione è a 400 m dal centro, sulla linea Novara–Domodossola, con soli treni regionali. Per Milano si cambia a Novara. Gli orari vanno verificati su Trenitalia: in un campione da Orta-Miasino i treni diretti per Novara erano 8 al giorno." },
    { d: "Qual è l'ospedale più vicino?", r: "L'ospedale SS. Trinità di Borgomanero, sede di DEA di I livello con 250 letti, a sud di Gozzano. Il tempo d'auto non l'abbiamo misurato. Omegna, a nord, ha solo un Punto di Primo Intervento." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Gozzano: living at the south end of Lake Orta, prices, trains",
  descrizione: "Gozzano, 5,499 residents at the south end of Lake Orta, the place closest to Milan (67 min): station, liceo, OMI values 2025, low hazards, winter sun.",
  frase: "Gozzano is the town at the south end of the lake, the closest of the sixteen places to Milan: 5,499 residents, a station in town, 67 min from Milan and 46 from Malpensa.",
  vivere: [
    {
      titolo: "The town of the factory and the basilica",
      testo: "For decades Gozzano's economy was Bemberg, the cuprammonium rayon plant in the hamlet of Monterosso. From 1927 to 1986 its discharges of copper and ammonium sulphate acidified the lake (CNR, 2001); in 1989–1990 the lake was neutralised with limestone, and today ARPA rates its ecological status \"good\". According to Wikipedia the factory closed for good in 2009.\n\nOn the height above the town stands the basilica of San Giuliano, which keeps the saint's body in its crypt; tradition holds it to be the ninety-ninth church founded by the brothers Giulio and Giuliano."
    },
    {
      titolo: "Services of a large village",
      testo: "Gozzano has 5,499 residents (ISTAT, 1 January 2025; 2026 estimate: 5,464): the second municipality in the atlas after Omegna. There are a state nursery, primary and lower secondary school and a section of a science liceo, grouped in the Pascoli comprehensive institute. For healthcare the reference is the level-I emergency department at Borgomanero hospital, to the south; we have not measured the driving time.\n\nThe centre is at 360 m, 70 m above the lake and 2.1 km from the shore as the crow flies: the lake lies to the north of the town, not under its windows. The Lido, assigned to the municipality, was rated \"excellent\" in the 2024 season (EEA data)."
    },
    {
      titolo: "Sun and hazards: good numbers",
      testo: "On 21 December our calculation gives Gozzano 7 h 48 min of direct sun, from 8:26 am to 4:13 pm: the third-highest figure in the atlas after Ameno and Vacciago, and 69 minutes more than Piazza Motta. On 21 June it is 14 h 29 min. The calculation covers terrain only.\n\nAccording to ISPRA, 0.02% of residents live in areas of high or very high landslide hazard. 3.6% of the territory has medium flood hazard, with 0.9% of residents."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), the highest-valued zone is the semi-central C2, \"north-east built-up area, north lake\": standard homes €1,000–1,500/m², villas €1,100–1,600/m². In the centre (B1) standard homes are at €1,000–1,450/m²; in Auzate and Bugnate (D2) at €790–1,150/m², with villas at €940–1,400/m². In the agricultural zones villas are valued at €870–1,300/m². Against the 2nd half of 2024, central standard homes rose by 4.7% at the midpoint.\n\nThese are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition. Villas in zone C2 are valued about 47% lower than those on Orta's lakefront."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 67 min (79 km) from Milan's Duomo and 46 min (39 km) from Malpensa T1, the shortest times in the atlas; 42 min from Novara, 74 from Lugano. Gozzano station, on the Novara–Domodossola line, is 400 m away as the crow flies; trains are regional and for Milan you change at Novara.\n\nNavigazione Lago d'Orta lists Gozzano among its stops; scheduled service runs from March to October. Bolzano Novarese is 4 min away, San Maurizio d'Opaglio 7, Orta 10."
    },
  ],
  perChi: {
    si: [
      "You want the lake closest to Milan: 67 min without traffic.",
      "You need a station, schools up to liceo and a town with shops.",
      "You want values under €1,600/m², villas included.",
    ],
    no: [
      "You want the water in front of the house: the centre is 2.1 km from the shore.",
      "You are after a tourist village: Gozzano is a working town.",
      "You want a view of Orta and the island: from here the lake opens to the north.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Gozzano?", r: "OMI values standard homes at €790–1,500/m² depending on the zone and villas at €870–1,600/m² (2nd half of 2025). The highest-valued zone is the semi-central C2. These are estimated ranges, not signed prices." },
    { d: "Is the lake at Gozzano still polluted?", r: "The Bemberg plant discharged copper and ammonium sulphate from 1927 to 1986, and the lake became acid. After neutralisation in 1989–1990 the pH returned to natural values, and ARPA has rated the ecological status \"good\" since 2009; chemical status for 2020–2022 is \"not good\" because of PFOS. Gozzano's Lido was rated \"excellent\" in 2024." },
    { d: "Can I reach Gozzano by train?", r: "Yes: the station is 400 m from the centre, on the Novara–Domodossola line, with regional trains only. For Milan you change at Novara. Check timetables with Trenitalia: in a sample from Orta-Miasino there were 8 direct trains a day to Novara." },
    { d: "Which is the nearest hospital?", r: "SS. Trinità hospital in Borgomanero, with a level-I emergency department and 250 beds, south of Gozzano. We have not measured the driving time. Omegna, to the north, has only a first-aid point." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Gozzano: Leben am Südende des Ortasees, Preise und Züge",
  descrizione: "Gozzano, 5.499 Einwohner am Südende des Ortasees, der Ort, der Mailand am nächsten liegt (67 Min.): Bahnhof, Gymnasium, OMI-Werte 2025, geringe Risiken.",
  frase: "Gozzano ist der Ort am Südende des Sees, von den sechzehn Orten der nächste an Mailand: 5.499 Einwohner, Bahnhof im Ort, 67 Min. von Mailand und 46 von Malpensa.",
  vivere: [
    {
      titolo: "Der Ort der Fabrik und der Basilika",
      testo: "Jahrzehntelang lebte Gozzano von der Bemberg, dem Werk für Kupferkunstseide (Cupro) im Ortsteil Monterosso. Von 1927 bis 1986 versauerten seine Einleitungen von Kupfer und Ammoniumsulfat den See (CNR, 2001); 1989–1990 wurde der See mit Kalk neutralisiert, und heute stuft ARPA seinen ökologischen Zustand als „gut“ ein. Laut Wikipedia schloss die Fabrik 2009 endgültig.\n\nAuf der Anhöhe über dem Ort steht die Basilika San Giuliano, die in der Krypta den Leib des Heiligen bewahrt; der Überlieferung nach ist sie die neunundneunzigste Kirche, die die Brüder Giulio und Giuliano gründeten."
    },
    {
      titolo: "Versorgung eines großen Dorfes",
      testo: "Gozzano hat 5.499 Einwohner (ISTAT, 1. Januar 2025; Schätzung 2026: 5.464): die zweitgrößte Gemeinde des Atlas nach Omegna. Es gibt einen staatlichen Kindergarten, eine Grund- und eine Mittelschule und einen Zweig eines naturwissenschaftlichen Gymnasiums, zusammengefasst im Schulverbund Pascoli. Für die Gesundheit ist die Notaufnahme der Stufe I im Krankenhaus Borgomanero im Süden zuständig; die Fahrzeit haben wir nicht gemessen.\n\nDas Zentrum liegt auf 360 m, 70 m über dem See und 2,1 km Luftlinie vom Ufer: Der See liegt nördlich des Ortes, nicht unter den Fenstern. Der der Gemeinde zugeordnete Lido wurde in der Saison 2024 mit „ausgezeichnet“ bewertet (EEA-Daten)."
    },
    {
      titolo: "Sonne und Risiken: gute Zahlen",
      testo: "Am 21. Dezember ergibt unsere Berechnung für Gozzano 7 h 48 min direkte Sonne, von 8.26 bis 16.13 Uhr: der dritthöchste Wert im Atlas nach Ameno und Vacciago und 69 Minuten mehr als an der Piazza Motta. Am 21. Juni sind es 14 h 29 min. Berechnet ist nur das Gelände.\n\nLaut ISPRA leben 0,02 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr. 3,6 % des Gebiets haben mittlere Hochwassergefahr, mit 0,9 % der Einwohner."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) ist die höchstbewertete Zone die halbzentrale C2, „bebauter Nordosten, Nordsee“: Wohnungen 1.000–1.500 €/m², Villen 1.100–1.600 €/m². Im Zentrum (B1) liegen Wohnungen bei 1.000–1.450 €/m²; in Auzate und Bugnate (D2) bei 790–1.150 €/m², Villen dort bei 940–1.400 €/m². In den landwirtschaftlichen Zonen werden Villen mit 870–1.300 €/m² bewertet. Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen im Zentrum um 4,7 % in der Mitte der Spanne.\n\nDas sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand. Villen in Zone C2 liegen etwa 47 % unter denen am Ufer von Orta."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 67 Min. (79 km) vom Mailänder Dom und 46 Min. (39 km) von Malpensa T1, die kürzesten Zeiten im Atlas; 42 Min. von Novara, 74 von Lugano. Der Bahnhof Gozzano an der Strecke Novara–Domodossola liegt 400 m Luftlinie entfernt; es fahren Regionalzüge, nach Mailand steigt man in Novara um.\n\nNavigazione Lago d'Orta führt Gozzano unter ihren Anlegestellen; der Liniendienst fährt von März bis Oktober. Bolzano Novarese ist 4 Min. entfernt, San Maurizio d'Opaglio 7, Orta 10."
    },
  ],
  perChi: {
    si: [
      "Sie wollen den See, der Mailand am nächsten ist: 67 Min. ohne Verkehr.",
      "Sie brauchen Bahnhof, Schulen bis zum Gymnasium und einen Ort mit Geschäften.",
      "Sie suchen Werte unter 1.600 €/m², auch für Villen.",
    ],
    no: [
      "Sie wollen das Wasser vor dem Haus: Das Zentrum liegt 2,1 km vom Ufer.",
      "Sie suchen einen Ferienort: Gozzano ist ein Arbeitsort.",
      "Sie wollen den Blick auf Orta und die Insel: Von hier öffnet sich der See nach Norden.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Gozzano?", r: "Die OMI bewertet Wohnungen je nach Zone mit 790–1.500 €/m² und Villen mit 870–1.600 €/m² (2. Halbjahr 2025). Die höchstbewertete Zone ist die halbzentrale C2. Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Ist der See bei Gozzano noch verschmutzt?", r: "Das Bemberg-Werk leitete von 1927 bis 1986 Kupfer und Ammoniumsulfat ein, und der See versauerte. Nach der Neutralisierung 1989–1990 kehrte der pH-Wert zu natürlichen Werten zurück, und ARPA stuft den ökologischen Zustand seit 2009 als „gut“ ein; der chemische Zustand 2020–2022 ist wegen PFOS „nicht gut“. Der Lido von Gozzano war 2024 „ausgezeichnet“." },
    { d: "Kommt man mit dem Zug nach Gozzano?", r: "Ja: Der Bahnhof liegt 400 m vom Zentrum, an der Strecke Novara–Domodossola, nur mit Regionalzügen. Nach Mailand steigt man in Novara um. Prüfen Sie die Fahrpläne bei Trenitalia: In einer Stichprobe ab Orta-Miasino fuhren 8 direkte Züge am Tag nach Novara." },
    { d: "Welches ist das nächste Krankenhaus?", r: "Das Krankenhaus SS. Trinità in Borgomanero mit Notaufnahme der Stufe I und 250 Betten, südlich von Gozzano. Die Fahrzeit haben wir nicht gemessen. Omegna im Norden hat nur eine Erste-Hilfe-Stelle." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Gozzano: življenje na južnem koncu jezera Orta, cene, vlaki",
  descrizione: "Gozzano, 5.499 prebivalcev na južnem koncu jezera Orta, kraj najbližje Milanu (67 min): postaja, gimnazija, vrednosti OMI 2025, nizka tveganja, zimsko sonce.",
  frase: "Gozzano je kraj na južnem koncu jezera, od šestnajstih krajev Milanu najbližji: 5.499 prebivalcev, postaja v kraju, 67 min od Milana in 46 od letališča Malpensa.",
  vivere: [
    {
      titolo: "Kraj tovarne in bazilike",
      testo: "Desetletja je bilo gospodarstvo Gozzana tovarna Bemberg, obrat za bakrovo-amonijakov rajon v zaselku Monterosso. Od leta 1927 do 1986 so njene odplake bakra in amonijevega sulfata zakisale jezero (CNR, 2001); v letih 1989–1990 so jezero nevtralizirali z apnencem, danes pa ARPA njegovo ekološko stanje ocenjuje kot »dobro«. Po navedbah Wikipedije je tovarna dokončno zaprla leta 2009.\n\nNa vzpetini nad krajem stoji bazilika San Giuliano, ki v kripti hrani svetnikovo telo; po izročilu je devetindevetdeseta cerkev, ki sta jo ustanovila brata Giulio in Giuliano."
    },
    {
      titolo: "Storitve večjega kraja",
      testo: "Gozzano ima 5.499 prebivalcev (ISTAT, 1. januar 2025; ocena 2026: 5.464): druga največja občina atlasa za Omegno. Ima državni vrtec, osnovno in nižjo srednjo šolo ter oddelek naravoslovne gimnazije, združene v šolskem zavodu Pascoli. Za zdravstvo je pristojna urgenca I. stopnje bolnišnice v Borgomaneru na jugu; časa vožnje nismo merili.\n\nSredišče je na 360 m, 70 m nad jezerom in 2,1 km zračne črte od obale: jezero leži severno od kraja, ne pod okni. Lido, pripisan občini, je bil v sezoni 2024 ocenjen kot »odličen« (podatki EEA)."
    },
    {
      titolo: "Sonce in tveganja: dobre številke",
      testo: "21. decembra naš izračun Gozzanu da 7 h 48 min neposrednega sonca, od 8.26 do 16.13: tretja najvišja vrednost v atlasu za Amenom in Vacciagom ter 69 minut več kot na trgu Piazza Motta. 21. junija je sonca 14 h 29 min. Izračun upošteva le teren.\n\nPo podatkih ISPRA 0,02 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov. 3,6 % ozemlja ima srednjo poplavno nevarnost, z 0,9 % prebivalcev."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) je najvišje ovrednotena polsrednja cona C2, »pozidani severovzhod, severno jezero«: običajna stanovanja 1.000–1.500 €/m², vile 1.100–1.600 €/m². V središču (B1) so stanovanja po 1.000–1.450 €/m²; v Auzatu in Bugnatu (D2) po 790–1.150 €/m², vile tam po 940–1.400 €/m². V kmetijskih conah so vile ovrednotene na 870–1.300 €/m². Glede na 2. polletje 2024 so se stanovanja v središču v sredini razpona podražila za 4,7 %.\n\nTo so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju. Vile v coni C2 so ovrednotene približno 47 % niže od tistih ob obali v Orti."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 67 min (79 km) od milanske stolnice in 46 min (39 km) od letališča Malpensa T1, najkrajša časa v atlasu; 42 min od Novare, 74 od Lugana. Postaja Gozzano na progi Novara–Domodossola je 400 m zračne črte stran; vozijo regionalni vlaki, za Milano prestopite v Novari.\n\nNavigazione Lago d'Orta navaja Gozzano med svojimi pristani; redna linija vozi od marca do oktobra. Bolzano Novarese je 4 min stran, San Maurizio d'Opaglio 7, Orta 10."
    },
  ],
  perChi: {
    si: [
      "Želite jezero, ki je Milanu najbližje: 67 min brez prometa.",
      "Potrebujete postajo, šole do gimnazije in kraj s trgovinami.",
      "Iščete vrednosti pod 1.600 €/m², tudi za vile.",
    ],
    no: [
      "Želite vodo pred hišo: središče je 2,1 km od obale.",
      "Iščete turistični kraj: Gozzano je delovni kraj.",
      "Želite pogled na Orto in otok: od tu se jezero odpira proti severu.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Gozzanu?", r: "OMI vrednoti običajna stanovanja glede na cono na 790–1.500 €/m², vile na 870–1.600 €/m² (2. polletje 2025). Najvišje ovrednotena je polsrednja cona C2. To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali je jezero pri Gozzanu še onesnaženo?", r: "Tovarna Bemberg je od leta 1927 do 1986 odvajala baker in amonijev sulfat, jezero pa se je zakisalo. Po nevtralizaciji v letih 1989–1990 se je pH vrnil na naravne vrednosti, ARPA pa ekološko stanje od leta 2009 ocenjuje kot »dobro«; kemijsko stanje 2020–2022 je zaradi PFOS »slabo«. Lido v Gozzanu je bil leta 2024 »odličen«." },
    { d: "Ali se v Gozzano pride z vlakom?", r: "Da: postaja je 400 m od središča, na progi Novara–Domodossola, le z regionalnimi vlaki. Za Milano prestopite v Novari. Vozni red preverite pri Trenitalii: v vzorcu z Orta-Miasino je v Novaro vozilo 8 neposrednih vlakov na dan." },
    { d: "Katera je najbližja bolnišnica?", r: "Bolnišnica SS. Trinità v Borgomaneru z urgenco I. stopnje in 250 posteljami, južno od Gozzana. Časa vožnje nismo merili. Omegna na severu ima le točko prve pomoči." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
