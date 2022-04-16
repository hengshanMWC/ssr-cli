const path = require('path')
const { VueLoaderPlugin } =  require('vue-loader')
const HtmlWebpackPlugin =  require('html-webpack-plugin')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')

module.exports = {
  entry: {
    path: "./src/main.ts"
  },
  output: {
    filename: 'assets/js/[name].[contenthash:6].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      title: 'vue3+webpack5+ssr'
    }),
    new MiniCssExtractPlugin()
  ]
}