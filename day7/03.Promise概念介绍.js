// 1. Promise 是一个 构造函数, 既然是构造函数, 我们就可以 new

// 2. 在Promise中有两个函数 resolve(成功回调) reject(失败回调)

// 3. 在 Promise 构造函数的原型中有一个 .then 方法, 也就是说, 只要是Promise构造函数创造的对象, 都可以调用 .then 

// 4. 如果 Promise 表示一个异步操作, 每当我们 new 一个promise的实例, 这个实例就表示一个具体的异步操作

// 5. 既然Promise创建的实例是一个异步操作 ,那么这个异步操作只能有两种状态：成功/失败

// 6. 我们可以在new出来的Promise实例上调用 .then 方法【预先】 为这个实例指定成功和失败回调

// 注意这里的 promise 只是一个形式上的异步操作
// 什么叫形式上的异步操作,也就是说，这个promise是一个异步操作但具体干什么的还不知道
//var Promise = new Promise()

// 具体异步操作
// var Promise = new Promise(function() {
//     //这里是具体的异步操作
// })

const fs = require('fs')

//每当new一个promise实例的时候, 就会立即执行其中定义的方法
// var promise = new Promise(function() {
//     fs.readFile('./files/2.txt', 'utf-8', (err, datastr) => {
//         if(err) throw err
//         console.log(datastr)
//     })
// })

// 初衷: 给路径，返回读取到的内容
function getFileByPath(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, 'utf-8', (err, datastr) => {

            if(err) return reject(err)
            resolve(datastr)
        })
    })

}

getFileByPath('./files/2.txt').then(function(datastr) {
    console.log(datastr)
}, function(err) {
    console.log(err.message)
})