/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fabiansport.com'],
  },
  env: {
    SITE_NAME: 'FABIAN SPORT',
    WEB: 'https://fabiansport.com',
    STATIC_PUBLIC: '/',
    API: 'https://fabiansport.com/fs/api', // api desarrollada en php, en desuso
    API_NODEJS: 'https://apinode.fabiansport.com'
  },
  //   experimental: {
  //   images: {
  //     unoptimized: true,
  //   }
  // }
}
  
module.exports = nextConfig

  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
