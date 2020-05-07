const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

//这个配置文件其实就是一个js文件, 通过node中得模块操作, 向外暴露一个配置对象
module.exports = {
    //入口
    entry: path.join(__dirname, './src/main.js'),
    //出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 这是配置 dev-server 命令参数的第二种形式, 但是相对麻烦
    devServer: {
        // webpack-dev-server --open --port 3000 --contentBase src --hot
        //是否打开浏览器
        open: true,
        //端口
        port: 3000,
        //指定托管根目录
        contentBase: 'src',
        // 热更新 (之前版本的可能出现热更新被禁用，但是配置中是启用的情况)
        hot: true
    },
    plugins: [
        // 创建一个在内存中生成htnl页面的插件
        new htmlWebpackPlugin({
            //指定页面路径
            template: path.join(__dirname, './src/index.html'),
            //指定生成的页面的名称
            filename: 'index.html'
        })
    ],
    // 这个节点用于配置所有的第三方模块加载器
    module: {
        rules: [
            // 配置处理 .css 文件的第三方loader 规则 第一个参数为正则， 用来匹配文件类型
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            // 配置处理 less 文件的第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            // 配置处理 scss 文件的第三方loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
}

//当我们在控制台直接输入wenpack 命令执行的时候, webpack做了如下几步
// 1. 首先 webpack 发现我们并没有在命令中指定入口和出口
// 2. webpack 就回去项目中的根目录中, 找一个叫 webpack.config.js 的文件
// 3. 找到这个文件后, webpack会解析执行这个文件, 当解析执行完这个文件后, 就得到了 入口和出口配置
// 4. 进行打包构建

// 使用 webpack-dev-server 实现自动打包功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目本地的开发依赖
// 2. 安装玩这个工具之后, 这个工具的用法和 webpack 的命令完全一样
// 3. 由于我们在项目本地安装的webpack-dev-server 所以我们无法直接把它当做脚本命令在powershell中执行(只有那些全局安装的才行)
// 4. webpack-dev-server 帮我们打包生成的 bundle.js 文件, 并没有存放到实际的物理磁盘上, 而是直接托管到了电脑的内存中, 所以我们在项目中找不到所要的bundle.js
// 5. 我们可以认为, 这个工具把打包好的文件以虚拟的形式托管到了项目的根目录中(就是为了快， 放到内存中)

// 将html文件也放入内存中的插件 安装 npm i html-webpack-plugin -D

// webpack处理第三方文件类型的过程
// 1. 发现不是js文件, 就去配置文件中查找有没有第三方loader规则能匹配
// 2. 如果能匹配到, 就用这种loader进行处理
// 3. 在调用loader的时候, 是根据配置的 use 数组从后向前调用
// 4. 当最后的一个调用完毕, 会把处理的结果交给webpack进行打包合并, 最终输出到bundle.js 中去










