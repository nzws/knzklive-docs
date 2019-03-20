/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: './src/index.js',
  output: { filename: 'bundle.js', path: path.join(__dirname, 'dist') },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true, removeComments: true }
          }
        ]
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader?cacheDirectory']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({ title: 'KnzkLive', favicon: 'static/favicon.ico' }),
    new VueLoaderPlugin(),
    new CopyPlugin([{ from: 'static', to: 'static' }]),
    new WebpackBar({ profile: true, reporter: 'profile' })
  ]
};
