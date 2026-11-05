const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Listen for event
myEmitter.on("greet", () => {
    console.log("Hello! Welcome to Node.js");
});

// Trigger event
myEmitter.emit("greet");