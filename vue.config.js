const path = require('path');

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
          target: 'http://api.czh996.top',
          pathRewrite: {
            '^/api': ''
          },
          changeOrigin: true,
          secure: false,
        }
      }
    }

  }
}