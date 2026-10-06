import Link from "next/link";
import type { VocePagina } from "../tipi";
import { RECAPITI } from "@/content/shell";
import { CONTATTI } from "@/testi/servizi/contatti";
import { COMUNE } from "@/testi/servizi/comune";
import { BottoneWa, Collega, Intestazione, LdPagina, Recapiti, TestataNotte, dove, mailto } from "@/components/servizi/Parti";

export const contatti: VocePagina = {
  meta: (p) => ({ titolo: CONTATTI[p.lingua].titolo, descrizione: CONTATTI[p.lingua].descrizione, og: "contact" }),
  Corpo: ({ p }) => {
    const l = p.lingua;
    const t = CONTATTI[l];
    const c = COMUNE[l];
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="contatti" tipo="ContactPage" nome={t.h1} descrizione={t.descrizione} extra={{
          mainEntity: { "@id": "https://ortavillas.com/#organization", contactPoint: { "@type": "ContactPoint", telephone: RECAPITI.tel, email: RECAPITI.email, contactType: "customer service", availableLanguage: ["it", "en", "de"], areaServed: "IT" } },
        }} />
        <TestataNotte l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} briciola={t.briciola}>
          <div className="bottoni">
            <BottoneWa l={l} testo={c.wa.compratori} />
            <a className="bottone bottone-secondario" href={mailto()}>{RECAPITI.email}</a>
          </div>
        </TestataNotte>

        <section className="sezione" id="recapiti"><div className="contenitore">
          <Intestazione occhiello={t.recapiti.occhiello} h2={t.recapiti.h2} />
          <Recapiti l={l} wa={c.wa.compratori} />
          <p style={{ color: "var(--fg-2)", maxWidth: "62ch", marginTop: 20 }}>{t.recapiti.nota}</p>
        </div></section>

        <section className="sezione" id="strade"><div className="contenitore">
          <Intestazione occhiello={t.strade.occhiello} h2={t.strade.h2} />
          <div className="sv-strade">
            {([[t.strade.proprietari, "presentazione"], [t.strade.compratori, "iscrizione"]] as const).map(([[a, b, piede], d]) => (
              <Link key={a} href={dove(l, d)}><b>{a}</b><span>{b}</span><span className="piede">{piede}</span></Link>
            ))}
          </div>
          <p className="sv-nota">{t.strade.nota} <Collega l={l} a="stato">{t.strade.stato} →</Collega></p>
        </div></section>
      </>
    );
  },
};
