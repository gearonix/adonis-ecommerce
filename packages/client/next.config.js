const path = require('path')

// environment variables
const IS_DEV = process.env.NODE_ENV === 'development'
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
const SERVER_HOST = process.env.NEXT_PUBLIC_SERVER_HOST
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL
const SHOW_DEV_NAVIGATION = process.env.NEXT_PUBLIC_SHOW_DEV_NAVIGATION
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH
const PUBLIC_FOLDER = process.env.NEXT_PUBLIC_PUBLIC_FOLDER

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === 'true',
  openAnalyzer: false
})

const nextConfig = {
  reactStrictMode: false,
  basePath: BASE_PATH,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared')]
  },
  env: {
    GOOGLE_CLIENT_ID,
    SERVER_URL,
    IS_DEV,
    WEBSOCKET_URL,
    SHOW_DEV_NAVIGATION,
    BASE_PATH,
    PUBLIC_FOLDER
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://lh3.googleusercontent.com',
        port: ''
      }
    ],
    domains: ['lh3.googleusercontent.com', SERVER_HOST || 'http://localhost:6868', 'localhost']
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    appDir: false
  },
  async rewrites() {
    return [
      {
        source: '/_next/:path*',
        destination: '/src/.next/:path*',
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
