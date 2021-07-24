import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const  Home = () => import('../views/home/Home')
const  Category = () => import('../views/category/Category')
const  Shopcart = () => import('../views/shopcart/Shopcart')
const  Profile = () => import('../views/profile/Profile')
//安装插件
// Vue.use(VueRouter)

//创建路由对象
const  routes = [
    {
        // 打开网页的路径重定向为home
        path: '/',
        redirect :'/home'
    },
    // 以下每个数组元素对应各自的页面
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcart',
        component: Shopcart
    },
    {
        path: '/profile',
        component: Profile
    }
]
const router = createRouter({
    // vue3.x中的history模式,vue2.x的是mode: history
    history: createWebHistory(),
    routes
})
//导出router
export default router