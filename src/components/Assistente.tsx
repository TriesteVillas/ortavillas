"use client";
// L'assistente AI flottante. Contratto con /api/chat uguale a sloveniavillas:
// { sid, locale, pagina, messages, identita? } → { text?, gate?, blocked?, spento?, pagine?, error? }.
import { useEffect, useRef, useState } from "react";
import { SHELL, RECAPITI, waLink } from "@/content/shell";
import type { Lingua } from "@/lib/rotte";
import { Segno } from "./Segno";

type Msg = { role: "user" | "assistant"; content: string; pagine?: { titolo: string; href: string }[] };
type Stato = { sid: string; msgs: Msg[]; gate: boolean; blocked: boolean; identita?: { nome: string; email: string; telefono: string; consenso: boolean } };

const CHIAVE = "ov-assistente";
const nuovoSid = () => "ov_" + Array.from(crypto.getRandomValues(new Uint8Array(10))).map((b) => (b % 36).toString(36)).join("");

function Testo({ t }: { t: string }) {
  // mini-markdown: paragrafi, elenchi, link [x](y). Niente HTML grezzo.
  const blocchi = t.split(/\n{2,}/);
  const inline = (s: string, k: number) => {
    const parti: React.ReactNode[] = [];
    const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
    let m: RegExpExecArray | null; let i = 0; let n = 0;
    while ((m = re.exec(s))) {
      if (m.index > i) parti.push(s.slice(i, m.index));
      if (m[1]) parti.push(<a key={`${k}-${n++}`} href={m[2]}>{m[1]}</a>);
      else parti.push(<strong key={`${k}-${n++}`}>{m[3]}</strong>);
      i = m.index + m[0].length;
    }
    if (i < s.length) parti.push(s.slice(i));
    return parti;
  };
  return (
    <>
      {blocchi.map((b, k) => {
        const righe = b.split("\n");
        if (righe.every((r) => /^\s*([-*•·]|\d+\.)\s+/.test(r))) {
          return <ul key={k}>{righe.map((r, j) => <li key={j}>{inline(r.replace(/^\s*([-*•·]|\d+\.)\s+/, ""), j)}</li>)}</ul>;
        }
        return <p key={k}>{inline(b, k)}</p>;
      })}
    </>
  );
}

