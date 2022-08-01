/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API: 'https://fabiansport.com/fs/api', // api desarrollada en php, en desuso
        API_NODEJS: 'http://localhost:3467'
      }
    }
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['fabiansport.com'],
    },
    env: {
      SITE_NAME: 'FABIAN SPORT',
      WEB: 'https://fabiansport.com',
      STATIC_PUBLIC: 'https://fabiansport.com/',
      API: 'https://fabiansport.com/fs/api', // api desarrollada en php, en desuso
      API_NODEJS: 'https://apinode.fabiansport.com'
    }
  }
}

module.exports = nextConfig
