import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/view/User/Login'
import Success from '@/components/Success.vue'
import ProductList from '@/view/Product/ProductList'
import ProductAdd from '@/view/Product/ProductAdd'
import OrderList from  '@/view/Order/OrderList'
import AnalysisList from '@/view/Analysis/AnalysisList'
import UserList from '@/view/User/UserList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login //登录页
  },
  {
    path: '/success',
    name: 'success',
    component: Success, //商城页面
    children:[
      {
        path:'/ProductList',
        name:'ProductList',
        component:ProductList
      },
      {
        path:'/ProductAdd',
        name:'ProductAdd',
        component:ProductAdd
      },
      {
        path:'/OrderList',
        name:'OrderList',
        component:OrderList
      },
      {
        path:'/AnalysisList',
        name:'AnalysisList',
        component:AnalysisList
      },
      {
        path:'/UserList',
        name:'UserList',
        component:UserList
      }
    ],
    meta: { requiresAuth: true } //身份验证
  },
]

const router = new VueRouter({
  mode: 'history', //路由模式
  base: process.env.BASE_URL, 
  routes
})

let lastPath = null
router.beforeEach((to, from, next) => {
  // 如果当前点击的路由和上一个路由相同，则阻止路由的转发
  if (to.path === lastPath) {
    return next(false);
  }

  lastPath = to.path;

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  //路由守卫
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }

  // 使用 Promise 对象在异步请求完成后再进行路由跳转
  // 解决Vue重复点击相同路由,报 Uncaught (in promise)
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  wait(100).then(() => {
    return;
  });  
});

export default router //路由导出