console.log("Hello Backend");

const name = "Jony";

console.log("Welcome", name);

console.log("Node version:", process.version);
console.log("Operating system:", process.platform);
console.log("Current directory:", process.cwd());



const firstNumber = Number(process.argv[2]);
const secondNumber = Number(process.argv[3]);
console.log(firstNumber+secondNumber);

console.log(process.argv);
if(Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) 
    {
        console.log("invalid please improve 2 number");
    }
    else{
        console.log("invalid please improve 2 number");
    }