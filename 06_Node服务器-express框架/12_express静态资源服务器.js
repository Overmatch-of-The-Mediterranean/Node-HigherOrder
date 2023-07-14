const express = require('express')

const app = express()

// express也可以像nginx和apache一样成为静态服务器，提供静态服务
app.use(express.static('./uploads'))


app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })