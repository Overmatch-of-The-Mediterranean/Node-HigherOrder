const fs = require('fs')

// readFile读取的缺点
// 1.无法从指定位置读取，控制读取的个数
// 2.无法读取一段后暂停，然后恢复读取
// 3.文件非常大时，无法多次读取

// 创建流，每个流都是EventEmitter的实例，因为底层源码，有继承EventEmitter的操作
const readStream = fs.createReadStream('./aaa.txt', {
    start: 6, // 从哪个字符开始读取，索引从0开始
    end: 20,   // 读取到那个字符，包括这个字符
    highWaterMark: 3 // 6~20这些数据进行多次读取，每次读取三个，每次读取都会调用回调函数，此参数不传，默认读取64kb
})



// 监听读取到的数据
readStream.on('data', (data) => {
    console.log(data);

    readStream.pause() // 控制暂停
    setTimeout(() => { 
        readStream.resume() // 恢复读取
     },2000)
})

