const Koa = require('koa')


const app = new Koa()


 
app.use((ctx, next) => {
    ctx.msg = 'aaa'
    next()
    ctx.body = ctx.msg
 })

app.use((ctx, next) => {
    ctx.msg += 'bbb'
    next()
 })

app.use((ctx, next) => { 
    ctx.msg += 'ccc'
    
 })


app.listen(8000, () => { 
    console.log('koa服务器启动成功');
    
 })