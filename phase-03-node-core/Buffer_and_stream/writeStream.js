const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("how about you \n");
writeStream.end();
writeStream.on("finish", () => {
    console.log("File write successfully complete");
})
writeStream.on("error", (error) => {
    console.log("Error occoured");
})
