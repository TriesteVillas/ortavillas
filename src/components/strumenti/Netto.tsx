"use client";
import type { Lingua } from "@/lib/rotte";
import { NETTO } from "@/testi/strumenti/netto";
import { SCENARIO_VENDITA, netto, type ScenarioVendita } from "@/lib/strumenti/calcoli";
import { VENDITA } from "@/lib/strumenti/regole";
import { fmtEuro, fmtPct } from "@/lib/strumenti/formato";
import { Annuncio, CampoNumero, Cursore, CursoreLog, Interruttore, useStatoHash } from "./ui";

const passo = (v: number) => (v < 500000 ? 5000 : v < 1500000 ? 10000 : 50000);

export function Netto({ l }: { l: Lingua }) {
  const t = NETTO[l];
  const [s, set] = useStatoHash<ScenarioVendita>(SCENARIO_VENDITA, {
    prezzo: "n", acquisto: "n", anni: "n", principale: "b", successione: "b", superbonus: "b", costi: "n", agenzia: "b", pct: "n", altre: "n", mutuo: "n",
  });
  const prezzo = Math.max(10000, s.prezzo || 10000);
  const sc = { ...s, prezzo, costi: s.costi || 0, altre: s.altre || 0, mutuo: s.mutuo || 0 };
  const r = netto(sc);
  const primaDi = [t.voceVerifica.ape, t.voceVerifica.conformita];
  const barra = (v: number) => <span className="barra" aria-hidden="true"><i style={{ width: `${Math.max(0, Math.min(100, (v / prezzo) * 100))}%` }} /></span>;
  const pctTesto = t.pctTesto(fmtPct(s.pct, l), fmtPct(VENDITA.agenzia.iva, l));
  let progressivo = prezzo;
  const scala = (meno: number) => { progressivo -= meno; return progressivo; };
  return (
    <div className="griglia-2">
      <div>
        <CampoNumero l={l} etichetta={t.prezzo} valore={s.prezzo} onChange={(v) => set({ prezzo: v ?? 10000 })} min={10000} max={50000000} unita="€" grande />
        <CursoreLog l={l} etichetta={t.scala} valore={prezzo} min={50000} max={4000000} passo={passo} onChange={(v) => set({ prezzo: v })} />
        <Interruttore etichetta={t.principale} valore={s.principale} onChange={(v) => set({ principale: v })} aiuto={t.principaleAiuto} />
        {!s.principale && (
          <>
            <CampoNumero l={l} etichetta={t.acquisto} valore={s.acquisto} vuoto onChange={(v) => set({ acquisto: v })} max={50000000} unita="€" aiuto={t.acquistoAiuto} />
            <Cursore etichetta={t.anni} valore={s.anni} min={0} max={30} passo={1} testo={t.anniTesto(s.anni)} onChange={(v) => set({ anni: v })} />
            <Interruttore etichetta={t.superbonus} valore={s.superbonus} onChange={(v) => set({ superbonus: v })} aiuto={t.superbonusAiuto} />
            {s.superbonus && <Interruttore etichetta={t.successione} valore={s.successione} onChange={(v) => set({ successione: v })} aiuto={t.successioneAiuto} />}
            <CampoNumero l={l} etichetta={t.costi} valore={s.costi || null} vuoto onChange={(v) => set({ costi: v ?? 0 })} max={50000000} unita="€" aiuto={t.costiAiuto} />
          </>
        )}
        <Interruttore etichetta={t.agenzia} valore={s.agenzia} onChange={(v) => set({ agenzia: v })} aiuto={t.agenziaAiuto} />
        {s.agenzia && <Cursore etichetta={t.pct} valore={s.pct} min={VENDITA.agenzia.min} max={VENDITA.agenzia.max} passo={VENDITA.agenzia.passo} testo={pctTesto} onChange={(v) => set({ pct: v })} />}
        <CampoNumero l={l} etichetta={t.altre} valore={s.altre || null} vuoto onChange={(v) => set({ altre: v ?? 0 })} max={50000000} unita="€" aiuto={t.altreAiuto} />
        <CampoNumero l={l} etichetta={t.mutuo} valore={s.mutuo || null} vuoto onChange={(v) => set({ mutuo: v ?? 0 })} max={50000000} unita="€" aiuto={t.mutuoAiuto} />
      </div>
      <div>
        <div className="st-esito">
          <p className="etichetta-campo" style={{ margin: 0 }}>{t.resta}</p>
          <p className="st-grande-num">{fmtEuro(r.netto, l)}</p>
          <p className="aiuto">{t.delPrezzo(fmtPct(Math.round((r.netto / prezzo) * 1000) / 10, l))} · <span className="st-non-verificato">{t.primaDi} {primaDi.join(", ")}</span>{r.incompleto && <> · <span className="st-non-verificato">{t.mancaAcquisto}</span></>}</p>
          <h3 className="etichetta-campo" style={{ marginTop: 24 }}>{t.cascata}</h3>
          <ol className="st-cascata">
            <li><span>{t.righe.prezzo}</span><span className="imp">{fmtEuro(prezzo, l)}</span>{barra(prezzo)}</li>
            {s.agenzia && <li><span>{t.righe.provvigione(fmtPct(s.pct, l), fmtPct(VENDITA.agenzia.iva, l))}</span><span className="imp">− {fmtEuro(r.provvigione, l)}</span>{barra(scala(r.provvigione))}<span className="sp">{t.righe.provvigioneSp}</span></li>}
            <li>
              <span>{t.righe.plus}</span>
              <span className="imp" data-stato={r.plus.tipo === "manca-acquisto" ? "verifica" : undefined}>{r.plus.tipo === "tassata" ? `− ${fmtEuro(r.plus.imposta, l)}` : r.plus.tipo === "esente" ? t.nonDovuta : t.mancaAcquisto}</span>
              {barra(scala(r.imposta))}
              <span className="sp">{r.plus.tipo === "tassata" ? t.righe.plusTassata(fmtEuro(r.plus.base, l), r.plus.regola) : r.plus.tipo === "esente" ? t.righe.plusEsente[r.plus.motivo] : t.righe.plusManca}</span>
            </li>
            <li><span>{t.righe.ape}</span><span className="imp" data-stato="verifica">{t.inVerifica}</span><span className="sp">{t.righe.apeSp(fmtEuro(VENDITA.apeSanzione[0], l), fmtEuro(VENDITA.apeSanzione[1], l))}</span></li>
            <li><span>{t.righe.conformita}</span><span className="imp" data-stato="verifica">{t.inVerifica}</span><span className="sp">{t.righe.conformitaSp}</span></li>
            {sc.altre > 0 && <li><span>{t.righe.altre}</span><span className="imp">− {fmtEuro(sc.altre, l)}</span>{barra(scala(sc.altre))}</li>}
            {sc.mutuo > 0 && <li><span>{t.righe.mutuo}</span><span className="imp">− {fmtEuro(sc.mutuo, l)}</span>{barra(scala(sc.mutuo))}</li>}
            <li className="tot"><span>{t.righe.netto}</span><span className="imp">{fmtEuro(r.netto, l)}</span></li>
          </ol>
          {r.attesa && r.attesa.fra > 0 && <p className="st-nota-tempo">{t.tempo(r.attesa.fra, fmtEuro(r.attesa.risparmio, l))}</p>}
        </div>
        <Annuncio testo={t.annuncio(fmtEuro(r.netto, l))} />
      </div>
    </div>
  );
}
