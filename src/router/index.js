import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('../views/home/Home')   // Home是Home.vue组件名
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')


// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routers = [   // 路由对应的映射关系
    {
        path: '',   // 默认打开项目的页面是home
        redirect: '/home'   // 重定向
    },
    {
        path: '/home',
        component: Home    // 组件
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]
const router = new VueRouter({
    routers,
    mode: 'history',  // 去掉URL中的#符号
})

// 3.导出router
export default router