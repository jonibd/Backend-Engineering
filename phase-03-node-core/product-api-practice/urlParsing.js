const url = "/api/products/25";

const parts = url.split("/");
const productId = Number(parts[3])
console.log(productId);
console.log(typeof productId);