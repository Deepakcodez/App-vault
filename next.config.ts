import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },

    ],
  },
  experimental: {
    devCacheControlNoCache: true,
  },
  logging: {
    browserToTerminal: true,
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
