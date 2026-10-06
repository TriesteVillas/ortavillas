import type { Fonte, PerLingua, TestiLuogo } from "./tipi";

const fonti: Fonte[] = [
  { titolo: "ISTAT – Popolazione residente al 1° gennaio 2025 (POSAS)", url: "https://demo.istat.it/", data: "2026-10-06" },
  { titolo: "Agenzia delle Entrate – OMI, quotazioni 2° semestre 2025 e 2° semestre 2024, Madonna del Sasso", url: "https://www1.agenziaentrate.gov.it/servizi/Consultazione/ricerca.htm", data: "2026-10-06" },
  { titolo: "OSRM su dati © OpenStreetMap contributors – tempi in auto senza traffico", url: "https://router.project-osrm.org/", data: "2026-10-06" },
  { titolo: "ISPRA IdroGEO – indicatori di pericolosità, comune di Madonna del Sasso", url: "https://idrogeo.isprambiente.it/app/page/pir/comuni/103040", data: "2026-10-06" },
  { titolo: "MIM – Anagrafe scuole statali a.s. 2026/27 (nessuna scuola statale nel comune)", url: "https://dati.istruzione.it/opendata/", data: "2026-10-06" },
  { titolo: "Sole al 21 dicembre, marzo e giugno: calcolo OrtaVillas su AWS Terrain Tiles (EU-DEM/SRTM)", url: "https://registry.opendata.aws/terrain-tiles/", data: "2026-10-06" },
  { titolo: "Quota del municipio (Boleto): Copernicus DEM GLO-90 via Open-Meteo Elevation API", url: "https://open-meteo.com/en/docs/elevation-api", data: "2026-10-06" },
  { titolo: "Distretto Turistico dei Laghi – Santuario della Madonna del Sasso", url: "https://www.illagomaggiore.com/poi/sanctuary-of-the-madonna-del-sasso-our-lady-of-the-rock/", data: "2026-10-06" },
  { titolo: "OpenStreetMap – Santuario della Madonna del Sasso (way 200916252)", url: "https://www.openstreetmap.org/way/200916252", data: "2026-10-06" },
  { titolo: "Navigazione Lago d'Orta – Orario invernale 2026", url: "https://www.navigazionelagodorta.it/userdata/documenti/Orario_invernale_2026.pdf", data: "2026-10-06" },
  { titolo: "ASL VCO – Punto di Primo Intervento di Omegna; DEA di I livello di Verbania e Domodossola (BUR Piemonte 20/7/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/30/attach/co_azienda%20sanitaria%20locale%20vco_2026-07-20_101592.pdf", data: "2026-10-06" },
  { titolo: "ASL NO – Borgomanero, Ospedale SS. Trinità, DEA di I livello (BUR Piemonte 1/4/2026)", url: "https://www.regione.piemonte.it/governo/bollettino/abbonati/2026/14/attach/co_azienda%20sanitaria%20locale%20no_2026-04-01_100031.pdf", data: "2026-10-06" },
];

