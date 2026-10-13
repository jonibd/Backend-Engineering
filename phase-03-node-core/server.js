const http = require("node:http");

const server = http.createServer((req,res)=>{res.end("this is my first api!")});
 server.listen(3000,()=>{
    console.log("server is running on port 3000");
 });
