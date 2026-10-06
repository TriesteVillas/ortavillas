import Link from "next/link";
import { percorso } from "@/lib/rotte";
import type { VocePagina } from "./tipi";
import { HOME } from "@/testi/home";
import { SHELL } from "@/content/shell";
import { MONDI } from "@/content/mondi";
import { MONDI_ID, LUOGHI_SLUG, MONDI_SLUG, ORIGINI_ID, STRUMENTI_SLUG } from "@/content/indice";
import { NOMI_ORIGINI } from "@/content/titoli";
import { COLORE_MONDO } from "@/content/luoghi-base";
import { LUOGHI, perTempo } from "@/lib/luoghi";
import { percorso as percorsoStrada } from "@/lib/dati";
import { datiSestante } from "@/lib/sestante-dati";
import { tempo } from "@/lib/fmt";
import { Rilievo, type Etichetta } from "@/components/Rilievo";
import { Volo, type Capitolo } from "@/components/Volo";
import { Sestante, type LuogoUI } from "@/components/Sestante";
import { TempiDaCasa } from "@/components/TempiDaCasa";
import { ModuloPC } from "@/components/Moduli";
import { Metodo } from "@/components/Metodo";
import { Rullo } from "@/components/Rullo";
import { JsonLd, organizzazione } from "@/components/JsonLd";
import { FotoAI, CreditoAI } from "@/components/FotoAI";
import { mediaDi } from "@/content/media";

const ORTA = { lat: 45.81, lon: 8.405 };
// Le lenti del volo: foto rielaborate con l'AI (registro in content/media.ts).
const LENTI: (string | null)[] = [null, "lente-isola", "lente-battelli", "lente-sacro-monte", null];

