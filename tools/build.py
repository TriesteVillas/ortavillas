#!/usr/bin/env python3
"""Genera index.html, en/index.html, de/index.html, sl/index.html e sitemap.xml.

Le quattro lingue del gruppo (it, en, de, sl) descrivono la stessa pagina. Testi e
dati dei contatti vivono nel dizionario STRINGS, cosi' il template e
l'attribuzione dei lead restano coerenti. Prima di scrivere, check_locales()
ferma la generazione se una lingua e' incompleta o incoerente con l'italiano
(chiavi, stringhe vuote, servizi, prefisso [ORTAVILLAS], percorsi, og:locale).

Sloveno (dal 2026-10-01): nessuna promessa di assistenza in sloveno (decisione
D1 del gruppo, 2026-09-11) -- i testi sl dicono che il colloquio avviene in
italiano, inglese o tedesco. Il lago e' "jezero Orta" (forma di sl.wikipedia;
"Ortsko jezero" non e' attestato).

Il sito resta statico: l'HTML generato viene committato e GitHub Pages lo serve
cosi' com'e'. Nessun build viene eseguito in fase di deploy.

    python3 tools/build.py
"""

import json
import os
import re
from urllib.parse import quote

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SITE = "https://ortavillas.com"
EMAIL = "richieste@triestevillas.com"
PHONE_TEL = "+393478628738"
WA = "https://wa.me/393478628738"
YEAR = 2026

LOCALES = ["it", "en", "de", "sl"]
PATHS = {"it": "/", "en": "/en/", "de": "/de/", "sl": "/sl/"}
OG_LOCALE = {"it": "it_IT", "en": "en_GB", "de": "de_DE", "sl": "sl_SI"}
# Il link "Metodo... del gruppo TriesteVillas" porta alla stessa lingua: la radice
# di triestevillas.com e' italiana e non reindirizza secondo il browser.
GROUP_SITE = {
    "it": "https://triestevillas.com",
    "en": "https://triestevillas.com/en",
    "de": "https://triestevillas.com/de",
    "sl": "https://triestevillas.com/sl",
}

