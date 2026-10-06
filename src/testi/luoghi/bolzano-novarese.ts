import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Bolzano Novarese", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità e superficie, comune di Bolzano Novarese", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3022", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Bolzano Novarese (aggregato a Gozzano dal 1928 al 1947)", url: "https://it.wikipedia.org/wiki/Bolzano_Novarese", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Ferrovia Domodossola-Novara (stazione di Bolzano Novarese)", url: "https://it.wikipedia.org/wiki/Ferrovia_Domodossola-Novara", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – Orario invernale 2026", url: "https://www.navigazionelagodorta.it/userdata/documenti/Orario_invernale_2026.pdf", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Bolzano Novarese: vivere a sud del lago d'Orta, prezzi e treni",
  descrizione: "Bolzano Novarese, 1.128 abitanti a 409 m tra Gozzano e Ameno: stazione in paese, 69 min da Milano, quotazioni OMI 2025 in rialzo, 7 h 45 min di sole a dicembre.",
  frase: "Bolzano Novarese è il piccolo comune tra Gozzano e Ameno, con la stazione in paese: 1.128 abitanti, 119 m sopra il lago, 69 min da Milano e 48 da Malpensa.",
  vivere: [
    {
      titolo: "Un comune piccolo, tra due più grandi",
      testo: "Bolzano Novarese è il comune più piccolo dell'atlante per superficie, 3,3 km², a sud del lago tra Gozzano e Ameno. Secondo Wikipedia dal 1928 al 1947 fu aggregato a Gozzano. Ha 1.128 residenti (ISTAT, 1° gennaio 2025; stima 2026: 1.110).\n\nIl punto centrale sta a 409 m, 119 m sopra il lago e a 1,3 km in linea d'aria dalla riva. Il lago non è sotto casa: per l'acqua e i battelli si va verso Gozzano o Lagna."
    },
    {
      titolo: "Scuole per i più piccoli, il resto a 5 minuti",
      testo: "In comune ci sono scuola dell'infanzia e primaria statali. Medie e liceo sono a Gozzano, a 5 min d'auto. Per la sanità il riferimento è il DEA di I livello dell'ospedale di Borgomanero, a sud; Omegna, a nord, ha solo un Punto di Primo Intervento.\n\nPer ISPRA nessun residente vive in aree a pericolosità da frana elevata o molto elevata. Il 4,4% del territorio è a pericolosità idraulica, con lo 0,8% dei residenti, lungo i corsi d'acqua."
    },
    {
      titolo: "Sole buono tutto l'anno",
      testo: "Il 21 dicembre il nostro calcolo dà a Bolzano Novarese 7 h 45 min di sole diretto, dalle 08:39 alle 16:23: 66 minuti più di piazza Motta. Il 21 giugno sono 14 h 35 min. Il paese sta su un terreno aperto, con l'orizzonte basso in tutte le direzioni. Il calcolo considera solo il rilievo, senza edifici né alberi."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) nella zona periferica residenziale D1 le abitazioni civili sono quotate 1.000–1.500 €/m² e ville e villini 1.100–1.600 €/m². Nel vecchio nucleo (B1) le civili stanno a 970–1.450 €/m² e le ville a 1.050–1.550 €/m². Sul 2° semestre 2024 il centro dell'intervallo delle civili del vecchio nucleo è salito del 7,6%: è il rialzo più forte delle abitazioni civili nell'atlante.\n\nSono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale. Le ville sono quotate come nella zona più cara di Gozzano."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 69 min (82 km) da Milano Duomo, 48 min (42 km) da Malpensa T1, 44 min da Novara, 76 da Lugano. La stazione di Bolzano Novarese, sulla linea Novara–Domodossola, è a 500 m in linea d'aria; i treni sono regionali e per Milano si cambia a Novara.\n\nL'imbarcadero più vicino in OpenStreetMap è Lagna, a 4,8 km in linea d'aria; i battelli di linea viaggiano da marzo a ottobre. Gozzano è a 5 min, Ameno e Miasino a 6, Orta a 9."
    },
  ],
  perChi: {
    si: [
      "Volete la stazione in paese e Milano a 69 min d'auto.",
      "Cercate un paese tranquillo con 7 h 45 min di sole il 21 dicembre.",
      "Vi bastano infanzia e primaria in paese, con Gozzano a 5 min.",
    ],
    no: [
      "Volete il lago sotto casa: la riva è a 1,3 km.",
      "Cercate un paese con negozi e servizi propri: si va a Gozzano.",
      "Cercate quotazioni ferme: qui le civili sono salite del 7,6% in un anno.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Bolzano Novarese?", r: "L'OMI quota le abitazioni civili 970–1.500 €/m² e le ville 1.050–1.600 €/m² (2° semestre 2025), a seconda della zona. Sul 2024 le civili del vecchio nucleo sono salite del 7,6%. Sono intervalli stimati, non prezzi firmati." },
    { d: "Bolzano Novarese è sul lago?", r: "Non direttamente: il centro è 119 m sopra il lago e a 1,3 km dalla riva, a sud tra Gozzano e Ameno. L'imbarcadero più vicino è Lagna, a 4,8 km in linea d'aria." },
    { d: "C'è la stazione?", r: "Sì, a 500 m dal centro, sulla linea Novara–Domodossola, con soli treni regionali. Per Milano si cambia a Novara. Gli orari vanno verificati su Trenitalia." },
    { d: "Che scuole ci sono?", r: "Scuola dell'infanzia e primaria statali. Medie e liceo scientifico sono a Gozzano, a 5 min d'auto. Le paritarie non sono nel dato del Ministero." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Bolzano Novarese: living south of Lake Orta, prices, trains",
  descrizione: "Bolzano Novarese, 1,128 residents at 409 m between Gozzano and Ameno: station in the village, 69 min from Milan, rising OMI values, 7 h 45 min of December sun.",
  frase: "Bolzano Novarese is the small municipality between Gozzano and Ameno, with a station in the village: 1,128 residents, 119 m above the lake, 69 min from Milan and 48 from Malpensa.",
  vivere: [
    {
      titolo: "A small municipality between two larger ones",
      testo: "Bolzano Novarese is the smallest municipality in the atlas by area, 3.3 km², south of the lake between Gozzano and Ameno. According to Wikipedia it was merged into Gozzano from 1928 to 1947. It has 1,128 residents (ISTAT, 1 January 2025; 2026 estimate: 1,110).\n\nIts centre is at 409 m, 119 m above the lake and 1.3 km from the shore as the crow flies. The lake is not at your door: for the water and the boats you head towards Gozzano or Lagna."
    },
    {
      titolo: "Schools for the youngest, the rest 5 minutes away",
      testo: "The municipality has a state nursery and primary school. Lower secondary and liceo are in Gozzano, 5 min by car. For healthcare the reference is the level-I emergency department at Borgomanero hospital, to the south; Omegna, to the north, has only a first-aid point.\n\nAccording to ISPRA no residents live in areas of high or very high landslide hazard. 4.4% of the territory has flood hazard, with 0.8% of residents, along watercourses."
    },
    {
      titolo: "Good sun all year",
      testo: "On 21 December our calculation gives Bolzano Novarese 7 h 45 min of direct sun, from 8:39 am to 4:23 pm: 66 minutes more than Piazza Motta. On 21 June it is 14 h 35 min. The village sits on open ground, with a low horizon in every direction. The calculation covers terrain only, without buildings or trees."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), in the residential outskirts zone D1 standard homes are valued at €1,000–1,500/m² and villas at €1,100–1,600/m². In the old core (B1) standard homes are at €970–1,450/m² and villas at €1,050–1,550/m². Against the 2nd half of 2024 the midpoint for old-core standard homes rose by 7.6%: the largest rise for standard homes in the atlas.\n\nThese are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition. Villas are valued the same as in Gozzano's highest zone."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 69 min (82 km) from Milan's Duomo, 48 min (42 km) from Malpensa T1, 44 min from Novara, 76 from Lugano. Bolzano Novarese station, on the Novara–Domodossola line, is 500 m away as the crow flies; trains are regional and for Milan you change at Novara.\n\nThe nearest boat landing in OpenStreetMap is Lagna, 4.8 km away as the crow flies; scheduled boats run from March to October. Gozzano is 5 min away, Ameno and Miasino 6, Orta 9."
    },
  ],
  perChi: {
    si: [
      "You want a station in the village and Milan 69 min away by car.",
      "You want a quiet village with 7 h 45 min of sun on 21 December.",
      "Nursery and primary in the village are enough, with Gozzano 5 min away.",
    ],
    no: [
      "You want the lake at your door: the shore is 1.3 km away.",
      "You want a village with its own shops and services: you go to Gozzano.",
      "You want stable values: here standard homes rose by 7.6% in a year.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Bolzano Novarese?", r: "OMI values standard homes at €970–1,500/m² and villas at €1,050–1,600/m² (2nd half of 2025), depending on the zone. Against 2024, old-core standard homes rose by 7.6%. These are estimated ranges, not signed prices." },
    { d: "Is Bolzano Novarese on the lake?", r: "Not directly: the centre is 119 m above the lake and 1.3 km from the shore, to the south between Gozzano and Ameno. The nearest boat landing is Lagna, 4.8 km away as the crow flies." },
    { d: "Is there a station?", r: "Yes, 500 m from the centre, on the Novara–Domodossola line, with regional trains only. For Milan you change at Novara. Check timetables with Trenitalia." },
    { d: "Which schools are there?", r: "A state nursery and primary school. Lower secondary and the science liceo are in Gozzano, 5 min by car. Private (paritarie) schools are not in the Ministry data." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Bolzano Novarese: Leben südlich des Ortasees, Preise, Züge",
  descrizione: "Bolzano Novarese, 1.128 Einwohner auf 409 m zwischen Gozzano und Ameno: Bahnhof im Ort, 69 Min. von Mailand, steigende OMI-Werte 2025, 7 h 45 min Dezembersonne.",
  frase: "Bolzano Novarese ist die kleine Gemeinde zwischen Gozzano und Ameno, mit Bahnhof im Ort: 1.128 Einwohner, 119 m über dem See, 69 Min. von Mailand und 48 von Malpensa.",
  vivere: [
    {
      titolo: "Eine kleine Gemeinde zwischen zwei größeren",
      testo: "Bolzano Novarese ist mit 3,3 km² die flächenmäßig kleinste Gemeinde des Atlas, südlich des Sees zwischen Gozzano und Ameno. Laut Wikipedia war sie von 1928 bis 1947 mit Gozzano zusammengelegt. Sie hat 1.128 Einwohner (ISTAT, 1. Januar 2025; Schätzung 2026: 1.110).\n\nDas Zentrum liegt auf 409 m, 119 m über dem See und 1,3 km Luftlinie vom Ufer. Der See liegt nicht vor der Tür: Für das Wasser und die Schiffe fährt man Richtung Gozzano oder Lagna."
    },
    {
      titolo: "Schulen für die Kleinen, der Rest in 5 Minuten",
      testo: "In der Gemeinde gibt es einen staatlichen Kindergarten und eine Grundschule. Mittelschule und Gymnasium sind in Gozzano, 5 Autominuten entfernt. Für die Gesundheit ist die Notaufnahme der Stufe I im Krankenhaus Borgomanero im Süden zuständig; Omegna im Norden hat nur eine Erste-Hilfe-Stelle.\n\nLaut ISPRA lebt kein Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr. 4,4 % des Gebiets haben Hochwassergefahr, mit 0,8 % der Einwohner, entlang der Bäche."
    },
    {
      titolo: "Gute Sonne das ganze Jahr",
      testo: "Am 21. Dezember ergibt unsere Berechnung für Bolzano Novarese 7 h 45 min direkte Sonne, von 8.39 bis 16.23 Uhr: 66 Minuten mehr als an der Piazza Motta. Am 21. Juni sind es 14 h 35 min. Der Ort liegt auf offenem Gelände mit niedrigem Horizont in alle Richtungen. Berechnet ist nur das Gelände, ohne Gebäude und Bäume."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) werden in der Wohnzone am Ortsrand D1 Wohnungen mit 1.000–1.500 €/m² und Villen mit 1.100–1.600 €/m² bewertet. Im alten Kern (B1) liegen Wohnungen bei 970–1.450 €/m² und Villen bei 1.050–1.550 €/m². Gegenüber dem 2. Halbjahr 2024 stieg die Mitte der Spanne für Wohnungen im alten Kern um 7,6 %: der stärkste Anstieg für Wohnungen im Atlas.\n\nDas sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand. Villen sind gleich bewertet wie in der teuersten Zone von Gozzano."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 69 Min. (82 km) vom Mailänder Dom, 48 Min. (42 km) von Malpensa T1, 44 Min. von Novara, 76 von Lugano. Der Bahnhof Bolzano Novarese an der Strecke Novara–Domodossola liegt 500 m Luftlinie entfernt; es fahren Regionalzüge, nach Mailand steigt man in Novara um.\n\nDie nächste Anlegestelle laut OpenStreetMap ist Lagna, 4,8 km Luftlinie entfernt; Linienschiffe fahren von März bis Oktober. Gozzano ist 5 Min. entfernt, Ameno und Miasino 6, Orta 9."
    },
  ],
  perChi: {
    si: [
      "Sie wollen einen Bahnhof im Ort und Mailand in 69 Autominuten.",
      "Sie suchen einen ruhigen Ort mit 7 h 45 min Sonne am 21. Dezember.",
      "Ihnen reichen Kindergarten und Grundschule im Ort, mit Gozzano in 5 Min.",
    ],
    no: [
      "Sie wollen den See vor der Tür: Das Ufer ist 1,3 km entfernt.",
      "Sie wollen einen Ort mit eigenen Geschäften: Dafür fährt man nach Gozzano.",
      "Sie suchen stabile Werte: Hier stiegen Wohnungen in einem Jahr um 7,6 %.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Bolzano Novarese?", r: "Die OMI bewertet Wohnungen je nach Zone mit 970–1.500 €/m² und Villen mit 1.050–1.600 €/m² (2. Halbjahr 2025). Gegenüber 2024 stiegen Wohnungen im alten Kern um 7,6 %. Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Liegt Bolzano Novarese am See?", r: "Nicht direkt: Das Zentrum liegt 119 m über dem See und 1,3 km vom Ufer, im Süden zwischen Gozzano und Ameno. Die nächste Anlegestelle ist Lagna, 4,8 km Luftlinie entfernt." },
    { d: "Gibt es einen Bahnhof?", r: "Ja, 500 m vom Zentrum, an der Strecke Novara–Domodossola, nur mit Regionalzügen. Nach Mailand steigt man in Novara um. Prüfen Sie die Fahrpläne bei Trenitalia." },
    { d: "Welche Schulen gibt es?", r: "Einen staatlichen Kindergarten und eine Grundschule. Mittelschule und naturwissenschaftliches Gymnasium sind in Gozzano, 5 Autominuten entfernt. Private Schulen sind in den Daten des Ministeriums nicht enthalten." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Bolzano Novarese: življenje južno od jezera Orta, cene, vlaki",
  descrizione: "Bolzano Novarese, 1.128 prebivalcev na 409 m med Gozzanom in Amenom; postaja v kraju, 69 min od Milana, rastoče vrednosti OMI, 7 h 45 min sonca decembra.",
  frase: "Bolzano Novarese je majhna občina med Gozzanom in Amenom, s postajo v kraju: 1.128 prebivalcev, 119 m nad jezerom, 69 min od Milana in 48 od letališča Malpensa.",
  vivere: [
    {
      titolo: "Majhna občina med dvema večjima",
      testo: "Bolzano Novarese je s 3,3 km² po površini najmanjša občina atlasa, južno od jezera med Gozzanom in Amenom. Po navedbah Wikipedije je bila od leta 1928 do 1947 združena z Gozzanom. Ima 1.128 prebivalcev (ISTAT, 1. januar 2025; ocena 2026: 1.110).\n\nSredišče je na 409 m, 119 m nad jezerom in 1,3 km zračne črte od obale. Jezero ni pred vrati: za vodo in ladje se odpravite proti Gozzanu ali Lagni."
    },
    {
      titolo: "Šole za najmlajše, drugo na 5 minut",
      testo: "V občini sta državni vrtec in osnovna šola. Nižja srednja šola in gimnazija sta v Gozzanu, 5 min vožnje. Za zdravstvo je pristojna urgenca I. stopnje bolnišnice v Borgomaneru na jugu; Omegna na severu ima le točko prve pomoči.\n\nPo podatkih ISPRA noben prebivalec ne živi na območjih z visoko ali zelo visoko nevarnostjo plazov. 4,4 % ozemlja ima poplavno nevarnost, z 0,8 % prebivalcev, ob vodotokih."
    },
    {
      titolo: "Dobro sonce vse leto",
      testo: "21. decembra naš izračun Bolzanu Novarese da 7 h 45 min neposrednega sonca, od 8.39 do 16.23: 66 minut več kot na trgu Piazza Motta. 21. junija je sonca 14 h 35 min. Kraj leži na odprtem terenu z nizkim obzorjem na vse strani. Izračun upošteva le teren, brez stavb in dreves."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) so v stanovanjski coni na obrobju D1 običajna stanovanja ovrednotena na 1.000–1.500 €/m², vile na 1.100–1.600 €/m². V starem jedru (B1) so stanovanja po 970–1.450 €/m², vile po 1.050–1.550 €/m². Glede na 2. polletje 2024 se je sredina razpona za stanovanja v starem jedru zvišala za 7,6 %: največji porast za stanovanja v atlasu.\n\nTo so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju. Vile so ovrednotene enako kot v najdražji coni Gozzana."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 69 min (82 km) od milanske stolnice, 48 min (42 km) od letališča Malpensa T1, 44 min od Novare, 76 od Lugana. Postaja Bolzano Novarese na progi Novara–Domodossola je 500 m zračne črte stran; vozijo regionalni vlaki, za Milano prestopite v Novari.\n\nNajbližji pristan v OpenStreetMap je Lagna, 4,8 km zračne črte stran; redne ladje vozijo od marca do oktobra. Gozzano je 5 min stran, Ameno in Miasino 6, Orta 9."
    },
  ],
  perChi: {
    si: [
      "Želite postajo v kraju in Milano 69 min vožnje stran.",
      "Iščete miren kraj s 7 h 45 min sonca 21. decembra.",
      "Zadostujeta vam vrtec in osnovna šola v kraju, z Gozzanom na 5 min.",
    ],
    no: [
      "Želite jezero pred vrati: obala je 1,3 km stran.",
      "Želite kraj z lastnimi trgovinami: zanje se vozite v Gozzano.",
      "Iščete stabilne vrednosti: tu so se stanovanja v enem letu podražila za 7,6 %.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Bolzanu Novarese?", r: "OMI vrednoti običajna stanovanja glede na cono na 970–1.500 €/m², vile na 1.050–1.600 €/m² (2. polletje 2025). Glede na leto 2024 so se stanovanja v starem jedru podražila za 7,6 %. To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali Bolzano Novarese leži ob jezeru?", r: "Ne neposredno: središče je 119 m nad jezerom in 1,3 km od obale, na jugu med Gozzanom in Amenom. Najbližji pristan je Lagna, 4,8 km zračne črte stran." },
    { d: "Ali je v kraju postaja?", r: "Da, 500 m od središča, na progi Novara–Domodossola, le z regionalnimi vlaki. Za Milano prestopite v Novari. Vozni red preverite pri Trenitalii." },
    { d: "Katere šole so v kraju?", r: "Državni vrtec in osnovna šola. Nižja srednja šola in naravoslovna gimnazija sta v Gozzanu, 5 min vožnje. Zasebne šole niso v podatkih ministrstva." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
