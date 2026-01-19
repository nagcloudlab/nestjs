

// before es6
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

// es6 class syntax
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Example usage:
const john = new PersonClass("John", 30);
john.greet(); // Output: Hello, my name is John