const fs = require("fs");

const readStream = fs.createReadStream("data.txt", { highWaterMark: 10 });

readStream.on("data", (chunk) => {
    console.log("Received chunk :", chunk);
    console.log("Received chunk :", chunk.toString());
});
readStream.on("end", () => {
    console.log("File reading completed!");

});

readStream.on("error", (error) => {
    console.log("Error", error.message);
});