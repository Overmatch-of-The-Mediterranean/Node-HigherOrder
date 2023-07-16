const Koa = require('koa')
const KoaRouter = require('@koa/router')

const userRouter = new KoaRouter({ prefix: '/user' })

const app = new Koa()


userRouter.get('/login', (ctx, next) => { 
    ctx.cookies.set('slogan', 'ikun', {
        maxAge:60 * 1000 // cookie是毫秒
    })
    
    ctx.body = '登陆成功~'
})
 

userRouter.get('/list', (ctx, next) => {
    const value = ctx.cookies.get('slogan')

    if (value === 'ikun') {
        ctx.body = '获取用户列表成功'
    } else { 
        ctx.body = '请先登录~'
    }
    
 })


app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => { 
    console.log('koa服务器启动成功');
 })
