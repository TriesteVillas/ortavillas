# ortavillas.com — l'atlante del lago d'Orta

**Edizione 01 · ottobre 2026.** Stessa impostazione di [sloveniavillas.com](https://sloveniavillas.com):
un atlante editoriale, non un portale. Il lago d'Orta misurato da **piazza del Duomo a Milano**
(tempi OSRM senza traffico, quote, sole d'inverno, quotazioni OMI), ogni numero con fonte e data,
i limiti detti. Converte in due modi: iscrizione alla **Private Collection · Lago d'Orta** (oggi
0 case, e lo dice) e **presentazione della casa** per i proprietari.

Next.js 16 (App Router), TypeScript, nessuna libreria UI, CSS in `src/app/globals.css`.
Quattro lingue: radice italiana, `/en`, `/de`, `/sl`, slug tradotti.
La v1 statica (GitHub Pages, `tools/build.py`) è nella storia git fino a `2fb8a81`.

## Dove sta cosa

```
src/lib/rotte.ts          le rotte nelle 4 lingue: UNA tabella per routing, hreflang, sitemap, llms.txt
src/content/indice.ts     chi esiste (16 luoghi, 4 mondi, 7 guide, 7 strumenti, 11 città) e con quali slug
src/data/*.json           le misure (6/10/2026): tempi OSRM, matrice luogo→luogo, luoghi, quotazioni OMI
src/lib/luoghi.ts, dati.ts  accesso tipizzato ai dati; le pagine non leggono mai il JSON direttamente
src/pagine/*.tsx          una VocePagina per sezione (meta + corpo); registro.ts le elenca
src/testi/**              i testi, sempre Record<Lingua, …> completo nelle 4 lingue
src/components/Rilievo.tsx  la carta: rilievo ombreggiato + «camera» 2D (posa = centro + zoom)
src/lib/mappa.ts          lat/lon → pixel del rilievo (Web Mercator z13, bbox fisso)
src/app/azioni.ts         i moduli (PC, proprietari, valutazione) → porta del CRM
src/app/api/chat          l'assistente AI (Claude), corpus in src/lib/corpus.ts
src/app/og/[lingua]/[id]  le immagini Open Graph, generate in build
public/geo/               il rilievo (rilievo.py / colora.py in ~/dev/.wt/ortavillas/rilievo)
```

I dati grezzi, gli script che li hanno prodotti e le fonti (`FONTI.md`, `fatti.md`) stanno in
`~/dev/.wt/ortavillas/dati/`. Rigenerare = rilanciare quegli script e ricopiare i JSON in `src/data/`.

## Variabili d'ambiente (Vercel)

| variabile | a che cosa serve | senza |
|---|---|---|
| `INGRESSO_HMAC` | firma dei moduli verso `tsv-pg /api/ingresso`, porta `sito-orta` | i moduli rispondono «non siamo riusciti a registrare, scriveteci» |
| `ANTHROPIC_API_KEY` | l'assistente AI | l'assistente risponde «non ancora acceso» e indica le pagine |
| `NEXT_PUBLIC_GA_ID` | Google Analytics con Consent Mode v2 | nessuna statistica e nessun banner cookie |

La porta `sito-orta` va creata in tsv-pg: riga in `segreto` con chiave `ingresso_hmac_sito-orta`
(stesso valore di `INGRESSO_HMAC`). È lo stesso schema di `sito-sv` (sloveniavillas).

## Pubblicare

Push su `main` = produzione, **dopo** il passaggio a Vercel (fino ad allora `main` è servito da
GitHub Pages come sito statico: non fondere questo ramo prima di aver spostato il DNS).
Il DNS è su Aruba (registrar Tucows): oggi i record A puntano a GitHub Pages; per Vercel si
sostituiscono con quelli indicati dal progetto Vercel. ⚠️ Non toccare il record MX.

Build di verifica senza toccare la `.next` del dev server:

```bash
NEXT_DIST_DIR=.next-verifica npm run build
```
