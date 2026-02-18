

// typescript special operators

// 1. 'as' operator - type assertion
let a: any = 10;
let b: number = a as number; // type assertion using 'as' operator

// 2. 'typeof' operator - type guard
if (typeof a === 'number') {
    console.log('a is a number');
} else if (typeof a === 'string') {
    console.log('a is a string');
} else {
    console.log('a is of unknown type');
}

// 3. 'instanceof' operator - type guard for classes
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let c: any = new Person('John');
if (c instanceof Person) {
    console.log('c is an instance of Person');
} else {
    console.log('c is not an instance of Person');
}

// 4. 'in' operator - type guard for object properties
let d: any = { name: 'John', age: 30 };
if ('name' in d) {
    console.log('d has a name property');
} else {
    console.log('d does not have a name property');
}

// // 5. '!' operator - non-null assertion operator
// let e: string | null = null;
// console.log(e!.length); // non-null assertion operator, tells the compiler that e is not null, but it can lead to runtime errors if e is actually null


// 6. '??' operator - nullish coalescing operator
let f: string | null = null;
let g: string = f ?? 'default value';
console.log(g); // output: 'default value' because f is null, if f had a value it would have been used instead of 'default value'


// 7. '?.' operator - optional chaining operator
let person1: any = { name: 'John', address: { city: 'New York' } };
let person2: any = { name: 'Jane' };

let city = person2.address?.city;
console.log(city); // output: undefined because person2 does not have an address property, if person2 had an address property with a city it would have been used instead of undefined

// 8. '??=' operator - nullish coalescing assignment operator
let h: string | null = null;
h ??= 'default value';
console.log(h); // output: 'default value' because h is null, if h had a value it would have been used instead of 'default value'

// 9. '&&=' operator - logical AND assignment operator
let i: boolean = true;
i &&= false;
console.log(i); // output: false because i is true, if i had been false it would have remained false

// 10. '||=' operator - logical OR assignment operator
let j: boolean = false;
j ||= true;
console.log(j); // output: true because j is false, if j had been true it would have remained true

// 11. '??' operator with function parameters - nullish coalescing operator for function parameters
function greet(name: string | null) {
    name ??= 'Guest';
    console.log(`Hello, ${name}!`);
}

greet(null); // output: 'Hello, Guest!' because name is null, if name had a value it would have been used instead of 'Guest'
greet('Alice'); // output: 'Hello, Alice!' because name is not null, so the provided value is used instead of 'Guest'

// 12. 'as const' assertion - creates a readonly tuple or object
const colors = ['red', 'green', 'blue'] as const; // creates a readonly tuple of string literals
type Color = typeof colors[number]; // type Color is 'red' | 'green' | 'blue'

const person3 = { name: 'John', age: 30 } as const; // creates a readonly object
type Person3 = typeof person3; // type Person3 is { readonly name: 'John'; readonly age: 30 }
