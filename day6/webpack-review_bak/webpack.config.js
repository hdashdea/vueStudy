var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            //处理.vue文件的loader
            { test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve: {
        alias: {
            // 配置vue被导入时的路径
            'vue$': 'vue/dist/vue.js'
        }
    }
}