STRINGS = {
    "it": {
        "title": "OrtaVillas — Case e ville sul Lago d'Orta",
        "description": (
            "Vendere, comprare o mettere a reddito una casa sul Lago d'Orta. "
            "Un interlocutore solo, dalla prima valutazione al rogito. 347 8628738."
        ),
        "phoneDisplay": "347 8628738",
        "menuLabel": "Menu",
        "languageLabel": "Lingua",
        "navWhat": "Cosa facciamo",
        "navLake": "Il lago",
        "navContacts": "Contatti",
        "scrollLabel": "Scorri",
        "h1": "Case e ville sul Lago d'Orta",
        "heroLede": (
            "OrtaVillas nasce da chi sul lago una proprietà la tiene davvero, tutti i giorni: "
            "le stagioni, gli artigiani, il notaio, gli ospiti che arrivano da fuori. Se volete "
            "vendere, comprare o mettere a reddito una casa sul lago d'Orta, si comincia da una "
            "conversazione."
        ),
        "ctaWhatsapp": "Scrivici su WhatsApp",
        "ctaEmail": "Email",
        "whatEyebrow": "Cosa facciamo",
        "whatTitle": "Tre modi di usare una casa sul lago",
        "services": [
            {
                "key": "vendere",
                "title": "Vendere",
                "text": (
                    "Valutazione, fotografia, annuncio, trattativa, rogito: un referente solo. "
                    "Sul lago d'Orta il compratore quasi sempre arriva da fuori provincia — va "
                    "capito prima ancora che convinto, e questo cambia come si imposta la vendita."
                ),
                "cta": "Chiedi una valutazione",
            },
            {
                "key": "comprare",
                "title": "Comprare",
                "text": (
                    "Chi cerca qui cerca cose precise: l'affaccio, il silenzio, la strada che ci "
                    "arriva d'inverno. Le verifichiamo prima, così le visite servono a scegliere "
                    "e non a scartare."
                ),
                "cta": "Dicci cosa cercate",
            },
            {
                "key": "reddito",
                "title": "Mettere a reddito",
                "text": (
                    "Una casa sul lago può lavorare nei mesi in cui non la usate. Locazione breve "
                    "o stagionale, con la gestione operativa che serve perché funzioni davvero e "
                    "non diventi un secondo lavoro."
                ),
                "cta": "Parliamo di rendita",
            },
        ],
        "lakeEyebrow": "Il lago",
        "lakeLede": (
            "Il più piccolo dei laghi grandi del Nord, e l'unico che scorre verso nord. "
            "Quaranta minuti da Malpensa, poco più di un'ora da Milano."
        ),
        "lakeText": (
            "Orta San Giulio, Pella, San Maurizio d'Opaglio, Gozzano, Omegna: sponda per sponda "
            "cambiano l'esposizione, l'accesso all'acqua, la strada e il prezzo. È la differenza "
            "fra una casa che si vende in tre mesi e una che resta ferma due anni — e non si "
            "legge da un annuncio."
        ),
        "lakeClose": (
            "Poche compravendite l'anno, quasi tutte fra chi il lago lo conosce già."
        ),
        "galleryAlts": [
            "L'isola di San Giulio vista dall'alto, con l'acqua verde del lago d'Orta",
            "L'isola di San Giulio con le montagne alle spalle, nella luce del pomeriggio",
            "Pontile in legno sul lago d'Orta al tramonto",
            "Prati del Mottarone al tramonto, con il lago sullo sfondo",
        ],
        "readingTitle": "Per approfondire",
        "readingPosts": [
            {
                "title": "Lago d'Orta: la gemma silenziosa d'Italia",
                "url": "https://www.villa-volpe.com/it/blog/posts/lake-orta-italys-quiet-gem.html",
            },
            {
                "title": "Lago Maggiore o Lago d'Orta? Il confronto",
                "url": "https://www.villa-volpe.com/it/blog/posts/lake-maggiore-vs-lake-orta.html",
            },
            {
                "title": "Nuotare nel Lago d'Orta",
                "url": "https://www.villa-volpe.com/it/blog/posts/swimming-in-lake-orta.html",
            },
            {
                "title": "Le spiagge più belle del Lago d'Orta",
                "url": "https://www.villa-volpe.com/it/blog/posts/beaches-lake-orta.html",
            },
        ],
        "bandTitle": "Parliamone",
        "bandText": (
            "Una valutazione non impegna a niente. Un'ora al telefono chiarisce più di tre mesi "
            "di annunci guardati da soli."
        ),
        "tagline": "Case e ville sul Lago d'Orta.",
        "method": "Metodo, strumenti e regia del gruppo TriesteVillas. ↗",
        "sitemapTitle": "Mappa del sito",
        "home": "Home",
        "contactTitle": "Contatti",
        "location": "Lago d'Orta, provincia di Novara",
        "rights": "Tutti i diritti riservati.",
        "leads": {
            "hero": {
                "wa": (
                    "Ciao, arrivo da ortavillas.com: vorrei parlare di una casa sul lago d'Orta."
                ),
                "subject": "[ORTAVILLAS] Richiesta dal sito",
            },
            "vendere": {
                "wa": (
                    "Ciao, arrivo da ortavillas.com: vorrei una valutazione per una proprietà "
                    "sul lago d'Orta."
                ),
                "subject": "[ORTAVILLAS] Valutazione",
            },
            "comprare": {
                "wa": (
                    "Ciao, arrivo da ortavillas.com: sto cercando casa sul lago d'Orta."
                ),
                "subject": "[ORTAVILLAS] Ricerca casa",
            },
            "reddito": {
                "wa": (
                    "Ciao, arrivo da ortavillas.com: vorrei mettere a reddito una casa sul lago "
                    "d'Orta."
                ),
                "subject": "[ORTAVILLAS] Messa a reddito",
            },
            "finale": {
                "wa": "Ciao, arrivo da ortavillas.com: vorrei parlare con voi.",
                "subject": "[ORTAVILLAS] Richiesta dal sito",
            },
        },
    },
    "en": {
        "title": "OrtaVillas — Homes and villas on Lake Orta",
        "description": (
            "Selling, buying or earning rental income from a home on Lake Orta. "
            "One point of contact, from the first valuation to completion. +39 347 8628738."
        ),
        "phoneDisplay": "+39 347 8628738",
        "menuLabel": "Menu",
        "languageLabel": "Language",
        "navWhat": "What we do",
        "navLake": "The lake",
        "navContacts": "Contact",
        "scrollLabel": "Scroll",
        "h1": "Homes and villas on Lake Orta",
        "heroLede": (
            "OrtaVillas grew out of first-hand experience of owning a property on the lake, day "
            "after day: the seasons, the local tradespeople, the notary, and guests arriving from "
            "abroad. If you are looking to sell, buy or earn rental income from a home on Lake "
            "Orta, it starts with a conversation."
        ),
        "ctaWhatsapp": "Message us on WhatsApp",
        "ctaEmail": "Email",
        "whatEyebrow": "What we do",
        "whatTitle": "Three ways to make a home on the lake work for you",
        "services": [
            {
                "key": "vendere",
                "title": "Sell",
                "text": (
                    "Valuation, photography, listing, negotiation, completion: one point of "
                    "contact throughout. On Lake Orta, buyers usually come from outside the "
                    "province. Understanding them comes before persuading them, and that shapes "
                    "the whole sale."
                ),
                "cta": "Request a valuation",
            },
            {
                "key": "comprare",
                "title": "Buy",
                "text": (
                    "Buyers here tend to care about specific things: the view, the quiet, and "
                    "whether the road works in winter. We check them first, so viewings are for "
                    "choosing rather than ruling properties out."
                ),
                "cta": "Tell us what you need",
            },
            {
                "key": "reddito",
                "title": "Rental income",
                "text": (
                    "A home on the lake can earn its keep when you are not using it. Short or "
                    "seasonal lets, with the hands-on management needed to make it work without "
                    "becoming a second job."
                ),
                "cta": "Discuss rental income",
            },
        ],
        "lakeEyebrow": "The lake",
        "lakeLede": (
            "The smallest of northern Italy's great lakes, and the only one whose waters flow "
            "north. Forty minutes from Malpensa, just over an hour from Milan."
        ),
        "lakeText": (
            "Orta San Giulio, Pella, San Maurizio d'Opaglio, Gozzano, Omegna: from one shore to "
            "the next, sunlight, access to the water, roads and prices all change. It can be the "
            "difference between a home that sells in three months and one that sits for two "
            "years — and you cannot read it from a listing."
        ),
        "lakeClose": (
            "Only a small number of sales each year, almost all between people who already know "
            "the lake."
        ),
        "galleryAlts": [
            "San Giulio Island seen from above, with the green water of Lake Orta",
            "San Giulio Island with the mountains behind, in afternoon light",
            "Wooden jetty on Lake Orta at sunset",
            "Meadows on Mottarone at sunset, with the lake in the distance",
        ],
        "readingTitle": "Further reading",
        "readingPosts": [
            {
                "title": "Lake Orta: Italy's quiet gem",
                "url": "https://www.villa-volpe.com/blog/posts/lake-orta-italys-quiet-gem.html",
            },
            {
                "title": "Lake Maggiore vs Lake Orta: why the smaller lake wins",
                "url": "https://www.villa-volpe.com/blog/posts/lake-maggiore-vs-lake-orta.html",
            },
            {
                "title": "Is it possible to swim in Lake Orta?",
                "url": "https://www.villa-volpe.com/blog/posts/swimming-in-lake-orta.html",
            },
            {
                "title": "The best beaches on Lake Orta",
                "url": "https://www.villa-volpe.com/blog/posts/beaches-lake-orta.html",
            },
        ],
        "bandTitle": "Let's talk",
        "bandText": (
            "A valuation comes with no obligation. An hour on the phone tells you more than "
            "three months spent browsing listings on your own."
        ),
        "tagline": "Homes and villas on Lake Orta.",
        "method": "Method, tools and direction by the TriesteVillas group. ↗",
        "sitemapTitle": "Site map",
        "home": "Home",
        "contactTitle": "Contact",
        "location": "Lake Orta, province of Novara",
        "rights": "All rights reserved.",
        "leads": {
            "hero": {
                "wa": (
                    "Hello, I came from ortavillas.com and would like to discuss a home on "
                    "Lake Orta."
                ),
                "subject": "[ORTAVILLAS] Enquiry",
            },
            "vendere": {
                "wa": (
                    "Hello, I came from ortavillas.com and would like a valuation for a property "
                    "on Lake Orta."
                ),
                "subject": "[ORTAVILLAS] Valuation",
            },
            "comprare": {
                "wa": (
                    "Hello, I came from ortavillas.com and am looking for a home on Lake Orta."
                ),
                "subject": "[ORTAVILLAS] Property search",
            },
            "reddito": {
                "wa": (
                    "Hello, I came from ortavillas.com and would like to earn rental income from "
                    "a home on Lake Orta."
                ),
                "subject": "[ORTAVILLAS] Rental income",
            },
            "finale": {
                "wa": (
                    "Hello, I came from ortavillas.com and would like to speak with you."
                ),
                "subject": "[ORTAVILLAS] Enquiry",
            },
        },
    },
    "de": {
        "title": "OrtaVillas — Häuser und Villen am Ortasee",
        "description": (
            "Verkauf, Kauf oder Vermietung eines Hauses am Ortasee. Ein Ansprechpartner, "
            "von der ersten Bewertung bis zum Notartermin. +39 347 8628738."
        ),
        "phoneDisplay": "+39 347 8628738",
        "menuLabel": "Menü",
        "languageLabel": "Sprache",
        "navWhat": "Was wir tun",
        "navLake": "Der See",
        "navContacts": "Kontakt",
        "scrollLabel": "Scrollen",
        "h1": "Häuser und Villen am Ortasee",
        "heroLede": (
            "OrtaVillas ist aus eigener Erfahrung am See entstanden: mit den Jahreszeiten, den "
            "Handwerksbetrieben vor Ort, dem Notar und den Gästen, die von außerhalb anreisen. "
            "Wenn Sie ein Haus am Ortasee verkaufen, kaufen oder vermieten möchten, beginnt es "
            "mit einem Gespräch."
        ),
        "ctaWhatsapp": "Auf WhatsApp schreiben",
        "ctaEmail": "E-Mail",
        "whatEyebrow": "Was wir tun",
        "whatTitle": "Drei Möglichkeiten, ein Haus am See zu nutzen",
        "services": [
            {
                "key": "vendere",
                "title": "Verkaufen",
                "text": (
                    "Bewertung, Fotografie, Inserat, Verhandlung, Notartermin: ein Ansprechpartner "
                    "für alles. Käufer am Ortasee kommen fast immer von außerhalb der Provinz. Man "
                    "muss sie verstehen, bevor man sie überzeugen kann – und genau das bestimmt "
                    "die Vermarktung."
                ),
                "cta": "Bewertung anfragen",
            },
            {
                "key": "comprare",
                "title": "Kaufen",
                "text": (
                    "Wer hier sucht, achtet auf konkrete Dinge: Seeblick, Ruhe und eine Zufahrt, "
                    "die auch im Winter funktioniert. Wir prüfen das vorab, damit Besichtigungen "
                    "der Auswahl dienen und nicht dem Aussortieren."
                ),
                "cta": "Sagen Sie uns, was Sie suchen",
            },
            {
                "key": "reddito",
                "title": "Vermieten",
                "text": (
                    "Ein Haus am See kann in den Monaten Ertrag bringen, in denen Sie es nicht "
                    "selbst nutzen. Kurzzeit- oder Saisonvermietung, mit der operativen Betreuung, "
                    "die es braucht, damit daraus kein Zweitjob wird."
                ),
                "cta": "Über Vermietung sprechen",
            },
        ],
        "lakeEyebrow": "Der See",
        "lakeLede": (
            "Der kleinste unter den großen Seen Norditaliens – und der einzige, dessen Wasser "
            "nach Norden abfließt. Vierzig Minuten von Malpensa, etwas mehr als eine Stunde von "
            "Mailand."
        ),
        "lakeText": (
            "Orta San Giulio, Pella, San Maurizio d'Opaglio, Gozzano, Omegna: Von Ufer zu Ufer "
            "ändern sich Ausrichtung, Zugang zum Wasser, Zufahrt und Preis. Das kann den "
            "Unterschied ausmachen zwischen einem Haus, das in drei Monaten verkauft wird, und "
            "einem, das zwei Jahre am Markt bleibt – und aus einem Inserat lässt sich das nicht "
            "ablesen."
        ),
        "lakeClose": (
            "Nur wenige Verkäufe im Jahr, fast immer zwischen Menschen, die den See bereits kennen."
        ),
        "galleryAlts": [
            "Die Insel San Giulio von oben, mit dem grünen Wasser des Ortasees",
            "Die Insel San Giulio vor den Bergen im Nachmittagslicht",
            "Holzsteg am Ortasee bei Sonnenuntergang",
            "Wiesen am Mottarone bei Sonnenuntergang, der See im Hintergrund",
        ],
        "readingTitle": "Zum Weiterlesen",
        "readingPosts": [
            {
                "title": "Der Ortasee: Italiens stilles Juwel",
                "url": "https://www.villa-volpe.com/de/blog/posts/lake-orta-italys-quiet-gem.html",
            },
            {
                "title": "Lago Maggiore oder Ortasee: Warum der kleinere See gewinnt",
                "url": "https://www.villa-volpe.com/de/blog/posts/lake-maggiore-vs-lake-orta.html",
            },
            {
                "title": "Kann man im Ortasee schwimmen?",
                "url": "https://www.villa-volpe.com/de/blog/posts/swimming-in-lake-orta.html",
            },
            {
                "title": "Baden am Ortasee: die schönsten Strände",
                "url": "https://www.villa-volpe.com/de/blog/posts/beaches-lake-orta.html",
            },
        ],
        "bandTitle": "Sprechen wir darüber",
        "bandText": (
            "Eine Bewertung ist unverbindlich. Eine Stunde am Telefon klärt mehr als drei Monate, "
            "in denen Sie allein Inserate durchsuchen."
        ),
        "tagline": "Häuser und Villen am Ortasee.",
        "method": "Methode, Werkzeuge und Regie der TriesteVillas-Gruppe. ↗",
        "sitemapTitle": "Sitemap",
        "home": "Home",
        "contactTitle": "Kontakt",
        "location": "Ortasee, Provinz Novara",
        "rights": "Alle Rechte vorbehalten.",
        "leads": {
            "hero": {
                "wa": (
                    "Guten Tag, ich komme über ortavillas.com und möchte über ein Haus am "
                    "Ortasee sprechen."
                ),
                "subject": "[ORTAVILLAS] Anfrage",
            },
            "vendere": {
                "wa": (
                    "Guten Tag, ich komme über ortavillas.com und möchte eine Immobilie am "
                    "Ortasee bewerten lassen."
                ),
                "subject": "[ORTAVILLAS] Bewertung",
            },
            "comprare": {
                "wa": (
                    "Guten Tag, ich komme über ortavillas.com und suche ein Haus am Ortasee."
                ),
                "subject": "[ORTAVILLAS] Immobiliensuche",
            },
            "reddito": {
                "wa": (
                    "Guten Tag, ich komme über ortavillas.com und möchte ein Haus am Ortasee "
                    "vermieten."
                ),
                "subject": "[ORTAVILLAS] Vermietung",
            },
            "finale": {
                "wa": (
                    "Guten Tag, ich komme über ortavillas.com und möchte mit Ihnen sprechen."
                ),
                "subject": "[ORTAVILLAS] Anfrage",
            },
        },
    },
    # Sloveno. Vikanje in minuscolo (vi, vas), come su triestevillas.com.
    # D1: nessuna promessa di assistenza in sloveno -- heroLede, bandText e
    # description dicono che si parla in italiano, inglese o tedesco.
    # I messaggi WhatsApp precompilati evitano il participio (rad/rada) per non
    # presumere il genere di chi scrive.
    "sl": {
        "title": "OrtaVillas — Hiše in vile ob jezeru Orta",
        "description": (
            "Prodaja, nakup ali oddajanje hiše ob jezeru Orta. En sam sogovornik od prve ocene "
            "vrednosti do podpisa pri notarju – v italijanščini, angleščini ali nemščini. "
            "+39 347 8628738."
        ),
        "phoneDisplay": "+39 347 8628738",
        "menuLabel": "Meni",
        "languageLabel": "Jezik",
        "navWhat": "Kaj delamo",
        "navLake": "Jezero",
        "navContacts": "Kontakt",
        "scrollLabel": "Pomaknite se navzdol",
        "h1": "Hiše in vile ob jezeru Orta",
        "heroLede": (
            "OrtaVillas izhaja iz izkušnje tistih, ki imajo ob jezeru nepremičnino in zanjo "
            "zares skrbijo vsak dan, z vsem, kar sodi zraven: letni časi, obrtniki, notar, "
            "gostje, ki prihajajo od drugod. Če "
            "želite hišo ob jezeru Orta prodati, kupiti ali oddajati, se vse začne s pogovorom "
            "– v italijanščini, angleščini ali nemščini."
        ),
        "ctaWhatsapp": "Pišite nam na WhatsApp",
        "ctaEmail": "E-pošta",
        "whatEyebrow": "Kaj delamo",
        "whatTitle": "Tri možnosti za hišo ob jezeru",
        "services": [
            {
                "key": "vendere",
                "title": "Prodaja",
                "text": (
                    "Ocena vrednosti, fotografiranje, oglas, pogajanja, podpis pri notarju: ena "
                    "kontaktna oseba za vse. Kupci hiš ob jezeru Orta skoraj vedno prihajajo "
                    "iz drugih pokrajin – najprej jih je treba razumeti in šele nato prepričati. "
                    "Od tega je odvisno, kako zastavimo prodajo."
                ),
                "cta": "Zaprosite za oceno vrednosti",
            },
            {
                "key": "comprare",
                "title": "Nakup",
                "text": (
                    "Kdor išče tukaj, išče točno določene stvari: razgled, tišino, cesto, ki je "
                    "prevozna tudi pozimi. Preverimo jih vnaprej, da so ogledi namenjeni izbiri "
                    "in ne izločanju."
                ),
                "cta": "Povejte nam, kaj iščete",
            },
            {
                "key": "reddito",
                "title": "Oddajanje",
                "text": (
                    "Hiša ob jezeru lahko prinaša dohodek v mesecih, ko je ne uporabljate. "
                    "Kratkoročno ali sezonsko oddajanje, z operativnim upravljanjem, ki poskrbi, "
                    "da vse res deluje in da vam to ne postane druga služba."
                ),
                "cta": "Pogovorimo se o oddajanju",
            },
        ],
        "lakeEyebrow": "Jezero",
        "lakeLede": (
            "Najmanjše med velikimi jezeri severne Italije in edino, katerega voda odteka proti "
            "severu. Štirideset minut od letališča Malpensa, dobro uro od Milana."
        ),
        "lakeText": (
            "Orta San Giulio, Pella, San Maurizio d'Opaglio, Gozzano, Omegna: od brega do brega "
            "se spreminjajo lega, dostop do vode, cesta in cena. To je razlika med hišo, ki se "
            "proda v treh mesecih, in tisto, ki dve leti čaka na kupca – in iz oglasa se je ne "
            "da razbrati."
        ),
        "lakeClose": (
            "Le nekaj kupoprodaj na leto, skoraj vse med ljudmi, ki jezero že poznajo."
        ),
        "galleryAlts": [
            "Pogled od zgoraj na otok San Giulio in zeleno vodo jezera Orta",
            "Otok San Giulio z gorami v ozadju, v popoldanski svetlobi",
            "Lesen pomol na jezeru Orta ob sončnem zahodu",
            "Travniki gore Mottarone ob sončnem zahodu, v ozadju jezero",
        ],
        # villa-volpe.com non ha una versione slovena (verificato 2026-10-01:
        # /sl/ risponde 404; il sito pubblica it, en, de, fr). I titoli sono
        # tradotti, i link portano all'inglese, e il titolo della sezione lo dice.
        "readingTitle": "Za nadaljnje branje (v angleščini)",
        "readingPosts": [
            {
                "title": "Jezero Orta: tihi biser Italije",
                "url": "https://www.villa-volpe.com/blog/posts/lake-orta-italys-quiet-gem.html",
            },
            {
                "title": "Jezero Maggiore ali jezero Orta? Primerjava",
                "url": "https://www.villa-volpe.com/blog/posts/lake-maggiore-vs-lake-orta.html",
            },
            {
                "title": "Plavanje v jezeru Orta",
                "url": "https://www.villa-volpe.com/blog/posts/swimming-in-lake-orta.html",
            },
            {
                "title": "Najlepše plaže ob jezeru Orta",
                "url": "https://www.villa-volpe.com/blog/posts/beaches-lake-orta.html",
            },
        ],
        "bandTitle": "Pogovorimo se",
        "bandText": (
            "Ocena vrednosti vas ne zavezuje k ničemur. Ura telefonskega pogovora vam pove več "
            "kot tri mesece samostojnega brskanja po oglasih. Pogovarjamo se v italijanščini, "
            "angleščini ali nemščini."
        ),
        "tagline": "Hiše in vile ob jezeru Orta.",
        "method": "Metoda, orodja in vodstvo skupine TriesteVillas. ↗",
        "sitemapTitle": "Zemljevid strani",
        "home": "Domov",
        "contactTitle": "Kontakt",
        "location": "Jezero Orta, pokrajina Novara",
        "rights": "Vse pravice pridržane.",
        "leads": {
            "hero": {
                "wa": (
                    "Pozdravljeni, pišem vam prek strani ortavillas.com in se želim pogovoriti o "
                    "hiši ob jezeru Orta."
                ),
                "subject": "[ORTAVILLAS] Povpraševanje",
            },
            "vendere": {
                "wa": (
                    "Pozdravljeni, pišem vam prek strani ortavillas.com in prosim za oceno "
                    "vrednosti nepremičnine ob jezeru Orta."
                ),
                "subject": "[ORTAVILLAS] Ocena vrednosti",
            },
            "comprare": {
                "wa": (
                    "Pozdravljeni, pišem vam prek strani ortavillas.com in iščem hišo ob jezeru "
                    "Orta."
                ),
                "subject": "[ORTAVILLAS] Iskanje nepremičnine",
            },
            "reddito": {
                "wa": (
                    "Pozdravljeni, pišem vam prek strani ortavillas.com in želim oddajati hišo ob "
                    "jezeru Orta."
                ),
                "subject": "[ORTAVILLAS] Oddajanje",
            },
            "finale": {
                "wa": (
                    "Pozdravljeni, pišem vam prek strani ortavillas.com in se želim pogovoriti z "
                    "vami."
                ),
                "subject": "[ORTAVILLAS] Povpraševanje",
            },
        },
    },
}


