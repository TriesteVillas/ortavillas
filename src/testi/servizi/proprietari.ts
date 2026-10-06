import type { Lingua } from "@/lib/rotte";
import type { Domanda } from "@/components/servizi/Parti";

// Per i proprietari (+ grazie). A differenza della Slovenia, sul lago possiamo mediare: lo si
// dice, insieme a ciò che ancora manca (0 case in collezione, nessun caso pubblico sul lago).
export type TestiProprietari = {
  titolo: string; descrizione: string; briciola: string;
  occhiello: string; h1: string; lead: string; cta: string;
  fatto: { occhiello: string; unita: string; testo: (comune: string, zona: string) => string; barreTitolo: string; righe: { ntnNo: string; ntnVb: string; crm: string }; fonte: string };
  metodo: { occhiello: string; h2: string; lead: string };
  oggi: { occhiello: string; h2: string; lead: string; titoli: [string, string]; si: string[]; no: string[]; nota: string; tappeTitolo: string; tappe: { quando: string; titolo: string; testo: string }[]; stato: string; agenzie: string };
  presentazione: { occhiello: string; h2: string; testo: string; voce: string; garanzie: string[] };
  domande: { occhiello: string; h2: string; voci: Domanda[] };
  grazie: { titolo: string; descrizione: string; h1: string; testo: string; luoghi: string; adessoOcchiello: string; adessoH2: string; tappe: { quando: string; titolo: string; testo: string }[]; casoOcchiello: string; casoH2: string };
};

