
const path = require('path')
const baseWebpackConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
module.exports = merge(baseWebpackConfig, {
  entry: {
    path: path.resolve(__dirname, '../src/entry-server.ts')
  },
  output: {
    filename: 'assets/js/[name].[contenthash:6].js',
    path: path.resolve(__dirname, '../dist/server')
  },
  target: 'node'
})