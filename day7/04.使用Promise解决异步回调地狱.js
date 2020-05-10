const fs = require('fs')

function getFileByPath(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, 'utf-8', (err, datastr) => {

            if(err) return reject(err)
            resolve(datastr)
        })
    })

}

// 通过 .then 指定回调函数的时候, 成功的回调函数必须传, 失败的可忽略
// getFileByPath('./files/1.txt').then(function(data) {
//     console.log(data)
//     getFileByPath('./files/2.txt').then(function(data) {
//         console.log(data)
//         getFileByPath('./files/3.txt').then(function(data) {
//             console.log(data)
//         })
//     })
// })

// 指定失败回调可预防因为方法出错导致整个调用链提前结束
getFileByPath('./files/11.txt')
.then(function(data) {
    console.log(data)

    return getFileByPath('./files/2.txt')
}, function(err) {
    console.log(err)
    return getFileByPath('./files/21.txt')
}).then(function(data) {
    console.log(data)

    return getFileByPath('./files/3.txt')
}).then(function(data) {
    console.log(data)
}).catch(function(err) {
    console.log(err)
}) 

console.log('OKOKOK')