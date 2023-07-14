const express = require('express')

const app = express()


// 解析传递过来的urlencoded的时候，node默认使用内置querystring模块来进行解析
// {extended:true}，不在使用内置queryString模块，而是使用第三方的qs库
app.use(express.urlencoded({extended:true})) // 解析 x-www-form-urlencoded格式数据

app.post('/login', (req, res, next) => { 
    console.log(req.body);
    res.end('登录成功111')
 })

app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })