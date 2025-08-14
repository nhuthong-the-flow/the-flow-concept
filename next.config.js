/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['assets-global.website-files.com', 'i.vimeocdn.com'],
  },
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}
