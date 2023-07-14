const express = require('express')
const userRouter = require('./router/userRouter')

const app = express()



app.use('/user', userRouter)




app.listen(8000, () => { 
    console.log('8000端口监听成功');
})