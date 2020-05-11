// 入口文件
import Vue from 'vue'

// 导入 app 组件
import App from './App.vue'

// 引入mint-ui相关组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';

// Vue.use(Lazyload);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button)

import MintUi from 'mint-ui'
Vue.use(MintUi)

import 'mint-ui/lib/style.css'

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
Vue.http.options.emulateJSON = true

import moment from 'moment'

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
  })

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