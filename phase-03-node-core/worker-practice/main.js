// const { Worker } = require("worker_threads");

// console.log("Main thread started");

// //const worker = new Worker("./worker.js");

// //workerData use kora hoy Main Thread theke Worker Thread-e initial data pathate।
// const worker = new Worker("./worker.js", {
//     workerData: {
//         start: 1,
//         end: 10
//     }
// });


// console.log("Main thread is still working!");

// worker.on("message", (result) => {
//     console.log("Calculation Result:", result);
// });

// console.log("Main thread finished");


// const { Worker } = require("worker_threads");

// const worker = new Worker("./worker.js");

// worker.on("message", (result) => {
//     console.log("Result:", result);
// });

// worker.on("error", (error) => {
//     console.log("Worker Error:", error.message);
// });



const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
    console.log("Result:", result);
});

worker.on("error", (error) => {
    console.log("Worker Error:", error.message);
});

worker.on("exit", (code) => {
    console.log("Worker exited with code:", code);
});

worker.terminate().then((code) => {
    console.log("Termination completed:", code);
});

console.log("Main thread is still running");