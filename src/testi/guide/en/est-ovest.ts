import type { Guida } from "../tipi";
import { vai } from "../link";
import { L, n, t, ora, pct, fq, tabellaSole, tabellaServizi } from "../dati";

const l = "en" as const;
const v = vai(l);
const orta = L("orta-san-giulio"), pet = L("pettenasco"), pella = L("pella"), ronco = L("ronco"), smo = L("san-maurizio-dopaglio"), mds = L("madonna-del-sasso"), legro = L("legro");
const s = (x: typeof orta) => x.soleDic!;

export const estOvest: Guida = {
  titolo: "Lake Orta, east shore or west shore? Sun, trains, roads, prices",
  descrizione: "East or west shore of Lake Orta: minutes of sunshine on 21 December, railway, roads, ferries, OMI values, ISPRA risks and services, municipality by municipality.",
  occhiello: "Guide",
  h1: "East shore or west shore: two banks facing each other",
  lead: "From Orta to Pella is a few minutes by boat, but the two shores live on different timetables. The east has the railway, the old town and the higher values; the west has the morning sun and the view of the island. Here are the numbers that set them apart, and where numbers are not enough.",
  inBreve: [
    `On 21 December Orta San Giulio has ${s(orta).minuti} minutes of direct sunshine (from ${ora(s(orta).primo, l)} to ${ora(s(orta).ultimo, l)}), Pella ${s(pella).minuti} (from ${ora(s(pella).primo, l)} to ${ora(s(pella).ultimo, l)}): almost the same total, at times forty minutes apart.`,
    `The extreme case is Ronco, on the west shore: last sun at ${ora(s(ronco).ultimo, l)}, ${s(ronco).minuti} minutes in all.`,
    "The Novara–Domodossola railway runs only along the east shore (Orta-Miasino and Pettenasco stations); on the west there are ferries and the provincial road.",
    `Lakefront OMI values, villas and detached houses: Orta ${fq("orta-san-giulio", "B2", "ville", l)}, Pella ${fq("pella", "B2", "ville", l)}, Pettenasco ${fq("pettenasco", "B2", "ville", l)} (2nd half of 2025).`,
    `Landslide and flood risk (ISPRA, % of the municipality's population): the highest value across the two shores is Pettenasco, ${pct(pet.frane!, l)} and ${pct(pet.alluvioni!, l)}.`,
  ],
  sezioni: [
    {
      id: "due-rive",
      h2: "Two shores, one narrow lake",
      blocchi: [
        "The lake is narrow: from one shore you can see the other clearly. We call the **east shore** Orta San Giulio, its hamlet Legro and Pettenasco; the **west shore** Pella, its hamlet Ronco, San Maurizio d'Opaglio and, on the ridge, Madonna del Sasso. The boundaries are indicative and drawn by us.",
        `The east shore faces west: lake and sunset in front, the Mottarone behind. The west shore faces east: sunrise over the lake and a view of Orta and San Giulio island, but the ridge behind the houses brings sunset forward. The villages on the Mottarone hills (Ameno, Vacciago, Miasino, Armeno) sit above the east shore and have their own pages among the places, for example [Ameno](${v.luogo("ameno")}).`,
      ],
    },
    {
      id: "sole",
      h2: "The sun on 21 December",
      blocchi: [
        `We calculated the horizon of each place from the terrain model, every 2° of azimuth up to 15 km, and the position of the sun with the NOAA formulas[^2]. The result is the sun the terrain allows, without houses, trees or clouds: a maximum, not a promise. With a flat horizon, 21 December would have ${s(orta).teorici} minutes of sun.`,
        {
          tabella: tabellaSole(l, ["Place", "Shore", "Altitude", "Minutes of sun", "First sun", "Last sun"], { est: "east", ovest: "west" }),
        },
        `The total changes little; the time changes. On the east the sun arrives late (in Orta at ${ora(s(orta).primo, l)}, in Pettenasco at ${ora(s(pet).primo, l)}) because the slopes of the Mottarone hide it, and it stays until mid-afternoon. On the west it arrives around half past eight and leaves earlier: in Pella at ${ora(s(pella).ultimo, l)}, in Ronco at ${ora(s(ronco).ultimo, l)}. Legro, high above Orta, gains a quarter of an hour in the evening (${ora(s(legro).ultimo, l)}).`,
        "On 21 June, with the same calculation, Pella has 822 minutes of sun, Orta 792, Ronco 717: in summer Ronco's ridge still weighs.",
      ],
    },
    {
      id: "spostarsi",
      h2: "Train, roads and ferries",
      blocchi: [
        "**The train is only on the east.** The Novara–Domodossola line, single-track, has stations on the lake at Gozzano, Bolzano Novarese, Orta-Miasino, Pettenasco and Omegna[^6]. On 7 October 2026 the Trenitalia journey planner gave **8 direct trains** from Orta-Miasino to Novara, with a gap between 8:04 and 13:51; for Milan you always have to change at Novara[^7].",
        `**The roads.** The east shore is served by the SS229 Lago d'Orta state road, the same one you take when leaving the A26 motorway: from Milan, without traffic, Orta is ${t(orta.daMilano, l)} away. The west shore is served by the SP46 provincial road and is reached by going round the end of the lake: Pella is ${t(pella.daMilano, l)} away, Ronco ${t(ronco.daMilano, l)}[^1].`,
        "**The ferries** are the only direct link between the two shores. Navigazione Lago d'Orta, a public scheduled service, runs from March to October[^11]; from 4 to 31 October 2026 the «Linea Rossa» runs every 35–45 minutes between Orta, the island, Pella, San Filiberto and Lagna[^5]. From November to February no scheduled service is recorded.",
      ],
    },
    {
      id: "prezzi",
      h2: "OMI values on the two shores",
      blocchi: [
        "The Agenzia delle Entrate's Property Market Observatory (OMI) publishes ranges in €/m² by zone and type: they are estimates, not sale prices[^3]. Here are the lakeside zones and the most expensive zone of each municipality, 2nd half of 2025:",
        {
          tabella: {
            testa: ["Municipality", "OMI zone", "Standard homes", "Villas and detached houses"],
            righe: [
              ["Orta San Giulio", "B2 · Lakefront, island", fq("orta-san-giulio", "B2", "civili", l), fq("orta-san-giulio", "B2", "ville", l)],
              ["Orta San Giulio", "C1 · Hillside belt and Legro", fq("orta-san-giulio", "C1", "civili", l), fq("orta-san-giulio", "C1", "ville", l)],
              ["Pettenasco", "B2 · Lakefront", fq("pettenasco", "B2", "civili", l), fq("pettenasco", "B2", "ville", l)],
              ["Pella", "B2 · Lakefront", fq("pella", "B2", "civili", l), fq("pella", "B2", "ville", l)],
              ["Pella", "E1 · Ronco", fq("pella", "E1", "civili", l), fq("pella", "E1", "ville", l)],
              ["San Maurizio d'Opaglio", "C1 · Semi-central", fq("san-maurizio-dopaglio", "C1", "civili", l), fq("san-maurizio-dopaglio", "C1", "ville", l)],
              ["Madonna del Sasso", "B1 · Built-up centre", fq("madonna-del-sasso", "B1", "civili", l), fq("madonna-del-sasso", "B1", "ville", l)],
            ],
            didascalia: "Agenzia delle Entrate – OMI, normal state of repair, gross floor area. «—» = type not valued in that zone.",
          },
        },
        `The Orta lakefront, with the island, is the most highly valued zone on the whole lake. Pella and Pettenasco on the lakefront are a step below and almost level with each other. All the zones, with the comparison against 2024, are in the guide [Lake Orta property prices](${v.guida("quotazioni")}).`,
      ],
    },
    {
      id: "rischi-servizi",
      h2: "Risks and services, municipality by municipality",
      blocchi: [
        "ISPRA publishes, for each municipality, the share of the population living in areas of high or very high landslide hazard (P3–P4) and in areas of medium flood hazard (P2)[^4]. They are percentages for the whole municipality: they say nothing about a specific house, which must be checked on the maps of the hydrogeological plan.",
        { tabella: tabellaServizi(l, ["Place", "From Milan", "Nearest station (as the crow flies)", "Landslides P3–P4", "Floods P2", "State schools"], "—") },
        `Pettenasco has the highest values on the two shores (${pct(pet.frane!, l)} of the population in P3–P4 landslide areas, ${pct(pet.alluvioni!, l)} in P2 flood areas); Pella follows with ${pct(pella.frane!, l)} and ${pct(pella.alluvioni!, l)}. Madonna del Sasso, on the ridge, has zero on both. The schools are the state schools in the Ministry's 2026/27 register[^8]: private schools are not included. Legro and Ronco are hamlets: their municipalities' data apply.`,
        "**Hospitals.** The nearest A&E for both shores, among the sources read, is the SS. Trinità hospital in Borgomanero, a level I emergency department with 250 beds[^9], south of the lake. In Omegna there is a first-aid point (Punto di Primo Intervento), not an A&E, with reduced hours[^10]. We have not measured the time from the houses to the hospital.",
      ],
    },
    {
      id: "per-chi",
      h2: "Who each shore suits",
      blocchi: [
        { h3: "Choose the east shore if…" },
        {
          lista: [
            "you want to arrive by train, or have a train to Novara a few minutes' walk away;",
            "you want the old town of Orta, the main landing stage and services within walking distance;",
            "you prefer afternoon sun and sunset over the water, and accept a later sunrise in winter;",
            "your budget can stand the highest values on the lake.",
          ],
        },
        { h3: "Choose the west shore if…" },
        {
          lista: [
            "you want the view of Orta and the island, and the morning sun;",
            "a car or the seasonal ferry is enough for you, without a railway;",
            `you are looking for values a step lower for the same outlook, or the balcony of Madonna del Sasso, at ${n(mds.quota, l)} m;`,
            `you know that in winter the sun leaves early: in Ronco at ${ora(s(ronco).ultimo, l)}.`,
          ],
        },
        `San Maurizio d'Opaglio, the largest municipality on the west shore (${n(smo.abitanti ?? 0, l)} inhabitants), lies ${n(smo.riva, l)} m from the water and has the longest winter day on the two shores: ${s(smo).minuti} minutes.`,
      ],
    },
  ],
  nonSappiamo: [
    "The real sunshine of a specific house: our calculation excludes buildings, trees and clouds and uses a terrain model of about 27 m.",
    "Differences in temperature, fog and wind between the two shores: we have found no published weather station for each shore.",
    "The real time from the houses to the Borgomanero A&E, and the ordinary opening hours of the Omegna first-aid point.",
    "Whether, in winter, when the scheduled ferry is not running, there are private links between the shores.",
    "Sales by municipality (municipal NTN): they can only be downloaded with a digital identity and we do not have them.",
  ],
  faq: [
    { d: "On Lake Orta, is the east or the west shore sunnier?", r: `On 21 December the total is similar: Orta San Giulio ${s(orta).minuti} minutes of direct sunshine, Pella ${s(pella).minuti}. The timing changes: on the east the sun arrives at around a quarter past nine and stays until a quarter to four, on the west it arrives at around half past eight and leaves earlier. Ronco, on the west, loses the sun at ${ora(s(ronco).ultimo, l)}.` },
    { d: "Does the train reach both shores?", r: "No, only the east shore: Orta-Miasino and Pettenasco stations on the Novara–Domodossola line. For Milan you have to change at Novara." },
    { d: "Where are houses most expensive on Lake Orta?", r: `Among the OMI values the most expensive zone is the Orta San Giulio lakefront with the island: standard homes ${fq("orta-san-giulio", "B2", "civili", l)}, villas ${fq("orta-san-giulio", "B2", "ville", l)} in the 2nd half of 2025. They are estimates by zone, not sale prices.` },
    { d: "How do you get from one shore to the other?", r: "By scheduled ferry from March to October, or by car round the end of the lake. From November to February no scheduled service is recorded." },
    { d: "Which shore has less landslide risk?", r: `Among the municipalities on the two shores, according to ISPRA, Madonna del Sasso has zero population in P3–P4 landslide areas, San Maurizio d'Opaglio ${pct(smo.frane!, l)}, Orta ${pct(orta.frane!, l)}, Pella ${pct(pella.frane!, l)}, Pettenasco ${pct(pet.frane!, l)}. It is a municipal figure: for a house, the maps of the hydrogeological plan are what count.` },
  ],
};
