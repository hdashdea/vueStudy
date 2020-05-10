// 1. 导入vuerouter
import VueRouter from 'vue-router'

import cart from './components/tabbar/cart.vue'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'




var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: home},
        { path: '/member', component: member},
        { path: '/cart', component: cart},
        { path: '/search', component: search},
        { path: '/home/newsList', component: newsList},
        { path: '/home/newsInfo/:id', component: newsInfo}
    ],
    linkActiveClass: 'mui-active'
})

//把路由对象暴露出去
export default router