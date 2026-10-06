import type { Guida } from "../tipi";
import { vai } from "../link";
import { ES, eur, sulPrezzo } from "../dati";

const l = "de" as const;
const v = vai(l);
const e = (x: number) => eur(x, l);
const p = (x: number) => sulPrezzo(x, l);

const itSeconda = ES.registro2 + ES.fisse;
const itPrima = ES.registro1 + ES.fisse;
const at = ES.atGrest + ES.atGb;

export const costi: Guida = {
  titolo: "Was ein Hauskauf am Ortasee kostet: Italien, Schweiz, Deutschland, Österreich",
  descrizione: "Registersteuer, Preis-Wert-Regel, Mehrwertsteuer, Notar, Provision und IMU bei einem Haus am Ortasee, Posten für Posten; daneben die Erwerbssteuern in Österreich, Deutschland und der Schweiz, soweit wir sie geprüft haben.",
  occhiello: "Hauptratgeber",
  h1: "Was ein Hauskauf am See kostet, Posten für Posten",
  lead: "In Italien ist für den Käufer, der von einer Privatperson kauft, der schwerste Posten nicht der erklärte Preis, sondern der Katasterwert: Auf ihm wird die Registersteuer berechnet. Hier finden Sie die Formeln, ein Beispiel mit einem Haus für 600.000 € und den Vergleich mit dem, was wir in Österreich, Deutschland und der Schweiz prüfen konnten.",
  inBreve: [
    "Von einer Privatperson: Registersteuer (imposta di registro) 9 % (2 % beim Erstwohnsitz), mindestens 1.000 €, dazu 50 + 50 € Hypotheken- und Katastersteuer. Von einem Unternehmen: Mehrwertsteuer 10 % (4 % beim Erstwohnsitz, 22 % für A/1, A/8, A/9) plus 600 € feste Steuern.",
    "Mit der Preis-Wert-Regel (prezzo-valore) gelten die 9 % für den Katasterwert (Katasterertrag × 1,05 × 120), nicht für den Preis: Bei einem Haus für 600.000 € mit einem Katasterertrag von 2.000 € beträgt die Steuer " + e(ES.registro2) + ".",
    "In der Provinz Novara sieht der Ortsbrauch eine Provision von 3 % je Partei vor, zuzüglich 22 % Mehrwertsteuer: " + e(ES.agenzia) + " auf 600.000 €.",
    "Für den Notar gibt es seit 2012 keinen Tarif: Sie verlangen einen Kostenvoranschlag, und im Beispiel rechnen wir ihn nicht ein.",
    "Österreich: Grunderwerbsteuer 3,5 % plus 1,1 % Eintragungsgebühr ins Grundbuch (amtliche Quelle, Stand 1. August 2026). Deutschland: 3,5 % Bundessatz, bis 6,5 % je nach Land, in Prüfung. Schweiz: hängt vom Kanton ab, in Prüfung.",
    "Jedes Jahr: IMU auf Zweitwohnungen in Orta San Giulio 0,96 % (2026).",
  ],
  sezioni: [
    {
      id: "da-privato",
      h2: "Italien, von einer Privatperson: Register-, Hypotheken-, Katastersteuer",
      blocchi: [
        "Verkauft eine natürliche Person, ist der Kauf mehrwertsteuerfrei, und der Käufer zahlt[^1][^2]:",
        {
          lista: [
            "**Registersteuer 9 %**, oder **2 %** beim Erstwohnsitz (A/1, A/8, A/9 ausgenommen), mindestens **1.000 €**;",
            "**Hypothekensteuer (imposta ipotecaria) 50 €** und **Katastersteuer (imposta catastale) 50 €**.",
          ],
        },
        "**Die Preis-Wert-Regel.** Zwischen natürlichen Personen kann der Käufer bei Wohnungen und Zubehör vom Notar verlangen, dass die Bemessungsgrundlage der Katasterwert ist: Katasterertrag (rendita catastale) × 1,05 × **120** (Zweitwohnung) oder × **110** (Erstwohnsitz). Der tatsächliche Preis muss trotzdem in der Urkunde stehen: Wer ihn verschweigt, zahlt eine Strafe von 50 bis 100 % der Differenz[^1]. Bei einem Haus am See liegt der Katasterwert fast immer weit unter dem Preis, deshalb wiegt die Preis-Wert-Regel schwerer als jeder andere Posten.",
        `Der Katasterertrag steht im Katasterauszug (visura): Wie man ihn liest und warum er nicht der Preis ist, erklärt das Werkzeug [Vom Katasterwert zum Markt](${v.strumento("catasto")}).`,
      ],
    },
    {
      id: "da-impresa",
      h2: "Italien, von einem Unternehmen: die Mehrwertsteuer",
      blocchi: [
        "Verkauft ein Unternehmen, das Mehrwertsteuer (IVA) erhebt (typischerweise ein Bauträger, bei einem neuen oder sanierten Haus), zahlt der Käufer die Mehrwertsteuer auf den Preis: **4 %** beim Erstwohnsitz, **10 %** für andere Wohnungen, **22 %** für die Kategorien A/1, A/8, A/9. Register-, Hypotheken- und Katastersteuer werden fest, **je 200 €**[^1]. Die Preis-Wert-Regel gilt hier nicht: Bezahlt wird auf den vollen Preis.",
      ],
    },
    {
      id: "notaio-agenzia",
      h2: "Notar und Makler",
      blocchi: [
        "**Notar.** Die Berufstarife wurden mit Art. 9 des D.L. 1/2012 abgeschafft: Das Honorar wird vereinbart, und der Notar muss einen Kostenvoranschlag geben[^4]. Nach den Ortsbräuchen der Provinz Novara gehen die Vertragskosten zulasten des Käufers, der den Notar wählt[^3]. Für ein «typisches» Honorar haben wir keine amtliche Quelle, und wir erfinden keines.",
        "**Makler.** In der Provinz Novara, zu der Orta San Giulio gehört, nennt die Provinzsammlung der Ortsbräuche, sofern nichts anderes vereinbart ist, eine Provision von **3 % je Partei** auf den tatsächlichen Preis[^3]. Es ist ein Brauch von 2005, keine gesetzliche Obergrenze; die Mehrwertsteuer von 22 % kommt hinzu. Für die Gemeinden am Nordufer in der Provinz VCO (Omegna, Nonio, Quarna Sopra, Madonna del Sasso) haben wir die Sammlung der Ortsbräuche nicht gelesen.",
      ],
    },
    {
      id: "esempio",
      h2: "Das Beispiel: ein Haus für 600.000 € in vier Ländern",
      blocchi: [
        `Annahmen: Preis **${e(ES.prezzo)}**, privater Verkäufer, Käufer natürliche Person, keine Hypothek. Für Italien braucht es einen Katasterertrag: Wir nehmen **${e(ES.rendita)}** an, was einen Katasterwert von ${e(ES.valCat2)} als Zweitwohnung und ${e(ES.valCat1)} als Erstwohnsitz ergibt. Es ist nicht der Katasterertrag eines realen Hauses: Ihrer steht im Katasterauszug, und er ändert alles.`,
        {
          tabella: {
            testa: ["Szenario", "Steuern und Register", "Makler, Anteil des Käufers", "Bekannte Summe", "Auf den Preis"],
            num: [1, 2, 3, 4],
            righe: [
              ["Italien, Zweitwohnung von Privat, Preis-Wert-Regel", e(itSeconda), e(ES.agenzia), e(itSeconda + ES.agenzia), p(itSeconda + ES.agenzia)],
              ["Italien, dasselbe Haus als Erstwohnsitz", e(itPrima), e(ES.agenzia), e(itPrima + ES.agenzia), p(itPrima + ES.agenzia)],
              ["Italien, Zweitwohnung von einem Unternehmen (MwSt. 10 %)", e(ES.ivaImpresa), e(ES.agenzia), e(ES.ivaImpresa + ES.agenzia), p(ES.ivaImpresa + ES.agenzia)],
              ["Österreich", e(at), e(ES.atMakler), e(at + ES.atMakler), p(at + ES.atMakler)],
              ["Deutschland", "in Prüfung", "in Prüfung", "—", "—"],
              ["Schweiz", "in Prüfung", "in Prüfung", "—", "—"],
            ],
            didascalia: "In allen Zeilen nicht enthalten: Notar oder Anwalt, Übersetzungen, Gutachten, Hypothekenzinsen. Für Deutschland und die Schweiz sind die Daten nicht ausreichend geprüft, um sie zu addieren: Die bekannten Posten stehen in den Abschnitten unten.",
          },
        },
        `Was die Tabelle zeigt: Mit der Preis-Wert-Regel beträgt die italienische Steuer auf die Zweitwohnung ${p(itSeconda)} des Preises, weniger als die österreichische Steuer (${p(at)}), weil sie auf einem Katasterwert berechnet wird, der weit unter dem Preis liegt. Ohne die Annahme zum Katasterertrag hält der Vergleich nicht: Bei einem Katasterertrag von 4.000 € verdoppelt sich die Registersteuer.`,
        "In Österreich kommt zur bekannten Summe der Anwalt oder Notar hinzu, der den Vertrag aufsetzt: Die amtliche Quelle spricht von etwa 1–3 % des Preises[^6], also zwischen " + e(ES.atAvvMin) + " und " + e(ES.atAvvMax) + " bei diesem Haus. Wir rechnen das nicht ein, weil es eine Spanne ist, kein Tarif.",
        `Um die Rechnung mit Ihren Zahlen zu wiederholen, gibt es das Werkzeug [Kaufnebenkosten im Vergleich](${v.strumento("costi")}).`,
      ],
    },
    {
      id: "austria",
      h2: "Österreich: 3,5 % plus 1,1 %",
      blocchi: [
        "Laut dem amtlichen Portal oesterreich.gv.at (Stand 1. August 2026)[^6]:",
        {
          lista: [
            "**Grunderwerbsteuer** **3,5 %** des Preises;",
            "**Eintragung ins Grundbuch** (Eintragungsgebühr) **1,1 %** des Preises, dazu eine Eingabegebühr von 85 €; gibt es eine Hypothek, kostet deren Eintragung 1,2 % ihres Werts;",
            "**Höchstprovision** des Maklers bei Preisen über 48.448,52 €: **3 %** plus 20 % Mehrwertsteuer;",
            "**Anwalt oder Notar**: etwa 1–3 % des Preises, nach den Tarifen der jeweiligen Kammern.",
          ],
        },
        "Die Regeln für ausländische Käufer in Österreich (die Grundverkehrsgesetze der Länder) haben wir nicht gelesen.",
      ],
    },
    {
      id: "germania",
      h2: "Deutschland: 3,5 % bis 6,5 % je nach Land",
      blocchi: [
        "Das Bundesgesetz über die Grunderwerbsteuer legt den Satz auf **3,5 %** fest (§ 11 GrEStG)[^7]. Laut Sekundärquellen können die Länder seit 2006 einen eigenen Satz festlegen; Bayern wendet weiterhin 3,5 % an, Nordrhein-Westfalen seit 2015 6,5 %[^8][^9]. Die Gesetze der einzelnen Länder haben wir nicht gelesen: Deshalb bleibt Deutschland in der Tabelle «in Prüfung».",
        "Notar, Grundbuch und Provision in Deutschland haben wir für diese Ausgabe nicht anhand von Quellen nachgerechnet: Deshalb hat die deutsche Zeile der Tabelle keine Summe.",
      ],
    },
    {
      id: "svizzera",
      h2: "Schweiz: Der Kanton entscheidet",
      blocchi: [
        "In der Schweiz sind die Steuern und Gebühren auf die Handänderung kantonal, mitunter kommunal. Ein an der Quelle gelesenes Beispiel: Im **Tessin** erhebt das Gesetz über die Grundbuchtarife für die Eintragung einer entgeltlichen Handänderung eine Gebühr von **11 Promille** des Werts (Art. 11 LTRF)[^10], also 1,1 %.",
        "Wir können anhand von Primärquellen nicht sagen, welche weiteren Steuern oder Notargebühren im Tessin hinzukommen, noch was ein Kauf in Zürich oder Bern kostet: Die Schweiz bleibt «in Prüfung». Für Ausländer, die in der Schweiz kaufen, gilt zudem ein Bundesgesetz, das den Erwerb durch Personen im Ausland beschränkt und das wir hier nicht gelesen haben.",
      ],
    },
    {
      id: "ogni-anno",
      h2: "Jedes Jahr: IMU",
      blocchi: [
        "In Orta San Giulio beträgt die IMU 2026 für «andere Gebäude», also Zweitwohnungen, **0,96 %**; für den Hauptwohnsitz in den Luxuskategorien A/1, A/8, A/9 **0,55 %**; bei unentgeltlicher Überlassung an Verwandte ersten Grades 0,56 % (Gemeinderatsbeschluss Nr. 37 vom 23. Dezember 2025, Übersicht des MEF)[^5].",
        "Der Satz gilt für die IMU-Bemessungsgrundlage, die aus dem Katasterertrag mit eigenen Koeffizienten berechnet wird, die wir hier nicht nachgelesen haben: Deshalb nennen wir für das Beispiel keinen Jahresbetrag.",
        `Wird das Haus vermietet, stehen die Steuern auf die Mieteinnahmen im Ratgeber [Ferienvermietung am See](${v.guida("affitti")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Ein typisches Notarhonorar für einen Kauf am Ortasee.",
    "Die Ortsbräuche des Verbano-Cusio-Ossola zu Provision und Anzahlung, für Omegna, Nonio, Quarna Sopra und Madonna del Sasso.",
    "Die Sätze der Grunderwerbsteuer, gelesen in den Gesetzen der einzelnen Länder, und die deutschen Notar- und Grundbuchkosten bei einem Haus für 600.000 €.",
    "Die Gesamtkosten eines Kaufs im Tessin, in Zürich oder in Bern, einschließlich Notar- und Gemeindegebühren; die Schweizer Bundesregeln für den Erwerb durch Personen im Ausland.",
    "Die Regeln der österreichischen Länder für ausländische Käufer.",
    "Die IMU-Bemessungsgrundlage des Hauses im Beispiel und die Sätze 2026 der Seegemeinden außer Orta San Giulio.",
  ],
  faq: [
    { d: "Wie viel Steuern zahlt man beim Kauf von einer Privatperson in Italien?", r: "Registersteuer von 9 % (2 % beim Erstwohnsitz), mindestens 1.000 €, dazu 50 € Hypothekensteuer und 50 € Katastersteuer. Mit der Preis-Wert-Regel gelten die 9 % für den Katasterwert (Katasterertrag × 1,05 × 120), nicht für den Preis." },
    { d: "Was ist die Preis-Wert-Regel?", r: "Es ist die Regel, nach der bei Wohnungsverkäufen zwischen natürlichen Personen die Steuern auf Antrag des Käufers beim Notar auf dem Katasterwert statt auf dem Preis berechnet werden. Der tatsächliche Preis muss trotzdem in der Urkunde stehen." },
    { d: "Zahle ich Registersteuer, wenn ich von einem Bauträger kaufe?", r: "Nein: Sie zahlen Mehrwertsteuer (4 % beim Erstwohnsitz, 10 % für andere Wohnungen, 22 % für A/1, A/8, A/9) sowie Register-, Hypotheken- und Katastersteuer fest zu je 200 €." },
    { d: "Wie viel nimmt ein Makler am Ortasee?", r: "In der Provinz Novara sind es nach Ortsbrauch, sofern nichts anderes vereinbart ist, 3 % je Partei auf den tatsächlichen Preis, zuzüglich 22 % Mehrwertsteuer. Es ist ein Brauch von 2005, keine gesetzliche Grenze." },
    { d: "Kostet ein Kauf in Österreich mehr als in Italien?", r: "Das hängt vom italienischen Katasterwert ab. In Österreich zahlt man 3,5 % Steuer und 1,1 % Eintragung auf den Preis; in Italien mit der Preis-Wert-Regel 9 % auf einen Katasterwert, der meist weit darunter liegt. In unserem Beispiel mit 600.000 € und einem Katasterertrag von 2.000 € ist die italienische Steuer niedriger." },
    { d: "Wie hoch ist die IMU auf eine Zweitwohnung in Orta San Giulio?", r: "2026 beträgt der Satz für andere Gebäude, also Zweitwohnungen, 0,96 % der IMU-Bemessungsgrundlage." },
  ],
};
