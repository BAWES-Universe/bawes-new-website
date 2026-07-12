/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

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

module.exports = withNextIntl(nextConfig)
