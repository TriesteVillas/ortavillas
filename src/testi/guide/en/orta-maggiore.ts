import type { Guida } from "../tipi";
import { vai } from "../link";
import { laghi, t, fq, tabellaLaghi } from "../dati";

const l = "en" as const;
const v = vai(l);
const mi = (id: string) => laghi("milano").find((r) => r.a === id)!.minuti;
const mx = (id: string) => laghi("malpensa").find((r) => r.a === id)!.minuti;

export const NOMI_LAGHI_EN: Record<string, string> = {
  stresa: "Lake Maggiore · Stresa",
  como: "Lake Como · Como",
  bellagio: "Lake Como · Bellagio",
  sirmione: "Lake Garda · Sirmione",
  "orta-san-giulio": "Lake Orta · Orta San Giulio",
};

export const ortaMaggiore: Guida = {
  titolo: "Lake Orta or Lake Maggiore? Travel times, size, water and prices",
  descrizione: "Orta or Maggiore: travel times from Milan and Malpensa to Stresa, Como, Bellagio, Sirmione and Orta, the size of the two lakes, water quality, the closed Mottarone cable car, and which prices we really have.",
  occhiello: "Guide",
  h1: "Orta or Maggiore: two lakes, one mountain in between",
  lead: "The Mottarone separates Lake Orta from Lake Maggiore: from Orta to Stresa is a few kilometres as the crow flies. But the two lakes are on different scales, and an honest comparison must also say which numbers are missing.",
  inBreve: [
    `From Milan, without traffic, Orta San Giulio is ${t(mi("orta-san-giulio"), l)} away, Stresa ${t(mi("stresa"), l)}, Como ${t(mi("como"), l)}, Bellagio ${t(mi("bellagio"), l)}. From Malpensa Orta is ${t(mx("orta-san-giulio"), l)} away, Stresa ${t(mx("stresa"), l)}.`,
    "Lake Orta has a surface area of 18 km² and a maximum depth of 143 m; Lake Maggiore 212 km² and 370 m. The volume of Lake Maggiore is about thirty times that of Lake Orta.",
    "In 2024, of Lake Orta's 16 bathing points, 10 were rated «excellent», 4 «good» and 2 «sufficient» (data reported to the EU).",
    "The Stresa–Mottarone cable car, out of service since the accident of 23 May 2021, was still closed in May 2026.",
    "For Lake Maggiore's prices we have not extracted the OMI values: we do not publish a price comparison with Lake Orta today.",
  ],
  sezioni: [
    {
      id: "tempi",
      h2: "From Milan and from Malpensa",
      blocchi: [
        "Driving times measured with OSRM on 6 October 2026, in free-flowing traffic: no queues on the ring road, no roadworks, no stops[^1]. They are a minimum, not a promise. Starting points: Piazza del Duomo in Milan and Malpensa Terminal 1; destinations: the centre of each town.",
        { tabella: tabellaLaghi(l, ["Lake and town", "From Milan", "km", "From Malpensa", "km"], NOMI_LAGHI_EN) },
        `Orta and Stresa are almost level from Milan (${t(mi("orta-san-giulio"), l)} against ${t(mi("stresa"), l)}): the two routes share the A8 and the branch towards Gattico, then part on the A26. From Malpensa Stresa is two minutes closer. Como, from Milan, is the closest of all; Bellagio and Sirmione are further than Orta.`,
        `All the times to the sixteen places on Lake Orta, from eleven cities, are in the section [Distances](${v.distanze()}).`,
      ],
    },
    {
      id: "dimensioni",
      h2: "Two different scales",
      blocchi: [
        {
          tabella: {
            testa: ["", "Lake Orta", "Lake Maggiore"],
            num: [1, 2],
            righe: [
              ["Surface area", "18 km²", "212 km²"],
              ["Maximum depth", "143 m", "370 m"],
              ["Volume", "1.3 km³", "37.5 km³"],
            ],
            didascalia: "Orta: Regione Piemonte, Water Protection Plan, monograph L3 (2007). Maggiore: Mosello and Lami, CNR (2011).",
          },
        },
        "Lake Orta is 12.55 km long and at most 1.85 km wide[^2]: from almost every house on the shore you can see the one opposite. Lake Maggiore is Italy's second-largest lake by surface area[^3].",
        "Lake Orta also has a hydrographic peculiarity: its outflow leaves from the northern end, a unique case among the Italian subalpine lakes according to the CNR[^11]. Its waters still reach Lake Maggiore, through the Strona and the Toce.",
      ],
    },
    {
      id: "acque",
      h2: "The water: bathing and the state of the lake",
      blocchi: [
        "**Bathing.** Lake Orta has 16 official monitoring points. In the 2024 season, the latest classified in the data reported to the European Environment Agency, **10** were rated excellent, **4** good and **2** sufficient; the two sufficient ones are beaches in Omegna, at the northern end (Bagnella and the sports centre lido)[^4].",
        "**State of the lake.** For 2020–2022 ARPA Piemonte classified Lake Orta's ecological status as «good», one of only two Piedmont lakes in that class, while its chemical status was «not good» because the annual average for PFOS was exceeded[^5]. For 2023–2025 the classification was still being assessed in July 2026[^6].",
        "The result weighs more when you remember the history: for decades industrial discharges had made Lake Orta an acidic lake, restored with a limestone treatment between 1989 and 1990[^11].",
        "**Lake Maggiore.** We have not extracted the bathing classes of Lake Maggiore's points for this edition: this is why we do not write which of the two lakes is «cleaner».",
      ],
    },
    {
      id: "mottarone",
      h2: "The Mottarone and the closed cable car",
      blocchi: [
        "The Mottarone, 1,491 m at the top cable car station[^8], is the mountain between the two lakes. The Stresa–Alpino–Mottarone cable car has been out of service since the accident of **23 May 2021**, in which 14 people died. In November 2023 the Ministry of Tourism, the Region and the Municipality of Stresa signed a €15 million agreement for a new system, with reopening planned for summer 2025[^9].",
        "That date has passed: on the fifth anniversary, 23 May 2026, the cable car was still out of service[^7], and the Stresa tourist office states that it is closed, without giving a reopening date[^8]. Whether work is under way in October 2026 we have not been able to check.",
      ],
    },
    {
      id: "prezzi",
      h2: "Prices: what we have, and what we do not",
      blocchi: [
        `For Lake Orta we have the OMI values of thirteen municipalities, zone by zone[^10]. The highest is the Orta San Giulio lakefront with the island: standard homes ${fq("orta-san-giulio", "B2", "civili", l)}, villas ${fq("orta-san-giulio", "B2", "ville", l)} (2nd half of 2025). The full picture is in the guide [Lake Orta property prices](${v.guida("quotazioni")}).`,
        "For Lake Maggiore (Stresa, Baveno, Verbania, Arona, the Lombard shore) **we have not extracted the values**: a price comparison between the two lakes would require the same extraction, with the same half-year and the same types. Until we have done it, we do not write that Lake Orta costs less or more than Lake Maggiore.",
        "The same goes for the summer crowds: we have no comparable figure for tourist numbers on the two lakes, and we do not replace it with an impression.",
      ],
    },
    {
      id: "scegliere",
      h2: "How to choose",
      blocchi: [
        { h3: "Lake Orta suits you if…" },
        {
          lista: [
            "you want a small lake, where the opposite shore is part of the view from home;",
            `being ${t(mi("orta-san-giulio"), l)} from Milan and ${t(mx("orta-san-giulio"), l)} from Malpensa, without traffic, is enough for you;`,
            "you are looking for a lake with «good» ecological status and mostly excellent bathing water, knowing about the PFOS.",
          ],
        },
        { h3: "Lake Maggiore suits you if…" },
        {
          lista: [
            "you want a large lake, with wide horizons;",
            "you need more services and more lake connections than Lake Orta offers (which we have not measured here);",
            "you accept that this guide's figures on Lake Maggiore are less complete.",
          ],
        },
      ],
    },
  ],
  nonSappiamo: [
    "The OMI values of the Lake Maggiore municipalities, extracted with the same method as Lake Orta's.",
    "The 2024 bathing classes of Lake Maggiore's points.",
    "A comparable figure for summer tourist numbers on the two lakes.",
    "The state of work on the new Mottarone cable car in October 2026 and the reopening date.",
    "ARPA's 2023–2025 classification of Lake Orta's ecological and chemical status.",
    "Real times at rush hour: ours are in free-flowing traffic.",
  ],
  faq: [
    { d: "Is Lake Orta or Lake Maggiore closer to Milan?", r: `Almost the same: without traffic Orta San Giulio is ${t(mi("orta-san-giulio"), l)} from Piazza del Duomo, Stresa ${t(mi("stresa"), l)}. From Malpensa Stresa is ${t(mx("stresa"), l)} away, Orta ${t(mx("orta-san-giulio"), l)}.` },
    { d: "How big is Lake Orta compared with Lake Maggiore?", r: "18 km² against 212 km² of surface area, 143 m against 370 m of maximum depth, 1.3 against 37.5 km³ of volume." },
    { d: "Can you swim in Lake Orta?", r: "Yes, at the authorised bathing points. In 2024, of the 16 official points, 10 were rated excellent, 4 good and 2 sufficient." },
    { d: "Is the Mottarone cable car open?", r: "No. It has been out of service since 23 May 2021; in May 2026 it was still closed and the Stresa tourist office gives no reopening date." },
    { d: "Are houses cheaper on Lake Orta than on Lake Maggiore?", r: "We cannot say with comparable data: we have Lake Orta's OMI values, not Lake Maggiore's extracted with the same method." },
  ],
};
