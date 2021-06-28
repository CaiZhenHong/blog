const path = require('path');
const CodeDeployment = require('./upload')

const isProduct = process.env.NODE_ENV === 'product' ? true : false

module.exports = {

  configureWebpack: {
    resolve: {
      alias: {
        '@components': '@/components',
        '@app': '@/assets/scss/app.scss',
        '@theme': '@/assets/scss/theme.scss',
      }
    },

    devServer: {
      proxy: {
        '/api': {
          target: 'https://api.czh996.top',
          pathRewrite: {
            '^/api': ''
          },
          changeOrigin: true,
          secure: false,
        }
      }
    },

    plugins: [new CodeDeployment()],
  },

  productionSourceMap: false,

  publicPath: isProduct ? 'https://public-1304087712.cos.ap-guangzhou.myqcloud.com/' : '',

}