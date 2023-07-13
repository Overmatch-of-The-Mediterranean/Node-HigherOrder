const fs = require('fs')

const writeStream = fs.createWriteStream('./bbb.txt', {
    // mac 电脑上可以正常使用a和start的搭配
    // flags: 'a', // 默认是w

    // windows电脑上不兼容，需要使用r+和start配合。但是这相当于在原来位置上替换相应的位置
    flags:'r+',
    start: 5
})

writeStream.write('hhhh', () => { 
    console.log('write完成');
 })


writeStream.on('open', (fd) => { 
    console.log('文件打开',fd);
 })

// 只有close的监听，writeStream不会自动调用，需要手动关闭
writeStream.on('close', () => { 
    console.log('文件关闭');
})

// writeStream.close()

writeStream.on('finish', () => { // 相当于可读流中的'end'
    console.log('写入完成');
 })


// end做了两步操作
// 1.将数据写入文件
// 2.关闭文件，相当于自动调用close()
// writeStream.end('11111')