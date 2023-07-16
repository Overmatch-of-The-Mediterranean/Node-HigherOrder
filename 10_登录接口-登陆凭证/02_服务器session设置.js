const Koa = require('koa')
const KoaRouter = require('@koa/router')
const koaSession = require('koa-session')


const app = new Koa()
const userRouter = new KoaRouter({ prefix: '/user' })



// 需要当成中间件使用
const session = koaSession({
    key: 'slogan',
    // signed:true,
    maxAge: 60 * 1000 // session是毫秒
},app)



app.use(session)

// 加盐操作，加密算法根据此数据生成加密签名sessionsig
app.keys = ['aaa','bbb','ccc']

userRouter.get('/login', (ctx, next) => { 
    ctx.session.slogan = 'ikun2'
    
    ctx.body = '登陆成功~'
})
 

userRouter.get('/list', (ctx, next) => {
    const value = ctx.session.slogan

    if (value === 'ikun2') {
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
