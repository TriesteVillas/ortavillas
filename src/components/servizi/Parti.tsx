// I mattoni delle pagine di servizio e di edizione: testate, indice, recapiti, tappe, domande,
// JSON-LD della pagina. Componenti server: i testi arrivano già nella lingua giusta.
import Link from "next/link";
import { RECAPITI, SHELL, waLink } from "@/content/shell";
import { assoluto, percorso, type ChiavePagina, type Lingua } from "@/lib/rotte";
import { COMUNE } from "@/testi/servizi/comune";
import { JsonLd, organizzazione, briciole } from "@/components/JsonLd";
import { Rullo } from "@/components/Rullo";
import "@/app/css/servizi.css";

export type Voce = { titolo: string; testo: React.ReactNode };

/** Briciole visibili: OrtaVillas → pagina. */
export function Briciole({ l, nome }: { l: Lingua; nome: string }) {
  return (
    <nav className="briciole" aria-label="Breadcrumb">
      <Link href={percorso(l, "home")}>{SHELL[l].breadcrumbHome}</Link><span aria-hidden="true">/</span><span aria-current="page">{nome}</span>
    </nav>
  );
}

/** JSON-LD: Organization + la pagina (WebPage/AboutPage/ContactPage/…) + BreadcrumbList. */
export function LdPagina({ l, chiave, tipo = "WebPage", nome, breve, descrizione, extra = {}, figlio, altri = [] }: {
  l: Lingua; chiave: ChiavePagina; tipo?: string; nome: string; breve?: string; descrizione: string; extra?: object; figlio?: string; altri?: object[];
}) {
  const url = assoluto(percorso(l, chiave, figlio));
  const pagina = {
    "@type": tipo, "@id": `${url}#pagina`, url, name: nome, description: descrizione, inLanguage: l,
    isPartOf: { "@type": "WebSite", "@id": "https://ortavillas.com/#website", name: "OrtaVillas", url: "https://ortavillas.com" },
    publisher: { "@id": "https://ortavillas.com/#organization" },
    ...extra,
  };
  return (
    <>
      <JsonLd dati={organizzazione(l, false, [pagina, ...altri])} />
      <JsonLd dati={briciole([{ nome: SHELL[l].breadcrumbHome, url: assoluto(percorso(l, "home")) }, { nome: breve ?? nome, url }])} />
    </>
  );
}

/** Testata delle pagine «carta» (dati, ai, privacy, note legali, cookie). */
export function TestataCarta({ l, occhiello, h1, lead, aggiornato, briciola }: { l: Lingua; occhiello: string; h1: string; lead: React.ReactNode; aggiornato?: string; briciola: string }) {
  return (
    <header className="testata-carta">
      <div className="contenitore">
        <Briciole l={l} nome={briciola} />
        <p className="occhiello">{occhiello}</p>
        <h1 className="t-display-l">{h1}</h1>
        <p className="t-lead">{lead}</p>
        {aggiornato && <p className="aggiornato">{aggiornato}</p>}
      </div>
    </header>
  );
}

/** Corpo carta con l'indice «In questa pagina». */
export function CorpoCarta({ l, voci, children }: { l: Lingua; voci: [string, string][]; children: React.ReactNode }) {
  return (
    <div className="contenitore corpo-carta">
      <nav className="indice" aria-label={COMUNE[l].inQuestaPagina}>
        <p className="t-data-label">{COMUNE[l].inQuestaPagina}</p>
        <ol>{voci.map(([id, t]) => <li key={id}><a href={`#${id}`}>{t}</a></li>)}</ol>
      </nav>
      <div style={{ minWidth: 0 }}>{children}</div>
    </div>
  );
}

export function SezioneCarta({ id, titolo, children }: { id: string; titolo: string; children: React.ReactNode }) {
  return (
    <section className="sezione-carta" id={id} aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{titolo}</h2>
      <div className="prosa">{children}</div>
    </section>
  );
}

