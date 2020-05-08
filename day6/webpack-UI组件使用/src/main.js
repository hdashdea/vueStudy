import Vue from 'vue'

// 1. 导入vuerouter
import VueRouter from 'vue-router'
// 2. 手动安装
Vue.use(VueRouter)

// 3. 创建路有对象

// 导入所有的mint-ui组件
// import MintUI from 'mint-ui'
// // 这里省略了 nide_modules 这层目录
// import 'mint-ui/lib/style.css'
// // 将mint-ui安装到vue中
// // 将组件注册为全局组件
// Vue.use(MintUI)


// 按需导入我们的 mint-ui 组件
import {Button} from 'mint-ui'
// 注册按钮组件
Vue.component(Button.name, Button);


import '../css/app.css'


// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
//倒入mui的样式表
import '../lib/mui/css/mui.css'


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