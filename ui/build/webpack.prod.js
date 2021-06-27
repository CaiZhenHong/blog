/**
 * @description 开发环境搭建
 * @date 2021年6月27日
 * @author caizhenhong
 */

const port = 8080;
const path = require('path');
const dirname = path.resolve(__dirname, '../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',

  entry: path.resolve(dirname, 'src/main.js'),

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.runtime.common.dev',
      "@": path.resolve(dirname, 'src')
    }
  },

  devtool: 'source-map',

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.(sa|sc|c)ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|gif)$/, use: [{ loader: 'url-loader', options: { limit: 8 * 1024, esModule: false } }] },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(dirname, 'public/index.html') }),
    new FriendlyErrorsWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(dirname, 'dist')
  }
}