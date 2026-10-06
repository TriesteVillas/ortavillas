import Link from "next/link";
import { percorso, type Lingua } from "@/lib/rotte";
import { GUIDE_SLUG } from "@/content/indice";
import { COSTI } from "@/testi/strumenti/costi";
import { COMUNE } from "@/testi/strumenti/comune";
import { PAESI, SCENARIO_IT, costiPaese, totale } from "@/lib/strumenti/calcoli";
import { ESTERO, IT, type FonteId } from "@/lib/strumenti/regole";
import { fmtEuro, fmtPct } from "@/lib/strumenti/formato";
import { Strumento } from "./Template";
import { Costi } from "./Costi";

export const FONTI_COSTI: FonteId[] = [IT.fonteRegistro, IT.fonteIpocatastali, IT.notaio.fonte, IT.agenzia.fonte, ...ESTERO.ch.fonti, ESTERO.ch.makler, ...ESTERO.de.fonti, ESTERO.de.notar, ESTERO.de.makler, ...ESTERO.at.fonti, ESTERO.at.notar, ESTERO.at.makler];
const PREZZI = [500000, 900000, 1500000];

export function PaginaCosti({ l }: { l: Lingua }) {
  const t = COSTI[l];
  const c = COMUNE[l];
  const tabella = (
    <>
      <h2 className="t-h3 st-h2">{t.tabTitolo}</h2>
      <div className="tabella-scorre">
        <table className="tabella">
          <caption>{t.tabCaption}</caption>
          <thead><tr><th>{t.tabPrezzo}</th>{PAESI.map((p) => <th key={p} className="num">{t.paesiBreve[p]}</th>)}</tr></thead>
          <tbody>
            {PREZZI.map((prezzo) => (
              <tr key={prezzo}>
                <th scope="row" className="num">{fmtEuro(prezzo, l)}</th>
                {PAESI.map((p) => {
                  const x = totale(costiPaese(p, { ...SCENARIO_IT, prezzo }));
                  return <td key={p} className="num">{x.incompleto ? `${c.almeno} ` : ""}{fmtEuro(x.totale, l)}<br /><span className="aiuto">{fmtPct(Math.round((x.totale / prezzo) * 1000) / 10, l)}</span></td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="etichetta-campo" style={{ marginTop: 24 }}>{t.tabIpotesi}</h3>
      <dl className="scheda-dati st-ipotesi">
        {PAESI.map((p) => <div key={p}><dt>{t.paesiBreve[p]}</dt><dd>{t.ipotesiPaese[p]}</dd></div>)}
      </dl>
      <p className="nota-fonte">{t.tabNota}</p>
    </>
  );
  return (
    <Strumento l={l} id="costi" h1={t.h1} lead={t.lead} descrizione={t.descrizione} fonti={FONTI_COSTI}
      calcolatore={<Costi l={l} />}
      metodo={<>{t.metodo(l).map((x, i) => <p key={i}>{x}</p>)}<p><Link href={percorso(l, "guide", GUIDE_SLUG.costi[l])}>{t.guidaLink} →</Link></p></>}
      tabella={tabella} />
  );
}
