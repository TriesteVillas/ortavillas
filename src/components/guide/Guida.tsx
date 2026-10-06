// Il modello di una guida, su carta: testata, indice, sezioni, «che cosa non sappiamo»,
// domande, fonti numerate, altre guide, CTA. JSON-LD Article + BreadcrumbList + FAQPage.
import Link from "next/link";
import { percorso, assoluto, type Lingua } from "@/lib/rotte";
import { GUIDE_SLUG, type GuidaId } from "@/content/indice";
import { TITOLI_GUIDE } from "@/content/titoli";
import { GUIDE_TESTI } from "@/testi/guide/comuni";
import { FONTI } from "@/testi/guide/fonti";
import { guida, SCHEDE } from "@/testi/guide";
import { AGGIORNATA } from "@/testi/guide/dati";
import type { Blocco } from "@/testi/guide/tipi";
import { JsonLd, organizzazione, briciole } from "@/components/JsonLd";
import { Inline, piano } from "./Inline";
import { DATA_LUNGA, minutiLettura } from "./comune";
import { SchedeGuide } from "./SchedeGuide";
import { CtaGuide } from "./CtaGuide";

function Blocchi({ blocchi, ef }: { blocchi: Blocco[]; ef: (n: number) => string }) {
  return (
    <>
      {blocchi.map((b, i) => {
        if (typeof b === "string") return <p key={i}><Inline testo={b} etichettaFonte={ef} /></p>;
        if ("h3" in b) return <h3 key={i}>{b.h3}</h3>;
        if ("nota" in b) return <p key={i} className="nota-box"><Inline testo={b.nota} etichettaFonte={ef} /></p>;
        if ("lista" in b) {
          const voci = b.lista.map((v, j) => <li key={j}><Inline testo={v} etichettaFonte={ef} /></li>);
          return b.numerata ? <ol key={i}>{voci}</ol> : <ul key={i}>{voci}</ul>;
        }
        const t = b.tabella;
        const num = new Set(t.num ?? []);
        return (
          <figure key={i} className="guida-tabella">
            <div className="tabella-scorre" tabIndex={0} role="region" aria-label={t.testa.filter(Boolean).join(", ")}>
              <table className="tabella">
                <thead><tr>{t.testa.map((h, j) => <th key={j} scope="col" className={num.has(j) ? "num" : undefined}>{h}</th>)}</tr></thead>
                <tbody>
                  {t.righe.map((r, j) => (
                    <tr key={j}>{r.map((c, k) => (k === 0 ? <th key={k} scope="row">{c}</th> : <td key={k} className={num.has(k) ? "num" : undefined}><Inline testo={c} etichettaFonte={ef} /></td>))}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            {t.didascalia && <figcaption className="nota-fonte">{t.didascalia}</figcaption>}
          </figure>
        );
      })}
    </>
  );
}

export function PaginaGuida({ id, l }: { id: GuidaId; l: Lingua }) {
  const g = guida(id, l);
  const T = GUIDE_TESTI[l];
  const fonti = FONTI[id];
  const scheda = SCHEDE.find((s) => s.id === id)!;
  const ef = (n: number) => `${T.rimando(n)}: ${fonti[n - 1]?.etichetta ?? ""}`;
  const minuti = minutiLettura(g);
  const data = DATA_LUNGA[l](AGGIORNATA);
  const url = assoluto(percorso(l, "guide", GUIDE_SLUG[id][l]));
  const breve = TITOLI_GUIDE[id][l].titolo;

  const indice = [
    { id: "in-breve", nome: T.inBreve },
    ...g.sezioni.map((s) => ({ id: s.id, nome: s.h2 })),
    { id: "non-sappiamo", nome: T.nonSappiamo },
    { id: "domande", nome: T.domande },
    { id: "fonti", nome: T.fontiTitolo },
  ];

  const articolo = {
    "@type": "Article", "@id": `${url}#articolo`, headline: g.h1, description: g.descrizione, url, inLanguage: l,
    datePublished: AGGIORNATA, dateModified: AGGIORNATA, isAccessibleForFree: true,
    author: { "@id": "https://ortavillas.com/#organization" }, publisher: { "@id": "https://ortavillas.com/#organization" },
    citation: fonti.map((f) => f.url),
  };
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage", "@id": `${url}#faq`, inLanguage: l,
    mainEntity: g.faq.map((f) => ({ "@type": "Question", name: f.d, acceptedAnswer: { "@type": "Answer", text: piano(f.r) } })),
  };

  return (
    <article className="guida">
      <JsonLd dati={organizzazione(l, false, [articolo])} />
      <JsonLd dati={briciole([{ nome: "OrtaVillas", url: assoluto(percorso(l, "home")) }, { nome: T.sezione, url: assoluto(percorso(l, "guide")) }, { nome: breve }])} />
      <JsonLd dati={faq} />

      <header className="testata-carta">
        <div className="contenitore">
          <nav className="briciole" aria-label="Breadcrumb">
            <Link href={percorso(l, "home")}>OrtaVillas</Link><span aria-hidden="true">›</span>
            <Link href={percorso(l, "guide")}>{T.sezione}</Link><span aria-hidden="true">›</span>
            <span aria-current="page">{breve}</span>
          </nav>
          <p className="occhiello">{g.occhiello}</p>
          <h1 className="t-display-l">{g.h1}</h1>
          <p className="t-lead">{g.lead}</p>
          <p className="guida-riga t-data"><time dateTime={AGGIORNATA}>{T.aggiornata} {data}</time> · {T.fonti(fonti.length)} · {T.minuti(minuti)}</p>
        </div>
      </header>

      <div className="contenitore corpo-carta">
        <nav className="indice" aria-label={T.inQuestaPagina}>
          <p className="t-data-label">{T.inQuestaPagina}</p>
          <ol>{indice.map((x) => <li key={x.id}><a href={`#${x.id}`}>{x.nome}</a></li>)}</ol>
        </nav>

        <div className="guida-corpo">
          <section className="sezione-carta guida-in-breve" id="in-breve">
            <h2>{T.inBreve}</h2>
            <ul>{g.inBreve.map((x, i) => <li key={i}><Inline testo={x} etichettaFonte={ef} /></li>)}</ul>
          </section>

          {g.sezioni.map((s) => (
            <section key={s.id} className="sezione-carta" id={s.id}>
              <h2>{s.h2}</h2>
              <div className="prosa"><Blocchi blocchi={s.blocchi} ef={ef} /></div>
            </section>
          ))}

          <section className="sezione-carta guida-non-sappiamo" id="non-sappiamo">
            <h2>{T.nonSappiamo}</h2>
            <div className="prosa">
              <p>{T.nonSappiamoIntro}</p>
              <ul>{g.nonSappiamo.map((x, i) => <li key={i}><Inline testo={x} etichettaFonte={ef} /></li>)}</ul>
            </div>
          </section>

          <section className="sezione-carta" id="domande">
            <h2>{T.domande}</h2>
            <div className="faq">
              {g.faq.map((f, i) => (
                <details key={i}>
                  <summary>{f.d}</summary>
                  <div><p><Inline testo={f.r} etichettaFonte={ef} /></p></div>
                </details>
              ))}
            </div>
          </section>

          <section className="sezione-carta" id="fonti">
            <h2>{T.fontiTitolo}</h2>
            <ol className="guida-fonti">
              {fonti.map((f, i) => (
                <li key={i} id={`fonte-${i + 1}`}>
                  <a href={f.url} target="_blank" rel="noopener noreferrer">{f.etichetta}</a>
                  <span className="guida-fonte-meta">
                    {" · "}{T.letta} {DATA_LUNGA[l](f.letta ?? AGGIORNATA)}
                    {f.secondaria && <> · {T.secondaria}</>}
                    {f.parziale && <> · {T.parziale}</>}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>

      <section className="guida-altre" aria-labelledby="altre-guide">
        <div className="contenitore">
          <h2 id="altre-guide" className="t-h3">{T.altreGuide}</h2>
          <SchedeGuide l={l} escludi={id} />
        </div>
      </section>

      <CtaGuide l={l} pubblico={scheda.pubblico} />
    </article>
  );
}
