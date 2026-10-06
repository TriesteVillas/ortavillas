"use client";
import { useId } from "react";
import type { Lingua } from "@/lib/rotte";
import { SCELTA_OMI } from "@/testi/strumenti/omi-scelta";
import { TIPOLOGIE, type ComuneQ, type Tipologia, type ZonaQ } from "@/lib/strumenti/quotazioni";
import { CampoNumero, Segmenti } from "./ui";

export type Scelta = { c: string; z: string; t: string; m2: number | null };

/** Risolve la scelta sui dati: comune, zona (la prima se quella salvata non esiste), tipologia, quotazione. */
export function risolviScelta(comuni: ComuneQ[], s: Scelta) {
  const comune = comuni.find((x) => x.id === s.c) ?? comuni[0];
  const zona: ZonaQ = comune.zone.find((z) => z.codice === s.z) ?? comune.zone[0];
  const voluta = (TIPOLOGIE as string[]).includes(s.t) ? (s.t as Tipologia) : "civili";
  // Le zone senza quotazioni sono già escluse: se la tipologia voluta manca, si prende la prima quotata.
  const tipo: Tipologia = zona.q[voluta] ? voluta : TIPOLOGIE.find((x) => zona.q[x])!;
  const q = zona.q[tipo]!;
  return { comune, zona, tipo, q };
}

export function SceltaOmi({ l, comuni, s, set }: { l: Lingua; comuni: ComuneQ[]; s: Scelta; set: (x: Partial<Scelta>) => void }) {
  const t = SCELTA_OMI[l];
  const idC = useId(), idZ = useId();
  const { comune, zona, tipo } = risolviScelta(comuni, s);
  return (
    <>
      <div className="campo">
        <label htmlFor={idC}>{t.comune}</label>
        <select id={idC} value={comune.id} onChange={(e) => { const c = comuni.find((x) => x.id === e.target.value)!; set({ c: c.id, z: c.zone[0].codice }); }}>
          {comuni.map((c) => <option key={c.id} value={c.id}>{c.nome} ({c.prov})</option>)}
        </select>
      </div>
      <div className="campo">
        <label htmlFor={idZ}>{t.zona}</label>
        <select id={idZ} value={zona.codice} onChange={(e) => set({ z: e.target.value })}>
          {comune.zone.map((z) => <option key={z.codice} value={z.codice}>{z.codice} · {t.fasce[z.fascia] ?? z.fascia} · {z.descr.toLowerCase()}</option>)}
        </select>
        <p className="aiuto">{t.zonaAiuto}</p>
      </div>
      <Segmenti etichetta={t.tipologia} valore={tipo} onChange={(v) => set({ t: v })} opzioni={TIPOLOGIE.filter((x) => zona.q[x]).map((v) => ({ v, t: t.tipologie[v] }))} />
      <CampoNumero l={l} etichetta={t.m2} valore={s.m2} vuoto max={5000} unita="m²" onChange={(v) => set({ m2: v })} aiuto={t.m2Aiuto} />
    </>
  );
}
