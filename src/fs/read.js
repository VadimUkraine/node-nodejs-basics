import { readFile } from 'fs/promises';
import path from 'path';
import isResourceAvailable from '../helpers/isResourceAvailable.js';
import getDirName from '../helpers/getDirName.js';

const read = async () => {
    // Write your code here
    try{
      const filePath = path.join(getDirName(import.meta.url), 'files', 'fileToRead.txt');
          
      if (!await isResourceAvailable(filePath)) throw new Error('FS operation failed');   

      const contents = await readFile(filePath, { encoding: 'utf8' });
      console.log(contents);
    } 
    catch (err) {
      console.error(err);
    }
};

await read();