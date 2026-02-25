const { EventEmitter } = require("event");
const myEmitter=new EventEmitter();
myEmitter.on('greet',()=>{
    console.log("hello world");
});
myEmitter.emit('greet');