/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: './src/index.js',
  output: { filename: '[name].[hash].js', path: path.join(__dirname, 'dist') },
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader?cacheDirectory']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({ title: 'KnzkLive', favicon: 'static/favicon.ico' }),
    new CopyPlugin([{ from: 'static', to: 'static' }]),
    new WebpackBar({ profile: true, reporter: 'profile' })
  ]
};
