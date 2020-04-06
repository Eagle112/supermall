module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    module: {
      rules: [{
        test: /\.less$/,
        loader: 'less-loader' // 将 Less 编译为 CSS
      }]
    }
  }

}
