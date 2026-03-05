
import fs from 'fs';


const callback = (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}

console.log("reading file1..")
fs.readFile('./file1.txt', 'utf-8', callback);

console.log("reading file2..")
fs.readFile('./file2.txt', 'utf-8', callback);

console.log("do something else..")
