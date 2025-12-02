/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/biotec-portas-abertas',
  assetPrefix: '/biotec-portas-abertas/',
  images: {
    unoptimized: true
  }
};
module.exports = nextConfig;
