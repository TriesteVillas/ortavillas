import type { Guida } from "../tipi";
import { vai } from "../link";
import { daA, t, tabellaOrigini } from "../dati";
import { NOMI_ORIGINI } from "@/content/titoli";

const l = "sl" as const;
const v = vai(l);

export const arrivare: Guida = {
  titolo: "Kako pridete do jezera Orta: letališča, avtoceste, vlaki, ladje",
  descrizione: "Malpensa 54 minut od Orte San Giulio, Linate 83, Zürich, Basel, Bern, Ženeva in München z avtom, švicarska vinjeta, vlaki s prestopom v Novari in ladje od marca do oktobra.",
  occhiello: "Vodnik",
  h1: "Kako pridete do jezera Orta in kako se tam premikate",
  lead: "Letališče jezera je Malpensa. Z avtom pridete po avtocesti Autostrada dei Laghi in po A26; z vlakom prestopite v Novari; po vodi od marca do oktobra vozijo linijske ladje. Tu so izmerjeni časi, pravila, ki štejejo, in vrzeli, ki ostajajo.",
  inBreve: [
    `Brez prometa je Orta San Giulio oddaljena ${t(daA("malpensa"), l)} od Malpense, ${t(daA("milano"), l)} od trga Piazza del Duomo v Milanu, ${t(daA("linate"), l)} od Linata.`,
    `Iz Švice: Lugano ${t(daA("lugano"), l)}, Zürich ${t(daA("zurigo"), l)}, Ženeva ${t(daA("ginevra"), l)}, Bern ${t(daA("berna"), l)}, Basel ${t(daA("basilea"), l)}; iz Münchna ${t(daA("monaco"), l)}.`,
    "Na švicarskih avtocestah potrebujete vinjeto: 40 frankov, velja od 1. decembra prejšnjega leta do 31. januarja naslednjega; e-vinjeto kupite na uradnem portalu Via.",
    "Neposrednega vlaka za Milano ni: iz Orte-Miasina prestopite v Novari, skupaj od 1 h 33 do 1 h 54. Proti Novari je bilo v sredo, 7. oktobra 2026, 8 neposrednih vlakov.",
    "Linijske ladje vozijo od marca do oktobra; od novembra do februarja linijski prevoz ni izkazan.",
  ],
  sezioni: [
    {
      id: "aeroporti",
      h2: "Letališča: najprej Malpensa",
      blocchi: [
        `Terminal 1 na Malpensi je od Orte San Giulio oddaljen **${t(daA("malpensa"), l)}**, Linate **${t(daA("linate"), l)}**: časi OSRM pri prostem prometu, izmerjeni 6. oktobra 2026[^1]. Z Malpense pot ne vodi skozi Milano: SS336 in SS33 do odcepa za Gattico, nato A26.`,
        "Letalske povezave in prevozniki obeh letališč se spreminjajo vsako sezono in jih v virih letališč nismo prebrali: zato ne pišemo, iz katerih mest so neposredni leti.",
        { nota: "Kako brati te čase: izračunani so z OSRM na omrežju OpenStreetMap, brez zastojev, gradbišč, mejnih kontrol in postankov. To je najmanj, kar je mogoče. Dejanske zamude v prometnih konicah nismo izmerili." },
      ],
    },
    {
      id: "auto",
      h2: "Z avtom: A8, A26 in državna cesta 229",
      blocchi: [
        "Iz Milana zapeljete na A8 (Autostrada dei Laghi), nato na krak Gallarate–Gattico in na A26. Po izračunani poti z A26 izstopite na priključku, ki ga table označujejo za Arono, nato SS142, obvoznica Borgomanera in državna cesta 229 del Lago d'Orta do Orte[^1]. Kdor prihaja z juga (Torino, Ženeva čez Mont Blanc), pa izstopi v Borgomaneru.",
        "Italijanske avtoceste so cestninske: zneska nismo izračunali.",
        { tabella: tabellaOrigini(l, ["Odhod", "Do Orte San Giulio", "km", "Glavne ceste"], ["malpensa", "milano", "linate", "novara", "torino", "lugano", "zurigo", "ginevra", "berna", "basilea", "monaco"], NOMI_ORIGINI) },
        "Iz Züricha in Basla najhitrejša pot vodi po švicarski A2 do Lugana in se vrne v Italijo proti Vareseju; iz Berna čez prelaz Simplon in državno cesto 33; iz Ženeve skozi predor pod Mont Blancom in dolino Aoste; iz Münchna čez Avstrijo in Graubünden[^1].",
        `Vsak kraj odhoda ima svojo stran s časi do vseh šestnajstih krajev: [Razdalje](${v.distanze()}).`,
      ],
    },
    {
      id: "vignetta",
      h2: "Švicarska vinjeta",
      blocchi: [
        "Na švicarskih avtocestah in hitrih cestah morajo imeti vozila do 3,5 tone avtocestno vinjeto. Po navedbah Zveznega urada za carine in varnost meja (UDSC)[^2]:",
        {
          lista: [
            "stane **40 frankov**, tudi v elektronski različici na uradnem portalu Via;",
            "velja **od 1. decembra prejšnjega leta do 31. januarja naslednjega leta**: vinjeta 2026 velja od 1. decembra 2025 do 31. januarja 2027;",
            "obstaja kot nalepka (avtomobilski klubi in nekateri mejni prehodi) ali v elektronski obliki.",
          ],
        },
        "Če plačate prek tretjih oseb, UDSC opozarja, da se lahko zaračunajo doplačila: kupite jo na uradnem portalu. Pot iz Münchna vodi tudi po avstrijskih cestninskih avtocestah, katerih cestnine tu nismo izračunali.",
      ],
    },
    {
      id: "treno",
      h2: "Z vlakom: vedno prek Novare",
      blocchi: [
        "Postaja kraja je **Orta-Miasino** na enotirni progi Novara–Domodossola, samo regionalni vlaki[^4]. Ob jezeru so še postaje Gozzano, Bolzano Novarese, Pettenasco in Omegna, vse na vzhodni obali.",
        "Iskalnik voznih redov Trenitalia, ki smo ga preverili 6. oktobra 2026[^3], je za **sredo, 7. oktobra, navajal 8 neposrednih vlakov** iz Orte-Miasina v Novaro (6.26, 7.12, 8.04, 13.51, 14.57, 16.53, 18.54, 19.52), od 42 do 53 minut, za soboto, 10. oktobra, pa **7**. Med 8.04 in 13.51 ni nobenega vlaka.",
        "**Za Milano neposrednega vlaka ni**: vse povezave do postaje Milano Centrale 7. oktobra zahtevajo prestop v Novari (prva, ob 6.26, dva prestopa), od **1 h 33 do 1 h 54**[^3].",
        "To je vzorec dveh dni, ne objavljeni uradni vozni red: na dan potovanja vedno preverite.",
      ],
    },
    {
      id: "battelli",
      h2: "Po jezeru: ladje",
      blocchi: [
        "Javni linijski prevoz izvaja Navigazione Lago d'Orta s tremi motornimi ladjami; glavna pristanišča so Omegna, Orta, otok San Giulio, Pella, Pettenasco in Gozzano, vozni redi pa vključujejo tudi San Filiberto, Lagno, Ronco in Oiro[^5][^7].",
        "Linija vozi **od marca do oktobra**. Od 4. do 31. oktobra 2026 velja »Linea Rossa« (rdeča linija), vsak dan: Orta, otok, Pella, San Filiberto, Lagna, otok, Orta, z odhodi vsakih 35–45 minut med 10.15 in 17.45[^6]. Od novembra do februarja objavljeni vozni redi linijskega prevoza ne predvidevajo.",
        `Ladja je edina neposredna povezava med bregovoma: kaj se spremeni med vzhodom in zahodom, pove vodnik [Vzhodna ali zahodna obala](${v.guida("est-ovest")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Letalske povezave in pogostost letov z Malpense in Linata za zimo 2026/27.",
    "Dejanski časi v prometnih konicah in na mejnih prehodih s Švico: naši veljajo za prosti promet.",
    "Cena italijanskih in avstrijskih cestnin na poteh iz preglednice.",
    "Uradni regionalni vozni red proge Novara–Domodossola in ali so časovni pasovi brez vlakov pokriti z nadomestnimi avtobusi.",
    "Zasebne povezave s čolnom med Orto in otokom v mesecih brez linijskega prevoza.",
  ],
  faq: [
    { d: "Katero letališče je najbližje jezeru Orta?", r: `Malpensa: brez prometa ${t(daA("malpensa"), l)} z avtom od Orte San Giulio. Linate je oddaljen ${t(daA("linate"), l)}.` },
    { d: "Ali za prihod iz Švice potrebujem vinjeto?", r: "Na švicarskih avtocestah da: vinjeta stane 40 frankov in velja od 1. decembra prejšnjega leta do 31. januarja naslednjega. V Italiji so avtoceste cestninske." },
    { d: "Ali pridete do Orte z vlakom iz Milana?", r: "Da, vendar s prestopom v Novari: od 1 h 33 do 1 h 54 do postaje Milano Centrale po iskalniku voznih redov Trenitalia za 7. oktober 2026. Postaja je Orta-Miasino." },
    { d: "Koliko traja vožnja iz Züricha?", r: `Brez prometa ${t(daA("zurigo"), l)}, po A2 do Lugana in nato v Italijo proti Vareseju in na A26.` },
    { d: "Ali ladje vozijo vse leto?", r: "Ne. Linijski prevoz vozi od marca do oktobra; od novembra do februarja linijski prevoz ni izkazan." },
  ],
};
