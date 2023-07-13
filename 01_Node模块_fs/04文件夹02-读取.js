const fs = require('fs')

// fs.readdir('./test', {withFileTypes:true}, (err, files) => { 
//     console.log(files);
// })
 

// 递归读取文件夹
function readDirectory (path) { 
    fs.readdir(path, { withFileTypes: true }, (err, files) => { 
        files.map(item => { 
            if (item.isDirectory()) {
                readDirectory(`${path}/${item.name}`)
            } else { 
                console.log('读取到文件：',item.name);
            }
         })
     })
}
 
readDirectory('./test')