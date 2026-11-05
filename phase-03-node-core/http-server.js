const http = require("http");

const server = http.createServer((req, res) => {

   console.log("Method", req.method);

   console.log("URL", req.url);

   if (req.method === "GET" && req.url === "/") {
      res.statusCode = 200;
      res.end("Home Page");
   }
   else if (req.method === "GET" && req.url === "/api/products") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");

      const response = {
         "message": "Products fetched successfully",
         "data": [
            {
               "id": 1,
               "name": "Keyboard",
               "price": 1500
            }
         ]
      }
      res.end(JSON.stringify(response));
   }
   else if (req.method === "GET" && req.url === "/about") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("About Page");
   }
   else if (req.method === "POST" && req.url === "/products") {

      let body = "";

      req.on("data", (chunk) => {
         console.log('Received chunk:', chunk);
         body += chunk.toString();
      })
      req.on("end", (sabesuccessfyly) => {

         try {
            const parsedBody = JSON.parse(body);
            if (typeof parsedBody.name !== "string" || !parsedBody.name.trim() || typeof parsedBody.price !== "number" || parsedBody.price <= 0) {
               res.statusCode = 400;
               res.end("Invalid product data");
            } else {

               res.statusCode = 201;
               res.end("Product Created");
            }


         } catch (error) {

            res.statusCode = 400;
            res.end("Invalid JSON");
            console.log(error.message);

         }

      })
   }
   else {
      res.statusCode = 404;
      res.end("Not Found");
   }

});

server.listen(3000, () => {
   console.log("Server running on port 3000");
})