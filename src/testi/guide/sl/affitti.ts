import type { Guida } from "../tipi";
import { vai } from "../link";

const v = vai("sl");

export const affitti: Guida = {
  titolo: "Oddajanje hiše ob jezeru Orta: CIR, CIN, cedolare secca, pravila Piemonta",
  descrizione: "Turistično oddajanje ob jezeru Orta: prijava občini in 11-mestna številka CIR v 10 dneh, državna številka CIN od leta 2025, kazni, pavšalni davek (cedolare secca) 21 % in 26 %, prag dveh stanovanj od leta 2026.",
  occhiello: "Vodnik",
  h1: "Oddajanje hiše ob jezeru: pravila po vrstnem redu, v katerem jih potrebujete",
  lead: "Kdor hišo ob jezeru Orta oddaja turistom za obdobja do 30 dni, mora opraviti dve registraciji, deželno in državno, objaviti dve številki in izbrati, kako bo plačeval davke. Tu so pravila, prebrana v virih, in kje so viri iz druge roke.",
  inBreve: [
    "V Piemontu se turistično oddajanje do 30 zaporednih dni prijavi občini v 10 dneh od prve oddaje: občina dodeli 11-mestno številko CIR. Spremembe namembnosti ni treba.",
    "Številko CIR je treba objaviti v vsakem oglasu, na spletu in na papirju: kdor tega ne stori, tvega od 500 do 5.000 €, ob ponovitvi dvojno.",
    "Od 1. januarja 2025 je potrebna tudi državna številka CIN iz podatkovne zbirke ministrstva za turizem; kazni, ki jih navaja strokovni tisk, znašajo od 800 do 8.000 € za tiste, ki je ne zahtevajo.",
    "Pavšalni davek (cedolare secca) na kratkoročno oddajanje: 21 % za eno izbrano nepremičnino, 26 % za druge. Od leta 2026 režim velja do 2 stanovanj; nad tem se dejavnost šteje za podjetniško (sekundarni viri).",
    "Turistične takse v Orti San Giulio nismo našli: ne sklepa ne tarif.",
  ],
  sezioni: [
    {
      id: "che-cosa",
      h2: "Kaj je turistično oddajanje v Piemontu",
      blocchi: [
        "Okvir sta deželni zakon št. 13 z dne 3. avgusta 2017 in njegov pravilnik, D.P.G.R. št. 4/R z dne 8. junija 2018, ki v 14. členu ureja oddajanje v turistične namene za zaporedna obdobja **do 30 dni**[^1]. To ni nastanitveni obrat: ne sprememba namembnosti ne zahteve za hotel ali B&B niso potrebne.",
        "Nastanitveni obrati (hoteli, oddajanje sob, počitniške hiše, ki se vodijo kot podjetje) sledijo drugim pravilom in imajo številko CIR v drugačni obliki, na primer 001272-ALB-00282[^2]. Tu govorimo samo o zasebni hiši, oddani turistom.",
        { nota: "Sodba deželnega upravnega sodišča (TAR) za Piemont iz leta 2023 naj bi razveljavila nekatere določbe pravilnika: videli smo jo le navedeno v eni raziskavi in ne vemo, katerih členov se tiče. Vprašajte občino, katero različico uporablja." },
      ],
    },
    {
      id: "cir",
      h2: "1. korak: prijava občini in CIR",
      blocchi: [
        "**V 10 dneh od prve oddaje** se občini pošlje obrazec iz priloge H pravilnika[^1]. Občina dodeli **CIR**, deželno identifikacijsko številko, z **11 mesti**: 6 za kodo ISTAT občine in 5 zaporednih.",
        "Številka CIR mora biti vidna tudi na portalih. Od deželnega zakona št. 3 z dne 9. marca 2023 (124. člen) obveznost velja za **vsako promocijsko sporočilo, na spletu in v tiskani obliki**; kazen znaša **od 500 do 5.000 €**, ob ponovitvi dvojno[^2].",
        `Jezero leži v dveh pokrajinah (Novara in Verbano-Cusio-Ossola), dežela pa je ena: pravilo o CIR je enako v [Orti San Giulio](${v.luogo("orta-san-giulio")}) in v [Omegni](${v.luogo("omegna")}). Razlikujejo se občinski uradi, ki jim pišete.`,
      ],
    },
    {
      id: "cin",
      h2: "2. korak: državna številka CIN",
      blocchi: [
        "Od **1. januarja 2025** mora imeti vsaka enota, oddana v turistične namene, tudi **CIN**, državno identifikacijsko številko (člen 13-ter uredbe D.L. 145/2023), ki se zahteva v podatkovni zbirki nastanitvenih obratov ministrstva za turizem[^3].",
        "Po navedbah strokovnega tiska znašajo kazni **od 800 do 8.000 €** za tiste, ki je ne zahtevajo, in **od 500 do 5.000 €** za tiste, ki je ne objavijo[^3]. Besedila zakona nismo prebrali neposredno: te zneske upoštevajte kot okvirne.",
      ],
    },
    {
      id: "ospiti",
      h2: "3. korak: gostje",
      blocchi: [
        "Kdor gosti, mora osebne podatke gostov sporočiti kvesturi (Questura) prek portala Alloggiati Web državne policije (Polizia di Stato), v skladu s 109. členom enotnega besedila o javni varnosti; strokovni viri navajajo 24 ur od prihoda, 6 ur za krajša bivanja[^6].",
        "To pravilo smo prebrali samo v sekundarnem viru, v povzetku: pred prvim gostom preverite roke in način pri pristojni kvesturi.",
      ],
    },
    {
      id: "imposte",
      h2: "Davki: cedolare secca in prag dveh stanovanj",
      blocchi: [
        "Pri kratkoročnem oddajanju (do 30 dni) lahko lastnik, ki je fizična oseba, izbere **pavšalni davek (cedolare secca)**: **21 %** na najemnino ene same nepremičnine, ki jo izbere sam, in **26 %** na druge[^4][^5].",
        "**Od leta 2026** zakon o proračunu (zakon št. 199 z dne 30. decembra 2025, 1. člen, 17. odstavek) režim kratkoročnega oddajanja priznava samo tistim, ki v davčnem obdobju oddajajo **največ 2 stanovanji**: nad tem se dejavnost šteje za podjetniško[^4][^5]. Kakšen je bil prag prej, nismo preverili.",
        "Če gre oddaja prek portala ali posrednika, ki pobira plačila, ta zadrži **21 %** kot akontacijo[^4].",
        { nota: "Ves ta odstavek izhaja iz sekundarnih virov (davčne revije, maj 2026): vodnik Agencije za prihodke (Agenzia delle Entrate) in besedilo na Normattivi se nista naložila, ko smo ju iskali. Predlog iz jeseni 2025, ki je 21 % pridržal za tiste, ki ne uporabljajo platform, po navedbah istih virov ni prišel v končno besedilo." },
        "Za tiste, ki prebivajo v tujini, je usklajevanje teh davkov z davki v lastni državi odvisno od konvencij o izogibanju dvojnemu obdavčevanju: to je stvar davčnega svetovalca (commercialista) in je tu ne povzemamo.",
      ],
    },
    {
      id: "soggiorno",
      h2: "Turistična taksa",
      blocchi: [
        "Nekatere občine od gostov zahtevajo turistično takso, ki jo lastnik pobere in nakaže. Za **Orto San Giulio** nismo našli ne sklepa ne tarif, niti na spletni strani občine niti na portalu ministrstva za gospodarstvo in finance: ne moremo povedati, ali se uporablja in koliko znaša. Enako velja za druge občine ob jezeru.",
      ],
    },
    {
      id: "conti",
      h2: "Preden začnete računati",
      blocchi: [
        "Donos, izračunan tako, da tarifo pomnožite s 365 nočmi, je izmišljotina: jezero ima sezono, prazne noči pa se ne pojavijo v nobeni tarifi. Donosov ne objavljamo, ker za jezero nimamo zanesljivih podatkov o zasedenosti.",
        `Če še izbirate, kje kupiti, so časi vožnje iz Milana, z Malpense in iz Švice v vodniku [Kako priti](${v.guida("arrivare")}); davki ob nakupu v vodniku [Stroški nakupa v primerjavi](${v.guida("costi")}).`,
      ],
    },
  ],
  nonSappiamo: [
    "Katere člene pravilnika 4/R je deželno upravno sodišče (TAR) za Piemont leta 2023 razveljavilo, če jih je.",
    "Besedilo člena 13-ter uredbe D.L. 145/2023 in kazni v zvezi s CIN, prebrano v primarnem viru.",
    "Vodnik Agencije za prihodke za leto 2026 o kratkoročnem oddajanju, prebran neposredno, in prag, ki je veljal pred letom 2026.",
    "Roki in način sporočanja podatkov o gostih, prebrani v viru državne policije.",
    "Ali Orta San Giulio in druge občine ob jezeru uporabljajo turistično takso in po kakšnih tarifah.",
    "Podatki o zasedenosti in povprečne tarife hiš, oddanih ob jezeru.",
  ],
  faq: [
    { d: "Kaj je CIR v Piemontu?", r: "Deželna identifikacijska številka, ki jo občina dodeli tistemu, ki prijavi turistično oddajanje: 11 mest, 6 za kodo ISTAT občine in 5 zaporednih. Objaviti jo je treba v vsakem oglasu." },
    { d: "Do kdaj je treba turistično oddajanje prijaviti občini?", r: "V 10 dneh od prve oddaje, z obrazcem iz priloge H deželnega pravilnika 4/R iz leta 2018." },
    { d: "Ali potrebujem tudi CIN?", r: "Da, od 1. januarja 2025: to je državna številka, ki se zahteva v podatkovni zbirki nastanitvenih obratov ministrstva za turizem, poleg deželne številke CIR." },
    { d: "Koliko znaša pavšalni davek (cedolare secca) na kratkoročno oddajanje?", r: "21 % za eno nepremičnino, ki jo izbere lastnik, 26 % za druge. Od leta 2026 režim kratkoročnega oddajanja velja do 2 stanovanj; nad tem se dejavnost šteje za podjetniško. Ti podatki so prebrani v sekundarnih davčnih virih." },
    { d: "Ali je v Orti San Giulio turistična taksa?", r: "Ne vemo: nismo našli ne sklepa ne tarif. Vprašajte občino." },
  ],
};
