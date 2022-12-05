import { Worker } from 'worker_threads';
import path from 'path';
import getDirName from '../helpers/getDirName.js';
import os from 'os';

const createWorker = (workerData, workerFilePath) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerFilePath, {
      workerData,
    });
    worker.on("message", (data) => {
      resolve({ 
        status: 'resolved',
        data,
      });
    });
    worker.on("error", (msg) => {
      reject({ 
        status: 'error',
        data: null,
      });
    });
  });
};

const transformResultsArray = arr => {
    const normalizeArray = arr.map(
        el => {
          if (el.status === 'fulfilled') {
            return el.value;
          }

          return el.reason;
        }
    );

    return normalizeArray;
}

const performCalculations = async () => {
    // Write your code here  
    const threadCount = os.cpus().length;
    const startNumber = 10;
    const workerFilePath = path.join(getDirName(import.meta.url), 'worker.js');
    const workerPromises = [];

    for (let i = startNumber; i < (startNumber + threadCount); i++) {
      workerPromises.push(createWorker(i, workerFilePath));
    }

    const thread_results = await Promise.allSettled(workerPromises);
    const resultsArray = transformResultsArray(thread_results);
    console.log(resultsArray);
};

await performCalculations();