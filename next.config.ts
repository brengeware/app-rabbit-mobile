import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/app-rabbit-mobile' : '',
  assetPrefix: isProd ? '/app-rabbit-mobile' : '',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;