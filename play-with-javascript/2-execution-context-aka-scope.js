
/*

execution-context aka scope
------------------------------

When we invoke a function, 
a new memory/stack-frame/execution-context/scope is created for that function.
holding all the variables defined inside that function.


scope has 2 phases:

1. creation-phase / push
    -> all variable(s) declared with 'var' keyword, 
       always get hoisted to the top of their scope with an initial value of 'undefined'
2. execution-phase / pop
    -> code is executed line by line



important point:
-> by-default, js-engine creates a global execution-context/scope

*/

//-----------------------------------------

// console.log(v); // undefined
// var v=10;
// console.log(v); // 10

// var v=10;
// function f1(){
//     console.log(v)
//     var v=11;
// }
// f1(); // f1-scope. <- global-scope

//-----------------------------------------

// var v=10;
// function f1(){
//     function f2(){
//         console.log(v)
//     }
//     f2() // f2-scope <-- f1-scope
//     var v=11;
// }
// f1(); // f1-scope <- global-scope

//-----------------------------------------

// var v=10;
// var v=11; // we can re-declarae
// console.log(v)

//-----------------------------------------

// var v=10;
// if(true){
//     var v=11 // No block-scope to variable, only function-scope
// }
// console.log(v)

//-----------------------------------------

// problems with 'var' keyword

// 1. variable re-declaration is allowed
// 2. no block-scope, only function-scope
// 3. variables are hoisted with 'undefined' value

//-----------------------------------------

// solution: 'let' and 'const' keywords from ES6 version

//-----------------------------------------

// 1. variable re-declaration is not allowed
// let v=10;
// let v=11; // SyntaxError: Identifier 'v' has already been declared

//-----------------------------------------

// 2. block-scope is available
// let v=10;
// if(true){
//     let v=11 // block-scope
//     console.log(v) // 11
// }
// console.log(v) // 10

//-----------------------------------------

// 3. variables are not hoisted with 'undefined' value
// console.log(v); // ReferenceError: Cannot access 'v' before initialization
// let v=10;
// console.log(v); // 10

//-----------------------------------------

// let - mutable reference
// let v=10;
v=11; // allowed
// console.log(v); // 11

//-----------------------------------------

// const - immutable reference
// const c=10;
// c=11; // TypeError: Assignment to constant variable.
// console.log(c); // 10

//-----------------------------------------

const trainer={
    name:'Nag',
}
trainer.name='New Nag'; // allowed
// trainer={}; // TypeError: Assignment to constant variable.
// console.log(trainer); // {name: 'New Nag'}

//-----------------------------------------

// Summary:
// -------

// let -> for mutable reference with block-scope
// const -> for immutable reference with block-scope
// var -> avoid using it

//-----------------------------------------

// Quiz Time

let message="M1";

function outer(){
    let message="M2";
    function inner(){
        console.log(message)
        let message="M3";
    }
    inner();
}
outer();

//---------------------------------------