import Link from "next/link";
import type { VocePagina } from "../tipi";
import { percorso, type Lingua } from "@/lib/rotte";
import { OMI_COMUNI, NTN } from "@/lib/dati";
import { RECAPITI } from "@/content/shell";
import { PROPRIETARI } from "@/testi/servizi/proprietari";
import { COMUNE, GRUPPO_NUMERI as G, n } from "@/testi/servizi/comune";
import { ModuloProprietario } from "@/components/Moduli";
import { Metodo } from "@/components/Metodo";
import { Rullo } from "@/components/Rullo";
import { BottoneWa, Collega, Contatori, DomandeTesti, Intestazione, LdPagina, SiNo, Stato, Tappe, TestataNotte } from "@/components/servizi/Parti";

/** «LUNGOLAGO, ISOLA S. GIULIO» → «Lungolago, isola S. Giulio». */
export const zonaLeggibile = (s: string) => {
  const t = s.toLowerCase().replace(/\bs\. giulio\b/g, "S. Giulio").replace(/\bronco\b/g, "Ronco").replace(/\bbagnella\b/g, "Bagnella");
  return t.charAt(0).toUpperCase() + t.slice(1);
};

function Fatto({ l }: { l: Lingua }) {
  const t = PROPRIETARI[l].fatto;
  const ville = OMI_COMUNI.filter((c) => c.sintesi_2025_2.ville_villini_zona_piu_cara)
    .map((c) => ({ nome: c.comune.replace("Madonna Del Sasso", "Madonna del Sasso"), v: c.sintesi_2025_2.ville_villini_zona_piu_cara! }))
    .sort((a, b) => b.v[1] - a.v[1]);
  const top = ville[0];
  const max = top.v[1];
  const riga = (prov: string, ambito: string) => NTN.righe.find((r) => r.provincia === prov && r.ambito === ambito) as { ntn_2025_provvisorio: number; variazione_2025_vs_2024_pct: number };
  const no = riga("NO", "tutti i comuni non capoluogo della provincia");
  const vb = riga("VB", "tutti i comuni non capoluogo della provincia");
  const segno = (x: number) => `${x > 0 ? "+" : ""}${n(x, l, 1)}%`;
  return (
    <div className="sv-fatto">
      <div>
        <p className="t-data-label" style={{ color: "var(--sand-300)", margin: "0 0 12px" }}>{t.occhiello}</p>
        <span className="valore t-num-xl"><Rullo testo={n(max, l)} /> <small style={{ fontSize: "0.4em" }}>{t.unita}</small></span>
        <p>{t.testo(top.nome, `${top.v[2]} · ${zonaLeggibile(top.v[3])}`)}</p>
        <ul className="sv-righe">
          <li><b>{n(no.ntn_2025_provvisorio, l)}</b><span>{t.righe.ntnNo} ({segno(no.variazione_2025_vs_2024_pct)})</span></li>
          <li><b>{n(vb.ntn_2025_provvisorio, l)}</b><span>{t.righe.ntnVb} ({segno(vb.variazione_2025_vs_2024_pct)})</span></li>
          <li><b>{n(G.compratori12m, l)}</b><span>{t.righe.crm}</span></li>
        </ul>
      </div>
      <div>
        <h3>{t.barreTitolo}</h3>
        <ul className="barre">
          {ville.slice(0, 8).map((c) => (
            <li key={c.nome}><span>{c.nome}</span><span className="barra"><i style={{ width: `${Math.round((c.v[1] / max) * 100)}%` }} /></span><span className="num">{n(c.v[1], l)} €/m²</span></li>
          ))}
        </ul>
        <p className="nota-fonte" style={{ marginTop: 20 }}>{t.fonte}</p>
      </div>
    </div>
  );
}

function Grazie({ l }: { l: Lingua }) {
  const t = PROPRIETARI[l];
  const g = t.grazie;
  return (
    <>
      <TestataNotte l={l} occhiello={t.occhiello} h1={g.h1} lead={g.testo} briciola={t.briciola}>
        <div className="bottoni">
          <Link className="bottone bottone-primario" href={percorso(l, "home")}>{COMUNE[l].home} <span className="freccia">→</span></Link>
          <Link className="bottone bottone-secondario" href={percorso(l, "luoghi")}>{g.luoghi}</Link>
        </div>
      </TestataNotte>
      <section className="sezione" id="adesso"><div className="contenitore">
        <Intestazione occhiello={g.adessoOcchiello} h2={g.adessoH2} />
        <Tappe voci={g.tappe} />
      </div></section>
      <section className="sezione" id="caso"><div className="contenitore">
        <Intestazione occhiello={g.casoOcchiello} h2={g.casoH2} />
        <Metodo l={l} />
      </div></section>
    </>
  );
}

