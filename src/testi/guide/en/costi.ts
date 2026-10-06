import type { Guida } from "../tipi";
import { vai } from "../link";
import { ES, eur, sulPrezzo } from "../dati";

const l = "en" as const;
const v = vai(l);
const e = (x: number) => eur(x, l);
const p = (x: number) => sulPrezzo(x, l);

const itSeconda = ES.registro2 + ES.fisse;
const itPrima = ES.registro1 + ES.fisse;
const at = ES.atGrest + ES.atGb;

export const costi: Guida = {
  titolo: "What it costs to buy a home on Lake Orta: Italy, Switzerland, Germany, Austria",
  descrizione: "Registration tax, the price-value rule, VAT, notary, commission and IMU on a house on Lake Orta, item by item; alongside, the purchase taxes in Austria, Germany and Switzerland where we have checked them.",
  occhiello: "Main guide",
  h1: "What buying a house on the lake costs, item by item",
  lead: "In Italy, when you buy from a private seller, the heaviest item is not the declared price but the cadastral value: registration tax is calculated on it. Here are the formulas, an example on a €600,000 house and the comparison with what we have been able to check in Austria, Germany and Switzerland.",
  inBreve: [
    "From a private seller: registration tax 9% (2% first home), minimum €1,000, plus €50 + €50 of mortgage and cadastral tax. From a company: VAT 10% (4% first home, 22% for A/1, A/8, A/9) plus €600 of fixed taxes.",
    "Under the price-value rule the 9% applies to the cadastral value (cadastral income × 1.05 × 120), not to the price: on a €600,000 house with a cadastral income of €2,000 the tax is " + e(ES.registro2) + ".",
    "In the province of Novara custom provides for a commission of 3% per party, plus VAT at 22%: " + e(ES.agenzia) + " on €600,000.",
    "The notary has had no tariff since 2012: ask for a quote; we do not add it in the example.",
    "Austria: purchase tax 3.5% plus 1.1% for entry in the land register (official source, updated 1 August 2026). Germany: 3.5% federal rate, up to 6.5% depending on the Land, being checked. Switzerland: depends on the canton, being checked.",
    "Every year: IMU on second homes in Orta San Giulio 0.96% (2026).",
  ],
  sezioni: [
    {
      id: "da-privato",
      h2: "Italy, from a private seller: registration, mortgage and cadastral tax",
      blocchi: [
        "When a private individual sells, the sale is VAT-exempt and the buyer pays[^1][^2]:",
        {
          lista: [
            "**Registration tax (imposta di registro) 9%**, or **2%** for a first home (A/1, A/8, A/9 excluded), with a minimum of **€1,000**;",
            "**mortgage tax (imposta ipotecaria) €50** and **cadastral tax (imposta catastale) €50**.",
          ],
        },
        "**The price-value rule (prezzo-valore).** Between private individuals, for homes and their appurtenances, the buyer can ask the notary for the tax base to be the cadastral value: cadastral income (rendita catastale) × 1.05 × **120** (second home) or × **110** (first home). The real price must still be written in the deed: concealing it costs a penalty of 50 to 100% of the difference[^1]. On a lake house the cadastral value is almost always much lower than the price, which is why the price-value rule weighs more than any other item.",
        `The cadastral income is in the cadastral record: how to read it and why it is not the price is explained by the tool [From cadastral value to market](${v.strumento("catasto")}).`,
      ],
    },
    {
      id: "da-impresa",
      h2: "Italy, from a company: VAT",
      blocchi: [
        "If the seller is a VAT-registered company (typically a builder, on a new or renovated house), the buyer pays VAT on the price: **4%** first home, **10%** other homes, **22%** for categories A/1, A/8, A/9. Registration, mortgage and cadastral taxes become fixed, **€200 each**[^1]. The price-value rule does not apply here: you pay on the full price.",
      ],
    },
    {
      id: "notaio-agenzia",
      h2: "Notary and agency",
      blocchi: [
        "**Notary.** Professional tariffs were abolished by art. 9 of Decree-Law 1/2012: the fee is agreed and the notary must give a quote[^4]. Under the customs of the province of Novara the costs of the contract are borne by the buyer, who chooses the notary[^3]. We have no official source for a «typical» fee and we do not invent one.",
        "**Agency.** In the province of Novara, where Orta San Giulio lies, the provincial collection of customs indicates, unless agreed otherwise, a commission of **3% for each party** on the actual price[^3]. It is a custom from 2005, not a legal cap; VAT at 22% is added. For the municipalities on the northern shore in the province of VCO (Omegna, Nonio, Quarna Sopra, Madonna del Sasso) we have not read the collection of customs.",
      ],
    },
    {
      id: "esempio",
      h2: "The example: a €600,000 house in four countries",
      blocchi: [
        `Assumptions: price **${e(ES.prezzo)}**, private seller, buyer a private individual, no mortgage. For Italy a cadastral income is needed: we assume one of **${e(ES.rendita)}**, which gives a cadastral value of ${e(ES.valCat2)} as a second home and ${e(ES.valCat1)} as a first home. It is not the cadastral income of a real house: yours is in the cadastral record, and it changes everything.`,
        {
          tabella: {
            testa: ["Scenario", "Taxes and registers", "Agency, buyer's share", "Known total", "Share of price"],
            num: [1, 2, 3, 4],
            righe: [
              ["Italy, second home from a private seller, price-value rule", e(itSeconda), e(ES.agenzia), e(itSeconda + ES.agenzia), p(itSeconda + ES.agenzia)],
              ["Italy, same house as a first home", e(itPrima), e(ES.agenzia), e(itPrima + ES.agenzia), p(itPrima + ES.agenzia)],
              ["Italy, second home from a company (VAT 10%)", e(ES.ivaImpresa), e(ES.agenzia), e(ES.ivaImpresa + ES.agenzia), p(ES.ivaImpresa + ES.agenzia)],
              ["Austria", e(at), e(ES.atMakler), e(at + ES.atMakler), p(at + ES.atMakler)],
              ["Germany", "being checked", "being checked", "—", "—"],
              ["Switzerland", "being checked", "being checked", "—", "—"],
            ],
            didascalia: "Excluded from every row: notary or lawyer, translations, surveys, mortgage interest. For Germany and Switzerland the data are not verified well enough to add up: the known items are in the sections below.",
          },
        },
        `What the table says: under the price-value rule the Italian tax on a second home is ${p(itSeconda)} of the price, less than the Austrian tax (${p(at)}), because it is calculated on a cadastral value much lower than the price. Without the assumption on the cadastral income the comparison does not hold: with a cadastral income of €4,000 the registration tax doubles.`,
        "In Austria the known bill is increased by the lawyer or notary who draws up the contract: the official source speaks of about 1–3% of the price[^6], that is between " + e(ES.atAvvMin) + " and " + e(ES.atAvvMax) + " on this house. We do not add it because it is a range, not a tariff.",
        `To redo the sums with your own figures there is the tool [Purchase costs compared](${v.strumento("costi")}).`,
      ],
    },
    {
      id: "austria",
      h2: "Austria: 3.5% plus 1.1%",
      blocchi: [
        "According to the official portal oesterreich.gv.at (updated 1 August 2026)[^6]:",
        {
          lista: [
            "**Grunderwerbsteuer** (purchase tax) **3.5%** of the price;",
            "**entry in the land register** (Eintragungsgebühr) **1.1%** of the price, plus a filing fee of €85; if there is a mortgage, registering it costs 1.2% of its value;",
            "**maximum commission** of the agent, for prices above €48,448.52, **3%** plus VAT at 20%;",
            "**lawyer or notary**: about 1–3% of the price, according to the tariffs of the respective chambers.",
          ],
        },
        "We have not read the rules for foreign buyers in Austria (the Länder's land transfer laws).",
      ],
    },
    {
      id: "germania",
      h2: "Germany: from 3.5% to 6.5% depending on the Land",
      blocchi: [
        "The federal law on purchase tax sets the rate at **3.5%** (§ 11 GrEStG)[^7]. According to secondary sources, since 2006 the Länder can set their own rate; Bavaria still applies 3.5% and North Rhine-Westphalia 6.5% since 2015[^8][^9]. We have not read the laws of the individual Länder: this is why Germany stays «being checked» in the table.",
        "We have not recalculated notary, land register and commission in Germany from a source for this edition: this is why the German row in the table has no total.",
      ],
    },
    {
      id: "svizzera",
      h2: "Switzerland: the canton decides",
      blocchi: [
        "In Switzerland transfer taxes and fees are cantonal, and sometimes municipal. One example read at the source: in **Ticino** the law on land register tariffs applies to the registration of a transfer for consideration a fee of **11 per thousand** of the value (art. 11 LTRF)[^10], that is 1.1%.",
        "We cannot say, from a primary source, which other taxes or notary fees are added in Ticino, nor what a purchase in Zurich or Bern costs: Switzerland stays «being checked». Foreigners buying in Switzerland are also subject to a federal law restricting purchases by persons abroad, which we have not read here.",
      ],
    },
    {
      id: "ogni-anno",
      h2: "Every year: IMU",
      blocchi: [
        "In Orta San Giulio, for 2026, IMU (municipal property tax) on «other buildings», that is second homes, is **0.96%**; for a main residence in the luxury categories A/1, A/8, A/9 it is **0.55%**; for free loan to first-degree relatives 0.56% (Municipal Council resolution no. 37 of 23 December 2025, MEF schedule)[^5].",
        "The rate applies to the IMU tax base, calculated from the cadastral income with its own coefficients, which we have not reread here: this is why we do not give an annual amount for the example.",
        `If the house is let, the taxes on rents are in the guide [Renting out your lake home](${v.guida("affitti")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "A typical notary fee for a sale on Lake Orta.",
    "The customs of Verbano-Cusio-Ossola on commission and deposit, for Omegna, Nonio, Quarna Sopra and Madonna del Sasso.",
    "The Grunderwerbsteuer rates as read in the laws of the individual Länder, and German notary and register costs on a €600,000 house.",
    "The total of a purchase in Ticino, Zurich or Bern, including notary and municipal fees; the Swiss federal rules on purchases by persons abroad.",
    "The Austrian Länder's rules for foreign buyers.",
    "The IMU tax base of the house in the example, and the 2026 rates of the lake municipalities other than Orta San Giulio.",
  ],
  faq: [
    { d: "How much tax do you pay when buying a home from a private seller in Italy?", r: "Registration tax of 9% (2% for a first home), minimum €1,000, plus €50 of mortgage tax and €50 of cadastral tax. Under the price-value rule the 9% applies to the cadastral value (cadastral income × 1.05 × 120), not to the price." },
    { d: "What is the price-value rule?", r: "It is the rule under which, in sales of homes between private individuals, taxes are calculated on the cadastral value instead of the price, at the buyer's request to the notary. The real price must still be written in the deed." },
    { d: "If I buy from a builder, do I pay registration tax?", r: "No: you pay VAT (4% first home, 10% other homes, 22% for A/1, A/8, A/9) and registration, mortgage and cadastral taxes fixed at €200 each." },
    { d: "How much does an agency charge on Lake Orta?", r: "In the province of Novara custom, unless agreed otherwise, is 3% for each party on the actual price, plus VAT at 22%. It is a custom from 2005, not a legal limit." },
    { d: "Does buying in Austria cost more than in Italy?", r: "It depends on the Italian cadastral value. In Austria you pay 3.5% tax and 1.1% registration on the price; in Italy, under the price-value rule, 9% on a cadastral value that is usually much lower. In our €600,000 example with a cadastral income of €2,000 the Italian tax is lower." },
    { d: "How much is IMU on a second home in Orta San Giulio?", r: "In 2026 the rate for other buildings, that is second homes, is 0.96% of the IMU tax base." },
  ],
};
