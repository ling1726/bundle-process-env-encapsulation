
const webpackConfig = require('./webpack.config');
webpackConfig.entry = {
  webpack: "./index.good.js",
}

webpackConfig.output = {
  path: __dirname + "/output",
  filename: `bundle-good.webpack.js`,
}

module.exports = webpackConfig;