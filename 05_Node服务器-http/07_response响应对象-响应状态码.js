const http = require('http')


const server = http.createServer((req, res) => {

    // 设置状态码 方式一
    res.statusCode = 205

    // 设置状态码 方式二
    // res.writeHead(304)

    res.end('hello world111')
 })


server.listen(3000, () => { 
    console.log('3000端口服务器开启成功');
 })