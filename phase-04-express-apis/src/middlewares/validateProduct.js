const validateProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    if (
        typeof name !== "string" ||
        name.trim() === "" ||
        typeof price !== "number" ||
        price <= 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid Product Data"
        });
    }
    next();
};




module.exports = validateProduct;