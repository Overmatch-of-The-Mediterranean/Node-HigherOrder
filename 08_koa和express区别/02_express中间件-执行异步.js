const express = require('express')
const axios = require('axios')

const app = express()

// express执行同步代码和koa中执行同步代码一样，都符合洋葱圈模型
// express执行异步代码不符合洋葱圈模型，express中next的返回值为void，所以使用async和await没有用
// express中若有异步操作，则返回数据的操作需要放在最后
// koa执行异步代码符合洋葱圈模型，next的返回值为promise

app.use((req, res, next) => { 
    res.msg = 'aaa'
    next()
    
})

app.use((req, res, next) => { 
    res.msg += 'bbb'
    next()
})

app.use( async(req, res, next) => { 
    
    const result = await axios.get('http://123.207.32.32:8000/home/multidata')
    res.msg += 'ccc' + result.data.data.banner.list[0].title
    res.end(res.msg)
 })


app.listen(8000, () => { 
    console.log('8000端口监听成功');
 })