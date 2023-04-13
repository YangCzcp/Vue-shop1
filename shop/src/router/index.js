import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/view/User/Login'
import Success from '@/components/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/success',
    name: 'success',
    component: Success,
    meta: { requiresAuth: true } //身份验证
  }
]

const router = new VueRouter({
  mode: 'history', //路由模式
  base: process.env.BASE_URL, 
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router //路由导出