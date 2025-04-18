const { merge } = require('webpack-merge');
const common = require('./common.config');

module.exports = (env) =>
  merge(common(env), {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      publicPath: 'http://localhost:3002/',
      clean: true
    },
    devServer: {
      port: 3002,
      hot: true,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  });
