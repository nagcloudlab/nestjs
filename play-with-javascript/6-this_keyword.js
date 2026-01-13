"use strict";

// 'this' keyword
// ==> object who run current execution-context/scope


function add(a, b) {
    return a + b;
}


function sayName(){
    console.log(this);
    console.log("im " + this.name);
}

// sayName();

// function binding
// 2 types
// 1. static function binding
// 2. dynamic function binding

// 1. static function binding
let p1={
    name: "Riya",
    sayName: sayName // static binding
}
p1.sayName(); // scope of sayName is bound to p1 object

let p2={
    name:"Diya",
    sayName: sayName // static binding
}
p2.sayName(); // scope of sayName is bound to p2 object


// 2. dynamic function binding
let p3={
    name:"Nag"
}
Object.preventExtensions(p3); // prevent adding new properties to p3 object

// way-1: call
sayName.call(p3) // dynamic binding of sayName to p3 object

// way-2: apply
sayName.apply(p3) // dynamic binding of sayName to p3 object

// way-3: bind ( lazy function binding)
let newFn = sayName.bind(p3); // dynamic binding of sayName to p3 object
newFn();
newFn();
newFn();


//--------------------------------------------
// Vendor ( Procenter)
//--------------------------------------------

let trainer={
    name:"Nag",
}
Object.preventExtensions(trainer);


//--------------------------------------------
// Npci
//--------------------------------------------

function doTraining(subject, duration,mode){
    console.log(`
        the trainer ${this.name} is doing ${subject} training for ${duration} hrs in ${mode} mode
        `)
}

//--------------------------------------------

// doTraining("JS",8,"online"); // oops! who is trainer here?
// doTraining.call(trainer,"JS",8,"online");
// doTraining.apply(trainer,["JS",8,"online"]);

let newF=doTraining.bind(trainer,"JS",8);
newF("online");
newF("offline");
newF("hybrid");

//--------------------------------------------

function Employee(name,experience,salary){
    this.name=name;
    this.experience=experience;
    this.salary=salary;
}

let e1=new Employee("Nag",10,10000); // 'this' -> newly created object

//--------------------------------------------

let p={
    name:"Riya",
    sayName: function(){
        console.log(this.name);
    }
}
p.sayName();

//--------------------------------------------

// Quis
// let myName="Global"
// let e={
//     myName:"Diya",
//     sayName:function(myName="Unknown"){
//         // let myName="Local"
//         console.log("im "+myName)
//         console.log("im "+this.myName)
//     }
// }
// e.sayName();

//--------------------------------------------

let trainer1={
    name:"Nag",
    doTeach:function(sub){
        console.log(this.name + " teaching " + sub);
        let self=this;
        function learn(){
            console.log(this.name + " learning " + sub+" from the trainer "+self.name);
        }
        return learn;
    }
}

let learnFn=trainer1.doTeach("JS");
// learnFn(); // oops! who is 'this' here?

let emp1={
    name:"bless"
}
learnFn.call(emp1);

//--------------------------------------------

let trainer2={
    name:"Kannan"
}
let javaLearnFn=trainer1.doTeach.call(trainer2,"Java");
let emp2={
    name:"Malar"
}
javaLearnFn.call(emp2);


//--------------------------------------------
// this
//--------------------------------------------
// constructor function ==> new object
// static function binding ==> object.method()
// dynamic function binding ==> function.call/apply/bind(object)
//--------------------------------------------