export const proprietari: VocePagina = {
  meta: (p) => {
    const t = PROPRIETARI[p.lingua];
    return p.grazie ? { titolo: t.grazie.titolo, descrizione: t.grazie.descrizione, noindex: true, og: "home" } : { titolo: t.titolo, descrizione: t.descrizione, og: "owners" };
  },
  Corpo: ({ p }) => {
    const l = p.lingua;
    if (p.grazie) return <Grazie l={l} />;
    const t = PROPRIETARI[l];
    const c = COMUNE[l];
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="proprietari" nome={t.h1} descrizione={t.descrizione} />
        <TestataNotte l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} briciola={t.briciola}>
          <div className="bottoni">
            <a className="bottone bottone-primario" href="#presentazione">{t.cta} <span className="freccia">→</span></a>
            <BottoneWa l={l} testo={c.wa.proprietari} primario={false} />
          </div>
          <Stato l={l} />
          <Fatto l={l} />
        </TestataNotte>

        <section className="sezione" id="metodo"><div className="contenitore">
          <Intestazione occhiello={t.metodo.occhiello} h2={t.metodo.h2} lead={t.metodo.lead} />
          <Metodo l={l} />
          <div style={{ marginTop: 64 }}>
            <Contatori fonte={c.fonteCrm} voci={[
              [n(G.immobiliOnline, l), c.numeri.immobiliOnline], [n(G.tour3d, l), c.numeri.tour3d],
              [n(G.ytViste, l), c.numeri.ytViste], [n(G.compratori12m, l), c.numeri.compratori12m],
            ]} />
          </div>
        </div></section>

        <section className="sezione" id="oggi"><div className="contenitore">
          <Intestazione occhiello={t.oggi.occhiello} h2={t.oggi.h2} lead={t.oggi.lead} />
          <SiNo titoli={t.oggi.titoli} si={t.oggi.si} no={t.oggi.no} />
          <p className="sv-nota">{t.oggi.nota}</p>
          <h3 className="t-h3" style={{ margin: "64px 0 24px" }}>{t.oggi.tappeTitolo}</h3>
          <Tappe voci={t.oggi.tappe} />
          <p style={{ marginTop: 32, display: "grid", gap: 10 }}>
            <Collega l={l} a="stato" className="link-freccia">{t.oggi.stato} <span className="freccia">→</span></Collega>
            <Collega l={l} a="agenzie" className="link-freccia">{t.oggi.agenzie} <span className="freccia">→</span></Collega>
          </p>
        </div></section>

        <section className="sezione" id="presentazione"><div className="contenitore griglia-2" style={{ alignItems: "start" }}>
          <div>
            <p className="occhiello">{t.presentazione.occhiello}</p>
            <h2 className="t-display-l">{t.presentazione.h2}</h2>
            <p className="t-lead" style={{ marginTop: 20 }}>{t.presentazione.testo}</p>
            <p style={{ color: "var(--fg-2)" }}>{t.presentazione.voce}</p>
            <ul className="sv-garanzie">{t.presentazione.garanzie.map((x) => <li key={x}>{x}</li>)}</ul>
            <div className="bottoni">
              <BottoneWa l={l} testo={c.wa.proprietari} primario={false} />
              <a className="bottone bottone-secondario" href={`tel:${RECAPITI.tel}`}>{RECAPITI.telefono}</a>
            </div>
            <p className="aiuto" style={{ marginTop: 14 }}>{c.lingueRisposta}</p>
          </div>
          <ModuloProprietario l={l} fonte="OV · Proprietari" privacy={percorso(l, "privacy")} />
        </div></section>

        <section className="sezione" id="domande"><div className="contenitore">
          <Intestazione occhiello={t.domande.occhiello} h2={t.domande.h2} />
          <DomandeTesti l={l} voci={t.domande.voci} />
        </div></section>
      </>
    );
  },
};
