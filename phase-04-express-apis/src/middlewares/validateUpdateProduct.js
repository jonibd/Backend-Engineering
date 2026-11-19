const validateUpdateProduct = (req, res, next) => {
    const { name, price } = req.body;

    // Empty request body check
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            success: false,
            message: "At least one field is required"
        });
    }

    // Name validation (only if provided)
    if (
        name !== undefined &&
        (typeof name !== "string" || name.trim() === "")
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid product name"
        });
    }

    // Price validation (only if provided)
    if (
        price !== undefined &&
        (typeof price !== "number" || price <= 0)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid product price"
        });
    }

    next();
};
module.exports = validateUpdateProduct;