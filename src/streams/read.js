import { createReadStream } from 'fs';
import path from 'path';
import getDirName from '../helpers/getDirName.js';

const read = async () => {
    // Write your code here    
    try{
      const writableToTerminal = process.stdout;
      const filePath = path.join(getDirName(import.meta.url), 'files', 'fileToRead.txt')
      const readFromFile = createReadStream(filePath);
         
      readFromFile.pipe(writableToTerminal);
   
      readFromFile.on('end', () => {
        console.log('')
        readFromFile.unpipe(writableToTerminal);
      });
    } 
    catch (err) {
      console.error(err);
    }
};

await read();