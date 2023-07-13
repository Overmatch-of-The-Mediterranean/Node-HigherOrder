const http = require('http')


const server = http.createServer((req, res) => { 

    req.setEncoding('utf8')

    let isLogin = false
    // 请求体中的数据要通过.on监听的方式来拿到
    req.on('data', (data) => { 
        const dataString = data
        const loginInfo = JSON.parse(dataString)
        
        if (loginInfo.username === 'hhh' && loginInfo.password === 123456) {
            console.log(loginInfo.username,loginInfo.password);
            isLogin = true
        } else { 
            isLogin = false
        }
       
    })

    req.on('end', () => { 
        if (isLogin) {
            res.end('登陆成功')
        } else { 
            res.end('登录失败，请检查用户信息')
        }
     })

    
    
 })


server.listen(3000, () => { 
    console.log('3000端口服务器开启成功');
 })