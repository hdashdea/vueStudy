// 入口文件
import Vue from 'vue'

// 导入 app 组件
import App from './App.vue'

// 引入mint-ui相关组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

// 引入mui
import '../lib/mui/css/mui.min.css'


var vm = new Vue({
    el: '#app',
    render: c => c(App),
    data: {
        
    }
})