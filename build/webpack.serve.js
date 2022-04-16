const baseWebpackConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
module.exports = merge(baseWebpackConfig, {
  devServer: {
    port: '9999',
    open:"http://localhost:" + 9999
  }
})