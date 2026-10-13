// const user = {
//   name: "Jony",
//   address: {
//     city: "Dhaka"
//   }
// };

// const copiedUser = { ...user };

// copiedUser.address.city = "Chittagong";

// console.log(user.address.city);

const user = {
  name: "Jony",
  age: 24,
  city: "Dhaka",
  role: "Developer"
};

const { name, ...details } = user;

console.log(name);
console.log(details);