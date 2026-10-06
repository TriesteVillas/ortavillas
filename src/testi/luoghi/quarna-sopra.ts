import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Quarna Sopra", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Quarna Sopra", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/103058", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API (844 m; 831 m su Terrain Tiles)", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Quarna Sopra e Quarna Sotto (tornitura del legno; museo degli strumenti a fiato a Quarna Sotto)", url: "https://www.illagomaggiore.com/poi/upper-and-lower-quarna/", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Museo etnografico e dello strumento musicale a fiato, Quarna Sotto", url: "https://www.illagomaggiore.com/poi/museum-of-folk-culture-and-musical-instruments/", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Quarna Sopra (24 murales «Quarna paese dipinto»)", url: "https://it.wikipedia.org/wiki/Quarna_Sopra", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna; DEA di I livello Verbania e Domodossola (BUR Piemonte 20/7/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/30/attach/co_azienda%20sanitaria%20locale%20vco_2026-07-20_101592.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Quarna Sopra: vivere in montagna sopra il lago d'Orta, prezzi",
  descrizione: "Quarna Sopra, 242 abitanti a 844 m, il punto più alto dell'atlante: quotazioni OMI da 800 €/m², sole d'inverno, rischi nulli per i residenti, 96 min da Milano.",
  frase: "Quarna Sopra è il paese di montagna sopra Omegna, il più alto dei sedici luoghi: 242 abitanti, 844 m di quota, 554 m sopra il lago, 96 min da Milano.",
  vivere: [
    {
      titolo: "Un paese di montagna con i muri dipinti",
      testo: "Quarna Sopra sta a 844 m, 554 m sopra il lago e a 1,8 km in linea d'aria dalla riva: è il punto più alto dell'atlante. Ha 242 residenti (ISTAT, 1° gennaio 2025; stima 2026: 240). Secondo Wikipedia il paese ha un percorso di 24 murales, «Quarna paese dipinto». Come in altri paesi del Cusio, qui si lavorava il legno al tornio, e il Distretto Turistico dei Laghi segnala diverse case di villeggiatura di interesse architettonico.\n\nNella vicina Quarna Sotto, comune distinto, il Museo etnografico e dello strumento musicale a fiato espone oltre trecento strumenti, testimonianza della produzione che c'era nel paese."
    },
    {
      titolo: "Servizi: si scende a Omegna",
      testo: "In comune c'è la scuola primaria statale; infanzia, medie e superiori sono a Omegna, a 15 min d'auto. Per la sanità, Omegna ha un Punto di Primo Intervento, non un pronto soccorso; i DEA di I livello dell'ASL VCO sono a Verbania e Domodossola.\n\nIl limite principale è la distanza: 96 min da Milano, il valore più alto dei sedici luoghi, e strade di montagna da percorrere anche d'inverno, a quote dove neve e ghiaccio vanno messi nel conto."
    },
    {
      titolo: "Molto sole, rischi bassi",
      testo: "Il 21 dicembre il nostro calcolo dà 7 h 46 min di sole diretto, dalle 08:14 alle 15:59: più di un'ora oltre piazza Motta e oltre due ore più di Omegna, che sta sotto. Il 21 giugno sono 14 h 05 min. Il calcolo considera solo il rilievo, senza edifici né alberi.\n\nPer ISPRA lo 0,8% della superficie comunale è a pericolosità da frana elevata o molto elevata e lo 0,3% a pericolosità idraulica, ma in nessuna delle due aree risultano residenti."
    },
    {
      titolo: "Le quotazioni più basse dell'atlante",
      testo: "Per l'OMI (2° semestre 2025) nel centro abitato (B1) le abitazioni civili sono quotate 800–1.100 €/m², ville e villini 900–1.150 €/m², le economiche 500–750 €/m². Nella zona rurale montana R1 le civili stanno a 700–1.000 €/m². Sul 2° semestre 2024 le civili del centro sono salite del 2,7% al centro dell'intervallo, le ville sono ferme.\n\nSono le quotazioni più basse dei comuni dell'atlante: una villa a Quarna Sopra è quotata circa il 60% in meno di una villa sul lungolago di Orta. Sono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 96 min (115 km) da Milano Duomo, 75 min (75 km) da Malpensa T1, 103 min da Lugano. La stazione più vicina è Omegna, a 3,1 km in linea d'aria e 15 min d'auto, sulla linea Novara–Domodossola; per Milano si cambia a Novara.\n\nI battelli partono da Omegna, da marzo a ottobre. Nonio è a 16 min, Pettenasco a 26."
    },
  ],
  perChi: {
    si: [
      "Volete la montagna con il lago sotto, a 554 m di dislivello.",
      "Cercate le quotazioni più basse: civili a 800–1.100 €/m².",
      "Volete sole d'inverno: 7 h 46 min il 21 dicembre.",
    ],
    no: [
      "Dovete andare spesso a Milano: sono 96 min senza traffico.",
      "Avete figli oltre la primaria: le altre scuole sono a Omegna.",
      "Non volete guidare su strade di montagna d'inverno.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Quarna Sopra?", r: "L'OMI quota nel centro abitato le abitazioni civili 800–1.100 €/m² e le ville 900–1.150 €/m² (2° semestre 2025). Sono le quotazioni più basse dei comuni dell'atlante. Sono intervalli stimati, non prezzi firmati." },
    { d: "Quanto è alta Quarna Sopra?", r: "Il punto del paese è a 844 m secondo il modello Copernicus GLO-90 (831 m sull'altro modello che usiamo). È 554 m sopra il lago, il punto più alto dei sedici luoghi." },
    { d: "Quanto dista da Omegna e da Milano?", r: "Omegna è a 15 min d'auto, Milano Duomo a 96 min e Malpensa a 75 min, senza traffico. È il luogo dell'atlante più lontano da Milano. Il treno si prende a Omegna, con cambio a Novara." },
    { d: "Che cosa sono i murales di Quarna?", r: "Secondo Wikipedia il paese ha un percorso di 24 murales, «Quarna paese dipinto». Non l'abbiamo verificato su una fonte comunale. Nella vicina Quarna Sotto c'è un museo degli strumenti a fiato." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Quarna Sopra: mountain living above Lake Orta, prices",
  descrizione: "Quarna Sopra, 242 residents at 844 m, the highest point in the atlas: OMI values 2025 from €800/m², winter sun, no residents in hazard areas, 96 min from Milan.",
  frase: "Quarna Sopra is the mountain village above Omegna, the highest of the sixteen places: 242 residents, 844 m up, 554 m above the lake, 96 min from Milan.",
  vivere: [
    {
      titolo: "A mountain village with painted walls",
      testo: "Quarna Sopra sits at 844 m, 554 m above the lake and 1.8 km from the shore as the crow flies: the highest point in the atlas. It has 242 residents (ISTAT, 1 January 2025; 2026 estimate: 240). According to Wikipedia the village has a trail of 24 murals, \"Quarna paese dipinto\". As elsewhere in Cusio, wood turning was the local craft, and the Lakes Tourist District notes several holiday houses of architectural interest.\n\nIn neighbouring Quarna Sotto, a separate municipality, the Museum of Folk Culture and Wind Instruments shows more than three hundred instruments, a record of the village's former production."
    },
    {
      titolo: "Services: you go down to Omegna",
      testo: "The municipality has a state primary school; nursery, lower and upper secondary are in Omegna, 15 min by car. For healthcare, Omegna has a first-aid point, not an emergency department; the ASL VCO level-I emergency departments are in Verbania and Domodossola.\n\nThe main limit is distance: 96 min from Milan, the highest of the sixteen places, and mountain roads to drive in winter too, at heights where snow and ice have to be reckoned with."
    },
    {
      titolo: "Lots of sun, low hazards",
      testo: "On 21 December our calculation gives 7 h 46 min of direct sun, from 8:14 am to 3:59 pm: over an hour more than Piazza Motta and over two hours more than Omegna below. On 21 June it is 14 h 05 min. The calculation covers terrain only, without buildings or trees.\n\nAccording to ISPRA, 0.8% of the municipal area has high or very high landslide hazard and 0.3% has flood hazard, but no residents are recorded in either."
    },
    {
      titolo: "The lowest values in the atlas",
      testo: "According to OMI (2nd half of 2025), in the built-up centre (B1) standard homes are valued at €800–1,100/m², villas at €900–1,150/m², economy homes at €500–750/m². In the rural mountain zone R1 standard homes are at €700–1,000/m². Against the 2nd half of 2024 central standard homes rose by 2.7% at the midpoint; villas are flat.\n\nThese are the lowest values among the atlas's municipalities: a villa in Quarna Sopra is valued about 60% lower than a villa on Orta's lakefront. They are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 96 min (115 km) from Milan's Duomo, 75 min (75 km) from Malpensa T1, 103 min from Lugano. The nearest station is Omegna, 3.1 km away as the crow flies and 15 min by car, on the Novara–Domodossola line; for Milan you change at Novara.\n\nBoats leave from Omegna, from March to October. Nonio is 16 min away, Pettenasco 26."
    },
  ],
  perChi: {
    si: [
      "You want the mountains with the lake below, 554 m down.",
      "You are looking for the lowest values: standard homes at €800–1,100/m².",
      "You want winter sun: 7 h 46 min on 21 December.",
    ],
    no: [
      "You often need to get to Milan: it is 96 min without traffic.",
      "You have children beyond primary age: the other schools are in Omegna.",
      "You do not want to drive mountain roads in winter.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Quarna Sopra?", r: "In the built-up centre OMI values standard homes at €800–1,100/m² and villas at €900–1,150/m² (2nd half of 2025). These are the lowest values among the atlas's municipalities. They are estimated ranges, not signed prices." },
    { d: "How high is Quarna Sopra?", r: "The village point is at 844 m according to the Copernicus GLO-90 model (831 m on the other model we use). It is 554 m above the lake, the highest of the sixteen places." },
    { d: "How far is it from Omegna and Milan?", r: "Omegna is 15 min by car, Milan's Duomo 96 min and Malpensa 75 min, without traffic. It is the place in the atlas furthest from Milan. The train is taken in Omegna, changing at Novara." },
    { d: "What are the Quarna murals?", r: "According to Wikipedia the village has a trail of 24 murals, \"Quarna paese dipinto\". We have not verified it on a municipal source. Neighbouring Quarna Sotto has a museum of wind instruments." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Quarna Sopra: Bergleben über dem Ortasee, Preise",
  descrizione: "Quarna Sopra, 242 Einwohner auf 844 m, der höchste Punkt im Atlas: OMI-Werte ab 800 €/m², Wintersonne, keine Einwohner in Gefahrenzonen, 96 Min. von Mailand.",
  frase: "Quarna Sopra ist das Bergdorf über Omegna, der höchste der sechzehn Orte: 242 Einwohner, 844 m hoch, 554 m über dem See, 96 Min. von Mailand.",
  vivere: [
    {
      titolo: "Ein Bergdorf mit bemalten Mauern",
      testo: "Quarna Sopra liegt auf 844 m, 554 m über dem See und 1,8 km Luftlinie vom Ufer: der höchste Punkt im Atlas. Es hat 242 Einwohner (ISTAT, 1. Januar 2025; Schätzung 2026: 240). Laut Wikipedia hat der Ort einen Weg mit 24 Wandbildern, „Quarna paese dipinto“. Wie andernorts im Cusio wurde hier Holz gedrechselt, und der Distretto Turistico dei Laghi verweist auf mehrere architektonisch interessante Ferienhäuser.\n\nIm benachbarten Quarna Sotto, einer eigenen Gemeinde, zeigt das Museum für Volkskultur und Blasinstrumente mehr als dreihundert Instrumente, ein Zeugnis der früheren Herstellung im Ort."
    },
    {
      titolo: "Versorgung: hinunter nach Omegna",
      testo: "In der Gemeinde gibt es eine staatliche Grundschule; Kindergarten, Mittel- und Oberschule sind in Omegna, 15 Autominuten entfernt. Omegna hat eine Erste-Hilfe-Stelle, keine Notaufnahme; die Notaufnahmen der Stufe I der ASL VCO sind in Verbania und Domodossola.\n\nDie wichtigste Grenze ist die Entfernung: 96 Min. von Mailand, der höchste Wert der sechzehn Orte, und Bergstraßen, die man auch im Winter fährt, in Höhen, in denen Schnee und Glätte dazugehören."
    },
    {
      titolo: "Viel Sonne, geringe Risiken",
      testo: "Am 21. Dezember ergibt unsere Berechnung 7 h 46 min direkte Sonne, von 8.14 bis 15.59 Uhr: über eine Stunde mehr als an der Piazza Motta und über zwei Stunden mehr als im darunterliegenden Omegna. Am 21. Juni sind es 14 h 05 min. Berechnet ist nur das Gelände, ohne Gebäude und Bäume.\n\nLaut ISPRA haben 0,8 % der Gemeindefläche eine hohe oder sehr hohe Rutschungsgefahr und 0,3 % Hochwassergefahr, in keinem der beiden Gebiete sind aber Einwohner verzeichnet."
    },
    {
      titolo: "Die niedrigsten Werte im Atlas",
      testo: "Laut OMI (2. Halbjahr 2025) werden im Ortskern (B1) Wohnungen mit 800–1.100 €/m² bewertet, Villen mit 900–1.150 €/m², einfache Wohnungen mit 500–750 €/m². In der ländlichen Bergzone R1 liegen Wohnungen bei 700–1.000 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen im Kern um 2,7 % in der Mitte der Spanne, Villen blieben gleich.\n\nDas sind die niedrigsten Werte unter den Gemeinden des Atlas: Eine Villa in Quarna Sopra ist etwa 60 % niedriger bewertet als eine Villa am Ufer von Orta. Es sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 96 Min. (115 km) vom Mailänder Dom, 75 Min. (75 km) von Malpensa T1, 103 Min. von Lugano. Der nächste Bahnhof ist Omegna, 3,1 km Luftlinie und 15 Autominuten entfernt, an der Strecke Novara–Domodossola; nach Mailand steigt man in Novara um.\n\nDie Schiffe fahren ab Omegna, von März bis Oktober. Nonio ist 16 Min. entfernt, Pettenasco 26."
    },
  ],
  perChi: {
    si: [
      "Sie wollen die Berge mit dem See darunter, 554 m tiefer.",
      "Sie suchen die niedrigsten Werte: Wohnungen zu 800–1.100 €/m².",
      "Sie wollen Wintersonne: 7 h 46 min am 21. Dezember.",
    ],
    no: [
      "Sie müssen oft nach Mailand: Das sind 96 Min. ohne Verkehr.",
      "Sie haben Kinder über dem Grundschulalter: Die anderen Schulen sind in Omegna.",
      "Sie wollen im Winter keine Bergstraßen fahren.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Quarna Sopra?", r: "Im Ortskern bewertet die OMI Wohnungen mit 800–1.100 €/m² und Villen mit 900–1.150 €/m² (2. Halbjahr 2025). Das sind die niedrigsten Werte unter den Gemeinden des Atlas. Es sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Wie hoch liegt Quarna Sopra?", r: "Der Punkt des Ortes liegt laut dem Modell Copernicus GLO-90 auf 844 m (831 m auf dem anderen Modell, das wir nutzen). Das sind 554 m über dem See, der höchste der sechzehn Orte." },
    { d: "Wie weit ist es nach Omegna und Mailand?", r: "Omegna ist 15 Autominuten entfernt, der Mailänder Dom 96 Min. und Malpensa 75 Min., ohne Verkehr. Es ist der Ort im Atlas, der am weitesten von Mailand entfernt ist. Den Zug nimmt man in Omegna, mit Umstieg in Novara." },
    { d: "Was sind die Wandbilder von Quarna?", r: "Laut Wikipedia hat der Ort einen Weg mit 24 Wandbildern, „Quarna paese dipinto“. Auf einer Quelle der Gemeinde haben wir das nicht geprüft. Im benachbarten Quarna Sotto gibt es ein Museum der Blasinstrumente." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Quarna Sopra: gorsko življenje nad jezerom Orta, cene",
  descrizione: "Quarna Sopra, 242 prebivalcev na 844 m, najvišja točka atlasa: vrednosti OMI od 800 €/m², zimsko sonce, brez prebivalcev na nevarnih območjih, 96 min od Milana.",
  frase: "Quarna Sopra je gorska vas nad Omegno, najvišji od šestnajstih krajev: 242 prebivalcev, 844 m nadmorske višine, 554 m nad jezerom, 96 min od Milana.",
  vivere: [
    {
      titolo: "Gorska vas s poslikanimi zidovi",
      testo: "Quarna Sopra leži na 844 m, 554 m nad jezerom in 1,8 km zračne črte od obale: najvišja točka atlasa. Ima 242 prebivalcev (ISTAT, 1. januar 2025; ocena 2026: 240). Po navedbah Wikipedije ima vas pot s 24 poslikavami, »Quarna paese dipinto«. Kot drugod v Cusiu so tu stružili les, Distretto Turistico dei Laghi pa omenja več počitniških hiš z arhitekturno vrednostjo.\n\nV sosednji Quarni Sotto, ločeni občini, Etnografski muzej in muzej pihal razstavlja več kot tristo glasbil, pričevanje nekdanje proizvodnje v vasi."
    },
    {
      titolo: "Storitve: navzdol v Omegno",
      testo: "V občini je državna osnovna šola; vrtec, nižja in višja srednja šola so v Omegni, 15 min vožnje. Omegna ima točko prve pomoči, ne urgence; urgenci I. stopnje ASL VCO sta v Verbanii in Domodossoli.\n\nGlavna omejitev je razdalja: 96 min od Milana, največ med šestnajstimi kraji, in gorske ceste, po katerih se vozi tudi pozimi, na višini, kjer je treba računati na sneg in poledico."
    },
    {
      titolo: "Veliko sonca, nizka tveganja",
      testo: "21. decembra naš izračun da 7 h 46 min neposrednega sonca, od 8.14 do 15.59: več kot uro več kot na trgu Piazza Motta in več kot dve uri več kot v Omegni spodaj. 21. junija je sonca 14 h 05 min. Izračun upošteva le teren, brez stavb in dreves.\n\nPo podatkih ISPRA ima 0,8 % površine občine visoko ali zelo visoko nevarnost plazov, 0,3 % pa poplavno nevarnost, a na nobenem od teh območij ni zabeleženih prebivalcev."
    },
    {
      titolo: "Najnižje vrednosti v atlasu",
      testo: "Po podatkih OMI (2. polletje 2025) so v naselju (B1) običajna stanovanja ovrednotena na 800–1.100 €/m², vile na 900–1.150 €/m², skromnejša stanovanja na 500–750 €/m². V podeželski gorski coni R1 so stanovanja po 700–1.000 €/m². Glede na 2. polletje 2024 so se stanovanja v jedru v sredini razpona podražila za 2,7 %, vile so ostale enake.\n\nTo so najnižje vrednosti med občinami atlasa: vila v Quarni Sopra je ovrednotena približno 60 % niže od vile ob obali v Orti. To so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 96 min (115 km) od milanske stolnice, 75 min (75 km) od letališča Malpensa T1, 103 min od Lugana. Najbližja postaja je Omegna, 3,1 km zračne črte in 15 min vožnje, na progi Novara–Domodossola; za Milano prestopite v Novari.\n\nLadje odplujejo iz Omegne, od marca do oktobra. Nonio je 16 min stran, Pettenasco 26."
    },
  ],
  perChi: {
    si: [
      "Želite gore z jezerom spodaj, 554 m niže.",
      "Iščete najnižje vrednosti: stanovanja po 800–1.100 €/m².",
      "Želite zimsko sonce: 7 h 46 min 21. decembra.",
    ],
    no: [
      "Pogosto morate v Milano: to je 96 min brez prometa.",
      "Imate otroke, starejše od osnovnošolskih: druge šole so v Omegni.",
      "Pozimi ne želite voziti po gorskih cestah.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Quarni Sopra?", r: "V naselju OMI vrednoti običajna stanovanja na 800–1.100 €/m², vile na 900–1.150 €/m² (2. polletje 2025). To so najnižje vrednosti med občinami atlasa. Gre za ocenjene razpone, ne podpisane cene." },
    { d: "Kako visoko leži Quarna Sopra?", r: "Točka vasi je po modelu Copernicus GLO-90 na 844 m (na drugem modelu, ki ga uporabljamo, 831 m). To je 554 m nad jezerom, najvišje med šestnajstimi kraji." },
    { d: "Kako daleč sta Omegna in Milano?", r: "Omegna je 15 min vožnje stran, milanska stolnica 96 min in letališče Malpensa 75 min, brez prometa. To je kraj v atlasu, ki je od Milana najbolj oddaljen. Na vlak se vkrcate v Omegni, s prestopom v Novari." },
    { d: "Kaj so poslikave v Quarni?", r: "Po navedbah Wikipedije ima vas pot s 24 poslikavami, »Quarna paese dipinto«. Na občinskem viru tega nismo preverili. V sosednji Quarni Sotto je muzej pihal." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
