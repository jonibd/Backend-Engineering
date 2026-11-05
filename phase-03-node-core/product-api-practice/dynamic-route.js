const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url.startsWith("/api/projects/")) {
        const parts = req.url.split("/");

        const productId = Number(parts[3]);
        if (productId > 0 && Number.isInteger(productId) && parts[3] !== "" && parts.length === 4) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ message: `Product details for ${productId}` }))
        } else {
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 400;
            res.end(JSON.stringify({ message: "invalid product Id! " }));

        }
    }
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Not Found " }));
    }
})

server.listen(3001, () => { console.log("Server is running at port 3001") })

const myUrl = new URL(
    "/api/projects/25?name=test",
    "http://localhost:3001"
)
const parts = myUrl.pathname.split("/");

const productId = Number(parts[3]);

console.log("Path:", myUrl.pathname);
console.log("Product ID:", productId);
console.log("Name:", myUrl.searchParams.get("name"));