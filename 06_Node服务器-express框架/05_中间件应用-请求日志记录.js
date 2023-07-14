const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

const app = express()

const writeStream = fs.createWriteStream('./log/accsee.log')

app.use(morgan('combined', { stream: writeStream }))

app.use((req, res, next) => { 
    res.end('请求成功')
    console.log('请求已被记录');
 })



app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })