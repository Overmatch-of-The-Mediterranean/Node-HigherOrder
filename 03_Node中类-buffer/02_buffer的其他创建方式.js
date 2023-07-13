
// alloc是用来申请内存空间的
const buffer = Buffer.alloc(8) // 需要8字节的空间
console.log(buffer); // <Buffer 00 00 00 00 00 00 00 00>

// alloc申请空间，node底层是有做性能优化的，使得不会频繁的申请空间
// 性能优化：alloc申请空间，无论填入多大数值，默认申请下来8kb大小
// 以后的每次。allco(2),alloc(8)，会先检查已经申请下的8kb空间中是否还够用，够用则使用后面的，不够才申请新的