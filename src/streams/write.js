import { createWriteStream } from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';
import getDirName from '../helpers/getDirName.js';

const write = async () => {
  // Write your code here 
  try{
    const readableFromTerminal = process.stdin;
    const filePath = path.join(getDirName(import.meta.url), 'files', 'fileToWrite.txt')
    const content = await readFile(filePath, { encoding: 'utf8' });
    const writableToFile = createWriteStream(filePath, {
        encoding: "utf-8",
        flags: "r+",
        start: content.length,
     });
     
    readableFromTerminal.pipe(writableToFile);

    readableFromTerminal.on('data', inputStdin => {
      const inputStdinStringified = inputStdin.toString();
      if (inputStdinStringified.match('unpipe file'))  readableFromTerminal.unpipe(writableToFile);
    });
  } 
  catch (err) {
    console.error(err);
  }
};

await write();