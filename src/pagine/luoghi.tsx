import Link from "next/link";
import { assoluto, percorso, type Lingua } from "@/lib/rotte";
import type { Pagina } from "@/lib/risolvi";
import type { VocePagina } from "./tipi";
import { UI_LUOGHI } from "@/testi/luoghi-ui";
import { TESTI_LUOGHI, TESTI_MONDI } from "@/testi/luoghi";
import { MONDI } from "@/content/mondi";
import { MONDI_ID, LUOGHI_SLUG, MONDI_SLUG, ORIGINI_ID, type LuogoId, type MondoId } from "@/content/indice";
import { NOMI_ORIGINI } from "@/content/titoli";
import { COLORE_MONDO } from "@/content/luoghi-base";
import { SHELL } from "@/content/shell";
import { LUOGHI, luogo, luoghiDelMondo, perTempo, type Luogo } from "@/lib/luoghi";
import { tempoDa, omiComune } from "@/lib/dati";
import { tempo, numero } from "@/lib/fmt";
import viciniJson from "@/data/vicini.json";
import { Rilievo, type Etichetta } from "@/components/Rilievo";
import { JsonLd, briciole, organizzazione } from "@/components/JsonLd";
import { FotoAI, CreditoAI } from "@/components/FotoAI";
import { mediaDelLuogo, mediaDi, type Media } from "@/content/media";

const FOTO_MONDO: Record<MondoId, string> = { est: "orta-san-giulio", ovest: "pella", colline: "vacciago", capi: "omegna" };

const V = viciniJson as { ids: string[]; minuti: number[][]; km: number[][] };
const ore = (min: number, l: Lingua) => { const h = Math.floor(min / 60); const m = min % 60; return l === "de" ? `${h} Std. ${String(m).padStart(2, "0")} Min.` : `${h} h ${String(m).padStart(2, "0")} min`; };

function etichetteTutte(l: Lingua, evidenzia?: MondoId, daLuogo?: LuogoId): Etichetta[] {
  return LUOGHI.map((x) => {
    let sotto = tempo(x.daMilano, l);
    if (daLuogo) {
      const i = V.ids.indexOf(daLuogo), j = V.ids.indexOf(x.id);
      sotto = x.id === daLuogo ? "" : tempo(V.minuti[i][j], l);
    }
    return {
      id: x.id, testo: x.nome, sotto, lat: x.lat, lon: x.lon, colore: COLORE_MONDO[x.mondo].notte,
      href: percorso(l, "luoghi", LUOGHI_SLUG[x.id][l]), forte: x.id === daLuogo,
      strati: evidenzia && x.mondo !== evidenzia ? ["fuori"] : undefined,
    };
  });
}

function Carta({ l, posa, etichette, alt, altezza = "min(80vh, 760px)", strati }: { l: Lingua; posa: { lat: number; lon: number; zoom: number }; etichette: Etichetta[]; alt: string; altezza?: string; strati?: string[] }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ position: "relative", height: altezza, borderRadius: 4, overflow: "hidden", border: "1px solid var(--ink-3)" }}>
        <Rilievo posa={posa} etichette={etichette} alt={alt} strati={strati ?? ["tutti"]} />
      </div>
      <figcaption className="credito">{SHELL[l].colophon.fonti.rilievo} · {SHELL[l].colophon.fonti.osm} · {SHELL[l].colophon.fonti.osrm}</figcaption>
    </figure>
  );
}

