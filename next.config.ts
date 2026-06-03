import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Añadimos el soporte para las calidades optimizadas de tus imágenes
  images: {
    qualities: [30, 40, 75],
  },
};

export default nextConfig;