// 项目的js入口文件
console.log('ok')

import '../css/index.css'

import '../css/index.scss'

import 'bootstrap/dist/css/bootstrap.css'

// ES 6中的新语法
class Person {
    // 定义静态属性
    // 静态属性  实例属性
    static info = { name: 'rs', age: 20}
}

var p1 = new Person()

console.log(Person.info)

//在webpack中默认只能处理一部分ES6语法, 更高级的只能借助第三方loader, 让第三方loader将高级语法转换为低级语法

// 通过 Babel 可以转换
// 通过以下命令安装Babel相关包
// 第一套: cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// 第二套: cnpm i babel-preset-env babel-preset-stage-0 -D
// 接下来去config.js中配置
// 创建 .babelrc 的文件当做配置文件, 注意该文件为josn格式,如下, 可以把preset翻译为语法
// {
//     "preset": ["env", "stage-0"],
//     "plugins": ["transform-runtime"]
// }


//对107P报错的解决方案：
// 通过Babel，可以帮我们将高级的语法转换为低级的语法
// 在终端中 npm install -D babel-loader @babel/core @babel/preset-env webpack
// 还有 npm i @babel/plugin-proposal-class-properties -D
// 然后在配置文档中的loader节点中加入
// {
// test: /\.m?js$/,
// exclude: /(node_modules|bower_components)/,
// use: {
// loader: 'babel-loader'
// }
// }
//在根目录创建一个.babelrc文档，里面的内容为
// {
// "presets": ["@babel/preset-env"],
// "plugins": ["@babel/plugin-proposal-class-properties"]
// }