const it: TestiLuogo = {
  titolo: "Madonna del Sasso: vivere sopra il lago d'Orta, prezzi e limiti",
  descrizione: "Madonna del Sasso, 351 abitanti a 689 m, 400 m sopra il lago d'Orta: santuario sul crinale, quotazioni OMI 2025, niente scuole né treno, 81 min da Milano.",
  frase: "Madonna del Sasso è il comune sul crinale della sponda ovest, con il municipio a Boleto a 689 m, circa 400 m sopra il lago: 351 abitanti, 81 min da Milano.",
  vivere: [
    {
      titolo: "Un santuario sulla roccia",
      testo: "Il comune prende il nome dal santuario della Madonna del Sasso, costruito all'inizio del Settecento su un grande sperone di granito che sovrasta il lago, dove prima c'era una cappella tardo medievale. All'interno, la pala dell'altare maggiore con la Deposizione è di Fermo Stella da Caravaggio, del 1547.\n\nIl municipio è nella frazione di Boleto, a 689 m di quota: circa 400 m sopra il lago e a 1,2 km in linea d'aria dalla riva. È il balcone della sponda ovest: dall'alto si guarda verso Orta e l'isola, sull'altra riva."
    },
    {
      titolo: "Un paese piccolo, con servizi altrove",
      testo: "Madonna del Sasso ha 351 residenti (ISTAT, 1° gennaio 2025; stima 2026: 347). Nel comune non c'è nessuna scuola statale: l'anagrafe del Ministero per l'a.s. 2026/27 non ne elenca. Per le scuole e la spesa si scende verso San Maurizio d'Opaglio (9 min), Pella (11) o Gozzano (16).\n\nIl comune è in provincia del Verbano-Cusio-Ossola. Per la sanità il riferimento vicino è Omegna (22 min), con un Punto di Primo Intervento e non un pronto soccorso; i DEA di I livello dell'ASL VCO sono a Verbania e Domodossola, e per la provincia di Novara a Borgomanero."
    },
    {
      titolo: "Luce d'estate, rischi quasi nulli",
      testo: "Il 21 dicembre il nostro calcolo dà 6 h 54 min di sole diretto, dalle 08:11 alle 15:04. Il 21 giugno sono 14 h 48 min, il valore più alto dei sedici luoghi: a questa quota l'orizzonte a est è quasi piatto (1°). Il calcolo considera solo il rilievo.\n\nPer ISPRA nel comune la superficie a pericolosità da frana elevata o molto elevata è zero, e nessun residente vive in aree a pericolosità idraulica media. Il limite vero è la distanza: niente ferrovia sulla sponda ovest, strade di montagna, e d'inverno quota e ghiaccio da mettere nel conto."
    },
    {
      titolo: "Che cosa si compra e a che prezzo",
      testo: "Per l'OMI (2° semestre 2025) nel centro abitato, zona B1, le abitazioni civili sono quotate 900–1.350 €/m², ville e villini 950–1.400 €/m², le economiche 600–850 €/m². Nella zona rurale montana R1 sono quotate solo le economiche, 450–600 €/m². Sul 2° semestre 2024 le civili sono salite del 2,3% al centro dell'intervallo, le ville sono ferme.\n\nÈ circa la metà delle quotazioni del lungolago di Orta. Sono quotazioni, non prezzi di compravendita: intervalli stimati per zona e tipologia, su superficie lorda e stato normale."
    },
    {
      titolo: "Come si arriva",
      testo: "In auto, senza traffico: 81 min (91 km) da Milano Duomo, 61 min (51 km) da Malpensa T1, 88 min da Lugano. Le stazioni più vicine, Orta-Miasino e Pettenasco, sono a circa 4 km in linea d'aria ma sull'altra riva.\n\nL'imbarcadero più vicino è San Filiberto, a 1,2 km in linea d'aria e molto più in basso. Dal 4 al 31 ottobre 2026 il giro Orta–Isola–Pella–San Filiberto–Lagna ci passa ogni 35–45 minuti; il servizio di linea è attivo da marzo a ottobre."
    },
  ],
  perChi: {
    si: [
      "Volete il lago dall'alto, 400 m sopra l'acqua, e molta luce d'estate.",
      "Cercate quotazioni basse: civili a 900–1.350 €/m².",
      "Vi interessa un comune senza aree a pericolosità da frana P3–P4.",
    ],
    no: [
      "Avete figli in età scolare: nel comune non c'è una scuola statale.",
      "Volete scendere al lago a piedi o prendere il treno.",
      "Non volete guidare in salita d'inverno.",
    ],
  },
  faq: [
    { d: "Quanto costa una casa a Madonna del Sasso?", r: "L'OMI quota nel centro abitato le abitazioni civili 900–1.350 €/m² e le ville 950–1.400 €/m² (2° semestre 2025). Nella zona rurale montana le economiche sono a 450–600 €/m². Sono intervalli stimati, non prezzi firmati." },
    { d: "Ci sono scuole a Madonna del Sasso?", r: "No: l'anagrafe delle scuole statali per l'a.s. 2026/27 non ne elenca nel comune. Le più vicine sono a San Maurizio d'Opaglio, a 9 min d'auto, con infanzia, primaria e medie. Le paritarie non sono nel dato del Ministero." },
    { d: "Si vede il lago da Madonna del Sasso?", r: "Il santuario sta su uno sperone di granito sopra il lago, e il municipio di Boleto è a circa 400 m sopra l'acqua. Da quanto si veda il lago dalla singola casa dipende da posizione ed esposizione: va verificato sul posto." },
    { d: "Qual è l'ospedale di riferimento?", r: "Il comune è in provincia VCO: Omegna, a 22 min, ha un Punto di Primo Intervento con orario limitato, non un pronto soccorso. I DEA di I livello sono a Verbania e Domodossola per l'ASL VCO, e a Borgomanero per l'ASL di Novara." },
    { d: "Posso comprare qui tramite OrtaVillas?", r: "Sì: TriesteVillas srl è un'agenzia iscritta e sul lago può mediare. Oggi però la Private Collection del lago ha 0 case, e questa pagina non è un annuncio. Iscrivetevi per essere avvisati, oppure scriveteci a richieste@triestevillas.com o al +39 347 8628738." },
  ],
  fonti,
};

