const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => { 
    console.log(111);
    ctx.body = '111'
 })

app.listen(8000, () => { 
    console.log('koa服务器启动成功');
    
 })