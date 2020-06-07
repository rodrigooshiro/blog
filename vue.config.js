module.exports = {
  publicPath: '/blog/',
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}

if (process.env.NODE_ENV === 'development') {
  module.exports.devServer = {
    port: 8000
  }
}

