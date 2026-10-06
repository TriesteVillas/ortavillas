import Link from "next/link";
import { assoluto, percorso, type Lingua } from "@/lib/rotte";
import type { Pagina } from "@/lib/risolvi";
import type { VocePagina } from "./tipi";
import { ORIGINI_ID, ORIGINI_SLUG, LUOGHI_SLUG, type OrigineId } from "@/content/indice";
import { NOMI_ORIGINI } from "@/content/titoli";
import { MONDI } from "@/content/mondi";
import { COLORE_MONDO } from "@/content/luoghi-base";
import { LUOGHI } from "@/lib/luoghi";
import { tempoDa, puntoOrigine, confrontoLaghi } from "@/lib/dati";
import { tempo, numero } from "@/lib/fmt";
import { JsonLd, briciole } from "@/components/JsonLd";
import { TempiDaCasaClient } from "@/components/TempiDaCasaClient";

type T = {
  titolo: string; descrizione: string; occhiello: string; h1: string; lead: string;
  cittaTitolo: string; tabellaTitolo: string; tutti: string; nota: string; colonne: [string, string, string, string]; rispetto: string; riferimento: string;
  laghiOcc: string; laghiH2: string; laghiLead: string; lago: string; daMilano: string; daMalpensa: string; laghiNota: string;
  c: { titolo: (c: string) => string; descrizione: (c: string, a: string, b: string) => string; occhiello: string; h1: (c: string, t: string) => string; lead: (c: string, km: string) => string;
    stradaOcc: string; stradaH2: string; stradaNota: string; uscite: string; luoghiOcc: string; luoghiH2: (c: string) => string; diff: string; daOrta: string; altre: string; locali: string };
};

const IT: T = {
  titolo: "Distanze: il lago d'Orta da Milano, Zurigo, Monaco", descrizione: "Quanto dista il lago d'Orta da Milano, Malpensa, Lugano, Zurigo, Basilea, Berna, Ginevra e Monaco: tempi OSRM senza traffico per ognuno dei 16 luoghi.",
  occhiello: "Distanze · 11 città di partenza", h1: "Il lago misurato in minuti, da casa vostra.",
  lead: "Undici città di partenza, sedici arrivi intorno al lago. Ogni tempo è calcolato con OSRM sulle strade di OpenStreetMap, senza traffico, il 6 ottobre 2026: un ordine di grandezza onesto, non una promessa.",
  cittaTitolo: "Ogni città ha la sua pagina", tabellaTitolo: "Tempi in auto: città di partenza per colonna, luoghi per riga", tutti: "Tutti i tempi, luogo per luogo",
  nota: "OSRM senza traffico, misurato il 6 ottobre 2026. Non contano code, cantieri, pedaggi né i controlli al confine svizzero: d'estate e nei fine settimana i tempi reali sono più lunghi.",
  colonne: ["Luogo", "Mondo", "Tempo in auto", "Chilometri"], rispetto: "rispetto a Milano", riferimento: "riferimento",
  laghiOcc: "A confronto", laghiH2: "Orta non è il lago più vicino a Milano. È vicino quanto il Maggiore.",
  laghiLead: "Stessa misura per tutti: OSRM senza traffico dalla stessa piazza e dallo stesso terminal, al centro del paese sul lago.",
  lago: "Lago", daMilano: "Da piazza del Duomo", daMalpensa: "Da Malpensa T1", laghiNota: "Como e Bellagio sul lago di Como, Stresa sul Maggiore, Sirmione sul Garda. OSRM, 6 ottobre 2026.",
  c: {
    titolo: (c) => `Da ${c} al lago d'Orta: tempi e strade`, descrizione: (c, a, b) => `Da ${c} ai 16 luoghi del lago d'Orta, fra ${a} e ${b} in auto senza traffico: la strada, le uscite, la differenza con Milano.`,
    occhiello: "Distanze", h1: (c, t) => `Da ${c} a Orta San Giulio: ${t}.`, lead: (c, km) => `${km} km di strada da ${c} al lago, senza traffico. Sotto, la strada tratto per tratto e il tempo per ognuno dei sedici luoghi.`,
    stradaOcc: "La strada", stradaH2: "Tratto per tratto", stradaNota: "Tratti con numero di strada lunghi almeno 1,5 km, dagli step di OSRM; uscite abbinate allo svincolo OpenStreetMap più vicino.", uscite: "Uscite",
    luoghiOcc: "All'arrivo", luoghiH2: (c) => `I sedici luoghi da ${c}`, diff: "rispetto a Milano", daOrta: "verso Orta San Giulio", altre: "Le altre città", locali: "strade locali",
  },
};

