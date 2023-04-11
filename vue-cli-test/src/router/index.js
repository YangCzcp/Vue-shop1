import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Users/Login'
import GoodsList from '@/views/Goods/Index'
import Layout from '@/components/Layout'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        component:Login,
        meta:{
            requiresAuth:false
        }
    },
    {
        path:'/goods',
        component:Layout,
        meta:{
            requiresAuth:true
        }
    }
]
// 路由守卫---导航守卫



const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if(to.matched.some(res=>res.meta.requiresAuth)){
        // 需要登录
        if(!localStorage.getItem('token')){
            next('/')
        }else{
            next()
        }
    }else if(localStorage.getItem('token') && to.path=='/'){
        next(from.path)
    }else{
        next()
    }
})

export default router
