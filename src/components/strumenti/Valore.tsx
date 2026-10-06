"use client";
import type { Lingua } from "@/lib/rotte";
import { VALORE } from "@/testi/strumenti/valore";
import { SCELTA_OMI } from "@/testi/strumenti/omi-scelta";
import type { ComuneQ } from "@/lib/strumenti/quotazioni";
import { forchettaOmi } from "@/lib/strumenti/calcoli";
import { fmtEuro, fmtEuroM2, fmtM2, fmtNum } from "@/lib/strumenti/formato";
import { ModuloProprietario } from "@/components/Moduli";
import { Annuncio, Segmenti, useStatoHash } from "./ui";
import { SceltaOmi, risolviScelta } from "./SceltaOmi";

type Stato = "normale" | "ottimo" | "ristrutturare";
const TIPI_IT = { ville: "ville e villini", civili: "abitazioni civili", economiche: "abitazioni di tipo economico" } as const;


export function Valore({ l, comuni, privacy }: { l: Lingua; comuni: ComuneQ[]; privacy: string }) {
  const t = VALORE[l];
  const so = SCELTA_OMI[l];
  const [s, set] = useStatoHash<{ c: string; z: string; t: string; m2: number | null; stato: string }>(
    { c: "orta-san-giulio", z: "B1", t: "ville", m2: 180, stato: "normale" }, { c: "s", z: "s", t: "s", m2: "n", stato: "s" });
  const { comune, zona, tipo, q } = risolviScelta(comuni, s);
  const stato = (["normale", "ottimo", "ristrutturare"].includes(s.stato) ? s.stato : "normale") as Stato;
  const m2 = s.m2 && s.m2 >= 10 ? s.m2 : null;
  const f = m2 ? forchettaOmi(q, m2) : null;
  // La stima che accompagna la richiesta: sempre in italiano, la legge chi lavora il CRM.
  const stima = f && m2 ? `OMI 2025/2 · ${comune.nome} (${comune.prov}) zona ${zona.codice} «${zona.descr.toLowerCase()}» · ${TIPI_IT[tipo]} · ${m2} m² lordi · stato dichiarato: ${stato} · ${fmtNum(q[0], "it")}–${fmtNum(q[1], "it")} €/m² → ${fmtEuro(f[0], "it")} – ${fmtEuro(f[1], "it")}` : undefined;
  return (
    <>
      <p className="st-avvertenza" style={{ marginTop: 0 }}>{t.privacy}</p>
      <div className="griglia-2">
        <div>
          <SceltaOmi l={l} comuni={comuni} s={s} set={set} />
          <Segmenti etichetta={t.stato} valore={stato} onChange={(v) => set({ stato: v })} opzioni={(["normale", "ottimo", "ristrutturare"] as Stato[]).map((v) => ({ v, t: t.stati[v] }))} aiuto={t.statiAiuto[stato]} />
        </div>
        <div>
          <div className="st-esito" aria-live="polite">
            <p className="etichetta-campo" style={{ margin: 0 }}>{t.risultato}</p>
            {f && m2 ? (
              <>
                <p className="st-grande-num">{fmtEuro(f[0], l)} <small>–</small> {fmtEuro(f[1], l)}</p>
                <p className="aiuto">{t.per(fmtM2(m2, l), so.tipologie[tipo], zona.codice, comune.nome)}</p>
                <p className="aiuto">{t.alM2(fmtEuroM2(q[0], l), fmtEuroM2(q[1], l))}</p>
                {stato !== "normale" && <p className="st-nota-tempo">{t.statiAiuto[stato]}</p>}
              </>
            ) : <p className="aiuto" style={{ marginTop: 12 }}>{t.vuoto}</p>}
            <p className="nota-fonte" style={{ marginTop: 18 }}>{t.lettura}</p>
          </div>
        </div>
      </div>
      <div className="griglia-2" style={{ marginTop: "clamp(48px, 8vh, 96px)" }} id="valutazione">
        <div>
          <p className="occhiello">{t.moduloOcchiello}</p>
          <h2 className="t-display-l">{t.moduloTitolo}</h2>
          <p className="t-lead" style={{ marginTop: 20 }}>{t.moduloLead}</p>
          <p className="aiuto" style={{ marginTop: 16 }}>{stima && f ? t.moduloStima(`${fmtEuro(f[0], l)} – ${fmtEuro(f[1], l)}`) : t.moduloSenza}</p>
        </div>
        <ModuloProprietario l={l} fonte="OV · Strumento valore" privacy={privacy} modulo="valutazione" stima={stima} />
      </div>
      <Annuncio testo={f ? `${fmtEuro(f[0], l)} – ${fmtEuro(f[1], l)}` : t.vuoto} />
    </>
  );
}
