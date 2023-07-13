
const fs = require('fs')

// 没有设置编码方式时，读取的时buffer
fs.readFile('./aaa.txt', (err, data) => { 
    console.log(data);
    console.log(data.toString()); // 默认使用utf8编码方式
})
 

// 也可以读取图片，并对读取的图片的buffer进行操作，来实现图片的裁剪，模糊等处理

fs.readFile('./river.jpg', (err, data) => { 
    console.log(data);
    console.log(data.toString); // [Function: toString]
})
 
// 注意：编码和解码用的方式要相同，否则可能会出现乱码