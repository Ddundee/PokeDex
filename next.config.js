/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  //async redirects() {
  //  return [
  //    {
  //      source: '/:slug',
  //      destination: '/',
  //      permanent: true
  //    }
  //  ]
  //}
}
