/** @type {import('next').NextConfig} */
var path = require('path');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  output: { path: path.resolve(__dirname, 'static'), },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    })

    return config
},
}
