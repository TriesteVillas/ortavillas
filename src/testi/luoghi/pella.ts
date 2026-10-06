import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Pella", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Pella", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3115", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Pella (Italia)", url: "https://it.wikipedia.org/wiki/Pella_(Italia)", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – Orario invernale 2026", url: "https://www.navigazionelagodorta.it/userdata/documenti/Orario_invernale_2026.pdf", data: "2026-10-06" },
  { titolo: "EEA – Qualità delle acque di balneazione, stagione 2024", url: "https://discodata.eea.europa.eu/", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Pella: vivere sulla sponda ovest del lago d'Orta, prezzi",
  descrizione: "Pella, 876 abitanti di fronte a Orta e all'isola, 24 m sopra il lago: quotazioni OMI 2025, sole del mattino, battelli, niente treno, 77 min da Milano.",
  frase: "Pella è il paese della sponda ovest che guarda Orta e l'isola dall'altra parte dell'acqua: 876 abitanti, 24 m sopra il lago, 77 min da Milano, battello per Orta da marzo a ottobre.",
  vivere: [
    {
      titolo: "Davanti a Orta, dall'altra riva",
      testo: "Pella sta sulla riva occidentale, di fronte al borgo di Orta e all'isola di San Giulio. Il punto centrale è a 314 m, 24 m sopra il lago e circa 210 m dalla riva. Il comune conta 876 residenti (ISTAT, 1° gennaio 2025; stima 2026: 874) e comprende anche la località di Ronco, sulla riva più a nord, e la frazione di Alzo, dove sta la scuola primaria.\n\nLa riva guarda a est: sole del mattino, vista su Orta, e un tramonto che d'inverno arriva presto dietro il crinale. Il punto di balneazione «Rialaccio», attribuito al comune, risulta «buono» nella stagione 2024 (dati EEA)."
    },
    {
      titolo: "Il sole arriva presto e se ne va presto",
      testo: "Il 21 dicembre il nostro calcolo dà a Pella 6 h 44 min di sole diretto, dalle 08:25 alle 15:08: il sole arriva 45 minuti prima che in piazza Motta e se ne va 40 minuti prima. Il 21 giugno sono 13 h 42 min. Il calcolo considera solo il rilievo, non edifici né alberi.\n\nPer ISPRA l'8,6% dei residenti vive in aree a pericolosità da frana elevata o molto elevata (3,1% della superficie) e il 5,5% in aree a pericolosità idraulica media, soprattutto lungo la riva."
    },
    {
      titolo: "Servizi: pochi in paese",
      testo: "La sola scuola statale del comune è la primaria di Alzo; infanzia e secondaria sono nei comuni vicini, per esempio a San Maurizio d'Opaglio (6 min). Per la sanità, il DEA di I livello più vicino per la provincia di Novara è a Borgomanero; Omegna ha un Punto di Primo Intervento, non un pronto soccorso.\n\nSulla sponda ovest non c'è ferrovia. Le stazioni più vicine sono Pettenasco e Orta-Miasino, a circa 3 km in linea d'aria ma sull'altra riva: in auto Orta è a 19 min."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) sul lungolago, zona B2, le abitazioni civili sono quotate 1.350–1.950 €/m² e ville e villini 1.550–2.200 €/m². Nel vecchio nucleo (B1) le civili stanno a 1.200–1.750 €/m², nella periferia residenziale (D1) a 1.150–1.700 €/m². La località Ronco ha una zona propria (E1), con civili a 1.350–2.000 €/m². Sul 2° semestre 2024 le civili a lago sono salite del 4,8% al centro dell'intervallo.\n\nSono quotazioni, non prezzi di compravendita: intervalli stimati dall'Agenzia delle Entrate per zona e tipologia, su superficie lorda e stato normale. Il lungolago di Pella è quotato circa un terzo in meno di quello di Orta, che sta di fronte."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 77 min (88 km) da Milano Duomo, 57 min (48 km) da Malpensa T1, 85 min da Lugano. La strada è la provinciale della sponda ovest; da Pella a Gozzano ci vogliono 13 min.\n\nL'imbarcadero è a 300 m. Dal 4 al 31 ottobre 2026 il giro Orta–Isola–Pella–San Filiberto–Lagna parte ogni 35–45 minuti; la prima corsa da Pella è alle 09:45. Il servizio di linea è attivo da marzo a ottobre; da novembre a febbraio non risulta."
    },
  ],
  perChi: {
    si: [
      "Volete vedere Orta e l'isola invece di abitarci dentro.",
      "Vi piace il sole del mattino: il 21 dicembre arriva alle 08:25.",
      "Cercate la riva a quotazioni più basse di Orta: 1.350–1.950 €/m² sul lungolago.",
    ],
    no: [
      "Vi serve il treno: sulla sponda ovest non c'è, e Orta è a 19 min d'auto.",
      "Volete il sole del pomeriggio d'inverno: se ne va alle 15:08.",
      "Vi servono scuole medie e negozi in paese: sono nei comuni vicini.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Pella?", r: "Sul lungolago l'OMI quota le abitazioni civili 1.350–1.950 €/m² e le ville 1.550–2.200 €/m² (2° semestre 2025). Nella periferia residenziale le civili sono a 1.150–1.700 €/m². Sono quotazioni stimate, non prezzi firmati." },
    { d: "Da Pella si va a Orta in battello?", r: "Sì, da marzo a ottobre. A ottobre 2026 il giro che tocca Pella, l'isola e Orta parte ogni 35–45 minuti, con la prima corsa da Pella alle 09:45. Da novembre a febbraio non risulta servizio di linea: in auto Orta è a 19 min." },
    { d: "C'è una stazione ferroviaria vicino a Pella?", r: "Non sulla sponda ovest. Le più vicine sono Pettenasco e Orta-Miasino, sull'altra riva, sulla linea Novara–Domodossola. Per Milano si cambia a Novara." },
    { d: "Quanto sole c'è a Pella d'inverno?", r: "Il 21 dicembre 6 h 44 min di sole diretto, dalle 08:25 alle 15:08, secondo il nostro calcolo sul rilievo. È quasi quanto a Orta, ma spostato verso il mattino. Edifici e alberi non sono considerati." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Pella: living on Lake Orta's west shore, prices",
  descrizione: "Pella, 876 residents facing Orta and the island, 24 m above the lake: OMI values 2025, morning sun, boats, no railway, 77 min from Milan.",
  frase: "Pella is the west-shore village that looks at Orta and the island across the water: 876 residents, 24 m above the lake, 77 min from Milan, a boat to Orta from March to October.",
  vivere: [
    {
      titolo: "Facing Orta, from the other shore",
      testo: "Pella lies on the western shore, opposite the village of Orta and the island of San Giulio. Its centre is at 314 m, 24 m above the lake and about 210 m from the shore. The municipality has 876 residents (ISTAT, 1 January 2025; 2026 estimate: 874) and also includes Ronco, on the shore further north, and the hamlet of Alzo, where the primary school is.\n\nThe shore faces east: morning sun, a view of Orta, and a winter sunset that comes early behind the ridge. The \"Rialaccio\" bathing point, assigned to the municipality, was rated \"good\" in the 2024 season (EEA data)."
    },
    {
      titolo: "The sun comes early and leaves early",
      testo: "On 21 December our calculation gives Pella 6 h 44 min of direct sun, from 8:25 am to 3:08 pm: the sun arrives 45 minutes earlier than on Piazza Motta and leaves 40 minutes earlier. On 21 June it is 13 h 42 min. The calculation considers terrain only, not buildings or trees.\n\nAccording to ISPRA, 8.6% of residents live in areas of high or very high landslide hazard (3.1% of the area) and 5.5% in areas of medium flood hazard, mostly along the shore."
    },
    {
      titolo: "Services: few in the village",
      testo: "The municipality's only state school is the primary school in Alzo; nursery and secondary schools are in neighbouring municipalities, for example San Maurizio d'Opaglio (6 min). For healthcare, the nearest level-I emergency department for the province of Novara is in Borgomanero; Omegna has a first-aid point, not an emergency department.\n\nThere is no railway on the west shore. The nearest stations are Pettenasco and Orta-Miasino, about 3 km as the crow flies but on the other shore: by car Orta is 19 min away."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), on the lakefront, zone B2, standard homes are valued at €1,350–1,950/m² and villas at €1,550–2,200/m². In the old core (B1) standard homes are at €1,200–1,750/m², in the residential outskirts (D1) at €1,150–1,700/m². Ronco has its own zone (E1), with standard homes at €1,350–2,000/m². Against the 2nd half of 2024, lakefront standard homes rose by 4.8% at the midpoint.\n\nThese are valuations, not sale prices: ranges estimated by the Revenue Agency by zone and type, on gross floor area and normal condition. Pella's lakefront is valued about a third lower than Orta's, opposite."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 77 min (88 km) from Milan's Duomo, 57 min (48 km) from Malpensa T1, 85 min from Lugano. The road is the west-shore provincial road; from Pella to Gozzano takes 13 min.\n\nThe boat landing is 300 m away. From 4 to 31 October 2026 the Orta–Island–Pella–San Filiberto–Lagna loop leaves every 35–45 minutes; the first run from Pella is at 9:45 am. Scheduled service runs from March to October; from November to February none is listed."
    },
  ],
  perChi: {
    si: [
      "You want to look at Orta and the island rather than live inside them.",
      "You like morning sun: on 21 December it arrives at 8:25 am.",
      "You want the shore at lower values than Orta: €1,350–1,950/m² on the lakefront.",
    ],
    no: [
      "You need a train: there is none on the west shore, and Orta is 19 min by car.",
      "You want winter afternoon sun: it leaves at 3:08 pm.",
      "You need secondary schools and shops in the village: they are in nearby municipalities.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Pella?", r: "On the lakefront OMI values standard homes at €1,350–1,950/m² and villas at €1,550–2,200/m² (2nd half of 2025). In the residential outskirts standard homes are at €1,150–1,700/m². These are estimated valuations, not signed prices." },
    { d: "Can I take a boat from Pella to Orta?", r: "Yes, from March to October. In October 2026 the loop calling at Pella, the island and Orta leaves every 35–45 minutes, with the first run from Pella at 9:45 am. From November to February no scheduled service is listed: by car Orta is 19 min away." },
    { d: "Is there a railway station near Pella?", r: "Not on the west shore. The nearest are Pettenasco and Orta-Miasino, on the other shore, on the Novara–Domodossola line. For Milan you change at Novara." },
    { d: "How much winter sun does Pella get?", r: "On 21 December, 6 h 44 min of direct sun, from 8:25 am to 3:08 pm, according to our terrain calculation. That is almost as much as Orta, but shifted towards the morning. Buildings and trees are not considered." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Pella: Leben am Westufer des Ortasees, Preise",
  descrizione: "Pella, 876 Einwohner gegenüber von Orta und der Insel, 24 m über dem See: OMI-Werte 2025, Morgensonne, Schiffe, keine Bahn, 77 Min. von Mailand.",
  frase: "Pella ist der Ort am Westufer, der über das Wasser auf Orta und die Insel blickt: 876 Einwohner, 24 m über dem See, 77 Min. von Mailand, von März bis Oktober mit dem Schiff nach Orta.",
  vivere: [
    {
      titolo: "Gegenüber von Orta, vom anderen Ufer",
      testo: "Pella liegt am Westufer, gegenüber dem Ort Orta und der Insel San Giulio. Das Zentrum liegt auf 314 m, 24 m über dem See und etwa 210 m vom Ufer. Die Gemeinde hat 876 Einwohner (ISTAT, 1. Januar 2025; Schätzung 2026: 874) und umfasst auch Ronco, weiter nördlich am Ufer, und den Ortsteil Alzo mit der Grundschule.\n\nDas Ufer schaut nach Osten: Morgensonne, Blick auf Orta und ein Sonnenuntergang, der im Winter früh hinter dem Kamm kommt. Die der Gemeinde zugeordnete Badestelle „Rialaccio“ wurde in der Saison 2024 mit „gut“ bewertet (EEA-Daten)."
    },
    {
      titolo: "Die Sonne kommt früh und geht früh",
      testo: "Am 21. Dezember ergibt unsere Berechnung für Pella 6 h 44 min direkte Sonne, von 8.25 bis 15.08 Uhr: Die Sonne kommt 45 Minuten früher als an der Piazza Motta und geht 40 Minuten früher. Am 21. Juni sind es 13 h 42 min. Berechnet ist nur das Gelände, ohne Gebäude und Bäume.\n\nLaut ISPRA leben 8,6 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr (3,1 % der Fläche) und 5,5 % in Gebieten mittlerer Hochwassergefahr, vor allem am Ufer."
    },
    {
      titolo: "Versorgung: wenig im Ort",
      testo: "Die einzige staatliche Schule der Gemeinde ist die Grundschule in Alzo; Kindergarten und weiterführende Schulen sind in Nachbargemeinden, etwa in San Maurizio d'Opaglio (6 Min.). Die nächste Notaufnahme der Stufe I in der Provinz Novara ist in Borgomanero; Omegna hat eine Erste-Hilfe-Stelle, keine Notaufnahme.\n\nAm Westufer gibt es keine Bahn. Die nächsten Bahnhöfe sind Pettenasco und Orta-Miasino, etwa 3 km Luftlinie entfernt, aber am anderen Ufer: Mit dem Auto ist Orta 19 Min. entfernt."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) werden am Seeufer, Zone B2, Wohnungen mit 1.350–1.950 €/m² und Villen mit 1.550–2.200 €/m² bewertet. Im alten Kern (B1) liegen Wohnungen bei 1.200–1.750 €/m², am Ortsrand (D1) bei 1.150–1.700 €/m². Ronco hat eine eigene Zone (E1), Wohnungen 1.350–2.000 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen am See um 4,8 % in der Mitte der Spanne.\n\nDas sind Richtwerte, keine Kaufpreise: von der Steuerbehörde geschätzte Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand. Das Ufer von Pella liegt etwa ein Drittel unter dem von Orta gegenüber."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 77 Min. (88 km) vom Mailänder Dom, 57 Min. (48 km) von Malpensa T1, 85 Min. von Lugano. Die Straße ist die Provinzstraße am Westufer; von Pella nach Gozzano sind es 13 Min.\n\nDie Anlegestelle ist 300 m entfernt. Vom 4. bis 31. Oktober 2026 fährt die Runde Orta–Insel–Pella–San Filiberto–Lagna alle 35–45 Minuten; die erste Fahrt ab Pella ist um 9.45 Uhr. Der Liniendienst fährt von März bis Oktober; von November bis Februar ist keiner ausgewiesen."
    },
  ],
  perChi: {
    si: [
      "Sie wollen Orta und die Insel ansehen, statt mittendrin zu wohnen.",
      "Sie mögen Morgensonne: Am 21. Dezember kommt sie um 8.25 Uhr.",
      "Sie suchen das Ufer zu niedrigeren Werten als Orta: 1.350–1.950 €/m² am See.",
    ],
    no: [
      "Sie brauchen die Bahn: Am Westufer gibt es keine, Orta ist 19 Min. mit dem Auto entfernt.",
      "Sie wollen Nachmittagssonne im Winter: Sie geht um 15.08 Uhr.",
      "Sie brauchen weiterführende Schulen und Geschäfte im Ort: Die sind in den Nachbargemeinden.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Pella?", r: "Am Seeufer bewertet die OMI Wohnungen mit 1.350–1.950 €/m² und Villen mit 1.550–2.200 €/m² (2. Halbjahr 2025). Am Ortsrand liegen Wohnungen bei 1.150–1.700 €/m². Das sind geschätzte Richtwerte, keine unterschriebenen Preise." },
    { d: "Fährt von Pella ein Schiff nach Orta?", r: "Ja, von März bis Oktober. Im Oktober 2026 fährt die Runde über Pella, die Insel und Orta alle 35–45 Minuten, erste Fahrt ab Pella um 9.45 Uhr. Von November bis Februar ist kein Liniendienst ausgewiesen: Mit dem Auto ist Orta 19 Min. entfernt." },
    { d: "Gibt es einen Bahnhof bei Pella?", r: "Nicht am Westufer. Die nächsten sind Pettenasco und Orta-Miasino am anderen Ufer, an der Strecke Novara–Domodossola. Nach Mailand steigt man in Novara um." },
    { d: "Wie viel Wintersonne hat Pella?", r: "Am 21. Dezember 6 h 44 min direkte Sonne, von 8.25 bis 15.08 Uhr, nach unserer Geländeberechnung. Das ist fast so viel wie in Orta, aber zum Morgen hin verschoben. Gebäude und Bäume sind nicht berücksichtigt." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Pella: življenje na zahodni obali jezera Orta, cene",
  descrizione: "Pella, 876 prebivalcev nasproti Orte in otoka, 24 m nad jezerom: vrednosti OMI 2025, jutranje sonce, ladje, brez železnice, 77 min od Milana.",
  frase: "Pella je kraj na zahodni obali, ki čez vodo gleda na Orto in otok: 876 prebivalcev, 24 m nad jezerom, 77 min od Milana, od marca do oktobra z ladjo v Orto.",
  vivere: [
    {
      titolo: "Nasproti Orte, z druge obale",
      testo: "Pella leži na zahodni obali, nasproti kraja Orta in otoka San Giulio. Središče je na 314 m, 24 m nad jezerom in približno 210 m od obale. Občina ima 876 prebivalcev (ISTAT, 1. januar 2025; ocena 2026: 874) in obsega tudi Ronco, severneje ob obali, ter zaselek Alzo, kjer je osnovna šola.\n\nObala gleda na vzhod: jutranje sonce, pogled na Orto in pozimi zgoden zahod za grebenom. Kopalno mesto »Rialaccio«, pripisano občini, je bilo v sezoni 2024 ocenjeno kot »dobro« (podatki EEA)."
    },
    {
      titolo: "Sonce pride zgodaj in zgodaj odide",
      testo: "21. decembra naš izračun Pelli da 6 h 44 min neposrednega sonca, od 8.25 do 15.08: sonce pride 45 minut prej kot na trg Piazza Motta in odide 40 minut prej. 21. junija je sonca 13 h 42 min. Izračun upošteva le relief, ne stavb ne dreves.\n\nPo podatkih ISPRA 8,6 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov (3,1 % površine), 5,5 % pa na območjih srednje poplavne nevarnosti, predvsem ob obali."
    },
    {
      titolo: "Storitve: v kraju jih je malo",
      testo: "Edina državna šola v občini je osnovna šola v Alzu; vrtec in srednje šole so v sosednjih občinah, na primer v San Maurizio d'Opaglio (6 min). Najbližja urgenca I. stopnje v pokrajini Novara je v Borgomaneru; Omegna ima točko prve pomoči, ne urgence.\n\nNa zahodni obali ni železnice. Najbližji postaji sta Pettenasco in Orta-Miasino, približno 3 km zračne črte, vendar na drugi obali: z avtom je Orta 19 min stran."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) so ob obali, v coni B2, običajna stanovanja ovrednotena na 1.350–1.950 €/m², vile na 1.550–2.200 €/m². V starem jedru (B1) so stanovanja po 1.200–1.750 €/m², na stanovanjskem obrobju (D1) po 1.150–1.700 €/m². Ronco ima lastno cono (E1), stanovanja po 1.350–2.000 €/m². Glede na 2. polletje 2024 so se stanovanja ob jezeru v sredini razpona podražila za 4,8 %.\n\nTo so ocenjene vrednosti, ne kupnine: razponi, ki jih davčna uprava oceni po coni in vrsti, na bruto površino in pri običajnem stanju. Obala v Pelli je ovrednotena približno za tretjino niže od nasproti ležeče Orte."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 77 min (88 km) od milanske stolnice, 57 min (48 km) od letališča Malpensa T1, 85 min od Lugana. Cesta je pokrajinska cesta zahodne obale; od Pelle do Gozzana je 13 min.\n\nPristan je 300 m stran. Od 4. do 31. oktobra 2026 krožna linija Orta–otok–Pella–San Filiberto–Lagna odpelje vsakih 35–45 minut; prva vožnja iz Pelle je ob 9.45. Redna linija vozi od marca do oktobra; od novembra do februarja ni navedena."
    },
  ],
  perChi: {
    si: [
      "Orto in otok želite gledati, ne živeti sredi njiju.",
      "Všeč vam je jutranje sonce: 21. decembra pride ob 8.25.",
      "Iščete obalo po nižjih vrednostih kot v Orti: 1.350–1.950 €/m² ob jezeru.",
    ],
    no: [
      "Potrebujete vlak: na zahodni obali ga ni, Orta je 19 min vožnje stran.",
      "Želite popoldansko zimsko sonce: odide ob 15.08.",
      "Potrebujete srednje šole in trgovine v kraju: te so v sosednjih občinah.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Pelli?", r: "Ob obali OMI vrednoti običajna stanovanja na 1.350–1.950 €/m², vile na 1.550–2.200 €/m² (2. polletje 2025). Na stanovanjskem obrobju so stanovanja po 1.150–1.700 €/m². To so ocenjene vrednosti, ne podpisane cene." },
    { d: "Ali iz Pelle v Orto vozi ladja?", r: "Da, od marca do oktobra. Oktobra 2026 krožna linija prek Pelle, otoka in Orte odpelje vsakih 35–45 minut, prva vožnja iz Pelle je ob 9.45. Od novembra do februarja redna linija ni navedena: z avtom je Orta 19 min stran." },
    { d: "Ali je blizu Pelle železniška postaja?", r: "Na zahodni obali ne. Najbližji sta Pettenasco in Orta-Miasino na drugi obali, na progi Novara–Domodossola. Za Milano prestopite v Novari." },
    { d: "Koliko zimskega sonca ima Pella?", r: "21. decembra 6 h 44 min neposrednega sonca, od 8.25 do 15.08, po našem izračunu na reliefu. To je skoraj toliko kot v Orti, a premaknjeno proti jutru. Stavbe in drevesa niso upoštevani." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
