const Koa = require('koa')
const KoaRouter = require('@koa/router')
const multer = require('@koa/multer')


const app = new Koa()

// const upload = multer({
//     dest:'./upload'
// })

const upload = multer({
    storage: multer.diskStorage({
        destination (req, file, cb) { 
            cb(null,'./upload')
        },
        filename (req, file, cb) {
            cb(null, Date.now() + '_' + file.originalname);
         }
    })
})

const uploadRouter = new KoaRouter({ prefix:'/upload' }) 

// uploadRouter.post('/', upload.single('avatar'), (ctx, next) => { 
//     ctx.body = '单文件上传成功'
// })
 
uploadRouter.post('/', upload.array('photos'), (ctx, next) => { 
    ctx.body = '多文件上传成功'
 })

app.use(uploadRouter.routes())
app.use(uploadRouter.allowedMethods())
app.listen(8000, () => { 
    console.log('koa服务器启动成功2');
    
 })