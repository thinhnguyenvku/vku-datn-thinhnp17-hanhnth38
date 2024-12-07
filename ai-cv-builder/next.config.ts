import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eehk881gbrd1nwtn.public.blob.vercel-storage.com",
      },
    ],
  },
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
