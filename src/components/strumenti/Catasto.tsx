"use client";
import type { Lingua } from "@/lib/rotte";
import { CATASTO } from "@/testi/strumenti/catasto";
import type { ComuneQ } from "@/lib/strumenti/quotazioni";
import { IT, valoreCatastale } from "@/lib/strumenti/regole";
import { fmtEuro, fmtNum, fmtPct } from "@/lib/strumenti/formato";
import { Annuncio, CampoNumero, Interruttore, Segmenti, useStatoHash } from "./ui";
import { SceltaOmi, risolviScelta } from "./SceltaOmi";
import { forchettaOmi } from "@/lib/strumenti/calcoli";

export function Catasto({ l, comuni }: { l: Lingua; comuni: ComuneQ[] }) {
  const t = CATASTO[l];
  const [s, set] = useStatoHash<{ r: number | null; cat: string; prima: boolean; c: string; z: string; t: string; m2: number | null }>(
    { r: 1200, cat: "abitazione", prima: false, c: "orta-san-giulio", z: "B1", t: "civili", m2: 120 },
    { r: "n", cat: "s", prima: "b", c: "s", z: "s", t: "s", m2: "n" });
  const abitazione = s.cat !== "altro";
  const vc = abitazione && s.r && s.r > 0 ? valoreCatastale(s.r, s.prima) : null;
  const aliq = s.prima ? IT.registroPrima : IT.registro;
  const { q } = risolviScelta(comuni, s);
  const m2 = s.m2 && s.m2 >= 10 ? s.m2 : null;
  const f = m2 ? forchettaOmi(q, m2) : null;
  const centro = f ? (f[0] + f[1]) / 2 : null;
  return (
    <>
      <ol className="st-cascata" style={{ marginTop: 0, marginBottom: 32, maxWidth: 860 }}>
        {t.passi.map(([a, b], i) => <li key={a}><span><b className="st-valore" style={{ marginLeft: 0, marginRight: 8 }}>{String(i + 1).padStart(2, "0")}</b>{a}</span><span className="sp">{b}</span></li>)}
      </ol>
      <div className="griglia-2">
        <div>
          <CampoNumero l={l} etichetta={t.rendita} valore={s.r} vuoto max={1000000} unita="€" onChange={(v) => set({ r: v })} aiuto={t.renditaAiuto} grande />
          <Segmenti etichetta={t.categoria} valore={abitazione ? "abitazione" : "altro"} onChange={(v) => set({ cat: v })} opzioni={[{ v: "abitazione", t: t.categorie.abitazione }, { v: "altro", t: t.categorie.altro }]} aiuto={t.categoriaAiuto[abitazione ? "abitazione" : "altro"]} />
          <Interruttore etichetta={t.prima} valore={s.prima} onChange={(v) => set({ prima: v })} aiuto={t.primaAiuto} />
          <h3 className="etichetta-campo" style={{ margin: "28px 0 14px" }}>{t.confronto}</h3>
          <SceltaOmi l={l} comuni={comuni} s={s} set={set} />
        </div>
        <div>
          <div className="st-esito" aria-live="polite">
            <p className="etichetta-campo" style={{ margin: 0 }}>{t.valore}</p>
            {vc !== null ? (
              <>
                <p className="st-grande-num">{fmtEuro(vc, l)}</p>
                <p className="aiuto">{t.formula(fmtEuro(s.r!, l), s.prima ? IT.moltiplicatorePrima : IT.moltiplicatore)}</p>
                <p className="aiuto">{t.imposta(fmtPct(aliq, l), fmtEuro(Math.max(IT.registroMin, Math.round((vc * aliq) / 100)), l))}</p>
              </>
            ) : <p className="aiuto" style={{ marginTop: 12 }}>{abitazione ? t.vuoto : t.nonCalcolato}</p>}
            <p className="etichetta-campo" style={{ margin: "26px 0 0" }}>{t.confronto}</p>
            {f ? (
              <>
                <p className="st-grande-num" style={{ fontSize: "clamp(1.6rem, 1.2rem + 1.6vw, 2.4rem)" }}>{t.forchetta(fmtEuro(f[0], l), fmtEuro(f[1], l))}</p>
                {vc !== null && centro && (
                  <>
                    <div className="st-barra" style={{ height: 10 }} aria-hidden="true">
                      <i data-g="imposte" style={{ width: `${Math.min(100, (vc / f[1]) * 100)}%` }} />
                    </div>
                    <p className="aiuto">{t.rapporto(fmtPct(Math.round((vc / centro) * 100), l))}</p>
                  </>
                )}
              </>
            ) : <p className="aiuto" style={{ marginTop: 12 }}>{t.omiVuoto}</p>}
            <p className="nota-fonte" style={{ marginTop: 18 }}>{t.perche}</p>
          </div>
        </div>
      </div>
      <Annuncio testo={vc !== null ? `${t.valore}: ${fmtEuro(vc, l)}${f ? ` · ${fmtNum(f[0], l)} – ${fmtNum(f[1], l)} €` : ""}` : t.vuoto} />
    </>
  );
}
