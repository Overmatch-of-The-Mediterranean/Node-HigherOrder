const express = require('express')

const app = express()


app.use('/login',(req,res,next) => {  
    // 方式一(用的少)
    // res.end()

    // 方式二(用的多)且会自动设置content-type
    // res.json({
    //     code: 200,
    //     messgae: 'hhh',
    //     list: [
    //         { name: '111' },
    //         { name: '222' }
    //     ]
    // })

    // 设置状态码
    res.status(300)
    res.end('111')
})


app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })