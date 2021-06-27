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

module.exports = {
  mode: 'development',

  entry: path.resolve(dirname, 'src/main.js'),

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.runtime.common.dev'
    }
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(dirname, 'dist'),
    port: port,
    overlay: { warnings: true, errors: true },
    stats: 'errors-only'
  },

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(dirname, 'public/index.html') }),
    new FriendlyErrorsWebpackPlugin({ compilationSuccessInfo: { messages: [`Project running in \x1B[36m http://localhost:${port}\n\n`] } }),
    new VueLoaderPlugin()
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(dirname, 'dist')
  }
}