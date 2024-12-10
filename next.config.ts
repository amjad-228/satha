import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://sathaapp.com/:path*',
        permanent: true, // إعادة توجيه 301 دائمة
      },
    ];
  },
};

export default nextConfig;
