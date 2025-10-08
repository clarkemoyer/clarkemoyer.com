/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages serves from a subdirectory for project pages
  // For https://clarkemoyer.github.io/clarkemoyer.com/ we need basePath: '/clarkemoyer.com'
  // For custom domains (e.g., staging.clarkemoyer.com) we need NO basePath
  // Use USE_BASE_PATH environment variable to control this explicitly
  basePath: process.env.USE_BASE_PATH === 'true' ? '/clarkemoyer.com' : '',
  assetPrefix: process.env.USE_BASE_PATH === 'true' ? '/clarkemoyer.com' : '',
};

export default nextConfig;