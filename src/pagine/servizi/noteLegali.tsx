import type { VocePagina } from "../tipi";
import { NOTE_LEGALI } from "@/testi/servizi/noteLegali";
import { COMUNE } from "@/testi/servizi/comune";
import { Blocchi, CorpoCarta, LdPagina, SezioneCarta, TestataCarta } from "@/components/servizi/Parti";

export const noteLegali: VocePagina = {
  carta: () => true,
  meta: (p) => ({ titolo: NOTE_LEGALI[p.lingua].titolo, descrizione: NOTE_LEGALI[p.lingua].descrizione, og: "imprint" }),
  Corpo: ({ p }) => {
    const l = p.lingua;
    const t = NOTE_LEGALI[l];
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="noteLegali" nome={t.h1} descrizione={t.descrizione} extra={{ dateModified: "2026-10-06" }} />
        <TestataCarta l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} aggiornato={COMUNE[l].aggiornato} briciola={t.briciola} />
        <CorpoCarta l={l} voci={t.sezioni.map((s) => [s.id, s.titolo])}>
          {t.sezioni.map((s) => <SezioneCarta key={s.id} id={s.id} titolo={s.titolo}><Blocchi l={l} blocchi={s.blocchi} /></SezioneCarta>)}
        </CorpoCarta>
      </>
    );
  },
};
