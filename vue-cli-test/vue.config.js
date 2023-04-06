const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  // 关闭eslint语法校验
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    open: true,//项目启动自动打开浏览器
    // Proxy:'http://127.0.0.1:3000' //代理
    proxy: {
      //---api代理 本地接口
      // '/api':{
      //   target:'http://127.0.0.1:3000', //接口地址
      //   ws:true, //是否开启websockt
      //   changeOrigin:true,
      //   PathRewrite:{'^/api':''}
      // },
      //---api代理 代理网易云
      '/api': {
        target: 'http://1.12.255.95:3000', //接口地址
        ws: true, //是否开启websockt
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      },
    }
  }
})
