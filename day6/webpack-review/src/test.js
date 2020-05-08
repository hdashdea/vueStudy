//这是node中向外暴露成员的形式
// module.exports = {}

// 在 ES6 中, 也通过规范的形式, 规定了 ES6 中如何 导入 和 导出 模块
// ES6中导入模块, 使用 import 模块名称 from '模块标识符'  import '标识路径'

// 在 ES6 中 使用 export default 和 export 向外暴露成员

var info = {
    name: 'zs',
    age: 18
}

export default info

// export default {
//     address: '北京'
// }

// 在 node 中require('模块名称') 导入模块
// module.ecports 和 exports 来暴露成员
// 在一个模块中, export default 只允许暴露一次

export var title = '小星星'
export var xxx = 'sss'

//在一个模块中 , 可以同时使用 export default 和 export 向外暴露成员
// 在export 暴露中, 导入时使用 {xxx} 来接受, 这种需要叫按需导出, 并且导入的变量名和暴露的变量名一致(可以使用 as 指定别名)