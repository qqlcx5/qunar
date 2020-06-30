// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "." : "/",
  // 开发服务配置
  devServer: {
    open: false,
    port: 8070
  },
  css: {
    // 样式相关配置
    extract: false,
    requireModuleExtension: true,
    sourceMap: false,
    loaderOptions: {
      stylus: {
        import: ["~@/assets/css/mixins.styl"]
      }
    }
  },

  // 将构建好的文件输出到位置
  outputDir: "dist",
  // 是否为生产环境构建生成 source map？
  productionSourceMap: process.env.NODE_ENV !== "production"
};
