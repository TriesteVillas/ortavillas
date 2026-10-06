import type { Guida } from "../tipi";
import { vai } from "../link";

const v = vai("en");

export const affitti: Guida = {
  titolo: "Letting your house on Lake Orta: CIR, CIN, flat-rate tax, Piedmont rules",
  descrizione: "Holiday lets on Lake Orta: notice to the municipality and an 11-digit CIR within 10 days, the national CIN from 2025, penalties, flat-rate tax at 21% and 26%, the two-flat threshold from 2026.",
  occhiello: "Guide",
  h1: "Letting your house on the lake: the rules, in the order you need them",
  lead: "If you let a house on Lake Orta to tourists, for periods of up to 30 days, you must make two registrations, one regional and one national, display two codes and choose how to pay the taxes. Here are the rules as read in the sources, and where the sources are second-hand.",
  inBreve: [
    "In Piedmont a holiday let of up to 30 consecutive days must be notified to the municipality within 10 days of the first let: the municipality assigns an 11-digit CIR. No change of use is needed.",
    "The CIR must be published in every listing, online and in print: failing to do so risks €500 to €5,000, doubled for repeat offences.",
    "Since 1 January 2025 you also need the national CIN, from the Ministry of Tourism's database; the penalties reported by the specialist press range from €800 to €8,000 for failing to apply for it.",
    "Flat-rate tax (cedolare secca) on short lets: 21% on one property of your choice, 26% on the others. From 2026 the regime applies to up to 2 flats; beyond that, the activity is presumed to be a business (secondary sources).",
    "We have not found Orta San Giulio's tourist tax: neither a resolution nor rates.",
  ],
  sezioni: [
    {
      id: "che-cosa",
      h2: "What a holiday let is in Piedmont",
      blocchi: [
        "The framework is regional law no. 13 of 3 August 2017 and its implementing regulation, Regional Decree (D.P.G.R.) no. 4/R of 8 June 2018, whose art. 14 governs those who let for tourist purposes for consecutive periods **of up to 30 days**[^1]. It is not an accommodation business: neither a change of use nor the requirements of a hotel or a B&B are needed.",
        "Accommodation businesses (hotels, guest rooms, holiday homes run as a business) follow other rules and have a CIR in a different format, for example 001272-ALB-00282[^2]. Here we deal only with a private house let to tourists.",
        { nota: "A 2023 ruling of the Piedmont Regional Administrative Court (TAR) reportedly annulled some provisions of the regulation: we saw it only cited in a search and do not know which articles it affects. Ask the municipality which version it applies." },
      ],
    },
    {
      id: "cir",
      h2: "Step 1: notice to the municipality and the CIR",
      blocchi: [
        "**Within 10 days of the first let** you send the municipality the form in annex H of the regulation[^1]. The municipality assigns the **CIR**, the regional identification code, of **11 digits**: 6 for the municipality's ISTAT code and 5 sequential.",
        "The CIR must also be shown on booking portals. Since regional law no. 3 of 9 March 2023 (art. 124) the obligation applies to **every promotional communication, online and in print**; the penalty is **€500 to €5,000**, doubled for repeat offences[^2].",
        `The lake lies across two provinces (Novara and Verbano-Cusio-Ossola), but the region is one: the CIR rule is the same in [Orta San Giulio](${v.luogo("orta-san-giulio")}) and in [Omegna](${v.luogo("omegna")}). What changes is the municipal office you write to.`,
      ],
    },
    {
      id: "cin",
      h2: "Step 2: the national CIN",
      blocchi: [
        "Since **1 January 2025** every unit let for tourist purposes must also have the **CIN**, the national identification code (art. 13-ter of Decree-Law 145/2023), which you apply for from the Ministry of Tourism's database of accommodation facilities[^3].",
        "According to the specialist press the penalties are **€800 to €8,000** for failing to apply for it and **€500 to €5,000** for failing to display it[^3]. We have not read the text of the law directly: take these figures as indicative.",
      ],
    },
    {
      id: "ospiti",
      h2: "Step 3: the guests",
      blocchi: [
        "Hosts must report their guests' details to the police headquarters (Questura) through the Polizia di Stato's Alloggiati Web portal, under art. 109 of the consolidated public security law; specialist sources indicate 24 hours from arrival, 6 for shorter stays[^6].",
        "We have read this rule only in a secondary source, in summary: check timescales and procedures with the relevant Questura before your first guest.",
      ],
    },
    {
      id: "imposte",
      h2: "Taxes: flat-rate tax and the two-flat threshold",
      blocchi: [
        "On short lets (up to 30 days) an owner who is a private individual can choose the **flat-rate tax (cedolare secca)**: **21%** on the rent of a single property, of their choice, and **26%** on the others[^4][^5].",
        "**From 2026** the budget law (Law no. 199 of 30 December 2025, art. 1 para. 17) applies the short-let regime only to those who let **no more than 2 flats** in the tax period: beyond that, the activity is presumed to be a business[^4][^5]. What the threshold was before, we have not checked.",
        "If the let goes through a portal or an intermediary that collects the rent, it withholds **21%** as an advance payment[^4].",
        { nota: "This whole section comes from secondary sources (tax journals, May 2026): the Agenzia delle Entrate's guide and the text on Normattiva did not load when we looked for them. A proposal from autumn 2025 that reserved the 21% rate for those not using platforms did not make it into the final text, according to the same sources." },
        "If you are resident abroad, how these taxes interact with those of your own country depends on double taxation treaties: it is a matter for an accountant, and we do not summarise it here.",
      ],
    },
    {
      id: "soggiorno",
      h2: "Tourist tax",
      blocchi: [
        "Some municipalities charge guests a tourist tax (imposta di soggiorno), which the owner collects and pays over. For **Orta San Giulio** we have found neither the resolution nor the rates, either on the municipality's website or on the Ministry of Economy's portal: we cannot say whether it applies or how much it is. The same goes for the other lake municipalities.",
      ],
    },
    {
      id: "conti",
      h2: "Before you do the sums",
      blocchi: [
        "A return calculated by multiplying a nightly rate by 365 nights is fiction: the lake has a season, and empty nights appear in no rate. We do not publish yields because we have no reliable occupancy data for the lake.",
        `If you are still choosing where to buy, the times from Milan, Malpensa and Switzerland are in the guide [Getting here](${v.guida("arrivare")}); the purchase taxes in [Purchase costs compared](${v.guida("costi")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Which articles of regulation 4/R were annulled by the Piedmont TAR in 2023, if any were.",
    "The text of art. 13-ter of Decree-Law 145/2023 and of the CIN penalties, read in the primary source.",
    "The Agenzia delle Entrate's 2026 guide on short lets, read directly, and the threshold in force before 2026.",
    "Timescales and procedures for reporting guests, read in the Polizia di Stato's own source.",
    "Whether Orta San Giulio and the other lake municipalities apply a tourist tax, and at what rates.",
    "Occupancy data and average rates for houses let on the lake.",
  ],
  faq: [
    { d: "What is the CIR in Piedmont?", r: "The regional identification code that the municipality assigns to anyone who notifies a holiday let: 11 digits, 6 for the municipality's ISTAT code and 5 sequential. It must be published in every listing." },
    { d: "By when must a holiday let be notified to the municipality?", r: "Within 10 days of the first let, using the form in annex H of regional regulation 4/R of 2018." },
    { d: "Do I also need the CIN?", r: "Yes, since 1 January 2025: it is the national code you apply for from the Ministry of Tourism's database of accommodation facilities, in addition to the regional CIR." },
    { d: "How much flat-rate tax is paid on short lets?", r: "21% on one property chosen by the owner, 26% on the others. From 2026 the short-let regime applies to up to 2 flats; beyond that, the activity is presumed to be a business. These figures were read in secondary tax sources." },
    { d: "Is there a tourist tax in Orta San Giulio?", r: "We do not know: we have found neither the resolution nor the rates. Ask the municipality." },
  ],
};
