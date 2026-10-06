// Strumento 04 — Dal prezzo al netto. Testi in quattro lingue.
import type { Lingua } from "@/lib/rotte";
import { VENDITA } from "@/lib/strumenti/regole";
import { fmtEuro, fmtPct } from "@/lib/strumenti/formato";

export type TestiNetto = {
  titolo: string; descrizione: string; h1: string; lead: string;
  prezzo: string; scala: string; acquisto: string; acquistoAiuto: string; anni: string; anniTesto: (n: number) => string;
  principale: string; principaleAiuto: string; successione: string; successioneAiuto: string;
  superbonus: string; superbonusAiuto: string; costi: string; costiAiuto: string;
  agenzia: string; agenziaAiuto: string; pct: string; pctTesto: (p: string, i: string) => string;
  altre: string; altreAiuto: string; mutuo: string; mutuoAiuto: string;
  resta: string; delPrezzo: (p: string) => string; primaDi: string; voceVerifica: { ape: string; conformita: string };
  cascata: string;
  righe: {
    prezzo: string; provvigione: (p: string, i: string) => string; provvigioneSp: string;
    plus: string; plusEsente: Record<"anni" | "principale" | "successione", string>; plusManca: string;
    plusTassata: (base: string, regola: "cinque" | "superbonus") => string;
    ape: string; apeSp: (a: string, b: string) => string; conformita: string; conformitaSp: string;
    altre: string; mutuo: string; netto: string;
  };
  nonDovuta: string; inVerifica: string; mancaAcquisto: string;
  tempo: (fra: number, risparmio: string) => string;
  annuncio: (n: string) => string;
  metodo: (l: Lingua) => string[];
  tabTitolo: string; tabCaption: string; casi: [string, string, string]; tabPlus: string; tabNetto: string; tabNota: string;
};

const pc = (n: number, l: Lingua) => fmtPct(n, l);
const A = VENDITA;

