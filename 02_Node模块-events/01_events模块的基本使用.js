const EventEmitter = require('events')

const emitter = new EventEmitter()

function fnc (...args) { 
    console.log('传递的参数为', args);
}

emitter.on('why', fnc)

emitter.emit('why', 'why', 1.88, 18)

setTimeout(() => { 
    emitter.off('why',fnc)
    emitter.emit('why')
 },1000)