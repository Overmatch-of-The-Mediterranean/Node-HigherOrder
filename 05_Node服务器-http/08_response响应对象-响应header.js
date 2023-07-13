const http = require('http')


const server = http.createServer((req, res) => { 
    // 设置响应头header：设置响应数据的格式和编码方式
    // 方式一
    // res.setHeader('Content-Type', 'application/json;charset=utf8;')

    // 方式二：
    res.writeHead(201, {
        'Content-Type':'application/json;charset=utf8;'
    })
    res.end('hello world111')
 })


server.listen(3000, () => { 
    console.log('3000端口服务器开启成功');
 })