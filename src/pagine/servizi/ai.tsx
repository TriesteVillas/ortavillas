import type { VocePagina } from "../tipi";
import { AI } from "@/testi/servizi/ai";
import { CASO_TRIESTE } from "@/testi/servizi/comune";
import Link from "next/link";
import { MEDIA, src } from "@/content/media";
import { luogo } from "@/lib/luoghi";
import { LUOGHI_SLUG } from "@/content/indice";
import { percorso } from "@/lib/rotte";
import { CorpoCarta, LdPagina, SezioneCarta, TestataCarta } from "@/components/servizi/Parti";

const DATA = { it: "6 ottobre 2026 · verificata a occhio, confrontando con l'originale", en: "6 October 2026 · checked by eye against the original", de: "6. Oktober 2026 · per Augenschein mit dem Original verglichen", sl: "6. oktober 2026 · preverjeno na oko ob izvirniku" } as const;

export const ai: VocePagina = {
  carta: () => true,
  meta: (p) => ({ titolo: AI[p.lingua].titolo, descrizione: AI[p.lingua].descrizione, og: "ai" }),
  Corpo: ({ p }) => {
    const l = p.lingua;
    const t = AI[l];
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="ai" nome={t.h1} descrizione={t.descrizione} />
        <TestataCarta l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} briciola={t.briciola} />
        <CorpoCarta l={l} voci={[["regole", t.indice.regole], ["registro", t.indice.registro], ["reale", t.indice.reale], ["caso", t.indice.caso]]}>
          <SezioneCarta id="regole" titolo={t.indice.regole}>
            <ol>{t.regole.map(([a, b]) => <li key={a}><b>{a}</b> {b}</li>)}</ol>
          </SezioneCarta>
          <SezioneCarta id="registro" titolo={t.indice.registro}>
            <div className="sv-registro-vuoto" role="status"><b>{MEDIA.length}</b><span>{t.registro.caption}</span></div>
            <p style={{ marginTop: 18 }}>{t.registro.testo}</p>
            <div className="tabella-scorre" role="region" tabIndex={0} aria-label={t.registro.caption}>
              <table className="tabella">
                <caption>{t.registro.caption}: {MEDIA.length}</caption>
                <thead><tr>{t.registro.colonne.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
                <tbody>
                  {MEDIA.map((m) => {
                    const lu = m.luogo ? luogo(m.luogo) : undefined;
                    return (
                      <tr key={m.id} id={m.id}>
                        <th scope="row">
                          <img src={src(m, m.forma === "1x1" ? "1x1.720" : "16x9.1280")} alt={m.soggetto[l]} width={120} height={m.forma === "1x1" ? 120 : 68} loading="lazy" style={{ objectFit: "cover", borderRadius: 2, display: "block", marginBottom: 6 }} />
                          <code>{m.id}</code>
                        </th>
                        <td>{lu ? <Link href={percorso(l, "luoghi", LUOGHI_SLUG[lu.id][l])}>{lu.nome}</Link> : "—"}</td>
                        <td><a href={m.pagina} rel="noopener">{m.file}</a><br />{m.autore} · {m.licenza_url ? <a href={m.licenza_url} rel="noopener">{m.licenza}</a> : m.licenza}</td>
                        <td>Nano Banana 2 · Higgsfield<br /><code style={{ fontSize: 11 }}>{m.job}</code></td>
                        <td>{m.cambiato[l]}</td>
                        <td>{DATA[l]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </SezioneCarta>
          <SezioneCarta id="reale" titolo={t.indice.reale}>
            <p>{t.reale.testo}</p>
            <div className="sv-riprese">
              {t.reale.foto.map((f) => (
                <figure key={f.file} id={f.file.replace(/\.jpg$/, "")}>
                  <img src={`/assets/images/${f.file}`} alt={f.alt} loading="lazy" width={440} height={330} />
                  <figcaption><b>{f.titolo}</b><code>{f.file}</code><br />{t.reale.fonteFoto}</figcaption>
                </figure>
              ))}
              <figure id="video-hero">
                <video src="/assets/video/hero.mp4" poster="/assets/images/hero-poster.jpg" muted loop playsInline controls preload="none" aria-label={t.reale.video.titolo} />
                <figcaption><b>{t.reale.video.titolo}</b><code>hero.mp4</code><br />{t.reale.video.testo}</figcaption>
              </figure>
            </div>
            <p className="nota-box">{t.reale.limite}</p>
          </SezioneCarta>
          <SezioneCarta id="caso" titolo={t.indice.caso}>
            <p>{t.caso.testo}</p>
            <ul>
              <li><a href={CASO_TRIESTE.film} rel="noopener">{t.caso.film} ↗</a></li>
              <li><a href={CASO_TRIESTE.tour} rel="noopener">{t.caso.tour} ↗</a></li>
              <li><a href={CASO_TRIESTE.scheda} rel="noopener">{t.caso.scheda} ↗</a></li>
            </ul>
            <p>{t.caso.registro}</p>
          </SezioneCarta>
        </CorpoCarta>
      </>
    );
  },
};
