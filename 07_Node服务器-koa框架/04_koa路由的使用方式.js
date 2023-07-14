const Koa = require('koa')
const userRouter = require('./router/userRouter')

const app = new Koa()



app.use(userRouter.routes())
app.use(userRouter.allowedMethods())



app.listen(8000, () => { 
    console.log('koa服务器启动成功1');
    
 })