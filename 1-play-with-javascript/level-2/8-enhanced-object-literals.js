

// enhanced object literals


let name = 'Alice';
let age = 30;

// before ES6

let person1 = {
    name: name,
    age: age,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

// after ES6
let person2 = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// testing the objects
person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Alice

console.log(person1); // { name: 'Alice', age: 30, greet: [Function: greet] }
console.log(person2); // { name: 'Alice', age: 30, greet: [Function: greet] }

//----------------------------------------------------------

// computed property names


let addressType = 'home'; // home | office | other

let person3={
    [addressType+"-address"]: '123 Main St',
}

console.log(person3); // { 'home-address': '123 Main St' }

//----------------------------------------------------------

// method definitions

let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2

//----------------------------------------------------------

// shorthand property names

let x = 10;
let y = 20;

let point = { x, y };

console.log(point); // { x: 10, y: 20 }