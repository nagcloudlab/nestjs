"use strict";


/*
    ------------------------------
    data types in javascript
    ------------------------------

    1. value / primitive types
        a. number
        b. string
        c. boolean
        d. undefined
        e. null
        f. symbol
        g. bigint
    2. object / complex types
        a. object
        b. array
        c. regexp
        .....


*/

//--------------------------------------------------------------
// 1. value / primitive types
//--------------------------------------------------------------

// a. number

var num1 = 42;
// console.log(typeof num1); // "number"

var num2 = 3.14;
// console.log(typeof num2); // "number"

// b. string

var str1 = "Hello, World!";
// console.log(typeof str1); // "string"

var str2 = 'JavaScript is fun!';
// console.log(typeof str2); // "string"

var str3 = `Template literals are cool!`;   
// console.log(typeof str3); // "string"

var my_name = "Alice";
var greeting1 = "hello, " + my_name + "!";
var greeting2 = `hello, ${my_name}!`;
// console.log(greeting1); // "hello, Alice!"
// console.log(greeting2); // "hello, Alice!"
var dynamic_str = `The sum of 2 and 3 is ${2 + 3}.`;

var multi_line_str = `This is line 1.
This is line 2.
This is line 3.`;
// console.log(multi_line_str);

var html_template = `
<div>
    <h1>Welcome to My Website</h1>
    <p>This is a sample paragraph.</p>
</div>
`;
// console.log(html_template);

// c. boolean

var isTrue = true;
// console.log(typeof isTrue); // "boolean"

var isFalse = false;
// console.log(typeof isFalse); // "boolean"

// d. undefined

var undefVar;
// console.log(typeof undefVar); // "undefined"
// console.log(undefVar);    // undefined

// e. null

var nullVar = null; // to express object absence
// console.log(typeof nullVar);

// e. symbol

var sym1 = Symbol("mySymbol");
// console.log(typeof sym1); // "symbol"

// f. bigint

var bigIntVar = 9007199254740991n;
// console.log(typeof bigIntVar); // "bigint"



//--------------------------------------------------------------
// 2. object / complex types
//--------------------------------------------------------------
/*
    what is object?
    -----------------

    -> data / information / properties / attributes -> State
    -> actions / function / method -> Behavior
    -> address in memory -> Identity

    object = { state + behavior + identity }

    How to create object in javascript?
    ------------------------------------

    2 steps:
    -> dynamic memory allocation => 'new' keyword
    -> object initialization / object construction => constructor function

    syntax:
    ----------------
    var objRefVar = new ConstructorFunction(arguments);
    
    example:
    ----------------
    var person1 = new Person("Alice", 30);
    


*/

//It is a blueprint for creating objects.


// way-1: using function constructor (pre-ES6)
// function Person(name, age) {
//     // state / properties / attributes
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function() {
//     console.log(`My name is ${this.name}`);
// };
// Person.prototype.sayAge = function() {
//     console.log(`I am ${this.age} years old`);
// };

// way-2: using class syntax (ES6 and later)

class Person {
    // constructor function
    constructor(name, age) {
        // state / properties / attributes
        this.name = name;
        this.age = age;
    }
    // behavior / methods
    sayName() {
        console.log(`My name is ${this.name}`);
    }

    sayAge() {
        console.log(`I am ${this.age} years old`);
    }
}

// console.log(typeof Person); // "function"

var p1= new Person("Alice", 30);
var p2 = new Person("Bob", 25);


// important notes about objects in javascript
// --------------------------------------------------

// fact 1: by default, javascript objects are extensible
// i.e we can add new properties and methods to an existing object

// p1.gender = "female";
// p1.sayGender = function() {
//     console.log(`I am a ${this.gender}`);
// };

// fact 2: javascript objects are configurable
// i.e we can delete existing properties and methods from an object

// delete p2.age;

// fact 3: javascript objects are mutable
// i.e we can change the values of existing properties of an object

// p1.age = 31;

// Can we restrict these default behaviors of javascript objects?
// Yes, we can use Object.preventExtensions(), Object.seal(), Object.freeze() methods 
// to restrict these behaviors.

// Example:


// Object.preventExtensions(p1);
// Object.seal(p1);
// Object.freeze(p1);

// console.log(Object.isExtensible(p1)); 
// console.log(Object.isSealed(p1)); 
// console.log(Object.isFrozen(p1));

// p1.city = "New York"; // trying to add new property - error in strict mode
// console.log(p1); // city property won't be added
// delete p1.name; // trying to delete existing property - error in strict mode
// p1.age = 32; // trying to modify existing property - error in strict mode


// how to access object properties and methods?
// --------------------------------------------------

// dot notation
// p1.sayName();
// p2.sayAge();

// bracket notation
// p1['sayName']();
// p2['sayAge']();

// --------------------------------------------------
// javascript built-in object types
// --------------------------------------------------

// a. Object
// b. Array
// c. Function
// d. Date
// e. RegExp
// f. Map
// g. Set
// h. WeakMap
// i. WeakSet
// .....

// Literal ways to create objects of built-in object types
//--------------------------------------------------

// Example: a. Object
var trainer = new Object(); // traditional way
trainer.name = "Nag";
trainer.age = 42;
trainer.doTeach = function() {
    console.log("teaching...");
}

// or

var trainer={
    name: "Nag",
    age: 42,
    doTeach: function() {
        console.log("teaching...");
    }
} // object literal way


// Example: b. Array
var fruits = new Array("Apple", "Banana", "Mango"); // traditional way

// or

var fruits = ["Apple", "Banana", "Mango"]; // array literal way

// Example: c. RegExp
var aadharPattern = new RegExp("\\d{4}-\\d{4}-\\d{4}"); // traditional way
var isAadharValid = aadharPattern.test("1234-578-9123");
console.log("isAadharValid:", isAadharValid);

// or

var aadharPattern = /\d{4}-\d{4}-\d{4}/; // regex literal way
var isAadharValid = aadharPattern.test("1234-5678-9123");
console.log("isAadharValid:", isAadharValid);