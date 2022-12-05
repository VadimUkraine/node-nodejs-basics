import { unlink } from 'fs/promises';
import path from 'path';
import isResourceAvailable from '../helpers/isResourceAvailable.js';
import getDirName from '../helpers/getDirName.js';

const remove = async () => {
    // Write your code here
    try{
      const filePath = path.join(getDirName(import.meta.url), 'files', 'fileToRemove.txt')
        
      if (!await isResourceAvailable(filePath)) throw new Error('FS operation failed'); 
  
      await unlink(filePath);
    } 
    catch (err) {
      console.error(err);
    }
};

await remove();