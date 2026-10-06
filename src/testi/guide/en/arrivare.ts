import type { Guida } from "../tipi";
import { vai } from "../link";
import { daA, t, tabellaOrigini } from "../dati";
import { NOMI_ORIGINI } from "@/content/titoli";

const l = "en" as const;
const v = vai(l);

export const arrivare: Guida = {
  titolo: "How to get to Lake Orta: airports, motorways, trains, ferries",
  descrizione: "Malpensa 54 minutes from Orta San Giulio, Linate 83, Zurich, Basel, Bern, Geneva and Munich by car, the Swiss vignette, trains with a change at Novara and ferries from March to October.",
  occhiello: "Guide",
  h1: "How to get to Lake Orta, and how to get around once you are there",
  lead: "The lake's airport is Malpensa. By car you arrive on the Autostrada dei Laghi and the A26; by train you change at Novara; on the water, from March to October, the scheduled ferries run. Here are the measured times, the rules that matter and the gaps that remain.",
  inBreve: [
    `Without traffic Orta San Giulio is ${t(daA("malpensa"), l)} from Malpensa, ${t(daA("milano"), l)} from Piazza del Duomo in Milan, ${t(daA("linate"), l)} from Linate.`,
    `From Switzerland: Lugano ${t(daA("lugano"), l)}, Zurich ${t(daA("zurigo"), l)}, Geneva ${t(daA("ginevra"), l)}, Bern ${t(daA("berna"), l)}, Basel ${t(daA("basilea"), l)}; from Munich ${t(daA("monaco"), l)}.`,
    "On Swiss motorways you need the vignette: 40 francs, valid from 1 December of the previous year to 31 January of the following year; the e-vignette is sold on the official Via portal.",
    "No direct train to Milan: from Orta-Miasino you change at Novara, from 1 h 33 to 1 h 54 in all. To Novara, on Wednesday 7 October 2026, 8 direct trains.",
    "Scheduled ferries run from March to October; from November to February no scheduled service is recorded.",
  ],
  sezioni: [
    {
      id: "aeroporti",
      h2: "Airports: Malpensa first",
      blocchi: [
        `Malpensa Terminal 1 is **${t(daA("malpensa"), l)}** from Orta San Giulio, Linate **${t(daA("linate"), l)}**: OSRM times in free-flowing traffic, measured on 6 October 2026[^1]. From Malpensa the route does not go through Milan: SS336 and SS33 to the branch towards Gattico, then the A26.`,
        "Routes and airlines at the two airports change every season and we have not read them from the airports' own sources: this is why we do not write which cities have direct flights.",
        { nota: "How to read these times: they are calculated by OSRM on the OpenStreetMap network, without queues, roadworks, border checks or stops. They are a minimum. We have not measured the real delay at rush hour." },
      ],
    },
    {
      id: "auto",
      h2: "By car: A8, A26 and the SS229",
      blocchi: [
        "From Milan you take the A8 (Autostrada dei Laghi), then the Gallarate–Gattico branch and the A26. According to the calculated route, you leave the A26 at the junction signposted for Arona, then take the SS142, the Borgomanero bypass and the SS229 Lago d'Orta state road to Orta[^1]. If you arrive from the south (Turin, or Geneva via the Mont Blanc), you leave at Borgomanero instead.",
        "Italian motorways are tolled: we have not calculated the amount.",
        { tabella: tabellaOrigini(l, ["Starting point", "To Orta San Giulio", "km", "Main roads"], ["malpensa", "milano", "linate", "novara", "torino", "lugano", "zurigo", "ginevra", "berna", "basilea", "monaco"], NOMI_ORIGINI) },
        "From Zurich and Basel the fastest route goes down the Swiss A2 to Lugano and re-enters Italy towards Varese; from Bern it goes over the Simplon and along the SS33; from Geneva through the Mont Blanc tunnel and the Aosta Valley; from Munich it crosses Austria and the Grisons[^1].",
        `Each starting point has its own page, with the times to all sixteen places: [Distances](${v.distanze()}).`,
      ],
    },
    {
      id: "vignetta",
      h2: "The Swiss vignette",
      blocchi: [
        "On Swiss motorways and expressways, vehicles up to 3.5 tonnes must have the motorway vignette. According to the Federal Office for Customs and Border Security (FOCBS)[^2]:",
        {
          lista: [
            "it costs **40 francs**, including the electronic version on the official Via portal;",
            "it is valid **from 1 December of the previous year to 31 January of the following year**: the 2026 vignette covers 1 December 2025 to 31 January 2027;",
            "it comes as a sticker (motoring clubs and some customs crossings) or electronic.",
          ],
        },
        "If payment goes through third parties, the FOCBS warns that surcharges may be added: buy from the official portal. The route from Munich also uses tolled Austrian motorways, which we have not calculated here.",
      ],
    },
    {
      id: "treno",
      h2: "By train: always via Novara",
      blocchi: [
        "The town's station is **Orta-Miasino**, on the Novara–Domodossola line, single-track, regional trains only[^4]. On the lake there are also stations at Gozzano, Bolzano Novarese, Pettenasco and Omegna, all on the east shore.",
        "The Trenitalia journey planner, queried on 6 October 2026[^3], gave for **Wednesday 7 October 8 direct trains** from Orta-Miasino to Novara (06:26, 07:12, 08:04, 13:51, 14:57, 16:53, 18:54, 19:52), taking 42 to 53 minutes, and **7** for Saturday 10 October. Between 8:04 and 13:51, no trains.",
        "**There is no direct train to Milan**: all the journeys to Milano Centrale on 7 October require a change at Novara (the first, at 06:26, two changes), taking **1 h 33 to 1 h 54**[^3].",
        "It is a two-day sample, not a published official timetable: always check on the day of travel.",
      ],
    },
    {
      id: "battelli",
      h2: "On the lake: the ferries",
      blocchi: [
        "The public scheduled service is run by Navigazione Lago d'Orta, with three motor vessels; the main landing stages are Omegna, Orta, San Giulio island, Pella, Pettenasco and Gozzano, and the timetables also call at San Filiberto, Lagna, Ronco and Oira[^5][^7].",
        "The service runs **from March to October**. From 4 to 31 October 2026 the «Linea Rossa» operates, every day: Orta, island, Pella, San Filiberto, Lagna, island, Orta, with departures every 35–45 minutes between 10:15 and 17:45[^6]. From November to February the published timetables provide no scheduled service.",
        `The ferry is the only direct link between the two shores: to find out what changes between east and west there is the guide [East shore or west shore](${v.guida("est-ovest")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Routes and frequencies of flights from Malpensa and Linate for winter 2026/27.",
    "Real times at rush hour and at the Swiss border crossings: ours are in free-flowing traffic.",
    "The cost of Italian and Austrian tolls on the routes in the table.",
    "The official regional timetable of the Novara–Domodossola line, and whether the periods without trains are covered by replacement buses.",
    "Private boat links between Orta and the island in the months without a scheduled service.",
  ],
  faq: [
    { d: "Which is the nearest airport to Lake Orta?", r: `Malpensa: ${t(daA("malpensa"), l)} by car from Orta San Giulio without traffic. Linate is ${t(daA("linate"), l)} away.` },
    { d: "Do I need the vignette to arrive from Switzerland?", r: "On Swiss motorways, yes: the vignette costs 40 francs and is valid from 1 December of the previous year to 31 January of the following year. In Italy motorways are tolled." },
    { d: "Can I get to Orta by train from Milan?", r: "Yes, but with a change at Novara: 1 h 33 to 1 h 54 to Milano Centrale according to the Trenitalia journey planner for 7 October 2026. The station is Orta-Miasino." },
    { d: "How long does it take from Zurich?", r: `Without traffic ${t(daA("zurigo"), l)}, along the A2 to Lugano and then into Italy towards Varese and the A26.` },
    { d: "Do the ferries run all year round?", r: "No. The scheduled service runs from March to October; from November to February no scheduled service is recorded." },
  ],
};
