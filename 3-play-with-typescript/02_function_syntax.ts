

// function in typescript
//---------------------------

// 1. function declaration
function add(a: number, b: number): number {
    return a + b;
}

// 2. function expression
const subtract = function (a: number, b: number): number {
    return a - b;
};

// 3. arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
};

// 4. optional parameters
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Hi")); // Hi, Bob!

// 5. default parameters
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}
console.log(power(3)); // 9
console.log(power(3, 3)); // 27

// 6. rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5)); // 9

// 7. function overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}
console.log(combine("Hello, ", "world!")); // Hello, world!
console.log(combine(1, 2)); // 3
// console.log(combine("Number: ", 42)); // Number: 42 // This will cause a compile-time error due to type mismatch


