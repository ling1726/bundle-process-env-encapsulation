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
    minimize: false,
  },
  stats: {
    optimizationBailout: true,
  },
};
module.exports = webpackConfig;
