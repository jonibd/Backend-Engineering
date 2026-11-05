const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("error", (error) => {
    console.log("Error occurred", error.message);
});

myEmitter.emit("error", new Error("Database connection failed"));

console.log("App finished");