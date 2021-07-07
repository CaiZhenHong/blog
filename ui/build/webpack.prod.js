/**
 * @description 生产环境配置
 * @date 2021年6月27日
 * @author caizhenhong
 */

const path = require('path');
const webpackCommonConfig = require('./webpack.common.js')
const dirname = path.resolve(__dirname, '../');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");




module.exports = merge({
  mode: 'production',

  //devtool: 'source-map',
  devtool: false,

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.runtime.common.prod',
    },
  },



  plugins: [
    new BundleAnalyzerPlugin(),
    new CompressionPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        vendors: { // 基本框架
          chunks: 'all',
          test: /[\\/]node_modules[\\/]_*vue/,
          priority: 100,
          name: 'vendors',
        }
      }
    },
  },

  output: {
    chunkFilename: 'js/[name].[contenthash:5].js',
    filename: 'js/[name].[contenthash:5].js',
    path: path.resolve(dirname, 'dist'),
    publicPath: './',
    clean: true,
    assetModuleFilename: 'images/[hash][ext]',
  }
}, webpackCommonConfig)

