import type { Lingua } from "@/lib/rotte";
import { NETTO } from "@/testi/strumenti/netto";
import { SCENARIO_VENDITA, netto } from "@/lib/strumenti/calcoli";
import { VENDITA, type FonteId } from "@/lib/strumenti/regole";
import { fmtEuro } from "@/lib/strumenti/formato";
import { Strumento } from "./Template";
import { Netto } from "./Netto";

export const FONTI_NETTO: FonteId[] = [VENDITA.fontePlus, VENDITA.fonteSuperbonus, VENDITA.fonteCosti, VENDITA.agenzia.fonte, "apeSanzione", "apeCosto", "conformitaCosto"];

export function PaginaNetto({ l }: { l: Lingua }) {
  const t = NETTO[l];
  const casi = [
    { ...SCENARIO_VENDITA, anni: 3 },
    { ...SCENARIO_VENDITA, anni: 7 },
    { ...SCENARIO_VENDITA, anni: 3, principale: true },
  ].map(netto);
  const tabella = (
    <>
      <h2 className="t-h3 st-h2">{t.tabTitolo}</h2>
      <div className="tabella-scorre">
        <table className="tabella">
          <caption>{t.tabCaption}</caption>
          <thead><tr><th />{t.casi.map((c) => <th key={c} className="num">{c}</th>)}</tr></thead>
          <tbody>
            <tr><th scope="row">{t.tabPlus}</th>{casi.map((c, i) => <td key={i} className="num">{c.plus.tipo === "tassata" ? fmtEuro(c.plus.imposta, l) : t.nonDovuta}</td>)}</tr>
            <tr><th scope="row">{t.tabNetto}</th>{casi.map((c, i) => <td key={i} className="num">{fmtEuro(c.netto, l)}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <p className="nota-fonte">{t.tabNota}</p>
    </>
  );
  return (
    <Strumento l={l} id="netto" h1={t.h1} lead={t.lead} descrizione={t.descrizione} fonti={FONTI_NETTO}
      calcolatore={<Netto l={l} />}
      metodo={<>{t.metodo(l).map((x, i) => <p key={i}>{x}</p>)}</>}
      tabella={tabella} />
  );
}
