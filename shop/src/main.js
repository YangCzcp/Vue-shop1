// 导入 Vue.js、Vue-router、Element-UI、Axios 和 Vuex
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import './styles/index.less'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false  // 关闭生产环境提示

Vue.use(ElementUI);
Vue.use(Vuex)
new Vue({
  // 在vue原型上添加了属性：$bus
  // beforeCreate(){
  //   Vue.prototype.$bus = this
  // },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
