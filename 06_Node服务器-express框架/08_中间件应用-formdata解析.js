const express = require('express')
const multer = require('multer')

const formData = multer()

const app = express()

app.post('/login', formData.any(), (req,res,next) => { 
    console.log(req.body)

    res.end('登录成功')
 })

app.listen(8000, () => { 
    console.log('8000端口监听成功');
})