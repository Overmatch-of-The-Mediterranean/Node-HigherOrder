const express = require('express')
const multer = require('multer')

const upload = multer({
    // dest: './upload' // 输出的文件夹，输出的文件没有后缀,
    storage: multer.diskStorage({
        destination (req, file, cb) { 
            cb(null,'./uploads')
         },
        filename (req, file, cb) { 
            cb(null,Date.now() + '_' + file.originalname)
        }
    })
})

const app = express()

app.use('/avatar',upload.single('avatar'),(req, res, next) => { 
    res.end('单文件上传成功')
 })


app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })