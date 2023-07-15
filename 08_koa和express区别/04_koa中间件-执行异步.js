const Koa = require('koa')
const axios = require('axios')

const app = new Koa()


 
app.use(async(ctx, next) => {
    ctx.msg = 'aaa'
    await next()
    ctx.body = ctx.msg
 })

app.use(async(ctx, next) => {
    ctx.msg += 'bbb'
    await next()
 })

app.use(async(ctx, next) => { 
    const result = await axios.get('http://123.207.32.32:8000/home/multidata')
    ctx.msg += 'ccc' + result.data.data.banner.list[0].title
 })


app.listen(8000, () => { 
    console.log('koa服务器启动成功');
    
 })