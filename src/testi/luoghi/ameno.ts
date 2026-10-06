import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Ameno", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Ameno", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3002", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Fondazione Antonio e Carmela Calderara", url: "https://www.fondazionecalderara.it/", data: "2026-10-06" },
  { titolo: "Abbonamento Musei – Fondazione Antonio e Carmela Calderara (327 opere)", url: "https://abbonamentomusei.it/en/spazio_espositivo/fondazione-antonio-e-carmela-calderara/", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Ameno (Casa Calderara, Antonio Calderara 1903–1978)", url: "https://it.wikipedia.org/wiki/Ameno", data: "2026-10-06" },
  { titolo: "Trenitalia, motore orari lefrecce.it – campione del 7 e 10 ottobre 2026", url: "https://www.lefrecce.it/", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Ameno: vivere sulle colline del lago d'Orta, prezzi e sole",
  descrizione: "Ameno, 874 abitanti a 531 m sopra il lago d'Orta: il sole d'inverno più lungo dell'atlante, quotazioni OMI 2025, Fondazione Calderara, 74 min da Milano.",
  frase: "Ameno è il paese di collina con più sole d'inverno dei sedici luoghi: 8 h 04 min il 21 dicembre, a 531 m, 241 m sopra il lago, 74 min da Milano.",
  vivere: [
    {
      titolo: "Un paese di collina sopra Orta",
      testo: "Ameno sta a mezza costa sul versante del Mottarone, a 531 m di quota e a circa 1,4 km in linea d'aria dalla riva. Il lago non è sotto casa: lo si vede dall'alto, a seconda della posizione. Il comune ha 874 residenti (ISTAT, 1° gennaio 2025; stima 2026: 866) e comprende la frazione di Vacciago, più in basso verso Orta.\n\nA Vacciago, nella casa-studio di un palazzo seicentesco, ha sede la Fondazione Antonio e Carmela Calderara: una collezione di 327 opere, 56 del pittore Antonio Calderara (1903–1978) e 271 di altri artisti europei, americani, giapponesi e cinesi."
    },
    {
      titolo: "Il sole d'inverno più lungo dell'atlante",
      testo: "Il 21 dicembre il nostro calcolo dà ad Ameno 8 h 04 min di sole diretto, dalle 08:28 alle 16:31, su 8 h 29 min possibili a orizzonte piatto: è il valore più alto dei sedici luoghi. In piazza Motta, a Orta, sono 6 h 39 min. Il 21 giugno ad Ameno sono 14 h 29 min. Il calcolo considera solo il rilievo, senza edifici né alberi.\n\nPer ISPRA i rischi da frana sono bassi: lo 0,1% dei residenti in aree a pericolosità elevata o molto elevata, sullo 0,3% della superficie. Il 4,9% del territorio è a pericolosità idraulica, con l'1,3% dei residenti: sono fasce lungo i corsi d'acqua, da controllare lotto per lotto."
    },
    {
      titolo: "Servizi: l'essenziale in paese, il resto vicino",
      testo: "In comune c'è la scuola dell'infanzia statale; per la primaria e le medie si va a Orta, a Miasino (primaria) o ad Armeno, tutti entro 9 min. Il liceo più vicino è a Gozzano, 10 min. Per la sanità il riferimento vicino è Omegna, che ha un Punto di Primo Intervento e non un pronto soccorso; il DEA di I livello è a Borgomanero.\n\nIl limite di Ameno è anche il suo carattere: niente lago sotto casa, niente imbarcadero (quello di Orta è a 3 km in linea d'aria), e per ogni commissione si prende l'auto."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) nella zona collinare residenziale D1 le abitazioni civili sono quotate 1.100–1.550 €/m² e ville e villini 1.150–1.650 €/m². Nel vecchio nucleo (B1) le civili stanno a 990–1.450 €/m², le economiche a 580–840 €/m². Sul 2° semestre 2024 le civili della zona D1 sono salite del 6,0% al centro dell'intervallo, le ville del 3,7%.\n\nLe ville di Ameno sono quotate circa la metà di quelle del lungolago di Orta. Sono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 74 min (85 km) da Milano Duomo, 54 min (45 km) da Malpensa T1, 81 min da Lugano. La stazione Orta-Miasino è a 1,8 km in linea d'aria: in un mercoledì campione ci sono 8 treni diretti per Novara e nessuno tra le 08:04 e le 13:51; per Milano si cambia a Novara.\n\nVacciago è a 3 min, Miasino a 4, Orta a 9. I battelli da Orta viaggiano da marzo a ottobre."
    },
  ],
  perChi: {
    si: [
      "Volete il massimo sole d'inverno del lago: 8 h 04 min il 21 dicembre.",
      "Cercate una villa a quotazioni di collina: 1.150–1.650 €/m².",
      "Vi piace un paese tranquillo con un museo d'arte contemporanea in frazione.",
    ],
    no: [
      "Volete l'acqua sotto casa: la riva è a 1,4 km in linea d'aria.",
      "Vi servono scuola primaria e medie in paese.",
      "Non volete dipendere dall'auto.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa ad Ameno?", r: "L'OMI quota nella zona collinare D1 le abitazioni civili 1.100–1.550 €/m² e le ville 1.150–1.650 €/m² (2° semestre 2025). Nel vecchio nucleo le civili sono a 990–1.450 €/m². Sono intervalli stimati, non prezzi firmati." },
    { d: "È vero che ad Ameno c'è più sole d'inverno?", r: "Sì, secondo il nostro calcolo sul rilievo: il 21 dicembre 8 h 04 min di sole diretto, il valore più alto tra i sedici luoghi, contro 6 h 39 min a Orta. Il paese sta in alto e l'orizzonte intorno è basso. Edifici e alberi possono togliere ore alla singola casa." },
    { d: "Ameno ha vista lago?", r: "Il paese sta 241 m sopra il lago, a circa 1,4 km dalla riva. Da molte posizioni il lago si vede dall'alto, da altre no: dipende da quota, esposizione e alberi. Va verificato casa per casa." },
    { d: "Che scuole ci sono ad Ameno?", r: "Solo la scuola dell'infanzia statale. La primaria più vicina è a Miasino o a Orta, le medie a Orta o ad Armeno, entro 9 min d'auto. Il liceo più vicino è a Gozzano." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Ameno: living in the Lake Orta hills, prices and sun",
  descrizione: "Ameno, 874 residents at 531 m above Lake Orta: the longest winter sun in the atlas, OMI values 2025, the Calderara Foundation, 74 min from Milan.",
  frase: "Ameno is the hill village with the most winter sun of the sixteen places: 8 h 04 min on 21 December, at 531 m, 241 m above the lake, 74 min from Milan.",
  vivere: [
    {
      titolo: "A hill village above Orta",
      testo: "Ameno lies halfway up the slope of Mottarone, at 531 m and about 1.4 km from the shore as the crow flies. The lake is not at your door: you see it from above, depending on the spot. The municipality has 874 residents (ISTAT, 1 January 2025; 2026 estimate: 866) and includes the hamlet of Vacciago, lower down towards Orta.\n\nIn Vacciago, in the house-studio of a 17th-century palazzo, is the Antonio and Carmela Calderara Foundation: a collection of 327 works, 56 by the painter Antonio Calderara (1903–1978) and 271 by other European, American, Japanese and Chinese artists."
    },
    {
      titolo: "The longest winter sun in the atlas",
      testo: "On 21 December our calculation gives Ameno 8 h 04 min of direct sun, from 8:28 am to 4:31 pm, out of 8 h 29 min possible with a flat horizon: the highest figure of the sixteen places. On Piazza Motta in Orta it is 6 h 39 min. On 21 June Ameno gets 14 h 29 min. The calculation covers terrain only, without buildings or trees.\n\nAccording to ISPRA landslide hazard is low: 0.1% of residents in high or very high hazard areas, on 0.3% of the area. 4.9% of the territory has flood hazard, with 1.3% of residents: these are strips along watercourses, to be checked plot by plot."
    },
    {
      titolo: "Services: the basics in the village, the rest nearby",
      testo: "The municipality has a state nursery school; for primary and lower secondary you go to Orta, Miasino (primary) or Armeno, all within 9 min. The nearest upper secondary liceo is in Gozzano, 10 min. For healthcare the nearby reference is Omegna, which has a first-aid point and not an emergency department; the level-I emergency department is in Borgomanero.\n\nAmeno's limit is also its character: no lake at the door, no boat landing (Orta's is 3 km away as the crow flies), and every errand means taking the car."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), in the residential hill zone D1 standard homes are valued at €1,100–1,550/m² and villas at €1,150–1,650/m². In the old core (B1) standard homes are at €990–1,450/m², economy homes at €580–840/m². Against the 2nd half of 2024, standard homes in zone D1 rose by 6.0% at the midpoint, villas by 3.7%.\n\nAmeno's villas are valued at about half those on Orta's lakefront. These are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 74 min (85 km) from Milan's Duomo, 54 min (45 km) from Malpensa T1, 81 min from Lugano. Orta-Miasino station is 1.8 km away as the crow flies: on a sample Wednesday there are 8 direct trains to Novara and none between 8:04 am and 1:51 pm; for Milan you change at Novara.\n\nVacciago is 3 min away, Miasino 4, Orta 9. Boats from Orta run from March to October."
    },
  ],
  perChi: {
    si: [
      "You want the most winter sun on the lake: 8 h 04 min on 21 December.",
      "You want a villa at hillside values: €1,150–1,650/m².",
      "You like a quiet village with a contemporary art museum in its hamlet.",
    ],
    no: [
      "You want the water at your door: the shore is 1.4 km away as the crow flies.",
      "You need a primary and lower secondary school in the village.",
      "You do not want to depend on the car.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Ameno?", r: "In the hill zone D1 OMI values standard homes at €1,100–1,550/m² and villas at €1,150–1,650/m² (2nd half of 2025). In the old core standard homes are at €990–1,450/m². These are estimated ranges, not signed prices." },
    { d: "Does Ameno really get more winter sun?", r: "Yes, according to our terrain calculation: on 21 December 8 h 04 min of direct sun, the highest among the sixteen places, against 6 h 39 min in Orta. The village is high and the horizon around it is low. Buildings and trees can take hours off a given house." },
    { d: "Does Ameno have a lake view?", r: "The village is 241 m above the lake, about 1.4 km from the shore. From many spots you see the lake from above, from others you do not: it depends on height, aspect and trees. Check house by house." },
    { d: "Which schools are in Ameno?", r: "Only the state nursery school. The nearest primary is in Miasino or Orta, lower secondary in Orta or Armeno, within 9 min by car. The nearest liceo is in Gozzano." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Ameno: Leben in den Hügeln am Ortasee, Preise und Sonne",
  descrizione: "Ameno, 874 Einwohner auf 531 m über dem Ortasee: die längste Wintersonne im Atlas, OMI-Werte 2025, Fondazione Calderara, 74 Min. von Mailand.",
  frase: "Ameno ist das Hügeldorf mit der meisten Wintersonne der sechzehn Orte: 8 h 04 min am 21. Dezember, auf 531 m, 241 m über dem See, 74 Min. von Mailand.",
  vivere: [
    {
      titolo: "Ein Hügeldorf über Orta",
      testo: "Ameno liegt auf halber Höhe am Hang des Mottarone, auf 531 m und etwa 1,4 km Luftlinie vom Ufer. Der See liegt nicht vor der Tür: Man sieht ihn von oben, je nach Lage. Die Gemeinde hat 874 Einwohner (ISTAT, 1. Januar 2025; Schätzung 2026: 866) und umfasst den Ortsteil Vacciago, weiter unten Richtung Orta.\n\nIn Vacciago, im Wohnatelier eines Palazzo aus dem 17. Jahrhundert, sitzt die Fondazione Antonio e Carmela Calderara: eine Sammlung von 327 Werken, 56 vom Maler Antonio Calderara (1903–1978) und 271 von anderen europäischen, amerikanischen, japanischen und chinesischen Künstlern."
    },
    {
      titolo: "Die längste Wintersonne im Atlas",
      testo: "Am 21. Dezember ergibt unsere Berechnung für Ameno 8 h 04 min direkte Sonne, von 8.28 bis 16.31 Uhr, von 8 h 29 min bei flachem Horizont: der höchste Wert der sechzehn Orte. An der Piazza Motta in Orta sind es 6 h 39 min. Am 21. Juni hat Ameno 14 h 29 min. Berechnet ist nur das Gelände, ohne Gebäude und Bäume.\n\nLaut ISPRA ist die Rutschungsgefahr gering: 0,1 % der Einwohner in Gebieten hoher oder sehr hoher Gefahr, auf 0,3 % der Fläche. 4,9 % des Gebiets haben Hochwassergefahr, mit 1,3 % der Einwohner: Streifen entlang der Bäche, die man Grundstück für Grundstück prüft."
    },
    {
      titolo: "Versorgung: das Nötigste im Ort, der Rest in der Nähe",
      testo: "In der Gemeinde gibt es einen staatlichen Kindergarten; zur Grund- und Mittelschule fährt man nach Orta, Miasino (Grundschule) oder Armeno, alles innerhalb von 9 Min. Das nächste Gymnasium ist in Gozzano, 10 Min. Das nahe Krankenhaus ist Omegna, mit einer Erste-Hilfe-Stelle und keiner Notaufnahme; die Notaufnahme der Stufe I ist in Borgomanero.\n\nDie Grenze von Ameno ist auch sein Charakter: kein See vor der Tür, keine Anlegestelle (die von Orta ist 3 km Luftlinie entfernt), und für jede Besorgung nimmt man das Auto."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) werden in der Hangwohnzone D1 Wohnungen mit 1.100–1.550 €/m² und Villen mit 1.150–1.650 €/m² bewertet. Im alten Kern (B1) liegen Wohnungen bei 990–1.450 €/m², einfache Wohnungen bei 580–840 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen in Zone D1 um 6,0 % in der Mitte der Spanne, Villen um 3,7 %.\n\nDie Villen von Ameno liegen bei etwa der Hälfte der Werte am Ufer von Orta. Das sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 74 Min. (85 km) vom Mailänder Dom, 54 Min. (45 km) von Malpensa T1, 81 Min. von Lugano. Der Bahnhof Orta-Miasino liegt 1,8 km Luftlinie entfernt: An einem Stichproben-Mittwoch fahren 8 direkte Züge nach Novara, zwischen 8.04 und 13.51 Uhr keiner; nach Mailand steigt man in Novara um.\n\nVacciago ist 3 Min. entfernt, Miasino 4, Orta 9. Die Schiffe ab Orta fahren von März bis Oktober."
    },
  ],
  perChi: {
    si: [
      "Sie wollen die meiste Wintersonne am See: 8 h 04 min am 21. Dezember.",
      "Sie suchen eine Villa zu Hügelwerten: 1.150–1.650 €/m².",
      "Sie mögen ein ruhiges Dorf mit einem Museum für zeitgenössische Kunst im Ortsteil.",
    ],
    no: [
      "Sie wollen das Wasser vor der Tür: Das Ufer ist 1,4 km Luftlinie entfernt.",
      "Sie brauchen Grund- und Mittelschule im Ort.",
      "Sie wollen nicht vom Auto abhängen.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Ameno?", r: "In der Hangzone D1 bewertet die OMI Wohnungen mit 1.100–1.550 €/m² und Villen mit 1.150–1.650 €/m² (2. Halbjahr 2025). Im alten Kern liegen Wohnungen bei 990–1.450 €/m². Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Hat Ameno wirklich mehr Wintersonne?", r: "Ja, nach unserer Geländeberechnung: am 21. Dezember 8 h 04 min direkte Sonne, der höchste Wert der sechzehn Orte, gegenüber 6 h 39 min in Orta. Der Ort liegt hoch, der Horizont ringsum ist niedrig. Gebäude und Bäume können einem Haus Stunden nehmen." },
    { d: "Hat Ameno Seeblick?", r: "Der Ort liegt 241 m über dem See, etwa 1,4 km vom Ufer. Von vielen Stellen sieht man den See von oben, von anderen nicht: Es hängt von Höhe, Ausrichtung und Bäumen ab. Das prüft man Haus für Haus." },
    { d: "Welche Schulen gibt es in Ameno?", r: "Nur den staatlichen Kindergarten. Die nächste Grundschule ist in Miasino oder Orta, die Mittelschule in Orta oder Armeno, innerhalb von 9 Min. mit dem Auto. Das nächste Gymnasium ist in Gozzano." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Ameno: življenje na gričih ob jezeru Orta, cene in sonce",
  descrizione: "Ameno, 874 prebivalcev na 531 m nad jezerom Orta: najdaljše zimsko sonce v atlasu, vrednosti OMI 2025, fundacija Calderara, 74 min od Milana.",
  frase: "Ameno je gričevnata vas z največ zimskega sonca med šestnajstimi kraji: 8 h 04 min 21. decembra, na 531 m, 241 m nad jezerom, 74 min od Milana.",
  vivere: [
    {
      titolo: "Gričevnata vas nad Orto",
      testo: "Ameno leži na pol pobočja Mottaroneja, na 531 m in približno 1,4 km zračne črte od obale. Jezero ni pred vrati: vidite ga od zgoraj, odvisno od lege. Občina ima 874 prebivalcev (ISTAT, 1. januar 2025; ocena 2026: 866) in vključuje zaselek Vacciago, niže proti Orti.\n\nV Vacciagu, v hiši-ateljeju v palači iz 17. stoletja, ima sedež fundacija Antonio e Carmela Calderara: zbirka 327 del, 56 slikarja Antonia Calderare (1903–1978) in 271 drugih evropskih, ameriških, japonskih in kitajskih umetnikov."
    },
    {
      titolo: "Najdaljše zimsko sonce v atlasu",
      testo: "21. decembra naš izračun Amenu da 8 h 04 min neposrednega sonca, od 8.28 do 16.31, od 8 h 29 min pri ravnem obzorju: največ med šestnajstimi kraji. Na trgu Piazza Motta v Orti je sonca 6 h 39 min. 21. junija ima Ameno 14 h 29 min. Izračun upošteva le teren, brez stavb in dreves.\n\nPo podatkih ISPRA je nevarnost plazov nizka: 0,1 % prebivalcev na območjih visoke ali zelo visoke nevarnosti, na 0,3 % površine. 4,9 % ozemlja ima poplavno nevarnost, z 1,3 % prebivalcev: to so pasovi ob vodotokih, ki jih preverite za vsako parcelo posebej."
    },
    {
      titolo: "Storitve: osnovno v kraju, drugo v bližini",
      testo: "V občini je državni vrtec; za osnovno in nižjo srednjo šolo se vozi v Orto, Miasino (osnovna šola) ali Armeno, vse v 9 min. Najbližja gimnazija je v Gozzanu, 10 min. Bližnja bolnišnica je v Omegni, s točko prve pomoči in brez urgence; urgenca I. stopnje je v Borgomaneru.\n\nOmejitev Amena je hkrati njegov značaj: ni jezera pred vrati, ni pristana (tisti v Orti je 3 km zračne črte stran), za vsak opravek pa potrebujete avto."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) so v gričevnati stanovanjski coni D1 običajna stanovanja ovrednotena na 1.100–1.550 €/m², vile na 1.150–1.650 €/m². V starem jedru (B1) so stanovanja po 990–1.450 €/m², skromnejša stanovanja po 580–840 €/m². Glede na 2. polletje 2024 so se stanovanja v coni D1 v sredini razpona podražila za 6,0 %, vile za 3,7 %.\n\nVile v Amenu so ovrednotene na približno polovico tistih ob obali v Orti. To so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 74 min (85 km) od milanske stolnice, 54 min (45 km) od letališča Malpensa T1, 81 min od Lugana. Postaja Orta-Miasino je 1,8 km zračne črte stran: na vzorčno sredo odpelje 8 neposrednih vlakov v Novaro, med 8.04 in 13.51 nobeden; za Milano prestopite v Novari.\n\nVacciago je 3 min stran, Miasino 4, Orta 9. Ladje iz Orte vozijo od marca do oktobra."
    },
  ],
  perChi: {
    si: [
      "Želite največ zimskega sonca ob jezeru: 8 h 04 min 21. decembra.",
      "Iščete vilo po gričevnatih vrednostih: 1.150–1.650 €/m².",
      "Všeč vam je mirna vas z muzejem sodobne umetnosti v zaselku.",
    ],
    no: [
      "Želite vodo pred vrati: obala je 1,4 km zračne črte stran.",
      "Potrebujete osnovno in nižjo srednjo šolo v kraju.",
      "Ne želite biti odvisni od avtomobila.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Amenu?", r: "V gričevnati coni D1 OMI vrednoti običajna stanovanja na 1.100–1.550 €/m², vile na 1.150–1.650 €/m² (2. polletje 2025). V starem jedru so stanovanja po 990–1.450 €/m². To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali ima Ameno res več zimskega sonca?", r: "Da, po našem izračunu na reliefu: 21. decembra 8 h 04 min neposrednega sonca, največ med šestnajstimi kraji, v Orti pa 6 h 39 min. Vas leži visoko, obzorje okoli nje je nizko. Stavbe in drevesa lahko posamezni hiši vzamejo ure." },
    { d: "Ali ima Ameno pogled na jezero?", r: "Vas leži 241 m nad jezerom, približno 1,4 km od obale. Z mnogih mest se jezero vidi od zgoraj, z drugih ne: odvisno je od višine, lege in dreves. Preverite za vsako hišo posebej." },
    { d: "Katere šole so v Amenu?", r: "Le državni vrtec. Najbližja osnovna šola je v Miasinu ali Orti, nižja srednja v Orti ali Armenu, v 9 min vožnje. Najbližja gimnazija je v Gozzanu." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
