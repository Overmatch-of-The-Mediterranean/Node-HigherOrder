const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('why', () => { })
emitter.on('why', () => { })
emitter.on('why', () => { })

emitter.on('kobe', () => { })
emitter.on('kobe', () => { })

// 获取所有监听事件的名称，数组
console.log(emitter.eventNames());

// 获取单个事件最大监听器个数
console.log(emitter.getMaxListeners());

// 获取某个事件的监听器个数
console.log(emitter.listenerCount('why'));

// 获取某个事件的监听器(函数)数组
console.log(emitter.listeners('why'));

// 对事件只监听一次
emitter.once('why', () => { })

// 把此次事件的监听器，放在前面
emitter.prependListener('why', () => { })

// 移除所有事件监听
// 不传递参数就是移除所有
// 传递参数只移除该事件监听
emitter.removeAllListeners()
emitter.removeAllListeners('why')