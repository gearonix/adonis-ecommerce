const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared')],
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://lh3.googleusercontent.com',
        port: '',
      },
    ],
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