const it: TestiProprietari = {
  titolo: "Avete una casa sul lago d'Orta? Come la presentiamo",
  descrizione: "Una casa sul lago d'Orta: come la valutiamo con le quotazioni OMI e il catasto, come la raccontiamo a chi compra da Milano, Zurigo e Monaco, e che cosa possiamo fare oggi.",
  briciola: "Per i proprietari",
  occhiello: "Per i proprietari",
  h1: "La vostra casa sul lago d'Orta, raccontata a chi compra da Milano, Zurigo e Monaco.",
  lead: "TriesteVillas è un'agenzia iscritta in Italia: sul lago possiamo già valutare una casa e, se lo decidete, riceverne l'incarico. Lo diciamo però con chiarezza: oggi in collezione non c'è ancora nessuna casa del lago, e il caso che vi mostriamo è di Trieste.",
  cta: "Presentateci la casa",
  fatto: {
    occhiello: "Il fatto in un numero",
    unita: "€/m²",
    testo: (c, z) => `è la quotazione più alta che l'OMI dà sul lago per ville e villini: ${c}, zona «${z}», 2° semestre 2025. Nelle zone più care di ogni comune, il massimo per le ville:`,
    barreTitolo: "Ville e villini, massimo della zona più cara",
    righe: {
      ntnNo: "abitazioni compravendute nel 2025 nei comuni della provincia di Novara, capoluogo escluso",
      ntnVb: "nel Verbano-Cusio-Ossola, capoluogo escluso",
      crm: "compratori hanno scritto al CRM di TriesteVillas in dodici mesi, per case a Trieste; 105 da Austria, Germania e Svizzera",
    },
    fonte: "Agenzia delle Entrate – OMI, quotazioni del 2° semestre 2025 e volumi di compravendita (2025 provvisorio), CC BY 4.0, estratti il 6 ottobre 2026. Le quotazioni sono intervalli stimati per zona, non prezzi di vendita. CRM TriesteVillas, conteggio del 5 ottobre 2026.",
  },
  metodo: {
    occhiello: "Come lavoriamo a Trieste",
    h2: "Una casa vera, dall'analisi alla Private Collection.",
    lead: "Sul lago non abbiamo ancora un caso pubblico. Ecco i cinque passaggi su una casa di Trieste: il tour e il film si aprono qui sotto, ed è il lavoro che faremmo sulla vostra.",
  },
  oggi: {
    occhiello: "Con chiarezza",
    h2: "Che cosa possiamo fare oggi, e che cosa non c'è ancora.",
    lead: "In Italia la mediazione immobiliare è un'attività regolata, e TriesteVillas srl è un'agenzia iscritta. Sul lago d'Orta, oggi, la linea è questa.",
    titoli: ["Oggi, sì", "Non ancora"],
    si: [
      "Leggiamo la vostra presentazione e vi rispondiamo, in italiano, inglese o tedesco.",
      "Una valutazione ragionata: le quotazioni OMI della vostra zona, i dati catastali, i documenti, punti deboli compresi.",
      "Un incarico di mediazione, se lo decidete: per iscritto, con la provvigione scritta prima di cominciare.",
      "Il racconto in quattro lingue, con fotografie, tour 3D e film, come facciamo a Trieste.",
    ],
    no: [
      "Case del lago in collezione: oggi sono 0.",
      "Un caso pubblico sul lago: quello che vi mostriamo è di Trieste.",
      "Un ufficio sul lago: l'ufficio è a Trieste.",
      "Compratori già pronti per la vostra casa: i 1.312 che ci hanno scritto cercavano a Trieste, non sul lago.",
    ],
    nota: "Per la legge italiana ha diritto alla provvigione solo il mediatore iscritto (legge 3 febbraio 1989 n. 39, art. 6). TriesteVillas srl è iscritta alla Camera di Commercio di Trieste, REA TS 134793. In provincia di Novara, salvo patto diverso, l'uso è del 3% per ciascuna parte (Camera di Commercio di Novara, Raccolta provinciale degli usi, 2005): è un uso, non un tetto di legge, e da noi la provvigione si scrive comunque nell'incarico.",
    tappeTitolo: "Dalla presentazione all'incarico",
    tappe: [
      { quando: "Oggi", titolo: "Ci presentate la casa", testo: "Comune, tipo, qualche riga e un link, se c'è. Niente foto per ora." },
      { quando: "Poi", titolo: "Ve la leggiamo", testo: "Quotazioni OMI della zona, catasto e documenti, e che cosa chiedono i compratori che ci scrivono. Ve lo diciamo, punti deboli compresi." },
      { quando: "Se decidete", titolo: "L'incarico, per iscritto", testo: "Durata, prezzo e provvigione nero su bianco. Se non decidete, finisce lì, senza costi." },
      { quando: "Dopo l'incarico", titolo: "Il racconto", testo: "Fotografie, tour 3D, film e testi in quattro lingue; per chi lo preferisce, la Private Collection invece dei portali." },
    ],
    stato: "A che punto siamo, nel dettaglio",
    agenzie: "Siete un'agenzia del lago? Leggete il nostro invito a collaborare",
  },
  presentazione: {
    occhiello: "Presentateci la casa",
    h2: "Pochi minuti, nessun impegno.",
    testo: "Comune, tipo, qualche riga e il link a un annuncio, se esiste. Niente foto per ora: se serviranno, ve le chiederemo noi.",
    voce: "Preferite parlarne a voce? Scriveteci su WhatsApp o chiamateci.",
    garanzie: ["Non firmate nulla e non pagate nulla.", "I dati restano nel CRM di TriesteVillas, a Trieste.", "Potete chiederci di cancellarli quando volete."],
  },
  domande: {
    occhiello: "Domande",
    h2: "Le domande che ci fanno i proprietari.",
    voci: [
      { d: "Perché presentarsi adesso, se la collezione è vuota?", r: "Perché le prime case che racconteremo sul lago saranno quelle che conosciamo già. Presentarsi non vi impegna: non firmate nulla e potete ritirarvi quando volete." },
      { d: "Quanto costa?", r: "Presentarci la casa e ricevere la nostra lettura non costa niente. Se ci affidate la vendita, la provvigione si scrive nell'incarico, prima di cominciare." },
      { d: "La casa è già in vendita con un'agenzia. È un problema?", r: "No. Scrivetelo nel modulo: non contattiamo nessuno al posto vostro, e un incarico in esclusiva va rispettato. Spesso la strada giusta è collaborare con l'agenzia che avete già.", link: ["Il nostro invito alle agenzie.", "agenzie"] },
      { d: "In che lingua parliamo?", r: "In italiano, inglese o tedesco. Rispondiamo da Trieste." },
      { d: "Che cosa fate con i miei dati?", r: "Li registriamo nel CRM di TriesteVillas e li usiamo solo per questa casa. Non li passiamo ad altre agenzie senza un vostro consenso.", link: ["L'informativa sulla privacy.", "privacy"] },
      { d: "Chi c'è dietro OrtaVillas?", r: "TriesteVillas srl, di Trieste, con i suoi marchi: TriesteVillas, TriesteImmobiliare, TriesteAffitti, FriuliVillas, LignanoVillas e SloveniaVillas.", link: ["Chi siamo e a che punto siamo.", "stato"] },
    ],
  },
  grazie: {
    titolo: "Grazie: abbiamo ricevuto la vostra presentazione",
    descrizione: "Abbiamo ricevuto la presentazione della vostra casa sul lago d'Orta. Vi rispondiamo in italiano, inglese o tedesco.",
    h1: "Grazie: la presentazione è arrivata.",
    testo: "È registrata nel CRM di TriesteVillas, a Trieste, e la legge una persona del gruppo. Vi rispondiamo in italiano, inglese o tedesco, sul canale che avete scelto.",
    luoghi: "I luoghi del lago",
    adessoOcchiello: "Adesso",
    adessoH2: "Che cosa succede adesso",
    tappe: [
      { quando: "Oggi", titolo: "Leggiamo la presentazione", testo: "Comune, tipo e quello che ci avete scritto: per cominciare basta." },
      { quando: "Poi", titolo: "Vi rispondiamo", testo: "Sul canale e nella lingua che avete scelto, con le domande che servono per una prima lettura della casa." },
      { quando: "Se decidete", titolo: "L'incarico, per iscritto", testo: "Solo se lo volete. Fino ad allora non c'è niente da firmare e niente da pagare." },
    ],
    casoOcchiello: "Intanto",
    casoH2: "Guardate come lavoriamo su una casa di Trieste.",
  },
};

