const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("userRegistered", (user1) => {
    console.log(`${user1} Welcome`);

})

myEmitter.on("userRegistered", (user2) => {
    console.log(`${user2} registration activity log`);

})

myEmitter.once("userRegistered", (user3) => {
    console.log(`${user3}  This is your last notification`);
})

myEmitter.emit("userRegistered", "jony");
myEmitter.emit("userRegistered", "david");