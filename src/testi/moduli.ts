import type { Lingua } from "@/lib/rotte";

export type TestiModuli = {
  email: string; emailAiuto: string; nome: string; telefono: string; lingua: string; paese: string; paesi: Record<string, string>; scegliete: string;
  citta: string; zone: string; zoneAiuto: string; zoneVoci: Record<string, string>; facoltativo: string;
  fascia: string; fasce: Record<string, string>; orizzonte: string; orizzonti: Record<string, string>; uso: string; usi: Record<string, string>;
  pcTrieste: string; pcTriesteAiuto: string; privacy: [string, string, string]; iscrivimi: string; invio: string;
  sottoPC: string; completo: string;
  errori: Record<string, string>; riepilogo: string; veloce: string; porta: string;
  // proprietari
  casa: string; voi: string; comune: string; comuni: Record<string, string>; comuneAltro: string; mq: string; mqAiuto: string;
  tipo: string; tipi: Record<string, string>; descrizione: string; descrizioneAiuto: string; link: string; linkAiuto: string;
  quando: string; quandi: Record<string, string>; nomeCognome: string; telefonoWa: string; recapitoAiuto: string;
  canale: string; canali: Record<string, string>; linguaRisposta: string; lingueRisposta: Record<string, string>; lingueNota: string;
  presenta: string; sottoProp: string;
};

const it: TestiModuli = {
  email: "Email", emailAiuto: "Vi scriveremo qui quando entra una casa nelle vostre zone. Niente newsletter.",
  nome: "Nome", telefono: "Telefono (facoltativo)", lingua: "Lingua delle comunicazioni", paese: "Paese di partenza",
  paesi: { IT: "Italia", CH: "Svizzera", DE: "Germania", AT: "Austria", NL: "Paesi Bassi", GB: "Regno Unito", FR: "Francia", altro: "Altro paese" },
  scegliete: "Scegliete…", citta: "Città di partenza", zone: "Zone d'interesse", zoneAiuto: "Anche più di una.",
  zoneVoci: { est: "Sponda est · Orta, l'isola, Pettenasco", ovest: "Sponda ovest · Pella, Ronco, San Maurizio", colline: "Colline del Mottarone · Ameno, Miasino, Armeno", capi: "I capi del lago · Omegna, Gozzano", nonso: "Non so ancora" },
  facoltativo: "facoltativo",
  fascia: "Fascia di budget", fasce: { f1: "fino a 500.000 €", f2: "500.000 € – 1.000.000 €", f3: "1.000.000 € – 2.000.000 €", f4: "oltre 2.000.000 €" },
  orizzonte: "Quando pensate di comprare", orizzonti: { o1: "entro 12 mesi", o2: "fra 1 e 2 anni", o3: "per ora mi informo" },
  uso: "Per quale uso", usi: { prima: "Prima casa", seconda: "Seconda casa", investimento: "Investimento, anche da affittare" },
  pcTrieste: "Mandatemi anche le case riservate di Trieste",
  pcTriesteAiuto: "Un consenso a parte: inoltriamo una richiesta d'accesso alla Private Collection di TriesteVillas a Trieste. Le credenziali arrivano per email, dopo la verifica della richiesta.",
  privacy: ["Ho letto l'", "informativa sulla privacy", " e acconsento al trattamento dei miei dati per questa richiesta."],
  iscrivimi: "Iscrivetemi per primi", invio: "Invio in corso…",
  sottoPC: "Oggi la collezione del lago è vuota: vi scriviamo quando entra la prima casa nelle vostre zone, e non prima.",
  completo: "Il modulo completo",
  errori: {
    email: "Serve un indirizzo email valido: è lì che vi scriveremo.", nome: "Scrivete il vostro nome.", privacy: "Per inviare serve il consenso al trattamento dei dati.",
    recapito: "Lasciateci un'email valida oppure un telefono di almeno sei cifre.", comune: "Scegliete il comune.", comuneAltro: "Scrivete il nome del comune.",
    tipo: "Scegliete il tipo di immobile.", descrizione: "La descrizione supera gli 800 caratteri: accorciatela un poco.", link: "Il link deve cominciare con https://", mq: "Scrivete solo un numero, senza unità.",
  },
  riepilogo: "Controllate questi campi:",
  veloce: "Il modulo è partito troppo in fretta. Ricontrollate i campi e premete di nuovo.",
  porta: "Non siamo riusciti a registrare la richiesta: riprovate, oppure scriveteci a richieste@triestevillas.com o su WhatsApp al 347 8628738.",
  casa: "01 La casa", voi: "02 Voi", comune: "Comune",
  comuni: { "orta-san-giulio": "Orta San Giulio", pettenasco: "Pettenasco", ameno: "Ameno", miasino: "Miasino", armeno: "Armeno", omegna: "Omegna", nonio: "Nonio", "quarna-sopra": "Quarna Sopra", pella: "Pella", "madonna-del-sasso": "Madonna del Sasso", "san-maurizio-dopaglio": "San Maurizio d'Opaglio", gozzano: "Gozzano", "bolzano-novarese": "Bolzano Novarese", altro: "Un altro comune" },
  comuneAltro: "Quale comune", mq: "Superficie indicativa (m²)", mqAiuto: "Anche a occhio: basta l'ordine di grandezza.",
  tipo: "Tipo di immobile", tipi: { villa: "Villa", casa: "Casa", appartamento: "Appartamento", terreno: "Terreno", altro: "Altro" },
  descrizione: "Due righe sulla casa", descrizioneAiuto: "Vista, giardino, accesso al lago, stato. Anche i difetti: li diremo comunque.",
  link: "Link a un annuncio esistente", linkAiuto: "Un portale, Booking, Airbnb o il sito di un'agenzia: ci aiuta a capire la casa. Non dovete ritirare niente.",
  quando: "Quando pensate di vendere", quandi: { ora: "nei prossimi mesi", anno: "entro un anno", nonso: "non lo so ancora" },
  nomeCognome: "Nome e cognome", telefonoWa: "Telefono o WhatsApp", recapitoAiuto: "Basta uno dei due: email o telefono.",
  canale: "Come preferite essere contattati", canali: { whatsapp: "WhatsApp", telefono: "Telefono", email: "Email" },
  linguaRisposta: "Lingua della risposta", lingueRisposta: { it: "Italiano", en: "English", de: "Deutsch" }, lingueNota: "Rispondiamo in italiano, inglese o tedesco.",
  presenta: "Presentateci la casa", sottoProp: "Non firmate niente e non pagate niente: una persona legge la richiesta e vi risponde sul canale che avete scelto.",
};

