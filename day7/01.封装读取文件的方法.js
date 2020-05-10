// 需求: 我给你一个文件路径，要求能读取并输出文件内容

const fs = require('fs')
const path = require('path')

// fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', (err, dataStr) => {
//     if(err) {
//         throw err
//     }else {
//         console.log(dataStr)
//     }
// })

/**
 * 给定文件路径, 返回读取到的内容
 * @param {文件路径} fpath 
 */
// 我们可以规定一下, callback中有两个参数, 第一个参数是失败了的结果, 第二个是成功的
// 同时我们规定如果成功后饭蝴蝶结果, 应该位于 callback 的第二个位置, 此时, 第一个位置由于没有出错, 所以放一个 null 如果失败了, 第二个个位置放 null
function getFileByPath(fpath, callBack) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        // 如果报错进入if分支后, if后面的代码就没必要执行了
        if(err) return callBack(err)
        
        callBack(null, dataStr)
        
    })
}

getFileByPath(path.join(__dirname, './files/1.txt'), (err, dataStr) => {
    console.log(err, dataStr)
})