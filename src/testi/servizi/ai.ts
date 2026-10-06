import type { Lingua } from "@/lib/rotte";

// AI · titoli di coda. Il registro dichiara 0 media generati o rielaborati con l'AI: le sole
// immagini del sito sono quattro foto Unsplash (autori non registrati al download) e un video
// girato da una proprietà sul lago (non attribuito). Lo si dice, invece di inventare un credito.
export type Ripresa = { file: string; alt: string; titolo: string };
export type TestiAi = {
  titolo: string; descrizione: string; briciola: string;
  occhiello: string; h1: string; lead: string;
  indice: { regole: string; registro: string; reale: string; caso: string };
  regole: [string, string][];
  registro: { caption: string; testo: string; colonneTitolo: string; colonne: string[] };
  reale: { testo: string; foto: Ripresa[]; fonteFoto: string; video: { titolo: string; testo: string }; limite: string };
  caso: { testo: string; film: string; tour: string; scheda: string; registro: string };
};

const FILE = ["isola-san-giulio-lago-orta.jpg", "lago-orta-isola-san-giulio-dallalto.jpg", "pontile-tramonto-lago-orta.jpg", "panorama-mottarone-lago-orta.jpg"];
const foto = (alt: [string, string, string, string], tit: [string, string, string, string]): Ripresa[] => FILE.map((file, i) => ({ file, alt: alt[i], titolo: tit[i] }));

const it: TestiAi = {
  titolo: "Titoli di coda: le immagini del sito e l'AI",
  descrizione: "Il registro delle immagini e dei video rielaborati con l'intelligenza artificiale su ortavillas.com: oggi sono 0. Le regole, e l'elenco delle riprese vere con fonte e licenza.",
  briciola: "Titoli di coda",
  occhiello: "Immagini e AI",
  h1: "Titoli di coda",
  lead: "Ogni immagine o video di questo sito rielaborato o generato con l'intelligenza artificiale avrebbe qui la sua riga: foto di partenza, autore, licenza, modello, che cosa è cambiato. Oggi il registro è vuoto, e qui sotto c'è l'elenco delle riprese vere.",
  indice: { regole: "Le regole", registro: "Il registro", reale: "Ripresa reale", caso: "Il caso di Trieste" },
  regole: [
    ["Solo a scala di paesaggio.", "Mai una casa, un giardino o una via riconoscibile: lì un'immagine rielaborata direbbe il falso."],
    ["Foto di partenza libere.", "Pubblico dominio, CC0, CC BY o licenza Unsplash, con fonte e, quando c'è, autore; oppure immagini generate da un testo, dichiarate come tali."],
    ["La geometria non si tocca.", "Si possono cambiare luce, cielo e stagione, togliere auto, cartelli e cavi; non si aggiungono né si tolgono edifici, moli, isole o campanili."],
    ["Il segno sull'immagine.", "Ogni media generato o rielaborato porta il segno «AI» e la sua riga in questa pagina."],
    ["Il materiale vero resta vero.", "Le foto e il video del lago, i film, i tour 3D e le schede di TriesteVillas non sono ritoccati su questo sito."],
  ],
  registro: {
    caption: "Media generati o rielaborati con AI",
    testo: "Su ortavillas.com, edizione 01, nessuna immagine e nessun video è stato generato o rielaborato con l'intelligenza artificiale. Quando succederà, ogni media avrà qui una riga con queste colonne:",
    colonneTitolo: "Le colonne del registro",
    colonne: ["Media", "Luogo", "Foto di partenza, autore e licenza", "Modello e job", "Che cosa è cambiato, e che cosa no", "Data e verifica"],
  },
  reale: {
    testo: "Le immagini di questo sito sono riprese vere, non generate. Ecco tutte, con la loro fonte.",
    foto: foto(
      ["L'isola di San Giulio vista dalla riva, con la basilica, il campanile e le case sull'acqua, le montagne alle spalle.", "L'isola di San Giulio vista dall'alto, con la basilica e il campanile sull'acqua verde del lago.", "Un pontile di legno sul lago d'Orta al tramonto, con l'acqua ferma e i monti in controluce.", "Prati del Mottarone con il lago d'Orta in basso e le colline in lontananza."],
      ["L'isola di San Giulio dalla riva", "L'isola di San Giulio dall'alto", "Un pontile al tramonto", "Il lago dal Mottarone"],
    ),
    fonteFoto: "Unsplash · licenza Unsplash · autore non registrato al momento del download",
    video: { titolo: "Il video della prima pagina", testo: "Ripresa reale da una proprietà sul lago d'Orta. Non è attribuita: non ne pubblichiamo l'autore né il luogo esatto." },
    limite: "Un limite che diciamo: per le quattro foto non abbiamo registrato il nome dell'autore quando le abbiamo scaricate. La licenza Unsplash non lo impone, ma è un credito che manca: se riconoscete una vostra foto, scriveteci e lo aggiungiamo.",
  },
  caso: {
    testo: "Il materiale di TriesteVillas che compare su questo sito è il caso di Trieste, «Villa storica Strada Costiera»: vero, non generato, e si apre dalla sua fonte.",
    film: "Il film su YouTube",
    tour: "Il tour 3D su Matterport",
    scheda: "La scheda su triestevillas.com",
    registro: "Su triestevillas.com l'uso dell'AI sulle foto delle schede è registrato foto per foto: oggi 1.789 foto.",
  },
};

