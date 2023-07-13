const http = require('http')

// 也可创建多个服务器

const server = http.createServer((req, res) => { 
    res.end('hello world111')
 })


server.listen(3000, () => { 
    console.log('3000端口服务器开启成功');
 })