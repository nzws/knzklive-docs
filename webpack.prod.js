/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const Common = require('./webpack.common.js');

module.exports = Merge(Common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: file => {
            return `${file}.LICENSE`;
          },
          banner: licenseFile => {
            return `License information can be found in ${licenseFile}`;
          }
        }
      })
    ]
  },
  stats: 'errors-only'
});
