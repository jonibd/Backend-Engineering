const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("order", () => {
    console.log("Order received");

    setTimeout(() => {
        console.log("Order processed");
    }, 0);

    console.log("Processing started");
});

console.log("App started");

myEmitter.emit("order");

console.log("App finished");

