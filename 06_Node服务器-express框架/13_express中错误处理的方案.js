const express = require('express')

const app = express()

// app.use((req, res, next) => { 
//     // 错误处理方案一
//     res.status(300)
//     res.end('111')

//     // 错误处理方案二
//     res.json({
//         code: -1001,
//         messgae:'没有权限'
//     })
// })
 

app.get('/user', (req, res, next) => { 
    // next(-1001)
    next(-1002)
 })

// 编写一个专门处理错误的中间件
app.use((codeErr, req, res, next) => {
    const code = codeErr
    let messgae = '未知的错误'
    switch (code) {
        case -1001:
            messgae = '没有权限'
            break
        case -1002:
            messgae = '信息错误'
            break
    }
    res.json(messgae)
 })


app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })