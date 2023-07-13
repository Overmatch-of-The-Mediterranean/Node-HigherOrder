// buffer可以看作是存储二进制的数组
// buffer中每一项都是一个字节，以二进制存储，十六进制方式展示


const buffer = Buffer.from('hello buffer')

console.log(buffer);

// 同时也可对buffer中的每一项进行操作
console.log(buffer[1]);// buffer中的65，读取后以十进制101输出
buffer[0] = 101 // 十进制赋值，转为为2进制存储，十六进制展示
console.log(buffer);