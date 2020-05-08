import Vue from 'vue'

// 1. 导入vuerouter
import VueRouter from 'vue-router'
// 2. 手动安装
Vue.use(VueRouter)




// 3. 创建路有对象


import router from './router.js'

//导入 app 组件
import app from './app.vue'

var vm = new Vue({
    el: '#app',
    // components: {
    //     app
    // },
    render: c => c(app),
    // 4. 挂载路由对象
    router
})