const EN: T = {
  titolo: "Distances: Lake Orta from Milan, Zurich, Munich", descrizione: "How far Lake Orta is from Milan, Malpensa, Lugano, Zurich, Basel, Bern, Geneva and Munich: OSRM drive times without traffic for each of the 16 places.",
  occhiello: "Distances · 11 starting cities", h1: "The lake measured in minutes, from your home.",
  lead: "Eleven starting cities, sixteen arrivals around the lake. Every time is computed with OSRM on OpenStreetMap roads, without traffic, on 6 October 2026: an honest order of magnitude, not a promise.",
  cittaTitolo: "Every city has its own page", tabellaTitolo: "Drive times: starting cities in columns, places in rows", tutti: "All times, place by place",
  nota: "OSRM without traffic, measured on 6 October 2026. Queues, roadworks, tolls and Swiss border checks are not included: in summer and at weekends real times are longer.",
  colonne: ["Place", "World", "Drive time", "Kilometres"], rispetto: "compared with Milan", riferimento: "reference",
  laghiOcc: "Compared", laghiH2: "Orta is not the nearest lake to Milan. It is as near as Lake Maggiore.",
  laghiLead: "The same measure for all: OSRM without traffic from the same square and the same terminal, to the centre of the lakeside town.",
  lago: "Lake", daMilano: "From Piazza del Duomo", daMalpensa: "From Malpensa T1", laghiNota: "Como and Bellagio on Lake Como, Stresa on Lake Maggiore, Sirmione on Lake Garda. OSRM, 6 October 2026.",
  c: {
    titolo: (c) => `From ${c} to Lake Orta: times and roads`, descrizione: (c, a, b) => `From ${c} to the 16 places of Lake Orta, ${a} to ${b} by car without traffic: the route, the exits, the difference with Milan.`,
    occhiello: "Distances", h1: (c, t) => `From ${c} to Orta San Giulio: ${t}.`, lead: (c, km) => `${km} km of road from ${c} to the lake, without traffic. Below, the route section by section and the time to each of the sixteen places.`,
    stradaOcc: "The route", stradaH2: "Section by section", stradaNota: "Numbered road sections of at least 1.5 km, from OSRM steps; exits matched to the nearest OpenStreetMap junction.", uscite: "Exits",
    luoghiOcc: "On arrival", luoghiH2: (c) => `The sixteen places from ${c}`, diff: "compared with Milan", daOrta: "to Orta San Giulio", altre: "The other cities", locali: "local roads",
  },
};

