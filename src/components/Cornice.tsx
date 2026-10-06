import Link from "next/link";
import { LINGUE, NOME_LINGUA, percorso, type ChiavePagina, type Lingua } from "@/lib/rotte";
import { inAltraLingua, type Pagina } from "@/lib/risolvi";
import { SHELL, RECAPITI, waLink } from "@/content/shell";
import { FIGLI, GUIDE_ID, LUOGHI_ID, MONDI_ID, ORIGINI_ID, STRUMENTI_ID, GUIDE_SLUG, STRUMENTI_SLUG, LUOGHI_SLUG, ORIGINI_SLUG } from "@/content/indice";
import { TITOLI_GUIDE, TITOLI_STRUMENTI, NOMI_ORIGINI } from "@/content/titoli";
import { luogoBase } from "@/content/luoghi-base";
import { Testata } from "./Testata";
import { Segno } from "./Segno";
import { BottoniColophon, Consenso, Osservatore } from "./Preferenze";
import { Assistente } from "./Assistente";

export function Cornice({ pagina, carta = false, children }: { pagina: Pagina; carta?: boolean; children: React.ReactNode }) {
  const l = pagina.lingua;
  const s = SHELL[l];
  const voci: { k: ChiavePagina; testo: string; sotto: string; pill?: boolean }[] = [
    { k: "luoghi", testo: s.nav.luoghi, sotto: s.menuSotto.luoghi(LUOGHI_ID.length, MONDI_ID.length) },
    { k: "distanze", testo: s.nav.distanze, sotto: s.menuSotto.distanze(ORIGINI_ID.length) },
    { k: "guide", testo: s.nav.guide, sotto: s.menuSotto.guide(GUIDE_ID.length) },
    { k: "strumenti", testo: s.nav.strumenti, sotto: s.menuSotto.strumenti(STRUMENTI_ID.length) },
    { k: "pc", testo: s.nav.pc, sotto: s.menuSotto.pc, pill: true },
  ];
  const lingue = LINGUE.map((x) => {
    const h = inAltraLingua(pagina, x);
    return {
      codice: x, nome: NOME_LINGUA[x], corrente: x === l, tradotta: !!h,
      href: h ?? percorso(x, "home"), aria: h ? undefined : s.nonTradotta(NOME_LINGUA[x]),
    };
  });
  const c = s.colophon;
  return (
    <>
      <a className="salta" href="#contenuto">{s.salta}</a>
      <Testata
        home={percorso(l, "home")} logoAria={s.logoAria} navAria={s.navAria} linguaAria={s.linguaAria}
        menu={s.menu} chiudi={s.chiudi} carta={carta}
        voci={voci.map((v) => ({ href: percorso(l, v.k), testo: v.testo, sotto: v.sotto, pill: v.pill, attiva: pagina.chiave === v.k }))}
        lingue={lingue}
      />
      <main id="contenuto" tabIndex={-1} className={carta ? "superficie-carta" : undefined}>
        {children}
      </main>
      <StatoBlocco l={l} />
      <footer className="colophon">
        <div className="contenitore">
          <div className="colophon-alto">
            <div>
              <Link className="logo" href={percorso(l, "home")}>
                <Segno />
                <span><span className="logo-parola">OrtaVillas</span><br /><span className="by-tsv">by TriesteVillas</span></span>
              </Link>
              <p className="claim">{c.claim}</p>
            </div>
            <div className="origine">
              <svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M14 1v8M14 19v8M1 14h8M19 14h8" stroke="currentColor" strokeWidth="1.4" /></svg>
              <div>
                <p className="t-data-label" style={{ color: "var(--sand-300)" }}>{c.origineTitolo}</p>
                <p>{c.origineNome}</p>
                <p className="coordinate">45.464° N · 9.191° E</p>
              </div>
            </div>
          </div>
          <div className="colonne">
            <div>
              <h3>{c.colonne.luoghi}</h3>
              <ul>
                {LUOGHI_ID.filter((id) => !luogoBase(id).frazioneDi).map((id) => (
                  <li key={id}><Link href={percorso(l, "luoghi", LUOGHI_SLUG[id][l])}>{luogoBase(id).nome}</Link></li>
                ))}
                <li><Link href={percorso(l, "luoghi")}>{c.tutti.luoghi}</Link></li>
              </ul>
            </div>
            <div>
              <h3>{c.colonne.distanze}</h3>
              <ul>
                {ORIGINI_ID.map((id) => (
                  <li key={id}><Link href={percorso(l, "distanze", ORIGINI_SLUG[id][l])}>{c.da(NOMI_ORIGINI[id][l])}</Link></li>
                ))}
                <li><Link href={percorso(l, "distanze")}>{c.tutti.distanze}</Link></li>
              </ul>
            </div>
            <div>
              <h3>{c.colonne.guide}</h3>
              <ul>
                {GUIDE_ID.map((id) => (
                  <li key={id}><Link href={percorso(l, "guide", GUIDE_SLUG[id][l])}>{TITOLI_GUIDE[id][l].titolo}</Link></li>
                ))}
                <li><Link href={percorso(l, "guide")}>{c.tutti.guide}</Link></li>
              </ul>
            </div>
            <div>
              <h3>{c.colonne.strumenti}</h3>
              <ul>
                {STRUMENTI_ID.map((id) => (
                  <li key={id}><Link href={percorso(l, "strumenti", STRUMENTI_SLUG[id][l])}>{TITOLI_STRUMENTI[id][l].titolo}</Link></li>
                ))}
                <li><Link href={percorso(l, "strumenti")}>{c.tutti.strumenti}</Link></li>
              </ul>
            </div>
            <div>
              <h3>{c.colonne.servizi}</h3>
              <ul>
                <li><Link href={percorso(l, "proprietari")}>{c.servizi.proprietari}</Link></li>
                <li><Link href={percorso(l, "agenzie")}>{c.servizi.agenzie}</Link></li>
                <li><Link href={percorso(l, "pc")}>{c.servizi.pc}</Link></li>
                <li><Link href={percorso(l, "chiSiamo")}>{c.servizi.chiSiamo}</Link></li>
                <li><Link href={percorso(l, "contatti")}>{c.servizi.contatti}</Link></li>
              </ul>
              <h3 style={{ marginTop: 24 }}>{c.colonne.edizione}</h3>
              <ul>
                <li><Link href={percorso(l, "dati")}>{c.edizioneLink.dati}</Link></li>
                <li><Link href={percorso(l, "ai")}>{c.edizioneLink.ai}</Link></li>
                <li><Link href={percorso(l, "privacy")}>{c.edizioneLink.privacy}</Link></li>
                <li><Link href={percorso(l, "noteLegali")}>{c.edizioneLink.noteLegali}</Link></li>
                <li><Link href={percorso(l, "cookie")}>{c.edizioneLink.cookie}</Link></li>
              </ul>
            </div>
            <div>
              <h3>{c.colonne.fonti}</h3>
              <ul>
                <li><a href="https://www.openstreetmap.org/copyright" rel="noopener">{c.fonti.osm}</a></li>
                <li><a href="https://registry.opendata.aws/terrain-tiles/" rel="noopener">{c.fonti.rilievo}</a></li>
                <li><a href="https://project-osrm.org/" rel="noopener">{c.fonti.osrm}</a></li>
                <li><a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/fabbricatiterreni/omi" rel="noopener">{c.fonti.prezzi}</a></li>
              </ul>
              <h3 style={{ marginTop: 24 }}>{c.colonne.gruppo}</h3>
              <ul>
                <li><a href="https://triestevillas.com/" rel="noopener">TriesteVillas ↗</a></li>
                <li><a href="https://triesteimmobiliare.com/" rel="noopener">TriesteImmobiliare ↗</a></li>
                <li><a href="https://triesteaffitti.com/" rel="noopener">TriesteAffitti ↗</a></li>
                <li><a href="https://friulivillas.com/" rel="noopener">FriuliVillas ↗</a></li>
                <li><a href="https://lignanovillas.com/" rel="noopener">LignanoVillas ↗</a></li>
                <li><a href="https://sloveniavillas.com/" rel="noopener">SloveniaVillas ↗</a></li>
              </ul>
            </div>
            <div>
              <h3>{c.colonne.recapiti}</h3>
              <ul>
                <li>{c.email} <a href={`mailto:${RECAPITI.email}`}>{RECAPITI.email}</a></li>
                <li>{c.whatsapp} <a href={waLink(s.waTesto)}>{RECAPITI.telefono}</a></li>
                <li>{c.telefono} <a href={`tel:${RECAPITI.tel}`}>{RECAPITI.telefono}</a></li>
              </ul>
              <p className="t-small" style={{ color: "var(--fg-3)", marginTop: 12 }}>{c.lingueRisposta}</p>
            </div>
          </div>
          <div className="colophon-basso">
            <p style={{ margin: 0 }}>{s.edizione} · <Link href={`${percorso(l, "dati")}#citare`}>{c.comeCitare}</Link></p>
            <p style={{ margin: 0 }}>{c.fotoRiga} <Link href={percorso(l, "ai")}>{c.fotoLink}</Link></p>
            <p style={{ margin: 0 }}>{c.legale}</p>
            <BottoniColophon movimento={[c.movimento(true), c.movimento(false)]} sotto={c.movimentoSotto} cookie={c.preferenzeCookie} />
          </div>
        </div>
      </footer>
      <Consenso testo={s.cookie.testo} link={s.cookie.link} href={percorso(l, "cookie")} rifiuto={s.cookie.rifiuto} accetto={s.cookie.accetto} aria={s.cookie.aria} />
      <Assistente l={l} privacy={percorso(l, "privacy")} />
      <Osservatore />
    </>
  );
}

function StatoBlocco({ l }: { l: Lingua }) {
  const st = SHELL[l].stato;
  return (
    <section className="stato-blocco" aria-labelledby="stato-piede">
      <div className="contenitore">
        <h2 id="stato-piede" className="occhiello" style={{ margin: 0 }}>{st.titolo}</h2>
        <dl>
          {[st.oggi, st.collezione, st.risposte].map(([dt, dd]) => (
            <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
          ))}
        </dl>
        <Link className="link-freccia" href={`${percorso(l, "chiSiamo")}#stato`}>{st.link} <span className="freccia">→</span></Link>
      </div>
    </section>
  );
}

export { FIGLI };
