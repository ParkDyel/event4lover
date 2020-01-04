const $_port = 38010;

module.exports = {
  publicPath: '/event4lover',
  outputDir: 'docs',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: $_port, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: true,
  },
};
