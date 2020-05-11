### 2020.05.10 今天遇到的问题:
 - 跟随老师代码为九宫格加图片, 页面报错
 ``` html
<img src="[object Module]">
 ```
 并且在页面控制台打印了一句异常信息:GET http://localhost:端口/[object%20Module] 404 (Not Found)
 + ###### 原因
 我是用url-loader打包的：
``` js
{test:/\.jpg|png|gif|bmp|jpeg$/,use:"url-loader?limit=10240&name=[name].[ext]"}
```
在url-loader内部封装了file-loader 而file-loader在新版本中esModule属性默认为true 即默认使用ES模块语法 导致了造成了引用图片文件的方式和以前的版本不一样 引入路径改变了 自然找不到图片
 + ###### 解决方法
在webpack的配置文件webpack.config.js中 修改esModule: false 关闭ES模块语法即可：
``` js
{test:/\.jpg|png|gif|bmp|jpeg$/,use:"url-loader?limit=10240&name=[name].[ext]&esModule=false"}
```
或是：
``` js
{
test: /\.jpg|png|gif|bmp|jpeg$/,
use: [
	{
		loader: 'url-loader',
		options: {
			limit:10240,
			name:"[name].[ext]",
			esModule: false
		}
	}
]}
```

