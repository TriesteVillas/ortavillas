// Il template comune delle pagine strumento (server): briciole, occhiello, h1, lead, riga meta
// contata dai dati, calcolatore, «Come calcoliamo», fonti numerate, tabella statica,
// avvertenza, CTA per pubblico, «Gli altri strumenti». Imita sloveniavillas.com, senza il suo
// bug delle righe secondarie della CTA scambiate.
import Link from "next/link";
import { assoluto, percorso, type Lingua } from "@/lib/rotte";
import { STRUMENTI_ID, STRUMENTI_SLUG, type StrumentoId } from "@/content/indice";
import { TITOLI_STRUMENTI } from "@/content/titoli";
import { COMUNE, dataLunga } from "@/testi/strumenti/comune";
import { AGGIORNATO, FONTI, conteggio, dominio, type FonteId } from "@/lib/strumenti/regole";
import { JsonLd, briciole } from "@/components/JsonLd";

export const numeroStrumento = (id: StrumentoId) => String(STRUMENTI_ID.indexOf(id) + 1).padStart(2, "0");

export function RigaMeta({ l, fonti, data = AGGIORNATO }: { l: Lingua; fonti: FonteId[]; data?: string }) {
  const t = COMUNE[l];
  const c = conteggio(fonti);
  return (
    <p className="st-meta">
      {t.aggiornato(dataLunga(data, l))} · {t.fonti(c.fonti)}
      {c.inVerifica > 0 && <> · <span className="st-meta-verifica">{t.inVerifica(c.inVerifica)}</span></>}
    </p>
  );
}

export function ElencoFonti({ l, fonti }: { l: Lingua; fonti: FonteId[] }) {
  const t = COMUNE[l];
  const unici = [...new Set(fonti)];
  return (
    <ol className="st-fonti">
      {unici.map((id) => {
        const x = FONTI[id];
        return (
          <li key={id} id={`fonte-${id}`}>
            {x.url ? <a href={x.url} rel="noopener">{x.titolo}</a> : <span>{x.titolo}</span>}
            <span className="st-fonte-piede">
              {x.url ? dominio(x.url) : t.senzaLink} · {x.verificato ? `${t.letta} ${dataLunga(x.data, l)}` : <span className="st-meta-verifica">{t.inVerificaDal} {dataLunga(x.data, l)}</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

export function Avvertenza({ l }: { l: Lingua }) {
  const [b, testo] = COMUNE[l].avvertenza;
  return (
    <div className="st-avvertenza" role="note">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 10v5M12 17.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      <p><b>{b}</b> {testo}</p>
    </div>
  );
}

export function Cta({ l, pubblico }: { l: Lingua; pubblico: "compra" | "vende" }) {
  const t = COMUNE[l].cta[pubblico];
  // compratori → Private Collection; venditori → proprietari. La riga secondaria parla
  // all'altro pubblico e porta alla SUA pagina (su SV i due link erano scambiati).
  const principale = pubblico === "compra" ? percorso(l, "pc") : percorso(l, "proprietari");
  const secondaria = pubblico === "compra" ? percorso(l, "proprietari") : percorso(l, "pc");
  return (
    <section className="sezione st-cta">
      <div className="contenitore">
        <p className="occhiello">{t.occhiello}</p>
        <h2 className="t-display-l" style={{ maxWidth: "20ch" }}>{t.h2}</h2>
        <p className="t-lead" style={{ marginTop: 20 }}>{t.testo}</p>
        <div className="bottoni" style={{ marginTop: 28 }}>
          <Link className="bottone bottone-primario" href={principale}>{t.bottone} <span className="freccia">→</span></Link>
        </div>
        <p style={{ marginTop: 20 }}><Link className="link-freccia" href={secondaria}>{t.riga} <span className="freccia">→</span></Link></p>
      </div>
    </section>
  );
}

export function SchedaStrumento({ l, id }: { l: Lingua; id: StrumentoId }) {
  const t = TITOLI_STRUMENTI[id];
  const c = COMUNE[l];
  return (
    <li>
      <Link className="scheda st-scheda" href={percorso(l, "strumenti", STRUMENTI_SLUG[id][l])}>
        <span className="st-n">{numeroStrumento(id)}</span>
        <span className="t-h3">{t[l].titolo}</span>
        <p>{t[l].breve}</p>
        <span className="piede">{c.pubblico[t.pubblico]} · {c.apri} →</span>
      </Link>
    </li>
  );
}

export function Strumento(props: {
  l: Lingua; id: StrumentoId; h1: string; lead: string; descrizione: string; fonti: FonteId[];
  calcolatore: React.ReactNode; metodo: React.ReactNode; tabella?: React.ReactNode; dopo?: React.ReactNode; prima?: React.ReactNode;
}) {
  const { l, id } = props;
  const c = COMUNE[l];
  const t = TITOLI_STRUMENTI[id];
  const url = assoluto(percorso(l, "strumenti", STRUMENTI_SLUG[id][l]));
  return (
    <>
      <JsonLd dati={{ "@context": "https://schema.org", "@type": "WebPage", name: t[l].titolo, description: props.descrizione, inLanguage: l, url, isPartOf: { "@type": "WebSite", name: "OrtaVillas", url: "https://ortavillas.com" } }} />
      <JsonLd dati={briciole([{ nome: "OrtaVillas", url: assoluto(percorso(l, "home")) }, { nome: c.sezione, url: assoluto(percorso(l, "strumenti")) }, { nome: t[l].titolo }])} />
      <section className="testata-notte st-testata">
        <div className="contenitore">
          <nav className="briciole" aria-label={c.briciole}>
            <Link href={percorso(l, "home")}>OrtaVillas</Link><span aria-hidden="true">›</span>
            <Link href={percorso(l, "strumenti")}>{c.sezione}</Link><span aria-hidden="true">›</span>
            <span aria-current="page">{t[l].titolo}</span>
          </nav>
          <p className="occhiello">{c.strumento} {numeroStrumento(id)} <span className="st-pill">{c.pubblico[t.pubblico]}</span></p>
          <h1 className="t-display-l">{props.h1}</h1>
          <p className="t-lead">{props.lead}</p>
          <RigaMeta l={l} fonti={props.fonti} />
        </div>
      </section>
      {props.prima}
      <section className="sezione st-calcolo" aria-label={t[l].titolo}>
        <div className="contenitore">{props.calcolatore}</div>
      </section>
      {props.dopo}
      <section className="sezione">
        <div className="contenitore st-metodo">
          <div>
            <h2 className="t-h3 st-h2">{c.come}</h2>
            <div className="prosa prosa-notte st-prosa">{props.metodo}</div>
          </div>
          <div>
            <h2 className="t-h3 st-h2">{c.fontiTitolo}</h2>
            <ElencoFonti l={l} fonti={props.fonti} />
          </div>
        </div>
      </section>
      {props.tabella && (
        <section className="sezione">
          <div className="contenitore">{props.tabella}</div>
        </section>
      )}
      <div className="contenitore" style={{ paddingBottom: 8 }}><Avvertenza l={l} /></div>
      <Cta l={l} pubblico={t.pubblico} />
      <section className="sezione">
        <div className="contenitore">
          <h2 className="t-h3 st-h2">{c.altri}</h2>
          <ul className="schede st-schede">
            {STRUMENTI_ID.filter((x) => x !== id).map((x) => <SchedaStrumento key={x} l={l} id={x} />)}
          </ul>
        </div>
      </section>
    </>
  );
}