const en: TestiAi = {
  titolo: "Closing credits: the site's images and AI",
  descrizione: "The register of images and videos reworked with artificial intelligence on ortavillas.com: today there are 0. The rules, and the list of real footage with source and licence.",
  briciola: "Closing credits",
  occhiello: "Images and AI",
  h1: "Closing credits",
  lead: "Every image or video on this site reworked or generated with artificial intelligence would have its line here: source photo, author, licence, model, what changed. Today the register is empty, and below is the list of real footage.",
  indice: { regole: "The rules", registro: "The register", reale: "Real footage", caso: "The Trieste case" },
  regole: [
    ["Landscape scale only.", "Never a recognisable house, garden or street: there a reworked image would tell a lie."],
    ["Free source photos.", "Public domain, CC0, CC BY or the Unsplash licence, with the source and, where known, the author; or images generated from text, declared as such."],
    ["Geometry is not touched.", "Light, sky and season may change, cars, signs and cables may be removed; buildings, piers, islands or bell towers are never added or removed."],
    ["The mark on the image.", "Every generated or reworked medium carries the “AI” mark and its line on this page."],
    ["Real material stays real.", "The photos and video of the lake, the films, 3D tours and TriesteVillas listings are not retouched on this site."],
  ],
  registro: {
    caption: "Media generated or reworked with AI",
    testo: "On ortavillas.com, edition 01, no image and no video has been generated or reworked with artificial intelligence. When that happens, each medium will have a line here with these columns:",
    colonneTitolo: "The register's columns",
    colonne: ["Medium", "Place", "Source photo, author and licence", "Model and job", "What changed, and what did not", "Date and check"],
  },
  reale: {
    testo: "The images on this site are real footage, not generated. Here they all are, with their source.",
    foto: foto(
      ["The island of San Giulio seen from the shore, with the basilica, the bell tower and houses on the water, mountains behind.", "The island of San Giulio seen from above, with the basilica and bell tower on the green water of the lake.", "A wooden jetty on Lake Orta at sunset, with still water and mountains against the light.", "Meadows of the Mottarone with Lake Orta below and hills in the distance."],
      ["San Giulio island from the shore", "San Giulio island from above", "A jetty at sunset", "The lake from the Mottarone"],
    ),
    fonteFoto: "Unsplash · Unsplash licence · author not recorded at download",
    video: { titolo: "The home page video", testo: "Real footage from a property on Lake Orta. It is not attributed: we publish neither its author nor the exact place." },
    limite: "A limit we state: for the four photos we did not record the author's name when we downloaded them. The Unsplash licence does not require it, but it is a missing credit: if you recognise your photo, write to us and we will add it.",
  },
  caso: {
    testo: "The TriesteVillas material on this site is the Trieste case, “Villa storica Strada Costiera”: real, not generated, and it opens from its source.",
    film: "The film on YouTube",
    tour: "The 3D tour on Matterport",
    scheda: "The listing on triestevillas.com",
    registro: "On triestevillas.com the use of AI on listing photos is recorded photo by photo: 1,789 photos today.",
  },
};

