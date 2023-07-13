const fs = require('fs')

// 文件读取三种方式：同步，异步回调函数，异步Promise
// 1.同步读取
// const data = fs.readFileSync('./aaa.txt', {
//     encoding:'utf8' // 指定二进制的编码与解码方式
// })

// console.log(data);

// 2.异步回调函数, err和data只能有一个有值
// fs.readFile('./aaa.txt', {encoding:'utf-8'}, (err, data) => {
//     if (err) {
//         return
//     }
//     console.log('文件读取成功',data);
//  })


// 3.异步Promise读取
fs.promises.readFile('./aaa.txt', {encoding:'utf-8'}).then(data => { 
    console.log('文件读取成功',data);
}).catch(err => { 
    console.log(err);
})