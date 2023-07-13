const fs = require('fs')

// 文件读写操作也有三种对应的方式
// 使用open打开文件，默认不会自动关闭文件，需要使用close手动关闭
fs.open('./bbb.txt', (err, fd) => { 
    console.log(fd);

    // 使用文件描述符来操作文件
    // fs.readFile(fd, {
    //     encoding:'utf8'
    // }, (err, data) => { 
    //     console.log('文件读取成功',data);
    // })
    
    
    // 获取文件的信息
    fs.fstat(fd, (err, state) => { 
        console.log(state);
     })
 })