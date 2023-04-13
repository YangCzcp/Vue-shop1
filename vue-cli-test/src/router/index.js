import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Users/Login'
import GoodsList from '@/views/Goods/List'
import Category from '@/views/Goods/Category'
import Release from '@/views/Goods/Release'
import OrderList from '@/views/Order/List'
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
        redirect:'/goods/list',
        meta:{
            requiresAuth:true
        },
        children:[
            {
                path:'category',
                component:Category
            },
            {
                path:'release',
                component:Release
            },
            {
                path:'list',
                component:GoodsList
            }

        ]
    },
    {
        path:'/order',
        component:Layout,
        meta:{
            requiresAuth:true
        },
        redirect:'/order/list',
        children:[
            {
                path:'list',
                component:OrderList
            }
        ]
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
