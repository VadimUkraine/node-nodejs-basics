import { dirname } from 'path';
import { fileURLToPath } from 'url';

const getDirName = (url) => dirname(fileURLToPath(url));

export default getDirName;
