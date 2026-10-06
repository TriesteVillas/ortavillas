import { percorso, type Lingua } from "@/lib/rotte";
import { VALORE } from "@/testi/strumenti/valore";
import { SCELTA_OMI } from "@/testi/strumenti/omi-scelta";
import { comuniOmi, TIPOLOGIE } from "@/lib/strumenti/omi";
import type { FonteId } from "@/lib/strumenti/regole";
import { fmtNum } from "@/lib/strumenti/formato";
import { Strumento } from "./Template";
import { Valore } from "./Valore";

export const FONTI_VALORE: FonteId[] = ["omi"];

export function PaginaValore({ l }: { l: Lingua }) {
  const t = VALORE[l];
  const so = SCELTA_OMI[l];
  const comuni = comuniOmi();
  const tabella = (
    <>
      <h2 className="t-h3 st-h2">{t.tabTitolo}</h2>
      <div className="tabella-scorre">
        <table className="tabella">
          <caption>{t.tabCaption}</caption>
          <thead><tr><th>{t.colComune}</th><th>{t.colZona}</th>{TIPOLOGIE.map((x) => <th key={x} className="num">{t.colTipo(so.tipologie[x])}</th>)}</tr></thead>
          <tbody>
            {comuni.flatMap((c) => c.zone.map((z) => (
              <tr key={`${c.id}-${z.codice}`}>
                <th scope="row">{c.nome}</th>
                <td>{z.codice} · <span className="aiuto">{z.descr.toLowerCase()}</span></td>
                {TIPOLOGIE.map((x) => <td key={x} className="num">{z.q[x] ? `${fmtNum(z.q[x]![0], l)}–${fmtNum(z.q[x]![1], l)}` : "—"}</td>)}
              </tr>
            )))}
          </tbody>
        </table>
      </div>
      <p className="nota-fonte">{t.tabNota}</p>
    </>
  );
  return (
    <Strumento l={l} id="valore" h1={t.h1} lead={t.lead} descrizione={t.descrizione} fonti={FONTI_VALORE}
      calcolatore={<Valore l={l} comuni={comuni} privacy={percorso(l, "privacy")} />}
      metodo={<>{t.metodo.map((x, i) => <p key={i}>{x}</p>)}</>}
      tabella={tabella} />
  );
}