const en: TestiProprietari = {
  titolo: "Own a home on Lake Orta? How we would present it",
  descrizione: "A home on Lake Orta: how we value it with OMI quotations and the land registry, how we present it to buyers from Milan, Zurich and Munich, and what we can do today.",
  briciola: "For owners",
  occhiello: "For owners",
  h1: "Your home on Lake Orta, presented to buyers from Milan, Zurich and Munich.",
  lead: "TriesteVillas is an estate agency registered in Italy: on the lake we can already value a home and, if you decide so, take it on. But let us be clear: today there is no Lake Orta home in the collection yet, and the case we show you is in Trieste.",
  cta: "Present your home to us",
  fatto: {
    occhiello: "The fact in one number",
    unita: "€/m²",
    testo: (c, z) => `is the highest quotation the OMI gives on the lake for villas and detached houses: ${c}, zone “${z}”, second half of 2025. In the most expensive zone of each municipality, the top figure for villas:`,
    barreTitolo: "Villas and detached houses, top of the dearest zone",
    righe: {
      ntnNo: "homes sold in 2025 in the province of Novara, outside the provincial capital",
      ntnVb: "in Verbano-Cusio-Ossola, outside the provincial capital",
      crm: "buyers wrote to the TriesteVillas CRM in twelve months, for homes in Trieste; 105 from Austria, Germany and Switzerland",
    },
    fonte: "Italian Revenue Agency – OMI, quotations for the second half of 2025 and sales volumes (2025 provisional), CC BY 4.0, extracted on 6 October 2026. Quotations are estimated ranges per zone, not sale prices. TriesteVillas CRM, count of 5 October 2026.",
  },
  metodo: {
    occhiello: "How we work in Trieste",
    h2: "A real home, from analysis to the Private Collection.",
    lead: "We do not have a public case on the lake yet. Here are the five steps on a home in Trieste: the tour and the film open below, and it is the work we would do on yours.",
  },
  oggi: {
    occhiello: "Plainly",
    h2: "What we can do today, and what is not there yet.",
    lead: "In Italy, acting as an estate agent is a regulated activity, and TriesteVillas srl is a registered agency. On Lake Orta, today, this is where we stand.",
    titoli: ["Today, yes", "Not yet"],
    si: [
      "We read your presentation and reply, in English, Italian or German.",
      "A reasoned valuation: the OMI quotations for your zone, the cadastral data, the documents, weak points included.",
      "An agency agreement, if you decide so: in writing, with the commission set down before we start.",
      "The story in four languages, with photographs, 3D tour and film, as we do in Trieste.",
    ],
    no: [
      "Lake Orta homes in the collection: today there are 0.",
      "A public case on the lake: the one we show you is in Trieste.",
      "An office on the lake: our office is in Trieste.",
      "Buyers already lined up for your home: the 1,312 who wrote to us were looking in Trieste, not on the lake.",
    ],
    nota: "Under Italian law only a registered agent is entitled to a commission (Law no. 39 of 3 February 1989, art. 6). TriesteVillas srl is registered with the Trieste Chamber of Commerce, REA TS 134793. In the province of Novara, unless agreed otherwise, local custom is 3% from each party (Novara Chamber of Commerce, provincial collection of customs, 2005): it is a custom, not a legal cap, and with us the commission is written into the agreement in any case.",
    tappeTitolo: "From presentation to agreement",
    tappe: [
      { quando: "Today", titolo: "You present the home", testo: "Municipality, type, a few lines and a link, if there is one. No photos for now." },
      { quando: "Then", titolo: "We read it for you", testo: "OMI quotations for the zone, land registry and documents, and what the buyers who write to us ask for. We tell you, weak points included." },
      { quando: "If you decide", titolo: "The agreement, in writing", testo: "Duration, price and commission in black and white. If you do not decide, it ends there, at no cost." },
      { quando: "After the agreement", titolo: "The story", testo: "Photographs, 3D tour, film and texts in four languages; for those who prefer it, the Private Collection instead of the portals." },
    ],
    stato: "Where we stand, in detail",
    agenzie: "Are you an agency on the lake? Read our invitation to work together",
  },
  presentazione: {
    occhiello: "Present your home",
    h2: "A few minutes, no commitment.",
    testo: "Municipality, type, a few lines and the link to a listing, if there is one. No photos for now: if they are needed, we will ask.",
    voce: "Would you rather talk? Write to us on WhatsApp or call.",
    garanzie: ["You sign nothing and pay nothing.", "Your data stays in the TriesteVillas CRM, in Trieste.", "You can ask us to delete it whenever you like."],
  },
  domande: {
    occhiello: "Questions",
    h2: "The questions owners ask us.",
    voci: [
      { d: "Why come forward now, if the collection is empty?", r: "Because the first homes we present on the lake will be the ones we already know. Coming forward does not commit you: you sign nothing and can withdraw whenever you like." },
      { d: "What does it cost?", r: "Presenting your home and receiving our reading costs nothing. If you entrust us with the sale, the commission is written into the agreement before we start." },
      { d: "My home is already for sale with an agency. Is that a problem?", r: "No. Mention it in the form: we contact nobody on your behalf, and an exclusive agreement must be respected. Often the right way is to work with the agency you already have.", link: ["Our invitation to agencies.", "agenzie"] },
      { d: "What language do we speak?", r: "English, Italian or German. We reply from Trieste." },
      { d: "What do you do with my data?", r: "We record it in the TriesteVillas CRM and use it only for this home. We do not pass it to other agencies without your consent.", link: ["The privacy notice.", "privacy"] },
      { d: "Who is behind OrtaVillas?", r: "TriesteVillas srl, of Trieste, with its brands: TriesteVillas, TriesteImmobiliare, TriesteAffitti, FriuliVillas, LignanoVillas and SloveniaVillas.", link: ["About us and where we stand.", "stato"] },
    ],
  },
  grazie: {
    titolo: "Thank you: we have received your presentation",
    descrizione: "We have received the presentation of your home on Lake Orta. We reply in English, Italian or German.",
    h1: "Thank you: your presentation has arrived.",
    testo: "It is recorded in the TriesteVillas CRM, in Trieste, and a person from the group reads it. We will reply in English, Italian or German, on the channel you chose.",
    luoghi: "The places on the lake",
    adessoOcchiello: "Now",
    adessoH2: "What happens now",
    tappe: [
      { quando: "Today", titolo: "We read your presentation", testo: "Municipality, type and what you wrote: that is enough to start." },
      { quando: "Then", titolo: "We reply", testo: "On the channel and in the language you chose, with the questions needed for a first reading of the home." },
      { quando: "If you decide", titolo: "The agreement, in writing", testo: "Only if you want it. Until then there is nothing to sign and nothing to pay." },
    ],
    casoOcchiello: "Meanwhile",
    casoH2: "See how we work on a home in Trieste.",
  },
};

