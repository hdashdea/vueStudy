// 入口文件
import Vue from 'vue'

// 导入 app 组件
import App from './App.vue'

// 引入mint-ui相关组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

// 引入mui
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入自己的路由模块
import router from './router.js'

// 导入轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入 vue-resource 
import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm = new Vue({
    el: '#app',
    render: c => c(App),
    data: {
        
    },
    router
})