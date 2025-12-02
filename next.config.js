/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/biotec-portas-abertas',
  assetPrefix: '/biotec-portas-abertas/',
  trailingSlash: true, // 👈 ISSO FALTAVA!
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
