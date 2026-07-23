# ortavillas.com — vetrina e lead generation sul Lago d'Orta

Sito statico su **GitHub Pages**, niente Vercel. **Deploy = `git push` su `main`.**

Veste grafica del gruppo: stesso scheletro di [friulivillas.com](https://friulivillas.com),
[triestevillas.com](https://triestevillas.com) e
[triesteimmobiliare.com](https://triesteimmobiliare.com) — **Poppins**, header a pillola di
vetro fisso in alto, hero video a tutto schermo, footer con fascia + tre colonne + barra.
Ogni brand tiene la stessa struttura e cambia solo l'accento cromatico: TSV blu-petrolio +
sabbia, TSI azzurro, FriuliVillas verde bosco, **OrtaVillas verde-lago (teal) + sabbia/ottone**.

```
tools/build.py             genera le tre pagine + sitemap.xml   <- si tocca QUESTO
index.html  en/  de/       output generato (committato)
assets/css/style.css       tutto lo stile
assets/js/nav.js           apre/chiude il pannello mobile
assets/logos/              wordmark SVG (gradiente + avorio) + PNG di fallback
assets/video/              hero.mp4 + hero.webm
assets/images/             poster, Open Graph, le quattro foto della galleria
assets/favicons/           favicon, apple-touch, 32/192/512
CNAME .nojekyll robots.txt sitemap.xml
```

## Modificare i testi

Le tre lingue sono la stessa pagina. Non si modificano gli `.html`: si tocca il dizionario
`STRINGS` in **`tools/build.py`** e si rigenera.

```bash
python3 tools/build.py    # riscrive index.html, en/index.html, de/index.html, sitemap.xml
```

L'HTML generato è committato, quindi **il deploy resta senza build**: GitHub Pages serve i
file così come sono.

> ⚠️ I testi tedeschi sono scritti, non tradotti a macchina — sul WordPress di
> triesteaffitti.com TranslatePress aveva prodotto perfino un brand sbagliato
> ("TriesteRentals"). Prima di campagne in DE, farli rileggere a un madrelingua.

## A cosa serve questo sito

**Non è un catalogo.** Non c'è un database immobili e non è previsto per ora: il sito
esiste per generare contatti qualificati sul lago d'Orta e portarli dentro al funnel
esistente. Tutto il resto è al servizio di quello.

Le tre sezioni corrispondono ai tre modi in cui un contatto può presentarsi — **vendere**,
**comprare**, **mettere a reddito** — e ognuna ha la sua chiamata all'azione.

### Come i lead vengono attribuiti

Su GitHub Pages non c'è backend, quindi **niente form**: un form che non scrive da nessuna
parte è peggio di nessun form (stessa scelta, e stessa motivazione, di friulivillas.com).

I contatti passano da **WhatsApp, telefono ed email**, e ogni pulsante porta con sé la
sezione da cui è partito:

| canale | come si riconosce la sorgente |
|---|---|
| WhatsApp | testo precompilato diverso per sezione (`…vorrei una valutazione…`, `…sto cercando casa…`, `…mettere a reddito…`) |
| Email | oggetto marcato `[ORTAVILLAS] Valutazione` / `Ricerca casa` / `Messa a reddito` / `Richiesta dal sito` |
| Telefono | numero dedicato **347 8628738**, diverso da quello del gruppo (331 8940822) |

Le mail arrivano su `richieste@triestevillas.com`, la casella che il CRM già legge e
classifica: i lead del lago d'Orta entrano nel funnel esistente e il prefisso
`[ORTAVILLAS]` li rende filtrabili da subito, senza toccare il CRM.

**Il numero è la vera sorgente di verità.** Essendo dedicato solo a questo sito, ogni
chiamata al 347 8628738 è per definizione un lead OrtaVillas.

### Quando servirà di più

Il passo successivo — quando il volume lo giustifica — è un form vero che fa `POST` a un
endpoint del CRM invece di aprire il client di posta. Richiede un backend: GitHub Pages non
basta e il sito va spostato su Vercel come gli altri. Finché i contatti si contano sulle
dita, il `mailto` marcato costa zero e non perde niente.

## Il wordmark

Non è un font somigliante: è **lo stesso carattere del wordmark FriuliVillas**, identificato
per sovrapposizione — **Lobster Two Bold Italic** (le forme delle lettere coincidono; lo
scarto residuo è solo di crenatura). Quindi "ortavillas" è composto con lo stesso alfabeto e
ricolorato col gradiente sabbia/ottone `#E8D5AF → #BE9A63`, la famiglia cromatica del gruppo.

Due cose da sapere se lo si rigenera:

- **La crenatura è stretta di `-0.0103 em`.** È il valore che riporta il rapporto
  larghezza/altezza di "friulivillas" da 4,326 (crenatura di default del font) a 4,213
  (quello misurato sul wordmark originale). Senza, le lettere risultano più larghe.
- **La scala non si ricava dall'altezza della parola.** "friulivillas" ha la `f` con
  discendente, "ortavillas" non ha discendenti: normalizzando sul riquadro d'inchiostro,
  OrtaVillas verrebbe circa il 28% più grande a parità di altezza. Si àncora invece alla
  scala di FriuliVillas — 999 unità font = 75 px — da cui il viewBox `277×54` invece di
  `317×75`.

I contorni sono estratti direttamente dal TTF (`fontTools`), non ricalcati con `potrace` da
un raster come quelli di FriuliVillas: stessa forma, tracciato più pulito.

Il favicon usa la **"O" maiuscola**, non la minuscola: la `o` di Lobster Two porta uno
svolazzo di raccordo verso la lettera successiva che, isolato in un quadrato, sembra un
errore di ritaglio. La maiuscola è autoconclusa e regge i 32 px.

## Il video

`assets/video/hero.mp4` (1,0 MB) + `.webm` (1,1 MB), **muto, in loop, autoplay**.

Ripresa da drone che si allontana dalla riva. Come su friulivillas il file montato è un
**palindromo** — clip in avanti + la stessa al contrario — così il punto di giunzione non
esiste e il movimento diventa un respiro continuo di 10 secondi invece di uno stacco secco
ogni 5.

```bash
ffmpeg -i sorgente.mp4 \
  -filter_complex "[0:v]scale=1280:-2,split[a][b];[b]reverse,trim=start_frame=1,setpts=PTS-STARTPTS[r];[a][r]concat=n=2:v=1[out]" \
  -map "[out]" -an -c:v libx264 -crf 34 -preset slow -profile:v main -pix_fmt yuv420p \
  -movflags +faststart assets/video/hero.mp4
ffmpeg -i assets/video/hero.mp4 -an -c:v libvpx-vp9 -crf 46 -b:v 0 -row-mt 1 assets/video/hero.webm
ffmpeg -i assets/video/hero.mp4 -frames:v 1 -q:v 4 assets/images/hero-poster.jpg
```

`-an` toglie l'audio: senza, il browser non fa partire l'autoplay. `-crf 34` invece del 30 di
friulivillas perché il fogliame autunnale comprime male e a 30 il file pesava 1,8 MB: dietro
lo scrim dell'hero i due sono indistinguibili. Con `prefers-reduced-motion: reduce` il video
non viene mostrato e resta il poster.

## Le foto

Le quattro immagini della galleria vengono da una proprietà sul lago gestita direttamente.
**Non sono attribuite e non vanno attribuite**: sono vetrina del territorio, non schede di
immobili in vendita. Gli `alt` descrivono la scena e non dichiarano che siano in vendita —
se un giorno lo diventeranno, si cambieranno gli `alt` insieme al resto.

Originali a piena risoluzione ridotti a 1400 px di larghezza, qualità 78, progressive
(~920 KB in tutto), con `loading="lazy"` e `width`/`height` espliciti per non far ballare il
layout.

## Indicizzazione

Oltre a canonical, `hreflang` (it/en/de + `x-default` sull'italiano), Open Graph e
`sitemap.xml`, ogni pagina porta un blocco **JSON-LD** con `RealEstateAgent` + `WebSite` +
`WebPage`.

Deliberatamente **assenti**: `aggregateRating`, recensioni e `Offer`. Non ci sono clienti
recensiti né immobili a listino, e marcarli sarebbe dato inventato — oltre che un invito a
un'azione manuale di Google.

## DNS

Il dominio è già registrato: registrar **Tucows**, zona DNS su **Aruba**
(`dns.technorail.com`, `dns2.technorail.com`, `dns3.arubadns.net`, `dns4.arubadns.cz`) —
esattamente come friulivillas.com, non su Cloudflare come triestevillas.com. Le modifiche si
fanno dal pannello Aruba.

Oggi `ortavillas.com` e `www.ortavillas.com` puntano a `62.149.128.40`, un IIS di parcheggio
Aruba. Per passare a GitHub Pages, sostituire il record A con:

| Tipo | Nome | Valore |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `triestevillas.github.io.` |

> ⚠️ **Non toccare il record MX** (`mx.ortavillas.com`): la posta del dominio è su Aruba e
> continua a funzionare solo se resta dov'è. Si cambia **solo** il web.

Dopo la propagazione, in *Settings → Pages* spuntare **Enforce HTTPS**. GitHub emette il
certificato da solo, ci mette qualche minuto. `www.ortavillas.com` viene rediretto sull'apex
da GitHub Pages.

## Anteprima locale

```bash
cd ~/dev/ortavillas && python3 -m http.server 4173
```

I percorsi degli asset sono assoluti (`/assets/...`), quindi il sito va servito dalla radice —
aprire gli `.html` con `file://` non funziona.
