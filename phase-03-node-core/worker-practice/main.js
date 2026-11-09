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



// const { Worker } = require("worker_threads");

// const worker = new Worker("./worker.js");

// worker.on("message", (result) => {
//     console.log("Result:", result);
// });

// worker.on("error", (error) => {
//     console.log("Worker Error:", error.message);
// });

// worker.on("exit", (code) => {
//     console.log("Worker exited with code:", code);
// });

// worker.terminate().then((code) => {
//     console.log("Termination completed:", code);
// });

// console.log("Main thread is still running");


// const { Worker } = require("worker_threads");

// const worker1 = new Worker("./worker.js", {
//     workerData: {
//         start: 1,
//         end: 100
//     },
// });
// const worker2 = new Worker("./worker.js", {
//     workerData: {
//         start: 1,
//         end: 1000
//     }
// });
// const worker3 = new Worker("./worker.js", {
//     workerData: {
//         start: 1,
//         end: 10000
//     }
// });

// worker1.on("message", (Result1) => {
//     console.log("Result1", Result1);
// });

// worker2.on("message", (Result2) => {
//     console.log("Result2", Result2);
// });

// worker3.on("message", (Result3) => {
//     console.log("Result3", Result3);
// });
// console.log("main thread is still running!"); 

const { spawn } = require("child_process");

const child = spawn("node", ["--version"]);

child.stdout.on("data", (data) => {
    console.log(data.toString());
});

child.on("close", (code) => {
    console.log("Exit Code:", code);
});