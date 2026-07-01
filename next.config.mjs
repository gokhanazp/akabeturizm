/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Statik dışa aktarım — Cloudflare Pages / herhangi bir statik hosting için.
  // Build çıktısı `out/` klasörüne üretilir.
  output: "export",
  trailingSlash: true,
  images: {
    // Statik export'ta görsel optimizasyonu kapalı olmalı.
    unoptimized: true,
  },
  // Tip kontrolü ayrıca `tsc` ile yapılır; build hızını artırmak için kapalı.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
