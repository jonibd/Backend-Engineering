const http = require("http");
const { stringify } = require("querystring");

const server = http.createServer((req, res) => {

   if (req.method === "GET" && req.url === "/") {
      res.statusCode = 200;
      res.setHeader("content type", "text/plaine");
      res.end("Home Page");
   }
   else if (req.method === "GET" && req.url === "api/products") {
      res.statusCode = 200;
      res.setHeader("content type", "application/json");
      const responce = {
         "success": true,
         "message": "Products fetched successfully",
         "data": [{
            "id": 1,
            "name": "keybord",
            "price": 1500
         }]
      }
      res.end(JSON.stringify(responce));

   }
   else if (req.method === "GET" && req.url === "products") {
      res.statusCode = 400;
      res.setHeader("content type", "application/json");
      const responce = {
         "success": false,
         "message": "invalid product data",
         "data": { null}
      }
      if (responce !== String && responce !== Number)
         res.end(JSON.stringify(responce));

   }
   else if (req.method === "POST" && req.url === "products") {
      res.statusCode = 201;
      res.setHeader("content type", "text/plain");
      const data = "";
      res.on(("data", (chank))=> {


   body += chank;

})
end.on(() => {

})
res.end("products crated successfully");


   } else {
   res.statusCode = 400
   res.setHeader("content type", "text/plain");
}

})

server.listen(3000, () => {
   console.log("Sever is running port 3000");
})


