const express = require('express')

const app = express()

app.get('/login/:id', (req, res, next) => { 
    // express默认解析query和params

    //query
    console.log(req.query);

    // params,动态路由参数
    console.log(req.params);
    res.end('解析成功')
 })


app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })