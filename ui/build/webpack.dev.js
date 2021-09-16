/**
 * @description 开发环境配置
 * @date 2021年6月27日
 * @author caizhenhong
 */

const { develop } = require('../../config').ui
const path = require('path');
const webpackCommonConfig = require('./webpack.common.js')
const dirname = path.resolve(__dirname, '../');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { merge } = require('webpack-merge')

module.exports = merge({
  mode: 'development',

  devtool: 'inline-source-map',

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.runtime.common.dev',
    },
  },

  devServer: {
    host: '0.0.0.0',
    contentBase: path.resolve(dirname, 'dist'),
    port: develop.port,
    overlay: { warnings: true, errors: true },
    stats: 'errors-only',
    historyApiFallback: true,
    proxy:{  '/v1/api': { 
      target: 'https://68238318-280f-4368-87ae-a5da5ed3aac7.mock.pstmn.io/' ,
      changeOrigin: true,
      pathRewrite: {
          '^/v1/api': '/v1/api'
      }
    } }
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin({ compilationSuccessInfo: { messages: [`Project running in \x1B[36m http://localhost:${develop.port}\n\n`] } }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(dirname, 'dist'),
  }
}, webpackCommonConfig)