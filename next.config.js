/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/hausofcharm',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
