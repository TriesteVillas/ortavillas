"use client";
import { useActionState, useEffect, useRef, useState } from "react";
import { inviaPC, inviaProprietario, type Esito } from "@/app/azioni";
import { TESTI_MODULI } from "@/testi/moduli";
import type { Lingua } from "@/lib/rotte";

const INIZIO: Esito = { esito: "iniziale" };
const ZONE = ["est", "ovest", "colline", "capi", "nonso"];

function Riepilogo({ esito, l, id }: { esito: Esito; l: Lingua; id: string }) {
  const t = TESTI_MODULI[l];
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (esito.esito !== "iniziale" && esito.esito !== "ok") ref.current?.focus(); }, [esito]);
  if (esito.esito === "errori" && esito.errori) {
    return (
      <div ref={ref} tabIndex={-1} className="esito" data-tipo="errore" role="alert">
        <p style={{ margin: "0 0 6px", fontWeight: 600 }}>{t.riepilogo}</p>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {Object.keys(esito.errori).map((k) => <li key={k}><a href={`#${id}-${k}`}>{t.errori[k]}</a></li>)}
        </ul>
      </div>
    );
  }
  if (esito.esito === "veloce") return <div ref={ref} tabIndex={-1} className="esito" data-tipo="errore" role="alert">{t.veloce}</div>;
  if (esito.esito === "porta") return <div ref={ref} tabIndex={-1} className="esito" data-tipo="errore" role="alert">{t.porta}</div>;
  return null;
}

function Nascosti({ l, fonte, extra }: { l: Lingua; fonte: string; extra?: Record<string, string> }) {
  const [t0, setT0] = useState("");
  useEffect(() => setT0(String(Date.now())), []);
  return (
    <>
      <input type="hidden" name="locale" value={l} />
      <input type="hidden" name="fonteCta" value={fonte} />
      <input type="hidden" name="t0" value={t0} />
      {extra && Object.entries(extra).map(([k, v]) => <input key={k} type="hidden" name={k} value={v} />)}
      <div className="honeypot" aria-hidden="true"><label>Website<input type="text" name="sito_web" tabIndex={-1} autoComplete="off" /></label></div>
    </>
  );
}

const val = (e: Esito, k: string) => { const v = e.valori?.[k]; return Array.isArray(v) ? v[0] : v ?? ""; };
const vals = (e: Esito, k: string) => { const v = e.valori?.[k]; return Array.isArray(v) ? v : v ? [v] : []; };

