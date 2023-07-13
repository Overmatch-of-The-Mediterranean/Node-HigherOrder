const fs = require('fs')

// 第一种方式
// fs.readFile('./copy.txt', (err, data) => {
//     fs.writeFile('./copy_01.txt', data, {
//         flag:'a+'
//     }, () => { console.log('copy完成'); })
//  })


// 第二种方式
// const readStream = fs.createReadStream('./copy.txt')
// const writeStream = fs.createWriteStream('./copy_02.txt', {
//     flags:'a+'
// })

// readStream.on('data', (data) => {
//     writeStream.write(data, () => { console.log('write完成'); })
// })
 
// 第三种方式
const readStream = fs.createReadStream('./copy.txt')
const writeStream = fs.createWriteStream('./copy_03.txt', {
    flags:'a+'
})
readStream.pipe(writeStream)