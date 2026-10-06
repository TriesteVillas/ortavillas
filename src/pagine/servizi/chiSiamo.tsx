import Link from "next/link";
import type { VocePagina } from "../tipi";
import { percorso } from "@/lib/rotte";
import { CHI_SIAMO } from "@/testi/servizi/chiSiamo";
import { COMUNE, GRUPPO_NUMERI as G, n } from "@/testi/servizi/comune";
import { Metodo } from "@/components/Metodo";
import { Collega, Contatori, Intestazione, LdPagina, Recapiti, TestataNotte } from "@/components/servizi/Parti";

export const chiSiamo: VocePagina = {
  meta: (p) => ({ titolo: CHI_SIAMO[p.lingua].titolo, descrizione: CHI_SIAMO[p.lingua].descrizione, og: "about" }),
  Corpo: ({ p }) => {
    const l = p.lingua;
    const t = CHI_SIAMO[l];
    const c = COMUNE[l];
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="chiSiamo" tipo="AboutPage" nome={t.h1} descrizione={t.descrizione} extra={{ about: { "@id": "https://ortavillas.com/#organization" } }} />
        <TestataNotte l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} briciola={t.briciola}>
          <div className="bottoni">
            <a className="bottone bottone-primario" href="#stato">{t.ctaStato} <span className="freccia">→</span></a>
            <Link className="bottone bottone-secondario" href={percorso(l, "contatti")}>{t.ctaContatti}</Link>
          </div>
        </TestataNotte>

        <section className="sezione" id="gruppo"><div className="contenitore">
          <Intestazione occhiello={t.gruppo.occhiello} h2={t.gruppo.h2} lead={t.gruppo.lead} />
          <ul className="sv-marchi">
            {t.gruppo.marchi.map((m) => (
              <li key={m.nome}>
                {m.href
                  ? <a className="scheda" href={m.href} rel="noopener"><span className="t-h3">{m.nome}</span><p>{m.dove}</p><span className="piede">{m.href.replace(/^https:\/\/|\/$/g, "")} ↗</span></a>
                  : <div className="scheda" aria-current="page"><span className="t-h3">{m.nome}</span><p>{m.dove}</p><span className="piede">{t.gruppo.corrente}</span></div>}
              </li>
            ))}
          </ul>
        </div></section>

        <section className="sezione" id="numeri"><div className="contenitore">
          <Intestazione occhiello={t.numeri.occhiello} h2={t.numeri.h2} lead={<>{t.numeri.lead} <Link href={percorso(l, "dati")} style={{ color: "var(--sand-300)" }}>{t.numeri.dati}</Link>.</>} />
          <Contatori fonte={c.fonteCrm} voci={[
            [n(G.immobiliOnline, l), c.numeri.immobiliOnline], [n(G.compratori12m, l), c.numeri.compratori12m],
            [n(G.visite12m, l), c.numeri.visite12m], [n(G.pcAccessi, l), c.numeri.pcAccessi],
            [n(G.ytVideo, l), c.numeri.ytVideo], [n(G.ytViste, l), c.numeri.ytViste],
            [n(G.tour3d, l), c.numeri.tour3d], [n(G.fotoRegistroAi, l), c.numeri.fotoRegistroAi],
          ]} />
        </div></section>

        <section className="sezione" id="metodo"><div className="contenitore">
          <Intestazione occhiello={t.metodo.occhiello} h2={t.metodo.h2} />
          <Metodo l={l} />
          <div className="sv-colonne" style={{ ["--n" as string]: 4, marginTop: 56 }}>
            {t.metodo.riquadri.map((r) => <div key={r.h3}><h3 className="t-h3">{r.h3}</h3><p>{r.testo}</p></div>)}
          </div>
        </div></section>

        <section className="sezione" id="stato"><div className="contenitore">
          <Intestazione occhiello={t.stato.occhiello} h2={t.stato.h2} lead={t.stato.lead} />
          <dl className="sv-recapiti" style={{ maxWidth: 860 }}>
            {t.stato.voci.map(([dt, dd]) => <div key={dt} style={{ gridTemplateColumns: "minmax(120px, 200px) minmax(0, 1fr)" }}><dt>{dt}</dt><dd style={{ color: "var(--fg-2)" }}>{dd}</dd></div>)}
          </dl>
          <div className="sv-colonne" style={{ marginTop: 48 }}>
            <div><h3 className="t-h3">{t.stato.noiTitolo}</h3><ul>{t.stato.noi.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div><h3 className="t-h3">{t.stato.postoTitolo}</h3><ul>{t.stato.posto.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </div>
          <p style={{ marginTop: 32 }}><Collega l={l} a="agenzie" className="link-freccia">{t.stato.agenzie} <span className="freccia">→</span></Collega></p>
          <p className="sv-stato" style={{ marginTop: 28 }}>{t.stato.timbro}</p>
        </div></section>

        <section className="sezione" id="recapiti"><div className="contenitore">
          <Intestazione occhiello={t.recapiti.occhiello} h2={t.recapiti.h2} lead={t.recapiti.testo} />
          <Recapiti l={l} wa={c.wa.compratori} />
        </div></section>
      </>
    );
  },
};
