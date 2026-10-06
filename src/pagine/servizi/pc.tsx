import Link from "next/link";
import type { VocePagina } from "../tipi";
import { percorso, type Lingua } from "@/lib/rotte";
import { GUIDE_SLUG, type GuidaId } from "@/content/indice";
import { TITOLI_GUIDE } from "@/content/titoli";
import { PC } from "@/testi/servizi/pc";
import { COMUNE } from "@/testi/servizi/comune";
import { ModuloPC } from "@/components/Moduli";
import { DomandeTesti, Intestazione, LdPagina, Stato, Tappe, TestataNotte } from "@/components/servizi/Parti";

const PC_TRIESTE = "https://triestevillas.com/private";
const GUIDE_GRAZIE: GuidaId[] = ["comprare", "costi", "quotazioni"];

function Grazie({ l }: { l: Lingua }) {
  const g = PC[l].grazie;
  return (
    <>
      <TestataNotte l={l} occhiello={g.occhiello} h1={g.h1} lead={g.testo} briciola={PC[l].briciola}>
        <div className="bottoni">
          <Link className="bottone bottone-primario" href={percorso(l, "home")}>{COMUNE[l].home} <span className="freccia">→</span></Link>
          <a className="bottone bottone-secondario" href={PC_TRIESTE} rel="noopener">{PC[l].tempi.boxLink} ↗</a>
        </div>
      </TestataNotte>
      <section className="sezione" id="guide"><div className="contenitore">
        <Intestazione occhiello={g.guideOcchiello} h2={g.guideH2} />
        <ul className="sv-griglia-guide">
          {GUIDE_GRAZIE.map((id) => (
            <li key={id}><Link className="scheda" href={percorso(l, "guide", GUIDE_SLUG[id][l])}><span className="t-h3">{TITOLI_GUIDE[id][l].titolo}</span><p>{TITOLI_GUIDE[id][l].breve}</p><span className="piede">→</span></Link></li>
          ))}
        </ul>
      </div></section>
    </>
  );
}

export const pc: VocePagina = {
  meta: (p) => {
    const t = PC[p.lingua];
    return p.grazie ? { titolo: t.grazie.titolo, descrizione: t.grazie.descrizione, noindex: true, og: "home" } : { titolo: t.titolo, descrizione: t.descrizione, og: "pc" };
  },
  Corpo: ({ p }) => {
    const l = p.lingua;
    if (p.grazie) return <Grazie l={l} />;
    const t = PC[l];
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="pc" nome={t.h1} descrizione={t.descrizione} />
        <TestataNotte l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} briciola={t.briciola}>
          <div className="bottoni">
            <a className="bottone bottone-primario" href="#iscrizione">{t.cta} <span className="freccia">→</span></a>
            <a className="bottone bottone-secondario" href={PC_TRIESTE} rel="noopener">{t.trieste} ↗</a>
          </div>
          <Stato l={l} />
          <p style={{ display: "flex", alignItems: "baseline", gap: 18, margin: "40px 0 0" }}>
            <span className="sv-zero">0</span><span style={{ color: "var(--fg-2)", maxWidth: "28ch" }}>{t.zero}</span>
          </p>
        </TestataNotte>

        <section className="sezione" id="che-cosa"><div className="contenitore">
          <Intestazione occhiello={t.cosa.occhiello} h2={t.cosa.h2} />
          <div className="sv-colonne" style={{ ["--n" as string]: 3 }}>
            {t.cosa.colonne.map((c, i) => (
              <div key={c.h3}>
                <p className="t-data-label" style={{ color: "var(--sand-300)", margin: 0 }}>{c.etichetta}</p>
                {i === 1 && <span className="sv-zero" style={{ marginTop: 12 }}>0</span>}
                <h3 className="t-h3">{c.h3}</h3>
                <p>{c.testo}</p>
              </div>
            ))}
          </div>
        </div></section>

        <section className="sezione" id="tempi"><div className="contenitore">
          <Intestazione occhiello={t.tempi.occhiello} h2={t.tempi.h2} />
          <Tappe voci={t.tempi.tappe} />
          <div className="scheda" style={{ marginTop: 40, maxWidth: 560 }}>
            <p style={{ color: "var(--fg)" }}>{t.tempi.box}</p>
            <a className="link-freccia" href={PC_TRIESTE} rel="noopener">{t.tempi.boxLink} ↗</a>
          </div>
        </div></section>

        <section className="sezione" id="iscrizione"><div className="contenitore griglia-2" style={{ alignItems: "start" }}>
          <div>
            <p className="occhiello">{t.iscrizione.occhiello}</p>
            <h2 className="t-display-l">{t.iscrizione.h2}</h2>
            <p className="t-lead" style={{ marginTop: 20 }}>{t.iscrizione.testo}</p>
            <ul className="sv-garanzie">{t.iscrizione.garanzie.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <ModuloPC l={l} variante="completo" fonte="OV · PC" privacy={percorso(l, "privacy")} />
        </div></section>

        <section className="sezione" id="domande"><div className="contenitore">
          <Intestazione occhiello={t.domande.occhiello} h2={t.domande.h2} />
          <DomandeTesti l={l} voci={t.domande.voci} />
        </div></section>
      </>
    );
  },
};