const de: TestiAi = {
  titolo: "Abspann: die Bilder der Website und die KI",
  descrizione: "Das Register der mit künstlicher Intelligenz bearbeiteten Bilder und Videos auf ortavillas.com: heute 0. Die Regeln und die Liste der echten Aufnahmen mit Quelle und Lizenz.",
  briciola: "Abspann",
  occhiello: "Bilder und KI",
  h1: "Abspann",
  lead: "Jedes Bild oder Video dieser Website, das mit künstlicher Intelligenz bearbeitet oder erzeugt wurde, hätte hier seine Zeile: Ausgangsfoto, Urheber, Lizenz, Modell, was sich geändert hat. Heute ist das Register leer, und unten steht die Liste der echten Aufnahmen.",
  indice: { regole: "Die Regeln", registro: "Das Register", reale: "Echte Aufnahmen", caso: "Das Beispiel Triest" },
  regole: [
    ["Nur im Maßstab der Landschaft.", "Nie ein erkennbares Haus, ein Garten oder eine Straße: Dort würde ein bearbeitetes Bild die Unwahrheit sagen."],
    ["Freie Ausgangsfotos.", "Gemeinfrei, CC0, CC BY oder Unsplash-Lizenz, mit Quelle und, wo bekannt, Urheber; oder aus Text erzeugte Bilder, als solche gekennzeichnet."],
    ["Die Geometrie bleibt unberührt.", "Licht, Himmel und Jahreszeit dürfen sich ändern, Autos, Schilder und Kabel verschwinden; Gebäude, Stege, Inseln oder Glockentürme werden nie hinzugefügt oder entfernt."],
    ["Das Zeichen auf dem Bild.", "Jedes erzeugte oder bearbeitete Medium trägt das Zeichen „KI“ und seine Zeile auf dieser Seite."],
    ["Echtes bleibt echt.", "Die Fotos und das Video vom See, die Filme, 3D-Rundgänge und Exposés von TriesteVillas sind auf dieser Website nicht retuschiert."],
  ],
  registro: {
    caption: "Mit KI erzeugte oder bearbeitete Medien",
    testo: "Auf ortavillas.com, Ausgabe 01, wurde kein Bild und kein Video mit künstlicher Intelligenz erzeugt oder bearbeitet. Wenn es so weit ist, bekommt jedes Medium hier eine Zeile mit diesen Spalten:",
    colonneTitolo: "Die Spalten des Registers",
    colonne: ["Medium", "Ort", "Ausgangsfoto, Urheber und Lizenz", "Modell und Job", "Was sich geändert hat, und was nicht", "Datum und Prüfung"],
  },
  reale: {
    testo: "Die Bilder dieser Website sind echte Aufnahmen, nicht erzeugt. Hier sind alle, mit ihrer Quelle.",
    foto: foto(
      ["Die Insel San Giulio vom Ufer aus, mit Basilika, Glockenturm und Häusern am Wasser, dahinter die Berge.", "Die Insel San Giulio von oben, mit Basilika und Glockenturm auf dem grünen Wasser des Sees.", "Ein Holzsteg am Ortasee bei Sonnenuntergang, mit stillem Wasser und Bergen im Gegenlicht.", "Wiesen des Mottarone mit dem Ortasee unten und Hügeln in der Ferne."],
      ["Die Insel San Giulio vom Ufer", "Die Insel San Giulio von oben", "Ein Steg bei Sonnenuntergang", "Der See vom Mottarone"],
    ),
    fonteFoto: "Unsplash · Unsplash-Lizenz · Urheber beim Herunterladen nicht erfasst",
    video: { titolo: "Das Video der Startseite", testo: "Echte Aufnahme von einem Anwesen am Ortasee. Sie ist nicht zugeschrieben: Wir veröffentlichen weder den Urheber noch den genauen Ort." },
    limite: "Eine Grenze, die wir nennen: Bei den vier Fotos haben wir den Namen des Urhebers beim Herunterladen nicht erfasst. Die Unsplash-Lizenz verlangt ihn nicht, aber es fehlt eine Nennung: Wenn Sie Ihr Foto erkennen, schreiben Sie uns, und wir ergänzen sie.",
  },
  caso: {
    testo: "Das Material von TriesteVillas auf dieser Website ist das Beispiel aus Triest, „Villa storica Strada Costiera“: echt, nicht erzeugt, und es öffnet sich von seiner Quelle aus.",
    film: "Der Film auf YouTube",
    tour: "Der 3D-Rundgang auf Matterport",
    scheda: "Das Exposé auf triestevillas.com",
    registro: "Auf triestevillas.com ist der KI-Einsatz bei den Exposé-Fotos Foto für Foto erfasst: heute 1.789 Fotos.",
  },
};

