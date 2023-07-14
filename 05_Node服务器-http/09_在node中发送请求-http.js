const http = require('http')

// 使用get请求得到的结果是个可读流，流都是EventEmitter的实例，所以各种监听事件都有
http.get('http://localhost:3000', (res) => { 
    // 从可读流中获取数据
    res.on('data', (data) => { 
        console.log(data.toString());
        console.log('get请求成功');
     })
})
 

// http中get请求有直接的方法，其他的像post，put，delete都只能通过request来发送
// request需要手动调用end来关闭，表示post请求向服务端写入结束，这样服务端才能将数据读取完后，返回结果
const req = http.request({
    method: 'POST',
    hostname: 'localhost',
    port:3000
}, (res) => { 
    res.on('data', (data) => { 
        console.log(data.toString());
        console.log('post请求成功');
     })
})
 
req.end()