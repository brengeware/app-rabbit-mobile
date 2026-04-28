import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // if deployed at https://<user>.github.io/app-rabbit-mobile
  basePath: '/app-rabbit-mobile',
  assetPrefix: '/app-rabbit-mobile',
};

export default nextConfig;