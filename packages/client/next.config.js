const path = require('path');

const isDev = process.env.NODE_ENV === 'development'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const serverHost = process.env.NEXT_PUBLIC_SERVER_HOST
const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared')],
  },
  env: {
    GOOGLE_CLIENT_ID: googleClientId,
    SERVER_URL: serverUrl,
    IS_DEV: isDev
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://lh3.googleusercontent.com',
        port: '',
      },
    ],
    domains: ['lh3.googleusercontent.com', serverHost],
  },
};

module.exports = nextConfig;
