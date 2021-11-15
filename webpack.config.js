const TerserPlugin = require("terser-webpack-plugin");

const webpackConfig = {
  name: "client",
  target: "web",
  mode: "production",
  entry: {
    webpack: "./index.js",
  },
  output: {
    path: __dirname + "/output",
    filename: `bundle.webpack.js`,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  stats: {
    optimizationBailout: true,
  },
};
module.exports = webpackConfig;