export const home: VocePagina = {
  meta: (p) => ({ titolo: HOME[p.lingua].titolo, descrizione: HOME[p.lingua].descrizione, og: "home" }),
  Corpo: ({ p }) => {
    const l = p.lingua;
    const t = HOME[l];
    const s = SHELL[l];
    const etichette: Etichetta[] = LUOGHI.map((x) => ({
      id: x.id, testo: x.nome, sotto: tempo(x.daMilano, l), lat: x.lat, lon: x.lon,
      colore: COLORE_MONDO[x.mondo].notte, href: percorso(l, "luoghi", LUOGHI_SLUG[x.id][l]),
      strati: ["tutti", `m-${x.mondo}`, ...(x.frazioneDi ? [] : ["comuni"]), x.id],
      forte: x.id === "orta-san-giulio" || x.id === "omegna" || x.id === "gozzano",
    }));
    const strada = { id: "milano", punti: percorsoStrada("milano"), strati: ["strada"], colore: "var(--gold)", spessore: 3 };
    const nastro = ["gozzano", "orta-san-giulio", "pella", "omegna"].map((id) => LUOGHI.find((x) => x.id === id)!);
    const ui: LuogoUI[] = LUOGHI.map((x) => ({ id: x.id, nome: x.nome, href: percorso(l, "luoghi", LUOGHI_SLUG[x.id][l]), colore: COLORE_MONDO[x.mondo].notte, mondoNome: MONDI[x.mondo][l].nome }));
    const capitoli: Capitolo[] = t.cap.map((c, i) => ({
      id: `cap-${i + 1}`,
      posa: [
        { lat: 45.77, lon: 8.44, zoom: 1.5, spostaX: 0.22 },
        { lat: 45.797, lon: 8.405, zoom: 4.2, spostaX: 0.2 },
        { lat: 45.81, lon: 8.405, zoom: 2.2, spostaX: 0.22 },
        { lat: 45.805, lon: 8.43, zoom: 3, spostaX: 0.22 },
        { lat: 45.81, lon: 8.41, zoom: 1.7, spostaX: 0.2 },
      ][i],
      strati: [["strada", "comuni"], ["orta-san-giulio", "legro", "pettenasco"], ["comuni"], ["m-colline", "omegna", "ronco"], ["tutti"]][i],
      contenuto: (
        <>
          <p className="contatore"><b>{String(i + 1).padStart(2, "0")}</b>/ {String(t.cap.length).padStart(2, "0")} · {t.voloEtichetta}</p>
          <h2 className="t-display-l">{c.h2}</h2>
          <p>{c.corpo}</p>
          {c.scheda.length > 0 && (
            <dl className="scheda-dati">
              {c.scheda.map(([dt, dd]) => <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>)}
            </dl>
          )}
          {LENTI[i] && mediaDi(LENTI[i]!) && (
            <figure style={{ margin: 0 }} className="lente-ai">
              <div className="lente"><FotoAI m={mediaDi(LENTI[i]!)!} l={l} taglio="1x1" /></div>
              <figcaption style={{ marginTop: 10 }}><CreditoAI m={mediaDi(LENTI[i]!)!} l={l} /></figcaption>
            </figure>
          )}
          {i === t.cap.length - 1 && (
            <>
              <p className="etichetta-campo" style={{ margin: "8px 0 10px" }}>{t.mondiTitolo}</p>
              <ul className="mondi-lista">
                {MONDI_ID.map((m) => (
                  <li key={m}><Link href={percorso(l, "luoghi", MONDI_SLUG[m][l])} style={{ ["--c" as string]: COLORE_MONDO[m].notte }}><span className="nome">{MONDI[m][l].nome}</span><span className="sotto">{MONDI[m][l].sotto}</span></Link></li>
                ))}
              </ul>
              <p className="etichetta-campo" style={{ margin: "0 0 6px" }}>{t.luoghiTitolo}</p>
              <ul className="luoghi-griglia">
                {perTempo().map((x) => (
                  <li key={x.id}><Link href={percorso(l, "luoghi", LUOGHI_SLUG[x.id][l])} style={{ ["--c" as string]: COLORE_MONDO[x.mondo].notte }}><span className="nome">{x.nome}</span><span className="min">{tempo(x.daMilano, l)}</span></Link></li>
                ))}
              </ul>
              <p className="aiuto" style={{ marginTop: 12 }}>{t.mondiNota}</p>
              <p style={{ marginTop: 18 }}><Link className="link-freccia" href={percorso(l, "luoghi")}>{t.esplora} <span className="freccia">→</span></Link></p>
            </>
          )}
        </>
      ),
    }));
    return (
      <>
        <JsonLd dati={organizzazione(l, true)} />
        <section className="hero">
          <Rilievo posa={{ lat: ORTA.lat, lon: ORTA.lon, zoom: 1.9, zoomTelefono: 1.6, spostaX: 0.2 }} etichette={etichette} strati={["tutti"]} alt={t.rilievoAlt} priorita />
          <div className="reticolo sx" /><div className="reticolo dx" />
          <div className="contenitore hero-dentro">
            <p className="coordinate" style={{ marginBottom: 18 }}>{t.coordinate}</p>
            <p className="occhiello">{s.edizione}</p>
            <h1 className="t-display-xl">{t.h1}</h1>
            <p className="nastro">
              <b>{t.nastroDa}</b> →
              {nastro.map((x, i) => <span key={x.id}>{i > 0 && "· "}{x.nome} <span className="oro">{tempo(x.daMilano, l)}</span></span>)}
              <span>· {t.nastroNota}</span>
            </p>
            <div className="bottoni">
              <a className="bottone bottone-primario" href="#collezione">{t.ctaPC} <span className="freccia">→</span></a>
              <a className="bottone bottone-secondario" href="#volo">{t.ctaCarta}</a>
            </div>
            <p className="stato-lungo">{t.statoLungo}</p>
          </div>
        </section>

        <Volo capitoli={capitoli} etichette={etichette} tracciati={[strada]} alt={t.rilievoAlt} aria={t.voloAria} />

        <section className="sezione" id="da-casa">
          <div className="contenitore">
            <div className="intestazione">
              <p className="occhiello">{t.daCasa.occhiello}</p>
              <h2 className="t-display-l">{t.daCasa.h2}</h2>
              <p className="t-lead">{t.daCasa.lead}</p>
            </div>
            <Sestante dati={datiSestante()} luoghi={ui} l={l} variante="breve" nomiOrigini={Object.fromEntries(ORIGINI_ID.map((o) => [o, NOMI_ORIGINI[o][l]])) as Record<(typeof ORIGINI_ID)[number], string>}
              hrefPC={percorso(l, "pc")} hrefTrova={percorso(l, "strumenti", STRUMENTI_SLUG.trova[l])} fonte={t.daCasa.nota} />
            <TempiDaCasa l={l} />
            <p style={{ marginTop: 24 }}><Link className="link-freccia" href={percorso(l, "distanze")}>{t.daCasa.tutteDistanze} <span className="freccia">→</span></Link></p>
          </div>
        </section>

        <section className="sezione" id="metodo">
          <div className="contenitore">
            <div className="intestazione">
              <p className="occhiello">{t.metodo.occhiello}</p>
              <h2 className="t-display-l">{t.metodo.h2}</h2>
              <p className="t-lead">{t.metodo.lead}</p>
            </div>
            <Metodo l={l} />
            <div style={{ marginTop: 72 }}>
              <h3 className="t-h3" style={{ marginBottom: 32 }}>{t.chiCompra.h3}</h3>
              <div className="griglia-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                {([[t.chiCompra.colA, t.chiCompra.numA, t.chiCompra.cosaA, t.chiCompra.altriA], [t.chiCompra.colB, t.chiCompra.numB, t.chiCompra.cosaB, t.chiCompra.altriB]] as const).map(([col, num, cosa, altri]) => (
                  <div key={col} className="numero">
                    <p className="t-data-label" style={{ color: "var(--sand-300)" }}>{col}</p>
                    <span className="valore t-num-xl"><Rullo testo={num} /></span>
                    <span className="cosa">{cosa}</span>
                    <details className="ripiega">
                      <summary>{t.chiCompra.altri}</summary>
                      <div><dl className="scheda-dati">{altri.map(([n, c]) => <div key={c}><dt>{c}</dt><dd>{n}</dd></div>)}</dl></div>
                    </details>
                  </div>
                ))}
              </div>
              <p className="nota-fonte">{t.chiCompra.nota}</p>
              <p className="t-h3" style={{ marginTop: 48, maxWidth: "24ch" }}>{t.chiCompra.chiusa}</p>
              <p style={{ marginTop: 16 }}><Link className="link-freccia" href={percorso(l, "proprietari")}>{t.chiCompra.proprietari} <span className="freccia">→</span></Link></p>
            </div>
          </div>
        </section>

        <section className="sezione" id="collezione">
          <div className="contenitore griglia-2">
            <div>
              <p className="occhiello">{t.collezione.occhiello}</p>
              <h2 className="t-display-l">{t.collezione.h2}</h2>
              <p style={{ display: "flex", alignItems: "baseline", gap: 18, margin: "32px 0 0" }}>
                <span className="t-num-xl" style={{ color: "var(--gold)" }}>0</span>
                <span style={{ color: "var(--fg-2)", maxWidth: "36ch" }}>{t.collezione.zero}</span>
              </p>
              <p style={{ color: "var(--fg-2)", marginTop: 28 }}>{t.collezione.trieste}</p>
              <p><a className="link-freccia" href="https://triestevillas.com/private" rel="noopener">{t.collezione.triesteLink} ↗</a></p>
              <p style={{ color: "var(--fg-2)", marginTop: 28 }}>{t.collezione.invito}</p>
            </div>
            <ModuloPC l={l} variante="breve" fonte="OV · Home · PC" privacy={percorso(l, "privacy")} completo={`${percorso(l, "pc")}#iscrizione`} />
          </div>
        </section>

        <section className="sezione" id="gruppo">
          <div className="contenitore">
            <div className="intestazione">
              <p className="occhiello">{t.gruppo.occhiello}</p>
              <h2 className="t-display-l">{t.gruppo.h2}</h2>
              <p className="t-lead">{t.gruppo.lead}</p>
            </div>
            <div className="numeri">
              {t.gruppo.numeri.map(([n, c]) => (
                <div key={c} className="numero"><span className="valore t-num-xl"><Rullo testo={n} /></span><span className="cosa">{c}</span></div>
              ))}
            </div>
            <ul className="schede" style={{ listStyle: "none", padding: 0, marginTop: 56 }}>
              {t.gruppo.marchi.map((m) => (
                <li key={m.nome}><a className="scheda" href={m.href} rel="noopener"><span className="t-h3">{m.nome}</span><p>{m.dove}</p><span className="piede">{m.href.replace(/^https:\/\/|\/$/g, "")} ↗</span></a></li>
              ))}
            </ul>
            <div className="scheda" style={{ marginTop: 32, maxWidth: 520 }}>
              <p className="t-data-label" style={{ color: "var(--sand-300)", margin: 0 }}>{t.gruppo.canale}</p>
              <span className="t-num-xl" style={{ color: "var(--gold)" }}><Rullo testo={t.gruppo.canaleNum} /></span>
              <p>{t.gruppo.canaleSotto}</p>
              <a className="link-freccia" href="https://www.youtube.com/@TriesteVillasImmobiliare" rel="noopener">{t.gruppo.canaleLink} ↗</a>
            </div>
            <p className="nota-fonte">{t.gruppo.nota}</p>
          </div>
        </section>

        {l === "sl" && (
          // Solo in sloveno: il rimando a SloveniaVillas voluto da Martino il 06/10 (commit 09e072b
          // sul sito statico), riportato qui con lo stesso testo e lo stesso limite detto.
          <section className="sezione" id="sloveniavillas">
            <div className="contenitore" style={{ maxWidth: 860 }}>
              <p className="occhiello">Iz iste skupine · SloveniaVillas</p>
              <h2 className="t-display-l">Slovenska obala in Kras, izmerjena iz Trsta</h2>
              <p className="t-lead">SloveniaVillas je atlas slovenske obale in Krasa: enajst krajev v štirih svetovih, vodniki za kupce in za lastnike ter sedem orodij, zgrajenih na javnih slovenskih podatkih.</p>
              <p style={{ color: "var(--fg-2)" }}>Kupci, ki iščejo dom v Trstu, predvsem avstrijski in nemški, gledajo tudi čez mejo. SloveniaVillas jim predstavlja obalo in Kras. Če imate hišo na obali ali na Krasu, si oglejte stran za lastnike.</p>
              <p className="aiuto">V Sloveniji danes ne opravljamo posredovanja; dejavnost bomo začeli v letu 2027.</p>
              <div className="bottoni" style={{ marginTop: 20 }}>
                <a className="bottone bottone-primario" href="https://sloveniavillas.com/sl" rel="noopener">Odprite SloveniaVillas ↗</a>
                <a className="bottone bottone-secondario" href="https://sloveniavillas.com/sl/za-lastnike" rel="noopener">Za lastnike ↗</a>
              </div>
            </div>
          </section>
        )}

        <section className="epilogo" id="epilogo">
          <video className="epilogo-video" src="/assets/video/hero.mp4" poster="/assets/images/hero-poster.jpg" autoPlay muted loop playsInline aria-hidden="true" />
          <div className="epilogo-velo" />
          <div className="contenitore epilogo-dentro">
            <p className="occhiello">{t.epilogo.occhiello}</p>
            <h2 className="t-display-l" style={{ maxWidth: "16ch" }}>{t.epilogo.h2}</h2>
            <div className="bottoni" style={{ marginTop: 28 }}>
              <a className="bottone bottone-primario" href="#collezione">{t.ctaPC} <span className="freccia">→</span></a>
              <Link className="bottone bottone-secondario" href={percorso(l, "guide")}>{t.epilogo.guide} <span className="freccia">→</span></Link>
            </div>
            <p className="credito" style={{ marginTop: 28 }}>{t.epilogo.video}</p>
          </div>
        </section>
      </>
    );
  },
};
