const mysql = require('mysql2')

// 创建连接
const connectionPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'qsq020614',
    database: 'user'
})

// 编写sql语句：预处理语句
const statement = 'SELECT * FROM `products` WHERE price > ? AND score > ? ;'

// Promise写法
connectionPool.promise().execute(statement, [5000, 8]).then(res => { 

    const [values, fields] = res
    console.log(values);
 })