// 如何在 webpack 构建的项目中使用vue进行开发
// 复习:
// 在普通网页中如何使用vue
// 1. 使用script标签引入vue的包
// 2. 先创建一个容器： id 为 app 的div
// 3. 创建一个vue实例



// 在webpack中尝试使用vue

// 注意，在webpack中使用 import Vue from 'vue' 导入的构造函数功能不完整, 只提供了 runtime-only 的方式, 没有提供在页面中的使用方式
//import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'
// 查找规则：
// 1. 找项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中根据包名找对应的vue文件夹
// 3. 在vue文件夹中找一个叫做package.json的包配置文件
// 4. 在 package.json 中找 一个main 属性【main属性指定了这个包在被加载时候的入口文件】

// var login = {
//     template: '<h1>这是login组件, 是使用网页形式创建出来的组件</h1>'
// }

//导入login.vue组件
import login from './login.vue'
// 默认webpack无法打包 .vue 文件, 需要安装相关的loader cnpm i -D vue-loader vue-template-compiler
//在配置文件中, 新增loader配置项 { test: /\.vue$/, use: 'vue-loader'}

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // components: {
    //     login
    // }
    render: function(createElements) {
        return createElements(login)
    }
})