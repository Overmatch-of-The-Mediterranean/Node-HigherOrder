const express = require('express')

const app = express()

app.use((req, res, next) => { 
    res.msg = 'aaa'
    next()
    res.end(res.msg)
})

app.use((req, res, next) => { 
    res.msg += 'bbb'
    next()
})

app.use((req, res, next) => { 
    res.msg += 'ccc'
 })


app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })