const express = require('express')


const userRouter = express.Router()

userRouter.get('/', (req, res, next) => {
    res.end('返回用户列表数据')
})

userRouter.get('/:id', (req, res, next) => {
    res.end('返回用户数据')
})

userRouter.post('/', (req, res, next) => {
    res.end('创建用户数据')
})

userRouter.patch('/:id', (req, res, next) => {
    res.end('修改用户数据')
})

userRouter.delete('/:id', (req, res, next) => {
    res.end('删除用户数据')
})

module.exports = userRouter