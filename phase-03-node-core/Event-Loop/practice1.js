const crypto = require("crypto");

console.log("Start");

crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log("Task 1 completed");
});

crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log("Task 2 completed");
});

crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log("Task 3 completed");
});

crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log("Task 4 completed");
});

crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log("Task 5 completed");
});

console.log("End");