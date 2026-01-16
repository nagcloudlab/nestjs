

// destructuring => extracting values from arrays or objects and assigning them to variables


let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// traditional way
let name1 = person.name;
let age1 = person.age;
let city1 = person.city;

console.log(name1); // Alice
console.log(age1);  // 30
console.log(city1); // New York


// destructuring way
let {name:name2, age:age2,city:city2} = person;

console.log(name2); // Alice
console.log(age2);  // 30
console.log(city2); // New York

let {name:name,age:age,city:city} = person;
// or simply
// let {name, age, city} = person;

console.log(name); // Alice
console.log(age);  // 30
console.log(city); // New York

// destructuring arrays
let colors = ["red", "green", "blue"];

// traditional way
let color1 = colors[0];
let color2 = colors[1];
let color3 = colors[2];

console.log(color1); // red
console.log(color2); // green
console.log(color3); // blue

// destructuring way
let [c1, c2, c3] = colors;

console.log(c1); // red
console.log(c2); // green
console.log(c3); // blue

// skipping values
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // red
console.log(thirdColor); // blue

// default values
let [col1, col2, col3, col4="yellow"] = colors; 
console.log(col4); // yellow

// nested destructuring
let student = {
    name: "Bob",
    scores: {
        math: 90,
        english: 85
    }
};

let {name:studentName, scores: {math:mathScore, english:englishScore}} = student;

console.log(studentName); // Bob
console.log(mathScore);   // 90
console.log(englishScore);// 85

// destructuring in function parameters


function Button({color, size}) {
    return `
    <button style="background-color: ${color}; font-size: ${size}px;">Click Me</button>
    `;
}

const btn=Button({color: "blue", size: 16});