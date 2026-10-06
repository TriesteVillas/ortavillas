"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Segno } from "./Segno";

export type VoceNav = { href: string; testo: string; sotto: string; pill?: boolean; attiva?: boolean };
export type VoceLingua = { codice: string; href: string; nome: string; corrente: boolean; tradotta: boolean; aria?: string };

export function Testata(p: {
  home: string; logoAria: string; navAria: string; linguaAria: string; menu: string; chiudi: string;
  voci: VoceNav[]; lingue: VoceLingua[]; carta: boolean;
}) {
  const [solida, setSolida] = useState(false);
  const [aperto, setAperto] = useState(false);
  useEffect(() => {
    const f = () => setSolida(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    if (!aperto) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAperto(false);
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [aperto]);
  const Lingue = () => (
    <nav className="lingue" aria-label={p.linguaAria}>
      {p.lingue.map((l) => (
        <a key={l.codice} href={l.href} hrefLang={l.codice} lang={l.codice} aria-current={l.corrente ? "true" : undefined}
          aria-label={l.aria} rel={l.tradotta ? undefined : "nofollow"} style={l.tradotta ? undefined : { opacity: 0.7 }}>
          {l.codice.toUpperCase()}
        </a>
      ))}
    </nav>
  );
  return (
    <>
      <header className="testata" data-stato={solida ? "solid" : "transparent"} data-superficie={p.carta ? "carta" : undefined}>
        <div className="contenitore testata-dentro">
          <Link className="logo" href={p.home} aria-label={p.logoAria}>
            <Segno />
            <span className="logo-parola">OrtaVillas</span>
          </Link>
          <nav className="nav-principale" aria-label={p.navAria}>
            {p.voci.map((v) => (
              <Link key={v.href} href={v.href} className={v.pill ? "pill" : undefined} aria-current={v.attiva ? "page" : undefined}>{v.testo}</Link>
            ))}
          </nav>
          <span className="separatore desktop-solo" />
          <span className="desktop-solo"><Lingue /></span>
          <a className="by-tsv desktop-solo" href="https://triestevillas.com/" target="_blank" rel="noopener">by TriesteVillas ↗</a>
          <button className="menu-bottone" type="button" aria-expanded={aperto} aria-controls="menu-pannello" onClick={() => setAperto(true)}>
            {p.menu}
            <svg viewBox="0 0 22 12" aria-hidden="true"><path d="M0 1h22M6 11h16" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
      </header>
      <div id="menu-pannello" className="menu-pannello" hidden={!aperto} role="dialog" aria-modal="true" aria-label={p.menu}>
        <div className="contenitore">
          <div className="menu-testa">
            <Link className="logo" href={p.home} onClick={() => setAperto(false)}><Segno /><span className="logo-parola">OrtaVillas</span></Link>
            <button className="menu-bottone" type="button" onClick={() => setAperto(false)}>{p.chiudi} ✕</button>
          </div>
          <ul className="menu-voci">
            {p.voci.map((v) => (
              <li key={v.href}><Link href={v.href} onClick={() => setAperto(false)}><span className="voce">{v.testo}</span><span className="sotto">{v.sotto}</span></Link></li>
            ))}
          </ul>
          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
            <Lingue />
            <a className="by-tsv" href="https://triestevillas.com/" target="_blank" rel="noopener">by TriesteVillas ↗</a>
          </div>
        </div>
      </div>
    </>
  );
}