const en: TestiModuli = {
  email: "Email", emailAiuto: "We will write to you here when a home in your areas arrives. No newsletter.",
  nome: "Name", telefono: "Phone (optional)", lingua: "Language for our messages", paese: "Country you are coming from",
  paesi: { IT: "Italy", CH: "Switzerland", DE: "Germany", AT: "Austria", NL: "Netherlands", GB: "United Kingdom", FR: "France", altro: "Another country" },
  scegliete: "Choose…", citta: "City you are coming from", zone: "Areas of interest", zoneAiuto: "More than one is fine.",
  zoneVoci: { est: "East shore · Orta, the island, Pettenasco", ovest: "West shore · Pella, Ronco, San Maurizio", colline: "Mottarone hills · Ameno, Miasino, Armeno", capi: "The lake ends · Omegna, Gozzano", nonso: "Not sure yet" },
  facoltativo: "optional",
  fascia: "Budget band", fasce: { f1: "up to €500,000", f2: "€500,000 – €1,000,000", f3: "€1,000,000 – €2,000,000", f4: "over €2,000,000" },
  orizzonte: "When are you thinking of buying", orizzonti: { o1: "within 12 months", o2: "in 1 to 2 years", o3: "just exploring for now" },
  uso: "What for", usi: { prima: "Main home", seconda: "Second home", investimento: "Investment, possibly to let" },
  pcTrieste: "Send me the private homes in Trieste too",
  pcTriesteAiuto: "A separate consent: we forward an access request to the TriesteVillas Private Collection in Trieste. Login details arrive by email once the request is checked.",
  privacy: ["I have read the ", "privacy notice", " and consent to the processing of my data for this request."],
  iscrivimi: "Sign me up first", invio: "Sending…",
  sottoPC: "Today the lake collection is empty: we will write when the first home in your areas arrives, and not before.",
  completo: "The full form",
  errori: {
    email: "We need a valid email address: that is where we will write.", nome: "Please write your name.", privacy: "Consent to data processing is needed to send.",
    recapito: "Leave a valid email or a phone number of at least six digits.", comune: "Choose the municipality.", comuneAltro: "Write the name of the municipality.",
    tipo: "Choose the type of property.", descrizione: "The description is over 800 characters: shorten it a little.", link: "The link must start with https://", mq: "Write a number only, without units.",
  },
  riepilogo: "Please check these fields:",
  veloce: "The form was sent too quickly. Check the fields and press again.",
  porta: "We could not record your request: try again, or write to richieste@triestevillas.com or on WhatsApp at +39 347 8628738.",
  casa: "01 The home", voi: "02 You", comune: "Municipality",
  comuni: { "orta-san-giulio": "Orta San Giulio", pettenasco: "Pettenasco", ameno: "Ameno", miasino: "Miasino", armeno: "Armeno", omegna: "Omegna", nonio: "Nonio", "quarna-sopra": "Quarna Sopra", pella: "Pella", "madonna-del-sasso": "Madonna del Sasso", "san-maurizio-dopaglio": "San Maurizio d'Opaglio", gozzano: "Gozzano", "bolzano-novarese": "Bolzano Novarese", altro: "Another municipality" },
  comuneAltro: "Which municipality", mq: "Approximate size (m²)", mqAiuto: "A rough guess is fine: the order of magnitude is enough.",
  tipo: "Type of property", tipi: { villa: "Villa", casa: "House", appartamento: "Flat", terreno: "Land", altro: "Other" },
  descrizione: "A couple of lines about the home", descrizioneAiuto: "View, garden, lake access, condition. Its flaws too: we will mention them anyway.",
  link: "Link to an existing listing", linkAiuto: "A portal, Booking, Airbnb or an agency's site: it helps us understand the home. You do not need to withdraw anything.",
  quando: "When are you thinking of selling", quandi: { ora: "in the coming months", anno: "within a year", nonso: "not sure yet" },
  nomeCognome: "Full name", telefonoWa: "Phone or WhatsApp", recapitoAiuto: "One of the two is enough: email or phone.",
  canale: "How would you like to be contacted", canali: { whatsapp: "WhatsApp", telefono: "Phone", email: "Email" },
  linguaRisposta: "Language of the reply", lingueRisposta: { it: "Italiano", en: "English", de: "Deutsch" }, lingueNota: "We reply in English, Italian or German.",
  presenta: "Present your home to us", sottoProp: "You sign nothing and pay nothing: a person reads the request and replies on the channel you chose.",
};

