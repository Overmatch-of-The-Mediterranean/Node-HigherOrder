const fs = require('fs')

fs.mkdir('./test', (err) => { 
    if (err) {
        console.log(err);
    } else { 
        console.log('创建成功');
    }
    
 })