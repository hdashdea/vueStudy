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
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            // 处理图片路径的loader
            // limit 当给定的值等于或大于图片的的大小才进行Base64转码
            { test: /\.jpg|\.gif|\.png|\.bpm$/, use: 'url-loader?limit=7632&name=[name]-[hash:8].[ext]'},
            // 处理字体
            { test: /\.(.ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            // 排除模块中的js, 人家早就转换好了, 并且打包时间慢, 打包完也没法用
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // 处理.vue
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