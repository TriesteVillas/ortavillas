import type { Guida } from "../tipi";
import { vai } from "../link";

const v = vai("sl");

export const comprare: Guida = {
  titolo: "Nakup nepremičnine v Italiji za tuje kupce: vodnik za jezero Orta",
  descrizione: "Davčna številka, vzajemnost, ponudba, predpogodba in ara, notarski zapis pri notarju, ki ga izbere kupec, olajšava za prvi dom: koraki po vrsti, z uradnimi viri.",
  occhiello: "Glavni vodnik",
  h1: "Kako kupite nepremičnino v Italiji, korak za korakom",
  lead: "Kdor prihaja iz druge države Evropske unije, kupuje ob jezeru Orta pod enakimi pogoji kot Italijan; za druge odloča vzajemnost, ki jo je treba preveriti za vsak primer posebej. Zaporedje je vedno enako: davčna številka, ponudba, predpogodba z aro, notarski zapis pred notarjem. Tu je zapisano, kar pravijo viri, in kje se ustavijo.",
  inBreve: [
    "Državljani Evropske unije kupujejo nepremičnine v Italiji kot Italijani. Za druge velja pogoj vzajemnosti (16. člen predhodnih določb, preleggi): za Švico, Združeno kraljestvo in Združene države ga v uradnem viru nismo preverili.",
    "Potrebujete italijansko davčno številko (codice fiscale): iz tujine jo izda konzulat, sicer pa jo v Italiji zahteva pooblaščena oseba.",
    "V pokrajini Novara, kjer leži Orta San Giulio, običaj predvideva aro najmanj 10 % ob predpogodbi (compromesso), kupcu pa prepušča izbiro notarja in stroške pogodbe, razen če se stranki dogovorita drugače.",
    "Pri nakupu od zasebnika plačate davek na registracijo (imposta di registro) 9 % (2 % za prvi dom) ter 50 + 50 € hipotekarnega in katastrskega davka; pri »prezzo-valore« (cena–vrednost) je osnova katastrska vrednost, ne cena.",
    "Olajšava za prvi dom (prima casa) zahteva, da v 18 mesecih prijavite prebivališče v občini: za kupca, ki hišo obdrži kot drugo prebivališče, ne velja.",
    "Plačilo notarja od leta 2012 nima več fiksne tarife: zahtevate predračun.",
  ],
  sezioni: [
    {
      id: "chi-puo-comprare",
      h2: "Kdo lahko kupi",
      blocchi: [
        "Splošno pravilo je v 16. členu določb o zakonu na splošno: tujec je pripuščen k civilnim pravicam »pod pogojem vzajemnosti«, razen če posebni zakoni določajo drugače[^5]. V praksi so po strokovnih virih, ki smo jih prebrali, državljani Evropske unije izenačeni z Italijani in preverjanju niso podvrženi; za tiste, ki prihajajo izven Unije, brez pogodbe in brez dovoljenja za prebivanje, notar preveri vzajemnost v preglednicah italijanskega ministrstva za zunanje zadeve[^6].",
        "**Švica, Združeno kraljestvo, Združene države.** Uradna stran ministrstva za zunanje zadeve o vzajemnosti nam je 6. oktobra 2026 odgovorila s preverjanjem proti robotom, ki ga nismo obšli: prebrali je nismo. Sekundarni vir povezuje Švico z dvostranskim sporazumom o prostem pretoku iz leta 1999[^7], vendar tega nismo potrdili. Prosite notarja, naj vaše državljanstvo preveri v posodobljenih preglednicah pred ponudbo, ne šele ob podpisu pri notarju.",
        "**Za nakup prebivališče ni potrebno.** Nobeden od virov, ki smo jih pregledali, ga ne zahteva. Pomembno je samo za olajšavo za prvi dom (spodaj).",
      ],
    },
    {
      id: "codice-fiscale",
      h2: "1. korak: davčna številka",
      blocchi: [
        "Davčna številka (codice fiscale) je prvi dokument, ki ga boste potrebovali: za ponudbo, za bančni račun, za notarja. Kdor ne prebiva v Italiji, jo lahko zahteva na italijanskem konzularnem predstavništvu, pristojnem za njegovo prebivališče, ali pa pooblasti nekoga, ki vlogo odda na uradu Agencije za prihodke (Agenzia delle Entrate) v Italiji[^4].",
        "Roki in obrazci konzulatov se razlikujejo: stran ministrstva smo videli samo v povzetku, zato preverite na spletni strani svojega konzulata.",
      ],
    },
    {
      id: "proposta",
      h2: "2. korak: ponudba za nakup",
      blocchi: [
        "Običajno se začne s pisno ponudbo: kupec ponudi ceno, navede pogoje (kredit, ki ga mora dobiti, tehnični pregled, datum podpisa pri notarju) in jo za določen čas pusti nepreklicno. Če jo prodajalec pisno sprejme in sprejem prispe do kupca, je pogodba sklenjena pod zapisanimi pogoji: zato jo velja prebrati enako skrbno kot predpogodbo.",
        "Pred podpisom zahtevajte dokumente nepremičnine: izpisek (visura) in katastrski načrt, listino o izvoru lastništva, urbanistično stanje, energetsko izkaznico. V pogodbi prodajalec izjavi, da katastrski podatki in načrti ustrezajo dejanskemu stanju[^1]: če ne ustrezajo, je bolje, da to odkrijete pred plačilom are.",
        { nota: "Ta razdelek opisuje običajno prakso v Italiji; zakonskega člena ne navajamo, ker ponudba nima lastne ureditve, ločene od splošnih pravil o pogodbah, ki jih tu ne povzemamo." },
      ],
    },
    {
      id: "compromesso",
      h2: "3. korak: predpogodba in ara",
      blocchi: [
        "Predpogodba (compromesso, contratto preliminare) zavezuje stranki, da podpišeta notarski zapis kupoprodajne pogodbe (rogito) pod dogovorjenimi pogoji. Običajno kupec plača aro (caparra confirmatoria), ki ostane prodajalcu, če kupec posla ne sklene, in jo mora prodajalec vrniti v dvojnem znesku, če odstopi on.",
        "**Običaj v pokrajini Novara.** Pokrajinska zbirka običajev Gospodarske zbornice Novara (Camera di Commercio) predvideva, razen če je dogovorjeno drugače, aro ob predpogodbi v višini **najmanj 10 %** cene[^3]. To je običaj, ne zakon, zbirka pa je iz leta 2005: dogovorite se lahko drugače, in to je treba zapisati.",
        "Za Omegno, Nonio, Quarno Sopra in Madonno del Sasso, ki ležijo v pokrajini Verbano-Cusio-Ossola, zbirke običajev VCO nismo prebrali.",
        "Plačujte z bančnim nakazilom ali čekom, nikoli z gotovino: v pogodbi se navede tudi način plačila.",
      ],
    },
    {
      id: "rogito",
      h2: "4. korak: podpis pri notarju",
      blocchi: [
        "V Italiji lastništvo preide z javno listino pred notarjem, z notarskim zapisom kupoprodajne pogodbe (rogito). Notar preveri istovetnost strank, pregleda zemljiško knjigo, prebere pogodbo, pobere davke in jih nakaže državi, nato pogodbo vpiše.",
        "**Kdo izbere notarja.** Po običajih pokrajine Novara so stroški pogodbe **v breme kupca, ki izbere notarja**[^3].",
        "**Koliko stane.** Notarske tarife je odpravil 9. člen uredbe D.L. 1/2012: plačilo se dogovori in imate pravico do predračuna[^8]. »Tipičnega« odstotka ne objavljamo, ker nimamo uradnega vira, ki bi ga navajal.",
        "**Če ne govorite italijansko.** Pogodba je v italijanščini; če ena od strank jezika ne zna, je potreben tolmač in običajno vzporedni prevod. Vprašajte notarja, ko zahtevate predračun.",
      ],
    },
    {
      id: "imposte",
      h2: "5. korak: davki ob nakupu",
      blocchi: [
        "Davki so odvisni od tega, kdo prodaja[^1]:",
        {
          lista: [
            "**Od zasebnika** (prodaja, oproščena DDV): davek na registracijo (imposta di registro) **9 %** ali **2 %** za prvi dom (razen kategorij A/1, A/8, A/9), najmanj 1.000 €; hipotekarni in katastrski davek (imposta ipotecaria e catastale) **50 € + 50 €**[^1][^2].",
            "**Od podjetja z DDV (IVA)**: DDV **4 %** za prvi dom, **10 %** za druga stanovanja, **22 %** za A/1, A/8, A/9; davek na registracijo, hipotekarni in katastrski davek so fiksni, po **200 € vsak**[^1].",
          ],
        },
        "**Prezzo-valore.** Med fizičnimi osebami lahko kupec za stanovanjske nepremičnine in pripadajoče prostore notarja prosi, naj se davki izračunajo na katastrsko vrednost namesto na ceno: katastrski donos (rendita catastale) × 1,05 × **120** ali × **110** za prvi dom. Dejansko ceno je treba v pogodbo vseeno zapisati; če se prikrije, znaša kazen od 50 do 100 % razlike[^1].",
        `Izračun po postavkah, s primerom in primerjavo s Švico, Nemčijo in Avstrijo, je v vodniku [Stroški nakupa v primerjavi](${v.guida("costi")}).`,
      ],
    },
    {
      id: "prima-casa",
      h2: "Prvi dom in prebivališče v 18 mesecih",
      blocchi: [
        "Olajšava za prvi dom (prima casa) (davek na registracijo 2 % namesto 9 % ali DDV 4 % namesto 10 %) ob nakupu ne zahteva prebivališča, vendar mora tisti, ki v občini še ne prebiva, **tja prenesti prebivališče v 18 mesecih**, kar izjavi v pogodbi, sicer olajšavo izgubi[^1].",
        "Za kupca, ki kupi počitniško hišo in ostane prebivalec v tujini, je stopnja torej 9 % (ali DDV 10 %). Kdor se resnično namerava preseliti k jezeru, naj to pred podpisom pri notarju preuči z davčnim svetovalcem (commercialista): odločitev se sprejme v pogodbi.",
      ],
    },
    {
      id: "dopo",
      h2: "Po podpisu pri notarju: IMU in komunalne storitve",
      blocchi: [
        "Vsako leto se občini plača IMU (občinski davek na nepremičnine). V Orti San Giulio je za leto 2026 stopnja za »druge stavbe«, torej druge domove, **0,96 %**; za glavno prebivališče v kategorijah A/1, A/8 in A/9 je 0,55 % (sklep z dne 23. decembra 2025)[^9]. Druge občine ob jezeru imajo svoje sklepe, ki jih tu nismo prebrali.",
        "TARI (odpadki) je občinska tarifa: za Orto je nismo preverili.",
        `Če nameravate hišo oddajati, ko je ne uporabljate, so pravila v vodniku [Oddajanje hiše ob jezeru](${v.guida("affitti")}).`,
      ],
    },
    {
      id: "noi",
      h2: "Kaj delamo mi in česa ne",
      blocchi: [
        "TriesteVillas srl je v Italiji registrirana nepremičninska agencija in ob jezeru Orta **že lahko posreduje**. Danes pa ima Private Collection ob jezeru **0 nepremičnin**: nobena od teh strani ni oglas in ne bomo vam kazali nepremičnin, ki jih nimamo.",
        "Česar v nobenem primeru ne delamo: pravnega ali davčnega svetovanja. Za to potrebujete notarja, davčnega svetovalca ali odvetnika, ki ga izberete sami.",
      ],
    },
  ],
  nonSappiamo: [
    "Stanje vzajemnosti za švicarske, britanske in ameriške državljane: preglednica ministrstva za zunanje zadeve brez obhoda preverjanja proti robotom ni bila berljiva.",
    "Ali zbirka običajev Verbano-Cusio-Ossola (Omegna, Nonio, Quarna Sopra, Madonna del Sasso) predvideva enako aro in enako provizijo kot zbirka Novare.",
    "Tipično plačilo notarja za kupoprodajo ob jezeru: tarife ni in nismo našli uradnega vira, ki bi navajal povprečje.",
    "Roki in obrazci za davčno številko na posameznih konzulatih.",
    "Stopnje IMU za leto 2026 v občinah ob jezeru razen Orte San Giulio in TARI v Orti.",
    "Ali je bila zbirka običajev Novare iz leta 2005 od takrat posodobljena.",
  ],
  faq: [
    { d: "Ali lahko tujec kupi nepremičnino v Italiji?", r: "Da. Državljani Evropske unije kupujejo pod enakimi pogoji kot Italijani. Za druge velja pogoj vzajemnosti iz 16. člena predhodnih določb (preleggi), ki ga notar preveri v preglednicah ministrstva za zunanje zadeve. Za Švico, Združeno kraljestvo in Združene države ga v uradnem viru nismo preverili." },
    { d: "Ali za nakup potrebujem prebivališče v Italiji?", r: "Ne. Prebivališče je potrebno samo za olajšavo za prvi dom, ki zahteva, da ga v 18 mesecih po nakupu prenesete v občino." },
    { d: "Kolikšna je ara ob jezeru Orta?", r: "V pokrajini Novara običaj predvideva aro ob predpogodbi v višini najmanj 10 % cene, razen če je dogovorjeno drugače. To je običaj, ki ga je gospodarska zbornica zbrala leta 2005, ne zakonska obveznost." },
    { d: "Kdo izbere notarja?", r: "Po običajih pokrajine Novara kupec: stroški pogodbe so v njegovem breme. Plačilo se dogovori, ker so bile notarske tarife leta 2012 odpravljene." },
    { d: "Katere davke plača kupec, ki kupuje od zasebnika?", r: "Davek na registracijo 9 % (2 % za prvi dom), najmanj 1.000 €, ter 50 € hipotekarnega in 50 € katastrskega davka. Pri prezzo-valore je osnova katastrska vrednost: katastrski donos × 1,05 × 120 (× 110 za prvi dom)." },
    { d: "Ali lahko dobim olajšavo za prvi dom, če ostanem prebivalec v tujini?", r: "Ne, razen če v 18 mesecih po nakupu prenesete prebivališče v občino, kar morate izjaviti v pogodbi." },
    { d: "Mi lahko OrtaVillas pokaže nepremičnine naprodaj ob jezeru?", r: "Danes ne: Private Collection ob jezeru ima 0 nepremičnin. TriesteVillas srl je registrirana agencija in ob jezeru lahko posreduje; če se včlanite v Private Collection, vas obvestimo, ko pride prva nepremičnina." },
  ],
};
