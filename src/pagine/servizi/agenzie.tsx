import type { VocePagina } from "../tipi";
import { AGENZIE } from "@/testi/servizi/agenzie";
import { COMUNE, GRUPPO_NUMERI as G, n } from "@/testi/servizi/comune";
import { Rullo } from "@/components/Rullo";
import { BottoneWa, DomandeTesti, Intestazione, LdPagina, Recapiti, Stato, TestataNotte, mailto } from "@/components/servizi/Parti";

export const agenzie: VocePagina = {
  meta: (p) => ({ titolo: AGENZIE[p.lingua].titolo, descrizione: AGENZIE[p.lingua].descrizione, og: "agencies" }),
  Corpo: ({ p }) => {
    const l = p.lingua;
    const t = AGENZIE[l];
    const c = COMUNE[l];
    const lettere = ["A", "B", "C", "D"];
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="agenzie" nome={t.h1} descrizione={t.descrizione} />
        <TestataNotte l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} briciola={t.briciola}>
          <div className="bottoni">
            <BottoneWa l={l} testo={c.wa.agenzie} />
            <a className="bottone bottone-secondario" href={mailto(c.oggettoAgenzie)}>{c.scriveteciEmail}</a>
          </div>
          <Stato l={l} />
          <div className="sv-fatto">
            <div>
              <p className="t-data-label" style={{ color: "var(--sand-300)", margin: "0 0 12px" }}>{t.chi.occhiello}</p>
              <span className="valore t-num-xl"><Rullo testo={n(G.compratori12m, l)} /></span>
              <p>{t.chi.testo}</p>
            </div>
            <div>
              <ul className="sv-righe" style={{ marginTop: 0 }}>
                <li><b>{n(G.dach, l)}</b><span>{t.chi.righe.dach}</span></li>
                <li><b>{n(G.da1m, l)}</b><span>{t.chi.righe.da1m}</span></li>
                <li><b>{n(G.pcAccessi, l)}</b><span>{t.chi.righe.pc}</span></li>
                <li><b>{n(G.immobiliOnline, l)}</b><span>{t.chi.righe.online}</span></li>
              </ul>
              <p className="nota-fonte" style={{ marginTop: 16 }}>{c.fonteCrm}</p>
            </div>
          </div>
        </TestataNotte>

        <section className="sezione" id="lettera"><div className="contenitore">
          <Intestazione occhiello={t.lettera.occhiello} h2={t.lettera.h2} />
          <article className="sv-lettera" lang={l}>
            <div className="testa"><span>{t.lettera.a}</span><span>{t.lettera.luogo}</span></div>
            {t.lettera.paragrafi.map((x) => <p key={x}>{x}</p>)}
            <p className="firma">{t.lettera.firma}</p>
          </article>
          <div className="bottoni" style={{ marginTop: 28 }}><BottoneWa l={l} testo={c.wa.agenzie} /></div>
        </div></section>

        <section className="sezione" id="insieme"><div className="contenitore">
          <Intestazione occhiello={t.insieme.occhiello} h2={t.insieme.h2} lead={t.insieme.lead} />
          <div className="sv-colonne">
            <div><h3 className="t-h3">{t.insieme.noi}</h3><ul>{t.insieme.noiVoci.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div><h3 className="t-h3">{t.insieme.voi}</h3><ul>{t.insieme.voiVoci.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </div>
          <p className="t-h3" style={{ marginTop: 48, maxWidth: "30ch" }}>{t.insieme.chiusa}</p>
        </div></section>

        <section className="sezione" id="legge"><div className="contenitore griglia-2" style={{ alignItems: "start" }}>
          <div>
            <p className="occhiello">{t.legge.occhiello}</p>
            <h2 className="t-display-l">{t.legge.h2}</h2>
            {t.legge.paragrafi.map((x) => <p key={x} style={{ color: "var(--fg-2)", maxWidth: "62ch", marginTop: 20 }}>{x}</p>)}
            <h3 className="t-h3" style={{ marginTop: 40 }}>{t.legge.oggiTitolo}</h3>
            <ul className="sv-garanzie">{t.legge.oggi.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <figure style={{ margin: 0 }}>
            <p className="t-data-label" style={{ color: "var(--sand-300)" }}>{t.legge.catenaTitolo}</p>
            <ol className="sv-catena">
              {t.legge.catena.nodi.map(([a, b], i) => (
                <li key={a}>
                  <div className={`nodo${i === 2 ? " noi" : ""}`}><b>{a}</b><span>{b}</span></div>
                  {i < t.legge.catena.legami.length && <div className="legame">↓ {t.legge.catena.legami[i]}</div>}
                </li>
              ))}
            </ol>
            <figcaption className="sv-didascalia">{t.legge.didascalia}</figcaption>
          </figure>
        </div></section>

        <section className="sezione" id="forme"><div className="contenitore">
          <Intestazione occhiello={t.forme.occhiello} h2={t.forme.h2} lead={t.forme.lead} />
          <ul className="sv-forme">
            {t.forme.voci.map((v, i) => <li key={v.titolo}><span className="lettera">{lettere[i]}</span><h3 className="t-h3">{v.titolo}</h3><p>{v.testo}</p></li>)}
          </ul>
        </div></section>

        <section className="sezione" id="domande"><div className="contenitore">
          <Intestazione occhiello={t.domande.occhiello} h2={t.domande.h2} />
          <DomandeTesti l={l} voci={t.domande.voci} />
        </div></section>

        <section className="sezione" id="contatto"><div className="contenitore griglia-2" style={{ alignItems: "start" }}>
          <div>
            <p className="occhiello">{t.contatto.occhiello}</p>
            <h2 className="t-display-l">{t.contatto.h2}</h2>
            <p className="t-lead" style={{ marginTop: 20 }}>{t.contatto.testo}</p>
            <div className="bottoni" style={{ marginTop: 24 }}><BottoneWa l={l} testo={c.wa.agenzie} /></div>
          </div>
          <div><Recapiti l={l} wa={c.wa.agenzie} oggetto={c.oggettoAgenzie} sede={false} /></div>
        </div></section>
      </>
    );
  },
};