function Schede({ l, lista }: { l: Lingua; lista: Luogo[] }) {
  const u = UI_LUOGHI[l];
  return (
    <ul className="schede" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {lista.map((x) => (
        <li key={x.id}>
          <Link className={`scheda${mediaDelLuogo(x.id) ? " scheda-con-foto" : ""}`} href={percorso(l, "luoghi", LUOGHI_SLUG[x.id][l])} style={{ ["--c" as string]: COLORE_MONDO[x.mondo].notte, borderTop: "3px solid var(--c)" }}>
            {mediaDelLuogo(x.id) && <FotoAI m={mediaDelLuogo(x.id)!} l={l} taglio="4x3" />}
            <span className="testo-scheda">
            <span className="t-h3">{x.nome}</span>
            {x.frazioneDi && <span className="t-data-label" style={{ color: "var(--fg-3)" }}>{u.frazione(x.frazioneDi)}</span>}
            <p><b style={{ color: "var(--gold)", fontWeight: 500 }}>{tempo(x.daMilano, l)}</b> {u.daMilano}</p>
            <p className="t-data">{u.quota} {numero(x.quota, l)} m · {u.sopraLago(x.sopraLago)}{x.abitanti ? ` · ${numero(x.abitanti, l)} ${u.abitanti}` : ""}</p>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Fonti({ l, fonti }: { l: Lingua; fonti: { titolo: string; url: string; data: string }[] }) {
  const u = UI_LUOGHI[l];
  if (!fonti.length) return null;
  return (
    <section className="sezione" id="fonti">
      <div className="contenitore">
        <p className="occhiello">{u.fonti}</p>
        <ol className="fonti-lista">
          {fonti.map((f, i) => <li key={i}><a href={f.url} rel="noopener">{f.titolo}</a> <span className="aiuto">· {u.fontiLetta} {f.data}</span></li>)}
        </ol>
      </div>
    </section>
  );
}

function Faq({ l, faq }: { l: Lingua; faq: { d: string; r: string }[] }) {
  const u = UI_LUOGHI[l];
  if (!faq.length) return null;
  return (
    <section className="sezione" id="domande">
      <div className="contenitore">
        <p className="occhiello">{u.domande}</p>
        <h2 className="t-display-l" style={{ marginBottom: 32 }}>{u.domandeH2}</h2>
        <div className="faq" style={{ maxWidth: 860 }}>
          {faq.map((f) => <details key={f.d}><summary>{f.d}</summary><div>{f.r.split(/\n{2,}/).map((par, i) => <p key={i}>{par}</p>)}</div></details>)}
        </div>
        <JsonLd dati={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.d, acceptedAnswer: { "@type": "Answer", text: f.r } })) }} />
      </div>
    </section>
  );
}

function PerChi({ l, titolo, si, no }: { l: Lingua; titolo: string; si: string[]; no: string[] }) {
  const u = UI_LUOGHI[l];
  if (!si.length && !no.length) return null;
  return (
    <section className="sezione" id="per-chi">
      <div className="contenitore">
        <p className="occhiello">{u.onestamente}</p>
        <h2 className="t-display-l" style={{ marginBottom: 32 }}>{titolo}</h2>
        <div className="schede">
          <div className="scheda"><h3 className="t-h3">{u.faPerVoi}</h3><ul className="rombi">{si.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div className="scheda"><h3 className="t-h3">{u.altrove}</h3><ul className="rombi">{no.map((x) => <li key={x}>{x}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}

function Cta({ l, dove, zona }: { l: Lingua; dove: string; zona: MondoId }) {
  const u = UI_LUOGHI[l];
  return (
    <section className="sezione cta-blocco">
      <div className="contenitore">
        <p className="occhiello">Private Collection · Lago d&apos;Orta</p>
        <h2 className="t-display-l" style={{ maxWidth: "20ch" }}>{u.ctaPCh2(dove)}</h2>
        <p className="t-lead">{u.ctaPCt}</p>
        <div className="bottoni" style={{ marginTop: 24 }}>
          <Link className="bottone bottone-primario" href={`${percorso(l, "pc")}#zone=${zona}&da=luogo`}>{u.ctaPCb} <span className="freccia">→</span></Link>
        </div>
        <p style={{ marginTop: 18 }}><Link className="link-freccia" href={percorso(l, "proprietari")}>{u.ctaProp(dove)} <span className="freccia">→</span></Link></p>
      </div>
    </section>
  );
}

function Testata({ l, crumbs, occhiello, h1, lead, children, sfondo, foto }: { l: Lingua; crumbs: { nome: string; href?: string }[]; occhiello: React.ReactNode; h1: string; lead?: string; children?: React.ReactNode; sfondo?: React.ReactNode; foto?: Media }) {
  return (
    <section className="testata-notte testata-luogo">
      {foto ? (
        <>
          <div className="testata-foto"><FotoAI m={foto} l={l} taglio="16x9" priorita /></div>
          <div className="testata-credito"><CreditoAI m={foto} l={l} /></div>
        </>
      ) : sfondo && <div className="testata-sfondo" aria-hidden="true">{sfondo}</div>}
      <div className="contenitore">
        <nav className="briciole" aria-label="breadcrumb">
          {crumbs.map((c, i) => <span key={i}>{c.href ? <Link href={c.href}>{c.nome}</Link> : c.nome}{i < crumbs.length - 1 && " /"}</span>)}
        </nav>
        <p className="occhiello">{occhiello}</p>
        <h1 className="t-display-l" style={{ maxWidth: "22ch" }}>{h1}</h1>
        {lead && <p className="t-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

// ── indice ───────────────────────────────────────────────────────────────
function Indice({ l }: { l: Lingua }) {
  const u = UI_LUOGHI[l];
  const home = percorso(l, "home");
  return (
    <>
      <JsonLd dati={briciole([{ nome: "OrtaVillas", url: assoluto(home) }, { nome: u.briciole }])} />
      <JsonLd dati={{ "@context": "https://schema.org", "@type": "CollectionPage", name: u.indice.h1, inLanguage: l, mainEntity: { "@type": "ItemList", numberOfItems: LUOGHI.length, itemListElement: LUOGHI.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.nome, url: assoluto(percorso(l, "luoghi", LUOGHI_SLUG[x.id][l])) })) } }} />
      <Testata l={l} crumbs={[{ nome: "OrtaVillas", href: home }, { nome: u.briciole }]} occhiello={u.indice.occhiello(LUOGHI.length, MONDI_ID.length)} h1={u.indice.h1} lead={u.indice.lead} foto={mediaDi("vacciago")} />
      <section className="sezione">
        <div className="contenitore">
          <div className="intestazione">
            <p className="occhiello">{u.indice.cartaOcc}</p>
            <h2 className="t-display-l">{u.indice.cartaH2}</h2>
            <p className="t-lead">{u.indice.cartaLead}</p>
          </div>
          <div className="griglia-2">
            <Carta l={l} posa={{ lat: 45.812, lon: 8.405, zoom: 2.1 }} etichette={etichetteTutte(l)} alt={u.indice.cartaH2} />
            <div>
              <p className="etichetta-campo">{u.mondi}</p>
              <ul className="mondi-lista">
                {MONDI_ID.map((m) => <li key={m}><Link href={percorso(l, "luoghi", MONDI_SLUG[m][l])} style={{ ["--c" as string]: COLORE_MONDO[m].notte }}><span className="nome">{MONDI[m][l].nome}</span><span className="sotto">{MONDI[m][l].sotto}</span></Link></li>)}
              </ul>
              <p className="aiuto">{u.confini}</p>
            </div>
          </div>
        </div>
      </section>
      {MONDI_ID.map((m) => (
        <section key={m} className="sezione" id={m}>
          <div className="contenitore">
            <div className="intestazione" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "end", gap: 16 }}>
              <div>
                <p className="occhiello" data-mondo="" style={{ ["--c" as string]: COLORE_MONDO[m].notte }}>{MONDI[m][l].sotto}</p>
                <h2 className="t-display-l">{MONDI[m][l].nome}</h2>
              </div>
              <Link className="link-freccia" href={percorso(l, "luoghi", MONDI_SLUG[m][l])}>{u.indice.tutto(MONDI[m][l].nome)} <span className="freccia">→</span></Link>
            </div>
            <Schede l={l} lista={perTempo(luoghiDelMondo(m))} />
          </div>
        </section>
      ))}
      <section className="sezione">
        <div className="contenitore">
          <Link className="scheda" href={percorso(l, "distanze")} style={{ maxWidth: 640 }}>
            <span className="t-data-label" style={{ color: "var(--sand-300)" }}>{u.indice.distanzeOcc}</span>
            <span className="t-h3">{u.indice.distanzeH2}</span>
            <p>{u.indice.distanzeTesto}</p>
          </Link>
        </div>
      </section>
      <Cta l={l} dove={l === "it" ? "sul lago d'Orta" : l === "en" ? "on Lake Orta" : l === "de" ? "am Ortasee" : "ob jezeru Orta"} zona={"est"} />
    </>
  );
}

// ── tabelle tempi ────────────────────────────────────────────────────────
function TabellaTempi({ l, lista, caption }: { l: Lingua; lista: Luogo[]; caption: string }) {
  const u = UI_LUOGHI[l];
  const origini = ["milano", "malpensa", "lugano", "zurigo", "ginevra", "monaco"] as const;
  return (
    <div className="tabella-scorre" tabIndex={0} role="region" aria-label={caption}>
      <table className="tabella">
        <caption>{caption}</caption>
        <thead><tr><th scope="col">{UI_LUOGHI[l].briciole}</th>{origini.map((o) => <th key={o} scope="col" className="num">{NOMI_ORIGINI[o][l]}</th>)}<th scope="col" className="num">{u.quota}</th></tr></thead>
        <tbody>
          {lista.map((x) => (
            <tr key={x.id}>
              <th scope="row"><Link href={percorso(l, "luoghi", LUOGHI_SLUG[x.id][l])}>{x.nome}</Link></th>
              {origini.map((o) => { const r = tempoDa(o, x.id); return <td key={o} className="num">{r ? tempo(r.minuti, l) : "—"}</td>; })}
              <td className="num">{numero(x.quota, l)} m</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Prezzi({ l, comuneId, titolo }: { l: Lingua; comuneId: string; titolo: string }) {
  const u = UI_LUOGHI[l];
  const c = omiComune(comuneId);
  if (!c) return null;
  const pct = (v?: number | null) => (v === null || v === undefined ? "—" : `${v > 0 ? "+" : ""}${numero(v, l, 1)}%`);
  return (
    <section className="sezione" id="prezzi">
      <div className="contenitore">
        <p className="occhiello">{u.prezziOcc}</p>
        <h2 className="t-display-l" style={{ marginBottom: 32 }}>{titolo}</h2>
        <div className="tabella-scorre" tabIndex={0} role="region" aria-label={titolo}>
          <table className="tabella">
            <caption>{c.comune} · OMI 2025/2</caption>
            <thead><tr><th scope="col">{u.zona}</th><th scope="col">{u.tipologia}</th><th scope="col" className="num">{u.eurMq}</th><th scope="col" className="num">{u.affitto}</th><th scope="col" className="num">{u.variazione}</th></tr></thead>
            <tbody>
              {c.zone.flatMap((z) => z.quotazioni_2025_2.map((q, i) => (
                <tr key={`${z.zona_omi}-${q.tipologia}`}>
                  {i === 0 ? <th scope="row" rowSpan={z.quotazioni_2025_2.length}>{z.zona_omi} · {z.descrizione.toLowerCase()}<br /><span className="aiuto">{z.fascia}</span></th> : null}
                  <td>{q.tipologia}</td>
                  <td className="num">{numero(q.eur_m2_min, l)}–{numero(q.eur_m2_max, l)}</td>
                  <td className="num">{q.affitto_eur_m2_mese_min ? `${numero(q.affitto_eur_m2_mese_min, l, 1)}–${numero(q.affitto_eur_m2_mese_max ?? 0, l, 1)}` : "—"}</td>
                  <td className="num">{pct(q.variazione_centro_intervallo_vs_2024_2_pct)}</td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
        <p className="nota-fonte">{u.prezziNota}</p>
      </div>
    </section>
  );
}

// ── mondo ────────────────────────────────────────────────────────────────
function Mondo({ l, m }: { l: Lingua; m: MondoId }) {
  const u = UI_LUOGHI[l];
  const t = TESTI_MONDI[m][l];
  const lista = perTempo(luoghiDelMondo(m));
  const home = percorso(l, "home");
  const centro = lista.reduce((a, x) => ({ lat: a.lat + x.lat / lista.length, lon: a.lon + x.lon / lista.length }), { lat: 0, lon: 0 });
  const comuni = [...new Set(lista.map((x) => x.comuneOmi))];
  return (
    <>
      <JsonLd dati={briciole([{ nome: "OrtaVillas", url: assoluto(home) }, { nome: u.briciole, url: assoluto(percorso(l, "luoghi")) }, { nome: MONDI[m][l].nome }])} />
      <JsonLd dati={{ "@context": "https://schema.org", "@type": "CollectionPage", name: t.h1, inLanguage: l, mainEntity: { "@type": "ItemList", numberOfItems: lista.length, itemListElement: lista.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.nome, url: assoluto(percorso(l, "luoghi", LUOGHI_SLUG[x.id][l])) })) } }} />
      <Testata l={l} crumbs={[{ nome: "OrtaVillas", href: home }, { nome: u.briciole, href: percorso(l, "luoghi") }, { nome: MONDI[m][l].nome }]}
        occhiello={<span style={{ ["--c" as string]: COLORE_MONDO[m].notte }}>{u.mondoChip(lista.length, tempo(lista[0].daMilano, l), tempo(lista[lista.length - 1].daMilano, l))}</span>}
        h1={t.h1} foto={mediaDi(FOTO_MONDO[m])}
        sfondo={<Rilievo posa={{ ...centro, zoom: 3 }} etichette={etichetteTutte(l, m)} strati={["tutti"]} alt="" />}>
        <dl className="striscia">
          {(["milano", "malpensa", "lugano", "zurigo"] as const).map((o) => {
            const ts = lista.map((x) => tempoDa(o, x.id)?.minuti ?? NaN);
            return <div key={o}><dt>{NOMI_ORIGINI[o][l]}</dt><dd>{tempo(Math.min(...ts), l)} – {tempo(Math.max(...ts), l)}</dd></div>;
          })}
          <div><dt>{u.quota}</dt><dd>{Math.min(...lista.map((x) => x.quota))}–{Math.max(...lista.map((x) => x.quota))} m</dd></div>
        </dl>
      </Testata>
      <section className="sezione" id="in-un-minuto">
        <div className="contenitore"><p className="occhiello">{u.inUnMinuto}</p>{t.minuto.split(/\n{2,}/).map((par, i) => <p key={i} className="t-lead" style={{ fontSize: "clamp(1.25rem, 1.1rem + .6vw, 1.6rem)", color: "var(--fg)", maxWidth: "52ch" }}>{par}</p>)}</div>
      </section>
      <section className="sezione" id="luoghi">
        <div className="contenitore">
          <p className="occhiello">{u.iLuoghi}</p>
          <h2 className="t-display-l" style={{ marginBottom: 32 }}>{u.luogoPerLuogo(MONDI[m][l].nome)}</h2>
          <Schede l={l} lista={lista} />
        </div>
      </section>
      {t.vivere.length > 0 && (
        <section className="sezione" id="come-si-vive">
          <div className="contenitore">
            <p className="occhiello">{u.comeSiVive}</p>
            <h2 className="t-display-l" style={{ marginBottom: 32 }}>{u.comeSiVive} {MONDI[m][l].inMondo}</h2>
            <div className="sezioni-testo">{t.vivere.map((v) => <div key={v.titolo}><h3 className="t-h3">{v.titolo}</h3>{v.testo.split(/\n{2,}/).map((par, i) => <p key={i}>{par}</p>)}</div>)}</div>
          </div>
        </section>
      )}
      <section className="sezione" id="tempi">
        <div className="contenitore">
          <p className="occhiello">{u.tempiOcc}</p>
          <h2 className="t-display-l" style={{ marginBottom: 32 }}>{u.tempiH2}</h2>
          <TabellaTempi l={l} lista={lista} caption={u.tempiCaption(MONDI[m][l].nome)} />
          <p className="nota-fonte">{u.osrmNota}</p>
          <div style={{ marginTop: 32 }}><Carta l={l} posa={{ ...centro, zoom: 3.2 }} etichette={etichetteTutte(l, m)} alt={MONDI[m][l].nome} altezza="min(70vh, 640px)" /></div>
          <p className="aiuto">{u.confini}</p>
        </div>
      </section>
      {comuni.map((c) => <Prezzi key={c} l={l} comuneId={c} titolo={u.prezziH2(omiComune(c)?.comune ? (l === "it" ? `a ${omiComune(c)!.comune}` : l === "sl" ? `za ${omiComune(c)!.comune}` : `${l === "de" ? "für" : "for"} ${omiComune(c)!.comune}`) : "")} />)}
      <PerChi l={l} titolo={u.perChiH2} si={t.perChi.si} no={t.perChi.no} />
      {t.confronto.righe.length > 0 && (
        <section className="sezione" id="confronto">
          <div className="contenitore">
            <p className="occhiello">{u.confrontoOcc}</p>
            <h2 className="t-display-l" style={{ marginBottom: 32 }}>{t.confronto.titolo}</h2>
            <div className="tabella-scorre"><table className="tabella"><thead><tr><th scope="col"></th><th scope="col">{MONDI[m][l].nome}</th><th scope="col">{t.confronto.altro}</th></tr></thead>
              <tbody>{t.confronto.righe.map(([a, b, c]) => <tr key={a}><th scope="row">{a}</th><td>{b}</td><td>{c}</td></tr>)}</tbody></table></div>
          </div>
        </section>
      )}
      <Faq l={l} faq={t.faq} />
      <Cta l={l} dove={MONDI[m][l].inMondo} zona={m} />
      <Fonti l={l} fonti={t.fonti} />
    </>
  );
}

// ── luogo ────────────────────────────────────────────────────────────────
function Luogo({ l, id }: { l: Lingua; id: LuogoId }) {
  const u = UI_LUOGHI[l];
  const x = luogo(id)!;
  const t = TESTI_LUOGHI[id][l];
  const home = percorso(l, "home");
  const ordine = LUOGHI.map((y) => y.id);
  const k = ordine.indexOf(id);
  const prec = k > 0 ? luogo(ordine[k - 1]) : null;
  const succ = k < ordine.length - 1 ? luogo(ordine[k + 1]) : null;
  const i = V.ids.indexOf(id);
  const vicini = V.ids.map((v, j) => ({ id: v as LuogoId, min: V.minuti[i][j], km: V.km[i][j] })).filter((v) => v.id !== id).sort((a, b) => a.min - b.min);
  const dove = x.in[l];
  return (
    <>
      <JsonLd dati={briciole([{ nome: "OrtaVillas", url: assoluto(home) }, { nome: u.briciole, url: assoluto(percorso(l, "luoghi")) }, { nome: MONDI[x.mondo][l].nome, url: assoluto(percorso(l, "luoghi", MONDI_SLUG[x.mondo][l])) }, { nome: x.nome }])} />
      <JsonLd dati={{ "@context": "https://schema.org", "@type": ["TouristDestination", "Place"], name: x.nome, url: assoluto(percorso(l, "luoghi", LUOGHI_SLUG[id][l])), description: t.frase, inLanguage: l,
        geo: { "@type": "GeoCoordinates", latitude: x.lat, longitude: x.lon, elevation: x.quota },
        containedInPlace: { "@type": "AdministrativeArea", name: `Comune di ${x.frazioneDi ?? x.nome}`, containedInPlace: { "@type": "Country", name: "Italia", identifier: "IT" } } }} />
      <Testata l={l} crumbs={[{ nome: "OrtaVillas", href: home }, { nome: u.briciole, href: percorso(l, "luoghi") }, { nome: MONDI[x.mondo][l].nome, href: percorso(l, "luoghi", MONDI_SLUG[x.mondo][l]) }, { nome: x.nome }]}
        occhiello={<>{tempo(x.daMilano, l)} · {numero(tempoDa("milano", id)?.km ?? 0, l)} km · {u.daMilano}</>}
        h1={x.nome} foto={mediaDelLuogo(id)}
        sfondo={<Rilievo posa={{ lat: x.lat, lon: x.lon, zoom: 4.2 }} etichette={etichetteTutte(l, undefined, id)} strati={["tutti"]} alt="" />}>
        <p style={{ marginTop: 18 }}>
          <Link className="chip" href={percorso(l, "luoghi", MONDI_SLUG[x.mondo][l])} style={{ ["--c" as string]: COLORE_MONDO[x.mondo].notte }}><span style={{ borderColor: "var(--c)" }}>{MONDI[x.mondo][l].nome} · {MONDI[x.mondo][l].sotto}</span></Link>
        </p>
        {x.frazioneDi && <p className="t-data-label" style={{ color: "var(--fg-3)", marginTop: 12 }}>{u.frazione(x.frazioneDi)}</p>}
      </Testata>

      <section className="sezione" id="in-una-frase">
        <div className="contenitore"><p className="occhiello">{u.inUnaFrase}</p><p className="t-lead" style={{ fontSize: "clamp(1.25rem, 1.1rem + .6vw, 1.6rem)", color: "var(--fg)", maxWidth: "52ch" }}>{t.frase}</p></div>
      </section>

      <section className="sezione" id="scheda">
        <div className="contenitore">
          <h2 className="t-display-l" style={{ marginBottom: 32 }}>{u.scheda}</h2>
          <div className="schede schede-dati">
            <div className="scheda">
              <h3 className="t-data-label" style={{ color: "var(--sand-300)", margin: 0 }}>{u.schedaAuto}</h3>
              <table className="tabella tabella-mini"><thead><tr><th>{u.da}</th><th className="num">{u.tempo}</th><th className="num">{u.km}</th></tr></thead>
                <tbody>{ORIGINI_ID.map((o) => { const r = tempoDa(o, id); return <tr key={o}><td>{NOMI_ORIGINI[o][l]}</td><td className="num">{r ? tempo(r.minuti, l) : "—"}</td><td className="num">{r ? numero(r.km, l) : "—"}</td></tr>; })}</tbody></table>
              <p className="aiuto">{u.schedaNota}</p>
            </div>
            <div className="scheda">
              <h3 className="t-data-label" style={{ color: "var(--sand-300)", margin: 0 }}>{u.quota}</h3>
              <span className="t-num-xl" style={{ color: "var(--gold)", fontSize: 56 }}>{numero(x.quota, l)} m</span>
              <p>{u.sopraLago(x.sopraLago)}{x.quotaMin !== undefined && x.quotaMax !== undefined ? ` · ${u.quotaIntorno(x.quotaMin, x.quotaMax)}` : ""}</p>
              <p className="aiuto">{u.quotaNota}</p>
              {x.soleDic && (
                <>
                  <h3 className="t-data-label" style={{ color: "var(--sand-300)", margin: "18px 0 0" }}>{u.soleTitolo}</h3>
                  <p>{u.soleTesto(ore(x.soleDic.minuti, l), x.soleDic.primo, x.soleDic.ultimo, ore(x.soleDic.teorici, l))}</p>
                  <p className="aiuto">{u.soleNota}</p>
                </>
              )}
            </div>
            <div className="scheda">
              <h3 className="t-data-label" style={{ color: "var(--sand-300)", margin: 0 }}>{u.serviziTitolo}</h3>
              <dl className="scheda-dati">
                {x.stazione && <div><dt>{u.stazione}</dt><dd>{x.stazione.nome} · {numero(x.stazione.km, l, 1)} km</dd></div>}
                {x.imbarcadero && <div><dt>{u.imbarcadero}</dt><dd>{x.imbarcadero.nome} · {numero(x.imbarcadero.km, l, 1)} km</dd></div>}
                <div><dt>{u.scuole}</dt><dd>{x.scuole.length ? [...new Set(x.scuole)].join(", ") : u.nessunaScuola}</dd></div>
                {x.abitanti && <div><dt>{u.abitanti}</dt><dd>{numero(x.abitanti, l)} · ISTAT 1/1/2025</dd></div>}
              </dl>
              <p className="aiuto">{u.lineaAria}</p>
              {(x.frane !== null || x.alluvioni !== null) && (
                <>
                  <h3 className="t-data-label" style={{ color: "var(--sand-300)", margin: "18px 0 0" }}>{u.rischiTitolo}</h3>
                  <dl className="scheda-dati">
                    {x.frane !== null && <div><dt>{u.frane}</dt><dd>{numero(x.frane, l, 1)}%</dd></div>}
                    {x.alluvioni !== null && <div><dt>{u.alluvioni}</dt><dd>{numero(x.alluvioni, l, 1)}%</dd></div>}
                  </dl>
                  <p className="aiuto">{u.rischiNota}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="sezione" id="distanze">
        <div className="contenitore griglia-2">
          <div>
            <p className="occhiello">{u.vicinoOcc}</p>
            <h2 className="t-display-l" style={{ marginBottom: 24 }}>{u.viciniH2(x.nome)}</h2>
            <div className="tabella-scorre"><table className="tabella"><caption>{u.viciniCaption(x.nome)}</caption>
              <thead><tr><th scope="col">{u.briciole}</th><th scope="col" className="num">{u.tempo}</th><th scope="col" className="num">{u.km}</th></tr></thead>
              <tbody>{vicini.map((v) => { const y = luogo(v.id)!; return <tr key={v.id}><th scope="row"><Link href={percorso(l, "luoghi", LUOGHI_SLUG[v.id][l])} style={{ ["--c" as string]: COLORE_MONDO[y.mondo].notte }} className="con-rombo">{y.nome}</Link></th><td className="num">{tempo(v.min, l)}</td><td className="num">{numero(v.km, l, 1)}</td></tr>; })}</tbody></table></div>
            <p className="nota-fonte">{u.viciniNota}</p>
            <p><Link className="link-freccia" href={percorso(l, "distanze")}>{u.tutteDistanze} <span className="freccia">→</span></Link></p>
          </div>
          <Carta l={l} posa={{ lat: x.lat, lon: x.lon, zoom: 3 }} etichette={etichetteTutte(l, undefined, id)} alt={u.viciniCaption(x.nome)} altezza="min(80vh, 720px)" />
        </div>
      </section>

      {t.vivere.length > 0 && (
        <section className="sezione" id="vivere-qui">
          <div className="contenitore">
            <p className="occhiello">{u.comeSiVive}</p>
            <h2 className="t-display-l" style={{ marginBottom: 32 }}>{u.vivere(dove)}</h2>
            <div className="sezioni-testo">{t.vivere.map((v) => <div key={v.titolo}><h3 className="t-h3">{v.titolo}</h3>{v.testo.split(/\n{2,}/).map((par, i) => <p key={i}>{par}</p>)}</div>)}</div>
            <p className="nota-fonte">{u.osrmNota}</p>
          </div>
        </section>
      )}

      <Prezzi l={l} comuneId={x.comuneOmi} titolo={u.prezziH2(dove)} />
      <PerChi l={l} titolo={u.faPerVoiH2(x.nome)} si={t.perChi.si} no={t.perChi.no} />
      <Faq l={l} faq={t.faq} />

      <nav className="sezione fermate" aria-label={u.briciole}>
        <div className="contenitore" style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          {prec ? <Link className="scheda" href={percorso(l, "luoghi", LUOGHI_SLUG[prec.id][l])}><span className="t-data-label">← {u.precedente}</span><span className="t-h3">{prec.nome}</span><span className="piede">{tempo(prec.daMilano, l)} {u.daMilanoBreve}</span></Link> : <span />}
          {succ ? <Link className="scheda" href={percorso(l, "luoghi", LUOGHI_SLUG[succ.id][l])} style={{ textAlign: "right" }}><span className="t-data-label">{u.successiva} →</span><span className="t-h3">{succ.nome}</span><span className="piede">{tempo(succ.daMilano, l)} {u.daMilanoBreve}</span></Link> : <span />}
        </div>
      </nav>

      <Cta l={l} dove={dove} zona={x.mondo} />
      <Fonti l={l} fonti={t.fonti} />
      <JsonLd dati={organizzazione(l)} />
    </>
  );
}

export const luoghi: VocePagina = {
  meta: (p: Pagina) => {
    const u = UI_LUOGHI[p.lingua];
    if (!p.figlio) return { titolo: u.indice.titolo, descrizione: u.indice.descrizione, og: "luoghi" };
    if (p.figlio.tipo === "mondo") { const t = TESTI_MONDI[p.figlio.id as MondoId][p.lingua]; return { titolo: t.titolo, descrizione: t.descrizione, og: `mondo-${p.figlio.id}` }; }
    const t = TESTI_LUOGHI[p.figlio.id as LuogoId][p.lingua];
    return { titolo: t.titolo, descrizione: t.descrizione, og: `luogo-${p.figlio.id}` };
  },
  Corpo: ({ p }) => {
    if (!p.figlio) return <Indice l={p.lingua} />;
    if (p.figlio.tipo === "mondo") return <Mondo l={p.lingua} m={p.figlio.id as MondoId} />;
    return <Luogo l={p.lingua} id={p.figlio.id as LuogoId} />;
  },
};
