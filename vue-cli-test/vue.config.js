const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  // 关闭eslint语法校验
  devServer:{
    proxy:'http://139.9.195.224:3010'
  }
})
