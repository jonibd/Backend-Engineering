const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(20);
console.log(myEmitter.getMaxListeners());