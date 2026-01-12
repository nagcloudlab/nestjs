
/*


in javascript, 

- a function is a block of code designed to perform a particular task.
- a function is an object in javascript.



we can create function in 2 ways:

1. Function Declaration
2. Function Expression

*/

//-----------------------------------
// 1. Function Declaration
//-----------------------------------

// note : a function declaration is hoisted( bubbled to the top of its scope )

let result=add(1,2); // we can call function before its declaration
// console.log(result)

function add(x, y) {
    let sum = x + y;
    return sum;
}

let result2=add(5,7); // we can call function after its declaration
// console.log(result2)

//-----------------------------------
// 2. Function Expression
//-----------------------------------


// note : a function expression is not hoisted

// let result3=subtract(10,4); // Uncaught ReferenceError: Cannot access 'subtract' before initialization
// console.log(result3)

let subtract=function(x, y) {
    let diff = x - y;
    return diff;
}

let result3=subtract(10,4);
// console.log(result3) // 6


//. when to use function declaration and when to use function expression?
//. if you want to use function before its declaration then use function declaration
//. otherwise you can use either function declaration or function expression based on your preference

//-----------------------------------
// Summary
//-----------------------------------

// 1. A function is a block of code designed to perform a particular task.
// 2. A function is an object in javascript.
// 3. We can create function in 2 ways: Function Declaration and Function Expression.
// 4. A function declaration is hoisted, while a function expression is not hoisted.


//------------------------------------------
// function parameters
//------------------------------------------

// imp-note : every function has one implicit parameter called 'arguments' which is an array-like object
// that contains all the arguments passed to the function.

function f1(x,y){
    console.log("x:",x);
    console.log("y:",y);
    console.log("arguments:",arguments);
    console.log("arguments.length:",arguments.length);
    for(let i=0;i<arguments.length;i++){
        console.log(`arguments[${i}]:`,arguments[i]);
    }    
    console.log("-------------------");
}

// f1(); // x: undefined, y: undefined
// f1(10); // x: 10, y: undefined
// f1(10,20); // x: 10, y: 20
// f1(10,20,30);

//--------------------------
// default parameters ( from Es6)
//--------------------------

function search(query, page=1, limit=10){
    console.log("query:",query);
    console.log("page:",page);
    console.log("limit:",limit);
    console.log("-------------------");
}

// search("javascript"); 
// search("javascript",2);
// search("javascript",3,30);

//--------------------------
// Function rest parameters ( from Es6)
//--------------------------

function sumAll(inp1,inp2){
    let sum=inp1+inp2;
    return sum;
}

let r=sumAll(1,2); // 3
// console.log(r);

// but what if we want to sum more than 2 numbers?

function sumAllRest(...numbers){ 
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}
let r2=sumAllRest(1,2,3,4,5); // 15
// console.log(r2);

let r3=sumAllRest(10,20); // 30
// console.log(r3);

let r4=sumAllRest(); // 0
// console.log(r4);

// Parctocal example of rest parameters

function createUser(name, age, ...skills){
    return {
        name:name,
        age:age,
        skills:skills
    };
}

let user1=createUser("Alice",25,"JavaScript","HTML","CSS");
// console.log(user1);

let user2=createUser("Bob",30,"Python","Django");
// console.log(user2);

let user3=createUser("Charlie",28);
// console.log(user3);


//------------------------------------------
// Function Closure
//------------------------------------------

// definition: A closure is a function that retains access to its parent's scope,
// even when the function is executed outside that scope.

function teach(subject){
    console.log("teaching ",subject);
    notes=subject+" notes";
    function learn(){
        console.log("learning started");
        console.log("learnng with notes : ",notes)
        console.log("learning ended");
    }   
    //learn(); // learn-scope <-- teach-scope
    console.log("teaching ended for ",subject);
    return learn;
}



// let learnFunc=teach("JavaScript"); // teach-scope
// learnFunc(); // learn-scope <-- teach-scope
// learnFunc();
// learnFunc();


//  why we need closures?
// 1. Data Privacy
// 2. Function Factories
// 3. Maintaining State in Asynchronous Operations
// 4. Module Pattern


//------------------------------------------
// 1. Data Privacy
//------------------------------------------

function init(){
    let count=0; // private variable
    // public methods
    function increment(){
        count++;
    }
    function getCount(){
        return count;
    }
    return {
        increment:increment,
        getCount:getCount
    }
}

let counter1=init();
let counter2=init();

//------------------------------------------
// 4. Module Pattern e.g IIFE ( Immediately Invoked Function Expression ) aka self-executing function
//------------------------------------------


const $={}; // creating a namespace

(function foo(){
    
    // private variables and functions
    let privateVar="I am private";
    function privateFunc(){
        console.log("Accessing private variable:",privateVar);
    }

    let count=0; // private variable
    // public methods
    function increment(){
        count++;
    }
    function getCount(){
        return count;
    }

    // exposing public methods
    $.increment=increment; // export {increment: increment}
    $.getCount=getCount;


})()

$.increment();
$.increment();
let c=$.getCount();
// console.log("Count from module pattern:",c); // 2

// privateVar and privateFunc are not accessible from outside
// console.log($.privateVar); // undefined
// $.privateFunc(); // Uncaught TypeError: $.privateFunc is not a function



//-----------------------------------
// DOM api
//-----------------------------------

let button=document.getElementById("my-button");
button.addEventListener("click",function(){
    console.log("Button clicked!");
    $.increment();
    let c=$.getCount();
    console.log("Current Count:",c);
})

//----------------------------------------