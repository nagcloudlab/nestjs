

// oop in ts

// #1 simple class
class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const user1 = new User("Alice", 30);
user1.greet(); // Hello, my name is Alice and I am 30 years old.

// #2 inheritance
class Admin extends User {
    role: string;
    constructor(name: string, age: number, role: string) {
        super(name, age);
        this.role = role;
    }
    displayRole() {
        console.log(`I am an admin with the role of ${this.role}.`);
    }
}
const admin1 = new Admin("Bob", 40, "Super Admin");
admin1.greet(); // Hello, my name is Bob and I am 40 years old.
admin1.displayRole(); // I am an admin with the role of Super Admin.

// #3 access modifiers
class Employee {
    private salary: number;
    protected department: string;
    public name: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    getSalary() {
        return this.salary;
    }
}
const employee1 = new Employee("Charlie", 50000, "IT");
console.log(employee1.name); // Charlie
console.log(employee1.getSalary()); // 50000
// console.log(employee1.salary); // Error: Property 'salary' is private and only accessible within class 'Employee'.
// console.log(employee1.department); // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.

class Manager extends Employee {
    constructor(name: string, salary: number, department: string) {
        super(name, salary, department);
    }
    displayDepartment() {
        console.log(`I am a manager in the ${this.department} department.`);
    }
}
const manager1 = new Manager("Dave", 70000, "HR");
console.log(manager1.name); // Dave
manager1.displayDepartment(); // I am a manager in the HR department.


// #4 constructor with instance properties

class Product {
    // name: string;
    // price: number;
    // constructor(name: string, price: number) {
    //     this.name = name;
    //     this.price = price;
    // }
    // or 
    constructor(public name: string, public price: number) { }
    displayInfo() {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }
}

const product1 = new Product("Laptop", 999);
product1.displayInfo(); // Product: Laptop, Price: $999

// #5 static properties and methods

class MathUtils {
    static PI: number = 3.14159;

    static calculateCircleArea(radius: number): number {
        return MathUtils.PI * radius * radius;
    }
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.calculateCircleArea(5)); // 78.53975

// #6 abstract classes and methods

abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    area(): number {
        return MathUtils.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * MathUtils.PI * this.radius;
    }
}

const circle1 = new Circle(5);
console.log(circle1.area()); // 78.53975
console.log(circle1.perimeter()); // 31.4159



//---------------------
// why we need interfaces in oop?
//-------------------------------


//------------------------
// Nag
//------------------------

interface Wheel {
    rotate(): void;
}


//---------------------
// bless 
//---------------------

class MRFWheel /*implements Wheel*/ {
    constructor() { }
    rotate() {
        console.log("MRF wheel is rotating...");
    }
}


//---------------------
//Sukaina
//---------------------

class ApolloWheel {
    constructor() { }
    rotate() {
        console.log("Apollo wheel is rotating...");
    }
}

//--------------
// Jeffi
//--------------

class Car {
    constructor(private wheel: Wheel) { }
    setWheel(wheel: Wheel) {
        this.wheel = wheel;
    }
    move() {
        this.wheel.rotate();
        console.log("Car is moving...");
    }
}


//---------------------

let mrfWheel = new MRFWheel();
let car1 = new Car(mrfWheel);
car1.move(); // Car is moving...

// after some time we want to change the wheel brand to Apollo
let apolloWheel = new ApolloWheel();
car1.setWheel(apolloWheel);
car1.move(); // Car is moving...


//---------------------
