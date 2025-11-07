import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.framer.com',
      },
      {
        protocol: 'https',
        hostname: 'prismalens.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'principleformac.com',
      },
    ],
  },
};

export default nextConfig;
