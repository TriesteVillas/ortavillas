import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Miasino", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Miasino", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/3098", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota: Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Miasino e Villa Nigra (case signorili del XVII–XVIII secolo, logge, affreschi)", url: "https://www.illagomaggiore.com/destination/miasino/", data: "2026-10-06" },
  { titolo: "Wikipedia (it) – Miasino (Villa Nigra, origine cinquecentesca, oggi del Comune; emigrazione verso Milano e la Toscana)", url: "https://it.wikipedia.org/wiki/Miasino", data: "2026-10-06" },
  { titolo: "Trenitalia, motore orari lefrecce.it – campione del 7 e 10 ottobre 2026", url: "https://www.lefrecce.it/", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna", url: "https://www.aslvco.it/prolungamento-apertura-punto-di-primo-intervento-di-omegna-2/", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Miasino: vivere sulle colline sopra Orta, prezzi e ville",
  descrizione: "Miasino, 810 abitanti a 478 m sopra il lago d'Orta: Villa Nigra, quotazioni OMI fino a 2.200 €/m² per le ville, 7 h 47 min di sole a dicembre, rischi ISPRA.",
  frase: "Miasino è il paese di case signorili sopra Orta: 810 abitanti, 188 m sopra il lago, stazione a 900 m, 75 min da Milano e 6 min dal borgo di Orta.",
  vivere: [
    {
      titolo: "Un paese di case signorili",
      testo: "Nel Sei e Settecento famiglie borghesi e nobili costruirono a Miasino le case che ancora ne fanno il carattere. La più nota è Villa Nigra, nel centro: di origine cinquecentesca, ampliata tra Sei e Settecento, con logge interne, balaustre in granito e ferro battuto e affreschi; oggi è del Comune. Wikipedia ricorda anche una forte emigrazione storica verso Milano e la Toscana.\n\nIl paese sta a 478 m, 188 m sopra il lago e a circa 740 m in linea d'aria dalla riva. Ha 810 residenti (ISTAT, 1° gennaio 2025; stima 2026: 805)."
    },
    {
      titolo: "Sole di collina, frane da guardare",
      testo: "Il 21 dicembre il nostro calcolo dà a Miasino 7 h 47 min di sole diretto, dalle 08:32 alle 16:18: 68 minuti più di piazza Motta. Il 21 giugno sono 14 h 19 min. Il calcolo considera solo il rilievo, senza edifici né alberi.\n\nIl numero da leggere con attenzione è un altro: per ISPRA il 10,5% dei residenti vive in aree a pericolosità da frana elevata o molto elevata, che coprono il 5,1% del comune. È il valore più alto delle colline. Dice dove guardare, non com'è una casa: il lotto si controlla sulle carte del PAI e del piano regolatore."
    },
    {
      titolo: "Servizi: scuola primaria e poco altro",
      testo: "In comune c'è la scuola primaria statale; infanzia e medie sono a Orta (6 min) o ad Armeno (4 min), il liceo a Gozzano. Per la spesa e i servizi si scende a Orta o si va a Omegna. Omegna ha un Punto di Primo Intervento, non un pronto soccorso; il DEA di I livello è a Borgomanero."
    },
    {
      titolo: "Le ville più quotate delle colline",
      testo: "Per l'OMI (2° semestre 2025) nella zona periferica residenziale D1 le abitazioni civili sono quotate 1.250–1.800 €/m² e ville e villini 1.500–2.200 €/m²: è il massimo delle colline del Mottarone. Nel vecchio nucleo (B1) le civili stanno a 1.200–1.750 €/m²; nella zona collinare isolata E1 a 920–1.300 €/m². Sul 2° semestre 2024 le civili della D1 sono salite del 5,2%, le ville dell'1,4%.\n\nSono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato conservativo normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 75 min (87 km) da Milano Duomo, 54 min (47 km) da Malpensa T1, 82 min da Lugano. La stazione si chiama Orta-Miasino ed è a 900 m in linea d'aria: in un mercoledì campione partono 8 treni diretti per Novara, nessuno tra le 08:04 e le 13:51; per Milano si cambia a Novara, 1 h 33 min – 1 h 54 min.\n\nL'imbarcadero di Orta è a 1,9 km in linea d'aria; i battelli viaggiano da marzo a ottobre."
    },
  ],
  perChi: {
    si: [
      "Cercate una casa storica in un paese di ville sopra Orta.",
      "Volete la stazione a 900 m e Orta a 6 min.",
      "Volete più sole d'inverno del lago: 7 h 47 min il 21 dicembre.",
    ],
    no: [
      "Vi preoccupano le frane: un residente su dieci vive in area P3–P4.",
      "Cercate i prezzi più bassi delle colline: qui le ville arrivano a 2.200 €/m².",
      "Vi servono scuole medie e negozi in paese.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Miasino?", r: "L'OMI quota nella zona D1 le abitazioni civili 1.250–1.800 €/m² e ville e villini 1.500–2.200 €/m² (2° semestre 2025). Nella zona collinare isolata le civili scendono a 920–1.300 €/m². Sono intervalli stimati, non prezzi firmati." },
    { d: "Miasino è a rischio frane?", r: "Secondo ISPRA il 10,5% dei residenti vive in aree a pericolosità da frana elevata o molto elevata, sul 5,1% della superficie. È il valore più alto dei paesi di collina dell'atlante. Il dato è comunale: la singola casa si verifica sulle carte." },
    { d: "Che cos'è Villa Nigra?", r: "È la villa più nota del paese, nel centro: di origine cinquecentesca, ampliata tra Sei e Settecento, con logge, balaustre e affreschi. Oggi è proprietà del Comune. Non è in vendita." },
    { d: "Si arriva a Miasino in treno?", r: "Sì: la stazione Orta-Miasino è a 900 m in linea d'aria, sulla linea Novara–Domodossola. Nel campione di un mercoledì partono 8 treni diretti per Novara; per Milano si cambia a Novara." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Miasino: living in the hills above Orta, prices and villas",
  descrizione: "Miasino, 810 residents at 478 m above Lake Orta: Villa Nigra, OMI values 2025 up to €2,200/m² for villas, 7 h 47 min of December sun, ISPRA hazards.",
  frase: "Miasino is the village of grand houses above Orta: 810 residents, 188 m above the lake, a station 900 m away, 75 min from Milan and 6 min from the village of Orta.",
  vivere: [
    {
      titolo: "A village of grand houses",
      testo: "In the 17th and 18th centuries middle-class and noble families built the houses that still give Miasino its character. The best known is Villa Nigra, in the centre: 16th-century in origin, enlarged in the 17th and 18th centuries, with inner loggias, granite and wrought-iron balustrades and frescoes; today it belongs to the municipality. Wikipedia also records strong historical emigration to Milan and Tuscany.\n\nThe village is at 478 m, 188 m above the lake and about 740 m from the shore as the crow flies. It has 810 residents (ISTAT, 1 January 2025; 2026 estimate: 805)."
    },
    {
      titolo: "Hillside sun, landslides to check",
      testo: "On 21 December our calculation gives Miasino 7 h 47 min of direct sun, from 8:32 am to 4:18 pm: 68 minutes more than Piazza Motta. On 21 June it is 14 h 19 min. The calculation covers terrain only, without buildings or trees.\n\nThe figure to read carefully is another: according to ISPRA, 10.5% of residents live in areas of high or very high landslide hazard, which cover 5.1% of the municipality. It is the highest figure in the hills. It tells you where to look, not what a house is like: check the plot on the PAI and zoning maps."
    },
    {
      titolo: "Services: a primary school and little else",
      testo: "The municipality has a state primary school; nursery and lower secondary are in Orta (6 min) or Armeno (4 min), the liceo in Gozzano. For shopping and services you go down to Orta or over to Omegna. Omegna has a first-aid point, not an emergency department; the level-I emergency department is in Borgomanero."
    },
    {
      titolo: "The highest villa values in the hills",
      testo: "According to OMI (2nd half of 2025), in the residential outskirts zone D1 standard homes are valued at €1,250–1,800/m² and villas at €1,500–2,200/m²: the top of the Mottarone hills. In the old core (B1) standard homes are at €1,200–1,750/m²; in the isolated hill zone E1 at €920–1,300/m². Against the 2nd half of 2024, D1 standard homes rose by 5.2%, villas by 1.4%.\n\nThese are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 75 min (87 km) from Milan's Duomo, 54 min (47 km) from Malpensa T1, 82 min from Lugano. The station is called Orta-Miasino and is 900 m away as the crow flies: on a sample Wednesday 8 direct trains leave for Novara, none between 8:04 am and 1:51 pm; for Milan you change at Novara, 1 h 33 min – 1 h 54 min.\n\nOrta's boat landing is 1.9 km away as the crow flies; boats run from March to October."
    },
  ],
  perChi: {
    si: [
      "You want a historic house in a village of villas above Orta.",
      "You want the station 900 m away and Orta 6 min away.",
      "You want more winter sun than the lakeshore: 7 h 47 min on 21 December.",
    ],
    no: [
      "Landslides worry you: one resident in ten lives in a P3–P4 area.",
      "You want the lowest prices in the hills: villas here reach €2,200/m².",
      "You need a lower secondary school and shops in the village.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Miasino?", r: "In zone D1 OMI values standard homes at €1,250–1,800/m² and villas at €1,500–2,200/m² (2nd half of 2025). In the isolated hill zone standard homes drop to €920–1,300/m². These are estimated ranges, not signed prices." },
    { d: "Is Miasino at risk of landslides?", r: "According to ISPRA, 10.5% of residents live in areas of high or very high landslide hazard, on 5.1% of the area. It is the highest figure among the atlas's hill villages. The figure is municipal: check the individual house on the maps." },
    { d: "What is Villa Nigra?", r: "It is the village's best-known villa, in the centre: 16th-century in origin, enlarged in the 17th and 18th centuries, with loggias, balustrades and frescoes. Today it belongs to the municipality. It is not for sale." },
    { d: "Can I reach Miasino by train?", r: "Yes: Orta-Miasino station is 900 m away as the crow flies, on the Novara–Domodossola line. In a Wednesday sample 8 direct trains leave for Novara; for Milan you change at Novara." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Miasino: Leben in den Hügeln über Orta, Preise und Villen",
  descrizione: "Miasino, 810 Einwohner auf 478 m über dem Ortasee: Villa Nigra, OMI-Werte 2025 bis 2.200 €/m² für Villen, 7 h 47 min Dezembersonne, ISPRA-Risiken.",
  frase: "Miasino ist das Dorf der Herrenhäuser über Orta: 810 Einwohner, 188 m über dem See, Bahnhof in 900 m, 75 Min. von Mailand und 6 Min. vom Ort Orta.",
  vivere: [
    {
      titolo: "Ein Dorf der Herrenhäuser",
      testo: "Im 17. und 18. Jahrhundert bauten bürgerliche und adelige Familien in Miasino die Häuser, die den Ort bis heute prägen. Die bekannteste ist die Villa Nigra im Zentrum: im Kern aus dem 16. Jahrhundert, im 17. und 18. Jahrhundert erweitert, mit Innenloggien, Balustraden aus Granit und Schmiedeeisen und Fresken; heute gehört sie der Gemeinde. Wikipedia erwähnt auch eine starke historische Auswanderung nach Mailand und in die Toskana.\n\nDer Ort liegt auf 478 m, 188 m über dem See und etwa 740 m Luftlinie vom Ufer. Er hat 810 Einwohner (ISTAT, 1. Januar 2025; Schätzung 2026: 805)."
    },
    {
      titolo: "Hügelsonne, Rutschungen im Blick",
      testo: "Am 21. Dezember ergibt unsere Berechnung für Miasino 7 h 47 min direkte Sonne, von 8.32 bis 16.18 Uhr: 68 Minuten mehr als an der Piazza Motta. Am 21. Juni sind es 14 h 19 min. Berechnet ist nur das Gelände, ohne Gebäude und Bäume.\n\nGenau lesen sollte man eine andere Zahl: Laut ISPRA leben 10,5 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr, die 5,1 % der Gemeinde bedecken. Das ist der höchste Wert in den Hügeln. Er sagt, wo man hinschauen muss, nicht wie ein Haus ist: Das Grundstück prüft man auf den Karten des PAI und des Bebauungsplans."
    },
    {
      titolo: "Versorgung: Grundschule und wenig mehr",
      testo: "In der Gemeinde gibt es eine staatliche Grundschule; Kindergarten und Mittelschule sind in Orta (6 Min.) oder Armeno (4 Min.), das Gymnasium in Gozzano. Zum Einkaufen fährt man nach Orta hinunter oder nach Omegna. Omegna hat eine Erste-Hilfe-Stelle, keine Notaufnahme; die Notaufnahme der Stufe I ist in Borgomanero."
    },
    {
      titolo: "Die höchsten Villenwerte der Hügel",
      testo: "Laut OMI (2. Halbjahr 2025) werden in der Wohnzone am Ortsrand D1 Wohnungen mit 1.250–1.800 €/m² und Villen mit 1.500–2.200 €/m² bewertet: der Höchstwert der Mottarone-Hügel. Im alten Kern (B1) liegen Wohnungen bei 1.200–1.750 €/m², in der abgelegenen Hügelzone E1 bei 920–1.300 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen in D1 um 5,2 %, Villen um 1,4 %.\n\nDas sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 75 Min. (87 km) vom Mailänder Dom, 54 Min. (47 km) von Malpensa T1, 82 Min. von Lugano. Der Bahnhof heißt Orta-Miasino und liegt 900 m Luftlinie entfernt: An einem Stichproben-Mittwoch fahren 8 direkte Züge nach Novara, zwischen 8.04 und 13.51 Uhr keiner; nach Mailand steigt man in Novara um, 1 h 33 min – 1 h 54 min.\n\nDie Anlegestelle von Orta ist 1,9 km Luftlinie entfernt; die Schiffe fahren von März bis Oktober."
    },
  ],
  perChi: {
    si: [
      "Sie suchen ein historisches Haus in einem Villendorf über Orta.",
      "Sie wollen den Bahnhof in 900 m und Orta in 6 Min.",
      "Sie wollen mehr Wintersonne als am Ufer: 7 h 47 min am 21. Dezember.",
    ],
    no: [
      "Rutschungen beunruhigen Sie: Jeder zehnte Einwohner lebt in einem Gebiet P3–P4.",
      "Sie suchen die niedrigsten Preise der Hügel: Villen erreichen hier 2.200 €/m².",
      "Sie brauchen Mittelschule und Geschäfte im Ort.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Miasino?", r: "In Zone D1 bewertet die OMI Wohnungen mit 1.250–1.800 €/m² und Villen mit 1.500–2.200 €/m² (2. Halbjahr 2025). In der abgelegenen Hügelzone sinken Wohnungen auf 920–1.300 €/m². Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Ist Miasino rutschungsgefährdet?", r: "Laut ISPRA leben 10,5 % der Einwohner in Gebieten mit hoher oder sehr hoher Rutschungsgefahr, auf 5,1 % der Fläche. Das ist der höchste Wert unter den Hügeldörfern des Atlas. Die Zahl gilt für die Gemeinde: Das einzelne Haus prüft man auf den Karten." },
    { d: "Was ist die Villa Nigra?", r: "Die bekannteste Villa des Ortes, im Zentrum: im Kern aus dem 16. Jahrhundert, im 17. und 18. Jahrhundert erweitert, mit Loggien, Balustraden und Fresken. Heute gehört sie der Gemeinde. Sie steht nicht zum Verkauf." },
    { d: "Kommt man mit dem Zug nach Miasino?", r: "Ja: Der Bahnhof Orta-Miasino liegt 900 m Luftlinie entfernt, an der Strecke Novara–Domodossola. In der Stichprobe eines Mittwochs fahren 8 direkte Züge nach Novara; nach Mailand steigt man in Novara um." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Miasino: življenje na gričih nad Orto, cene in vile",
  descrizione: "Miasino, 810 prebivalcev na 478 m nad jezerom Orta: vila Nigra, vrednosti OMI 2025 do 2.200 €/m² za vile, 7 h 47 min decembrskega sonca, tveganja ISPRA.",
  frase: "Miasino je vas meščanskih hiš nad Orto: 810 prebivalcev, 188 m nad jezerom, postaja 900 m stran, 75 min od Milana in 6 min od kraja Orta.",
  vivere: [
    {
      titolo: "Vas meščanskih hiš",
      testo: "V 17. in 18. stoletju so meščanske in plemiške družine v Miasinu zgradile hiše, ki kraju še danes dajejo značaj. Najbolj znana je vila Nigra v središču: izvira iz 16. stoletja, razširjena je bila v 17. in 18. stoletju, ima notranje lože, balustrade iz granita in kovanega železa ter freske; danes je last občine. Wikipedija omenja tudi močno zgodovinsko izseljevanje v Milano in Toskano.\n\nKraj leži na 478 m, 188 m nad jezerom in približno 740 m zračne črte od obale. Ima 810 prebivalcev (ISTAT, 1. januar 2025; ocena 2026: 805)."
    },
    {
      titolo: "Sonce na griču, plazovi pod drobnogledom",
      testo: "21. decembra naš izračun Miasinu da 7 h 47 min neposrednega sonca, od 8.32 do 16.18: 68 minut več kot na trgu Piazza Motta. 21. junija je sonca 14 h 19 min. Izračun upošteva le teren, brez stavb in dreves.\n\nPozorno pa je treba prebrati drugo številko: po podatkih ISPRA 10,5 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov, ki pokrivajo 5,1 % občine. To je najvišja vrednost na gričih. Pove, kam pogledati, ne kakšna je hiša: parcelo preverite na kartah PAI in prostorskega načrta."
    },
    {
      titolo: "Storitve: osnovna šola in malo drugega",
      testo: "V občini je državna osnovna šola; vrtec in nižja srednja šola sta v Orti (6 min) ali Armenu (4 min), gimnazija v Gozzanu. Za nakupe se spustite v Orto ali zapeljete v Omegno. Omegna ima točko prve pomoči, ne urgence; urgenca I. stopnje je v Borgomaneru."
    },
    {
      titolo: "Najvišje vrednosti vil na gričih",
      testo: "Po podatkih OMI (2. polletje 2025) so v stanovanjski coni na obrobju D1 običajna stanovanja ovrednotena na 1.250–1.800 €/m², vile na 1.500–2.200 €/m²: največ na gričih pod Mottaronejem. V starem jedru (B1) so stanovanja po 1.200–1.750 €/m², v odmaknjeni gričevnati coni E1 po 920–1.300 €/m². Glede na 2. polletje 2024 so se stanovanja v D1 podražila za 5,2 %, vile za 1,4 %.\n\nTo so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 75 min (87 km) od milanske stolnice, 54 min (47 km) od letališča Malpensa T1, 82 min od Lugana. Postaja se imenuje Orta-Miasino in je 900 m zračne črte stran: na vzorčno sredo odpelje 8 neposrednih vlakov v Novaro, med 8.04 in 13.51 nobeden; za Milano prestopite v Novari, 1 h 33 min – 1 h 54 min.\n\nPristan v Orti je 1,9 km zračne črte stran; ladje vozijo od marca do oktobra."
    },
  ],
  perChi: {
    si: [
      "Iščete zgodovinsko hišo v vasi vil nad Orto.",
      "Želite postajo na 900 m in Orto na 6 min.",
      "Želite več zimskega sonca kot ob obali: 7 h 47 min 21. decembra.",
    ],
    no: [
      "Skrbijo vas plazovi: vsak deseti prebivalec živi na območju P3–P4.",
      "Iščete najnižje cene na gričih: vile tu dosežejo 2.200 €/m².",
      "Potrebujete nižjo srednjo šolo in trgovine v kraju.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Miasinu?", r: "V coni D1 OMI vrednoti običajna stanovanja na 1.250–1.800 €/m², vile na 1.500–2.200 €/m² (2. polletje 2025). V odmaknjeni gričevnati coni stanovanja padejo na 920–1.300 €/m². To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali Miasinu grozijo plazovi?", r: "Po podatkih ISPRA 10,5 % prebivalcev živi na območjih z visoko ali zelo visoko nevarnostjo plazov, na 5,1 % površine. To je najvišja vrednost med gričevnatimi vasmi atlasa. Podatek je občinski: posamezno hišo preverite na kartah." },
    { d: "Kaj je vila Nigra?", r: "Najbolj znana vila v kraju, v središču: izvira iz 16. stoletja, razširjena v 17. in 18. stoletju, z ložami, balustradami in freskami. Danes je last občine. Ni naprodaj." },
    { d: "Ali se v Miasino pride z vlakom?", r: "Da: postaja Orta-Miasino je 900 m zračne črte stran, na progi Novara–Domodossola. V vzorcu za sredo odpelje 8 neposrednih vlakov v Novaro; za Milano prestopite v Novari." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
