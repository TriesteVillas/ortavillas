import "../globals.css";
import { Fraunces, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import { HTML_LANG, LINGUE, type Lingua } from "@/lib/rotte";

const fraunces = Fraunces({ subsets: ["latin", "latin-ext"], axes: ["opsz"], variable: "--font-fraunces", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin", "latin-ext"], axes: ["wdth"], variable: "--font-instrument", display: "swap" });
const spline = Spline_Sans_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-spline", display: "swap" });

// Prima del paint: il movimento si spegne se lo chiede il sistema o se l'ha spento il lettore.
const MOVIMENTO = `try{var r=matchMedia('(prefers-reduced-motion: reduce)').matches;var u=null;try{u=localStorage.getItem('ov-motion')}catch(e){}document.documentElement.dataset.motion=(r||u==='no')?'off':'on'}catch(e){}`;

export const viewport = { themeColor: "#04090D", colorScheme: "dark" as const };

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const primo = slug?.[0];
  const lingua: Lingua = primo && (LINGUE as readonly string[]).includes(primo) ? (primo as Lingua) : "it";
  return (
    <html lang={HTML_LANG[lingua]} className={`${fraunces.variable} ${instrument.variable} ${spline.variable}`} data-motion="on" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOVIMENTO }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
