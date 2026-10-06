import type { NextConfig } from "next";

// NEXT_DIST_DIR: una build di verifica non deve avvelenare la .next di un `next dev` acceso.
const config: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default config;
