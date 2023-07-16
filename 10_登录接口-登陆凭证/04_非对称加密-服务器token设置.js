const Koa = require('koa')
const KoaRouter = require('@koa/router')
const fs = require('fs')
const jwt = require('jsonwebtoken')

const userRouter = new KoaRouter({ prefix: '/user' })

const app = new Koa()

const secretKey = 'aaabbbccc'
const privateKey = fs.readFileSync('./keys/private.key')
const publicKey = fs.readFileSync('./keys/public.key')

userRouter.get('/login', (ctx, next) => { 

    const payload = {
        name: 'hhh',
        age:18
    }
   
   const token = jwt.sign(payload, privateKey, {
       expiresIn: 60, // token是秒
       algorithm: 'RS256'
    })


    ctx.body = {
        message: '登陆成功~',
        token
    }
})
 

userRouter.get('/list', (ctx, next) => {
    // 获取token
    const authorization = ctx.headers.authorization
    const token = authorization.replace('Bearer ', '')
    console.log(token);

    // 验证token
    try {
        const result = jwt.verify(token, publicKey, {
             algorithm: 'RS256'
        })
        ctx.body = {
            message: '获取用户列表成功',
            token:result,
            data: [
                { name: '111' },
                { name:'222' }
            ]
        }
    } catch (error) {

        ctx.body = {
            code: -1001,
            messgae:'token无效'
        }
    }
    
 })


app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => { 
    console.log('koa服务器启动成功');
 })
