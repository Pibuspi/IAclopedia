import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/IAclopedia",
  // Removendo assetPrefix ou garantindo que seja igual ao basePath
  // No GitHub Pages com subdiretório, o basePath costuma ser suficiente
};

export default nextConfig;
