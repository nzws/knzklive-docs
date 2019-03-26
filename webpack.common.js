/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: './src/index.js',
  output: { filename: 'bundle.[hash].js', path: path.join(__dirname, 'dist') },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      { test: /\.vue$/, use: [{ loader: 'vue-loader' }] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({ template: 'public/index.html' }),
    new VueLoaderPlugin(),
    new CopyPlugin([
      { from: 'static', to: 'static' },
      { from: 'docs', to: 'docs' },
      { from: 'docs/README.md', to: 'README.md' }
    ]),
    new WebpackBar({ profile: true, reporter: 'profile' })
  ],
  resolve: { alias: { vue$: 'vue/dist/vue.esm.js' } }
};
