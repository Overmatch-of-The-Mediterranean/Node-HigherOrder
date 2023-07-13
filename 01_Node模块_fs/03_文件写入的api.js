const fs = require('fs')


// 文件的写入操作也有三种方式

fs.writeFile('./ccc.txt', 'hello word1111', {
    // encoding 默认uft-8
    flag:'a' // 默认是w，覆盖写
}, (err) => { 
    if (err) { 
        console.log(err);
        return
    }
    console.log('文件写入成功');
})