const de: TestiProprietari = {
  titolo: "Sie besitzen ein Haus am Ortasee? So stellen wir es vor",
  descrizione: "Ein Haus am Ortasee: wie wir es mit den OMI-Richtwerten und dem Kataster bewerten, wie wir es Käufern aus Mailand, Zürich und München vorstellen und was wir heute tun können.",
  briciola: "Für Eigentümer",
  occhiello: "Für Eigentümer",
  h1: "Ihr Haus am Ortasee, erzählt für Käufer aus Mailand, Zürich und München.",
  lead: "TriesteVillas ist ein in Italien eingetragenes Maklerbüro: Am See können wir ein Haus bereits bewerten und, wenn Sie es wünschen, einen Auftrag übernehmen. Wir sagen aber auch klar: Heute ist noch kein Haus vom See in der Collection, und das Beispiel, das wir zeigen, stammt aus Triest.",
  cta: "Stellen Sie uns Ihr Haus vor",
  fatto: {
    occhiello: "Die Tatsache in einer Zahl",
    unita: "€/m²",
    testo: (c, z) => `ist der höchste Richtwert, den die OMI am See für Villen und Einfamilienhäuser angibt: ${c}, Zone „${z}“, 2. Halbjahr 2025. In der teuersten Zone jeder Gemeinde, der Höchstwert für Villen:`,
    barreTitolo: "Villen und Einfamilienhäuser, Höchstwert der teuersten Zone",
    righe: {
      ntnNo: "Wohnungen und Häuser 2025 verkauft in den Gemeinden der Provinz Novara, ohne Hauptstadt",
      ntnVb: "im Verbano-Cusio-Ossola, ohne Hauptstadt",
      crm: "Käufer haben in zwölf Monaten an das CRM von TriesteVillas geschrieben, für Häuser in Triest; 105 aus Österreich, Deutschland und der Schweiz",
    },
    fonte: "Italienische Steuerbehörde – OMI, Richtwerte 2. Halbjahr 2025 und Verkaufsvolumen (2025 vorläufig), CC BY 4.0, abgerufen am 6. Oktober 2026. Richtwerte sind geschätzte Spannen je Zone, keine Verkaufspreise. CRM von TriesteVillas, Zählung vom 5. Oktober 2026.",
  },
  metodo: {
    occhiello: "So arbeiten wir in Triest",
    h2: "Ein echtes Haus, von der Analyse bis zur Private Collection.",
    lead: "Am See haben wir noch kein öffentliches Beispiel. Hier die fünf Schritte an einem Haus in Triest: Rundgang und Film öffnen sich unten, und es ist die Arbeit, die wir an Ihrem Haus machen würden.",
  },
  oggi: {
    occhiello: "Klar gesagt",
    h2: "Was wir heute tun können, und was es noch nicht gibt.",
    lead: "In Italien ist die Immobilienvermittlung eine geregelte Tätigkeit, und TriesteVillas srl ist ein eingetragenes Maklerbüro. Am Ortasee gilt heute Folgendes.",
    titoli: ["Heute, ja", "Noch nicht"],
    si: [
      "Wir lesen Ihre Vorstellung und antworten Ihnen, auf Deutsch, Englisch oder Italienisch.",
      "Eine begründete Bewertung: die OMI-Richtwerte Ihrer Zone, die Katasterdaten, die Unterlagen, Schwachstellen eingeschlossen.",
      "Ein Maklerauftrag, wenn Sie es wünschen: schriftlich, mit der Provision festgelegt, bevor wir beginnen.",
      "Die Darstellung in vier Sprachen, mit Fotos, 3D-Rundgang und Film, wie in Triest.",
    ],
    no: [
      "Häuser vom See in der Collection: heute 0.",
      "Ein öffentliches Beispiel am See: das gezeigte stammt aus Triest.",
      "Ein Büro am See: unser Büro ist in Triest.",
      "Käufer, die schon auf Ihr Haus warten: Die 1.312, die uns geschrieben haben, suchten in Triest, nicht am See.",
    ],
    nota: "Nach italienischem Recht hat nur ein eingetragener Makler Anspruch auf Provision (Gesetz Nr. 39 vom 3. Februar 1989, Art. 6). TriesteVillas srl ist bei der Handelskammer Triest eingetragen, REA TS 134793. In der Provinz Novara sind ohne andere Vereinbarung 3 % je Partei üblich (Handelskammer Novara, Sammlung der Provinzgebräuche, 2005): Das ist ein Brauch, keine gesetzliche Obergrenze, und bei uns steht die Provision ohnehin im Auftrag.",
    tappeTitolo: "Von der Vorstellung zum Auftrag",
    tappe: [
      { quando: "Heute", titolo: "Sie stellen das Haus vor", testo: "Gemeinde, Art, ein paar Zeilen und ein Link, falls vorhanden. Vorerst keine Fotos." },
      { quando: "Danach", titolo: "Wir lesen es für Sie", testo: "OMI-Richtwerte der Zone, Kataster und Unterlagen, und was die Käufer suchen, die uns schreiben. Wir sagen es Ihnen, Schwachstellen eingeschlossen." },
      { quando: "Wenn Sie sich entscheiden", titolo: "Der Auftrag, schriftlich", testo: "Dauer, Preis und Provision schwarz auf weiß. Wenn Sie sich nicht entscheiden, endet es dort, ohne Kosten." },
      { quando: "Nach dem Auftrag", titolo: "Die Darstellung", testo: "Fotos, 3D-Rundgang, Film und Texte in vier Sprachen; wer es vorzieht, die Private Collection statt der Portale." },
    ],
    stato: "Wo wir stehen, im Detail",
    agenzie: "Sie sind ein Maklerbüro am See? Lesen Sie unsere Einladung zur Zusammenarbeit",
  },
  presentazione: {
    occhiello: "Stellen Sie uns Ihr Haus vor",
    h2: "Wenige Minuten, keine Verpflichtung.",
    testo: "Gemeinde, Art, ein paar Zeilen und der Link zu einer Anzeige, falls es eine gibt. Vorerst keine Fotos: Wenn wir welche brauchen, fragen wir.",
    voce: "Lieber persönlich sprechen? Schreiben Sie uns auf WhatsApp oder rufen Sie an.",
    garanzie: ["Sie unterschreiben nichts und zahlen nichts.", "Die Daten bleiben im CRM von TriesteVillas, in Triest.", "Sie können jederzeit verlangen, dass wir sie löschen."],
  },
  domande: {
    occhiello: "Fragen",
    h2: "Die Fragen, die uns Eigentümer stellen.",
    voci: [
      { d: "Warum sich jetzt melden, wenn die Collection leer ist?", r: "Weil die ersten Häuser, die wir am See vorstellen, die sein werden, die wir schon kennen. Die Vorstellung verpflichtet Sie zu nichts: Sie unterschreiben nichts und können jederzeit zurücktreten." },
      { d: "Was kostet das?", r: "Uns das Haus vorzustellen und unsere Einschätzung zu erhalten, kostet nichts. Wenn Sie uns den Verkauf anvertrauen, steht die Provision im Auftrag, bevor wir beginnen." },
      { d: "Das Haus ist schon bei einem Makler im Verkauf. Ist das ein Problem?", r: "Nein. Schreiben Sie es ins Formular: Wir kontaktieren niemanden an Ihrer Stelle, und ein Alleinauftrag ist zu respektieren. Oft ist der richtige Weg die Zusammenarbeit mit Ihrem Makler.", link: ["Unsere Einladung an Makler.", "agenzie"] },
      { d: "In welcher Sprache sprechen wir?", r: "Auf Deutsch, Englisch oder Italienisch. Wir antworten aus Triest." },
      { d: "Was machen Sie mit meinen Daten?", r: "Wir erfassen sie im CRM von TriesteVillas und nutzen sie nur für dieses Haus. Ohne Ihre Zustimmung geben wir sie an keine anderen Makler weiter.", link: ["Die Datenschutzerklärung.", "privacy"] },
      { d: "Wer steht hinter OrtaVillas?", r: "TriesteVillas srl aus Triest, mit ihren Marken: TriesteVillas, TriesteImmobiliare, TriesteAffitti, FriuliVillas, LignanoVillas und SloveniaVillas.", link: ["Über uns und wo wir stehen.", "stato"] },
    ],
  },
  grazie: {
    titolo: "Danke: Wir haben Ihre Vorstellung erhalten",
    descrizione: "Wir haben die Vorstellung Ihres Hauses am Ortasee erhalten. Wir antworten auf Deutsch, Englisch oder Italienisch.",
    h1: "Danke: Ihre Vorstellung ist angekommen.",
    testo: "Sie ist im CRM von TriesteVillas in Triest erfasst, und ein Mensch aus der Gruppe liest sie. Wir antworten auf Deutsch, Englisch oder Italienisch, über den Kanal, den Sie gewählt haben.",
    luoghi: "Die Orte am See",
    adessoOcchiello: "Jetzt",
    adessoH2: "Was jetzt passiert",
    tappe: [
      { quando: "Heute", titolo: "Wir lesen Ihre Vorstellung", testo: "Gemeinde, Art und was Sie geschrieben haben: Für den Anfang genügt das." },
      { quando: "Danach", titolo: "Wir antworten Ihnen", testo: "Über den Kanal und in der Sprache Ihrer Wahl, mit den Fragen, die für eine erste Einschätzung nötig sind." },
      { quando: "Wenn Sie sich entscheiden", titolo: "Der Auftrag, schriftlich", testo: "Nur wenn Sie es wollen. Bis dahin gibt es nichts zu unterschreiben und nichts zu zahlen." },
    ],
    casoOcchiello: "Inzwischen",
    casoH2: "Sehen Sie, wie wir an einem Haus in Triest arbeiten.",
  },
};

