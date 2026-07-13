import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // O GitHub Actions injetará o basePath automaticamente se configurado corretamente.
  // Se não injetar, o padrão será "/" que funciona se o domínio for customizado,
  // mas para pibuspi.github.io/IAclopedia precisamos que os links sejam relativos ou tenham o prefixo.
};

export default nextConfig;
