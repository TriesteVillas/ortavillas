"use client";
import type { Lingua } from "@/lib/rotte";
import { BUDGET } from "@/testi/strumenti/budget";
import { intervallo, type ComuneQ, type Tipologia } from "@/lib/strumenti/quotazioni";
import { mq } from "@/lib/strumenti/calcoli";
import { fmtEuro, fmtEuroM2, fmtM2, fmtNum } from "@/lib/strumenti/formato";
import { Annuncio, CampoNumero, CursoreLog, Segmenti, useStatoHash } from "./ui";

const ESEMPI = [300000, 500000, 750000, 1000000, 2000000];
const passo = (v: number) => (v < 500000 ? 10000 : v < 1500000 ? 25000 : 100000);

export function Budget({ l, comuni, colori }: { l: Lingua; comuni: ComuneQ[]; colori: Record<string, string> }) {
  const t = BUDGET[l];
  const [s, set] = useStatoHash<{ budget: number; tipo: string }>({ budget: 600000, tipo: "ville" }, { budget: "n", tipo: "s" });
  const tipo = (["ville", "civili", "economiche"].includes(s.tipo) ? s.tipo : "ville") as Tipologia;
  const budget = Math.max(50000, s.budget || 50000);
  const righe = comuni.map((c) => {
    const i = intervallo(c, tipo);
    if (!i) return { c, i: null as null, basso: 0, centro: 0, alto: 0 };
    return { c, i, basso: mq(budget, i.max), centro: mq(budget, (i.min + i.max) / 2), alto: mq(budget, i.min) };
  });
  const valide = righe.filter((r) => r.i);
  const maxAlto = Math.max(60, ...valide.map((r) => r.alto));
  const p = maxAlto > 1200 ? 200 : maxAlto > 600 ? 100 : maxAlto > 250 ? 50 : 25;
  const fine = Math.ceil((maxAlto * 1.05) / p) * p;
  const ordinate = [...valide].sort((a, b) => a.centro - b.centro);
  const piccolo = ordinate[0], grande = ordinate[ordinate.length - 1];
  const nonQuotate = righe.filter((r) => !r.i);
  return (
    <div className="griglia-2">
      <div>
        <CampoNumero l={l} etichetta={t.budget} valore={s.budget} onChange={(v) => set({ budget: v ?? 50000 })} min={50000} max={50000000} unita="€" grande />
        <CursoreLog l={l} etichetta={t.scala} valore={budget} min={100000} max={4000000} passo={passo} onChange={(v) => set({ budget: v })} />
        <div className="chips st-esempi" role="group" aria-label={t.esempi}>
          {ESEMPI.map((e) => <button key={e} type="button" className="st-chip" aria-pressed={budget === e} onClick={() => set({ budget: e })}>{fmtEuro(e, l)}</button>)}
        </div>
        <Segmenti etichetta={t.cosa} valore={tipo} onChange={(v) => set({ tipo: v })} opzioni={(["ville", "civili", "economiche"] as Tipologia[]).map((v) => ({ v, t: t.tipologie[v] }))} aiuto={t.aiuti[tipo]} />
        <p className="nota-fonte">{t.avviso}</p>
      </div>
      <div>
        {piccolo && grande && piccolo !== grande && (
          <p className="t-h3" style={{ marginBottom: 20 }}>{t.confronto(fmtEuro(budget, l), fmtNum(grande.centro / Math.max(1, piccolo.centro), l, 1), grande.c.nome, piccolo.c.nome)}</p>
        )}
        <ul className="st-budget-righe">
          {ordinate.map((r) => (
            <li key={r.c.id} style={{ ["--c" as string]: colori[r.c.id] }}>
              <span className="nome">{r.c.nome} <small className="aiuto">({r.c.prov})</small></span>
              <span className="banda" aria-hidden="true">
                <i style={{ left: `${(r.basso / fine) * 100}%`, width: `${Math.max(1, ((r.alto - r.basso) / fine) * 100)}%` }} />
                <b style={{ left: `${(r.centro / fine) * 100}%` }} />
              </span>
              <span className="val">{t.circa(fmtM2(r.centro, l))}</span>
              <span className="det">{t.forchetta(fmtM2(r.basso, l), fmtM2(r.alto, l))} · {t.quotazioni(fmtEuroM2(r.i!.min, l), fmtEuroM2(r.i!.max, l), r.i!.zone, r.i!.zonaCara)}</span>
            </li>
          ))}
          {nonQuotate.map((r) => (
            <li key={r.c.id} style={{ ["--c" as string]: colori[r.c.id] }}>
              <span className="nome">{r.c.nome} <small className="aiuto">({r.c.prov})</small></span>
              <span className="det" style={{ gridColumn: "1 / -1" }}>{t.nonQuotata}</span>
            </li>
          ))}
        </ul>
        <p className="nota-fonte">{t.fonteRiga}</p>
        <Annuncio testo={ordinate.map((r) => `${r.c.nome} ${t.circa(fmtM2(r.centro, l))}`).join("; ")} />
      </div>
    </div>
  );
}