def _shape(value):
    """La forma di un valore di STRINGS: chiavi annidate e lunghezze delle liste."""
    if isinstance(value, dict):
        return {key: _shape(item) for key, item in value.items()}
    if isinstance(value, list):
        return [_shape(item) for item in value]
    return type(value).__name__


def _leaves(value):
    if isinstance(value, dict):
        return sum(_leaves(item) for item in value.values())
    if isinstance(value, list):
        return sum(_leaves(item) for item in value)
    return 1


def _blank_paths(value, path=""):
    """I percorsi (es. 'leads.vendere.subject') delle stringhe vuote o di soli spazi."""
    if isinstance(value, dict):
        return [
            hit
            for key, item in value.items()
            for hit in _blank_paths(item, f"{path}.{key}" if path else key)
        ]
    if isinstance(value, list):
        return [
            hit
            for index, item in enumerate(value)
            for hit in _blank_paths(item, f"{path}[{index}]")
        ]
    if isinstance(value, str) and not value.strip():
        return [path]
    return []


def output_file(locale):
    """Il file da scrivere si ricava da PATHS: '/' -> index.html, '/sl/' -> sl/index.html."""
    return PATHS[locale].strip("/") + "/index.html" if PATHS[locale] != "/" else "index.html"


def check_locales():
    """Cancello: ogni lingua e' completa e coerente con STRINGS["it"] prima di scrivere.

    Controlla, per ogni lingua: presenza in PATHS, OG_LOCALE, GROUP_SITE e STRINGS;
    stessa forma di 'it' (nomi delle chiavi a ogni livello, lunghezze delle liste);
    nessuna stringa vuota o di soli spazi a nessuna profondita'; i servizi nello
    stesso ordine e con gli stessi identificativi di 'it', ognuno col suo lead;
    ogni oggetto mail col prefisso [ORTAVILLAS] (l'attribuzione dei lead);
    percorso, og:locale e link al gruppo nella forma giusta e senza doppioni.
    Si ferma prima di toccare i file: main() comunque scrive solo a generazione finita.
    """
    errors = []
    duplicates = sorted({locale for locale in LOCALES if LOCALES.count(locale) > 1})
    if duplicates:
        errors.append(f"LOCALES ha lingue ripetute: {duplicates}")
    if not LOCALES or LOCALES[0] != "it":
        errors.append("LOCALES deve cominciare da 'it' (la radice del sito e x-default)")
    reference = _shape(STRINGS["it"])
    reference_keys = [service["key"] for service in STRINGS["it"]["services"]]
    for locale in LOCALES:
        missing = [
            name
            for name, table in (
                ("PATHS", PATHS),
                ("OG_LOCALE", OG_LOCALE),
                ("GROUP_SITE", GROUP_SITE),
                ("STRINGS", STRINGS),
            )
            if locale not in table
        ]
        errors.extend(f"{locale}: manca in {name}" for name in missing)
        if missing:
            continue

        expected_path = "/" if locale == "it" else f"/{locale}/"
        if PATHS[locale] != expected_path:
            errors.append(f"{locale}: PATHS vale {PATHS[locale]!r}, atteso {expected_path!r}")
        og = OG_LOCALE[locale]
        if not (
            isinstance(og, str)
            and re.fullmatch(r"[a-z]{2}_[A-Z]{2}", og)
            and og.startswith(f"{locale}_")
        ):
            errors.append(f"{locale}: OG_LOCALE vale {og!r}, atteso '{locale}_XX'")
        group = GROUP_SITE[locale]
        if not (
            isinstance(group, str)
            and re.fullmatch(r"https://triestevillas\.com(/[a-z]{2})?", group)
        ):
            errors.append(
                f"{locale}: GROUP_SITE vale {group!r}, non e' un indirizzo di triestevillas.com"
            )

        strings = STRINGS[locale]
        if _shape(strings) != reference:
            errors.append(f"{locale}: la struttura di STRINGS non coincide con quella di 'it'")
            continue
        blanks = _blank_paths(strings)
        if blanks:
            errors.append(f"{locale}: stringhe vuote {blanks}")
        keys = [service["key"] for service in strings["services"]]
        if keys != reference_keys:
            errors.append(
                f"{locale}: servizi {keys}, attesi {reference_keys} (identificativi, non testo)"
            )
        unknown = [key for key in keys if key not in strings["leads"]]
        if unknown:
            errors.append(f"{locale}: servizi senza lead {unknown}")
        unmarked = [
            name
            for name, lead in strings["leads"].items()
            if not lead["subject"].startswith("[ORTAVILLAS] ")
        ]
        if unmarked:
            errors.append(f"{locale}: oggetti mail senza prefisso [ORTAVILLAS] {unmarked}")
        bad_urls = [
            post["url"] for post in strings["readingPosts"] if not post["url"].startswith("https://")
        ]
        if bad_urls:
            errors.append(f"{locale}: letture con indirizzo non https {bad_urls}")

    for name, table in (("PATHS", PATHS), ("OG_LOCALE", OG_LOCALE), ("GROUP_SITE", GROUP_SITE)):
        values = [table[locale] for locale in LOCALES if locale in table]
        repeated = sorted({value for value in values if values.count(value) > 1})
        if repeated:
            errors.append(f"{name} ha valori ripetuti: {repeated}")
    for name, table in (
        ("PATHS", PATHS),
        ("OG_LOCALE", OG_LOCALE),
        ("GROUP_SITE", GROUP_SITE),
        ("STRINGS", STRINGS),
    ):
        extra = sorted(set(table) - set(LOCALES))
        if extra:
            errors.append(f"{name} ha lingue fuori da LOCALES: {extra}")
    if errors:
        raise SystemExit("check_locales:\n  " + "\n  ".join(errors))
    counts = ", ".join(f"{locale}={_leaves(STRINGS[locale])}" for locale in LOCALES)
    print(f"stringhe per lingua: {counts}")