export function Assistente({ l, privacy }: { l: Lingua; privacy: string }) {
  const s = SHELL[l].assistente;
  const [aperto, setAperto] = useState(false);
  const [st, setSt] = useState<Stato | null>(null);
  const [testo, setTesto] = useState("");
  const [attesa, setAttesa] = useState(false);
  const [errore, setErrore] = useState<string | null>(null);
  const [id, setId] = useState({ nome: "", contatto: "", consenso: false });
  const log = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const v = sessionStorage.getItem(CHIAVE);
      setSt(v ? JSON.parse(v) : { sid: nuovoSid(), msgs: [], gate: false, blocked: false });
    } catch { setSt({ sid: nuovoSid(), msgs: [], gate: false, blocked: false }); }
  }, []);
  useEffect(() => { if (st) try { sessionStorage.setItem(CHIAVE, JSON.stringify(st)); } catch { /* */ } }, [st]);
  useEffect(() => { log.current?.scrollTo({ top: log.current.scrollHeight }); }, [st?.msgs.length, attesa]);
  useEffect(() => {
    if (!aperto) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAperto(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [aperto]);

  async function invia(domanda: string, stato: Stato) {
    const q = domanda.trim();
    if (!q || attesa) return;
    if (q.length > 1500) { setErrore(s.lunga); return; }
    const msgs: Msg[] = [...stato.msgs, { role: "user", content: q }];
    const nuovo = { ...stato, msgs };
    setSt(nuovo); setTesto(""); setAttesa(true); setErrore(null);
    try {
      const r = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sid: stato.sid, locale: l, pagina: location.pathname, messages: msgs.map(({ role, content }) => ({ role, content })), identita: stato.identita }),
      });
      if (r.status === 429) { setErrore(s.troppe); setSt({ ...nuovo }); return; }
      const j = await r.json();
      if (j.error === "too_long") { setErrore(s.lunga); return; }
      if (j.gate) { setSt({ ...nuovo, msgs: stato.msgs, gate: true }); setTesto(q); return; }
      if (j.blocked) { setSt({ ...nuovo, blocked: true }); return; }
      if (j.spento) { setSt({ ...nuovo, msgs: [...msgs, { role: "assistant", content: s.spento, pagine: j.pagine }] }); return; }
      if (!j.text) throw new Error("vuoto");
      setSt({ ...nuovo, msgs: [...msgs, { role: "assistant", content: j.text }] });
    } catch {
      setErrore(s.errore);
    } finally { setAttesa(false); }
  }

  if (!st) return null;
  return (
    <>
      {!aperto && (
        <button type="button" className="assistente-bottone" aria-label={s.aria} onClick={() => setAperto(true)}>
          <Segno className="logo-segno" />
          <span className="etichette"><span className="apri">{s.apri}</span><span className="sotto">{s.sotto}</span></span>
        </button>
      )}
      {aperto && (
        <div className="assistente-pannello" role="dialog" aria-modal="false" aria-label={s.titolo} id="ov-assistente">
          <div className="assistente-testa">
            <div><b>{s.titolo}</b><small>{s.sottotitolo}</small></div>
            <div>
              <button type="button" aria-label={s.nuova} title={s.nuova} onClick={() => { setSt({ sid: nuovoSid(), msgs: [], gate: false, blocked: false }); setErrore(null); }}>+</button>
              <button type="button" aria-label={s.chiudi} title={s.chiudi} onClick={() => setAperto(false)}>✕</button>
            </div>
          </div>
          <div className="assistente-log" ref={log} role="log" aria-live="polite">
            <p className="assistente-avviso">{s.avviso} <a href={privacy}>{s.privacy}</a></p>
            {st.msgs.length === 0 && (
              <>
                <p style={{ color: "var(--fg-2)", margin: 0 }}>{s.vuoto}</p>
                <p className="t-data-label" style={{ color: "var(--sand-300)", margin: "8px 0 0" }}>{s.suggerimentiTitolo}</p>
                <div className="assistente-suggerimenti">
                  {s.suggerimenti.map((q) => <button key={q} type="button" onClick={() => invia(q, st)}>{q}</button>)}
                </div>
              </>
            )}
            {st.msgs.map((m, i) => (
              <div key={i} className={`msg ${m.role === "user" ? "utente" : "ai"}`}>
                {m.role === "user" ? <p>{m.content}</p> : <Testo t={m.content} />}
                {m.pagine && m.pagine.length > 0 && (
                  <>
                    <p style={{ marginTop: 8 }}>{s.spentoPagine}</p>
                    <ul>{m.pagine.map((p) => <li key={p.href}><a href={p.href}>{p.titolo}</a></li>)}</ul>
                  </>
                )}
              </div>
            ))}
            {attesa && <div className="msg ai"><span className="sr-only">{s.pensa}</span><span className="puntini" aria-hidden="true"><span /><span /><span /></span></div>}
            {errore && <div className="esito" data-tipo="errore">{errore}</div>}
            {st.gate && (
              <GateForm l={l} privacy={privacy} id={id} setId={setId} onOk={() => {
                const tel = /\d{6,}/.test(id.contatto.replace(/\D/g, "")) && !id.contatto.includes("@");
                const identita = { nome: id.nome, email: tel ? "" : id.contatto, telefono: tel ? id.contatto : "", consenso: true };
                const nuovo = { ...st, gate: false, identita };
                setSt(nuovo);
                invia(testo, nuovo);
              }} />
            )}
            {st.blocked && <div className="esito">{l === "it" ? "Questa conversazione è chiusa. Per continuare, scriveteci." : l === "de" ? "Dieses Gespräch ist beendet. Schreiben Sie uns, um fortzufahren." : l === "sl" ? "Ta pogovor je zaključen. Za nadaljevanje nam pišite." : "This conversation is closed. To continue, write to us."}</div>}
          </div>
          {!st.gate && !st.blocked && (
            <form className="assistente-form" onSubmit={(e) => { e.preventDefault(); invia(testo, st); }}>
              <textarea value={testo} maxLength={1500} rows={1} placeholder={s.placeholder} aria-label={s.placeholder}
                onChange={(e) => setTesto(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); invia(testo, st); } }} />
              <button type="submit" className="bottone bottone-primario" disabled={attesa}>{s.invia}</button>
            </form>
          )}
          <p className="assistente-piede">{s.piede} {s.persona} <a href={waLink(s.waTesto)}>WhatsApp</a> · <a href={`mailto:${RECAPITI.email}`}>Email</a></p>
        </div>
      )}
    </>
  );
}

