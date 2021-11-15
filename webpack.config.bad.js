const webpackConfig = require('./webpack.config');
webpackConfig.entry = {
  webpack: "./index.bad.js",
}

webpackConfig.output = {
  path: __dirname + "/output",
  filename: `bundle-bad.webpack.js`,
}

module.exports = webpackConfig;
