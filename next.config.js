/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages serves from a subdirectory for project pages
  // This will be overridden by GITHUB_ACTIONS environment variable
  basePath: process.env.NODE_ENV === 'production' && !process.env.GITHUB_ACTIONS ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' && !process.env.GITHUB_ACTIONS ? '' : '',
};

export default nextConfig;