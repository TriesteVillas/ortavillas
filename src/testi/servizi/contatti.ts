import type { Lingua } from "@/lib/rotte";

export type TestiContatti = {
  titolo: string; descrizione: string; briciola: string;
  occhiello: string; h1: string; lead: string;
  recapiti: { occhiello: string; h2: string; nota: string };
  strade: { occhiello: string; h2: string; proprietari: [string, string, string]; compratori: [string, string, string]; nota: string; stato: string };
};

const it: TestiContatti = {
  titolo: "Contatti: in italiano, inglese o tedesco",
  descrizione: "Come raggiungerci per una casa sul lago d'Orta: WhatsApp e telefono al 347 8628738, email. Rispondiamo in italiano, inglese e tedesco, dall'ufficio di Trieste.",
  briciola: "Contatti",
  occhiello: "Contatti",
  h1: "Scriveteci in italiano, inglese o tedesco.",
  lead: "Dall'ufficio di TriesteVillas, a Trieste, con un numero dedicato solo al lago d'Orta. Per una casa da vendere, o per sapere quando entra la prima casa in collezione.",
  recapiti: {
    occhiello: "Recapiti",
    h2: "Come raggiungerci.",
    nota: "WhatsApp, telefono ed email arrivano alle stesse persone. Se scrivete per una casa, diteci il comune e il tipo: è tutto quello che serve per cominciare.",
  },
  strade: {
    occhiello: "Due strade",
    h2: "Secondo chi siete.",
    proprietari: ["Avete una casa sul lago", "Presentatecela con il modulo per i proprietari: vi rispondiamo con una prima lettura, e l'incarico solo se lo decidete.", "Per i proprietari →"],
    compratori: ["Cercate casa sul lago", "Iscrivetevi alla Private Collection del lago d'Orta: vi scriviamo quando entra una casa nelle vostre zone.", "Private Collection →"],
    nota: "Sul lago possiamo già mediare, ma oggi in collezione non c'è nessuna casa del lago: non abbiamo case da proporvi, e non facciamo finta di averne.",
    stato: "A che punto siamo",
  },
};

const en: TestiContatti = {
  titolo: "Contact: in English, Italian or German",
  descrizione: "How to reach us about a home on Lake Orta: WhatsApp and phone on +39 347 8628738, email. We reply in English, Italian and German, from our Trieste office.",
  briciola: "Contact",
  occhiello: "Contact",
  h1: "Write to us in English, Italian or German.",
  lead: "From the TriesteVillas office in Trieste, with a number dedicated to Lake Orta only. For a home to sell, or to know when the first home enters the collection.",
  recapiti: {
    occhiello: "Contacts",
    h2: "How to reach us.",
    nota: "WhatsApp, phone and email reach the same people. If you write about a home, tell us the municipality and the type: that is all we need to start.",
  },
  strade: {
    occhiello: "Two ways",
    h2: "Depending on who you are.",
    proprietari: ["You own a home on the lake", "Present it with the owners' form: we reply with a first reading, and a mandate only if you decide so.", "For owners →"],
    compratori: ["You are looking for a home on the lake", "Sign up to the Lake Orta Private Collection: we write when a home comes in within your areas.", "Private Collection →"],
    nota: "On the lake we can already act as agents, but today there is no Lake Orta home in the collection: we have no homes to offer you, and we do not pretend to.",
    stato: "Where we stand",
  },
};

const de: TestiContatti = {
  titolo: "Kontakt: auf Deutsch, Englisch oder Italienisch",
  descrizione: "So erreichen Sie uns für ein Haus am Ortasee: WhatsApp und Telefon unter +39 347 8628738, E-Mail. Wir antworten auf Deutsch, Englisch und Italienisch, aus unserem Büro in Triest.",
  briciola: "Kontakt",
  occhiello: "Kontakt",
  h1: "Schreiben Sie uns auf Deutsch, Englisch oder Italienisch.",
  lead: "Aus dem Büro von TriesteVillas in Triest, mit einer Nummer nur für den Ortasee. Für ein Haus, das Sie verkaufen möchten, oder um zu erfahren, wann das erste Haus in die Collection kommt.",
  recapiti: {
    occhiello: "Kontakt",
    h2: "So erreichen Sie uns.",
    nota: "WhatsApp, Telefon und E-Mail landen bei denselben Menschen. Wenn Sie wegen eines Hauses schreiben, nennen Sie uns Gemeinde und Art: Mehr braucht es für den Anfang nicht.",
  },
  strade: {
    occhiello: "Zwei Wege",
    h2: "Je nachdem, wer Sie sind.",
    proprietari: ["Sie besitzen ein Haus am See", "Stellen Sie es uns mit dem Formular für Eigentümer vor: Wir antworten mit einer ersten Einschätzung, und einen Auftrag gibt es nur, wenn Sie es wollen.", "Für Eigentümer →"],
    compratori: ["Sie suchen ein Haus am See", "Melden Sie sich bei der Private Collection am Ortasee an: Wir schreiben Ihnen, wenn ein Haus in Ihren Gegenden dazukommt.", "Private Collection →"],
    nota: "Am See dürfen wir bereits vermitteln, aber heute ist kein Haus vom See in der Collection: Wir haben Ihnen keine Häuser anzubieten, und wir tun nicht so.",
    stato: "Wo wir stehen",
  },
};

const sl: TestiContatti = {
  titolo: "Stik: v italijanščini, angleščini ali nemščini",
  descrizione: "Kako nas dosežete glede hiše ob jezeru Orta: WhatsApp in telefon na +39 347 8628738, e-pošta. Odgovarjamo v italijanščini, angleščini in nemščini, iz pisarne v Trstu.",
  briciola: "Stik",
  occhiello: "Stik",
  h1: "Pišite nam v italijanščini, angleščini ali nemščini.",
  lead: "Iz pisarne TriesteVillas v Trstu, s številko samo za jezero Orta. Za hišo, ki jo prodajate, ali da izveste, kdaj pride v zbirko prva hiša.",
  recapiti: {
    occhiello: "Kontakti",
    h2: "Kako nas dosežete.",
    nota: "WhatsApp, telefon in e-pošta pridejo do istih ljudi. Če pišete zaradi hiše, nam povejte občino in vrsto: to je vse, kar potrebujemo za začetek.",
  },
  strade: {
    occhiello: "Dve poti",
    h2: "Glede na to, kdo ste.",
    proprietari: ["Imate hišo ob jezeru", "Predstavite nam jo z obrazcem za lastnike: odgovorimo s prvim mnenjem, pogodba pa le, če se tako odločite.", "Za lastnike →"],
    compratori: ["Iščete hišo ob jezeru", "Prijavite se v Private Collection ob jezeru Orta: pisali vam bomo, ko pride hiša na vaših območjih.", "Private Collection →"],
    nota: "Ob jezeru že lahko posredujemo, a danes v zbirki ni nobene hiše ob jezeru: hiš vam nimamo ponuditi in se ne pretvarjamo, da jih imamo.",
    stato: "Kje smo",
  },
};

export const CONTATTI: Record<Lingua, TestiContatti> = { it, en, de, sl };
