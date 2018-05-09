import fs from 'fs-extra';

fs.removeSync('node_modules');
fs.removeSync('coverage');
fs.removeSync('package-lock.js');
