/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Common = require('./webpack.common.js');

module.exports = Merge(Common, {
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  devServer: { port: 3000, stats: 'errors-only' }
});