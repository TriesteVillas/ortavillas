import type { PerLingua, TestiLuogo, TestiMondoPagina } from "./tipi";
import type { LuogoId, MondoId } from "@/content/indice";
import ortaSanGiulio from "./orta-san-giulio";
import legro from "./legro";
import pettenasco from "./pettenasco";
import vacciago from "./vacciago";
import ameno from "./ameno";
import miasino from "./miasino";
import armeno from "./armeno";
import omegna from "./omegna";
import nonio from "./nonio";
import quarnaSopra from "./quarna-sopra";
import ronco from "./ronco";
import pella from "./pella";
import madonnaDelSasso from "./madonna-del-sasso";
import sanMaurizioDopaglio from "./san-maurizio-dopaglio";
import gozzano from "./gozzano";
import bolzanoNovarese from "./bolzano-novarese";
import mEst from "../mondi/est";
import mOvest from "../mondi/ovest";
import mColline from "../mondi/colline";
import mCapi from "../mondi/capi";

export const TESTI_LUOGHI: Record<LuogoId, PerLingua<TestiLuogo>> = {
  "orta-san-giulio": ortaSanGiulio,
  "legro": legro,
  "pettenasco": pettenasco,
  "vacciago": vacciago,
  "ameno": ameno,
  "miasino": miasino,
  "armeno": armeno,
  "omegna": omegna,
  "nonio": nonio,
  "quarna-sopra": quarnaSopra,
  "ronco": ronco,
  "pella": pella,
  "madonna-del-sasso": madonnaDelSasso,
  "san-maurizio-dopaglio": sanMaurizioDopaglio,
  "gozzano": gozzano,
  "bolzano-novarese": bolzanoNovarese,
};
export const TESTI_MONDI: Record<MondoId, PerLingua<TestiMondoPagina>> = {
  est: mEst,
  ovest: mOvest,
  colline: mColline,
  capi: mCapi,
};
