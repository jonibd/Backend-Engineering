const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res, next) => {
    res.send("Admin dashboard.");
});



adminRouter.get("/users", async (req, res, next) => {
    try {

        const users = await Promise.resolve([
            { id: 1, name: "Jony" },
            { id: 2, name: "Rahim" }
        ]);

        throw new Error("Failed to fetch users");

        res.status(200).json({
            success: true,
            users: users

        });
    }
    catch (error) {
        next(error);
    }

});

adminRouter.get("/settings", (req, res, next) => {
    res.send("Admin Settings");
});

adminRouter.get("/products/:productId", (req, res) => {
    res.send(`product id:${req.params.productId}`);
});

//Multiple Route Parameters

adminRouter.get("/students/:studentId/courses/:courseId", (req, res) => {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;
    res.send(`studentId: ${studentId} courseId: ${courseId}`);
});
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 }
];
adminRouter.get("/products", (req, res) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    if (Number.isInteger(page) && page > 0 && Number.isInteger(limit) && limit > 0) {

        const skip = (page - 1) * limit;
        const pageProducts = products.slice(skip, skip + limit);
        res.status(200).json({ page: page, limit: limit, products: pageProducts });
    }
    else {
        return res.status(400).send("Invalid page or limit");
    }
});


const validateProduct = (req, res, next) => {
    try {

        const productName = req.body.name;
        const productPrice = req.body.price;

        if (typeof productName === "string" && productName.trim() !== "" && typeof productPrice === "number" && productPrice > 0) {

            req.product = {
                name: productName,
                price: productPrice

            }
            next();

        } else {
            return res.status(400).send("Invalid input for name and price!");
        }
    } catch (error) {
        next(error);
    }
}

adminRouter.post("/products", validateProduct, (req, res, next) => {

    products.push({
        name: req.product.name,
        price: req.product.price
    });
    res.status(201).json({
        message: "Product create successfully",
        product: {
            name: req.product.name,
            price: req.product.price
        }
    });
    console.log(products);


});


adminRouter.put("/products/:productName", (req, res) => {

    const productName = req.params.productName;
    const productPrice = req.body.price;

    if (typeof productName === "string" && productName.trim() !== "" && typeof productPrice === "number" && productPrice > 0) {
        const product = products.find((item) => item.name === productName);
        if (!product) {
            return res.status(404).send("Product not found.");
        }
        else {
            product.price = productPrice;
            res.status(200).json({
                message: "Product updated successfully.",
                product: product,
                productPrice: product.price
            });
        }
    } else {
        return res.status(400).send("Invalid product name");

    }
});


adminRouter.delete("/products/:productName", (req, res) => {
    const productName = req.params.productName;
    if (typeof productName === "string" && productName.trim() !== "") {
        const productIndex = products.findIndex((item) => item.name === productName);
        if (productIndex === -1) {
            return res.status(404).send("Product not found.");
        }
        else {
            const product = products.splice(productIndex, 1)[0];

            res.status(200).json({
                message: "Product delete successfully.",
                product: product,
                productPrice: product.price
            });
        }
    } else {
        return res.status(400).send("Invalid product name");

    }
});

module.exports = adminRouter;