export function ModuloPC({ l, variante, fonte, privacy, completo }: { l: Lingua; variante: "breve" | "completo"; fonte: string; privacy: string; completo?: string }) {
  const t = TESTI_MODULI[l];
  const [esito, azione, inCorso] = useActionState(inviaPC, INIZIO);
  const [zone, setZone] = useState<string[]>([]);
  const [fascia, setFascia] = useState("");
  const [paese, setPaese] = useState("");
  useEffect(() => {
    const leggi = () => {
      const h = location.hash.replace(/^#/, "");
      if (!h.includes("=")) return;
      const q = new URLSearchParams(h);
      if (q.get("zone")) setZone(q.get("zone")!.split(",").filter((z) => ZONE.includes(z)));
      if (q.get("fascia")) setFascia(q.get("fascia")!);
      if (q.get("paese")) setPaese(q.get("paese")!);
    };
    leggi();
    window.addEventListener("hashchange", leggi);
    return () => window.removeEventListener("hashchange", leggi);
  }, []);
  useEffect(() => { if (esito.valori) { setZone(vals(esito, "zone")); setFascia(val(esito, "fascia")); setPaese(val(esito, "paese")); } }, [esito]);
  const id = "modulo-pc";
  return (
    <form id={id} action={azione} noValidate aria-label={t.iscrivimi} className="modulo">
      <Nascosti l={l} fonte={fonte} extra={{ variante }} />
      <Riepilogo esito={esito} l={l} id={id} />
      <div className="campo"><label htmlFor={`${id}-email`}>{t.email} *</label><input id={`${id}-email`} name="email" type="email" required autoComplete="email" defaultValue={val(esito, "email")} /><p className="aiuto">{t.emailAiuto}</p></div>
      <div className="campo"><label htmlFor={`${id}-nome`}>{t.nome} *</label><input id={`${id}-nome`} name="nome" type="text" required autoComplete="name" defaultValue={val(esito, "nome")} /></div>
      <div className="campo">
        <label htmlFor={`${id}-lingua`}>{t.lingua}</label>
        <select id={`${id}-lingua`} name="lingua" defaultValue={val(esito, "lingua") || l}>
          <option value="it" lang="it">Italiano</option><option value="en" lang="en">English</option><option value="de" lang="de">Deutsch</option><option value="sl" lang="sl">Slovenščina</option>
        </select>
      </div>
      {variante === "completo" && (
        <>
          <div className="campo">
            <label htmlFor={`${id}-paese`}>{t.paese} <small>({t.facoltativo})</small></label>
            <select id={`${id}-paese`} name="paese" value={paese} onChange={(e) => setPaese(e.target.value)} autoComplete="country">
              <option value="">{t.scegliete}</option>
              {Object.entries(t.paesi).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div className="campo"><label htmlFor={`${id}-citta`}>{t.citta} <small>({t.facoltativo})</small></label><input id={`${id}-citta`} name="citta" type="text" defaultValue={val(esito, "citta")} /></div>
          <div className="campo"><label htmlFor={`${id}-telefono`}>{t.telefono}</label><input id={`${id}-telefono`} name="telefono" type="tel" autoComplete="tel" defaultValue={val(esito, "telefono")} /></div>
        </>
      )}
      <fieldset>
        <legend>{t.zone} <small>({t.facoltativo}) · {t.zoneAiuto}</small></legend>
        <div className="chips">
          {ZONE.map((z) => (
            <label key={z} className="chip"><input type="checkbox" name="zone" value={z} checked={zone.includes(z)} onChange={(e) => setZone(e.target.checked ? [...zone, z] : zone.filter((x) => x !== z))} /><span>{variante === "breve" ? t.zoneVoci[z].split(" · ")[0] : t.zoneVoci[z]}</span></label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>{t.fascia} <small>({t.facoltativo})</small></legend>
        <div className="chips">
          {Object.entries(t.fasce).map(([k, v]) => (
            <label key={k} className="chip"><input type="radio" name="fascia" value={k} checked={fascia === k} onChange={() => setFascia(k)} /><span>{v}</span></label>
          ))}
        </div>
      </fieldset>
      {variante === "completo" && (
        <>
          <fieldset>
            <legend>{t.orizzonte} <small>({t.facoltativo})</small></legend>
            <div className="chips">{Object.entries(t.orizzonti).map(([k, v]) => <label key={k} className="chip"><input type="radio" name="orizzonte" value={k} defaultChecked={val(esito, "orizzonte") === k} /><span>{v}</span></label>)}</div>
          </fieldset>
          <fieldset>
            <legend>{t.uso} <small>({t.facoltativo})</small></legend>
            <div className="chips">{Object.entries(t.usi).map(([k, v]) => <label key={k} className="chip"><input type="radio" name="uso" value={k} defaultChecked={val(esito, "uso") === k} /><span>{v}</span></label>)}</div>
          </fieldset>
        </>
      )}
      <label className="consenso"><input type="checkbox" name="pcTrieste" defaultChecked={val(esito, "pcTrieste") === "on"} /><span><b style={{ color: "var(--fg)" }}>{t.pcTrieste}</b><br />{t.pcTriesteAiuto}</span></label>
      <label className="consenso" id={`${id}-privacy`}><input type="checkbox" name="privacy" required /><span>{t.privacy[0]}<a href={privacy} target="_blank" rel="noopener">{t.privacy[1]}</a>{t.privacy[2]}</span></label>
      <button type="submit" className="bottone bottone-primario" disabled={inCorso}>{inCorso ? t.invio : t.iscrivimi} <span className="freccia">→</span></button>
      <p className="aiuto" style={{ marginTop: 14 }}>{t.sottoPC}{completo && <> <a href={completo} style={{ color: "var(--sand-300)" }}>{t.completo} →</a></>}</p>
    </form>
  );
}

export function ModuloProprietario({ l, fonte, privacy, modulo = "proprietario", stima }: { l: Lingua; fonte: string; privacy: string; modulo?: "proprietario" | "valutazione"; stima?: string }) {
  const t = TESTI_MODULI[l];
  const [esito, azione, inCorso] = useActionState(inviaProprietario, INIZIO);
  const [comune, setComune] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => { if (esito.valori) { setComune(val(esito, "comune")); setDesc(val(esito, "descrizione")); } }, [esito]);
  const id = "modulo-proprietario";
  return (
    <form id={id} action={azione} noValidate aria-label={t.presenta} className="modulo">
      <Nascosti l={l} fonte={fonte} extra={{ modulo, ...(stima ? { stima } : {}) }} />
      <Riepilogo esito={esito} l={l} id={id} />
      <p className="etichetta-campo" style={{ margin: "0 0 14px" }}>{t.casa}</p>
      <div className="campo">
        <label htmlFor={`${id}-comune`}>{t.comune} *</label>
        <select id={`${id}-comune`} name="comune" value={comune} onChange={(e) => setComune(e.target.value)} required>
          <option value="">{t.scegliete}</option>
          {Object.entries(t.comuni).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
      </div>
      {comune === "altro" && <div className="campo"><label htmlFor={`${id}-comuneAltro`}>{t.comuneAltro} *</label><input id={`${id}-comuneAltro`} name="comuneAltro" type="text" maxLength={80} defaultValue={val(esito, "comuneAltro")} /></div>}
      <fieldset id={`${id}-tipo`}>
        <legend>{t.tipo} *</legend>
        <div className="chips">{Object.entries(t.tipi).map(([k, v]) => <label key={k} className="chip"><input type="radio" name="tipo" value={k} defaultChecked={val(esito, "tipo") === k} /><span>{v}</span></label>)}</div>
      </fieldset>
      <div className="campo"><label htmlFor={`${id}-mq`}>{t.mq} <small>({t.facoltativo})</small></label><input id={`${id}-mq`} name="mq" type="text" inputMode="numeric" maxLength={12} defaultValue={val(esito, "mq")} /><p className="aiuto">{t.mqAiuto}</p></div>
      <div className="campo">
        <label htmlFor={`${id}-descrizione`}>{t.descrizione} <small>({t.facoltativo})</small></label>
        <textarea id={`${id}-descrizione`} name="descrizione" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <p className="aiuto">{t.descrizioneAiuto} <span style={{ color: desc.length > 800 ? "var(--err)" : undefined }}>{desc.length} / 800</span></p>
      </div>
      <div className="campo"><label htmlFor={`${id}-link`}>{t.link} <small>({t.facoltativo})</small></label><input id={`${id}-link`} name="link" type="url" placeholder="https://" defaultValue={val(esito, "link")} /><p className="aiuto">{t.linkAiuto}</p></div>
      <fieldset>
        <legend>{t.quando} <small>({t.facoltativo})</small></legend>
        <div className="chips">{Object.entries(t.quandi).map(([k, v]) => <label key={k} className="chip"><input type="radio" name="quando" value={k} defaultChecked={val(esito, "quando") === k} /><span>{v}</span></label>)}</div>
      </fieldset>
      <p className="etichetta-campo" style={{ margin: "28px 0 14px" }}>{t.voi}</p>
      <div className="campo"><label htmlFor={`${id}-nome`}>{t.nomeCognome} *</label><input id={`${id}-nome`} name="nome" type="text" autoComplete="name" defaultValue={val(esito, "nome")} /></div>
      <div className="campo" id={`${id}-recapito`}><label htmlFor={`${id}-email`}>{t.email}</label><input id={`${id}-email`} name="email" type="email" autoComplete="email" defaultValue={val(esito, "email")} /></div>
      <div className="campo"><label htmlFor={`${id}-telefono`}>{t.telefonoWa}</label><input id={`${id}-telefono`} name="telefono" type="tel" autoComplete="tel" defaultValue={val(esito, "telefono")} /><p className="aiuto">{t.recapitoAiuto}</p></div>
      <fieldset>
        <legend>{t.canale} <small>({t.facoltativo})</small></legend>
        <div className="chips">{Object.entries(t.canali).map(([k, v]) => <label key={k} className="chip"><input type="radio" name="canale" value={k} defaultChecked={val(esito, "canale") === k} /><span>{v}</span></label>)}</div>
      </fieldset>
      <fieldset>
        <legend>{t.linguaRisposta} <small>({t.facoltativo})</small></legend>
        <div className="chips">{Object.entries(t.lingueRisposta).map(([k, v]) => <label key={k} className="chip"><input type="radio" name="linguaRisposta" value={k} defaultChecked={(val(esito, "linguaRisposta") || (l === "sl" ? "en" : l)) === k} /><span lang={k}>{v}</span></label>)}</div>
        <p className="aiuto" style={{ marginTop: 8 }}>{t.lingueNota}</p>
      </fieldset>
      <label className="consenso" id={`${id}-privacy`}><input type="checkbox" name="privacy" required /><span>{t.privacy[0]}<a href={privacy} target="_blank" rel="noopener">{t.privacy[1]}</a>{t.privacy[2]}</span></label>
      <button type="submit" className="bottone bottone-primario" disabled={inCorso}>{inCorso ? t.invio : t.presenta} <span className="freccia">→</span></button>
      <p className="aiuto" style={{ marginTop: 14 }}>{t.sottoProp}</p>
    </form>
  );
}
