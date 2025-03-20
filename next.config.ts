import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["t-cf.bstatic.com"], // Add the domain here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
