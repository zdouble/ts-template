const webpackMerge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.base');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new cleanWebpackPlugin()
  ],
});