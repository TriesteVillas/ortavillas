import type { Guida } from "../tipi";
import { vai } from "../link";
import { ES, eur, sulPrezzo } from "../dati";

const l = "sl" as const;
const v = vai(l);
const e = (x: number) => eur(x, l);
const p = (x: number) => sulPrezzo(x, l);

const itSeconda = ES.registro2 + ES.fisse;
const itPrima = ES.registro1 + ES.fisse;
const at = ES.atGrest + ES.atGb;

export const costi: Guida = {
  titolo: "Koliko stane nakup nepremičnine ob jezeru Orta: Italija, Švica, Nemčija, Avstrija",
  descrizione: "Davek na registracijo, prezzo-valore, DDV, notar, provizija in IMU za hišo ob jezeru Orta, postavka za postavko; ob tem davki ob nakupu v Avstriji, Nemčiji in Švici, kjer smo jih preverili.",
  occhiello: "Glavni vodnik",
  h1: "Koliko stane nakup hiše ob jezeru, postavka za postavko",
  lead: "V Italiji za kupca, ki kupuje od zasebnika, najtežja postavka ni prijavljena cena, temveč katastrska vrednost: na njej se izračuna davek na registracijo (imposta di registro). Tu so formule, primer za hišo za 600.000 € in primerjava s tem, kar smo lahko preverili v Avstriji, Nemčiji in Švici.",
  inBreve: [
    "Od zasebnika: davek na registracijo 9 % (2 % za prvi dom), najmanj 1.000 €, ter 50 + 50 € hipotekarnega in katastrskega davka. Od podjetja: DDV 10 % (4 % za prvi dom, 22 % za A/1, A/8, A/9) ter 600 € fiksnih davkov.",
    "Pri prezzo-valore (cena–vrednost) se 9 % uporabi na katastrsko vrednost (katastrski donos × 1,05 × 120), ne na ceno: za hišo za 600.000 € s katastrskim donosom (rendita catastale) 2.000 € znaša davek " + e(ES.registro2) + ".",
    "V pokrajini Novara običaj predvideva provizijo 3 % za vsako stranko, k čemur se prišteje DDV 22 %: " + e(ES.agenzia) + " pri 600.000 €.",
    "Notar od leta 2012 nima tarife: zahtevate predračun, v primeru pa ga ne prištevamo.",
    "Avstrija: davek na nakup 3,5 % ter 1,1 % za vpis v zemljiško knjigo (uradni vir, posodobljen 1. avgusta 2026). Nemčija: zvezna stopnja 3,5 %, glede na deželo do 6,5 %, v preverjanju. Švica: odvisno od kantona, v preverjanju.",
    "Vsako leto: IMU za druge domove v Orti San Giulio 0,96 % (2026).",
  ],
  sezioni: [
    {
      id: "da-privato",
      h2: "Italija, od zasebnika: davek na registracijo, hipotekarni, katastrski",
      blocchi: [
        "Kadar prodaja fizična oseba, je kupoprodaja oproščena DDV in kupec plača[^1][^2]:",
        {
          lista: [
            "**davek na registracijo (imposta di registro) 9 %** ali **2 %** za prvi dom (razen A/1, A/8, A/9), najmanj **1.000 €**;",
            "**hipotekarni davek 50 €** in **katastrski davek 50 €**.",
          ],
        },
        "**Prezzo-valore.** Med fizičnimi osebami lahko kupec za stanovanjske nepremičnine in pripadajoče prostore notarja prosi, naj bo davčna osnova katastrska vrednost: katastrski donos (rendita catastale) × 1,05 × **120** (drugi dom) ali × **110** (prvi dom). Dejansko ceno je treba v pogodbo vseeno zapisati: njeno prikrivanje se kaznuje s kaznijo od 50 do 100 % razlike[^1]. Pri hiši ob jezeru je katastrska vrednost skoraj vedno precej nižja od cene, zato prezzo-valore šteje več kot katera koli druga postavka.",
        `Katastrski donos je naveden v izpisku (visura): kako ga preberete in zakaj ni cena, pojasnjuje orodje [Od katastrske vrednosti do trga](${v.strumento("catasto")}).`,
      ],
    },
    {
      id: "da-impresa",
      h2: "Italija, od podjetja: DDV",
      blocchi: [
        "Če prodaja podjetje, ki obračunava DDV (IVA) (običajno gradbenik, pri novi ali prenovljeni hiši), kupec plača DDV na ceno: **4 %** za prvi dom, **10 %** za druga stanovanja, **22 %** za kategorije A/1, A/8, A/9. Davek na registracijo, hipotekarni in katastrski davek postanejo fiksni, po **200 € vsak**[^1]. Tu se prezzo-valore ne uporablja: plača se na polno ceno.",
      ],
    },
    {
      id: "notaio-agenzia",
      h2: "Notar in agencija",
      blocchi: [
        "**Notar.** Poklicne tarife je odpravil 9. člen uredbe D.L. 1/2012: plačilo se dogovori in notar mora dati predračun[^4]. Po običajih pokrajine Novara so stroški pogodbe v breme kupca, ki izbere notarja[^3]. Za »tipično« plačilo nimamo uradnega vira in si ga ne izmišljujemo.",
        "**Agencija.** V pokrajini Novara, kjer leži Orta San Giulio, pokrajinska zbirka običajev navaja, razen če je dogovorjeno drugače, provizijo **3 % za vsako stranko** od dejanske cene[^3]. To je običaj iz leta 2005, ne zakonska zgornja meja; prišteje se DDV 22 %. Za občine severne obale v pokrajini VCO (Omegna, Nonio, Quarna Sopra, Madonna del Sasso) zbirke običajev nismo prebrali.",
      ],
    },
    {
      id: "esempio",
      h2: "Primer: hiša za 600.000 € v štirih državah",
      blocchi: [
        `Predpostavke: cena **${e(ES.prezzo)}**, prodajalec zasebnik, kupec fizična oseba, brez kredita. Za Italijo potrebujemo katastrski donos: predpostavimo **${e(ES.rendita)}**, kar da katastrsko vrednost ${e(ES.valCat2)} za drugi dom in ${e(ES.valCat1)} za prvi dom. To ni donos resnične hiše: vašega najdete v izpisku, in ta spremeni vse.`,
        {
          tabella: {
            testa: ["Scenarij", "Davki in vpisi", "Agencija, delež kupca", "Znani skupni znesek", "Glede na ceno"],
            num: [1, 2, 3, 4],
            righe: [
              ["Italija, drugi dom od zasebnika, prezzo-valore", e(itSeconda), e(ES.agenzia), e(itSeconda + ES.agenzia), p(itSeconda + ES.agenzia)],
              ["Italija, ista hiša kot prvi dom", e(itPrima), e(ES.agenzia), e(itPrima + ES.agenzia), p(itPrima + ES.agenzia)],
              ["Italija, drugi dom od podjetja (DDV 10 %)", e(ES.ivaImpresa), e(ES.agenzia), e(ES.ivaImpresa + ES.agenzia), p(ES.ivaImpresa + ES.agenzia)],
              ["Avstrija", e(at), e(ES.atMakler), e(at + ES.atMakler), p(at + ES.atMakler)],
              ["Nemčija", "v preverjanju", "v preverjanju", "—", "—"],
              ["Švica", "v preverjanju", "v preverjanju", "—", "—"],
            ],
            didascalia: "V nobeni vrstici niso vključeni: notar ali odvetnik, prevodi, cenitve, obresti kredita. Za Nemčijo in Švico podatki niso dovolj preverjeni, da bi jih sešteli: znane postavke so v razdelkih spodaj.",
          },
        },
        `Kaj pove preglednica: pri prezzo-valore znaša italijanski davek za drugi dom ${p(itSeconda)} cene, manj od avstrijskega davka (${p(at)}), ker se izračuna na katastrsko vrednost, ki je precej nižja od cene. Brez predpostavke o katastrskem donosu primerjava ne zdrži: pri donosu 4.000 € se davek na registracijo podvoji.`,
        "V Avstriji se znanemu znesku prišteje odvetnik ali notar, ki sestavi pogodbo: uradni vir navaja približno 1–3 % cene[^6], torej med " + e(ES.atAvvMin) + " in " + e(ES.atAvvMax) + " za to hišo. Ne prištevamo ga, ker gre za razpon, ne za tarifo.",
        `Za izračun z vašimi številkami je na voljo orodje [Stroški nakupa v primerjavi](${v.strumento("costi")}).`,
      ],
    },
    {
      id: "austria",
      h2: "Avstrija: 3,5 % in 1,1 %",
      blocchi: [
        "Po uradnem portalu oesterreich.gv.at (posodobljen 1. avgusta 2026)[^6]:",
        {
          lista: [
            "**Grunderwerbsteuer** (davek na nakup nepremičnine) **3,5 %** cene;",
            "**vpis v zemljiško knjigo** (Eintragungsgebühr) **1,1 %** cene ter pristojbina za vlogo 85 €; če je vpisana hipoteka, vpis stane 1,2 % njene vrednosti;",
            "**najvišja provizija** posrednika, pri cenah nad 48.448,52 €, **3 %** ter DDV 20 %;",
            "**odvetnik ali notar**: približno 1–3 % cene, po tarifah posameznih zbornic.",
          ],
        },
        "Pravil za tuje kupce v Avstriji (zemljiških zakonov dežel) nismo prebrali.",
      ],
    },
    {
      id: "germania",
      h2: "Nemčija: od 3,5 % do 6,5 % glede na deželo",
      blocchi: [
        "Zvezni zakon o davku na nakup nepremičnin določa stopnjo **3,5 %** (§ 11 GrEStG)[^7]. Po sekundarnih virih lahko dežele (Länder) od leta 2006 določijo lastno stopnjo, Bavarska še vedno uporablja 3,5 %, Severno Porenje - Vestfalija pa od leta 2015 6,5 %[^8][^9]. Zakonov posameznih dežel nismo prebrali: zato Nemčija v preglednici ostaja »v preverjanju«.",
        "Notarja, zemljiške knjige in provizije v Nemčiji za to izdajo nismo ponovno izračunali na podlagi virov: zato nemška vrstica v preglednici nima skupnega zneska.",
      ],
    },
    {
      id: "svizzera",
      h2: "Švica: odloča kanton",
      blocchi: [
        "V Švici so davki in pristojbine za prenos lastništva kantonalni, včasih tudi občinski. Primer, prebran v viru: v **Ticinu** zakon o tarifah zemljiške knjige za vpis odplačnega prenosa predpisuje pristojbino **11 promilov** vrednosti (11. člen LTRF)[^10], torej 1,1 %.",
        "Na podlagi primarnega vira ne moremo povedati, kateri drugi davki ali notarske pristojbine se v Ticinu prištejejo, niti koliko stane nakup v Zürichu ali Bernu: Švica ostaja »v preverjanju«. Za tujce, ki kupujejo v Švici, velja poleg tega zvezni zakon, ki omejuje nakupe oseb iz tujine in ga tu nismo prebrali.",
      ],
    },
    {
      id: "ogni-anno",
      h2: "Vsako leto: IMU",
      blocchi: [
        "V Orti San Giulio za leto 2026 IMU (občinski davek na nepremičnine) za »druge stavbe«, torej druge domove, znaša **0,96 %**; za glavno prebivališče v luksuznih kategorijah A/1, A/8, A/9 **0,55 %**; za brezplačno posojilo (comodato) sorodnikom v prvem kolenu 0,56 % (sklep občinskega sveta št. 37 z dne 23. decembra 2025, preglednica MEF)[^5].",
        "Stopnja se uporabi na davčno osnovo IMU, ki se izračuna iz katastrskega donosa z lastnimi koeficienti, ki jih tu nismo ponovno prebrali: zato za primer ne navajamo letnega zneska.",
        `Če hišo oddajate, so davki na najemnine v vodniku [Oddajanje hiše ob jezeru](${v.guida("affitti")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Tipično plačilo notarja za kupoprodajo ob jezeru Orta.",
    "Običaji Verbano-Cusio-Ossola glede provizije in are za Omegno, Nonio, Quarno Sopra in Madonno del Sasso.",
    "Stopnje Grunderwerbsteuer, prebrane v zakonih posameznih dežel, ter nemški notarski stroški in stroški zemljiške knjige za hišo za 600.000 €.",
    "Skupni znesek nakupa v Ticinu, Zürichu ali Bernu, vključno z notarskimi in občinskimi pristojbinami; švicarska zvezna pravila za nakupe oseb iz tujine.",
    "Pravila avstrijskih dežel za tuje kupce.",
    "Davčna osnova IMU za hišo iz primera in stopnje za leto 2026 v občinah ob jezeru razen Orte San Giulio.",
  ],
  faq: [
    { d: "Koliko davkov plačam pri nakupu nepremičnine od zasebnika v Italiji?", r: "Davek na registracijo 9 % (2 % za prvi dom), najmanj 1.000 €, ter 50 € hipotekarnega in 50 € katastrskega davka. Pri prezzo-valore se 9 % uporabi na katastrsko vrednost (katastrski donos × 1,05 × 120), ne na ceno." },
    { d: "Kaj je prezzo-valore?", r: "To je pravilo, po katerem se pri prodaji stanovanjskih nepremičnin med fizičnimi osebami davki na kupčevo zahtevo pri notarju izračunajo na katastrsko vrednost namesto na ceno. Dejansko ceno je treba v pogodbo vseeno zapisati." },
    { d: "Ali pri nakupu od gradbenika plačam davek na registracijo?", r: "Ne: plača se DDV (4 % za prvi dom, 10 % za druga stanovanja, 22 % za A/1, A/8, A/9), davek na registracijo, hipotekarni in katastrski davek pa so fiksni, po 200 € vsak." },
    { d: "Koliko vzame agencija ob jezeru Orta?", r: "V pokrajini Novara je običaj, razen če je dogovorjeno drugače, 3 % za vsako stranko od dejanske cene ter DDV 22 %. To je običaj iz leta 2005, ne zakonska omejitev." },
    { d: "Ali je nakup v Avstriji dražji kot v Italiji?", r: "Odvisno od italijanske katastrske vrednosti. V Avstriji se plača 3,5 % davka in 1,1 % za vpis od cene; v Italiji pri prezzo-valore 9 % od katastrske vrednosti, ki je običajno precej nižja. V našem primeru za 600.000 € s katastrskim donosom 2.000 € je italijanski davek nižji." },
    { d: "Koliko znaša IMU za drugi dom v Orti San Giulio?", r: "Leta 2026 je stopnja za druge stavbe, torej druge domove, 0,96 % davčne osnove IMU." },
  ],
};
