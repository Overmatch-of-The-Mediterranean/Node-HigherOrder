const fs = require('fs')

fs.rename('./text', 'test', (err) => {
    if (err) { 
        console.log(err);
        return
    }
    console.log('重命名成功');
 })