const de: TestiModuli = {
  email: "E-Mail", emailAiuto: "Hierhin schreiben wir Ihnen, wenn ein Haus in Ihren Gegenden dazukommt. Kein Newsletter.",
  nome: "Name", telefono: "Telefon (optional)", lingua: "Sprache unserer Nachrichten", paese: "Ausgangsland",
  paesi: { IT: "Italien", CH: "Schweiz", DE: "Deutschland", AT: "Österreich", NL: "Niederlande", GB: "Vereinigtes Königreich", FR: "Frankreich", altro: "Anderes Land" },
  scegliete: "Bitte wählen…", citta: "Ausgangsstadt", zone: "Gegenden, die Sie interessieren", zoneAiuto: "Auch mehrere.",
  zoneVoci: { est: "Ostufer · Orta, die Insel, Pettenasco", ovest: "Westufer · Pella, Ronco, San Maurizio", colline: "Mottarone-Hügel · Ameno, Miasino, Armeno", capi: "Die Seeenden · Omegna, Gozzano", nonso: "Weiß ich noch nicht" },
  facoltativo: "optional",
  fascia: "Budgetspanne", fasce: { f1: "bis 500.000 €", f2: "500.000 € – 1.000.000 €", f3: "1.000.000 € – 2.000.000 €", f4: "über 2.000.000 €" },
  orizzonte: "Wann möchten Sie kaufen", orizzonti: { o1: "innerhalb von 12 Monaten", o2: "in 1 bis 2 Jahren", o3: "ich informiere mich vorerst" },
  uso: "Wofür", usi: { prima: "Hauptwohnsitz", seconda: "Zweitwohnsitz", investimento: "Anlage, auch zur Vermietung" },
  pcTrieste: "Schicken Sie mir auch die privaten Häuser in Triest",
  pcTriesteAiuto: "Eine gesonderte Einwilligung: Wir leiten eine Zugangsanfrage an die Private Collection von TriesteVillas in Triest weiter. Die Zugangsdaten kommen per E-Mail, nachdem die Anfrage geprüft wurde.",
  privacy: ["Ich habe die ", "Datenschutzerklärung", " gelesen und willige in die Verarbeitung meiner Daten für diese Anfrage ein."],
  iscrivimi: "Tragen Sie mich als Ersten ein", invio: "Wird gesendet…",
  sottoPC: "Heute ist die Collection am See leer: Wir schreiben Ihnen, wenn das erste Haus in Ihren Gegenden dazukommt, und nicht vorher.",
  completo: "Das vollständige Formular",
  errori: {
    email: "Wir brauchen eine gültige E-Mail-Adresse: Dorthin schreiben wir Ihnen.", nome: "Bitte geben Sie Ihren Namen an.", privacy: "Zum Senden ist die Einwilligung in die Datenverarbeitung nötig.",
    recapito: "Hinterlassen Sie eine gültige E-Mail oder eine Telefonnummer mit mindestens sechs Ziffern.", comune: "Wählen Sie die Gemeinde.", comuneAltro: "Schreiben Sie den Namen der Gemeinde.",
    tipo: "Wählen Sie die Art der Immobilie.", descrizione: "Die Beschreibung hat mehr als 800 Zeichen: Bitte etwas kürzen.", link: "Der Link muss mit https:// beginnen", mq: "Bitte nur eine Zahl, ohne Einheit.",
  },
  riepilogo: "Bitte prüfen Sie diese Felder:",
  veloce: "Das Formular wurde zu schnell gesendet. Prüfen Sie die Felder und senden Sie erneut.",
  porta: "Wir konnten Ihre Anfrage nicht speichern: Versuchen Sie es erneut oder schreiben Sie an richieste@triestevillas.com oder per WhatsApp an +39 347 8628738.",
  casa: "01 Das Haus", voi: "02 Sie", comune: "Gemeinde",
  comuni: { "orta-san-giulio": "Orta San Giulio", pettenasco: "Pettenasco", ameno: "Ameno", miasino: "Miasino", armeno: "Armeno", omegna: "Omegna", nonio: "Nonio", "quarna-sopra": "Quarna Sopra", pella: "Pella", "madonna-del-sasso": "Madonna del Sasso", "san-maurizio-dopaglio": "San Maurizio d'Opaglio", gozzano: "Gozzano", "bolzano-novarese": "Bolzano Novarese", altro: "Eine andere Gemeinde" },
  comuneAltro: "Welche Gemeinde", mq: "Ungefähre Fläche (m²)", mqAiuto: "Geschätzt genügt: die Größenordnung reicht.",
  tipo: "Art der Immobilie", tipi: { villa: "Villa", casa: "Haus", appartamento: "Wohnung", terreno: "Grundstück", altro: "Sonstiges" },
  descrizione: "Zwei Zeilen zum Haus", descrizioneAiuto: "Aussicht, Garten, Seezugang, Zustand. Auch die Schwächen: Wir nennen sie ohnehin.",
  link: "Link zu einem bestehenden Inserat", linkAiuto: "Ein Portal, Booking, Airbnb oder die Website eines Maklers: Das hilft uns, das Haus zu verstehen. Sie müssen nichts zurückziehen.",
  quando: "Wann möchten Sie verkaufen", quandi: { ora: "in den nächsten Monaten", anno: "innerhalb eines Jahres", nonso: "weiß ich noch nicht" },
  nomeCognome: "Vor- und Nachname", telefonoWa: "Telefon oder WhatsApp", recapitoAiuto: "Eines von beiden genügt: E-Mail oder Telefon.",
  canale: "Wie möchten Sie kontaktiert werden", canali: { whatsapp: "WhatsApp", telefono: "Telefon", email: "E-Mail" },
  linguaRisposta: "Sprache der Antwort", lingueRisposta: { it: "Italiano", en: "English", de: "Deutsch" }, lingueNota: "Wir antworten auf Deutsch, Englisch oder Italienisch.",
  presenta: "Stellen Sie uns Ihr Haus vor", sottoProp: "Sie unterschreiben nichts und zahlen nichts: Ein Mensch liest die Anfrage und antwortet Ihnen auf dem gewählten Weg.",
};

