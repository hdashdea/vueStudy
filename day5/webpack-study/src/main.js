// 项目的js入口文件

// 1. 导入jQuery
//ES6中导入模块的方式
//ES6浏览器可能不支持, 可能会报错
import $ from 'jquery'

// 使用import导入css
import './css/index.css'
// webpack默认只能打包处理js类型的文件
// 如果要处理css，我们要安装第三方loader
// 1. 如果想要处理css文件要安装 npm i style-loader css-loader -D
// 2. 打开webpack.config.js这个配置文件 在里面新增一个配置节点, 叫做module, 它是一个对象, 这个对象有一个rules属性, 这个属性是一个数组, 这个数组中存放了所有第三方文件和处理规则

import './css/index.less'
// 安装能处理less文件的loader npm i less-loader -D

import './css/index.scss'
// 安装能处理 scss 文件的loader npm i sass-loader -D


$(function() {
    $('li:odd').css('backgroundColor', 'yellow')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634'
    })
})

//webpack可以干什么? 
// 1. webpack可以处理js之间的依赖关系
// 2. webpack能够处理js的兼容问题, 把高级的浏览器不支持的语法转换为低级的语法