const en: TestiLuogo = {
  titolo: "Madonna del Sasso: living above Lake Orta, prices and limits",
  descrizione: "Madonna del Sasso, 351 residents at 689 m, 400 m above Lake Orta: a sanctuary on the ridge, OMI values 2025, no schools or railway, 81 min from Milan.",
  frase: "Madonna del Sasso is the municipality on the west-shore ridge, with its town hall in Boleto at 689 m, about 400 m above the lake: 351 residents, 81 min from Milan.",
  vivere: [
    {
      titolo: "A sanctuary on the rock",
      testo: "The municipality takes its name from the sanctuary of the Madonna del Sasso, built in the early 18th century on a large granite spur above the lake, on the site of a late medieval chapel. Inside, the high-altar painting of the Deposition is by Fermo Stella da Caravaggio, dated 1547.\n\nThe town hall is in the hamlet of Boleto, at 689 m: about 400 m above the lake and 1.2 km from the shore as the crow flies. It is the balcony of the west shore: from up here you look towards Orta and the island, on the other side."
    },
    {
      titolo: "A small place, with services elsewhere",
      testo: "Madonna del Sasso has 351 residents (ISTAT, 1 January 2025; 2026 estimate: 347). There is no state school in the municipality: the Ministry register for 2026/27 lists none. For schools and shopping you drive down to San Maurizio d'Opaglio (9 min), Pella (11) or Gozzano (16).\n\nThe municipality is in the province of Verbano-Cusio-Ossola. For healthcare the nearby reference is Omegna (22 min), with a first-aid point and not an emergency department; the ASL VCO level-I emergency departments are in Verbania and Domodossola, and for the province of Novara in Borgomanero."
    },
    {
      titolo: "Summer light, almost no hazards",
      testo: "On 21 December our calculation gives 6 h 54 min of direct sun, from 8:11 am to 3:04 pm. On 21 June it is 14 h 48 min, the highest of the sixteen places: at this height the eastern horizon is almost flat (1°). The calculation covers terrain only.\n\nAccording to ISPRA, the municipality's area of high or very high landslide hazard is zero, and no resident lives in areas of medium flood hazard. The real limit is distance: no railway on the west shore, mountain roads, and in winter altitude and ice to reckon with."
    },
    {
      titolo: "What you buy and at what price",
      testo: "According to OMI (2nd half of 2025), in the built-up centre, zone B1, standard homes are valued at €900–1,350/m², villas at €950–1,400/m², economy homes at €600–850/m². In the rural mountain zone R1 only economy homes are valued, at €450–600/m². Against the 2nd half of 2024 standard homes rose by 2.3% at the midpoint; villas are flat.\n\nThat is about half the values of Orta's lakefront. These are valuations, not sale prices: ranges estimated by zone and type, on gross floor area and normal condition."
    },
    {
      titolo: "Getting there",
      testo: "By car, without traffic: 81 min (91 km) from Milan's Duomo, 61 min (51 km) from Malpensa T1, 88 min from Lugano. The nearest stations, Orta-Miasino and Pettenasco, are about 4 km away as the crow flies but on the other shore.\n\nThe nearest boat landing is San Filiberto, 1.2 km away as the crow flies and much lower down. From 4 to 31 October 2026 the Orta–Island–Pella–San Filiberto–Lagna loop calls there every 35–45 minutes; scheduled service runs from March to October."
    },
  ],
  perChi: {
    si: [
      "You want the lake from above, 400 m over the water, and long summer light.",
      "You are looking for low values: standard homes at €900–1,350/m².",
      "You want a municipality with no P3–P4 landslide-hazard areas.",
    ],
    no: [
      "You have school-age children: there is no state school in the municipality.",
      "You want to walk down to the lake or take the train.",
      "You do not want to drive uphill in winter.",
    ],
  },
  faq: [
    { d: "How much does a house cost in Madonna del Sasso?", r: "In the built-up centre OMI values standard homes at €900–1,350/m² and villas at €950–1,400/m² (2nd half of 2025). In the rural mountain zone economy homes are at €450–600/m². These are estimated ranges, not signed prices." },
    { d: "Are there schools in Madonna del Sasso?", r: "No: the register of state schools for 2026/27 lists none in the municipality. The nearest are in San Maurizio d'Opaglio, 9 min by car, with nursery, primary and lower secondary. Private (paritarie) schools are not in the Ministry data." },
    { d: "Can you see the lake from Madonna del Sasso?", r: "The sanctuary stands on a granite spur above the lake, and Boleto's town hall is about 400 m above the water. How much of the lake you see from a given house depends on position and aspect: check on site." },
    { d: "Which is the reference hospital?", r: "The municipality is in the VCO province: Omegna, 22 min away, has a first-aid point with limited hours, not an emergency department. Level-I emergency departments are in Verbania and Domodossola for ASL VCO, and in Borgomanero for ASL Novara." },
    { d: "Can I buy here through OrtaVillas?", r: "Yes: TriesteVillas srl is a registered agency and can act as broker on the lake. Today, however, the lake's Private Collection has 0 homes, and this page is not a listing. Sign up to be notified, or write to richieste@triestevillas.com or call +39 347 8628738." },
  ],
  fonti,
};

