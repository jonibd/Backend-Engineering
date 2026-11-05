// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();


// function loginHandler(user) {
//     console.log(`${user} logged in`);
// }

// myEmitter.on("login", loginHandler);

// myEmitter.emit("login", "Jony");

// // Remove listener

// myEmitter.removeListener("login", loginHandler);

// myEmitter.emit("login", "Jony");

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("login", () => { });
myEmitter.on("login", () => { });
myEmitter.on("login", () => { });

console.log(myEmitter.listenerCount("login"));

myEmitter.removeAllListeners("login");

console.log(myEmitter.listenerCount("login"));