function GateForm({ l, privacy, id, setId, onOk }: { l: Lingua; privacy: string; id: { nome: string; contatto: string; consenso: boolean }; setId: (v: { nome: string; contatto: string; consenso: boolean }) => void; onOk: () => void }) {
  const T = {
    it: ["Ancora una cosa, prima di continuare", "Nome", "Email o telefono", "Basta l'email oppure il telefono.", "Ho letto l'informativa sulla privacy e acconsento al trattamento dei miei dati per questa conversazione.", "Continua", "Usiamo questi dati solo per rispondervi su questa conversazione."],
    en: ["One more thing before we continue", "Name", "Email or phone", "Email or phone is enough.", "I have read the privacy notice and consent to the processing of my data for this conversation.", "Continue", "We use these details only to answer you about this conversation."],
    de: ["Noch eine Sache, bevor wir weitermachen", "Name", "E-Mail oder Telefon", "E-Mail oder Telefon genügt.", "Ich habe die Datenschutzerklärung gelesen und willige in die Verarbeitung meiner Daten für dieses Gespräch ein.", "Weiter", "Wir verwenden diese Angaben nur, um Ihnen zu diesem Gespräch zu antworten."],
    sl: ["Še nekaj, preden nadaljujemo", "Ime", "E-pošta ali telefon", "Dovolj je e-pošta ali telefon.", "Prebral sem obvestilo o zasebnosti in soglašam z obdelavo svojih podatkov za ta pogovor.", "Nadaljuj", "Te podatke uporabimo samo za odgovor v tem pogovoru."],
  }[l];
  const valido = id.nome.trim().length >= 2 && (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(id.contatto.trim()) || id.contatto.replace(/\D/g, "").length >= 6) && id.consenso;
  return (
    <form className="esito" onSubmit={(e) => { e.preventDefault(); if (valido) onOk(); }}>
      <p style={{ fontWeight: 600, marginTop: 0 }}>{T[0]}</p>
      <div className="campo"><label htmlFor="gate-nome">{T[1]}</label><input id="gate-nome" type="text" value={id.nome} onChange={(e) => setId({ ...id, nome: e.target.value })} autoComplete="name" /></div>
      <div className="campo"><label htmlFor="gate-c">{T[2]}</label><input id="gate-c" type="text" value={id.contatto} onChange={(e) => setId({ ...id, contatto: e.target.value })} /><p className="aiuto">{T[3]}</p></div>
      <label className="consenso"><input type="checkbox" checked={id.consenso} onChange={(e) => setId({ ...id, consenso: e.target.checked })} /><span>{T[4]} <a href={privacy}>Privacy</a></span></label>
      <p className="aiuto">{T[6]}</p>
      <button type="submit" className="bottone bottone-primario" disabled={!valido} style={{ marginTop: 10 }}>{T[5]}</button>
    </form>
  );
}
