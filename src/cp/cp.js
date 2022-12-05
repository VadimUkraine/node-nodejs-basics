import path from 'path';
import getDirName from '../helpers/getDirName.js';
import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const childFilePath = path.join(getDirName(import.meta.url), 'files', 'script.js');
    const child = spawn('node', [childFilePath, ...args], { stdio: ['pipe', 1, 2, 'ipc'] } );

    process.stdin.pipe(child.stdin);    
};

spawnChildProcess(['test', 'post']);