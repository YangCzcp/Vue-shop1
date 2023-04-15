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

//异常捕获的方式来解决 Vue Router 中的错误。 不推荐
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}


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
