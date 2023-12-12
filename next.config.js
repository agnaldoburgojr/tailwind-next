/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/agnaldoburgojr.png',
      },
    ],
  },
}

module.exports = nextConfig
