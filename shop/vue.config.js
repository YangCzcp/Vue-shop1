const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  // 关闭eslint语法校验
  devServer:{
    host:'127.0.0.1',
    port:8080,
    // open:true,//项目启动自动打开浏览器
    // proxy:'http://127.0.0.1:3000' //代理
    proxy:{
      //api 代理 本地接口
      '/api':{
        target:'http://127.0.0.1:3000',
        ws:true,//是否开启websockt
        changeOrigin:true, //
        pathReWrite:{'^/api':''}
      },
      //----wangyi 代理 网易云
      '/wangyi':{
        target:'http://1.12.255.95:3000',
        ws:true,//是否开启websockt
        changeOrigin:true, //
        pathReWrite:{'^/wangyi':''}
      }
    }
  }
})
