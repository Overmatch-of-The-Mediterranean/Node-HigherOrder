const express = require('express')

const app = express()

// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/json') {
//         req.on('data', (data) => {
//             const loginString = data
//             const loginInfo = JSON.parse(loginString.toString())
//             req.body = loginInfo
           
//         })
//         req.on('end', () => {
//             next()
//         })
//     } else {
//         next()
//     }
//  })

// 以上代码，相当于下面代码的底层实现

app.use(express.json())


app.post('/login', (req,res,next) => { 
    console.log(req.body);
    res.end('登陆成功')
 })


app.post('/register', (req, res, next) => { 
    console.log(req.body);
    res.end('注册成功')
 })


app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })