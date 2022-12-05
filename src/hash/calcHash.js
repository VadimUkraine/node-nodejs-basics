import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import isResourceAvailable from '../helpers/isResourceAvailable.js';
import getDirName from '../helpers/getDirName.js';

const calculateHash = async () => {
  // Write your code here 
  try{
    const filePath = path.join(getDirName(import.meta.url), 'files', 'fileToCalculateHashFor.txt');
          
    if (!await isResourceAvailable(filePath)) throw new Error('FS operation failed');   

    const content = await readFile(filePath, { encoding: 'utf8' });
    const contentInHex = createHash('sha256').update(content).digest('hex');
    console.log(contentInHex);
  } 
  catch (err) {
    console.error(err);
  }
};

await calculateHash();