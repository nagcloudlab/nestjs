



// spread operator

let arr1 = [1, 2, 3,4];
let arr2 = [5, 6, 7,8];

// make new array by combining arr1 and arr2

// traditional way
let combined1 = arr1.concat(arr2);
console.log(combined1); // [1, 2, 3, 4, 5, 6, 7, 8]

// using spread operator
let combined2 = [...arr1, ...arr2,9,10];
console.log(combined2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//----------------

function sum(x, y, z) {
    return x + y + z;
}

let numbers = [1, 2, 3];

// traditional way
let result1 = sum(numbers[0], numbers[1], numbers[2]);
console.log(result1); // 6

// using spread operator
let result2 = sum(...numbers);
console.log(result2); // 6

//----------------

// copying an array

let originalArray = [1, 2, 3,4,5,6,7,8];

// traditional way
let copy1 = originalArray.slice();
console.log(copy1); // [1, 2, 3, 4, 5, 6, 7, 8]

// using spread operator
let copy2 = [...originalArray];
console.log(copy2); // [1, 2, 3, 4, 5, 6, 7, 8]

//----------------

// converting string to array

let str = "hello";

// traditional way
let charArray1 = str.split('');
console.log(charArray1); // ['h', 'e', 'l', 'l', 'o']

// using spread operator
let charArray2 = [...str];
console.log(charArray2); // ['h', 'e', 'l', 'l', 'o']

//----------------


let o1={a:1,b:2};
let o2={c:3,d:4};

// make new object by combining o1 and o2

// traditional way
let combinedObj1 = Object.assign({}, o1, o2);
console.log(combinedObj1); // {a: 1, b: 2, c: 3, d: 4}

// using spread operator
let combinedObj2 = {...o1, ...o2, e:5};
console.log(combinedObj2); // {a: 1, b: 2, c: 3, d: 4, e: 5}

//----------------

// copying an object

let originalObj = {x: 10, y: 20};

// traditional way
let copyObj1 = Object.assign({}, originalObj);
console.log(copyObj1); // {x: 10, y: 20}

// using spread operator
let copyObj2 = {...originalObj};
console.log(copyObj2); // {x: 10, y: 20}