const sl: TestiModuli = {
  email: "E-pošta", emailAiuto: "Sem vam bomo pisali, ko pride hiša na vaših območjih. Brez novic.",
  nome: "Ime", telefono: "Telefon (neobvezno)", lingua: "Jezik sporočil", paese: "Država izhodišča",
  paesi: { IT: "Italija", CH: "Švica", DE: "Nemčija", AT: "Avstrija", NL: "Nizozemska", GB: "Združeno kraljestvo", FR: "Francija", altro: "Druga država" },
  scegliete: "Izberite …", citta: "Mesto izhodišča", zone: "Območja, ki vas zanimajo", zoneAiuto: "Lahko tudi več.",
  zoneVoci: { est: "Vzhodna obala · Orta, otok, Pettenasco", ovest: "Zahodna obala · Pella, Ronco, San Maurizio", colline: "Griči Mottarone · Ameno, Miasino, Armeno", capi: "Konca jezera · Omegna, Gozzano", nonso: "Še ne vem" },
  facoltativo: "neobvezno",
  fascia: "Razpon proračuna", fasce: { f1: "do 500.000 €", f2: "500.000 € – 1.000.000 €", f3: "1.000.000 € – 2.000.000 €", f4: "nad 2.000.000 €" },
  orizzonte: "Kdaj nameravate kupiti", orizzonti: { o1: "v 12 mesecih", o2: "v 1 do 2 letih", o3: "za zdaj se informiram" },
  uso: "Za kaj", usi: { prima: "Glavno bivališče", seconda: "Počitniška hiša", investimento: "Naložba, tudi za oddajanje" },
  pcTrieste: "Pošljite mi tudi zasebne hiše v Trstu",
  pcTriesteAiuto: "Ločeno soglasje: posredujemo prošnjo za dostop do zbirke Private Collection družbe TriesteVillas v Trstu. Podatki za prijavo pridejo po e-pošti, ko prošnjo preverimo.",
  privacy: ["Prebral sem ", "obvestilo o zasebnosti", " in soglašam z obdelavo svojih podatkov za to zahtevo."],
  iscrivimi: "Prijavite me med prvimi", invio: "Pošiljanje …",
  sottoPC: "Danes je zbirka ob jezeru prazna: pisali vam bomo, ko pride prva hiša na vaših območjih, in ne prej.",
  completo: "Celoten obrazec",
  errori: {
    email: "Potrebujemo veljaven e-poštni naslov: tja vam bomo pisali.", nome: "Vpišite svoje ime.", privacy: "Za pošiljanje je potrebno soglasje z obdelavo podatkov.",
    recapito: "Pustite veljaven e-poštni naslov ali telefonsko številko z vsaj šestimi števkami.", comune: "Izberite občino.", comuneAltro: "Vpišite ime občine.",
    tipo: "Izberite vrsto nepremičnine.", descrizione: "Opis presega 800 znakov: nekoliko ga skrajšajte.", link: "Povezava se mora začeti s https://", mq: "Vpišite samo število, brez enote.",
  },
  riepilogo: "Preverite ta polja:",
  veloce: "Obrazec je bil poslan prehitro. Preverite polja in pritisnite znova.",
  porta: "Vaše zahteve nismo mogli zabeležiti: poskusite znova ali nam pišite na richieste@triestevillas.com ali prek WhatsAppa na +39 347 8628738.",
  casa: "01 Hiša", voi: "02 Vi", comune: "Občina",
  comuni: { "orta-san-giulio": "Orta San Giulio", pettenasco: "Pettenasco", ameno: "Ameno", miasino: "Miasino", armeno: "Armeno", omegna: "Omegna", nonio: "Nonio", "quarna-sopra": "Quarna Sopra", pella: "Pella", "madonna-del-sasso": "Madonna del Sasso", "san-maurizio-dopaglio": "San Maurizio d'Opaglio", gozzano: "Gozzano", "bolzano-novarese": "Bolzano Novarese", altro: "Druga občina" },
  comuneAltro: "Katera občina", mq: "Približna površina (m²)", mqAiuto: "Dovolj je ocena: zadošča velikostni red.",
  tipo: "Vrsta nepremičnine", tipi: { villa: "Vila", casa: "Hiša", appartamento: "Stanovanje", terreno: "Zemljišče", altro: "Drugo" },
  descrizione: "Dve vrstici o hiši", descrizioneAiuto: "Razgled, vrt, dostop do jezera, stanje. Tudi pomanjkljivosti: tako ali tako jih bomo omenili.",
  link: "Povezava do obstoječega oglasa", linkAiuto: "Portal, Booking, Airbnb ali spletna stran agencije: pomaga nam razumeti hišo. Ničesar vam ni treba umakniti.",
  quando: "Kdaj nameravate prodati", quandi: { ora: "v naslednjih mesecih", anno: "v enem letu", nonso: "še ne vem" },
  nomeCognome: "Ime in priimek", telefonoWa: "Telefon ali WhatsApp", recapitoAiuto: "Dovolj je eno od obojega: e-pošta ali telefon.",
  canale: "Kako želite, da vas kontaktiramo", canali: { whatsapp: "WhatsApp", telefono: "Telefon", email: "E-pošta" },
  linguaRisposta: "Jezik odgovora", lingueRisposta: { it: "Italiano", en: "English", de: "Deutsch" }, lingueNota: "Odgovarjamo v italijanščini, angleščini ali nemščini.",
  presenta: "Predstavite nam hišo", sottoProp: "Ničesar ne podpišete in ničesar ne plačate: zahtevo prebere človek in vam odgovori po izbranem kanalu.",
};

export const TESTI_MODULI: Record<Lingua, TestiModuli> = { it, en, de, sl };
