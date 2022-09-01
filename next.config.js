/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: ['https://unpkg.com/react-visibility-sensor@5.0.1/'],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com'],
  },
}

module.exports = nextConfig
