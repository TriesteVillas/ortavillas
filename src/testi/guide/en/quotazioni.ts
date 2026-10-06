import type { Guida } from "../tipi";
import { vai } from "../link";
import { n, pct, fq, q, ntn, tabellaOmi } from "../dati";

const l = "en" as const;
const v = vai(l);
const no = ntn("NO"), vb = ntn("VB");
const ortaB2 = q("orta-san-giulio", "B2", "ville")!;

export const quotazioni: Guida = {
  titolo: "House prices on Lake Orta: OMI values municipality by municipality",
  descrizione: "The OMI values of the 13 Lake Orta municipalities, zone by zone, 2nd half of 2025 against 2nd half of 2024: how to read them, why they are not sale prices and why Italy has no public medians of sales.",
  occhiello: "Guide",
  h1: "Lake prices: what the OMI values say, and what they do not",
  lead: "In Italy there is no public register showing what each house sold for. The closest open data are the values of the Property Market Observatory (OMI): ranges estimated by zone, not prices. Here are all those for Lake Orta, and how not to misread them.",
  inBreve: [
    `The most highly valued zone on the lake is the Orta San Giulio lakefront with the island: villas and detached houses ${fq("orta-san-giulio", "B2", "ville", l)}, standard homes ${fq("orta-san-giulio", "B2", "civili", l)} (2nd half of 2025).`,
    "OMI values are ranges in €/m² of gross floor area, estimated by the Agenzia delle Entrate by zone and type in the prevailing state of repair. They are not averages of deeds.",
    `Between the 2nd half of 2024 and the 2nd half of 2025 OMI raised all the values for standard homes on the lake; villas stayed flat only in the four VCO municipalities. Villas on the Orta lakefront: +${pct(ortaB2.varPct!, l)} at the midpoint of the range.`,
    "The prices declared in deeds exist, but can only be consulted with a digital identity, one at a time, with no open licence: no publishable medians.",
    `Home sales in the non-capital municipalities of the province of Novara: ${n(no.a2024, l)} in 2024, ${n(no.a2025, l)} in 2025 (provisional, ${pct(no.varPct, l)}). That is the whole province, not the lake.`,
  ],
  sezioni: [
    {
      id: "che-cosa-sono",
      h2: "What OMI values are",
      blocchi: [
        "Every half-year the Agenzia delle Entrate's Property Market Observatory (OMI) divides each municipality into homogeneous zones and, for each zone and type (standard homes, economy homes, upmarket homes, villas and detached houses), publishes a minimum and a maximum value in euros per square metre[^1]. It does so on the basis of deeds, asking prices and its own surveys.",
        "Three things to know before using them:",
        {
          lista: [
            "**They are estimates, not prices.** They are neither the average nor the median of sales: they are a range within which the Agenzia places the normal values for the zone. The Agenzia itself warns that they do not replace the valuation of a specific property.",
            "**Gross floor area.** All the values for the lake refer to gross (commercial) floor area, walls included.",
            "**Normal state.** On the lake only the prevailing state of repair, «normal», is valued. A villa renovated as new on the lakefront can fall outside the range, above; one needing work, below.",
          ],
        },
        "When a type is missing in a zone, it means OMI does not value it because the market is not significant: not that it is worth zero.",
      ],
    },
    {
      id: "tabella",
      h2: "All the lake's zones, 2025 against 2024",
      blocchi: [
        "Thirteen municipalities, all zones with at least one value for standard homes or villas and detached houses. The change is calculated by us at the midpoint of the range: it measures how far OMI moved its estimate, not how sales went[^1].",
        { tabella: tabellaOmi(l, ["Municipality", "OMI zone", "Type", "2nd half 2025 €/m²", "2nd half 2024 €/m²", "Change"], { "Abitazioni civili": "Standard homes", "Ville e Villini": "Villas and detached houses" }, "—") },
        "Extracted from the public consultation service on 6 October 2026; licence CC BY 4.0, «Agenzia delle Entrate – OMI». The zones are described by the Agenzia in words: the boundaries can only be downloaded from the restricted area[^2]. Legro is in Orta's zone C1 (which names it), Ronco in Pella's E1; for Vacciago no Ameno zone names it.",
      ],
    },
    {
      id: "leggere",
      h2: "How to read them without mistakes",
      blocchi: [
        {
          lista: [
            "**Multiplying is not enough.** 200 m² times the maximum for the Orta lakefront gives a number, not a price: view, lake access, boathouse, garden and the state of the systems move the value more than any coefficient.",
            "**Gross against net.** A listing that says «180 m²» may mean net floor area: compare it with a gross OMI value and the price per square metre will look higher than it is.",
            "**Broad zones.** A «peripheral» or «hillside» zone groups very different houses. On the lake the difference between the first and second row can be worth more than moving from one zone to another.",
            "**The lag.** The 2nd half of 2025 is the latest published as of 6 October 2026: it looks back almost a year.",
          ],
        },
        `To estimate how many square metres a budget buys, municipality by municipality, there is the tool [What your budget buys](${v.strumento("budget")}); for the range of a specific house, [What is my home worth](${v.strumento("valore")}).`,
      ],
    },
    {
      id: "vendite-vere",
      h2: "Why Italy has no public medians of sales",
      blocchi: [
        "In Slovenia the public register of sales shows the price of almost every deed and can be downloaded freely: on SloveniaVillas we derive medians from it. In Italy the closest equivalent is the Agenzia delle Entrate's **«Consultazione valori immobiliari dichiarati»** (declared property values) service[^3], and it works differently:",
        {
          lista: [
            "it requires authentication with SPID, CIE or CNS (or Fisconline/Entratel credentials);",
            "it shows the deeds of the last five years one at a time, on a map;",
            "it offers no bulk download and states no open licence on the page.",
          ],
        },
        "Deriving medians from it would require manual collection and a check of the terms of use. We do not use credentials on anyone's behalf: this is why, today, we do not publish sale prices for the lake.",
        "The number of sales for each municipality (municipal NTN) can also be downloaded free of charge and under an open licence, but only from the restricted area of the OMI data supplies[^2]. Anyone with a digital identity can do it themselves.",
        "Finally there is the cadastral value, which is used for taxes: under the price-value rule (prezzo-valore) registration tax is paid on it and not on the price[^5]. It is a fiscal value, very far from the market, and must not be used to value a house.",
      ],
    },
    {
      id: "volumi",
      h2: "How many houses sell: provincial volumes",
      blocchi: [
        "For context, the Agenzia publishes in open form the number of normalised transactions (NTN) of homes, but only for the provincial capital and for all the other municipalities of each province combined[^4]. Lake Orta lies across two provinces: Novara (Orta, Pettenasco, Pella, San Maurizio d'Opaglio, the hills and the southern end) and Verbano-Cusio-Ossola (Omegna, Nonio, Quarna Sopra, Madonna del Sasso).",
        {
          tabella: {
            testa: ["Non-capital municipalities", "2023", "2024", "2025 (prov.)", "1st half 2026 (prov.)", "2025 on 2024"],
            num: [1, 2, 3, 4, 5],
            righe: [
              ["Province of Novara", n(no.a2023, l), n(no.a2024, l), n(no.a2025, l), n(no.s2026, l), `+${pct(no.varPct, l)}`],
              ["Province of VCO", n(vb.a2023, l), n(vb.a2024, l), n(vb.a2025, l), n(vb.s2026, l), `+${pct(vb.varPct, l)}`],
            ],
            didascalia: "Agenzia delle Entrate – OMI, sales volumes (RES.csv). NTN = normalised transactions, that is ownership shares added together. 2025 and 2026 are provisional.",
          },
        },
        "These are dozens of municipalities, almost all far from the lake: they say the provincial market has moved, not how many houses were sold on the shores.",
      ],
    },
  ],
  nonSappiamo: [
    "The prices actually paid in deeds on the lake: the declared values service requires a digital identity and has no declared open licence.",
    "The number of sales for each lake municipality (municipal NTN), downloadable only from the restricted area.",
    "The boundaries of the OMI zones: we know them only from their description in words.",
    "How the values moved in the 1st half of 2026, not yet published as of 6 October 2026.",
    "The typical gap between asking prices in listings and OMI values on the lake: we have not measured it.",
  ],
  faq: [
    { d: "Are OMI values the prices houses sell for?", r: "No. They are ranges in €/m² of gross floor area, estimated by the Agenzia delle Entrate by homogeneous zone and type, in the prevailing state of repair. They are neither averages nor medians of deeds." },
    { d: "How much does a house on Lake Orta cost per square metre?", r: `It depends on municipality and zone. In the 2nd half of 2025 the highest value is the Orta San Giulio lakefront with the island: villas ${fq("orta-san-giulio", "B2", "ville", l)}. On the Pella lakefront villas are valued at ${fq("pella", "B2", "ville", l)}.` },
    { d: "Can I find out what a specific house sold for?", r: "The Agenzia delle Entrate's «Consultazione valori immobiliari dichiarati» service shows the prices of deeds from the last five years, one at a time, to anyone who logs in with SPID, CIE or CNS. It is not open data." },
    { d: "Why does OrtaVillas not publish medians of sales like SloveniaVillas?", r: "Because in Italy deed prices cannot be downloaded in open form: they are consulted one at a time with a digital identity, without a declared licence. We do not use credentials on anyone's behalf." },
    { d: "Have values on the lake gone up?", r: "Between the 2nd half of 2024 and the 2nd half of 2025 OMI raised all the values for standard homes on the lake, by a few percentage points at the midpoint of the range; villas stayed flat in Omegna, Nonio, Quarna Sopra and Madonna del Sasso. It is the movement of the estimate, not of sales." },
  ],
};
