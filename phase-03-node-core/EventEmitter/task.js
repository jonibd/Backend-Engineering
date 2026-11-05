const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(15);

myEmitter.on("notification", () => {
    console.log("notification1");

});
myEmitter.on("notification", () => {
    console.log("notification2");
});
myEmitter.on("notification", () => {
    console.log("notification3");
});

myEmitter.emit("notification",)

console.log(myEmitter.listenerCount("notification"));
console.log(myEmitter.getMaxListeners())