import type { VocePagina } from "../tipi";
import { COOKIE } from "@/testi/servizi/cookie";
import { COMUNE } from "@/testi/servizi/comune";
import { CorpoCarta, LdPagina, SezioneCarta, TestataCarta, Testo } from "@/components/servizi/Parti";
import { BottoneCookie } from "@/components/servizi/Client";

export const cookie: VocePagina = {
  carta: () => true,
  meta: (p) => ({ titolo: COOKIE[p.lingua].titolo, descrizione: COOKIE[p.lingua].descrizione, og: "cookies" }),
  Corpo: ({ p }) => {
    const l = p.lingua;
    const t = COOKIE[l];
    const i = t.indice;
    const righe: [string, string, string, string, string][] = [
      ["ov_consenso_v1", t.locale, "ortavillas.com", t.usi.consenso, t.finche],
      ["ov-motion", t.locale, "ortavillas.com", t.usi.motion, t.finche],
      ["ov-origine", t.locale, "ortavillas.com", t.usi.origine, t.finche],
      ["ov-documenti-vendita", t.locale, "ortavillas.com", t.usi.documenti, t.finche],
      ["_ga, _ga_*", t.cookie, "Google Ireland Ltd", t.usi.ga, t.dueAnni],
    ];
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="cookie" nome={t.h1} descrizione={t.descrizione} extra={{ dateModified: "2026-10-06" }} />
        <TestataCarta l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} aggiornato={COMUNE[l].aggiornato} briciola={t.briciola} />
        <CorpoCarta l={l} voci={[["scelta", i.scelta], ["elenco", i.elenco], ["analytics", i.analytics], ["terzi", i.terzi], ["browser", i.browser]]}>
          <SezioneCarta id="scelta" titolo={i.scelta}>
            <p>{t.scelta}</p>
            <p><BottoneCookie testo={t.bottone} /></p>
            <p className="aiuto">{t.senzaGa}</p>
          </SezioneCarta>
          <SezioneCarta id="elenco" titolo={i.elenco}>
            <div className="tabella-scorre" role="region" tabIndex={0} aria-label={i.elenco}>
              <table className="tabella">
                <thead><tr>{t.colonne.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
                <tbody>{righe.map((r) => <tr key={r[0]}><th scope="row"><code>{r[0]}</code></th><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td></tr>)}</tbody>
              </table>
            </div>
          </SezioneCarta>
          <SezioneCarta id="analytics" titolo={i.analytics}><p>{t.analytics}</p></SezioneCarta>
          <SezioneCarta id="terzi" titolo={i.terzi}><p>{t.terzi}</p></SezioneCarta>
          <SezioneCarta id="browser" titolo={i.browser}><p><Testo l={l} s={t.browser} /></p></SezioneCarta>
        </CorpoCarta>
      </>
    );
  },
};
