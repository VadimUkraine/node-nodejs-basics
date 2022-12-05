import { writeFile } from 'fs/promises';
import path from 'path';
import isResourceAvailable from '../helpers/isResourceAvailable.js';
import getDirName from '../helpers/getDirName.js';

const create = async () => {
  // Write your code here 
  try{
    const filePath = path.join(getDirName(import.meta.url), 'files', 'fresh.txt');
    const text = 'I am fresh and young';

    if (await isResourceAvailable(filePath)) throw new Error('FS operation failed'); 

    await writeFile(path.join(getDirName(import.meta.url), 'files', 'fresh.txt'), text);
  } 
  catch (err) {
    console.error(err);
  }
};

await create();