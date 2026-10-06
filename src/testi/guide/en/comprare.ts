import type { Guida } from "../tipi";
import { vai } from "../link";

const v = vai("en");

export const comprare: Guida = {
  titolo: "Buying a home in Italy as a foreigner: the guide for Lake Orta",
  descrizione: "Tax code, reciprocity, offer, preliminary contract and deposit, deed before a notary chosen by the buyer, first-home relief: the steps in order, with the official sources.",
  occhiello: "Main guide",
  h1: "How to buy a home in Italy, step by step",
  lead: "If you come from another EU country, you buy on Lake Orta on the same terms as an Italian; for everyone else, reciprocity decides, and it must be checked case by case. The sequence is always the same: tax code, offer, preliminary contract with a deposit, deed before a notary. Here is what the sources say, and where they stop.",
  inBreve: [
    "EU citizens buy property in Italy on the same terms as Italians. For everyone else the reciprocity condition applies (art. 16 of the preliminary provisions to the Civil Code, the preleggi): for Switzerland, the United Kingdom and the United States we have not checked it against the official source.",
    "You need an Italian tax code (codice fiscale): from abroad the consulate issues it, or a person you delegate applies for it in Italy.",
    "In the province of Novara, where Orta San Giulio lies, local custom calls for a deposit of at least 10% at the preliminary contract and leaves the buyer to choose the notary and pay for the deed, unless agreed otherwise.",
    "Buying from a private seller, you pay registration tax at 9% (2% for a first home), plus €50 + €50 of mortgage and cadastral tax; under the «price-value» rule the base is the cadastral value, not the price.",
    "First-home relief requires you to move your residence to the municipality within 18 months: it does not apply if you keep the house as a second home.",
    "Notary fees have had no fixed tariff since 2012: ask for a quote.",
  ],
  sezioni: [
    {
      id: "chi-puo-comprare",
      h2: "Who can buy",
      blocchi: [
        "The general rule is in art. 16 of the provisions on the law in general: a foreigner is admitted to civil rights «on condition of reciprocity», save for special laws[^5]. In practice, according to the specialist sources we have read, EU citizens are treated as Italians and are not subject to the check; for those from outside the EU, with no treaty and no residence permit, the notary checks reciprocity against the tables of the Ministry of Foreign Affairs[^6].",
        "**Switzerland, the United Kingdom, the United States.** On 6 October 2026 the Ministry of Foreign Affairs' official page on reciprocity answered us with an anti-bot check, which we did not bypass: we have not read it. A secondary source links Switzerland to the 1999 bilateral agreement on the free movement of persons[^7], but we have not confirmed it. Ask the notary to check your nationality against the updated tables before the offer, not at the deed.",
        "**You do not need residence to buy.** None of the sources we examined requires it. It matters only for first-home relief (below).",
      ],
    },
    {
      id: "codice-fiscale",
      h2: "Step 1: the tax code",
      blocchi: [
        "The tax code (codice fiscale) is the first document you will be asked for: for the offer, for the bank account, for the notary. If you do not live in Italy, you can apply to the Italian consular office responsible for your place of residence, or delegate someone to submit the application at an office of the Agenzia delle Entrate in Italy[^4].",
        "Consular timescales and forms vary: we saw the Ministry's page only in summary, so check your consulate's website.",
      ],
    },
    {
      id: "proposta",
      h2: "Step 2: the purchase offer",
      blocchi: [
        "You usually start with a written offer (proposta d'acquisto): the buyer offers a price, sets out the conditions (a mortgage to be obtained, a technical survey, the date of the deed) and makes it irrevocable for a period. If the seller accepts it in writing and the acceptance reaches the buyer, the contract is concluded on the written terms: so read it as carefully as the preliminary contract.",
        "Before signing, ask for the documents of the house: cadastral record and floor plan, title deed, planning status, energy performance certificate. In the deed the seller declares that the cadastral data and floor plans match the actual state of the property[^1]: if they do not, it is better to find out before the deposit.",
        { nota: "This section describes current practice in Italy; we cite no article of law because the offer has no rules of its own separate from the general rules on contracts, which we do not summarise here." },
      ],
    },
    {
      id: "compromesso",
      h2: "Step 3: preliminary contract and deposit",
      blocchi: [
        "The preliminary contract (compromesso, or contratto preliminare) binds the parties to sign the deed on the agreed terms. The buyer usually pays a confirmatory deposit (caparra confirmatoria), which the seller keeps if the buyer does not complete, and which must be returned twice over if the seller pulls out.",
        "**Custom in the province of Novara.** The provincial collection of customs of the Novara Chamber of Commerce provides, unless agreed otherwise, for a deposit of **no less than 10%** of the price at the preliminary contract[^3]. It is a custom, not a law, and the collection dates from 2005: you can agree otherwise, and you must put it in writing.",
        "For Omegna, Nonio, Quarna Sopra and Madonna del Sasso, which are in the province of Verbano-Cusio-Ossola, we have not read the VCO collection of customs.",
        "Pay by bank transfer or cheque, never in cash: the deed also states how payment was made.",
      ],
    },
    {
      id: "rogito",
      h2: "Step 4: the deed before the notary",
      blocchi: [
        "In Italy ownership passes with a public deed before a notary, the rogito. The notary verifies the identity of the parties, checks the property registers, reads the deed aloud, collects the taxes and pays them to the State, then registers the deed.",
        "**Who chooses the notary.** Under the customs of the province of Novara the costs of the contract are **borne by the buyer, who chooses the notary**[^3].",
        "**What it costs.** Notary tariffs were abolished by art. 9 of Decree-Law 1/2012: the fee is agreed and you are entitled to a quote[^8]. We do not publish a «typical» percentage because we have no official source that gives one.",
        "**If you do not speak Italian.** The deed is in Italian; if one party does not know the language, an interpreter is needed and, usually, a facing-page translation. Ask the notary when you ask for the quote.",
      ],
    },
    {
      id: "imposte",
      h2: "Step 5: purchase taxes",
      blocchi: [
        "The taxes depend on who is selling[^1]:",
        {
          lista: [
            "**From a private seller** (VAT-exempt sale): registration tax (imposta di registro) **9%**, or **2%** for a first home (excluding categories A/1, A/8, A/9), with a minimum of €1,000; mortgage and cadastral taxes **€50 + €50**[^1][^2].",
            "**From a VAT-registered company**: VAT **4%** for a first home, **10%** for other homes, **22%** for A/1, A/8, A/9; registration, mortgage and cadastral taxes fixed at **€200 each**[^1].",
          ],
        },
        "**The price-value rule (prezzo-valore).** Between private individuals, for homes and their appurtenances, the buyer can ask the notary to calculate the taxes on the cadastral value instead of the price: cadastral income (rendita catastale) × 1.05 × **120**, or × **110** for a first home. The real price must still be written in the deed; if it is concealed, the penalty ranges from 50 to 100% of the difference[^1].",
        `The bill item by item, with an example and the comparison with Switzerland, Germany and Austria, is in the guide [Purchase costs compared](${v.guida("costi")}).`,
      ],
    },
    {
      id: "prima-casa",
      h2: "First home and residence within 18 months",
      blocchi: [
        "First-home relief (registration tax at 2% instead of 9%, or VAT at 4% instead of 10%) does not require residence at the time of purchase, but if you are not already resident in the municipality you must **move your residence there within 18 months**, declaring this in the deed, or lose the relief[^1].",
        "If you buy a holiday home and remain resident abroad, then, the rate is 9% (or VAT at 10%). If you really plan to move to the lake, weigh it up with an accountant (commercialista) before the deed: the choice must be made in the deed.",
      ],
    },
    {
      id: "dopo",
      h2: "After the deed: IMU and utilities",
      blocchi: [
        "Every year you pay IMU (municipal property tax) to the municipality. In Orta San Giulio, for 2026, the rate on «other buildings», that is second homes, is **0.96%**; for a main residence in categories A/1, A/8 and A/9 it is 0.55% (resolution of 23 December 2025)[^9]. The other lake municipalities have their own resolutions, which we have not read here.",
        "TARI (the waste charge) is a municipal tariff: for Orta we have not checked it.",
        `If you plan to let the house when you are not using it, the rules are in the guide [Renting out your lake home](${v.guida("affitti")}).`,
      ],
    },
    {
      id: "noi",
      h2: "What we do, and what we do not",
      blocchi: [
        "In Italy TriesteVillas srl is a registered estate agency and on Lake Orta it **can already act as an intermediary**. Today, however, the lake's Private Collection has **0 houses**: none of these pages is a listing, and we will not show you houses we do not have.",
        "What we do not do in any case: legal or tax advice. For that you need a notary, an accountant or a lawyer of your own choosing.",
      ],
    },
  ],
  nonSappiamo: [
    "The status of reciprocity for Swiss, British and US citizens: the Ministry of Foreign Affairs' table could not be read without bypassing an anti-bot check.",
    "Whether the collection of customs of Verbano-Cusio-Ossola (Omegna, Nonio, Quarna Sopra, Madonna del Sasso) provides for the same deposit and the same commission as Novara's.",
    "A typical notary fee for a sale on the lake: there is no tariff and we have found no official source giving an average.",
    "Timescales and forms for the tax code at individual consulates.",
    "The 2026 IMU rates of the lake municipalities other than Orta San Giulio, and Orta's TARI.",
    "Whether Novara's 2005 collection of customs has been updated since.",
  ],
  faq: [
    { d: "Can a foreigner buy a home in Italy?", r: "Yes. EU citizens buy on the same terms as Italians. For everyone else the reciprocity condition of art. 16 of the preleggi applies, which the notary checks against the tables of the Ministry of Foreign Affairs. For Switzerland, the United Kingdom and the United States we have not checked it against the official source." },
    { d: "Do I need to be resident in Italy to buy?", r: "No. Residence matters only for first-home relief, which requires you to move it to the municipality within 18 months of the purchase." },
    { d: "How much deposit is paid on Lake Orta?", r: "In the province of Novara custom provides for a deposit of no less than 10% of the price at the preliminary contract, unless agreed otherwise. It is a custom collected by the Chamber of Commerce in 2005, not a legal obligation." },
    { d: "Who chooses the notary?", r: "Under the customs of the province of Novara, the buyer: the costs of the deed are borne by the buyer. The fee is agreed, because notary tariffs were abolished in 2012." },
    { d: "What taxes do I pay when buying from a private seller?", r: "Registration tax of 9% (2% for a first home), with a minimum of €1,000, plus €50 of mortgage tax and €50 of cadastral tax. Under the price-value rule the base is the cadastral value: cadastral income × 1.05 × 120 (× 110 for a first home)." },
    { d: "Can I get first-home relief if I remain resident abroad?", r: "No, unless you move your residence to the municipality within 18 months of the purchase, a commitment that must be declared in the deed." },
    { d: "Can OrtaVillas show me houses for sale on the lake?", r: "Not today: the lake's Private Collection has 0 houses. TriesteVillas srl is a registered agency and can act as an intermediary on the lake; if you join the Private Collection we will let you know when the first house comes in." },
  ],
};
