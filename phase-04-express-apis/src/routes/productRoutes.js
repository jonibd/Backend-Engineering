const express = require("express");
const productRouter = express.Router();
const validateProduct = require("../middlewares/validateProduct");
const validateUpdateProduct = require("../middlewares/validateUpdateProduct");

const { getProducts, createProductController, updateProductController, deleteProductController, testAppError
} = require("../controllers/productController");

productRouter.get("/", getProducts);
productRouter.post("/", validateProduct, createProductController);
productRouter.put("/:id", validateUpdateProduct, updateProductController);
productRouter.delete("/:id", deleteProductController);

module.exports = productRouter;