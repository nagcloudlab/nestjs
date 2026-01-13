


// In javascript/python, function first-class citizens


// First Class Functions 

        // - A function can be stored in a variable or value
        // - A parameter of a function can be a function
        // - The return value of a function can be a function
        

// Example 1: Function stored in a variable


// function greet(name){
//     console.log("Hello " + name)
// }
// const greetVar = greet
// greetVar("John")

// Example 2.1: Function as a parameter

// function greet(name, f){
//     console.log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸")
//     if(f){
//         f(name)
//     }else{
//         console.log("Hello " + name)
//     }
//     console.log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸")
// }
// greet("Alice")

//------------------
// Tamil Module
//------------------
// const tnGreet = function(name){
//     console.log("வணக்கம் " + name + "!")
// }
// greet("riya", tnGreet)

// // Example 2.2: Function as a parameter (Anonymous Function)

// let numbers=[1,3,5,7,9,2,4,6,8,10]
// console.log("Before Sort: ", numbers)
// let ascCompareFn = function(a,b){
//     if(a<b) return -1
//     else if(a>b) return 1
//     else return 0
// }
// let descCompareFn = function(a,b){
//     if(a>b) return -1
//     else if(a<b) return 1
//     else return 0
// }
// numbers.sort(ascCompareFn);
// console.log("After Sort (Asc): ", numbers)


//------------------
// Example 3: Function as a return value
//------------------

// function teach(){
//     console.log("Teaching JS Function Programming...")
//     let learn = function(){
//         console.log("Learning JS Function Programming...")
//     }
//     console.log("Teaching Ended.")
//     return learn
// }

// let learnFn = teach()
// learnFn()
// // Or simply
// teach()()


//--------------------------------------------------
// Exercise
//--------------------------------------------------

// dev-1 ( senior )

function hello(){
    console.log("Hello")
}
function hi(){
    console.log("Hi")
}
function hey(){
    console.log("Hey")
}


//--------------------------------------------------
// design issues
//--------------------------------------------------

// 1. code coupling ( mixing concerns )
// 2. code duplication ( repeated code )

// solution: higher order function ( HOF )
function withEmoji(f,emoji){
    return function(){
        f();
        console.log(emoji)
    }
}

//--------------------------------------------------

hello();
const hello_with_emoji = withEmoji(hello,"😊");
hello_with_emoji();

hi();
const hi_with_emoji = withEmoji(hi,"😉");
hi_with_emoji();

hey();
const hey_with_emoji = withEmoji(hey,"😎");
hey_with_emoji();

//--------------------------------------------------


// How to represet data in javascript? -> data-types
// How to process data in javascript? -> functions