import type { VocePagina } from "../tipi";
import { PRIVACY } from "@/testi/servizi/privacy";
import { COMUNE } from "@/testi/servizi/comune";
import { Blocchi, CorpoCarta, LdPagina, SezioneCarta, TestataCarta } from "@/components/servizi/Parti";

export const privacy: VocePagina = {
  carta: () => true,
  meta: (p) => ({ titolo: PRIVACY[p.lingua].titolo, descrizione: PRIVACY[p.lingua].descrizione, og: "privacy" }),
  Corpo: ({ p }) => {
    const l = p.lingua;
    const t = PRIVACY[l];
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="privacy" nome={t.h1} descrizione={t.descrizione} extra={{ dateModified: "2026-10-06" }} />
        <TestataCarta l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} aggiornato={COMUNE[l].aggiornato} briciola={t.briciola} />
        <CorpoCarta l={l} voci={t.sezioni.map((s) => [s.id, s.titolo])}>
          {t.sezioni.map((s) => <SezioneCarta key={s.id} id={s.id} titolo={s.titolo}><Blocchi l={l} blocchi={s.blocchi} /></SezioneCarta>)}
        </CorpoCarta>
      </>
    );
  },
};
