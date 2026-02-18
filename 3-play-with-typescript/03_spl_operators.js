// typescript special operators
var _a;
// 1. 'as' operator - type assertion
let a = 10;
let b = a; // type assertion using 'as' operator
// 2. 'typeof' operator - type guard
if (typeof a === 'number') {
    console.log('a is a number');
}
else if (typeof a === 'string') {
    console.log('a is a string');
}
else {
    console.log('a is of unknown type');
}
// 3. 'instanceof' operator - type guard for classes
class Person {
    constructor(name) {
        this.name = name;
    }
}
let c = new Person('John');
if (c instanceof Person) {
    console.log('c is an instance of Person');
}
else {
    console.log('c is not an instance of Person');
}
// 4. 'in' operator - type guard for object properties
let d = { name: 'John', age: 30 };
if ('name' in d) {
    console.log('d has a name property');
}
else {
    console.log('d does not have a name property');
}
// // 5. '!' operator - non-null assertion operator
// let e: string | null = null;
// console.log(e!.length); // non-null assertion operator, tells the compiler that e is not null, but it can lead to runtime errors if e is actually null
// 6. '??' operator - nullish coalescing operator
let f = null;
let g = f !== null && f !== void 0 ? f : 'default value';
console.log(g); // output: 'default value' because f is null, if f had a value it would have been used instead of 'default value'
// 7. '?.' operator - optional chaining operator
let person1 = { name: 'John', address: { city: 'New York' } };
let person2 = { name: 'Jane' };
let city = (_a = person2.address) === null || _a === void 0 ? void 0 : _a.city;
console.log(city); // output: undefined because person2 does not have an address property, if person2 had an address property with a city it would have been used instead of undefined
// 8. '??=' operator - nullish coalescing assignment operator
let h = null;
h !== null && h !== void 0 ? h : (h = 'default value');
console.log(h); // output: 'default value' because h is null, if h had a value it would have been used instead of 'default value'
// 9. '&&=' operator - logical AND assignment operator
let i = true;
i && (i = false);
console.log(i); // output: false because i is true, if i had been false it would have remained false
// 10. '||=' operator - logical OR assignment operator
let j = false;
j || (j = true);
console.log(j); // output: true because j is false, if j had been true it would have remained true
// 11. '??' operator with function parameters - nullish coalescing operator for function parameters
function greet(name) {
    name !== null && name !== void 0 ? name : (name = 'Guest');
    console.log(`Hello, ${name}!`);
}
greet(null); // output: 'Hello, Guest!' because name is null, if name had a value it would have been used instead of 'Guest'
greet('Alice'); // output: 'Hello, Alice!' because name is not null, so the provided value is used instead of 'Guest'
// 12. 'as const' assertion - creates a readonly tuple or object
const colors = ['red', 'green', 'blue']; // creates a readonly tuple of string literals
const person3 = { name: 'John', age: 30 }; // creates a readonly object
export {};
//# sourceMappingURL=03_spl_operators.js.map