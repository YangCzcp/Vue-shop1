import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuex from 'vuex'
import '@/tools/request'
import store from '@/store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
