

// before es6

function multiply(a, b) {
    a = (typeof a !== 'undefined') ? a : 1;
    b = (typeof b !== 'undefined') ? b : 1;
    return a * b;
}


// es6

function multiply(a = 1, b = 1) {
    return a * b;
}

console.log(multiply());      // 1
console.log(multiply(5));     // 5
console.log(multiply(5, 2));  // 10


// another example

function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet());          // Hello, Guest!
console.log(greet('Alice'));   // Hello, Alice!

// using expressions as default values

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function generateId(id = getRandomNumber()) {
    return id;
}

console.log(generateId());     // Random number
console.log(generateId(42));   // 42


// default parameters can also depend on previous parameters

function createUser(name, role = 'User', greeting = `Welcome, ${name}! You are logged in as a ${role}.`) {
    return greeting;
}

console.log(createUser('Bob'));                     // Welcome, Bob! You are logged in as a User.
console.log(createUser('Alice', 'Admin'));          // Welcome, Alice! You are logged in as a Admin.
console.log(createUser('Charlie', 'Moderator', 'Hi Charlie! You have moderator privileges.')); // Hi Charlie! You have moderator privileges.    


// rest parameters
function sum(...numbers) {
    return numbers.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
}

console.log(sum(1, 2, 3));          // 6
console.log(sum(10, 20, 30, 40));   // 100
console.log(sum());                 // 0