import type { Guida } from "../tipi";
import { vai } from "../link";
import { n, pct, fq, q, ntn, tabellaOmi } from "../dati";

const l = "sl" as const;
const v = vai(l);
const no = ntn("NO"), vb = ntn("VB");
const ortaB2 = q("orta-san-giulio", "B2", "ville")!;

export const quotazioni: Guida = {
  titolo: "Cene hiš ob jezeru Orta: ocene OMI, občina za občino",
  descrizione: "Ocene OMI za 13 občin ob jezeru Orta, cona za cono, 2. polletje 2025 v primerjavi z 2. polletjem 2024: kako jih brati, zakaj niso prodajne cene in zakaj v Italiji ni javnih median kupoprodaj.",
  occhiello: "Vodnik",
  h1: "Cene ob jezeru: kaj povedo ocene OMI in česa ne",
  lead: "V Italiji ni javnega registra, ki bi povedal, za koliko je bila prodana vsaka hiša. Najbližji odprti podatek so ocene Observatorija nepremičninskega trga (Osservatorio del Mercato Immobiliare, OMI): ocenjeni razponi po conah, ne cene. Tu so vse ocene za jezero Orta in način, kako jih ne brati narobe.",
  inBreve: [
    `Najvišje ocenjena cona ob jezeru je obala jezera v Orti San Giulio z otokom: vile in hiše ${fq("orta-san-giulio", "B2", "ville", l)}, stanovanjske enote ${fq("orta-san-giulio", "B2", "civili", l)} (2. polletje 2025).`,
    "Ocene OMI so razponi v €/m² bruto površine, ki jih Agencija za prihodke (Agenzia delle Entrate) oceni po conah in vrstah nepremičnin v prevladujočem stanju ohranjenosti. Niso povprečja pogodb.",
    `Med 2. polletjem 2024 in 2. polletjem 2025 je OMI zvišal vse ocene stanovanjskih enot ob jezeru; vile so ostale nespremenjene samo v štirih občinah VCO. Vile na obali jezera v Orti: +${pct(ortaB2.varPct!, l)} na sredini razpona.`,
    "Cene, navedene v pogodbah, obstajajo, a jih je mogoče pogledati samo z digitalno identiteto, eno po eno, brez odprte licence: median za objavo ni.",
    `Kupoprodaje stanovanjskih nepremičnin v občinah pokrajine Novara, ki niso glavno mesto pokrajine: ${n(no.a2024, l)} leta 2024, ${n(no.a2025, l)} leta 2025 (začasno, ${pct(no.varPct, l)}). To je vsa pokrajina, ne jezero.`,
  ],
  sezioni: [
    {
      id: "che-cosa-sono",
      h2: "Kaj so ocene OMI",
      blocchi: [
        "Observatorij nepremičninskega trga Agencije za prihodke vsako polletje razdeli vsako občino na homogene cone in za vsako cono in vrsto nepremičnine (stanovanjske enote, ekonomske, gosposke, vile in hiše) objavi najnižjo in najvišjo vrednost v evrih na kvadratni meter[^1]. Pri tem izhaja iz pogodb, ponudb in lastnih popisov.",
        "Tri stvari, ki jih morate vedeti, preden jih uporabite:",
        {
          lista: [
            "**So ocene, ne cene.** Niso povprečje niti mediana prodaj: so razpon, v katerega agencija umesti običajne vrednosti cone. Agencija sama opozarja, da ne nadomeščajo cenitve posamezne nepremičnine.",
            "**Bruto površina.** Vse ocene ob jezeru se nanašajo na bruto (komercialno) površino, z zidovi vred.",
            "**Običajno stanje.** Ob jezeru je ocenjeno samo prevladujoče stanje ohranjenosti, »običajno«. Vila, prenovljena kot nova, na obali jezera lahko pade iz razpona navzgor; vila, ki jo je treba obnoviti, navzdol.",
          ],
        },
        "Kadar vrsta nepremičnine v coni manjka, to pomeni, da je OMI ne ocenjuje, ker trg ni pomemben: ne, da je vredna nič.",
      ],
    },
    {
      id: "tabella",
      h2: "Vse cone ob jezeru, 2025 v primerjavi z 2024",
      blocchi: [
        "Trinajst občin, vse cone z vsaj eno oceno za stanovanjske enote ali vile in hiše. Spremembo smo izračunali sami na sredini razpona: meri, za koliko je OMI premaknil svojo oceno, ne pa, kako so potekale prodaje[^1].",
        { tabella: tabellaOmi(l, ["Občina", "Cona OMI", "Vrsta", "2. polletje 2025 €/m²", "2. polletje 2024 €/m²", "Sprememba"], { "Abitazioni civili": "Stanovanjske enote", "Ville e Villini": "Vile in hiše" }, "—") },
        "Pridobljeno iz javne storitve za vpogled 6. oktobra 2026; licenca CC BY 4.0, »Agenzia delle Entrate – OMI«. Agencija cone opisuje z besedami: meje je mogoče prenesti samo iz zaprtega območja[^2]. Legro leži v coni C1 Orte (ki ga navaja), Ronco v coni E1 Pelle; za Vacciago ga ne navaja nobena cona občine Ameno.",
      ],
    },
    {
      id: "leggere",
      h2: "Kako jih brati brez napak",
      blocchi: [
        {
          lista: [
            "**Množenje ne zadošča.** 200 m² krat najvišja vrednost za obalo jezera v Orti da številko, ne cene: pogled, dostop do jezera, privez, vrt in stanje napeljav premaknejo vrednost bolj kot kateri koli koeficient.",
            "**Bruto proti neto.** Oglas, ki navaja »180 m²«, lahko govori o uporabni površini: če jo primerjate z bruto vrednostjo OMI, se bo cena na kvadratni meter zdela višja, kot je.",
            "**Široke cone.** »Obrobna« ali »gričevnata« cona združuje zelo različne hiše. Ob jezeru je razlika med prvo in drugo vrsto lahko večja od prehoda iz ene cone v drugo.",
            "**Zamik.** 2. polletje 2025 je bilo 6. oktobra 2026 zadnje objavljeno: gleda skoraj leto dni nazaj.",
          ],
        },
        `Za oceno, koliko kvadratnih metrov doseže vaš proračun, občina za občino, je na voljo orodje [Kaj kupite s proračunom](${v.strumento("budget")}); za razpon vrednosti posamezne hiše [Koliko je vredna vaša hiša](${v.strumento("valore")}).`,
      ],
    },
    {
      id: "vendite-vere",
      h2: "Zakaj v Italiji ni javnih median prodaj",
      blocchi: [
        "V Sloveniji javni register kupoprodaj prikazuje ceno skoraj vsake pogodbe in ga je mogoče prosto prenesti: na SloveniaVillas iz njega izračunavamo mediane. V Italiji je najbližji ustreznik storitev **»Consultazione valori immobiliari dichiarati«** (vpogled v prijavljene vrednosti nepremičnin) Agencije za prihodke[^3], ki deluje drugače:",
        {
          lista: [
            "zahteva prijavo s SPID, CIE ali CNS (ali z dostopnimi podatki Fisconline/Entratel);",
            "prikazuje pogodbe zadnjih petih let eno po eno, na zemljevidu;",
            "ne omogoča množičnega prenosa in na strani ne navaja odprte licence.",
          ],
        },
        "Za izračun median bi bila potrebna ročna zbirka in preverjanje pogojev uporabe. Dostopnih podatkov ne uporabljamo v imenu nikogar: zato danes cen kupoprodaj ob jezeru ne objavljamo.",
        "Tudi število kupoprodaj po posameznih občinah (občinski NTN) je mogoče prenesti brezplačno in z odprto licenco, a samo iz zaprtega območja Forniture dati OMI[^2]. Kdor ima digitalno identiteto, lahko to naredi sam.",
        "Nazadnje je tu še katastrska vrednost, ki služi za davke: pri prezzo-valore se davek na registracijo (imposta di registro) plača na njeno osnovo in ne na ceno[^5]. To je davčna vrednost, zelo oddaljena od trga, in je ne smete uporabljati za oceno hiše.",
      ],
    },
    {
      id: "volumi",
      h2: "Koliko hiš se proda: pokrajinski obsegi",
      blocchi: [
        "Kot okvir agencija v odprti obliki objavlja število normaliziranih transakcij (NTN) stanovanjskih nepremičnin, a samo za glavno mesto pokrajine in za vse druge občine posamezne pokrajine skupaj[^4]. Jezero Orta leži med dvema pokrajinama: Novara (Orta, Pettenasco, Pella, San Maurizio d'Opaglio, griči in južni konec) in Verbano-Cusio-Ossola (Omegna, Nonio, Quarna Sopra, Madonna del Sasso).",
        {
          tabella: {
            testa: ["Občine, ki niso glavno mesto pokrajine", "2023", "2024", "2025 (začasno)", "1. polletje 2026 (začasno)", "2025 glede na 2024"],
            num: [1, 2, 3, 4, 5],
            righe: [
              ["Pokrajina Novara", n(no.a2023, l), n(no.a2024, l), n(no.a2025, l), n(no.s2026, l), `+${pct(no.varPct, l)}`],
              ["Pokrajina VCO", n(vb.a2023, l), n(vb.a2024, l), n(vb.a2025, l), n(vb.s2026, l), `+${pct(vb.varPct, l)}`],
            ],
            didascalia: "Agenzia delle Entrate – OMI, Volumi di compravendita (RES.csv). NTN = normalizirane transakcije, torej sešteti lastniški deleži. Podatki za 2025 in 2026 so začasni.",
          },
        },
        "To so desetine občin, skoraj vse daleč od jezera: povedo, da se je pokrajinski trg premaknil, ne pa, koliko hiš je bilo prodanih ob bregovih.",
      ],
    },
  ],
  nonSappiamo: [
    "Dejansko plačane cene v pogodbah ob jezeru: storitev prijavljenih vrednosti zahteva digitalno identiteto in nima navedene odprte licence.",
    "Število kupoprodaj po posameznih občinah ob jezeru (občinski NTN), ki ga je mogoče prenesti samo iz zaprtega območja.",
    "Meje con OMI: poznamo jih samo iz besednega opisa.",
    "Kako so se ocene gibale v 1. polletju 2026, ki 6. oktobra 2026 še niso bile objavljene.",
    "Tipična razlika med cenami v oglasih in ocenami OMI ob jezeru: tega nismo izmerili.",
  ],
  faq: [
    { d: "Ali so ocene OMI cene, po katerih se hiše prodajajo?", r: "Ne. To so razponi v €/m² bruto površine, ki jih Agencija za prihodke oceni po homogenih conah in vrstah nepremičnin v prevladujočem stanju ohranjenosti. Niso povprečja niti mediane pogodb." },
    { d: "Koliko stane kvadratni meter hiše ob jezeru Orta?", r: `Odvisno od občine in cone. V 2. polletju 2025 je najvišja ocena za obalo jezera v Orti San Giulio z otokom: vile ${fq("orta-san-giulio", "B2", "ville", l)}. Na obali jezera v Pelli so vile ocenjene na ${fq("pella", "B2", "ville", l)}.` },
    { d: "Ali je mogoče izvedeti, za koliko je bila prodana določena hiša?", r: "Storitev »Consultazione valori immobiliari dichiarati« Agencije za prihodke prikazuje kupnine iz pogodb zadnjih petih let, eno po eno, tistim, ki se prijavijo s SPID, CIE ali CNS. To ni odprt podatek." },
    { d: "Zakaj OrtaVillas ne objavlja median kupoprodaj kot SloveniaVillas?", r: "Ker cen iz pogodb v Italiji ni mogoče prenesti v odprti obliki: pogledati jih je mogoče eno po eno z digitalno identiteto, brez navedene licence. Dostopnih podatkov ne uporabljamo v imenu nikogar." },
    { d: "Ali so ocene ob jezeru zrasle?", r: "Med 2. polletjem 2024 in 2. polletjem 2025 je OMI zvišal vse ocene stanovanjskih enot ob jezeru, za nekaj odstotnih točk na sredini razpona; vile so ostale nespremenjene v Omegni, Noniu, Quarni Sopra in Madonni del Sasso. To je gibanje ocene, ne prodaj." },
  ],
};
