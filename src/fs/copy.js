import { readdir, mkdir, copyFile } from 'fs/promises';
import path from 'path';
import isResourceAvailable from '../helpers/isResourceAvailable.js';
import getDirName from '../helpers/getDirName.js';

const copy = async () => {
    // Write your code here 
    try{
      const originFolderPath = path.join(getDirName(import.meta.url), 'files');
      const copyFolderPath = path.join(getDirName(import.meta.url), 'files_copy');
      
      if (!await isResourceAvailable(originFolderPath) || await isResourceAvailable(copyFolderPath)) throw new Error('FS operation failed'); 

      await mkdir(copyFolderPath)

      const files = await readdir(originFolderPath);

      Promise.allSettled(
        files.map(file => copyFile(`${originFolderPath}/${file}`, `${copyFolderPath}/${file}`))
      ).then(copyResult => {
        const rejectedFiles = copyResult.filter(result => result.status === 'rejected');

        if (rejectedFiles.length) throw new Error('FS operation not all files were copied');
      });
    } 
    catch (err) {
      console.error(err);
    }
};

copy();