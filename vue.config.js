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
          target: 'http://127.0.0.1:4523/mock/381506/',
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