const workers = [];

for (let i = 0; i < 3; i++) {
    const worker = new Worker("./worker.js");

    const workerInfo = {
        worker,
        isAvailable: true
    };

    workers.push(workerInfo);


    const availableWorker = workers.find((workerInfo) => {
        return workerInfo.isAvailable === false;
    });

    if (availableWorker) {
        workerInfo.worker.on("message", (result) => {
            console.log("Result:", result)
        });

    }


}

