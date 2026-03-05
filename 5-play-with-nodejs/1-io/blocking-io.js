
import fs from 'fs';

console.log("reading file1..")
const file1Data = fs.readFileSync('./file1.txt', 'utf-8');
console.log(file1Data);

console.log("reading file2..")
const file2Data = fs.readFileSync('./file2.txt', 'utf-8');
console.log(file2Data);

console.log("do something else..")
