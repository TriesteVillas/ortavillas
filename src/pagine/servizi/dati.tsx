import type { VocePagina } from "../tipi";
import { assoluto, percorso } from "@/lib/rotte";
import { DATI } from "@/testi/servizi/dati";
import { CorpoCarta, LdPagina, SezioneCarta, TestataCarta } from "@/components/servizi/Parti";
import { Citazione } from "@/components/servizi/Client";

const COLONNE_DISTANZE = "profile, from_id, to_id, from_place, to_place, from_lat, from_lon, to_lat, to_lon, minutes, km, traffic, measured_on, source, licence";
const COLONNE_QUOTE = "place_id, place, lat, lon, ele_copernicus_glo90_m, ele_min_400m, ele_median_400m, ele_max_400m, shore_distance_m, winter_solstice_sun_min, source, measured_on";

export const dati: VocePagina = {
  carta: () => true,
  meta: (p) => ({ titolo: DATI[p.lingua].titolo, descrizione: DATI[p.lingua].descrizione, og: "data" }),
  Corpo: ({ p }) => {
    const l = p.lingua;
    const t = DATI[l];
    const url = assoluto(percorso(l, "dati"));
    const dataset = {
      "@type": "Dataset", "@id": `${url}#dataset`, name: t.h1, description: t.descrizione, inLanguage: l, url,
      version: "1", dateModified: "2026-10-06", temporalCoverage: "2024-07-01/2026-10-06",
      spatialCoverage: { "@type": "Place", name: "Lago d'Orta", geo: { "@type": "GeoShape", box: "45.70 8.25 45.95 8.55" } },
      license: "https://opendatacommons.org/licenses/odbl/1-0/",
      creator: { "@id": "https://ortavillas.com/#organization" },
      publisher: { "@type": "Organization", name: "TriesteVillas srl", url: "https://triestevillas.com" },
      isAccessibleForFree: true,
      keywords: ["Lago d'Orta", "OSRM", "OpenStreetMap", "Copernicus DEM", "OMI"],
      distribution: [
        { "@type": "DataDownload", name: "distanze.csv", encodingFormat: "text/csv", contentUrl: "https://ortavillas.com/csv/distanze.csv", license: "https://opendatacommons.org/licenses/odbl/1-0/" },
        { "@type": "DataDownload", name: "quote.csv", encodingFormat: "text/csv", contentUrl: "https://ortavillas.com/csv/quote.csv" },
      ],
    };
    return (
      <>
        <LdPagina l={l} breve={t.briciola} chiave="dati" nome={t.h1} descrizione={t.descrizione} altri={[dataset]} />
        <TestataCarta l={l} occhiello={t.occhiello} h1={t.h1} lead={t.lead} aggiornato={t.edizione} briciola={t.briciola} />
        <CorpoCarta l={l} voci={[["origine", t.indice.origine], ["fonti", t.indice.fonti], ["file", t.indice.file], ["citare", t.indice.citare]]}>
          <SezioneCarta id="origine" titolo={t.indice.origine}>
            {t.origine.map((x) => <p key={x}>{x}</p>)}
          </SezioneCarta>
          <SezioneCarta id="fonti" titolo={t.indice.fonti}>
            <p>{t.fontiIntro}</p>
            <ul className="sv-fonti">
              {t.fonti.map((f) => (
                <li key={f.id} id={`fonte-${f.id}`}>
                  <h3>{f.titolo}</h3>
                  <p className="data">{f.data}</p>
                  <p style={{ margin: 0 }}>{f.metodo}</p>
                  <p className="licenza">{f.licenza}{f.link && <> · <a href={f.link[1]} rel="noopener">{f.link[0]}</a></>}</p>
                </li>
              ))}
            </ul>
          </SezioneCarta>
          <SezioneCarta id="file" titolo={t.indice.file}>
            <p>{t.file.intro}</p>
            <div className="sv-file">
              <a href="/csv/distanze.csv" download><b>distanze.csv</b><span>{t.file.distanze}</span><code>{t.file.colonne}: {COLONNE_DISTANZE}</code><small>{t.file.licenzaDistanze}</small></a>
              <a href="/csv/quote.csv" download><b>quote.csv</b><span>{t.file.quote}</span><code>{t.file.colonne}: {COLONNE_QUOTE}</code><small>{t.file.licenzaQuote}</small></a>
            </div>
            <p className="nota-box">{t.file.nota}</p>
          </SezioneCarta>
          <SezioneCarta id="citare" titolo={t.indice.citare}>
            <p>{t.citare.intro}</p>
            <Citazione testo={t.citare.testo} aiuto={t.citare.aiuto} />
          </SezioneCarta>
        </CorpoCarta>
      </>
    );
  },
};