const sl: TestiAi = {
  titolo: "Odjavna špica: slike spletnega mesta in UI",
  descrizione: "Evidenca slik in videoposnetkov, obdelanih z umetno inteligenco na ortavillas.com: danes jih je 0. Pravila in seznam resničnih posnetkov z virom in licenco.",
  briciola: "Odjavna špica",
  occhiello: "Slike in UI",
  h1: "Odjavna špica",
  lead: "Vsaka slika ali videoposnetek tega spletnega mesta, obdelan ali ustvarjen z umetno inteligenco, bi imel tu svojo vrstico: izhodiščno fotografijo, avtorja, licenco, model in kaj se je spremenilo. Danes je evidenca prazna, spodaj pa je seznam resničnih posnetkov.",
  indice: { regole: "Pravila", registro: "Evidenca", reale: "Resnični posnetki", caso: "Primer iz Trsta" },
  regole: [
    ["Samo v merilu pokrajine.", "Nikoli prepoznavna hiša, vrt ali ulica: tam bi obdelana slika govorila neresnico."],
    ["Proste izhodiščne fotografije.", "Javna last, CC0, CC BY ali licenca Unsplash, z virom in, kadar je znan, avtorjem; ali slike, ustvarjene iz besedila, označene kot take."],
    ["Geometrija ostane nedotaknjena.", "Lahko se spremenijo svetloba, nebo in letni čas ter odstranijo avtomobili, znaki in kabli; stavb, pomolov, otokov ali zvonikov ne dodajamo in ne odstranjujemo."],
    ["Oznaka na sliki.", "Vsak ustvarjen ali obdelan medij nosi oznako »UI« in svojo vrstico na tej strani."],
    ["Resnično ostane resnično.", "Fotografije in video jezera, filmi, 3D-ogledi in predstavitve TriesteVillas na tem spletnem mestu niso retuširani."],
  ],
  registro: {
    caption: "Mediji, ustvarjeni ali obdelani z UI",
    testo: "Na ortavillas.com, izdaja 01, nobena slika in noben videoposnetek ni bil ustvarjen ali obdelan z umetno inteligenco. Ko se bo to zgodilo, bo imel vsak medij tu vrstico s temi stolpci:",
    colonneTitolo: "Stolpci evidence",
    colonne: ["Medij", "Kraj", "Izhodiščna fotografija, avtor in licenca", "Model in opravilo", "Kaj se je spremenilo in kaj ne", "Datum in preverjanje"],
  },
  reale: {
    testo: "Slike tega spletnega mesta so resnični posnetki, ne ustvarjeni. Tu so vse, z virom.",
    foto: foto(
      ["Otok San Giulio z obale, z baziliko, zvonikom in hišami ob vodi, zadaj gore.", "Otok San Giulio od zgoraj, z baziliko in zvonikom na zeleni vodi jezera.", "Lesen pomol na jezeru Orta ob sončnem zahodu, z mirno vodo in gorami v protisvetlobi.", "Travniki na Mottaroneju z jezerom Orta spodaj in griči v daljavi."],
      ["Otok San Giulio z obale", "Otok San Giulio od zgoraj", "Pomol ob sončnem zahodu", "Jezero z Mottaroneja"],
    ),
    fonteFoto: "Unsplash · licenca Unsplash · avtor ob prenosu ni bil zabeležen",
    video: { titolo: "Video na prvi strani", testo: "Resničen posnetek z nepremičnine ob jezeru Orta. Ni pripisan: ne objavljamo ne avtorja ne natančnega kraja." },
    limite: "Omejitev, ki jo povemo: pri štirih fotografijah ob prenosu nismo zabeležili imena avtorja. Licenca Unsplash tega ne zahteva, a navedba manjka: če prepoznate svojo fotografijo, nam pišite in jo bomo dodali.",
  },
  caso: {
    testo: "Gradivo TriesteVillas na tem spletnem mestu je primer iz Trsta, »Villa storica Strada Costiera«: resnično, ne ustvarjeno, in odpre se iz svojega vira.",
    film: "Film na YouTubu",
    tour: "3D-ogled na Matterportu",
    scheda: "Predstavitev na triestevillas.com",
    registro: "Na triestevillas.com je uporaba UI pri fotografijah predstavitev zabeležena fotografijo za fotografijo: danes 1.789 fotografij.",
  },
};

export const AI: Record<Lingua, TestiAi> = { it, en, de, sl };
