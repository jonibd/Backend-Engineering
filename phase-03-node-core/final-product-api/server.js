const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home");
    }
    else if (req.method === "GET" && req.url === "/api/products") {

        const filePath = path.join(__dirname, "data", "products.json");
        fs.readFile(filePath, "utf8", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" })
                res.end(error.message);
                return;
            }
            const response = JSON.parse(data);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response));
        })

    }
    else if (req.method === "GET" && req.url.startsWith("/api/products/")) {

        const parts = req.url.split("/");
        const productId = Number(parts[3]);

        if (!Number.isInteger(productId) || productId <= 0) {
            res.writeHead(404, { "Content-Type": "text/plain" })
            res.end("Invalid ProductID");
            return;
        }
        const filePath = path.join(__dirname, "data", "products.json");
        fs.readFile(filePath, "utf8", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" })
                res.end("Failed to read products file");
                return;
            }
            const response = JSON.parse(data);

            const product = response.find((item) => {

                return item.id === productId;

            })
            if (product) {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(product));
                return;
            }
            else {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Not Found.")
            }

        }

        )

    }
    else if (req.method === "POST" && req.url === "/api/products") {


        let body = "";

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const product = JSON.parse(body);
                if (product !== null &&
                    typeof product === "object" &&
                    !Array.isArray(product) && typeof product.name === "string"
                    && product.name.trim() !== "" && typeof product.price === "number"
                    && product.price > 0) {

                    const filePath = path.join(__dirname, "data", "products.json")
                    fs.readFile(filePath, "utf8", (error, data) => {
                        if (error) {
                            res.writeHead(500, { "Content-Type": "text/plain" });
                            res.end("Failed to read products file");
                            return;
                        }
                        const products = JSON.parse(data);

                        const maxId = products.reduce((max, product) => {
                            return product.id > max ? product.id : max;
                        }, 0);

                        const nextId = maxId + 1;

                        console.log("Next ID:", nextId);

                        const newProduct = {
                            id: nextId,
                            name: product.name,
                            price: product.price
                        };

                        products.push(newProduct);
                        const updateData = JSON.stringify(products, null, 4);

                        fs.writeFile(filePath, updateData, "utf8", (error) => {
                            if (error) {
                                res.writeHead(500, { "Content-Type": "text/plain" });
                                res.end("Failed to save product");
                                return;
                            }
                            console.log("Product saved successfully!");
                            res.writeHead(201, { "Content-Type": "application/json" });
                            res.end(JSON.stringify(newProduct));
                        });


                    });

                } else {
                    res.writeHead(400, { "Content-Type": "text/plain" });
                    res.end("Invalid Product Data");
                }

            }
            catch (error) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Invalid JSON");
            }
        });


    }
    else if (req.method === "PUT" && req.url.startsWith("/api/products/")) {


        const parts = req.url.split("/");
        const productId = Number(parts[3]);
        if (!Number.isInteger(productId) || productId <= 0) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("Invalid Product ID");
            return;
        }

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const updatedProduct = JSON.parse(body);

                if (
                    updatedProduct !== null &&
                    typeof updatedProduct === "object" &&
                    !Array.isArray(updatedProduct) &&
                    typeof updatedProduct.name === "string" &&
                    updatedProduct.name.trim() !== "" &&
                    typeof updatedProduct.price === "number" &&
                    updatedProduct.price > 0
                ) {
                    const filePath = path.join(__dirname, "data", "products.json");

                    fs.readFile(filePath, "utf8", (error, data) => {
                        if (error) {
                            res.writeHead(500, { "Content-Type": "text/plain" });
                            res.end("Failed to read products file");
                            return;
                        }

                        const products = JSON.parse(data);

                        const productIndex = products.findIndex((item) => {
                            return item.id === productId;
                        });
                        if (productIndex === -1) {
                            res.writeHead(404, { "Content-Type": "text/plain" });
                            res.end("Product Not Found");
                            return;
                        }
                        products[productIndex] = {
                            id: productId,
                            name: updatedProduct.name,
                            price: updatedProduct.price
                        };

                        const updateData = JSON.stringify(products, null, 4);

                        fs.writeFile(filePath, updateData, "utf8", (error) => {
                            if (error) {
                                res.writeHead(500, { "Content-Type": "text/plain" });
                                res.end("Failed to update product");
                                return;
                            }

                            res.writeHead(200, { "Content-Type": "application/json" });
                            res.end(JSON.stringify(products[productIndex]));
                        });
                    });
                }

                else {
                    res.writeHead(400, { "Content-Type": "text/plain" });
                    res.end("Invalid Product Data");
                }

            } catch (error) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Invalid JSON");
            }
        });


    }
    else if (req.method === "DELETE" && req.url.startsWith("/api/products/")) {
        const parts = req.url.split("/");
        const productId = Number(parts[3]);
        if (!Number.isInteger(productId) || productId <= 0) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("Invalid Product ID");
            return;
        }
        const filePath = path.join(__dirname, "data", "products.json");

        fs.readFile(filePath, "utf8", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Failed to read products file");
                return;
            }

            const products = JSON.parse(data);

            const productIndex = products.findIndex((item) => {
                return item.id === productId;
            });
            if (productIndex === -1) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Product Not Found");
                return;
            }

            const deletedProduct = products[productIndex];

            products.splice(productIndex, 1);

            const updateData = JSON.stringify(products, null, 4);

            fs.writeFile(filePath, updateData, "utf8", (error) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Failed to delete product");
                    return;
                }

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    message: "Product deleted successfully",
                    product: deletedProduct
                }));
            });
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
})
server.listen(3001, () => { console.log("server running on Port: 3001") });