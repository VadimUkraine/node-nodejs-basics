import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import isResourceAvailable from '../helpers/isResourceAvailable.js';
import getDirName from '../helpers/getDirName.js';

const decompress = async () => {
    // Write your code here 
    try{
      const compressedFilePath = path.join(getDirName(import.meta.url), 'files', 'archive.gz');
      const unCompressedFilePath = path.join(getDirName(import.meta.url), 'files', 'fileToCompress.txt');

      if (!await isResourceAvailable(compressedFilePath)) throw new Error('FS operation failed');

      const handleStream = createReadStream(compressedFilePath);      
  
      handleStream
        .pipe(createUnzip())
        .pipe(createWriteStream(unCompressedFilePath));     
    } 
    catch (err) {
      console.error(err);
    }
};

await decompress();