/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/market',
        destination: '/use-cases/market',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
