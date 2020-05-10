// 需求: 我给你一个文件路径，要求能读取并输出文件内容

const fs = require('fs')
const path = require('path')

function getFileByPath(fpath, succCb, errCb) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if(err) return errCb(err)
        
        succCb(dataStr)
        
    })
}

// getFileByPath(path.join(__dirname, './files/1.txt'),function(dataStr) {
//     console.log(dataStr)
// }, function(err) {
//     console.log(err)
// })

// 需求：先读取文件一, 再度取文件二..三
// 回调地狱
// 使用ES6 中的 promise 来解决回调地狱的问题
getFileByPath(path.join(__dirname, './files/1.txt'),  function(dataStr) {
    console.log(dataStr)
    getFileByPath(path.join(__dirname, './files/2.txt'),  function(dataStr) {
        console.log(dataStr)
        getFileByPath(path.join(__dirname, './files/3.txt'),  function(dataStr) {
            console.log(dataStr)
        })
    })
})


