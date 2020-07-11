module.exports = {
  publicPath: '',
  chainWebpack: config => {
    config.module
      // Markdown loader
      .rule('md')
      .test(/\.md$/)

      .use('html-loader')
      .loader('html-loader')
      .end()

      .use('markdown-loader')
      .loader('markdown-loader')
  }
};
