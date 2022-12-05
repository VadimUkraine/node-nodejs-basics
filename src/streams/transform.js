import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 
    try{
      const writableToTerminal = process.stdout;
      const readableFromTerminal = process.stdin;
      const transform = new Transform({
        transform(chunk, enc, cb){
            const chunkStrinfified = chunk.toString().trim();
            const reversedChunk = chunkStrinfified.split('').reverse().join('');

            cb(null, reversedChunk + '\n');
        }
      });

      readableFromTerminal.pipe(transform).pipe(writableToTerminal);
    } 
    catch (err) {
      console.error(err);
    }
};

await transform();