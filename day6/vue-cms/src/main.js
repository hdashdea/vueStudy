// 入口文件
import Vue from 'vue'

// 导入 app 组件
import App from './App.vue'

// 引入mint-ui相关组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button)

// 引入mui
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入自己的路由模块
import router from './router.js'


// 导入 vue-resource 
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'

import moment from 'moment'

//定义全局的过滤器
Vue.filter('newsTimeFormat', (dateStr, pattern="YYYY-MM-DD HH:mm:ss") => {
    return moment(dateStr).format(pattern)
})

var vm = new Vue({
    el: '#app',
    render: c => c(App),
    data: {
        
    },
    router
})