// const { parentPort, workerData } = require("worker_threads");
// //parentPort.postMessage("Hello from Worker Thread");
// console.log(workerData);
// let result = 0;
// for (let i = workerData.start; i <= workerData.end; i++) {
//     result += i;
// }
// parentPort.postMessage(result);

// const { parentPort } = require("worker_threads");

// throw new Error("Something went wrong in Worker");
// 

const { parentPort, workerData } = require("worker_threads");
let result = 0;

for (let i = workerData.start; i <= workerData.end; i++) {
    result = result + i;
}

parentPort.postMessage(result);

