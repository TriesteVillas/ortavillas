import type { Guida } from "../tipi";
import { vai } from "../link";
import { L, n, t, ora, pct, fq, tabellaSole, tabellaServizi } from "../dati";

const l = "sl" as const;
const v = vai(l);
const orta = L("orta-san-giulio"), pet = L("pettenasco"), pella = L("pella"), ronco = L("ronco"), smo = L("san-maurizio-dopaglio"), mds = L("madonna-del-sasso"), legro = L("legro");
const s = (x: typeof orta) => x.soleDic!;

export const estOvest: Guida = {
  titolo: "Jezero Orta, vzhodna ali zahodna obala? Sonce, vlaki, ceste, cene",
  descrizione: "Vzhodna ali zahodna obala jezera Orta: minute sonca 21. decembra, železnica, ceste, ladje, cene OMI, tveganja po ISPRA in storitve, občina za občino.",
  occhiello: "Vodnik",
  h1: "Vzhodna ali zahodna obala: dva bregova, ki se gledata",
  lead: "Od Orte do Pelle je z ladjo le nekaj minut, a bregova živita v različnih urah. Vzhodni ima železnico, staro jedro in višje cene; zahodni ima jutranje sonce in pogled na otok. Tu so številke, ki ju ločujejo, in kje številke ne zadoščajo.",
  inBreve: [
    `Orta San Giulio ima 21. decembra ${s(orta).minuti} minut neposrednega sonca (od ${ora(s(orta).primo, l)} do ${ora(s(orta).ultimo, l)}), Pella ${s(pella).minuti} (od ${ora(s(pella).primo, l)} do ${ora(s(pella).ultimo, l)}): skoraj enak skupni čas, ob urah, zamaknjenih za štirideset minut.`,
    `Skrajni primer je Ronco na zahodnem bregu: zadnje sonce ob ${ora(s(ronco).ultimo, l)}, skupaj ${s(ronco).minuti} minut.`,
    "Železnica Novara–Domodossola teče samo po vzhodni obali (postaji Orta-Miasino in Pettenasco); na zahodni so ladje in pokrajinska cesta.",
    `Obala jezera po OMI, vile in hiše: Orta ${fq("orta-san-giulio", "B2", "ville", l)}, Pella ${fq("pella", "B2", "ville", l)}, Pettenasco ${fq("pettenasco", "B2", "ville", l)} (2. polletje 2025).`,
    `Tveganje zemeljskih plazov in poplav (ISPRA, % prebivalcev občine): najvišjo vrednost med bregovoma ima Pettenasco, ${pct(pet.frane!, l)} in ${pct(pet.alluvioni!, l)}.`,
  ],
  sezioni: [
    {
      id: "due-rive",
      h2: "Dva bregova, ozko jezero",
      blocchi: [
        "Jezero je ozko: z enega brega se drugi dobro vidi. **Vzhodna obala** so za nas Orta San Giulio, njen zaselek Legro in Pettenasco; **zahodna obala** Pella, njen zaselek Ronco, San Maurizio d'Opaglio in na grebenu Madonna del Sasso. Meje so okvirne in smo jih začrtali sami.",
        `Vzhodni breg gleda proti zahodu: jezero in sončni zahod pred sabo, Mottarone za hrbtom. Zahodni breg gleda proti vzhodu: sončni vzhod nad jezerom in pogled na Orto in otok San Giulio, a greben za hišami prej prinese sončni zahod. Vasi na gričih Mottarone (Ameno, Vacciago, Miasino, Armeno) ležijo nad vzhodno obalo in imajo med kraji svoje strani, na primer [Ameno](${v.luogo("ameno")}).`,
      ],
    },
    {
      id: "sole",
      h2: "Sonce 21. decembra",
      blocchi: [
        `Obzorje vsakega kraja smo izračunali iz digitalnega modela terena, na vsaki 2° azimuta do razdalje 15 km, položaj sonca pa s formulami NOAA[^2]. Rezultat je sonce, ki ga dopušča relief, brez hiš, dreves in oblakov: največ, kar je mogoče, ne obljuba. Pri ravnem obzorju bi bilo 21. decembra ${s(orta).teorici} minut sonca.`,
        {
          tabella: tabellaSole(l, ["Kraj", "Breg", "Nadmorska višina", "Minute sonca", "Prvo sonce", "Zadnje sonce"], { est: "vzhod", ovest: "zahod" }),
        },
        `Skupni čas se spremeni malo; spremeni se ura. Na vzhodu sonce pride pozno (v Orti ob ${ora(s(orta).primo, l)}, v Pettenascu ob ${ora(s(pet).primo, l)}), ker ga zakrivajo pobočja Mottarona, in ostane do sredine popoldneva. Na zahodu pride okoli pol devetih in odide prej: v Pelli ob ${ora(s(pella).ultimo, l)}, v Roncu ob ${ora(s(ronco).ultimo, l)}. Legro, visoko nad Orto, zvečer pridobi četrt ure (${ora(s(legro).ultimo, l)}).`,
        "Po enakem izračunu ima Pella 21. junija 822 minut sonca, Orta 792, Ronco 717: tudi poleti greben nad Roncem še vedno šteje.",
      ],
    },
    {
      id: "spostarsi",
      h2: "Vlak, ceste in ladje",
      blocchi: [
        "**Vlak je samo na vzhodu.** Enotirna proga Novara–Domodossola ima ob jezeru postaje Gozzano, Bolzano Novarese, Orta-Miasino, Pettenasco in Omegna[^6]. Iskalnik voznih redov Trenitalia je 7. oktobra 2026 iz Orte-Miasina proti Novari navajal **8 neposrednih vlakov**, z vrzeljo med 8.04 in 13.51; za Milano je vedno potreben prestop v Novari[^7].",
        `**Ceste.** Vzhodno obalo oskrbuje državna cesta 229 del Lago d'Orta, ista, na katero zapeljete z avtoceste A26: iz Milana je Orta brez prometa oddaljena ${t(orta.daMilano, l)}. Zahodno obalo oskrbuje pokrajinska cesta 46, do nje pa pridete okoli južnega konca jezera: Pella je oddaljena ${t(pella.daMilano, l)}, Ronco ${t(ronco.daMilano, l)}[^1].`,
        "**Ladje** so edina neposredna povezava med bregovoma. Navigazione Lago d'Orta, javni linijski prevoz, vozi od marca do oktobra[^11]; od 4. do 31. oktobra 2026 »Linea Rossa« (rdeča linija) vozi vsakih 35–45 minut med Orto, otokom, Pello, San Filibertom in Lagno[^5]. Od novembra do februarja linijski prevoz ni izkazan.",
      ],
    },
    {
      id: "prezzi",
      h2: "Cene OMI na obeh bregovih",
      blocchi: [
        "Observatorij nepremičninskega trga (Osservatorio del Mercato Immobiliare, OMI) Agencije za prihodke (Agenzia delle Entrate) objavlja razpone v €/m² po conah in vrstah nepremičnin: gre za ocene, ne za prodajne cene[^3]. Tu so cone ob jezeru in najdražje cone posamezne občine, 2. polletje 2025:",
        {
          tabella: {
            testa: ["Občina", "Cona OMI", "Stanovanjske enote", "Vile in hiše"],
            righe: [
              ["Orta San Giulio", "B2 · Obala jezera, otok", fq("orta-san-giulio", "B2", "civili", l), fq("orta-san-giulio", "B2", "ville", l)],
              ["Orta San Giulio", "C1 · Gričevnati pas in Legro", fq("orta-san-giulio", "C1", "civili", l), fq("orta-san-giulio", "C1", "ville", l)],
              ["Pettenasco", "B2 · Obala jezera", fq("pettenasco", "B2", "civili", l), fq("pettenasco", "B2", "ville", l)],
              ["Pella", "B2 · Obala jezera", fq("pella", "B2", "civili", l), fq("pella", "B2", "ville", l)],
              ["Pella", "E1 · Ronco", fq("pella", "E1", "civili", l), fq("pella", "E1", "ville", l)],
              ["San Maurizio d'Opaglio", "C1 · Polsredišče", fq("san-maurizio-dopaglio", "C1", "civili", l), fq("san-maurizio-dopaglio", "C1", "ville", l)],
              ["Madonna del Sasso", "B1 · Naselje", fq("madonna-del-sasso", "B1", "civili", l), fq("madonna-del-sasso", "B1", "ville", l)],
            ],
            didascalia: "Agenzia delle Entrate – OMI, običajno stanje ohranjenosti, bruto površina. »—« = vrsta nepremičnine v tej coni ni ocenjena.",
          },
        },
        `Obala jezera v Orti z otokom je najvišje ocenjena cona vsega jezera. Pella in Pettenasco sta ob obali stopnjo nižje in med sabo skoraj enaka. Vse cone s primerjavo z letom 2024 so v vodniku [Cene nepremičnin ob jezeru](${v.guida("quotazioni")}).`,
      ],
    },
    {
      id: "rischi-servizi",
      h2: "Tveganja in storitve, občina za občino",
      blocchi: [
        "ISPRA za vsako občino objavlja delež prebivalcev, ki živijo na območjih z visoko ali zelo visoko nevarnostjo zemeljskih plazov (P3–P4) in na območjih s srednjo poplavno nevarnostjo (P2)[^4]. To so odstotki za celo občino: o posamezni hiši ne povedo ničesar, to je treba preveriti na kartah načrta hidrogeološke ureditve.",
        { tabella: tabellaServizi(l, ["Kraj", "Iz Milana", "Najbližja postaja (zračna razdalja)", "Plazovi P3–P4", "Poplave P2", "Državne šole"], "—") },
        `Pettenasco ima najvišje vrednosti obeh bregov (${pct(pet.frane!, l)} prebivalcev na plazovitih območjih P3–P4, ${pct(pet.alluvioni!, l)} na poplavnih območjih P2); sledi Pella s ${pct(pella.frane!, l)} in ${pct(pella.alluvioni!, l)}. Madonna del Sasso na grebenu ima pri obeh nič. Šole so državne šole iz ministrskega registra 2026/27[^8]: zasebnih priznanih šol (paritarie) ni med njimi. Legro in Ronco sta zaselka: zanju veljajo podatki njune občine.`,
        "**Bolnišnice.** Najbližja urgenca za oba bregova je med prebranimi viri bolnišnica SS. Trinità v Borgomaneru, urgentni center (DEA) I. ravni z 250 posteljami[^9], južno od jezera. V Omegni je točka prve pomoči (Punto di Primo Intervento), ne urgenca, s skrajšanim delovnim časom[^10]. Časa vožnje od hiš do bolnišnice nismo izmerili.",
      ],
    },
    {
      id: "per-chi",
      h2: "Za koga je kateri breg",
      blocchi: [
        { h3: "Vzhodno obalo izberite, če …" },
        {
          lista: [
            "želite priti z vlakom ali imeti vlak za Novaro nekaj minut hoje od doma;",
            "želite staro jedro Orte, glavno pristanišče in storitve na sprehajalni razdalji;",
            "imate raje popoldansko sonce in sončni zahod nad vodo ter sprejmete poznejši sončni vzhod pozimi;",
            "vaš proračun zmore najvišje cene ob jezeru.",
          ],
        },
        { h3: "Zahodno obalo izberite, če …" },
        {
          lista: [
            "želite pogled na Orto in otok ter jutranje sonce;",
            "vam zadošča avto ali sezonska ladja, brez železnice;",
            `iščete stopnjo nižje cene ob enakem pogledu ali razgledno točko Madonna del Sasso na ${n(mds.quota, l)} m;`,
            `veste, da pozimi sonce odide zgodaj: v Roncu ob ${ora(s(ronco).ultimo, l)}.`,
          ],
        },
        `San Maurizio d'Opaglio, največja občina zahodnega brega (${n(smo.abitanti ?? 0, l)} prebivalcev), leži ${n(smo.riva, l)} m od vode in ima najdaljši zimski dan obeh bregov: ${s(smo).minuti} minut.`,
      ],
    },
  ],
  nonSappiamo: [
    "Dejansko sonce posamezne hiše: naš izračun izključuje stavbe, drevesa in oblake ter uporablja model terena z ločljivostjo približno 27 m.",
    "Razlike v temperaturi, megli in vetru med bregovoma: nismo našli objavljene vremenske postaje za vsako obalo.",
    "Dejanski čas vožnje od hiš do urgence v Borgomaneru in redni delovni čas točke prve pomoči v Omegni.",
    "Ali pozimi, ko linijske ladje ni, med bregovoma obstajajo zasebne povezave.",
    "Kupoprodaje po občinah (občinski NTN): prenesti jih je mogoče samo z digitalno identiteto in jih nimamo.",
  ],
  faq: [
    { d: "Je ob jezeru Orta bolj sončna vzhodna ali zahodna obala?", r: `21. decembra je skupni čas podoben: Orta San Giulio ${s(orta).minuti} minut neposrednega sonca, Pella ${s(pella).minuti}. Spremeni se ura: na vzhodu sonce pride okoli četrt čez devet in ostane do četrt do štirih, na zahodu pride okoli pol devetih in odide prej. Ronco na zahodu izgubi sonce ob ${ora(s(ronco).ultimo, l)}.` },
    { d: "Ali vlak pripelje na oba bregova?", r: "Ne, samo na vzhodno obalo: postaji Orta-Miasino in Pettenasco na progi Novara–Domodossola. Za Milano je potreben prestop v Novari." },
    { d: "Kje so hiše ob jezeru Orta najdražje?", r: `Med cenami OMI je najdražja cona obala jezera v Orti San Giulio z otokom: stanovanjske enote ${fq("orta-san-giulio", "B2", "civili", l)}, vile ${fq("orta-san-giulio", "B2", "ville", l)} v 2. polletju 2025. To so ocene po conah, ne prodajne cene.` },
    { d: "Kako pridete z enega brega na drugega?", r: "Z linijsko ladjo od marca do oktobra ali z avtom okoli južnega konca jezera. Od novembra do februarja linijski prevoz ni izkazan." },
    { d: "Kateri breg ima manjše tveganje zemeljskih plazov?", r: `Med občinami obeh bregov ima po ISPRA Madonna del Sasso nič prebivalcev na plazovitih območjih P3–P4, San Maurizio d'Opaglio ${pct(smo.frane!, l)}, Orta ${pct(orta.frane!, l)}, Pella ${pct(pella.frane!, l)}, Pettenasco ${pct(pet.frane!, l)}. To je podatek za občino: za posamezno hišo štejejo karte načrta hidrogeološke ureditve.` },
  ],
};
