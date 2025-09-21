/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages serves from a subdirectory for project pages
  // For https://clarkemoyer.github.io/clarkemoyer.com/ we need basePath: '/clarkemoyer.com'
  basePath: process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '',
};

export default nextConfig;