const DE: T = {
  titolo: "Entfernungen: der Ortasee ab Mailand, Zürich, München", descrizione: "Wie weit der Ortasee von Mailand, Malpensa, Lugano, Zürich, Basel, Bern, Genf und München entfernt ist: OSRM-Fahrzeiten ohne Verkehr zu jedem der 16 Orte.",
  occhiello: "Entfernungen · 11 Ausgangsstädte", h1: "Der See, gemessen in Minuten, von zu Hause.",
  lead: "Elf Ausgangsstädte, sechzehn Ziele rund um den See. Jede Zeit ist mit OSRM auf OpenStreetMap-Straßen berechnet, ohne Verkehr, am 6. Oktober 2026: eine ehrliche Größenordnung, kein Versprechen.",
  cittaTitolo: "Jede Stadt hat ihre eigene Seite", tabellaTitolo: "Fahrzeiten: Ausgangsstädte in Spalten, Orte in Zeilen", tutti: "Alle Zeiten, Ort für Ort",
  nota: "OSRM ohne Verkehr, gemessen am 6. Oktober 2026. Staus, Baustellen, Maut und Kontrollen an der Schweizer Grenze sind nicht berücksichtigt: Im Sommer und an Wochenenden sind die realen Zeiten länger.",
  colonne: ["Ort", "Welt", "Fahrzeit", "Kilometer"], rispetto: "im Vergleich zu Mailand", riferimento: "Referenz",
  laghiOcc: "Im Vergleich", laghiH2: "Orta ist nicht der nächste See zu Mailand. Er ist so nah wie der Lago Maggiore.",
  laghiLead: "Dasselbe Maß für alle: OSRM ohne Verkehr vom selben Platz und vom selben Terminal bis ins Zentrum des Seeortes.",
  lago: "See", daMilano: "Ab Piazza del Duomo", daMalpensa: "Ab Malpensa T1", laghiNota: "Como und Bellagio am Comer See, Stresa am Lago Maggiore, Sirmione am Gardasee. OSRM, 6. Oktober 2026.",
  c: {
    titolo: (c) => `Von ${c} zum Ortasee: Zeiten und Straßen`, descrizione: (c, a, b) => `Von ${c} zu den 16 Orten am Ortasee, ${a} bis ${b} mit dem Auto ohne Verkehr: die Strecke, die Ausfahrten, der Unterschied zu Mailand.`,
    occhiello: "Entfernungen", h1: (c, t) => `Von ${c} nach Orta San Giulio: ${t}.`, lead: (c, km) => `${km} km Straße von ${c} zum See, ohne Verkehr. Darunter die Strecke Abschnitt für Abschnitt und die Zeit zu jedem der sechzehn Orte.`,
    stradaOcc: "Die Strecke", stradaH2: "Abschnitt für Abschnitt", stradaNota: "Nummerierte Straßenabschnitte von mindestens 1,5 km aus den OSRM-Schritten; Ausfahrten der nächsten OpenStreetMap-Anschlussstelle zugeordnet.", uscite: "Ausfahrten",
    luoghiOcc: "Bei der Ankunft", luoghiH2: (c) => `Die sechzehn Orte ab ${c}`, diff: "im Vergleich zu Mailand", daOrta: "nach Orta San Giulio", altre: "Die anderen Städte", locali: "Ortsstraßen",
  },
};

