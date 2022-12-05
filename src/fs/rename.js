import fs from 'fs/promises';
import path from 'path';
import isResourceAvailable from '../helpers/isResourceAvailable.js';
import getDirName from '../helpers/getDirName.js';

const rename = async () => {
    // Write your code here 
    try{
        const wrongFile = path.join(getDirName(import.meta.url), 'files', 'wrongFilename.txt');
        const properFile = path.join(getDirName(import.meta.url), 'files', 'properFilename.md');
        
        if (!await isResourceAvailable(wrongFile) || await isResourceAvailable(properFile)) throw new Error('FS operation failed'); 
  
        await fs.rename(wrongFile, properFile);
      } 
      catch (err) {
        console.error(err);
      }
};

await rename();