const Koa = require('koa')
const KoaRouter = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')

const app = new Koa()

app.use(bodyParser()) // bodyParser既可以自动解析json数据，也可以解析urlencoded数据

const formData = multer()

const userRouter = new KoaRouter({ prefix:'/user' })

userRouter.get('/:id', (ctx, next) => { 
    // koa默认会自动解析传递的query和params参数
    // 1.get请求的query参数
    // console.log(ctx.query);
    // ctx.body = `获取query${ctx.query.username}`

    // 2.get请求的params参数
    // console.log(ctx.params);
    // ctx.body = `获取params${ctx.params.id}`


})
 
userRouter.post('/',formData.any(), (ctx,next) => { 
    // 3.post请求-json
    // console.log(ctx.request.body);

    // 4.urlencoded
    // console.log(ctx.request.body);

    // 5.form-data
    console.log(ctx.request.body);
 })


app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.listen(8000, () => { 
    console.log('koa服务器启动成功');
 })