const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => { 
    // koa讲request和response都封装在了ctx中，且一般request和response上有的东西，ctx上也有
    // request和req的区别：前者是koa封装的，后者是node封装的
    // response和res的区别，前者是koa封装的，后者是node封装的
    console.log(111);
    ctx.body = '111'
 })

app.listen(8000, () => { 
    console.log('koa服务器启动成功');
    
 })