const SL: T = {
  titolo: "Razdalje: jezero Orta iz Milana, Züricha, Münchna", descrizione: "Kako daleč je jezero Orta od Milana, Malpense, Lugana, Züricha, Basla, Berna, Ženeve in Münchna: časi vožnje OSRM brez prometa do vsakega od 16 krajev.",
  occhiello: "Razdalje · 11 izhodiščnih mest", h1: "Jezero, izmerjeno v minutah, od vašega doma.",
  lead: "Enajst izhodiščnih mest, šestnajst ciljev okoli jezera. Vsak čas je izračunan z OSRM na cestah OpenStreetMap, brez prometa, 6. oktobra 2026: pošten velikostni red, ne obljuba.",
  cittaTitolo: "Vsako mesto ima svojo stran", tabellaTitolo: "Časi vožnje: izhodiščna mesta v stolpcih, kraji v vrsticah", tutti: "Vsi časi, kraj za krajem",
  nota: "OSRM brez prometa, izmerjeno 6. oktobra 2026. Zastoji, dela na cesti, cestnine in kontrole na švicarski meji niso upoštevani: poleti in ob koncih tedna so dejanski časi daljši.",
  colonne: ["Kraj", "Svet", "Čas vožnje", "Kilometri"], rispetto: "glede na Milano", riferimento: "izhodišče",
  laghiOcc: "V primerjavi", laghiH2: "Orta ni jezero, ki je najbližje Milanu. Je enako blizu kot Lago Maggiore.",
  laghiLead: "Ista mera za vse: OSRM brez prometa z istega trga in istega terminala do središča kraja ob jezeru.",
  lago: "Jezero", daMilano: "S trga Piazza del Duomo", daMalpensa: "Z Malpense T1", laghiNota: "Como in Bellagio ob Komskem jezeru, Stresa ob Lago Maggiore, Sirmione ob Gardskem jezeru. OSRM, 6. oktober 2026.",
  c: {
    titolo: (c) => `Iz kraja ${c} do jezera Orta: časi in ceste`, descrizione: (c, a, b) => `Iz kraja ${c} do 16 krajev ob jezeru Orta, od ${a} do ${b} z avtom brez prometa: pot, izvozi, razlika glede na Milano.`,
    occhiello: "Razdalje", h1: (c, t) => `Iz kraja ${c} do Orte San Giulio: ${t}.`, lead: (c, km) => `${km} km ceste iz kraja ${c} do jezera, brez prometa. Spodaj pot odsek za odsekom in čas do vsakega od šestnajstih krajev.`,
    stradaOcc: "Pot", stradaH2: "Odsek za odsekom", stradaNota: "Oštevilčeni cestni odseki, dolgi vsaj 1,5 km, iz korakov OSRM; izvozi pripisani najbližjemu priključku OpenStreetMap.", uscite: "Izvozi",
    luoghiOcc: "Ob prihodu", luoghiH2: (c) => `Šestnajst krajev iz kraja ${c}`, diff: "glede na Milano", daOrta: "do Orte San Giulio", altre: "Druga mesta", locali: "lokalne ceste",
  },
};

const TT: Record<Lingua, T> = { it: IT, en: EN, de: DE, sl: SL };

function righe(l: Lingua) {
  return [...LUOGHI].sort((a, b) => a.daMilano - b.daMilano).map((x) => ({
    id: x.id, nome: x.nome, href: percorso(l, "luoghi", LUOGHI_SLUG[x.id][l]), mondo: MONDI[x.mondo][l].nome, colore: COLORE_MONDO[x.mondo].notte,
    tempi: Object.fromEntries(ORIGINI_ID.map((o) => { const r = tempoDa(o, x.id); return [o, r ? [r.minuti, r.km] : [NaN, NaN]]; })),
  }));
}

