const KoaRouter = require('@koa/router')

const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.get('/', (ctx, next) => { 
    ctx.body = '获取用户数据列表'
 })

userRouter.get('/:id', (ctx, next) => {
    ctx.body = '获取用户信息'
 })

userRouter.post('/', (ctx, next) => { 
    ctx.body = '创建用户信息'
 })

userRouter.patch('/:id', (ctx, next) => { 
    ctx.body = '修改用户信息'
 })

userRouter.delete('/:id',(ctx, next) => { 
    ctx.body = '删除用户信息'
})
 
module.exports = userRouter