// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "." : "/",
  // 开发服务配置
  devServer: {
    open: false,
    port: 8080
  },
  css: {
    // 样式相关配置
    extract: false, // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    requireModuleExtension: true, // 去掉文件名中的 .module
    sourceMap: false,
    loaderOptions: {
      stylus: {
        prependData: `@import "~@/assets/css/mixins.styl";`
      }
    }
  },

  // 将构建好的文件输出到位置
  outputDir: "dist",
  // 是否为生产环境构建生成 source map？
  productionSourceMap: process.env.NODE_ENV !== "production"
};
