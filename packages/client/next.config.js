const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src', 'shared', 'css')]
  }
}

module.exports = nextConfig
