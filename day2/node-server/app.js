const http = require('http')
//能够给帮我们解析url地址
const urlModule = require('url')

const server = http.createServer()

server.on('request', function(req, res) {

    const {pathname: url, query} = urlModule.parse(req.url, true)

    if(url === '/getscript') {
        //拼接一个合法的js脚本, 这里拼接的是一个方法的调用
        //var scriptStr = 'show()'

        var data = {
            name: 'JACK',
            age: 18,
            gender: '女孩子'
        }

        var scriptStr = `${query.callback}(${JSON.stringify(data)})`

        //res发送给客户端, 客户端拿到以后把这个字符串当做script脚本执行
        res.end(scriptStr)
    }else {
        res.end('404')
    }
})

server.listen(3000, function () {
    console.log('server listen at http://127.0.0.1:3000')
})