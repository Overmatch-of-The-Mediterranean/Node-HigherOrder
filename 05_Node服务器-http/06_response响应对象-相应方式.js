const http = require('http')


const server = http.createServer((req, res) => { 
    
    // 返回响应数据方式一
    // write直接写出数据，没有关闭流，postman中就会一直在响应中，node限制我们使用res.close()进行关闭，我们需要使用end关闭
    // res.write('我是响应数据write')

    // res.end('响应结束')

    // 方式二
    // end写出最后的数据，写出后会关闭流
    res.end('我是响应数据end')
 })


server.listen(3000, () => { 
    console.log('3000端口服务器开启成功');
 })