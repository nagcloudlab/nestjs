"use strict";

// how to create function?
// 2 ways
// 1. function declaration
// 2. function expression

// function declaration
function add(a, b) {
  return a + b;
}

// function expression
const subtract = function (a, b) {
  return a - b;
};

//-----------------------------------------------------

// ES6 introduced arrow functions
// arrow function is a shorter syntax for function expression

const multiply = (a, b) => {
  return a * b;
}

// if there is only one parameter, we can omit the parentheses
// if there is one expression in the function body, we can omit the curly braces and the return keyword


// why arrow functions?
// 1. shorter syntax
// 2. lexical 'this' binding

//-----------------------------------------------------

// 1. shorter syntax

const numbers = [1, 3, 5, 7, 9,2,4,6,8,10];
numbers.sort((a,b)=>b-a);
// console.log(numbers); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

//-----------------------------------------------------

// 2. lexical 'this' binding

const trainer1={
    name:'Nag',
    doTeach:function(){
        console.log(this.name+" teaching JS");
        const askQues=(ques)=>{
            console.log(this.name+" answering "+ques);
        }
        console.log(this.name+" teaching JS Ends");
        return askQues;
    }
}

let askQues=trainer1.doTeach(); // Nag teaching JS
askQues("Q1")

const trainer2={
    name:'Ria'
}
askQues.call(trainer2,"Q2") 
//-----------------------------------------------------