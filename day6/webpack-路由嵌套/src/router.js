// 1. 导入vuerouter
import VueRouter from 'vue-router'


import account from './main/Account.vue'
import goodList from './main/GoodList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: 'account'},
        { 
            path: '/account', 
            component: account,
            children: [
                { path: 'login', component: login},
                { path: 'register', component: register}
            ]
        },
        { path: '/goodList', component: goodList}
    ]
})

//把路由对象暴露出去
export default router