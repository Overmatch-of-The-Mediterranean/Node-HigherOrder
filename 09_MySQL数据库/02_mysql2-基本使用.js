const mysql = require('mysql2')

// 创建连接
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'qsq020614',
    database: 'user'
})

// 编写sql语句
const statement = 'SELECT * FROM `products`;'


connection.query(statement, (err, values, fields) => {

    if (err) {
        console.log(err);
    }

    // 查询的值
    console.log(values);

    // 查询的值的字段信息
    console.log(fields);
 })