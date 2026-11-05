const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.once("login", (user) => {
    console.log(`One-time listener: ${user} `);
})
myEmitter.on("login", (user) => {
    console.log(`Regular listener: ${user}`);
})

myEmitter.emit("login", "Jony");
myEmitter.emit("login", "Jony");
myEmitter.emit("login", "Jony");
