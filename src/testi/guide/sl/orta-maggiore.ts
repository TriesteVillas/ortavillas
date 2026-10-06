import type { Guida } from "../tipi";
import { vai } from "../link";
import { laghi, t, fq, tabellaLaghi } from "../dati";

const l = "sl" as const;
const v = vai(l);
const mi = (id: string) => laghi("milano").find((r) => r.a === id)!.minuti;
const mx = (id: string) => laghi("malpensa").find((r) => r.a === id)!.minuti;

export const NOMI_LAGHI_SL: Record<string, string> = {
  stresa: "Lago Maggiore · Stresa",
  como: "Komsko jezero · Como",
  bellagio: "Komsko jezero · Bellagio",
  sirmione: "Gardsko jezero · Sirmione",
  "orta-san-giulio": "Jezero Orta · Orta San Giulio",
};

export const ortaMaggiore: Guida = {
  titolo: "Jezero Orta ali Lago Maggiore? Čas vožnje, velikost, voda in cene",
  descrizione: "Orta ali Maggiore: čas vožnje iz Milana in z Malpense do Strese, Coma, Bellagia, Sirmioneja in Orte, velikost obeh jezer, kakovost vode, zaprta žičnica na Mottarone in katere cene res imamo.",
  occhiello: "Vodnik",
  h1: "Orta ali Maggiore: dve jezeri, vmes gora",
  lead: "Mottarone loči jezero Orta od Lago Maggiore: od Orte do Strese je le nekaj kilometrov zračne razdalje. A jezeri sta različnih razsežnosti, in poštena primerjava mora povedati tudi, katere številke manjkajo.",
  inBreve: [
    `Iz Milana je brez prometa Orta San Giulio oddaljena ${t(mi("orta-san-giulio"), l)}, Stresa ${t(mi("stresa"), l)}, Como ${t(mi("como"), l)}, Bellagio ${t(mi("bellagio"), l)}. Z Malpense je Orta oddaljena ${t(mx("orta-san-giulio"), l)}, Stresa ${t(mx("stresa"), l)}.`,
    "Jezero Orta ima 18 km² površine in 143 m največje globine; Maggiore 212 km² in 370 m. Prostornina Maggiora je približno tridesetkrat večja od prostornine Orte.",
    "Leta 2024 je bilo od 16 kopalnih mest jezera Orta 10 v razredu »odlično«, 4 »dobro« in 2 »zadostno« (podatki, posredovani EU).",
    "Žičnica Stresa–Mottarone, ki stoji od nesreče 23. maja 2021, je bila maja 2026 še vedno zaprta.",
    "Za cene ob Lago Maggiore nismo pridobili ocen OMI: primerjave cen z Orto danes ne objavljamo.",
  ],
  sezioni: [
    {
      id: "tempi",
      h2: "Iz Milana in z Malpense",
      blocchi: [
        "Čas vožnje z avtom, izmerjen z OSRM 6. oktobra 2026, pri prostem prometu: brez zastojev na obvoznici, brez gradbišč, brez postankov[^1]. To je najmanj, kar je mogoče, ne obljuba. Odhodi: trg Piazza del Duomo v Milanu in Terminal 1 na Malpensi; prihodi: središče posameznega kraja.",
        { tabella: tabellaLaghi(l, ["Jezero in kraj", "Iz Milana", "km", "Z Malpense", "km"], NOMI_LAGHI_SL) },
        `Orta in Stresa sta iz Milana skoraj enako oddaljeni (${t(mi("orta-san-giulio"), l)} proti ${t(mi("stresa"), l)}): poti si delita A8 in odcep za Gattico, nato se ločita na A26. Z Malpense je Stresa dve minuti bližje. Como je iz Milana najbližji od vseh; Bellagio in Sirmione sta dlje od Orte.`,
        `Vsi časi vožnje do šestnajstih krajev ob jezeru Orta iz enajstih mest so v razdelku [Razdalje](${v.distanze()}).`,
      ],
    },
    {
      id: "dimensioni",
      h2: "Dve različni razsežnosti",
      blocchi: [
        {
          tabella: {
            testa: ["", "Jezero Orta", "Lago Maggiore"],
            num: [1, 2],
            righe: [
              ["Površina", "18 km²", "212 km²"],
              ["Največja globina", "143 m", "370 m"],
              ["Prostornina", "1,3 km³", "37,5 km³"],
            ],
            didascalia: "Orta: Regione Piemonte, Piano di Tutela delle Acque, monografija L3 (2007). Maggiore: Mosello in Lami, CNR (2011).",
          },
        },
        "Jezero Orta je dolgo 12,55 km in široko največ 1,85 km[^2]: s skoraj vsake hiše na obali se vidi tista na nasprotni strani. Lago Maggiore je po površini drugo največje jezero v Italiji[^3].",
        "Orta ima tudi hidrografsko posebnost: odtok izteka na severnem koncu, kar je po navedbah CNR edinstven primer med italijanskimi subalpskimi jezeri[^11]. Njena voda vseeno pride do Lago Maggiore, po rekah Strona in Toce.",
      ],
    },
    {
      id: "acque",
      h2: "Voda: kopanje in stanje jezera",
      blocchi: [
        "**Kopanje.** Ob jezeru Orta je 16 uradnih merilnih mest. V sezoni 2024, zadnji razvrščeni v podatkih, posredovanih Evropski agenciji za okolje, jih je bilo **10** v odličnem razredu, **4** v dobrem in **2** v zadostnem; zadostni sta plaži v Omegni na severnem koncu (Bagnella in kopališče športnega centra)[^4].",
        "**Stanje jezera.** V triletju 2020–2022 je ARPA Piemonte ekološko stanje Orte razvrstila kot »dobro«, kot eno od le dveh piemontskih jezer v tem razredu, kemijsko stanje pa je bilo »ni dobro« zaradi preseženega letnega povprečja PFOS[^5]. Za obdobje 2023–2025 je bila razvrstitev julija 2026 še v oceni[^6].",
        "Rezultat šteje več, če se spomnimo zgodovine: industrijski izpusti so Orto desetletja delali za kislo jezero, sanirano z apnenjem v letih 1989 in 1990[^11].",
        "**Lago Maggiore.** Kopalnih razredov merilnih mest na Lago Maggiore za to izdajo nismo pridobili: zato ne pišemo, katero od jezer je »čistejše«.",
      ],
    },
    {
      id: "mottarone",
      h2: "Mottarone in zaprta žičnica",
      blocchi: [
        "Mottarone, 1.491 m na zgornji postaji žičnice[^8], je gora med jezeroma. Žičnica Stresa–Alpino–Mottarone stoji od nesreče **23. maja 2021**, v kateri je umrlo 14 ljudi. Novembra 2023 so italijansko ministrstvo za turizem, dežela in občina Stresa podpisali sporazum v vrednosti 15 milijonov evrov za novo napravo, ponovno odprtje pa je bilo predvideno za poletje 2025[^9].",
        "Ta datum je minil: ob peti obletnici, 23. maja 2026, je žičnica še vedno stala[^7], turistični urad v Stresi pa piše, da je zaprta, ne da bi navedel ponovno odprtje[^8]. Ali dela oktobra 2026 potekajo, nismo mogli preveriti.",
      ],
    },
    {
      id: "prezzi",
      h2: "Cene: kaj imamo in česa ne",
      blocchi: [
        `Za jezero Orta imamo ocene OMI za trinajst občin, cono za cono[^10]. Najvišja je obala jezera v Orti San Giulio z otokom: stanovanjske enote ${fq("orta-san-giulio", "B2", "civili", l)}, vile ${fq("orta-san-giulio", "B2", "ville", l)} (2. polletje 2025). Celotna slika je v vodniku [Cene nepremičnin ob jezeru](${v.guida("quotazioni")}).`,
        "Za Lago Maggiore (Stresa, Baveno, Verbania, Arona, lombardska obala) **ocen nismo pridobili**: primerjava cen med jezeroma bi zahtevala enak izvleček, z istim polletjem in istimi vrstami nepremičnin. Dokler ga nismo naredili, ne pišemo, da je Orta cenejša ali dražja od Maggiora.",
        "Enako velja za poletno gnečo: za jezeri nimamo primerljivega podatka o turističnih prenočitvah in ga ne nadomeščamo z vtisom.",
      ],
    },
    {
      id: "scegliere",
      h2: "Kako izbrati",
      blocchi: [
        { h3: "Jezero Orta je za vas, če …" },
        {
          lista: [
            "želite majhno jezero, kjer je nasprotni breg del pokrajine, ki jo vidite od doma;",
            `vam zadošča, da ste brez prometa ${t(mi("orta-san-giulio"), l)} od Milana in ${t(mx("orta-san-giulio"), l)} od Malpense;`,
            "iščete jezero z »dobrim« ekološkim stanjem in večinoma odličnimi kopalnimi mesti, ob vedenju o PFOS.",
          ],
        },
        { h3: "Lago Maggiore je za vas, če …" },
        {
          lista: [
            "želite veliko jezero s širokimi obzorji;",
            "potrebujete več storitev in več povezav po jezeru, kot jih ponuja Orta (česar tu nismo izmerili);",
            "sprejmete, da so številke v tem vodniku za Maggiore manj popolne.",
          ],
        },
      ],
    },
  ],
  nonSappiamo: [
    "Ocene OMI za občine ob Lago Maggiore, pridobljene z enako metodo kot za Orto.",
    "Kopalni razredi merilnih mest na Lago Maggiore za leto 2024.",
    "Primerljiv podatek o poletnih turističnih prenočitvah ob obeh jezerih.",
    "Stanje del na novi žičnici na Mottarone oktobra 2026 in datum ponovnega odprtja.",
    "Razvrstitev ekološkega in kemijskega stanja Orte, ki jo je ARPA pripravila za obdobje 2023–2025.",
    "Dejanski časi vožnje v prometnih konicah: naši veljajo za prosti promet.",
  ],
  faq: [
    { d: "Je Milanu bližje jezero Orta ali Lago Maggiore?", r: `Skoraj enako: brez prometa je Orta San Giulio od trga Piazza del Duomo oddaljena ${t(mi("orta-san-giulio"), l)}, Stresa ${t(mi("stresa"), l)}. Z Malpense je Stresa oddaljena ${t(mx("stresa"), l)}, Orta ${t(mx("orta-san-giulio"), l)}.` },
    { d: "Kako veliko je jezero Orta v primerjavi z Lago Maggiore?", r: "18 km² proti 212 km² površine, 143 m proti 370 m največje globine, 1,3 proti 37,5 km³ prostornine." },
    { d: "Ali se lahko v jezeru Orta kopate?", r: "Da, na dovoljenih kopalnih mestih. Leta 2024 je bilo od 16 uradnih mest 10 v odličnem razredu, 4 v dobrem in 2 v zadostnem." },
    { d: "Ali žičnica na Mottarone obratuje?", r: "Ne. Stoji od 23. maja 2021; maja 2026 je bila še vedno zaprta in turistični urad v Stresi ne navaja datuma ponovnega odprtja." },
    { d: "Ali so hiše ob jezeru Orta cenejše kot ob Lago Maggiore?", r: "S primerljivimi podatki tega ne moremo povedati: imamo ocene OMI za Orto, ne pa za Maggiore, pridobljenih z enako metodo." },
  ],
};
