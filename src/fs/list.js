import { readdir } from 'fs/promises';
import path from 'path';
import isResourceAvailable from '../helpers/isResourceAvailable.js';
import getDirName from '../helpers/getDirName.js';

const list = async () => {
    // Write your code here 
    try{
      const originFolderPath = path.join(getDirName(import.meta.url), 'files');
        
      if (!await isResourceAvailable(originFolderPath)) throw new Error('FS operation failed');   

      const files = await readdir(originFolderPath);
      console.table(files);
    } 
    catch (err) {
      console.error(err);
    }
};

await list();