const sl: TestiProprietari = {
  titolo: "Imate hišo ob jezeru Orta? Tako jo predstavimo",
  descrizione: "Hiša ob jezeru Orta: kako jo ocenimo z vrednostmi OMI in katastrom, kako jo predstavimo kupcem iz Milana, Züricha in Münchna ter kaj lahko naredimo danes.",
  briciola: "Za lastnike",
  occhiello: "Za lastnike",
  h1: "Vaša hiša ob jezeru Orta, predstavljena kupcem iz Milana, Züricha in Münchna.",
  lead: "TriesteVillas je nepremičninska agencija, vpisana v Italiji: ob jezeru lahko hišo že ocenimo in, če se tako odločite, prevzamemo posredovanje. A povemo jasno: danes v zbirki še ni nobene hiše ob jezeru, primer, ki vam ga pokažemo, pa je iz Trsta.",
  cta: "Predstavite nam hišo",
  fatto: {
    occhiello: "Dejstvo v eni številki",
    unita: "€/m²",
    testo: (c, z) => `je najvišja vrednost, ki jo OMI ob jezeru navaja za vile in samostojne hiše: ${c}, območje »${z}«, 2. polletje 2025. V najdražjem območju vsake občine, najvišja vrednost za vile:`,
    barreTitolo: "Vile in samostojne hiše, najvišja vrednost najdražjega območja",
    righe: {
      ntnNo: "prodanih stanovanj in hiš v letu 2025 v občinah pokrajine Novara, brez glavnega mesta",
      ntnVb: "v pokrajini Verbano-Cusio-Ossola, brez glavnega mesta",
      crm: "kupcev je v dvanajstih mesecih pisalo v CRM TriesteVillas, za hiše v Trstu; 105 iz Avstrije, Nemčije in Švice",
    },
    fonte: "Italijanska davčna uprava – OMI, vrednosti za 2. polletje 2025 in obseg prodaj (2025 začasno), CC BY 4.0, pridobljeno 6. oktobra 2026. Vrednosti so ocenjeni razponi po območjih, ne prodajne cene. CRM TriesteVillas, štetje s 5. oktobra 2026.",
  },
  metodo: {
    occhiello: "Kako delamo v Trstu",
    h2: "Resnična hiša, od analize do Private Collection.",
    lead: "Ob jezeru še nimamo javnega primera. Tu je pet korakov pri hiši v Trstu: ogled in film se odpreta spodaj, in to je delo, ki bi ga opravili pri vaši hiši.",
  },
  oggi: {
    occhiello: "Jasno povedano",
    h2: "Kaj lahko naredimo danes in česa še ni.",
    lead: "V Italiji je nepremičninsko posredovanje urejena dejavnost, TriesteVillas srl pa je vpisana agencija. Ob jezeru Orta danes velja tole.",
    titoli: ["Danes, da", "Še ne"],
    si: [
      "Preberemo vašo predstavitev in vam odgovorimo, v italijanščini, angleščini ali nemščini.",
      "Utemeljena cenitev: vrednosti OMI za vaše območje, katastrski podatki, dokumenti, vključno s slabostmi.",
      "Posredniška pogodba, če se tako odločite: pisno, s provizijo, določeno pred začetkom.",
      "Predstavitev v štirih jezikih, s fotografijami, 3D-ogledom in filmom, kot v Trstu.",
    ],
    no: [
      "Hiše ob jezeru v zbirki: danes jih je 0.",
      "Javni primer ob jezeru: tisti, ki ga pokažemo, je iz Trsta.",
      "Pisarna ob jezeru: naša pisarna je v Trstu.",
      "Kupci, ki že čakajo na vašo hišo: 1.312 kupcev, ki so nam pisali, je iskalo v Trstu, ne ob jezeru.",
    ],
    nota: "Po italijanskem pravu ima pravico do provizije le vpisani posrednik (zakon št. 39 z dne 3. februarja 1989, 6. člen). TriesteVillas srl je vpisana pri Gospodarski zbornici v Trstu, REA TS 134793. V pokrajini Novara je, če ni drugače dogovorjeno, običaj 3 % od vsake stranke (Gospodarska zbornica Novara, zbirka pokrajinskih običajev, 2005): to je običaj, ne zakonska zgornja meja, pri nas pa je provizija vedno zapisana v pogodbi.",
    tappeTitolo: "Od predstavitve do pogodbe",
    tappe: [
      { quando: "Danes", titolo: "Predstavite nam hišo", testo: "Občina, vrsta, nekaj vrstic in povezava, če obstaja. Za zdaj brez fotografij." },
      { quando: "Nato", titolo: "Preberemo jo za vas", testo: "Vrednosti OMI za območje, kataster in dokumenti ter kaj iščejo kupci, ki nam pišejo. Povemo vam, vključno s slabostmi." },
      { quando: "Če se odločite", titolo: "Pogodba, pisno", testo: "Trajanje, cena in provizija črno na belem. Če se ne odločite, se tu konča, brez stroškov." },
      { quando: "Po podpisu", titolo: "Predstavitev", testo: "Fotografije, 3D-ogled, film in besedila v štirih jezikih; za tiste, ki želijo, Private Collection namesto portalov." },
    ],
    stato: "Kje smo, podrobno",
    agenzie: "Ste agencija ob jezeru? Preberite naše povabilo k sodelovanju",
  },
  presentazione: {
    occhiello: "Predstavite nam hišo",
    h2: "Nekaj minut, brez obveznosti.",
    testo: "Občina, vrsta, nekaj vrstic in povezava do oglasa, če obstaja. Za zdaj brez fotografij: če bodo potrebne, vas bomo prosili zanje.",
    voce: "Bi se raje pogovorili? Pišite nam na WhatsApp ali nas pokličite.",
    garanzie: ["Ničesar ne podpišete in ničesar ne plačate.", "Podatki ostanejo v CRM TriesteVillas, v Trstu.", "Kadar koli lahko zahtevate, da jih izbrišemo."],
  },
  domande: {
    occhiello: "Vprašanja",
    h2: "Vprašanja, ki nam jih zastavljajo lastniki.",
    voci: [
      { d: "Zakaj se predstaviti zdaj, če je zbirka prazna?", r: "Ker bodo prve hiše, ki jih bomo predstavili ob jezeru, tiste, ki jih že poznamo. Predstavitev vas ne zavezuje: ničesar ne podpišete in lahko kadar koli odstopite." },
      { d: "Koliko stane?", r: "Predstavitev hiše in naše mnenje ne stane nič. Če nam zaupate prodajo, je provizija zapisana v pogodbi, preden začnemo." },
      { d: "Hiša je že v prodaji pri agenciji. Je to težava?", r: "Ne. Napišite to v obrazec: nikogar ne kontaktiramo namesto vas, ekskluzivni mandat pa je treba spoštovati. Pogosto je prava pot sodelovanje z agencijo, ki jo že imate.", link: ["Naše povabilo agencijam.", "agenzie"] },
      { d: "V katerem jeziku se pogovarjamo?", r: "V italijanščini, angleščini ali nemščini. Odgovarjamo iz Trsta." },
      { d: "Kaj naredite z mojimi podatki?", r: "Vpišemo jih v CRM TriesteVillas in jih uporabimo samo za to hišo. Brez vašega soglasja jih ne posredujemo drugim agencijam.", link: ["Obvestilo o zasebnosti.", "privacy"] },
      { d: "Kdo stoji za OrtaVillas?", r: "TriesteVillas srl iz Trsta s svojimi znamkami: TriesteVillas, TriesteImmobiliare, TriesteAffitti, FriuliVillas, LignanoVillas in SloveniaVillas.", link: ["O nas in kje smo.", "stato"] },
    ],
  },
  grazie: {
    titolo: "Hvala: prejeli smo vašo predstavitev",
    descrizione: "Prejeli smo predstavitev vaše hiše ob jezeru Orta. Odgovarjamo v italijanščini, angleščini ali nemščini.",
    h1: "Hvala: predstavitev je prispela.",
    testo: "Vpisana je v CRM TriesteVillas v Trstu in prebere jo človek iz skupine. Odgovorili vam bomo v italijanščini, angleščini ali nemščini, po kanalu, ki ste ga izbrali.",
    luoghi: "Kraji ob jezeru",
    adessoOcchiello: "Zdaj",
    adessoH2: "Kaj se zgodi zdaj",
    tappe: [
      { quando: "Danes", titolo: "Preberemo predstavitev", testo: "Občina, vrsta in kar ste napisali: za začetek je dovolj." },
      { quando: "Nato", titolo: "Odgovorimo vam", testo: "Po kanalu in v jeziku, ki ste ju izbrali, z vprašanji, potrebnimi za prvo mnenje o hiši." },
      { quando: "Če se odločite", titolo: "Pogodba, pisno", testo: "Samo če to želite. Do takrat ni ničesar za podpisati in ničesar za plačati." },
    ],
    casoOcchiello: "Medtem",
    casoH2: "Poglejte, kako delamo pri hiši v Trstu.",
  },
};

export const PROPRIETARI: Record<Lingua, TestiProprietari> = { it, en, de, sl };
