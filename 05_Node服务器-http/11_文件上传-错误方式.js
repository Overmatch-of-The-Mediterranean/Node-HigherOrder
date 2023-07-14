const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => { 
    const writeStream = fs.createWriteStream('./foo.png', {
        flags:'a+'
    })

    // req.pipe(writeStream) 更简洁的写入方式

    req.on('data', (data) => { 
        writeStream.write(data)
        console.log(data);
     })
    req.on('end', () => { 
        res.end('文件上传成功')
    })
    
 })


server.listen(3000, () => { 
    console.log('3000端口服务器开启成功');
 })