
// from es6 onwards, we can create classes using the 'class' keyword

class Person {
    static companyName = "Tech Corp";
    address="Universe";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    sayAge() {
        console.log(`I am ${this.age} years old`);
    }
}

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    sayPosition() {
        console.log(`I work as a ${this.position} at ${Person.companyName}`);
    }
}

const emp1 = new Employee("Alice", 30, "Developer");
emp1.sayName(); // My name is Alice
emp1.sayAge();  // I am 30 years old
emp1.sayPosition(); // I work as a Developer at Tech Corp

class Manager extends Employee {
    constructor(name, age, position, department) {
        super(name, age, position);
        this.department = department;
    }
    sayDepartment() {
        console.log(`I manage the ${this.department} department`);
    }
}