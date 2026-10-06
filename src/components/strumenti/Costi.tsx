"use client";
import { useState } from "react";
import type { Lingua } from "@/lib/rotte";
import { COSTI } from "@/testi/strumenti/costi";
import { COMUNE } from "@/testi/strumenti/comune";
import { PAESI, SCENARIO_IT, costiPaese, totale, type Paese, type Riga, type ScenarioIT } from "@/lib/strumenti/calcoli";
import { FONTI, IT, dominio } from "@/lib/strumenti/regole";
import { fmtEuro, fmtPct } from "@/lib/strumenti/formato";
import { Annuncio, CampoNumero, Cursore, CursoreLog, Interruttore, Segmenti, useStatoHash } from "./ui";

const ESEMPI = [400000, 800000, 1500000];
const passoPrezzo = (v: number) => (v < 500000 ? 5000 : v < 1500000 ? 10000 : 50000);

export function importoRiga(r: Riga, l: Lingua) {
  const t = COSTI[l];
  if (r.stato === "in-verifica") return COMUNE[l].inVerificaBreve;
  if (r.stato === "manca-rendita") return t.mancaRendita;
  if (r.stato === "nessuna") return t.nessuna;
  return fmtEuro(r.importo, l);
}

export function Costi({ l }: { l: Lingua }) {
  const t = COSTI[l];
  const c = COMUNE[l];
  const [s, set] = useStatoHash<ScenarioIT>(SCENARIO_IT, { prezzo: "n", venditore: "s", primaCasa: "b", lusso: "b", base: "s", rendita: "n", agenzia: "b", pct: "n" });
  const [dett, setDett] = useState<Paese>("it");
  const prezzo = Math.max(50000, s.prezzo || 50000);
  const sc = { ...s, prezzo };
  const per = PAESI.map((p) => ({ p, righe: costiPaese(p, sc), ...totale(costiPaese(p, sc)) }));
  const R = Math.max(10, ...per.map((x) => 2 * Math.ceil(((x.totale / prezzo) * 100) / 2) + 2));
  const tacche = Array.from({ length: R / 2 + 1 }, (_, i) => i * 2);
  const righeDett = per.find((x) => x.p === dett)!;
  const annuncio = t.annuncio(per.map((x) => `${t.paesiBreve[x.p]}: ${x.incompleto ? c.almeno + " " : ""}${fmtEuro(x.totale, l)}`));

  return (
    <div className="griglia-2 st-costi">
      <div>
        <CampoNumero l={l} etichetta={t.prezzo} valore={s.prezzo} onChange={(v) => set({ prezzo: v ?? 50000 })} min={50000} max={20000000} unita="€" grande />
        <CursoreLog l={l} etichetta={t.scala} valore={prezzo} min={150000} max={3000000} passo={passoPrezzo} onChange={(v) => set({ prezzo: v })} />
        <div className="chips st-esempi" role="group" aria-label={t.esempi}>
          {ESEMPI.map((e) => <button key={e} type="button" className="st-chip" aria-pressed={prezzo === e} onClick={() => set({ prezzo: e })}>{fmtEuro(e, l)}</button>)}
        </div>
        <details className="ripiega" open>
          <summary>{t.ipotesi}</summary>
          <div>
            <Segmenti etichetta={t.venditore} valore={s.venditore} onChange={(v) => set({ venditore: v })} opzioni={[{ v: "privato", t: t.venditori.privato }, { v: "impresa", t: t.venditori.impresa }]} aiuto={s.venditore === "impresa" ? t.ivaNota : undefined} />
            <Segmenti etichetta={t.casa} valore={s.primaCasa ? "prima" : "seconda"} onChange={(v) => set({ primaCasa: v === "prima" })} opzioni={[{ v: "seconda", t: t.case.seconda }, { v: "prima", t: t.case.prima }]} aiuto={s.primaCasa ? t.primaAiuto : undefined} />
            <Interruttore etichetta={t.lusso} valore={s.lusso} onChange={(v) => set({ lusso: v })} aiuto={t.lussoAiuto} />
            {s.venditore === "privato" && (
              <>
                <Segmenti etichetta={t.base} valore={s.base} onChange={(v) => set({ base: v })} opzioni={[{ v: "catastale", t: t.basi.catastale }, { v: "prezzo", t: t.basi.prezzo }]} aiuto={t.baseAiuto} />
                {s.base === "catastale" && (
                  <CampoNumero l={l} etichetta={t.rendita} valore={s.rendita} vuoto max={100000} unita="€" onChange={(v) => set({ rendita: v })}
                    aiuto={s.rendita === SCENARIO_IT.rendita ? t.renditaEsempio : t.renditaAiuto} />
                )}
              </>
            )}
            <Interruttore etichetta={t.agenzia} valore={s.agenzia} onChange={(v) => set({ agenzia: v })} aiuto={t.agenziaAiuto} />
            {s.agenzia && (
              <Cursore etichetta={t.pct} valore={s.pct} min={IT.agenzia.min} max={IT.agenzia.max} passo={IT.agenzia.passo} testo={t.pctTesto(fmtPct(s.pct, l), fmtPct(IT.agenzia.iva, l))} onChange={(v) => set({ pct: v })} />
            )}
          </div>
        </details>
      </div>

      <div>
        <div className="st-scala" aria-hidden="true">
          {tacche.map((x) => <span key={x} style={{ left: `${(x / R) * 100}%` }}>{fmtPct(x, l)}</span>)}
        </div>
        <ol className="st-paesi">
          {per.map((x) => (
            <li key={x.p} data-paese={x.p}>
              <div className="st-paese-testa">
                <span className="st-paese-nome">{t.paesi[x.p]}</span>
                <span className="st-paese-tot">{x.totale === 0 && x.incompleto ? t.soloVerifica : <>{x.incompleto && <small>{c.almeno} </small>}{fmtEuro(x.totale, l)}</>}</span>
              </div>
              <div className="st-barra">
                {(["imposte", "registri", "agenzia"] as const).map((g) => {
                  const v = x.righe.filter((r) => r.gruppo === g && r.stato === "ok").reduce((a, r) => a + r.importo, 0);
                  return v > 0 ? <i key={g} data-g={g} style={{ width: `${(v / prezzo / R) * 10000}%` }} /> : null;
                })}
                {x.incompleto && <i data-g="verifica" />}
              </div>
              <p className="aiuto">
                {t.delPrezzo(fmtPct(Math.round((x.totale / prezzo) * 10000) / 100, l))}
                {x.incompleto && <> · {t.piuInVerifica} {x.inVerifica.map((v) => t.voci[v]?.breve ?? v).join(", ")}</>}
              </p>
            </li>
          ))}
        </ol>
        <ul className="st-legenda" aria-hidden="true">
          {(["imposte", "registri", "agenzia", "verifica"] as const).map((g) => <li key={g}><i data-g={g} />{t.gruppi[g]}</li>)}
        </ul>
        <p className="nota-fonte" style={{ marginTop: 12 }}>{t.chf}</p>
        <Annuncio testo={annuncio} />
      </div>

      <div className="st-largo">
        <h3 className="t-h3" style={{ marginBottom: 14 }}>{c.dettaglio}</h3>
        <Segmenti etichetta={c.dettaglio} valore={dett} onChange={setDett} opzioni={PAESI.map((p) => ({ v: p, t: t.paesiBreve[p] }))} />
        <div className="tabella-scorre">
          <table className="tabella">
            <caption className="sr-only">{t.dettaglioCaption(t.paesi[dett], fmtEuro(prezzo, l))}</caption>
            <thead><tr><th>{c.voce}</th><th>{c.chi}</th><th className="num">{c.importo}</th><th>{c.fonte}</th></tr></thead>
            <tbody>
              {righeDett.righe.map((r) => {
                const v = t.voci[r.voce];
                const f = FONTI[r.fonte];
                return (
                  <tr key={r.voce} data-stato={r.stato}>
                    <td><b>{v.nome(r.p ?? {})}</b><br /><span className="aiuto">{v.spieg(r.p ?? {})}</span></td>
                    <td>{v.chi}</td>
                    <td className="num">{importoRiga(r, l)}</td>
                    <td>{f.url ? <a href={f.url} rel="noopener" title={f.titolo}>{dominio(f.url)}</a> : <span title={f.titolo}>—</span>}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot><tr><th colSpan={2}>{t.totaleRiga}</th><th className="num">{righeDett.incompleto ? `${c.almeno} ` : ""}{fmtEuro(righeDett.totale, l)}</th><th /></tr></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