function Indice({ l }: { l: Lingua }) {
  const t = TT[l];
  const home = percorso(l, "home");
  const laghi = confrontoLaghi("milano").map((r) => ({ ...r, mal: confrontoLaghi("malpensa").find((x) => x.a === r.a) }));
  return (
    <>
      <JsonLd dati={briciole([{ nome: "OrtaVillas", url: assoluto(home) }, { nome: t.occhiello.split(" · ")[0] }])} />
      <JsonLd dati={{ "@context": "https://schema.org", "@type": "Dataset", name: t.h1, description: t.descrizione, inLanguage: l, dateModified: "2026-10-06", license: "https://opendatacommons.org/licenses/odbl/1-0/", isAccessibleForFree: true,
        creator: { "@id": "https://ortavillas.com/#organization" }, distribution: [{ "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: "https://ortavillas.com/csv/distanze.csv" }] }} />
      <section className="testata-notte">
        <div className="contenitore">
          <nav className="briciole"><Link href={home}>OrtaVillas</Link> / <span>{t.occhiello.split(" · ")[0]}</span></nav>
          <p className="occhiello">{t.occhiello}</p>
          <h1 className="t-display-l" style={{ maxWidth: "18ch" }}>{t.h1}</h1>
          <p className="t-lead">{t.lead}</p>
        </div>
      </section>
      <section className="sezione">
        <div className="contenitore">
          <p className="etichetta-campo">{t.cittaTitolo}</p>
          <ul className="schede" style={{ listStyle: "none", padding: 0 }}>
            {ORIGINI_ID.map((o) => {
              const r = tempoDa(o, "orta-san-giulio")!;
              return <li key={o}><Link className="scheda" href={percorso(l, "distanze", ORIGINI_SLUG[o][l])}><span className="t-h3">{NOMI_ORIGINI[o][l]}</span><p><b style={{ color: "var(--gold)", fontWeight: 500 }}>{tempo(r.minuti, l)}</b> · {numero(r.km, l)} km · {t.c.daOrta}</p></Link></li>;
            })}
          </ul>
          <TempiDaCasaClient l={l} righe={righe(l)} origini={ORIGINI_ID.map((o) => ({ id: o, nome: NOMI_ORIGINI[o][l] }))}
            t={{ tutti: t.tutti, tabella: t.tabellaTitolo, colonne: t.colonne, nota: t.nota, rispetto: t.rispetto, riferimento: t.riferimento }} />
        </div>
      </section>
      <section className="sezione">
        <div className="contenitore">
          <p className="occhiello">{t.laghiOcc}</p>
          <h2 className="t-display-l" style={{ maxWidth: "22ch" }}>{t.laghiH2}</h2>
          <p className="t-lead" style={{ marginBottom: 32 }}>{t.laghiLead}</p>
          <div className="tabella-scorre"><table className="tabella">
            <thead><tr><th scope="col">{t.lago}</th><th scope="col" className="num">{t.daMilano}</th><th scope="col" className="num">{t.daMalpensa}</th></tr></thead>
            <tbody>{laghi.sort((a, b) => a.minuti - b.minuti).map((r) => (
              <tr key={r.a} style={r.a === "orta-san-giulio" ? { background: "#e9c27a14" } : undefined}><th scope="row">{r.nome}</th><td className="num">{tempo(r.minuti, l)} · {numero(r.km, l)} km</td><td className="num">{r.mal ? `${tempo(r.mal.minuti, l)} · ${numero(r.mal.km, l)} km` : "—"}</td></tr>
            ))}</tbody>
          </table></div>
          <p className="nota-fonte">{t.laghiNota}</p>
        </div>
      </section>
    </>
  );
}

type Tratto = { ref: string | null; nome: string; km: number };
type Uscita = { cartello?: string; svincolo_osm?: { nome?: string | null } };

function Citta({ l, o }: { l: Lingua; o: OrigineId }) {
  const t = TT[l];
  const nome = NOMI_ORIGINI[o][l];
  const r = tempoDa(o, "orta-san-giulio")!;
  const home = percorso(l, "home");
  const tratti = (r.strade_principali ?? []) as Tratto[];
  const uscite = (r.uscite ?? []) as Uscita[];
  const lista = [...LUOGHI].sort((a, b) => (tempoDa(o, a.id)?.minuti ?? 0) - (tempoDa(o, b.id)?.minuti ?? 0));
  const p = puntoOrigine(o);
  return (
    <>
      <JsonLd dati={briciole([{ nome: "OrtaVillas", url: assoluto(home) }, { nome: t.c.occhiello, url: assoluto(percorso(l, "distanze")) }, { nome }])} />
      <section className="testata-notte">
        <div className="contenitore">
          <nav className="briciole"><Link href={home}>OrtaVillas</Link> / <Link href={percorso(l, "distanze")}>{t.c.occhiello}</Link> / <span>{nome}</span></nav>
          <p className="occhiello">{p.nome} · {p.lat.toFixed(3)}° N · {p.lon.toFixed(3)}° E</p>
          <h1 className="t-display-l" style={{ maxWidth: "20ch" }}>{t.c.h1(nome, tempo(r.minuti, l))}</h1>
          <p className="t-lead">{t.c.lead(nome, numero(r.km, l))}</p>
        </div>
      </section>
      <section className="sezione">
        <div className="contenitore griglia-2">
          <div>
            <p className="occhiello">{t.c.stradaOcc}</p>
            <h2 className="t-display-l" style={{ marginBottom: 28 }}>{t.c.stradaH2}</h2>
            <ol className="strada">
              <li className="strada-capo"><b>{nome}</b></li>
              {tratti.map((s, i) => (
                <li key={i} style={{ ["--peso" as string]: Math.max(1, Math.min(6, s.km / 15)) }}>
                  <span className="strada-ref">{s.ref ?? "—"}</span>
                  <span>{s.ref ? s.nome || "" : t.c.locali}</span>
                  <span className="num">{numero(s.km, l, 1)} km</span>
                </li>
              ))}
              <li className="strada-capo"><b>Orta San Giulio</b> · <span style={{ color: "var(--gold)" }}>{tempo(r.minuti, l)}</span></li>
            </ol>
            {uscite.length > 0 && (
              <p className="aiuto" style={{ marginTop: 16 }}>{t.c.uscite}: {uscite.map((u) => u.svincolo_osm?.nome || u.cartello).filter(Boolean).join(" · ")}</p>
            )}
            <p className="nota-fonte">{t.c.stradaNota}</p>
          </div>
          <div>
            <p className="occhiello">{t.c.luoghiOcc}</p>
            <h2 className="t-display-l" style={{ marginBottom: 28 }}>{t.c.luoghiH2(nome)}</h2>
            <ol className="barre">
              {lista.map((x) => {
                const m = tempoDa(o, x.id)?.minuti ?? 0;
                const d = m - x.daMilano;
                const max = tempoDa(o, lista[lista.length - 1].id)?.minuti ?? 1;
                return (
                  <li key={x.id} style={{ ["--c" as string]: COLORE_MONDO[x.mondo].notte, gridTemplateColumns: "150px 1fr 92px" }}>
                    <Link href={percorso(l, "luoghi", LUOGHI_SLUG[x.id][l])}>{x.nome}</Link>
                    <span className="barra"><i style={{ width: `${(m / max) * 100}%` }} /></span>
                    <span className="num" title={o === "milano" ? undefined : `${d >= 0 ? "+" : "−"}${Math.abs(d)} min ${t.c.diff}`}>{tempo(m, l)}</span>
                  </li>
                );
              })}
            </ol>
            <p className="nota-fonte">{t.nota}</p>
          </div>
        </div>
      </section>
      <section className="sezione">
        <div className="contenitore">
          <p className="etichetta-campo">{t.c.altre}</p>
          <p className="chips">{ORIGINI_ID.filter((x) => x !== o).map((x) => <Link key={x} className="chip" href={percorso(l, "distanze", ORIGINI_SLUG[x][l])}><span>{NOMI_ORIGINI[x][l]} · {tempo(tempoDa(x, "orta-san-giulio")!.minuti, l)}</span></Link>)}</p>
        </div>
      </section>
    </>
  );
}

export const distanze: VocePagina = {
  meta: (p: Pagina) => {
    const t = TT[p.lingua];
    if (!p.figlio) return { titolo: t.titolo, descrizione: t.descrizione, og: "distanze" };
    const o = p.figlio.id as OrigineId;
    const ts = LUOGHI.map((x) => tempoDa(o, x.id)?.minuti ?? 0);
    return { titolo: t.c.titolo(NOMI_ORIGINI[o][p.lingua]), descrizione: t.c.descrizione(NOMI_ORIGINI[o][p.lingua], tempo(Math.min(...ts), p.lingua), tempo(Math.max(...ts), p.lingua)), noindex: true, og: `origine-${o}` };
  },
  Corpo: ({ p }) => (p.figlio ? <Citta l={p.lingua} o={p.figlio.id as OrigineId} /> : <Indice l={p.lingua} />),
};
