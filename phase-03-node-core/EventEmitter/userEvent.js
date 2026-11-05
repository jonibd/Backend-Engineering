const EventEmitter = require("events")
const myEvent = new EventEmitter();

myEvent.on("userRegistered", (user) => {
    console.log(`Welcome ${user}! `)
});

myEvent.on("userRegistered", (user) => { console.log(`Registration activity recorded for ${user}!`) })

myEvent.emit("userRegistered", "Jony");