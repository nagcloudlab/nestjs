

// in javascript, there are several built-in data structures, including Arrays, Objects, Sets, and Maps.
// Below are examples of how to use each of these data structures.

//-------------------------------------------
// 1. Arrays aka Lists
//-------------------------------------------
// Notes:
// - types are dynamic
// - size is dynamic

// how to creayte an array
//-------------------------------
// let arr1=new Array(); // empty array
// // or
// let arr2=[]; // empty array

//-------------------------------

let arr=[]

// adding elements to an array

// mutable methods
arr.push(10) // adds 10 to the end of the array
arr.push(20) // adds 20 to the end of the array
arr.unshift(5) // adds 5 to the start of the array

// immutable methods
new_array=arr.concat(30) // adds 30 to the end of the array

console.log(arr) // [5, 10, 20]
console.log(new_array) // [5, 10, 20, 30]

// accessing elements in an array
console.log(arr[0]) // 5
console.log(arr[1]) // 10
console.log(arr[2]) // 20
console.log(arr[3]) // undefined

// removing elements from an array

// mutable methods
arr.pop() // removes the last element (20)
arr.shift() // removes the first element (5)

// immutable methods
let numbers=[1,2,3,4,5]
let new_numbers=numbers.slice(1,4) 
console.log(numbers) // [1,2,3,4,5]
console.log(new_numbers) // [2,3,4]

//-------------------------------------------
// Higher Order Functions on Arrays
//-------------------------------------------


// Filter
let nums=[1,2,3,4,5]
let isOdd=function(n){
    return n%2!==0
}
const oddNums=nums.filter(isOdd)
console.log(oddNums) // [1,3,5]

// Map
let square=function(n){
    return n*n
}
const squaredNums=nums.map(square)
console.log(squaredNums) // [1,4,9,16,25]

// Reduce
let sum=function(accumulator, currentValue){
    return accumulator + currentValue
}

const total=nums.reduce(sum, 0)
// accumulator -> 0, currentValue -> 1 =>1
// accumulator -> 1, currentValue -> 2 =>3
// accumulator -> 3, currentValue -> 3 =>6
// accumulator -> 6, currentValue -> 4 =>10
// accumulator -> 10, currentValue -> 5 =>15

console.log(total) // 15

//-------------------------------------------