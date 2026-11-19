const { products, createProduct, updateProduct, deleteProduct } = require("../models/productModel")
const AppError = require("../utils/AppError");

const getProducts = (req, res) => {
    res.status(200).json({
        success: true,
        products: products
    });
};


const createProductController = (req, res) => {

    const name = req.body.name;
    const price = req.body.price;
    const newProduct = createProduct(name, price);
    res.status(201).json({
        success: true,
        message: "Product Created Successfully",
        product: newProduct
    });
}

const updateProductController = (req, res, next) => {
    const id = Number(req.params.id);
    const updatedData = req.body;

    const updatedProduct = updateProduct(id, updatedData);

    if (!updatedProduct) {
        return next(new AppError("Product Not Found", 404));
    }
    res.status(200).json({
        success: true,
        message: "Product update Successfully",
        product: updatedProduct
    });


}


const deleteProductController = (req, res, next) => {
    const id = Number(req.params.id);

    const deletedProduct = deleteProduct(id);
    if (!deletedProduct) {
        return next(new AppError("Product Not Found", 404));
    }

    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully",
        product: deletedProduct
    });
};

module.exports = { getProducts, createProductController, updateProductController, deleteProductController };