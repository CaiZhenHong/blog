/**
 * @description 公共配置
 * @date 2021年6月27日
 * @author caizhenhong
 */

const path = require('path');
const dirname = path.resolve(__dirname, '../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {

  entry: path.resolve(dirname, 'src/main.js'),

  resolve: {
    alias: {
      "@": path.resolve(dirname, 'src'),
      "@theme": path.resolve(dirname, 'src/assets/style/theme.scss')
    },
    mainFiles: ["index.js",]
  },

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.s?css$/, use: [{ loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } }, 'css-loader', 'sass-loader'] },
      {
        test: /\.(png|jpg|gif)$/, type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        }
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(dirname, 'public/index.html') }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash:10].css',
    }),
  ],

}