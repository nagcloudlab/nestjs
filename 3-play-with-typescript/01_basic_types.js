// primitive types in typescript
//1. 'any' type
let a = 10;
a = 'hello';
a = true;
// imp-note : try to avoid using 'any' type as much as possible, it defeats the purpose of using typescript
//2. 'unknown' type
let b = 10;
b = 'hello';
b = true;
// imp-note : 'unknown' type is similar to 'any' type but it is safer than 'any' type, it does not allow you to perform any operations on it without first checking its type
// example of 'unknown' type
let c = 10;
if (typeof c === 'number') {
    console.log(c + 10); // this is safe because we have checked the type of 'c' before performing any operations on it
}
// 3. number type
let d = 10;
d = 20;
// d = 'hello'; // this will give an error because 'd' is of type 'number'
// 4. string type
let e = 'hello';
e = 'world';
// e = 10; // this will give an error because 'e' is of type 'string'
// 5. boolean type
let f = true;
f = false;
// f = 10; // this will give an error because 'f' is of type 'boolean'
// 6. null and undefined types
let g = null;
let h = undefined;
// imp-note : in typescript, 'null' and 'undefined' are considered as separate types, they are not assignable to each other
// example of 'null' and 'undefined' types
let i = null; // this variable can be either a string or null
i = 'hello'; // this is valid
// i = undefined; // this will give an error because 'i' cannot be assigned to 'undefined'
// 7. void type
function sayHello() {
    console.log('Hello');
}
// imp-note : 'void' type is used to indicate that a function does not return anything, it is also used to indicate that a variable does not have any value
// example of 'void' type
let j = undefined; // this variable can only be assigned to 'undefined'
// j = null; // this will give an error because 'j' cannot be assigned to 'null'
// 8. never type
function throwError(message) {
    throw new Error(message);
}
// imp-note : 'never' type is used to indicate that a function never returns, it is also used to indicate that a variable can never have any value
// example of 'never' type
let k; // this variable can never be assigned to any value
// k = 10; // this will give an error because 'k' cannot be assigned to any value
// k = null; // this will give an error because 'k' cannot be assigned to any value
// k = undefined; // this will give an error because 'k' cannot be assigned to any value
// 9. object type
let l = { name: 'John', age: 30 };
// l = 10; // this will give an error because 'l' is of type 'object'
// l = 'hello'; // this will give an error because 'l' is of type 'object'
// imp-note : 'object' type is used to indicate that a variable is an object, it can be any object, it does not have to be a specific type of object
// example of 'object' type
let m = { name: 'John', age: 30 }; // this variable can only be assigned to an object with the specified properties and types
// m = { name: 'Jane', age: 25 }; // this is valid
// m = { name: 'Jane' }; // this will give an error because the 'age' property is missing
// m = { age: 25 }; // this will give an error because the 'name' property is missing
// m = { name: 'Jane', age: '25' }; // this will give an error because the 'age' property is of type 'number' and cannot be assigned to a string    
// 10. array type
let n = [1, 2, 3, 4, 5];
// n = ['hello', 'world']; // this will give an error because 'n' is of type 'number[]' and cannot be assigned to an array of strings
// imp-note : 'array' type is used to indicate that a variable is an array, it can be an array of any type, it does not have to be a specific type of array
// example of 'array' type
let o = ['hello', 'world']; // this variable can only be assigned to an array of strings
// o = [1, 2, 3]; // this will give an error because 'o' is of type 'string[]' and cannot be assigned to an array of numbers
// o = ['hello', 2]; // this will give an error because 'o' is of type 'string[]' and cannot be assigned to an array that contains both strings and numbers
// 11. tuple type
let p = ['hello', 30];
// p = [30, 'hello']; // this will give an error because the order of the types in the tuple is not correct
// p = ['hello', 'world']; // this will give an error because the second element of the tuple is of type 'number' and cannot be assigned to a string
// imp-note : 'tuple' type is used to indicate that a variable is a tuple, it is an array with a fixed number of elements and each element can have a different type
// example of 'tuple' type
let q = ['hello', 30, true]; // this variable can only be assigned to a tuple with the specified types and order
// q = [30, 'hello', true]; // this will give an error because the order of the types in the tuple is not correct
// q = ['hello', 30]; // this will give an error because the third element of the tuple is missing
// q = ['hello', 30, 'true']; // this will give an error because the third element of the tuple is of type 'boolean' and cannot be assigned to a string
// 12. enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let r = Color.Red;
// r = 0; // this is valid because the enum values are assigned to numbers starting from 0
// r = 1; // this is valid because the enum values are assigned to numbers starting from 0
// r = 2; // this is valid because the enum values are assigned to numbers starting from 0
// r = 3; // this will give an error because there is no enum value assigned to 3
// imp-note : 'enum' type is used to indicate that a variable can only have a set of predefined values, it is a way to define a set of named constants
// example of 'enum' type
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let s = Direction.Up;
// s = Direction.Down; // this is valid because 's' can be assigned to any value of the 'Direction' enum
// s = Direction.Left; // this is valid because 's' can be assigned to any value of the 'Direction' enum
// s = Direction.Right; // this is valid because 's' can be assigned to any value of the 'Direction' enum
// s = 0; // this is valid because the enum values are assigned to numbers starting from 0
// s = 1; // this is valid because the enum values are assigned to numbers starting from 0
// s = 2; // this is valid because the enum values are assigned to numbers starting from 0
// s = 3; // this is valid because the enum values are assigned to numbers starting from 0
// s = 4; // this will give an error because there is no enum value assigned to 4
// 13. union type
let t = 'hello';
t = 10;
// t = true; // this will give an error because 't' can only be assigned to a string or a number
// imp-note : 'union' type is used to indicate that a variable can have more than one type, it is a way to define a variable that can be of multiple types
// example of 'union' type
let u = 'hello'; // this variable can be assigned to a string, a number, or a boolean
u = 10; // this is valid
u = true; // this is valid
let v = { name: 'John', age: 30 };
let w = { name: 'John', age: 30 }; // this variable can only be assigned to an object that has the properties and types of both 'D' and 'E'
let x = { name: 'John', age: 30 };
let y = '12345'; // this variable can be assigned to a string or a number
y = 12345; // this is valid
// y = true; // this will give an error because 'y' can only be assigned to a string or a number    
// 16. literal types
// example of 'literal' type
let z = 'hello';
z = 'world'; // this is valid
// z = 'hi'; // this will give an error because 'z' can only be assigned to 'hello' or 'world'
// imp-note : 'literal' type is used to indicate that a variable can only have a specific value, it is a way to define a variable that can only be assigned to a specific value or set of values
// example of 'literal' type
let color = 'red'; // this variable can only be assigned to 'red', 'green', or 'blue'
color = 'green'; // this is valid
color = 'blue'; // this is valid
export {};
// color = 'yellow'; // this will give an error because 'color' can only be assigned to 'red', 'green', or 'blue'   
//# sourceMappingURL=01_basic_types.js.map