def locale_switcher(current):
    items = []
    for locale in LOCALES:
        label = locale.upper()
        if locale == current:
            items.append(f'<span aria-current="page">{label}</span>')
        else:
            items.append(
                f'<a href="{PATHS[locale]}" hreflang="{locale}" lang="{locale}">{label}</a>'
            )
    return "".join(items)


def wa_href(lead):
    return f"{WA}?text={quote(lead['wa'], safe='')}"


def mail_href(lead):
    return f"mailto:{EMAIL}?subject={quote(lead['subject'], safe='')}"


def lead_link_attrs(source, channel):
    return f'data-lead-source="{source}" data-lead-channel="{channel}"'


def alternate_links():
    links = [
        f'<link rel="alternate" hreflang="{locale}" href="{SITE}{PATHS[locale]}">'
        for locale in LOCALES
    ]
    links.append(f'<link rel="alternate" hreflang="x-default" href="{SITE}/">')
    return "\n".join(links)


def json_ld(locale, s):
    canonical = f"{SITE}{PATHS[locale]}"
    image = f"{SITE}/assets/images/og-ortavillas.jpg"
    graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "RealEstateAgent",
                "@id": f"{SITE}/#agent",
                "name": "OrtaVillas",
                "url": f"{SITE}/",
                "image": image,
                "telephone": PHONE_TEL,
                "email": EMAIL,
                "areaServed": {
                    "@type": "Place",
                    "name": "Lago d'Orta / provincia di Novara",
                },
                # Le lingue in cui il SITO pubblica, non quelle dello sportello:
                # visite, accompagnamento e rogito restano in italiano, inglese e
                # tedesco (D1, 2026-09-11). Stessa scelta di triestevillas.com.
                "knowsLanguage": LOCALES,
            },
            {
                "@type": "WebSite",
                "@id": f"{SITE}/#website",
                "name": "OrtaVillas",
                "url": f"{SITE}/",
                "inLanguage": locale,
                "publisher": {"@id": f"{SITE}/#agent"},
            },
            {
                "@type": "ImageObject",
                "@id": f"{SITE}/#primaryimage",
                "url": image,
                "contentUrl": image,
                "width": 1200,
                "height": 630,
            },
            {
                "@type": "WebPage",
                "@id": f"{canonical}#webpage",
                "url": canonical,
                "name": s["title"],
                "description": s["description"],
                "inLanguage": locale,
                "isPartOf": {"@id": f"{SITE}/#website"},
                "about": {"@id": f"{SITE}/#agent"},
                "primaryImageOfPage": {"@id": f"{SITE}/#primaryimage"},
            },
        ],
    }
    return json.dumps(graph, ensure_ascii=False, indent=2)