const de: TestiLuogo = {
  titolo: "Madonna del Sasso: Wohnen über dem Ortasee, Preise, Grenzen",
  descrizione: "Madonna del Sasso, 351 Einwohner auf 689 m, 400 m über dem Ortasee: Wallfahrtskirche am Kamm, OMI-Werte 2025, keine Schule, keine Bahn, 81 Min. von Mailand.",
  frase: "Madonna del Sasso ist die Gemeinde auf dem Kamm des Westufers, mit dem Rathaus in Boleto auf 689 m, etwa 400 m über dem See: 351 Einwohner, 81 Min. von Mailand.",
  vivere: [
    {
      titolo: "Eine Wallfahrtskirche auf dem Fels",
      testo: "Die Gemeinde ist nach der Wallfahrtskirche Madonna del Sasso benannt, Anfang des 18. Jahrhunderts auf einem großen Granitsporn über dem See gebaut, an der Stelle einer spätmittelalterlichen Kapelle. Das Altarbild der Kreuzabnahme stammt von Fermo Stella da Caravaggio, 1547.\n\nDas Rathaus steht im Ortsteil Boleto auf 689 m: etwa 400 m über dem See und 1,2 km Luftlinie vom Ufer. Es ist der Balkon des Westufers: Von oben schaut man nach Orta und zur Insel am anderen Ufer."
    },
    {
      titolo: "Ein kleiner Ort, Versorgung anderswo",
      testo: "Madonna del Sasso hat 351 Einwohner (ISTAT, 1. Januar 2025; Schätzung 2026: 347). In der Gemeinde gibt es keine staatliche Schule: Das Schulregister des Ministeriums für 2026/27 führt keine. Für Schule und Einkauf fährt man hinunter nach San Maurizio d'Opaglio (9 Min.), Pella (11) oder Gozzano (16).\n\nDie Gemeinde liegt in der Provinz Verbano-Cusio-Ossola. Das nahe Krankenhaus ist Omegna (22 Min.), mit einer Erste-Hilfe-Stelle und keiner Notaufnahme; die Notaufnahmen der Stufe I der ASL VCO sind in Verbania und Domodossola, für die Provinz Novara in Borgomanero."
    },
    {
      titolo: "Sommerlicht, kaum Risiken",
      testo: "Am 21. Dezember ergibt unsere Berechnung 6 h 54 min direkte Sonne, von 8.11 bis 15.04 Uhr. Am 21. Juni sind es 14 h 48 min, der höchste Wert der sechzehn Orte: In dieser Höhe ist der Osthorizont fast flach (1°). Berechnet ist nur das Gelände.\n\nLaut ISPRA ist die Fläche mit hoher oder sehr hoher Rutschungsgefahr in der Gemeinde null, und kein Einwohner lebt in Gebieten mittlerer Hochwassergefahr. Die echte Grenze ist die Entfernung: keine Bahn am Westufer, Bergstraßen, und im Winter Höhe und Glätte."
    },
    {
      titolo: "Was man kauft und zu welchem Preis",
      testo: "Laut OMI (2. Halbjahr 2025) werden im Ortskern, Zone B1, Wohnungen mit 900–1.350 €/m² bewertet, Villen mit 950–1.400 €/m², einfache Wohnungen mit 600–850 €/m². In der ländlichen Bergzone R1 sind nur einfache Wohnungen bewertet, 450–600 €/m². Gegenüber dem 2. Halbjahr 2024 stiegen Wohnungen um 2,3 % in der Mitte der Spanne, Villen blieben gleich.\n\nDas ist etwa die Hälfte der Werte am Ufer von Orta. Das sind Richtwerte, keine Kaufpreise: Spannen nach Zone und Typ, auf die Bruttofläche und bei normalem Zustand."
    },
    {
      titolo: "Anreise",
      testo: "Mit dem Auto, ohne Verkehr: 81 Min. (91 km) vom Mailänder Dom, 61 Min. (51 km) von Malpensa T1, 88 Min. von Lugano. Die nächsten Bahnhöfe, Orta-Miasino und Pettenasco, liegen etwa 4 km Luftlinie entfernt, aber am anderen Ufer.\n\nDie nächste Anlegestelle ist San Filiberto, 1,2 km Luftlinie entfernt und viel tiefer. Vom 4. bis 31. Oktober 2026 hält dort die Runde Orta–Insel–Pella–San Filiberto–Lagna alle 35–45 Minuten; der Liniendienst fährt von März bis Oktober."
    },
  ],
  perChi: {
    si: [
      "Sie wollen den See von oben, 400 m über dem Wasser, und viel Sommerlicht.",
      "Sie suchen niedrige Werte: Wohnungen zu 900–1.350 €/m².",
      "Sie wollen eine Gemeinde ohne Rutschgebiete P3–P4.",
    ],
    no: [
      "Sie haben Kinder im Schulalter: In der Gemeinde gibt es keine staatliche Schule.",
      "Sie wollen zu Fuß zum See oder mit dem Zug fahren.",
      "Sie wollen im Winter nicht bergauf fahren.",
    ],
  },
  faq: [
    { d: "Was kostet ein Haus in Madonna del Sasso?", r: "Im Ortskern bewertet die OMI Wohnungen mit 900–1.350 €/m² und Villen mit 950–1.400 €/m² (2. Halbjahr 2025). In der ländlichen Bergzone liegen einfache Wohnungen bei 450–600 €/m². Das sind geschätzte Spannen, keine unterschriebenen Preise." },
    { d: "Gibt es Schulen in Madonna del Sasso?", r: "Nein: Das Register der staatlichen Schulen für 2026/27 führt in der Gemeinde keine. Die nächsten sind in San Maurizio d'Opaglio, 9 Min. mit dem Auto, mit Kindergarten, Grund- und Mittelschule. Private Schulen sind in den Daten des Ministeriums nicht enthalten." },
    { d: "Sieht man von Madonna del Sasso den See?", r: "Die Wallfahrtskirche steht auf einem Granitsporn über dem See, das Rathaus in Boleto etwa 400 m über dem Wasser. Wie viel See man von einem bestimmten Haus sieht, hängt von Lage und Ausrichtung ab: Das prüft man vor Ort." },
    { d: "Welches Krankenhaus ist zuständig?", r: "Die Gemeinde liegt in der Provinz VCO: Omegna, 22 Min. entfernt, hat eine Erste-Hilfe-Stelle mit begrenzten Zeiten, keine Notaufnahme. Notaufnahmen der Stufe I sind in Verbania und Domodossola (ASL VCO) und in Borgomanero (ASL Novara)." },
    { d: "Kann ich hier über OrtaVillas kaufen?", r: "Ja: TriesteVillas srl ist eine eingetragene Agentur und darf am See vermitteln. Heute hat die Private Collection am See allerdings 0 Häuser, und diese Seite ist keine Anzeige. Tragen Sie sich ein, um benachrichtigt zu werden, oder schreiben Sie an richieste@triestevillas.com bzw. rufen Sie +39 347 8628738 an." },
  ],
  fonti,
};

