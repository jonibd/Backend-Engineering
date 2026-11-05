const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.end("Home page");
    }
    else if (req.method === "GET" && req.url === "/products") {
        res.statusCode = 200;
        res.end("Product List");
    }
    else if (req.method === "GET" && req.url === "/api/products/1") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        const products = [
            { id: 1, name: "Keyboard", price: 1500 },
            { id: 2, name: "Mouse", price: 800 },
            { id: 3, name: "Monitor", price: 12000 }
        ];
        const product = products.find((item) => item.id === 1);
        res.end(JSON.stringify(product));

    }

    else if (req.method === "GET" && req.url === "/api/products/2") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const products = [{
            "id": 2,
            "name": "Mouse",
            "price": 800
        }]
        const product = products.find((item) => item.id === 2)
        if (product) {
            res.statusCode = 200;
            res.end(JSON.stringify(product));
        }

        else {
            res.statusCode = 404;
            const product1 = {
                "success": false,
                "message": "Product not found"
            }
            res.end(JSON.stringify(product1))

        }

    }
    else if (req.method === "GET" && req.url === "/api/products") {
        res.statusCode = 200;

        res.setHeader("Content-Type", "application/json");

        const data = {
            success: true,
            message: "Products fetched successfully",
            data: [
                {
                    id: 1,
                    name: "Keyboard",
                    price: 1500
                },
                {
                    id: 2,
                    name: "Mouse",
                    price: 800
                }
            ]
        };

        res.end(JSON.stringify(data));
    }

    else if (req.method === "GET" && req.url === "/Homepage") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        })

        req.on("end", () => {
            try {
                const product = JSON.parse(body);
                if (typeof product.name === "string" && product.name.trim() !== "" && typeof product.price === "number" && product.price > 0) {
                    res.statusCode = 201;
                    res.end("Valid JSON");
                }
                else {
                    res.statusCode = 400;
                    res.end("Invalid Product");

                }
            }
            catch (error) {

                res.statusCode = 400;
                res.end("Invalid JSON");
            }
        }
        )
    }
    else {
        res.statusCode = 404;
        res.end("NOT Found");
    }
})

server.listen(3001, () => {
    console.log("server is running on port 3001");

})