import type { Lingua } from "@/lib/rotte";
import { BUDGET } from "@/testi/strumenti/budget";
import { comuniOmi, intervallo } from "@/lib/strumenti/omi";
import { mq } from "@/lib/strumenti/calcoli";
import type { FonteId } from "@/lib/strumenti/regole";
import { fmtEuro, fmtNum } from "@/lib/strumenti/formato";
import { LUOGHI_BASE, COLORE_MONDO } from "@/content/luoghi-base";
import { Strumento } from "./Template";
import { Budget } from "./Budget";

export const FONTI_BUDGET: FonteId[] = ["omi"];

/** Il colore del mondo di ogni comune (dal primo luogo che non è una frazione). */
export function coloriComuni(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const b of LUOGHI_BASE) if (!b.frazioneDi && !out[b.comuneOmi]) out[b.comuneOmi] = COLORE_MONDO[b.mondo].notte;
  return out;
}

export function PaginaBudget({ l }: { l: Lingua }) {
  const t = BUDGET[l];
  const comuni = comuniOmi();
  const r = (a: [number, number] | null) => (a ? `${fmtNum(a[0], l)}–${fmtNum(a[1], l)}` : "—");
  const tabella = (
    <>
      <h2 className="t-h3 st-h2">{t.tabTitolo}</h2>
      <div className="tabella-scorre">
        <table className="tabella">
          <caption>{t.tabCaption}</caption>
          <thead>
            <tr>
              <th>{t.colComune}</th>
              <th className="num">{t.colQuot(t.tipologie.ville)}</th>
              <th className="num">{t.colQuot(t.tipologie.civili)}</th>
              {[500000, 1000000, 2000000].map((b) => <th key={b} className="num">{t.colCon(fmtEuro(b, l))}</th>)}
            </tr>
          </thead>
          <tbody>
            {comuni.map((c) => {
              const v = intervallo(c, "ville");
              const ci = intervallo(c, "civili");
              return (
                <tr key={c.id}>
                  <th scope="row">{c.nome} <span className="aiuto">({c.prov})</span></th>
                  <td className="num">{r(v ? [v.min, v.max] : null)}</td>
                  <td className="num">{r(ci ? [ci.min, ci.max] : null)}</td>
                  {[500000, 1000000, 2000000].map((b) => <td key={b} className="num">{v ? fmtNum(mq(b, (v.min + v.max) / 2), l) : "—"}</td>)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="nota-fonte">{t.tabNota}</p>
    </>
  );
  return (
    <Strumento l={l} id="budget" h1={t.h1} lead={t.lead} descrizione={t.descrizione} fonti={FONTI_BUDGET}
      calcolatore={<Budget l={l} comuni={comuni} colori={coloriComuni()} />}
      metodo={<>{t.metodo.map((x, i) => <p key={i}>{x}</p>)}</>}
      tabella={tabella} />
  );
}
