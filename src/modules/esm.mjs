import path from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import getDirName from '../helpers/getDirName.js';
import { readFile } from 'fs/promises';

const objectA = JSON.parse(
  await readFile(path.join(getDirName(import.meta.url), 'files', 'a.json'))
);

const objectB = JSON.parse(
  await readFile(path.join(getDirName(import.meta.url), 'files', 'b.json'))
);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = objectA;
} else {
    unknownObject = objectB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${getDirName(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};
