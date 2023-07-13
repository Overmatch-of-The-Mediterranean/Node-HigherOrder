const fs = require('fs')


const readStream = fs.createReadStream('./aaa.txt', {
    start: 6,
    end: 20,
    highWaterMark:3
})


// 以下的这些事件监听，readStream会自动调用
readStream.on('data', (data) => { 
    console.log(data.toString());
 })


//  其他事件
readStream.on('open', (fd) => { 
    console.log('打开文件',fd);
})
 
readStream.on('end', (err) => {
    console.log('读取结束');
})
 
readStream.on('close', (err) => { 
    console.log('文件关闭',err);
 })