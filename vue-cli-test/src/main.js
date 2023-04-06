import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false  // 关闭生产环境提示

new Vue({
  // 在vue原型上添加了属性：$bus
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
