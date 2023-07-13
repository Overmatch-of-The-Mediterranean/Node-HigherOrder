const http = require('http')



const server = http.createServer((req, res) => { 
    const url = req.url
    const method = req.method

    if (url === '/login') {
        if (method === 'POST') {
            res.end('登录成功')
        } else { 
            res.end('请求方法错误')
        }
        
    }
    
    if (url === '/product') { 
        if (method === 'GET') {
            res.end('成功获取商品列表信息')
        } else { 
            res.end('获取信息失败')
        }
     }
 })


server.listen(3000, () => { 
    console.log('3000端口服务器开启成功');
 })