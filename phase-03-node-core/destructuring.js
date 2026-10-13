//Object Destructuring:-
const product = {
  title: "Keyboard",
  price: 1500,
  stock: 10
};

const { title, price } = product;

console.log(title);
console.log(price);
//Array Destructuring

// const colors = ["red", "green", "blue"];

// const [first, second] = colors;

// console.log(first);
// console.log(second);

const numbers = [100, 200, 300, 400];

const [first, , third] = numbers;

console.log(first);
console.log(third);