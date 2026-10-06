import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Pella, zona E1 «Suburbana turistica – località Ronco»", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS), comune di Pella", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Pella", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3115", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – Orario dal 1 aprile 2025 e Orario invernale 2026", url: "https://www.navigazionelagodorta.it/userdata/documenti/ORARI-DAL-1-APRILE-2025.pdf", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Ronco (Pella): vivere a pelo d'acqua sul lago d'Orta, prezzi",
  descrizione: "Ronco, località di Pella a 10 m sopra il lago d'Orta, con imbarcadero: quotazioni OMI zona E1, sole d'inverno più corto della riva ovest, 82 min da Milano.",
  frase: "Ronco è la località di Pella stretta tra riva e montagna, 10 m sopra il lago e a 45 m dall'acqua: imbarcadero in paese, Milano a 82 min, il sole d'inverno se ne va alle 14:06.",
  vivere: [
    {
      titolo: "Una località di Pella, sull'acqua",
      testo: "Ronco non è un comune: è una località del comune di Pella, sulla riva occidentale, a nord del capoluogo. Residenti, scuole, rischi e tasse sono quelli di Pella, 876 abitanti in tutto (ISTAT, 1° gennaio 2025); i residenti della sola Ronco non sono nei dati che abbiamo usato.\n\nÈ il luogo dell'atlante più vicino all'acqua dopo Orta: il punto sta a 300 m di quota, 10 m sopra il lago, a circa 45 m dalla riva. L'imbarcadero è in paese, e gli orari della Navigazione Lago d'Orta lo elencano tra le fermate."
    },
    {
      titolo: "Il sole d'inverno è il punto debole",
      testo: "Alle spalle di Ronco la montagna sale ripida, e d'inverno si sente. Il 21 dicembre il nostro calcolo dà 5 h 39 min di sole diretto, dalle 08:28 alle 14:06: è il tramonto più anticipato dei sedici luoghi. Anche il 21 giugno il sole si ferma a 11 h 57 min, contro le 13 h 42 min di Pella, cinque minuti più a sud.\n\nIl calcolo considera solo il rilievo, senza edifici né alberi. Chi cerca la luce del pomeriggio deve guardare la singola casa: qualche metro di quota o un'esposizione diversa possono cambiare molto."
    },
    {
      titolo: "Servizi: si va a Pella e oltre",
      testo: "La scuola statale del comune è la primaria di Alzo; infanzia e secondaria sono nei comuni vicini. Pella è a 5 min, San Maurizio d'Opaglio a 10, Gozzano a 17. Sulla sponda ovest non c'è ferrovia: la stazione più vicina, Pettenasco, è a 2,1 km in linea d'aria ma sull'altra riva.\n\nRischi del comune di Pella secondo ISPRA: l'8,6% dei residenti vive in aree a pericolosità da frana elevata o molto elevata, il 5,5% in aree a pericolosità idraulica media, soprattutto lungo la riva. Per l'ospedale: Omegna ha un Punto di Primo Intervento, non un pronto soccorso; il DEA di I livello è a Borgomanero."
    },
    {
      titolo: "Una zona OMI tutta sua",
      testo: "L'Agenzia delle Entrate dà a Ronco una zona propria, E1 «Suburbana turistica – località Ronco». Nel 2° semestre 2025 le abitazioni civili sono quotate 1.350–2.000 €/m²: è il massimo delle civili nel comune di Pella, appena sopra il lungolago del capoluogo (1.350–1.950 €/m²). Per ville ed economiche l'OMI qui non dà quotazioni, perché non le ritiene un mercato significativo. Sul 2° semestre 2024 il centro dell'intervallo è salito del 4,7%.\n\nSono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato conservativo normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 82 min (91 km) da Milano Duomo, 61 min (51 km) da Malpensa T1, 89 min da Lugano. La strada è la provinciale della sponda ovest, che passa da Pella.\n\nI battelli di linea viaggiano da marzo a ottobre. Il giro di ottobre 2026 (Orta–Isola–Pella–San Filiberto–Lagna) non tocca Ronco: la fermata compare negli orari della stagione piena. Da novembre a febbraio non risulta servizio di linea."
    },
  ],
  perChi: {
    si: [
      "Volete l'acqua a pochi metri: la riva è a 45 m.",
      "Vi basta il battello in stagione e Pella a 5 min per il resto.",
      "Cercate una zona OMI piccola e riconosciuta, con civili a 1.350–2.000 €/m².",
    ],
    no: [
      "Volete il sole d'inverno: il 21 dicembre finisce alle 14:06.",
      "Vi serve il treno o una scuola in paese.",
      "Cercate una villa con terreno: l'OMI qui non quota nemmeno la tipologia.",
    ],
  },
  faq: [
    { d: "Ronco è un comune?", r: "No, è una località del comune di Pella. Popolazione, scuole, rischi ISPRA e tasse sono di Pella: 876 abitanti in tutto al 1° gennaio 2025. La scuola statale del comune è la primaria di Alzo." },
    { d: "Quanto costa una casa a Ronco?", r: "L'OMI quota le abitazioni civili nella zona E1 di Ronco 1.350–2.000 €/m² (2° semestre 2025). Ville ed economiche qui non sono quotate. Sono intervalli stimati, non prezzi firmati." },
    { d: "Quanto sole c'è a Ronco d'inverno?", r: "Il 21 dicembre 5 h 39 min di sole diretto, dalle 08:28 alle 14:06, secondo il nostro calcolo sul rilievo. È il tramonto più anticipato tra i sedici luoghi dell'atlante. Edifici e alberi non sono considerati." },
    { d: "A Ronco ferma il battello?", r: "Sì, nella stagione piena: gli orari della Navigazione Lago d'Orta elencano Ronco tra le fermate. Il giro di ottobre 2026 però non la tocca, e da novembre a febbraio non risulta servizio di linea." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Ronco (Pella): living at water level on Lake Orta, prices",
  descrizione: "Ronco, part of Pella, 10 m above Lake Orta, with a boat landing: OMI values for zone E1, the shortest winter sun on the west shore, 82 min from Milan.",
  frase: "Ronco is the part of Pella squeezed between shore and mountain, 10 m above the lake and 45 m from the water: boat landing in the village, Milan 82 min away, winter sun gone at 2:06 pm.",
  vivere: [
    {
      titolo: "A locality of Pella, on the water",
      testo: "Ronco is not a municipality: it is a locality of the municipality of Pella, on the western shore, north of the main village. Residents, schools, hazards and taxes are those of Pella, 876 inhabitants in all (ISTAT, 1 January 2025); Ronco's own residents are not in the data we used.\n\nIt is the place in this atlas closest to the water after Orta: its point is at 300 m, 10 m above the lake, about 45 m from the shore. The boat landing is in the village, and Navigazione Lago d'Orta timetables list it among the stops."
    },
    {
      titolo: "Winter sun is the weak point",
      testo: "Behind Ronco the mountain rises steeply, and in winter you feel it. On 21 December our calculation gives 5 h 39 min of direct sun, from 8:28 am to 2:06 pm: the earliest sunset of the sixteen places. Even on 21 June the sun stops at 11 h 57 min, against 13 h 42 min in Pella, five minutes south.\n\nThe calculation considers terrain only, without buildings or trees. If you want afternoon light, look at the individual house: a few metres of height or a different aspect can change a lot."
    },
    {
      titolo: "Services: you go to Pella and beyond",
      testo: "The municipality's state school is the primary school in Alzo; nursery and secondary schools are in neighbouring municipalities. Pella is 5 min away, San Maurizio d'Opaglio 10, Gozzano 17. There is no railway on the west shore: the nearest station, Pettenasco, is 2.1 km away as the crow flies but on the other shore.\n\nHazards for the municipality of Pella according to ISPRA: 8.6% of residents live in areas of high or very high landslide hazard, 5.5% in areas of medium flood hazard, mostly along the shore. Hospital: Omegna has a first-aid point, not an emergency department; the level-I emergency department is in Borgomanero."
    },
    {
      titolo: "An OMI zone of its own",
      testo: "The Revenue Agency gives Ronco its own zone, E1 \"Suburban tourist – Ronco locality\". In the 2nd half of 2025 standard homes are valued at €1,350–2,000/m²: the top for standard homes in the municipality of Pella, just above the main village's lakefront (€1,350–1,950/m²). OMI gives no values here for villas or economy homes, because it does not consider them a significant market. Against the 2nd half of 2024 the midpoint rose by 4.7%.\n\nThese are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 82 min (91 km) from Milan's Duomo, 61 min (51 km) from Malpensa T1, 89 min from Lugano. The road is the west-shore provincial road, through Pella.\n\nScheduled boats run from March to October. The October 2026 loop (Orta–Island–Pella–San Filiberto–Lagna) does not call at Ronco: the stop appears in the high-season timetables. From November to February no scheduled service is listed."
    },
  ],
  perChi: {
    si: [
      "You want the water a few metres away: the shore is 45 m off.",
      "Boats in season and Pella 5 min away are enough for you.",
      "You want a small, recognised OMI zone, with standard homes at €1,350–2,000/m².",
    ],
    no: [
      "You want winter sun: on 21 December it ends at 2:06 pm.",
      "You need a train or a school in the village.",
      "You want a villa with land: OMI does not even value that type here.",
    ],
  },
  faq: [
    { d: "Is Ronco a municipality?", r: "No, it is a locality of the municipality of Pella. Population, schools, ISPRA hazards and taxes are Pella's: 876 inhabitants in all on 1 January 2025. The municipality's state school is the primary school in Alzo." },
    { d: "How much does a house cost in Ronco?", r: "OMI values standard homes in Ronco's zone E1 at €1,350–2,000/m² (2nd half of 2025). Villas and economy homes are not valued here. These are estimated ranges, not signed prices." },
    { d: "How much winter sun does Ronco get?", r: "On 21 December, 5 h 39 min of direct sun, from 8:28 am to 2:06 pm, according to our terrain calculation. It is the earliest sunset among the atlas's sixteen places. Buildings and trees are not considered." },
    { d: "Does the boat stop at Ronco?", r: "Yes, in high season: Navigazione Lago d'Orta timetables list Ronco among the stops. The October 2026 loop, however, does not call there, and from November to February no scheduled service is listed." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Ronco (Pella): Wohnen direkt am Ortasee, Preise",
  descrizione: "Ronco, Ortsteil von Pella, 10 m über dem Ortasee, mit Anlegestelle: OMI-Werte Zone E1, die kürzeste Wintersonne am Westufer, 82 Min. von Mailand.",
  frase: "Ronco ist der Ortsteil von Pella zwischen Ufer und Berg, 10 m über dem See und 45 m vom Wasser: Anlegestelle im Ort, Mailand 82 Min., die Wintersonne geht um 14.06 Uhr.",
  vivere: [
    {
      titolo: "Ein Ortsteil von Pella, am Wasser",
      testo: "Ronco ist keine Gemeinde, sondern ein Ortsteil der Gemeinde Pella am Westufer, nördlich des Hauptorts. Einwohner, Schulen, Risiken und Steuern sind die von Pella, insgesamt 876 Einwohner (ISTAT, 1. Januar 2025); die Einwohner von Ronco allein sind in unseren Daten nicht enthalten.\n\nNach Orta ist es der Ort dieses Atlas, der dem Wasser am nächsten ist: Der Punkt liegt auf 300 m, 10 m über dem See, etwa 45 m vom Ufer. Die Anlegestelle ist im Ort, und die Fahrpläne der Navigazione Lago d'Orta führen sie als Station."
    },
    {
      titolo: "Die Wintersonne ist die Schwachstelle",
      testo: "Hinter Ronco steigt der Berg steil an, und im Winter merkt man das. Am 21. Dezember ergibt unsere Berechnung 5 h 39 min direkte Sonne, von 8.28 bis 14.06 Uhr: der früheste Sonnenuntergang der sechzehn Orte. Selbst am 21. Juni sind es nur 11 h 57 min, gegenüber 13 h 42 min in Pella, fünf Minuten weiter südlich.\n\nBerechnet ist nur das Gelände, ohne Gebäude und Bäume. Wer Nachmittagslicht sucht, muss das einzelne Haus prüfen: ein paar Meter Höhe oder eine andere Ausrichtung ändern viel."
    },
    {
      titolo: "Versorgung: in Pella und weiter",
      testo: "Die staatliche Schule der Gemeinde ist die Grundschule in Alzo; Kindergarten und weiterführende Schulen sind in Nachbargemeinden. Pella ist 5 Min. entfernt, San Maurizio d'Opaglio 10, Gozzano 17. Am Westufer gibt es keine Bahn: Der nächste Bahnhof, Pettenasco, liegt 2,1 km Luftlinie entfernt, aber am anderen Ufer.\n\nRisiken der Gemeinde Pella laut ISPRA: 8,6 % der Einwohner leben in Gebieten mit hoher oder sehr hoher Rutschungsgefahr, 5,5 % in Gebieten mittlerer Hochwassergefahr, vor allem am Ufer. Krankenhaus: Omegna hat eine Erste-Hilfe-Stelle, keine Notaufnahme; die Notaufnahme der Stufe I ist in Borgomanero."
    },
    {
      titolo: "Eine eigene OMI-Zone",
      testo: "Die Steuerbehörde gibt Ronco eine eigene Zone, E1 „Touristischer Vorort – Ortsteil Ronco“. Im 2. Halbjahr 2025 werden Wohnungen mit 1.350–2.000 €/m² bewertet: der Höchstwert für Wohnungen in der Gemeinde Pella, knapp über dem Ufer des Hauptorts (1.350–1.950 €/m²). Für Villen und einfache Wohnungen gibt die OMI hier keine Werte an, weil sie keinen nennenswerten Markt sieht. Gegenüber dem 2. Halbjahr 2024 stieg die Mitte der Spanne um 4,7 %.\n\nDas sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 82 Min. (91 km) vom Mailänder Dom, 61 Min. (51 km) von Malpensa T1, 89 Min. von Lugano. Die Straße ist die Provinzstraße am Westufer, über Pella.\n\nLinienschiffe fahren von März bis Oktober. Die Oktoberrunde 2026 (Orta–Insel–Pella–San Filiberto–Lagna) hält nicht in Ronco: Die Station steht in den Fahrplänen der Hauptsaison. Von November bis Februar ist kein Liniendienst ausgewiesen."
    },
  ],
  perChi: {
    si: [
      "Sie wollen das Wasser in wenigen Metern: Das Ufer ist 45 m entfernt.",
      "Ihnen reichen das Schiff in der Saison und Pella in 5 Min. für den Rest.",
      "Sie suchen eine kleine, anerkannte OMI-Zone mit Wohnungen zu 1.350–2.000 €/m².",
    ],
    no: [
      "Sie wollen Wintersonne: Am 21. Dezember endet sie um 14.06 Uhr.",
      "Sie brauchen eine Bahn oder eine Schule im Ort.",
      "Sie suchen eine Villa mit Grund: Diesen Typ bewertet die OMI hier nicht einmal.",
    ],
  },
  faq: [
    { d: "Ist Ronco eine Gemeinde?", r: "Nein, ein Ortsteil der Gemeinde Pella. Einwohner, Schulen, ISPRA-Risiken und Steuern sind die von Pella: insgesamt 876 Einwohner am 1. Januar 2025. Die staatliche Schule der Gemeinde ist die Grundschule in Alzo." },
    { d: "Was kostet ein Haus in Ronco?", r: "Die OMI bewertet Wohnungen in der Zone E1 von Ronco mit 1.350–2.000 €/m² (2. Halbjahr 2025). Villen und einfache Wohnungen werden hier nicht bewertet. Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Wie viel Wintersonne hat Ronco?", r: "Am 21. Dezember 5 h 39 min direkte Sonne, von 8.28 bis 14.06 Uhr, nach unserer Geländeberechnung. Es ist der früheste Sonnenuntergang der sechzehn Orte des Atlas. Gebäude und Bäume sind nicht berücksichtigt." },
    { d: "Hält das Schiff in Ronco?", r: "Ja, in der Hauptsaison: Die Fahrpläne der Navigazione Lago d'Orta führen Ronco als Station. Die Oktoberrunde 2026 hält dort aber nicht, und von November bis Februar ist kein Liniendienst ausgewiesen." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Ronco (Pella): življenje tik ob jezeru Orta, cene",
  descrizione: "Ronco, del občine Pella 10 m nad jezerom Orta, s pristanom: vrednosti OMI v coni E1, najkrajše zimsko sonce na zahodni obali, 82 min od Milana.",
  frase: "Ronco je del Pelle, stisnjen med obalo in goro, 10 m nad jezerom in 45 m od vode: pristan v kraju, Milano 82 min stran, zimsko sonce odide ob 14.06.",
  vivere: [
    {
      titolo: "Kraj v občini Pella, ob vodi",
      testo: "Ronco ni občina, temveč kraj v občini Pella na zahodni obali, severno od glavnega naselja. Prebivalci, šole, tveganja in davki so podatki Pelle, skupaj 876 prebivalcev (ISTAT, 1. januar 2025); prebivalcev samega Ronca v naših podatkih ni.\n\nZa Orto je to kraj v atlasu, ki je vodi najbližje: točka je na 300 m, 10 m nad jezerom, približno 45 m od obale. Pristan je v kraju in vozni redi Navigazione Lago d'Orta ga navajajo med postajališči."
    },
    {
      titolo: "Zimsko sonce je šibka točka",
      testo: "Za Roncem se gora strmo dviga, in pozimi se to pozna. 21. decembra naš izračun da 5 h 39 min neposrednega sonca, od 8.28 do 14.06: najzgodnejši zahod med šestnajstimi kraji. Tudi 21. junija je sonca le 11 h 57 min, v Pelli, pet minut južneje, pa 13 h 42 min.\n\nIzračun upošteva le relief, brez stavb in dreves. Če iščete popoldansko svetlobo, preverite posamezno hišo: nekaj metrov višine ali drugačna lega lahko veliko spremeni."
    },
    {
      titolo: "Storitve: v Pelli in dlje",
      testo: "Državna šola v občini je osnovna šola v Alzu; vrtec in srednje šole so v sosednjih občinah. Pella je 5 min stran, San Maurizio d'Opaglio 10, Gozzano 17. Na zahodni obali ni železnice: najbližja postaja, Pettenasco, je 2,1 km zračne črte stran, vendar na drugi obali.\n\nTveganja občine Pella po podatkih ISPRA: 8,6 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov, 5,5 % na območjih srednje poplavne nevarnosti, predvsem ob obali. Bolnišnica: Omegna ima točko prve pomoči, ne urgence; urgenca I. stopnje je v Borgomaneru."
    },
    {
      titolo: "Lastna cona OMI",
      testo: "Davčna uprava Roncu dodeli lastno cono, E1 »turistično predmestje – kraj Ronco«. V 2. polletju 2025 so običajna stanovanja ovrednotena na 1.350–2.000 €/m²: najvišja vrednost za stanovanja v občini Pella, tik nad obalo glavnega naselja (1.350–1.950 €/m²). Za vile in skromnejša stanovanja OMI tu ne navaja vrednosti, ker trga ne šteje za pomembnega. Glede na 2. polletje 2024 se je sredina razpona zvišala za 4,7 %.\n\nTo so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 82 min (91 km) od milanske stolnice, 61 min (51 km) od letališča Malpensa T1, 89 min od Lugana. Cesta je pokrajinska cesta zahodne obale, skozi Pello.\n\nRedne ladje vozijo od marca do oktobra. Oktobrska krožna linija 2026 (Orta–otok–Pella–San Filiberto–Lagna) v Roncu ne ustavlja: postajališče je v voznih redih glavne sezone. Od novembra do februarja redna linija ni navedena."
    },
  ],
  perChi: {
    si: [
      "Želite vodo na nekaj metrov: obala je 45 m stran.",
      "Zadostujeta vam ladja v sezoni in Pella na 5 min za vse drugo.",
      "Iščete majhno, priznano cono OMI s stanovanji po 1.350–2.000 €/m².",
    ],
    no: [
      "Želite zimsko sonce: 21. decembra se konča ob 14.06.",
      "Potrebujete vlak ali šolo v kraju.",
      "Iščete vilo z zemljiščem: te vrste OMI tu sploh ne vrednoti.",
    ],
  },
  faq: [
    { d: "Ali je Ronco občina?", r: "Ne, je kraj v občini Pella. Prebivalstvo, šole, tveganja ISPRA in davki so podatki Pelle: skupaj 876 prebivalcev 1. januarja 2025. Državna šola v občini je osnovna šola v Alzu." },
    { d: "Koliko stane hiša v Roncu?", r: "OMI vrednoti običajna stanovanja v coni E1 Ronca na 1.350–2.000 €/m² (2. polletje 2025). Vile in skromnejša stanovanja tu niso ovrednotena. To so ocenjeni razponi, ne podpisane cene." },
    { d: "Koliko zimskega sonca ima Ronco?", r: "21. decembra 5 h 39 min neposrednega sonca, od 8.28 do 14.06, po našem izračunu na reliefu. To je najzgodnejši zahod med šestnajstimi kraji atlasa. Stavbe in drevesa niso upoštevani." },
    { d: "Ali v Roncu ustavlja ladja?", r: "Da, v glavni sezoni: vozni redi Navigazione Lago d'Orta navajajo Ronco med postajališči. Oktobrska linija 2026 tam ne ustavlja, od novembra do februarja pa redna linija ni navedena." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
