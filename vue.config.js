
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
  }
}