/** Testata delle pagine «notte». */
export function TestataNotte({ l, occhiello, h1, lead, briciola, children }: { l: Lingua; occhiello: string; h1: string; lead: React.ReactNode; briciola: string; children?: React.ReactNode }) {
  return (
    <section className="testata-notte">
      <div className="topo" style={{ backgroundImage: "url(/geo/rilievo-scuro-728.webp)" }} aria-hidden="true" />
      <div className="contenitore">
        <Briciole l={l} nome={briciola} />
        <p className="occhiello">{occhiello}</p>
        <h1 className="t-display-l">{h1}</h1>
        <p className="t-lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}

/** Intestazione di sezione notte. */
export function Intestazione({ occhiello, h2, lead, id }: { occhiello: string; h2: string; lead?: React.ReactNode; id?: string }) {
  return (
    <div className="intestazione">
      <p className="occhiello">{occhiello}</p>
      <h2 className="t-display-l" id={id}>{h2}</h2>
      {lead && <p className="t-lead">{lead}</p>}
    </div>
  );
}

export function Stato({ l }: { l: Lingua }) {
  return <p className="sv-stato">{COMUNE[l].statoRiga}</p>;
}

export const mailto = (oggetto?: string) => `mailto:${RECAPITI.email}${oggetto ? `?subject=${encodeURIComponent(oggetto)}` : ""}`;

export function BottoneWa({ l, testo, etichetta, primario = true }: { l: Lingua; testo: string; etichetta?: string; primario?: boolean }) {
  return <a className={`bottone ${primario ? "bottone-primario" : "bottone-secondario"}`} href={waLink(testo)} rel="noopener">{etichetta ?? COMUNE[l].scriveteciWa} <span className="freccia">→</span></a>;
}

/** Lista recapiti: WhatsApp, telefono, email (con oggetto), sede. */
export function Recapiti({ l, wa, oggetto, sede = true }: { l: Lingua; wa: string; oggetto?: string; sede?: boolean }) {
  const r = COMUNE[l].recapiti;
  return (
    <>
      <dl className="sv-recapiti">
        <div><dt>{r.whatsapp}</dt><dd><a href={waLink(wa)} rel="noopener">{RECAPITI.telefono}</a></dd></div>
        <div><dt>{r.telefono}</dt><dd><a href={`tel:${RECAPITI.tel}`}>{RECAPITI.telefono}</a></dd></div>
        <div><dt>{r.email}</dt><dd><a href={mailto(oggetto)}>{RECAPITI.email}</a></dd></div>
        {sede && <div><dt>{r.sede}</dt><dd>{r.sedeValore}</dd></div>}
      </dl>
      <p className="aiuto" style={{ marginTop: 14 }}>{COMUNE[l].lingueRisposta}</p>
    </>
  );
}

/** Tappe numerate in orizzontale (timeline). */
export function Tappe({ voci }: { voci: { quando: string; titolo: string; testo: string }[] }) {
  return (
    <ol className="sv-tappe">
      {voci.map((v) => (
        <li key={v.titolo}>
          <span className="sv-quando">{v.quando}</span>
          <h3 className="t-h3">{v.titolo}</h3>
          <p>{v.testo}</p>
        </li>
      ))}
    </ol>
  );
}

export function Domande({ voci }: { voci: Voce[] }) {
  return (
    <div className="faq">
      {voci.map((v) => (
        <details key={v.titolo}><summary>{v.titolo}</summary><div>{v.testo}</div></details>
      ))}
    </div>
  );
}

/** Contatori a rullo con la riga fonte. */
export function Contatori({ voci, fonte }: { voci: [string, string][]; fonte: string }) {
  return (
    <>
      <div className="numeri">
        {voci.map(([num, cosa]) => <div key={cosa} className="numero"><span className="valore t-num-xl"><Rullo testo={num} /></span><span className="cosa">{cosa}</span></div>)}
      </div>
      <p className="nota-fonte">{fonte}</p>
    </>
  );
}

/** Due colonne «sì / non ancora». */
export function SiNo({ titoli, si, no }: { titoli: [string, string]; si: string[]; no: string[] }) {
  return (
    <div className="sv-sino">
      <div><h3 className="t-h3">{titoli[0]}</h3><ul className="sv-si">{si.map((x) => <li key={x}>{x}</li>)}</ul></div>
      <div><h3 className="t-h3">{titoli[1]}</h3><ul className="sv-no">{no.map((x) => <li key={x}>{x}</li>)}</ul></div>
    </div>
  );
}

/** I link interni che i testi possono chiedere per nome. */
export type Dove = "privacy" | "cookie" | "stato" | "chiSiamo" | "agenzie" | "proprietari" | "presentazione" | "pc" | "iscrizione" | "dati" | "ai" | "contatti" | "luoghi" | "guide" | "noteLegali" | "triestePc" | "trieste";
export function dove(l: Lingua, d: Dove): string {
  switch (d) {
    case "stato": return `${percorso(l, "chiSiamo")}#stato`;
    case "presentazione": return `${percorso(l, "proprietari")}#presentazione`;
    case "iscrizione": return `${percorso(l, "pc")}#iscrizione`;
    case "triestePc": return "https://triestevillas.com/private";
    case "trieste": return "https://triestevillas.com";
    default: return percorso(l, d);
  }
}
export type Domanda = { d: string; r: string; link?: [string, Dove] };
export function DomandeTesti({ l, voci }: { l: Lingua; voci: Domanda[] }) {
  return (
    <Domande voci={voci.map((v) => ({
      titolo: v.d,
      testo: <p style={{ margin: 0 }}>{v.r}{v.link && <> <Collega l={l} a={v.link[1]}>{v.link[0]}</Collega></>}</p>,
    }))} />
  );
}
export function Collega({ l, a, children, className }: { l: Lingua; a: Dove; children: React.ReactNode; className?: string }) {
  const h = dove(l, a);
  return h.startsWith("http") ? <a className={className} href={h} rel="noopener">{children}</a> : <Link className={className} href={h}>{children}</Link>;
}

/** Un paragrafo con link scritti come [testo](dove) — dove è una chiave Dove, un'ancora #… o un URL. */
export function Testo({ l, s }: { l: Lingua; s: string }) {
  const parti: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s))) {
    if (m.index > i) parti.push(s.slice(i, m.index));
    const [, testo, a] = m;
    if (/^(https?:|mailto:|tel:|#)/.test(a)) parti.push(<a key={m.index} href={a} rel={a.startsWith("http") ? "noopener" : undefined}>{testo}</a>);
    else parti.push(<Collega key={m.index} l={l} a={a as Dove}>{testo}</Collega>);
    i = m.index + m[0].length;
  }
  if (i < s.length) parti.push(s.slice(i));
  return <>{parti}</>;
}

export type Blocco = string | { lista: string[] } | { dl: [string, string][] } | { nota: string };
export type SezioneLegale = { id: string; titolo: string; blocchi: Blocco[] };
export function Blocchi({ l, blocchi }: { l: Lingua; blocchi: Blocco[] }) {
  return (
    <>
      {blocchi.map((b, k) => {
        if (typeof b === "string") return <p key={k}><Testo l={l} s={b} /></p>;
        if ("lista" in b) return <ul key={k}>{b.lista.map((x) => <li key={x}><Testo l={l} s={x} /></li>)}</ul>;
        if ("dl" in b) return <dl key={k} className="dl">{b.dl.map(([dt, dd]) => <div key={dt}><dt>{dt}</dt><dd><Testo l={l} s={dd} /></dd></div>)}</dl>;
        return <p key={k} className="nota-box"><Testo l={l} s={b.nota} /></p>;
      })}
    </>
  );
}