def service_cards(s):
    cards = []
    for index, service in enumerate(s["services"], start=1):
        source = service["key"]
        lead = s["leads"][source]
        cards.append(
            f"""      <article class="service">
        <span class="service__number" aria-hidden="true">{index:02d}</span>
        <h3>{service['title']}</h3>
        <p>{service['text']}</p>
        <div class="service__actions">
          <a class="text-link" href="{wa_href(lead)}" target="_blank" rel="noopener" {lead_link_attrs(source, 'whatsapp')}>{service['cta']} <span aria-hidden="true">↗</span></a>
          <a class="service__email" href="{mail_href(lead)}" {lead_link_attrs(source, 'email')}>{s['ctaEmail']}</a>
        </div>
      </article>"""
        )
    return "\n".join(cards)


def reading_items(s):
    items = [
        f'          <li><a href="{post["url"]}" target="_blank" rel="noopener">'
        f'{post["title"]} <span aria-hidden="true">↗</span></a></li>'
        for post in s["readingPosts"]
    ]
    return "\n".join(items)


def page(locale):
    s = STRINGS[locale]
    canonical = f"{SITE}{PATHS[locale]}"
    other_og_locales = "\n".join(
        f'<meta property="og:locale:alternate" content="{OG_LOCALE[other]}">'
        for other in LOCALES
        if other != locale
    )
    nav_items = (
        f'<a class="nav-underline" href="#cosa-facciamo">{s["navWhat"]}</a>'
        f'<a class="nav-underline" href="#lago">{s["navLake"]}</a>'
        f'<a class="nav-underline" href="#contatti">{s["navContacts"]}</a>'
    )
    sheet_items = (
        f'<li><a href="#cosa-facciamo">{s["navWhat"]}</a></li>'
        f'<li><a href="#lago">{s["navLake"]}</a></li>'
        f'<li><a href="#contatti">{s["navContacts"]}</a></li>'
    )
    sitemap_items = (
        f'<li><a href="{PATHS[locale]}">{s["home"]}</a></li>'
        f'<li><a href="#cosa-facciamo">{s["navWhat"]}</a></li>'
        f'<li><a href="#lago">{s["navLake"]}</a></li>'
    )
    hero_lead = s["leads"]["hero"]
    final_lead = s["leads"]["finale"]
    alts = s["galleryAlts"]

    return f"""<!doctype html>
<html lang="{locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{s['title']}</title>
<meta name="description" content="{s['description']}">

<link rel="canonical" href="{canonical}">
{alternate_links()}

<link rel="icon" href="/assets/favicons/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/icon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/assets/favicons/icon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/assets/favicons/icon-512.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
<!-- This value must exactly match the favicon background, not merely resemble it. -->
<meta name="theme-color" content="#0a1b1e">

<meta property="og:type" content="website">
<meta property="og:site_name" content="OrtaVillas">
<meta property="og:url" content="{canonical}">
<meta property="og:title" content="{s['title']}">
<meta property="og:description" content="{s['description']}">
<meta property="og:image" content="{SITE}/assets/images/og-ortavillas.jpg">
<meta property="og:image:secure_url" content="{SITE}/assets/images/og-ortavillas.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="OrtaVillas">
<meta property="og:locale" content="{OG_LOCALE[locale]}">
{other_og_locales}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{s['title']}">
<meta name="twitter:description" content="{s['description']}">
<meta name="twitter:image" content="{SITE}/assets/images/og-ortavillas.jpg">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;display=swap">
<link rel="stylesheet" href="/assets/css/style.css">
<script type="application/ld+json">
{json_ld(locale, s)}
</script>
</head>
<body>

<header class="site-header">
  <div class="pill">
    <a class="pill__brand" href="{PATHS[locale]}" aria-label="OrtaVillas">
      <img src="/assets/logos/ortavillas-wordmark.svg" alt="OrtaVillas" width="277" height="54">
    </a>
    <nav class="pill__nav" aria-label="{s['menuLabel']}">
      {nav_items}
    </nav>
    <div class="pill__end">
      <div class="locale" aria-label="{s['languageLabel']}">{locale_switcher(locale)}</div>
      <button class="burger" type="button" data-burger aria-expanded="false" aria-controls="menu" aria-label="{s['menuLabel']}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
      </button>
    </div>
  </div>
  <div class="sheet" id="menu" data-sheet>
    <nav aria-label="{s['menuLabel']}"><ul>{sheet_items}</ul></nav>
    <div class="sheet__contacts">
      <a href="{wa_href(hero_lead)}" target="_blank" rel="noopener" {lead_link_attrs('hero', 'whatsapp')}>WhatsApp {s['phoneDisplay']}</a>
      <a href="tel:{PHONE_TEL}" {lead_link_attrs('hero', 'phone')}>{s['phoneDisplay']}</a>
      <a href="{mail_href(hero_lead)}" {lead_link_attrs('hero', 'email')}>{EMAIL}</a>
    </div>
  </div>
</header>

<main>
  <section class="hero">
    <video class="hero__video" autoplay muted loop playsinline preload="metadata"
           poster="/assets/images/hero-poster.jpg" aria-hidden="true" tabindex="-1">
      <source src="/assets/video/hero.webm" type="video/webm">
      <source src="/assets/video/hero.mp4" type="video/mp4">
    </video>
    <div class="hero__scrim" aria-hidden="true"></div>

    <div class="hero__inner">
      <img class="hero__mark" src="/assets/logos/ortavillas-wordmark.svg" alt="OrtaVillas" width="277" height="54">
      <h1>{s['h1']}</h1>
      <p class="hero__lede">{s['heroLede']}</p>
      <div class="hero__cta">
        <a class="btn btn--solid" href="{wa_href(hero_lead)}" target="_blank" rel="noopener" {lead_link_attrs('hero', 'whatsapp')}>{s['ctaWhatsapp']}</a>
        <a class="btn btn--ghost" href="tel:{PHONE_TEL}" {lead_link_attrs('hero', 'phone')}>{s['phoneDisplay']}</a>
      </div>
      <a class="hero__email" href="{mail_href(hero_lead)}" {lead_link_attrs('hero', 'email')}>{EMAIL}</a>
    </div>

    <a class="hero__cue" href="#cosa-facciamo">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 5v14M6 13l6 6 6-6"/>
      </svg>
      <span class="sr-only">{s['scrollLabel']}</span>
    </a>
  </section>

  <section class="what" id="cosa-facciamo">
    <div class="wrap section-wrap">
      <p class="eyebrow">{s['whatEyebrow']}</p>
      <h2>{s['whatTitle']}</h2>
      <div class="services">
{service_cards(s)}
      </div>
    </div>
  </section>

  <section class="lake" id="lago">
    <div class="wrap section-wrap">
      <div class="lake__intro">
        <div>
          <p class="eyebrow">{s['lakeEyebrow']}</p>
          <h2>{s['lakeLede']}</h2>
        </div>
        <div class="lake__body">
          <p>{s['lakeText']}</p>
          <p class="lake__close">{s['lakeClose']}</p>
        </div>
      </div>

      <div class="gallery">
        <figure><img src="/assets/images/lago-orta-isola-san-giulio-dallalto.jpg" alt="{alts[0]}" loading="lazy" width="1400" height="787"></figure>
        <figure><img src="/assets/images/isola-san-giulio-lago-orta.jpg" alt="{alts[1]}" loading="lazy" width="1400" height="933"></figure>
        <figure><img src="/assets/images/pontile-tramonto-lago-orta.jpg" alt="{alts[2]}" loading="lazy" width="1400" height="933"></figure>
        <figure><img src="/assets/images/panorama-mottarone-lago-orta.jpg" alt="{alts[3]}" loading="lazy" width="1400" height="933"></figure>
      </div>

      <div class="lake__reading">
        <p class="eyebrow">{s['readingTitle']}</p>
        <ul class="reading-list">
{reading_items(s)}
        </ul>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="wrap cta-band__inner">
      <div>
        <h2>{s['bandTitle']}</h2>
        <p>{s['bandText']}</p>
      </div>
      <div class="cta-band__actions">
        <a class="btn btn--brand" href="{wa_href(final_lead)}" target="_blank" rel="noopener" {lead_link_attrs('finale', 'whatsapp')}>{s['ctaWhatsapp']}</a>
        <a class="btn btn--outline" href="tel:{PHONE_TEL}" {lead_link_attrs('finale', 'phone')}>{s['phoneDisplay']}</a>
        <a class="cta-band__email" href="{mail_href(final_lead)}" {lead_link_attrs('finale', 'email')}>{EMAIL}</a>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="wrap footer__grid">
    <div>
      <img class="footer__mark" src="/assets/logos/ortavillas-wordmark-avorio.svg" alt="OrtaVillas" width="277" height="54">
      <p class="footer__tagline">{s['tagline']}</p>
      <p class="footer__method"><a href="{GROUP_SITE[locale]}" target="_blank" rel="noopener">{s['method']}</a></p>
    </div>

    <nav aria-label="{s['sitemapTitle']}">
      <h2 class="col-title">{s['sitemapTitle']}</h2>
      <ul class="footer__sitemap">{sitemap_items}</ul>
    </nav>

    <div id="contatti">
      <h2 class="col-title">{s['contactTitle']}</h2>
      <div class="footer__contacts">
        <a href="{wa_href(final_lead)}" target="_blank" rel="noopener" {lead_link_attrs('finale', 'whatsapp')}>WhatsApp {s['phoneDisplay']}</a>
        <a href="tel:{PHONE_TEL}" {lead_link_attrs('finale', 'phone')}>{s['phoneDisplay']}</a>
        <a href="{mail_href(final_lead)}" {lead_link_attrs('finale', 'email')}>{EMAIL}</a>
        <span>{s['location']}</span>
      </div>
    </div>
  </div>

  <div class="footer__bar">
    <div class="wrap">
      <span>© {YEAR} OrtaVillas. {s['rights']}</span>
    </div>
  </div>
</footer>

<script src="/assets/js/nav.js" defer></script>
</body>
</html>
"""


def sitemap():
    entries = []
    for locale in LOCALES:
        alternates = [
            f'    <xhtml:link rel="alternate" hreflang="{other}" href="{SITE}{PATHS[other]}"/>'
            for other in LOCALES
        ]
        alternates.append(
            f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}/"/>'
        )
        entries.append(
            f"  <url>\n"
            f"    <loc>{SITE}{PATHS[locale]}</loc>\n"
            + "\n".join(alternates)
            + "\n  </url>"
        )
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
        '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + "\n".join(entries)
        + "\n</urlset>\n"
    )


def main():
    check_locales()
    # Tutto in memoria prima, su disco dopo: se una pagina fallisce a meta'
    # generazione non resta un sito con meta' file nuovi e meta' vecchi.
    outputs = [(output_file(locale), page(locale)) for locale in LOCALES]
    outputs.append(("sitemap.xml", sitemap()))
    for relative, content in outputs:
        output = os.path.join(ROOT, relative)
        os.makedirs(os.path.dirname(output), exist_ok=True)
        with open(output, "w", encoding="utf-8") as output_handle:
            output_handle.write(content)
        print(f"{relative:<20} {len(content):>6} byte")


if __name__ == "__main__":
    main()
