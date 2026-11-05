const { multiply, subtract, add } = require("./calculator");
console.log(add(25, 15));
console.log(multiply(10, 20));
console.log(subtract(25, 15));
console.log(process.argv);
console.log(process.version);
console.log(process.platform);
console.log(process.cwd());

const { error } = require("node:console");

const userData1 = '{"name":"Jony","age":23';
try {
    const data = JSON.parse(userData1);
    console.log(data);
    console.log("Success");

} catch (erroe) {
    console.log("Invalid JSON", erroe.message);
}

const userData = '{"name":"Jony","age":23,"role":"Developer"}';
const data = JSON.parse(userData);
console.log(data.name);
console.log(data.age);
console.log(data.role);

const product1 = { name: "Keyboard", price: 1500 };
const product2 = { name: "Mouse", price: "500" };
const product3 = { name: "   ", price: 200 };
function validateProduct(product) {

    if (typeof product.name === "string" && product.name.trim() !== "" && typeof product.price === "number" && product.price > 0) {
        return;
    }
    else {
        return false;
    }
}




console.log(validateProduct(product1));
console.log(validateProduct(product2));
console.log(validateProduct(product3));