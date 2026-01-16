

// before es6

var myName = "John";
var age = 30;

var greeting = "Hello, my name is " + myName + " and I am " + age + " years old.";

console.log(greeting);

// using template strings (es6)

var myName = "John";
var age = 30;

var greeting = `Hello, my name is ${myName} and I am ${age} years old.`;

console.log(greeting);

// multi-line string using template strings

var multiLineString = `This is a string
that spans multiple
lines using template strings.`;

console.log(multiLineString);

// expression inside template strings

var a = 5;
var b = 10;

var result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);


// html template using template strings

var title = "Welcome to My Website";
var content = "This is a simple website created using template strings.";

var htmlTemplate = `
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
      <p>${content}</p>
    </body>
  </html>
`;

console.log(htmlTemplate);