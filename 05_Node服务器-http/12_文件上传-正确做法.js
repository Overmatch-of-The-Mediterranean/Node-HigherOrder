const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => { 
    // 设置编码格式
    req.setEncoding('binary')

    // 获取分隔符
    const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=','')

    let formData = ''
    req.on('data', (data) => { 
        formData += data

        // 清除image/jpeg以及之前的字段
        const imgType = 'image/jpeg'
        const imageIndex = formData.indexOf(imgType) + imgType.length
        let imageData = formData.substring(imageIndex)
        // 清除开头两个空格
        imageData = imageData.replace(/^\s\s*/, '')
        
        // 清除最后的分隔符
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

        fs.writeFile('./river.jpg', imageData, 'binary', () => { 
            console.log('写出文件完成');
         })
        

        
    })
    

    res.end('hello world111')
 })


server.listen(8000, () => { 
    console.log('8000端口服务器开启成功');
 })