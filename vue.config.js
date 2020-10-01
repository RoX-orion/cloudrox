//svg loader setting
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const port = 8080

module.exports = {
  devServer: {
    port: port,
    open: false,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     // target: 'http://123.56.236.23:8888',
    //     target: 'http://localhost:8888',
    //     changOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // }
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}