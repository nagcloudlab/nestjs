

let array = [1, 2, 3, 4, 5,1,2,3];

// data structure that only keeps unique values
let uniqueValues = new Set(array);

console.log(uniqueValues); // Output: Set { 1, 2, 3, 4, 5 }

// Adding a new value
uniqueValues.add(6);
console.log(uniqueValues); // Output: Set { 1, 2, 3, 4, 5, 6 }

// Checking if a value exists
console.log(uniqueValues.has(3)); // Output: true
console.log(uniqueValues.has(10)); // Output: false

// Removing a value
uniqueValues.delete(2);
console.log(uniqueValues); // Output: Set { 1, 3, 4, 5, 6 }


//--------------

// Map example: key-value pairs
let userRoles = new Map();

// Adding key-value pairs
userRoles.set('Alice', 'Admin');
userRoles.set('Bob', 'Editor');
userRoles.set('Charlie', 'Viewer');

console.log(userRoles); // Output: Map { 'Alice' => 'Admin', 'Bob' => 'Editor', 'Charlie' => 'Viewer' }

// Retrieving a value by key
console.log(userRoles.get('Bob')); // Output: Editor

// Checking if a key exists
console.log(userRoles.has('Charlie')); // Output: true
console.log(userRoles.has('David')); // Output: false