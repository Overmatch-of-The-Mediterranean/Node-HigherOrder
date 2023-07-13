const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => { 
    // 解析url参数
    const urlString = req.url
    const urlInfo = url.parse(urlString)

    // 解析query参数
    const queryString = urlInfo.query
    const queryInfo = new URLSearchParams(queryString).get('offsize')
    console.log(queryInfo);
    res.end('hello world111')
 })


server.listen(3000, () => { 
    console.log('3000端口服务器开启成功');
 })