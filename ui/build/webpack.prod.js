/**
 * @description 生产环境配置
 * @date 2021年6月27日
 * @author caizhenhong
 */

const path = require('path');
const webpackCommonConfig = require('./webpack.common.js')
const dirname = path.resolve(__dirname, '../');
const { merge } = require('webpack-merge');

module.exports = merge({
  mode: 'production',

  devtool: 'source-map',

  output: {
    filename: 'js/[contenthash:10].js',
    path: path.resolve(dirname, 'dist'),
    publicPath: './',
    clean: true,
    assetModuleFilename: 'images/[hash][ext]'
  }
}, webpackCommonConfig)