const sl: TestiLuogo = {
  titolo: "Madonna del Sasso: življenje nad jezerom Orta, cene, omejitve",
  descrizione: "Madonna del Sasso, 351 prebivalcev na 689 m, 400 m nad jezerom Orta: svetišče na grebenu, vrednosti OMI 2025, brez šol in železnice, 81 min od Milana.",
  frase: "Madonna del Sasso je občina na grebenu zahodne obale, s sedežem v Boletu na 689 m, približno 400 m nad jezerom: 351 prebivalcev, 81 min od Milana.",
  vivere: [
    {
      titolo: "Svetišče na skali",
      testo: "Občina je dobila ime po svetišču Madonna del Sasso, zgrajenem v začetku 18. stoletja na velikem granitnem pomolu nad jezerom, na mestu poznosrednjeveške kapele. Oltarna slika Snemanja s križa je delo Ferma Stelle da Caravaggio iz leta 1547.\n\nSedež občine je v zaselku Boleto na 689 m: približno 400 m nad jezerom in 1,2 km zračne črte od obale. To je balkon zahodne obale: od zgoraj gledate proti Orti in otoku na drugi strani."
    },
    {
      titolo: "Majhen kraj, storitve drugje",
      testo: "Madonna del Sasso ima 351 prebivalcev (ISTAT, 1. januar 2025; ocena 2026: 347). V občini ni državne šole: register ministrstva za šolsko leto 2026/27 ne navaja nobene. Za šolo in nakupe se spustite v San Maurizio d'Opaglio (9 min), Pello (11) ali Gozzano (16).\n\nObčina leži v pokrajini Verbano-Cusio-Ossola. Bližnja bolnišnica je v Omegni (22 min), s točko prve pomoči in brez urgence; urgenci I. stopnje zdravstvene ustanove ASL VCO sta v Verbanii in Domodossoli, za pokrajino Novara pa v Borgomaneru."
    },
    {
      titolo: "Poletna svetloba, skoraj brez tveganj",
      testo: "21. decembra naš izračun da 6 h 54 min neposrednega sonca, od 8.11 do 15.04. 21. junija je sonca 14 h 48 min, največ med šestnajstimi kraji: na tej višini je obzorje proti vzhodu skoraj ravno (1°). Izračun upošteva le teren.\n\nPo podatkih ISPRA je površina z visoko ali zelo visoko nevarnostjo plazov v občini enaka nič, noben prebivalec pa ne živi na območjih srednje poplavne nevarnosti. Prava omejitev je razdalja: na zahodni obali ni železnice, ceste so gorske, pozimi pa je treba računati na višino in poledico."
    },
    {
      titolo: "Kaj se kupuje in po kakšni ceni",
      testo: "Po podatkih OMI (2. polletje 2025) so v naselju, v coni B1, običajna stanovanja ovrednotena na 900–1.350 €/m², vile na 950–1.400 €/m², skromnejša stanovanja na 600–850 €/m². V podeželski gorski coni R1 so ovrednotena le skromnejša stanovanja, 450–600 €/m². Glede na 2. polletje 2024 so se stanovanja v sredini razpona podražila za 2,3 %, vile so ostale enake.\n\nTo je približno polovica vrednosti ob obali v Orti. To so ocenjene vrednosti, ne kupnine: razponi po coni in vrsti, na bruto površino in pri običajnem stanju."
    },
    {
      titolo: "Kako pridete",
      testo: "Z avtom, brez prometa: 81 min (91 km) od milanske stolnice, 61 min (51 km) od letališča Malpensa T1, 88 min od Lugana. Najbližji postaji, Orta-Miasino in Pettenasco, sta približno 4 km zračne črte stran, vendar na drugi obali.\n\nNajbližji pristan je San Filiberto, 1,2 km zračne črte in precej niže. Od 4. do 31. oktobra 2026 tam krožna linija Orta–otok–Pella–San Filiberto–Lagna ustavi vsakih 35–45 minut; redna linija vozi od marca do oktobra."
    },
  ],
  perChi: {
    si: [
      "Želite jezero od zgoraj, 400 m nad vodo, in veliko poletne svetlobe.",
      "Iščete nizke vrednosti: stanovanja po 900–1.350 €/m².",
      "Želite občino brez plazovitih območij P3–P4.",
    ],
    no: [
      "Imate šoloobvezne otroke: v občini ni državne šole.",
      "Želite peš do jezera ali z vlakom.",
      "Pozimi ne želite voziti v breg.",
    ],
  },
  faq: [
    { d: "Koliko stane hiša v Madonna del Sasso?", r: "V naselju OMI vrednoti običajna stanovanja na 900–1.350 €/m², vile na 950–1.400 €/m² (2. polletje 2025). V podeželski gorski coni so skromnejša stanovanja po 450–600 €/m². To so ocenjeni razponi, ne podpisane cene." },
    { d: "Ali so v Madonna del Sasso šole?", r: "Ne: register državnih šol za šolsko leto 2026/27 v občini ne navaja nobene. Najbližje so v San Maurizio d'Opaglio, 9 min vožnje, z vrtcem, osnovno in nižjo srednjo šolo. Zasebne šole niso v podatkih ministrstva." },
    { d: "Ali se iz Madonna del Sasso vidi jezero?", r: "Svetišče stoji na granitnem pomolu nad jezerom, sedež občine v Boletu pa približno 400 m nad vodo. Koliko jezera vidite iz posamezne hiše, je odvisno od lege: preverite na kraju samem." },
    { d: "Katera bolnišnica je pristojna?", r: "Občina leži v pokrajini VCO: Omegna, 22 min stran, ima točko prve pomoči z omejenim urnikom, ne urgence. Urgence I. stopnje so v Verbanii in Domodossoli (ASL VCO) ter v Borgomaneru (ASL Novara)." },
    { d: "Ali lahko tukaj kupim prek OrtaVillas?", r: "Da: TriesteVillas srl je registrirana nepremičninska agencija in ob jezeru lahko posreduje. Danes pa ima Private Collection ob jezeru 0 hiš, ta stran pa ni oglas. Prijavite se za obvestila ali nam pišite na richieste@triestevillas.com oziroma pokličite +39 347 8628738; odgovarjamo v italijanščini, angleščini in nemščini." },
  ],
  fonti,
};

const testi: PerLingua<TestiLuogo> = { it, en, de, sl };
export default testi;
