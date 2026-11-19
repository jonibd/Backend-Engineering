const products = [
    { id: 1, name: "Keyboard", price: 1500 },
    { id: 2, name: "Mouse", price: 800 }
];

function createProduct(name, price) {
    const maxId = Math.max(...products.map((p) => p.id)) || 0;

    const newProduct = {
        id: maxId + 1,
        name: name,
        price: price
    }
    products.push(newProduct);

    return newProduct;

};

const updateProduct = (id, updatedData) => {

    const product = products.find((item) => item.id === id);
    if (!product) {
        return null;
    }

    Object.assign(product, updatedData);
    return product;
}

const deleteProduct = (id) => {

    const product = products.find((item) => item.id === id);

    if (!product) {
        return null;
    }

    const remainingProducts = products.filter((item) => item.id !== id);

    products.length = 0;
    products.push(...remainingProducts);

    return product;
};
module.exports = { products, createProduct, updateProduct, deleteProduct };