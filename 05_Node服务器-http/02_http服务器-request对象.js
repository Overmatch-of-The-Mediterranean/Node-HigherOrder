const http = require('http')


const server = http.createServer((req, res) => { 
    // request所携带的信息
    // 1.method
    console.log(req.method);

    // 2.url参数
    console.log(req.url);

    // 输出req的全部信息
    console.log(req);

    res.end('hellow')
 })


server.listen(3000, () => { 
    console.log('3000端口服务器开启成功');
 })