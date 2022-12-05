import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import getDirName from '../helpers/getDirName.js';

const compress = async () => {
    // Write your code here 
  try{
    const originalFilePath = path.join(getDirName(import.meta.url), 'files', 'fileToCompress.txt');
    const compressedFilePath = path.join(getDirName(import.meta.url), 'files', 'archive.gz');
    const handleStream = createReadStream(originalFilePath);

    handleStream
      .pipe(createGzip())
      .pipe(createWriteStream(compressedFilePath));     
  } 
  catch (err) {
    console.error(err);
  }
};

await compress();