export const NETTO: Record<Lingua, TestiNetto> = {
  it: {
    titolo: "Vendere casa sul lago d'Orta: quanto resta netto",
    descrizione: "Dal prezzo di vendita al netto in tasca: plusvalenza entro 5 anni con l'imposta sostitutiva del 26%, il caso Superbonus, provvigione con IVA, APE e conformità. Con fonte e data, per chi vende.",
    h1: "Dal prezzo al netto in tasca.",
    lead: "Il prezzo di vendita non è quello che resta. Provvigione con IVA, l'eventuale imposta sulla plusvalenza, il mutuo da chiudere: voce per voce, con la regola e la fonte. Ciò che non abbiamo verificato resta fuori e lo diciamo.",
    prezzo: "Prezzo di vendita", scala: "Prezzo, su scala logaritmica",
    acquisto: "Prezzo pagato all'acquisto", acquistoAiuto: "Quello scritto nell'atto d'acquisto o il costo di costruzione.",
    anni: "Anni di possesso", anniTesto: (n) => (n === 1 ? "1 anno" : `${n} anni`),
    principale: "È stata abitazione principale per la maggior parte del tempo", principaleAiuto: "Vostra o dei vostri familiari. In questo caso la plusvalenza non è tassata, anche entro 5 anni.",
    successione: "L'ho ricevuta in successione", successioneAiuto: "Per la regola del Superbonus gli immobili ereditati sono esclusi.",
    superbonus: "Lavori Superbonus conclusi da non più di 10 anni", superbonusAiuto: "Dal 2024 la prima vendita è tassata anche dopo 5 anni, salvo abitazione principale per la maggior parte dei 10 anni.",
    costi: "Costi documentati da sottrarre", costiAiuto: "Lavori che hanno aumentato il valore, spese dell'acquisto. Quali costi valgano lo decide l'art. 68 TUIR: non l'abbiamo riletto, chiedete al notaio.",
    agenzia: "Vendo con un'agenzia", agenziaAiuto: "In provincia di Novara l'uso è il 3% per ciascuna parte, più IVA 22%, salvo patto diverso. Per Omegna e la sponda del VCO la raccolta degli usi non è verificata.",
    pct: "Provvigione di chi vende", pctTesto: (p, i) => `${p} + IVA ${i}`,
    altre: "Altre spese", altreAiuto: "Avvocato, certificati, traduzioni: ciò che sapete già.",
    mutuo: "Mutuo da estinguere", mutuoAiuto: "Non è un costo della vendita, ma esce dal netto che vi resta.",
    resta: "Vi resta in tasca", delPrezzo: (p) => `${p} del prezzo`, primaDi: "prima di:",
    voceVerifica: { ape: "APE", conformita: "verifiche di conformità" },
    cascata: "Dal prezzo al netto, voce per voce",
    righe: {
      prezzo: "Prezzo di vendita",
      provvigione: (p, i) => `Provvigione, ${p} + IVA ${i}`, provvigioneSp: "Uso della provincia di Novara; conta il mandato firmato.",
      plus: "Imposta sulla plusvalenza",
      plusEsente: {
        anni: `Non dovuta: avete posseduto la casa per ${A.anniPlusvalenza} anni o più, e non c'è un Superbonus recente.`,
        principale: "Non dovuta: è stata abitazione principale per la maggior parte del periodo.",
        successione: "Non dovuta secondo la regola del Superbonus per gli immobili ereditati; per gli altri casi chiedete al notaio.",
      },
      plusManca: "Serve il prezzo d'acquisto per calcolarla.",
      plusTassata: (b, r) => `Base imponibile ${b}: prezzo di vendita meno prezzo d'acquisto e costi documentati. Imposta sostitutiva del ${A.sostitutiva}%, scelta al rogito e riscossa dal notaio, ${r === "cinque" ? "perché vendete entro 5 anni" : "per la regola del Superbonus"}. In alternativa si può dichiarare nell'IRPEF ordinaria: non la calcoliamo.`,
      ape: "Attestato di prestazione energetica (APE)",
      apeSp: (a, b) => `Va allegato al rogito: senza, la sanzione va da ${a} a ${b}. Il costo dipende dal tecnico: in verifica, non lo sottraiamo.`,
      conformita: "Verifiche di conformità catastale e urbanistica",
      conformitaSp: "Un tecnico controlla planimetria e titoli edilizi. Costo da preventivare: in verifica, non lo sottraiamo.",
      altre: "Altre spese", mutuo: "Mutuo da estinguere", netto: "Netto",
    },
    nonDovuta: "non dovuta", inVerifica: "in verifica", mancaAcquisto: "serve il prezzo d'acquisto",
    tempo: (fra, r) => `Fra ${fra === 1 ? "1 anno" : `${fra} anni`}, a 5 anni di possesso, la plusvalenza non sarebbe più tassata: a parità di prezzo, ${r} di imposta in meno.`,
    annuncio: (n) => `Netto: ${n}`,
    metodo: (l) => [
      `Plusvalenza: è tassata se vendete entro ${A.anniPlusvalenza} anni dall'acquisto o dalla costruzione (art. 67 TUIR), a meno che la casa sia stata abitazione principale vostra o dei familiari per la maggior parte del periodo. Al rogito si può scegliere l'imposta sostitutiva del ${pc(A.sostitutiva, l)}, riscossa dal notaio, invece dell'IRPEF ordinaria.`,
      `Superbonus: dal 1° gennaio 2024 è tassata la plusvalenza sulla prima vendita di una casa con lavori Superbonus conclusi da non più di ${A.anniSuperbonus} anni, anche oltre i 5. Sono esclusi gli immobili ereditati e quelli usati come abitazione principale per la maggior parte dei ${A.anniSuperbonus} anni. Come si calcola la base in questo caso non lo abbiamo riletto: usiamo la stessa formula.`,
      `Base: prezzo di vendita meno prezzo d'acquisto e costi documentati che scrivete voi. Quali costi si possano sommare lo stabilisce l'art. 68 TUIR, che non abbiamo riletto sul testo: per questo il campo è vostro e la regola resta «in verifica».`,
      `Provvigione: l'uso della provincia di Novara è il ${pc(A.agenzia.pct, l)} per ciascuna parte, più IVA ${pc(A.agenzia.iva, l)}. È un uso del 2005, non un tetto: conta il mandato firmato.`,
      `APE e conformità: l'attestato energetico va allegato all'atto, e dal 2013 la mancanza costa una sanzione da ${fmtEuro(A.apeSanzione[0], l)} a ${fmtEuro(A.apeSanzione[1], l)}. Il costo dell'APE e delle verifiche del tecnico non ha un tariffario ufficiale: lo mostriamo come voce da preventivare e non lo sottraiamo. Non trattiamo successioni, donazioni, vendite di società né venditori con partita IVA.`,
    ],
    tabTitolo: "Tre casi, senza calcolatore", tabCaption: "Una casa venduta a 600.000 € e comprata a 450.000 €, con agenzia al 3% + IVA, in tre situazioni",
    casi: ["Seconda casa, 3 anni", "Seconda casa, 7 anni", "Abitazione principale, 3 anni"], tabPlus: "Imposta sulla plusvalenza", tabNetto: "Netto", tabNota: "Imposta sostitutiva del 26% senza costi documentati. APE e verifiche di conformità non sono sottratte: il netto vale «prima di» quelle voci.",
  },
  en: {
    titolo: "Selling a home on Lake Orta: what you keep",
    descrizione: "From sale price to net proceeds: capital gains within 5 years with the 26% substitute tax, the Superbonus case, commission with VAT, energy certificate and compliance. With source and date, for sellers.",
    h1: "From the price to the net in your pocket.",
    lead: "The sale price is not what you keep. Commission with VAT, any capital gains tax, the mortgage to close: item by item, with the rule and the source. What we have not verified stays out, and we say so.",
    prezzo: "Sale price", scala: "Price, on a logarithmic scale",
    acquisto: "Price paid at purchase", acquistoAiuto: "The one in the purchase deed, or the construction cost.",
    anni: "Years of ownership", anniTesto: (n) => (n === 1 ? "1 year" : `${n} years`),
    principale: "It was the main residence for most of the time", principaleAiuto: "Yours or your family's. In that case the gain is not taxed, even within 5 years.",
    successione: "I inherited it", successioneAiuto: "Under the Superbonus rule inherited properties are excluded.",
    superbonus: "Superbonus works completed no more than 10 years ago", superbonusAiuto: "Since 2024 the first sale is taxed even after 5 years, unless it was the main residence for most of the 10 years.",
    costi: "Documented costs to deduct", costiAiuto: "Works that increased the value, purchase expenses. Which costs count is set by art. 68 TUIR: we have not re-read it, ask the notary.",
    agenzia: "Selling with an agency", agenziaAiuto: "In the province of Novara the custom is 3% from each party, plus 22% VAT, unless agreed otherwise. For Omegna and the VCO shore the record of customs is not verified.",
    pct: "Seller's commission", pctTesto: (p, i) => `${p} + VAT ${i}`,
    altre: "Other costs", altreAiuto: "Lawyer, certificates, translations: what you already know.",
    mutuo: "Mortgage to pay off", mutuoAiuto: "Not a cost of the sale, but it comes out of what you keep.",
    resta: "You keep", delPrezzo: (p) => `${p} of the price`, primaDi: "before:",
    voceVerifica: { ape: "energy certificate", conformita: "compliance checks" },
    cascata: "From price to net, item by item",
    righe: {
      prezzo: "Sale price",
      provvigione: (p, i) => `Commission, ${p} + VAT ${i}`, provvigioneSp: "Custom of the province of Novara; the signed mandate is what counts.",
      plus: "Capital gains tax",
      plusEsente: {
        anni: `Not due: you have owned the home for ${A.anniPlusvalenza} years or more, and there is no recent Superbonus.`,
        principale: "Not due: it was the main residence for most of the period.",
        successione: "Not due under the Superbonus rule for inherited properties; for other cases ask the notary.",
      },
      plusManca: "The purchase price is needed to calculate it.",
      plusTassata: (b, r) => `Taxable base ${b}: sale price minus purchase price and documented costs. ${A.sostitutiva}% substitute tax, chosen at the deed and collected by the notary, ${r === "cinque" ? "because you sell within 5 years" : "under the Superbonus rule"}. It can instead be declared in ordinary income tax (IRPEF): we do not calculate that.`,
      ape: "Energy performance certificate (APE)",
      apeSp: (a, b) => `It must be attached to the deed: without it the fine ranges from ${a} to ${b}. The cost depends on the technician: being checked, not deducted.`,
      conformita: "Cadastral and planning compliance checks",
      conformitaSp: "A technician checks the floor plan and building permits. Cost to be quoted: being checked, not deducted.",
      altre: "Other costs", mutuo: "Mortgage to pay off", netto: "Net",
    },
    nonDovuta: "not due", inVerifica: "being checked", mancaAcquisto: "purchase price needed",
    tempo: (fra, r) => `In ${fra === 1 ? "1 year" : `${fra} years`}, at 5 years of ownership, the gain would no longer be taxed: at the same price, ${r} less tax.`,
    annuncio: (n) => `Net: ${n}`,
    metodo: (l) => [
      `Capital gains: taxed if you sell within ${A.anniPlusvalenza} years of purchase or construction (art. 67 TUIR), unless the home was your or your family's main residence for most of the period. At the deed you can opt for the ${pc(A.sostitutiva, l)} substitute tax, collected by the notary, instead of ordinary income tax.`,
      `Superbonus: since 1 January 2024 the gain on the first sale of a home with Superbonus works completed no more than ${A.anniSuperbonus} years earlier is taxed, even beyond 5 years. Inherited properties and those used as the main residence for most of the ${A.anniSuperbonus} years are excluded. How the base is calculated in this case we have not re-read: we use the same formula.`,
      "Base: sale price minus purchase price and the documented costs you enter. Which costs can be added is set by art. 68 TUIR, which we have not re-read in the text: that is why the field is yours and the rule stays \"being checked\".",
      `Commission: the Novara custom is ${pc(A.agenzia.pct, l)} from each party, plus ${pc(A.agenzia.iva, l)} VAT. It is a 2005 custom, not a cap: the signed mandate is what counts.`,
      `Energy certificate and compliance: the energy certificate must be attached to the deed, and since 2013 its absence carries a fine from ${fmtEuro(A.apeSanzione[0], l)} to ${fmtEuro(A.apeSanzione[1], l)}. The cost of the certificate and of the technician's checks has no official tariff: we show it as an item to be quoted and do not deduct it. We do not cover inheritances, gifts, company sales or VAT-registered sellers.`,
    ],
    tabTitolo: "Three cases, without the calculator", tabCaption: "A home sold for €600,000 and bought for €450,000, with an agency at 3% + VAT, in three situations",
    casi: ["Second home, 3 years", "Second home, 7 years", "Main residence, 3 years"], tabPlus: "Capital gains tax", tabNetto: "Net", tabNota: "26% substitute tax with no documented costs. Energy certificate and compliance checks are not deducted: the net holds \"before\" those items.",
  },
  de: {
    titolo: "Haus am Ortasee verkaufen: was netto bleibt",
    descrizione: "Vom Verkaufspreis zum Nettoerlös: Veräußerungsgewinn innerhalb von 5 Jahren mit 26 % Ersatzsteuer, der Superbonus-Fall, Provision mit MwSt., Energieausweis und Konformität. Mit Quelle und Datum, für Verkäufer.",
    h1: "Vom Preis zum Netto in der Tasche.",
    lead: "Der Verkaufspreis ist nicht, was bleibt. Provision mit MwSt., eine mögliche Steuer auf den Veräußerungsgewinn, das abzulösende Darlehen: Posten für Posten, mit Regel und Quelle. Was wir nicht geprüft haben, bleibt draußen, und wir sagen es.",
    prezzo: "Verkaufspreis", scala: "Preis, logarithmische Skala",
    acquisto: "Bezahlter Kaufpreis", acquistoAiuto: "Der Preis aus der Kaufurkunde oder die Baukosten.",
    anni: "Jahre im Besitz", anniTesto: (n) => (n === 1 ? "1 Jahr" : `${n} Jahre`),
    principale: "War die meiste Zeit Hauptwohnsitz", principaleAiuto: "Ihrer oder der Ihrer Familie. Dann ist der Gewinn nicht steuerpflichtig, auch innerhalb von 5 Jahren.",
    successione: "Ich habe es geerbt", successioneAiuto: "Nach der Superbonus-Regel sind geerbte Immobilien ausgenommen.",
    superbonus: "Superbonus-Arbeiten vor höchstens 10 Jahren abgeschlossen", superbonusAiuto: "Seit 2024 ist der erste Verkauf auch nach 5 Jahren steuerpflichtig, außer bei Hauptwohnsitz für den größten Teil der 10 Jahre.",
    costi: "Belegte abzugsfähige Kosten", costiAiuto: "Wertsteigernde Arbeiten, Kaufnebenkosten. Welche Kosten zählen, regelt Art. 68 TUIR: von uns nicht nachgelesen, fragen Sie den Notar.",
    agenzia: "Ich verkaufe mit Makler", agenziaAiuto: "In der Provinz Novara ist der Brauch 3 % je Partei plus 22 % MwSt., sofern nichts anderes vereinbart. Für Omegna und das VCO-Ufer ist die Brauchsammlung nicht geprüft.",
    pct: "Verkäuferprovision", pctTesto: (p, i) => `${p} + MwSt. ${i}`,
    altre: "Sonstige Kosten", altreAiuto: "Anwalt, Bescheinigungen, Übersetzungen: was Sie schon wissen.",
    mutuo: "Abzulösendes Darlehen", mutuoAiuto: "Kein Verkaufskosten-Posten, aber es geht vom Netto ab.",
    resta: "Ihnen bleibt", delPrezzo: (p) => `${p} des Preises`, primaDi: "vor:",
    voceVerifica: { ape: "Energieausweis", conformita: "Konformitätsprüfungen" },
    cascata: "Vom Preis zum Netto, Posten für Posten",
    righe: {
      prezzo: "Verkaufspreis",
      provvigione: (p, i) => `Provision, ${p} + MwSt. ${i}`, provvigioneSp: "Brauch der Provinz Novara; es zählt der unterschriebene Auftrag.",
      plus: "Steuer auf den Veräußerungsgewinn",
      plusEsente: {
        anni: `Nicht fällig: Sie besitzen das Haus seit ${A.anniPlusvalenza} Jahren oder länger, und es gibt keinen jüngeren Superbonus.`,
        principale: "Nicht fällig: Es war die meiste Zeit Hauptwohnsitz.",
        successione: "Nach der Superbonus-Regel für geerbte Immobilien nicht fällig; für andere Fälle fragen Sie den Notar.",
      },
      plusManca: "Zur Berechnung fehlt der Kaufpreis.",
      plusTassata: (b, r) => `Bemessungsgrundlage ${b}: Verkaufspreis minus Kaufpreis und belegte Kosten. Ersatzsteuer ${A.sostitutiva} %, bei der Urkunde gewählt und vom Notar erhoben, ${r === "cinque" ? "weil Sie innerhalb von 5 Jahren verkaufen" : "nach der Superbonus-Regel"}. Alternativ in der normalen Einkommensteuer (IRPEF): die rechnen wir nicht.`,
      ape: "Energieausweis (APE)",
      apeSp: (a, b) => `Er muss der Urkunde beiliegen: ohne ihn droht ein Bußgeld von ${a} bis ${b}. Die Kosten hängen vom Techniker ab: in Prüfung, nicht abgezogen.`,
      conformita: "Kataster- und Baukonformität",
      conformitaSp: "Ein Techniker prüft Grundriss und Baugenehmigungen. Kosten nach Angebot: in Prüfung, nicht abgezogen.",
      altre: "Sonstige Kosten", mutuo: "Abzulösendes Darlehen", netto: "Netto",
    },
    nonDovuta: "nicht fällig", inVerifica: "in Prüfung", mancaAcquisto: "Kaufpreis fehlt",
    tempo: (fra, r) => `In ${fra === 1 ? "1 Jahr" : `${fra} Jahren`}, nach 5 Jahren Besitz, wäre der Gewinn nicht mehr steuerpflichtig: beim selben Preis ${r} weniger Steuer.`,
    annuncio: (n) => `Netto: ${n}`,
    metodo: (l) => [
      `Veräußerungsgewinn: steuerpflichtig bei Verkauf innerhalb von ${A.anniPlusvalenza} Jahren nach Kauf oder Bau (Art. 67 TUIR), außer das Haus war die meiste Zeit Hauptwohnsitz von Ihnen oder Ihrer Familie. Bei der Urkunde kann statt der normalen Einkommensteuer die Ersatzsteuer von ${pc(A.sostitutiva, l)} gewählt werden, die der Notar erhebt.`,
      `Superbonus: Seit 1. Januar 2024 ist der Gewinn beim ersten Verkauf eines Hauses mit vor höchstens ${A.anniSuperbonus} Jahren abgeschlossenen Superbonus-Arbeiten steuerpflichtig, auch nach mehr als 5 Jahren. Ausgenommen sind geerbte Immobilien und solche, die den größten Teil der ${A.anniSuperbonus} Jahre Hauptwohnsitz waren. Wie die Grundlage in diesem Fall berechnet wird, haben wir nicht nachgelesen: Wir verwenden dieselbe Formel.`,
      "Grundlage: Verkaufspreis minus Kaufpreis und die belegten Kosten, die Sie eintragen. Welche Kosten hinzugerechnet werden dürfen, regelt Art. 68 TUIR, den wir nicht im Wortlaut nachgelesen haben: Deshalb ist das Feld Ihres und die Regel bleibt „in Prüfung“.",
      `Provision: Der Brauch der Provinz Novara ist ${pc(A.agenzia.pct, l)} je Partei plus ${pc(A.agenzia.iva, l)} MwSt. Es ist ein Brauch von 2005, keine Obergrenze: Es zählt der unterschriebene Auftrag.`,
      `Energieausweis und Konformität: Der Energieausweis muss der Urkunde beiliegen; seit 2013 kostet sein Fehlen ein Bußgeld von ${fmtEuro(A.apeSanzione[0], l)} bis ${fmtEuro(A.apeSanzione[1], l)}. Für die Kosten des Ausweises und der Prüfungen gibt es keinen amtlichen Tarif: Wir zeigen sie als Posten nach Angebot und ziehen sie nicht ab. Erbschaften, Schenkungen, Gesellschaftsverkäufe und umsatzsteuerpflichtige Verkäufer behandeln wir nicht.`,
    ],
    tabTitolo: "Drei Fälle, ohne Rechner", tabCaption: "Ein Haus für 600.000 € verkauft und für 450.000 € gekauft, mit Makler zu 3 % + MwSt., in drei Situationen",
    casi: ["Zweitwohnsitz, 3 Jahre", "Zweitwohnsitz, 7 Jahre", "Hauptwohnsitz, 3 Jahre"], tabPlus: "Steuer auf den Gewinn", tabNetto: "Netto", tabNota: "26 % Ersatzsteuer ohne belegte Kosten. Energieausweis und Konformitätsprüfungen sind nicht abgezogen: Das Netto gilt „vor“ diesen Posten.",
  },
  sl: {
    titolo: "Prodaja hiše ob jezeru Orta: koliko ostane neto",
    descrizione: "Od prodajne cene do neto zneska: kapitalski dobiček v 5 letih z nadomestnim davkom 26 %, primer Superbonus, provizija z DDV, energetska izkaznica in skladnost. Z virom in datumom, za prodajalce.",
    h1: "Od cene do neto zneska v žepu.",
    lead: "Prodajna cena ni tisto, kar ostane. Provizija z DDV, morebitni davek na kapitalski dobiček, kredit, ki ga je treba poplačati: postavka za postavko, s pravilom in virom. Česar nismo preverili, ostane zunaj, in to povemo.",
    prezzo: "Prodajna cena", scala: "Cena, na logaritemski lestvici",
    acquisto: "Cena ob nakupu", acquistoAiuto: "Cena iz kupoprodajne pogodbe ali stroški gradnje.",
    anni: "Leta lastništva", anniTesto: (n) => `${n} ${n % 100 === 1 ? "leto" : n % 100 === 2 ? "leti" : n % 100 === 3 || n % 100 === 4 ? "leta" : "let"}`,
    principale: "Večino časa je bila glavno prebivališče", principaleAiuto: "Vaše ali vaših družinskih članov. V tem primeru dobiček ni obdavčen, tudi v 5 letih.",
    successione: "Nepremičnina je podedovana", successioneAiuto: "Po pravilu Superbonus so podedovane nepremičnine izključene.",
    superbonus: "Dela Superbonus, končana pred največ 10 leti", superbonusAiuto: "Od leta 2024 je prva prodaja obdavčena tudi po 5 letih, razen če je bila večino od 10 let glavno prebivališče.",
    costi: "Dokumentirani stroški za odbitek", costiAiuto: "Dela, ki so povečala vrednost, stroški nakupa. Kateri stroški veljajo, določa 68. člen TUIR: nismo ga preverili, vprašajte notarja.",
    agenzia: "Prodajam z agencijo", agenziaAiuto: "V pokrajini Novara je običaj 3 % za vsako stranko, plus 22 % DDV, če ni dogovorjeno drugače. Za Omegno in obalo VCO zbirka običajev ni preverjena.",
    pct: "Provizija prodajalca", pctTesto: (p, i) => `${p} + DDV ${i}`,
    altre: "Drugi stroški", altreAiuto: "Odvetnik, potrdila, prevodi: kar že veste.",
    mutuo: "Kredit za poplačilo", mutuoAiuto: "Ni strošek prodaje, a se odšteje od neto zneska.",
    resta: "V žepu vam ostane", delPrezzo: (p) => `${p} cene`, primaDi: "pred:",
    voceVerifica: { ape: "energetska izkaznica", conformita: "preverjanja skladnosti" },
    cascata: "Od cene do neto zneska, postavka za postavko",
    righe: {
      prezzo: "Prodajna cena",
      provvigione: (p, i) => `Provizija, ${p} + DDV ${i}`, provvigioneSp: "Običaj pokrajine Novara; šteje podpisano naročilo.",
      plus: "Davek na kapitalski dobiček",
      plusEsente: {
        anni: `Ni dolgovan: hišo imate ${A.anniPlusvalenza} let ali več in ni nedavnega Superbonusa.`,
        principale: "Ni dolgovan: večino obdobja je bila glavno prebivališče.",
        successione: "Po pravilu Superbonus za podedovane nepremičnine ni dolgovan; za druge primere vprašajte notarja.",
      },
      plusManca: "Za izračun potrebujemo ceno ob nakupu.",
      plusTassata: (b, r) => `Davčna osnova ${b}: prodajna cena minus cena ob nakupu in dokumentirani stroški. Nadomestni davek ${A.sostitutiva} %, izbran ob podpisu pri notarju, ki ga tudi pobere, ${r === "cinque" ? "ker prodajate v 5 letih" : "po pravilu Superbonus"}. Lahko ga prijavite tudi v rednem davku na dohodek (IRPEF): tega ne računamo.`,
      ape: "Energetska izkaznica (APE)",
      apeSp: (a, b) => `Priložena mora biti pogodbi: brez nje je globa od ${a} do ${b}. Cena je odvisna od strokovnjaka: v preverjanju, ne odštejemo je.`,
      conformita: "Preverjanje katastrske in urbanistične skladnosti",
      conformitaSp: "Strokovnjak preveri tloris in gradbena dovoljenja. Strošek po predračunu: v preverjanju, ne odštejemo ga.",
      altre: "Drugi stroški", mutuo: "Kredit za poplačilo", netto: "Neto",
    },
    nonDovuta: "ni dolgovan", inVerifica: "v preverjanju", mancaAcquisto: "manjka cena ob nakupu",
    tempo: (fra, r) => `Čez ${fra === 1 ? "1 leto" : fra === 2 ? "2 leti" : fra < 5 ? `${fra} leta` : `${fra} let`}, pri 5 letih lastništva, dobiček ne bi bil več obdavčen: pri isti ceni ${r} manj davka.`,
    annuncio: (n) => `Neto: ${n}`,
    metodo: (l) => [
      `Kapitalski dobiček: obdavčen je, če prodate v ${A.anniPlusvalenza} letih od nakupa ali gradnje (67. člen TUIR), razen če je bila hiša večino obdobja glavno prebivališče vas ali vaših družinskih članov. Ob podpisu lahko namesto rednega davka na dohodek izberete nadomestni davek ${pc(A.sostitutiva, l)}, ki ga pobere notar.`,
      `Superbonus: od 1. januarja 2024 je obdavčen dobiček ob prvi prodaji hiše z deli Superbonus, končanimi pred največ ${A.anniSuperbonus} leti, tudi po več kot 5 letih. Izključene so podedovane nepremičnine in tiste, ki so bile večino od ${A.anniSuperbonus} let glavno prebivališče. Kako se v tem primeru izračuna osnova, nismo preverili: uporabimo isto formulo.`,
      "Osnova: prodajna cena minus cena ob nakupu in dokumentirani stroški, ki jih vpišete sami. Katere stroške je mogoče prišteti, določa 68. člen TUIR, ki ga nismo prebrali v besedilu: zato je polje vaše in pravilo ostane »v preverjanju«.",
      `Provizija: običaj pokrajine Novara je ${pc(A.agenzia.pct, l)} za vsako stranko, plus ${pc(A.agenzia.iva, l)} DDV. Gre za običaj iz leta 2005, ne za zgornjo mejo: šteje podpisano naročilo.`,
      `Energetska izkaznica in skladnost: izkaznica mora biti priložena pogodbi, od leta 2013 pa njena odsotnost pomeni globo od ${fmtEuro(A.apeSanzione[0], l)} do ${fmtEuro(A.apeSanzione[1], l)}. Za ceno izkaznice in preverjanj ni uradne tarife: prikažemo jo kot postavko po predračunu in je ne odštejemo. Ne obravnavamo dedovanj, daril, prodaj družb ali prodajalcev, ki so zavezanci za DDV.`,
    ],
    tabTitolo: "Trije primeri, brez kalkulatorja", tabCaption: "Hiša, prodana za 600.000 € in kupljena za 450.000 €, z agencijo po 3 % + DDV, v treh položajih",
    casi: ["Druga nepremičnina, 3 leta", "Druga nepremičnina, 7 let", "Glavno prebivališče, 3 leta"], tabPlus: "Davek na dobiček", tabNetto: "Neto", tabNota: "Nadomestni davek 26 % brez dokumentiranih stroškov. Energetska izkaznica in preverjanja skladnosti niso odšteti: neto velja »pred« temi postavkami.",
  },
};
