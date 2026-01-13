"use strict";

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 *                           JAVASCRIPT DATA TYPES
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * JavaScript is a dynamically typed language, meaning variables can hold
 * values of any type without explicit type declarations.
 *
 * Data types are categorized into two main groups:
 *
 *   1. PRIMITIVE TYPES (Immutable, stored by value)
 *      ├── undefined  - Variable declared but not assigned
 *      ├── null       - Intentional absence of value
 *      ├── string     - Textual data
 *      ├── number     - Numeric data (integers & floats)
 *      ├── boolean    - Logical true/false
 *      ├── bigint     - Large integers beyond Number limits
 *      └── symbol     - Unique identifiers (ES6)
 *
 *   2. REFERENCE TYPES (Mutable, stored by reference)
 *      ├── Object     - Key-value collections
 *      ├── Array      - Ordered collections
 *      ├── Function   - Callable objects
 *      ├── Date       - Date/time handling
 *      └── RegExp     - Pattern matching
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */

console.log("═".repeat(60));
console.log("           JAVASCRIPT DATA TYPES");
console.log("═".repeat(60));


// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                        PART 1: PRIMITIVE TYPES                              │
// └─────────────────────────────────────────────────────────────────────────────┘

console.log("\n▶ PRIMITIVE TYPES\n");

// ─────────────────────────────────────────────────────────────────────────────
// 1.1 UNDEFINED
// ─────────────────────────────────────────────────────────────────────────────
/**
 * undefined represents a variable that has been declared but not yet assigned.
 * It's JavaScript's way of saying "this exists, but has no value yet."
 */

var uninitializedVar;
console.log("Uninitialized variable:", uninitializedVar);        // undefined
console.log("Type:", typeof uninitializedVar);                   // "undefined"

// Common scenarios where undefined appears:
let obj = {};
console.log("Missing property:", obj.nonExistent);               // undefined

function noReturn() { /* no return statement */ }
console.log("Function with no return:", noReturn());             // undefined


// ─────────────────────────────────────────────────────────────────────────────
// 1.2 NULL
// ─────────────────────────────────────────────────────────────────────────────
/**
 * null represents an intentional absence of value.
 * Use null when you want to explicitly indicate "no value" or "empty".
 *
 * NOTE: typeof null returns "object" - this is a known JavaScript quirk/bug
 * that exists for historical reasons and backward compatibility.
 */

let emptyValue = null;
console.log("\nNull value:", emptyValue);                        // null
console.log("Type of null:", typeof emptyValue);                 // "object" (quirk!)

// Proper null check:
console.log("Is null?", emptyValue === null);                    // true


// ─────────────────────────────────────────────────────────────────────────────
// 1.3 STRING
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Strings represent textual data. They can be created using:
 *   - Single quotes: 'text'
 *   - Double quotes: "text"
 *   - Template literals: `text` (ES6) - supports interpolation & multi-line
 */

console.log("\n--- Strings ---");

// Basic string declarations (single and double quotes are equivalent)
var name = "Nag";
var company = 'Cognizant';

// String concatenation (traditional approach)
var dynamicString1 = "The trainer " + name + " is teaching at " + company;
console.log("Concatenation:", dynamicString1);

// Template literals / String interpolation (ES6) - PREFERRED
var dynamicString2 = `The trainer ${name} is teaching at ${company}`;
console.log("Interpolation:", dynamicString2);

// Expressions inside template literals
var resultString = `The sum of 1 and 2 is ${1 + 2}`;
console.log("With expression:", resultString);

// Multi-line strings with template literals
var multiLineString = `
    <div>
        <h1>${name}</h1>
        <h4>${company}</h4>
    </div>
`;
console.log("Multi-line HTML:", multiLineString);

// Useful string methods
console.log("Length:", name.length);                             // 3
console.log("Uppercase:", name.toUpperCase());                   // "NAG"
console.log("Includes:", company.includes("Cog"));               // true
console.log("Starts with:", company.startsWith("Cog"));          // true


// ─────────────────────────────────────────────────────────────────────────────
// 1.4 NUMBER
// ─────────────────────────────────────────────────────────────────────────────
/**
 * JavaScript has a single number type that handles both integers and
 * floating-point values. It uses 64-bit floating-point format (IEEE 754).
 *
 * Safe integer range: -(2^53 - 1) to (2^53 - 1)
 * Use BigInt for larger numbers.
 */

console.log("\n--- Numbers ---");

var count = 12;
var cost = 12.99;
var negative = -42;
var scientific = 2.5e6;                                          // 2,500,000

console.log("Integer:", count);
console.log("Float:", cost);
console.log("Scientific:", scientific);

// Special numeric values
console.log("Infinity:", 1 / 0);                                 // Infinity
console.log("Negative Infinity:", -1 / 0);                       // -Infinity
console.log("Not a Number:", "abc" / 2);                         // NaN

// Number validation
console.log("Is finite?", Number.isFinite(100));                 // true
console.log("Is NaN?", Number.isNaN(NaN));                       // true
console.log("Is integer?", Number.isInteger(12.0));              // true
console.log("Max safe integer:", Number.MAX_SAFE_INTEGER);       // 9007199254740991


// ─────────────────────────────────────────────────────────────────────────────
// 1.5 BOOLEAN
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Boolean represents logical values: true or false.
 *
 * IMPORTANT - Falsy Values (evaluate to false in boolean context):
 *   - false
 *   - 0, -0
 *   - "" (empty string)
 *   - null
 *   - undefined
 *   - NaN
 *
 * Everything else is truthy (including "0", "false", [], {})
 *
 * Reference: https://dorey.github.io/JavaScript-Equality-Table/
 */

console.log("\n--- Booleans ---");

var isFinished = false;
var isActive = true;

console.log("Boolean value:", isFinished);

// Demonstrating falsy values
console.log("\nFalsy value checks:");
console.log("Boolean(false):", Boolean(false));                  // false
console.log("Boolean(0):", Boolean(0));                          // false
console.log("Boolean(''):", Boolean(""));                        // false
console.log("Boolean(null):", Boolean(null));                    // false
console.log("Boolean(undefined):", Boolean(undefined));          // false
console.log("Boolean(NaN):", Boolean(NaN));                      // false

// Common gotchas - these are TRUTHY!
console.log("\nTruthy gotchas:");
console.log("Boolean('0'):", Boolean("0"));                      // true (non-empty string)
console.log("Boolean('false'):", Boolean("false"));              // true (non-empty string)
console.log("Boolean([]):", Boolean([]));                        // true (object)
console.log("Boolean({}):", Boolean({}));                        // true (object)


// ─────────────────────────────────────────────────────────────────────────────
// 1.6 BIGINT (ES2020)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * BigInt handles integers larger than Number.MAX_SAFE_INTEGER.
 * Create by appending 'n' to an integer or using BigInt() function.
 *
 * NOTE: BigInt cannot be mixed with regular numbers in operations.
 */

console.log("\n--- BigInt ---");

var bigNumber = 1234567890123456789012345678901234567890n;
var anotherBig = BigInt("9999999999999999999999999999");

console.log("BigInt value:", bigNumber);
console.log("Type:", typeof bigNumber);                          // "bigint"

// BigInt operations (must use BigInt with BigInt)
console.log("BigInt addition:", 100n + 200n);                    // 300n
console.log("BigInt comparison:", 100n > 50n);                   // true

// Cannot mix BigInt with Number
// console.log(100n + 50);  // TypeError: Cannot mix BigInt and other types


// ─────────────────────────────────────────────────────────────────────────────
// 1.7 SYMBOL (ES6)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Symbol creates unique identifiers. Each Symbol() call creates a new,
 * unique value - even with the same description.
 *
 * Primary use case: Creating unique property keys to avoid collisions.
 */

console.log("\n--- Symbol ---");

const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log("Symbol:", sym1);
console.log("Are equal?", sym1 === sym2);                        // false (always unique!)

// Using Symbol as object property key
const user = {
    name: "Nag",
    [sym1]: "secret-123"
};
console.log("Symbol property:", user[sym1]);                     // "secret-123"


// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                       PART 2: REFERENCE TYPES                               │
// └─────────────────────────────────────────────────────────────────────────────┘

console.log("\n" + "═".repeat(60));
console.log("▶ REFERENCE TYPES (OBJECTS)");
console.log("═".repeat(60));

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                        WHAT IS AN OBJECT?                                  │
 * ├────────────────────────────────────────────────────────────────────────────┤
 * │                                                                            │
 * │  An object is an entity with three characteristics:                        │
 * │                                                                            │
 * │  ┌──────────────┬──────────────────────────────────────────────────────┐   │
 * │  │   STATE      │  Data/Attributes/Properties (what it HAS)           │   │
 * │  ├──────────────┼──────────────────────────────────────────────────────┤   │
 * │  │   BEHAVIOR   │  Functions/Methods/Operations (what it DOES)        │   │
 * │  ├──────────────┼──────────────────────────────────────────────────────┤   │
 * │  │   IDENTITY   │  Address/Location/Reference (WHERE it is in memory) │   │
 * │  └──────────────┴──────────────────────────────────────────────────────┘   │
 * │                                                                            │
 * │  Example: Trainer Object                                                   │
 * │  ├── State    : name, age, skill                                          │
 * │  ├── Behavior : teach(), evaluate()                                       │
 * │  └── Identity : memory address (reference)                                │
 * │                                                                            │
 * │  CLASS = Blueprint/Template for creating similar objects                   │
 * │  INSTANCE = An object created from a class                                │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */


// ─────────────────────────────────────────────────────────────────────────────
// 2.1 CLASS DEFINITION - ES5 STYLE (Constructor Functions)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Before ES6, classes were created using constructor functions.
 * Methods were added to the prototype for memory efficiency.
 */

console.log("\n--- ES5 Constructor Function ---");

function PersonES5(name, age) {
    // Instance properties (state)
    this.name = name;
    this.age = age;
}

// Instance methods (behavior) - added to prototype for efficiency
PersonES5.prototype.sayName = function() {
    console.log(`I'm ${this.name}`);
};

PersonES5.prototype.sayAge = function() {
    console.log(`I'm ${this.age} years old`);
};

// Static method (belongs to class, not instances)
PersonES5.species = "Homo Sapiens";


// ─────────────────────────────────────────────────────────────────────────────
// 2.2 CLASS DEFINITION - ES6 STYLE (class keyword)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * ES6 introduced the 'class' keyword - syntactic sugar over prototypes.
 * Cleaner, more readable, and familiar to developers from other languages.
 */

console.log("\n--- ES6 Class Syntax ---");

class Person {
    // Static property (shared across all instances)
    static species = "Homo Sapiens";
    
    // Constructor - initializes instance properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Instance methods
    sayName() {
        console.log(`I'm ${this.name}`);
    }
    
    sayAge() {
        console.log(`I'm ${this.age} years old`);
    }
    
    // Getter - computed property
    get info() {
        return `${this.name}, ${this.age} years old`;
    }
    
    // Setter - controlled property assignment
    set info(value) {
        const [name, age] = value.split(",");
        this.name = name.trim();
        this.age = parseInt(age);
    }
    
    // Static method (called on class, not instance)
    static describe() {
        return `Person is a class representing ${Person.species}`;
    }
}


// ─────────────────────────────────────────────────────────────────────────────
// 2.3 OBJECT CREATION
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Creating objects from a class involves two steps:
 *
 *   Step 1: Memory Allocation  → 'new' keyword allocates memory
 *   Step 2: Initialization     → Constructor initializes properties
 *
 *   Syntax: const reference = new ClassName(arguments);
 */

console.log("\n--- Creating Objects ---");

const p1 = new Person("Nag", 36);
const p2 = new Person("Indu", 31);
const p3 = new Person("Ria", 4);
const p4 = new Person("Dia", 2);

// Using instance methods
p1.sayName();                                                    // I'm Nag
p1.sayAge();                                                     // I'm 36 years old

// Using getter
console.log("Info (getter):", p1.info);                          // Nag, 36 years old

// Using setter
p2.info = "Indu, 32";
console.log("Updated info:", p2.info);                           // Indu, 32 years old

// Using static members (on class, not instance)
console.log("Species:", Person.species);                         // Homo Sapiens
console.log("Description:", Person.describe());


// ─────────────────────────────────────────────────────────────────────────────
// 2.4 OBJECT EXTENSIBILITY, SEALING, AND FREEZING
// ─────────────────────────────────────────────────────────────────────────────
/**
 * JavaScript objects are dynamic by default. You can control this behavior:
 *
 * ┌───────────────────────┬─────────────┬─────────────┬─────────────┐
 * │ Method                │ Add Props   │ Delete Props│ Modify Props│
 * ├───────────────────────┼─────────────┼─────────────┼─────────────┤
 * │ Default               │     ✓       │      ✓      │      ✓      │
 * │ preventExtensions()   │     ✗       │      ✓      │      ✓      │
 * │ seal()                │     ✗       │      ✗      │      ✓      │
 * │ freeze()              │     ✗       │      ✗      │      ✗      │
 * └───────────────────────┴─────────────┴─────────────┴─────────────┘
 */

console.log("\n--- Object Mutability Control ---");

// Example: Extensibility
const extObj = { a: 1 };
console.log("Is extensible?", Object.isExtensible(extObj));      // true
Object.preventExtensions(extObj);
extObj.b = 2;                                                    // Silently fails (or throws in strict)
console.log("After preventExtensions:", extObj);                 // { a: 1 }

// Example: Sealing
const sealedObj = { x: 10, y: 20 };
Object.seal(sealedObj);
console.log("Is sealed?", Object.isSealed(sealedObj));           // true
sealedObj.x = 100;                                               // ✓ Modification allowed
sealedObj.z = 30;                                                // ✗ Addition blocked
delete sealedObj.y;                                              // ✗ Deletion blocked
console.log("Sealed object:", sealedObj);                        // { x: 100, y: 20 }

// Example: Freezing (complete immutability)
const frozenObj = { name: "Frozen", value: 42 };
Object.freeze(frozenObj);
console.log("Is frozen?", Object.isFrozen(frozenObj));           // true
frozenObj.name = "Changed";                                      // ✗ Blocked
frozenObj.newProp = "test";                                      // ✗ Blocked
delete frozenObj.value;                                          // ✗ Blocked
console.log("Frozen object:", frozenObj);                        // { name: "Frozen", value: 42 }

// NOTE: freeze() is shallow - nested objects can still be modified
const shallowFrozen = { nested: { value: 1 } };
Object.freeze(shallowFrozen);
shallowFrozen.nested.value = 999;                                // ✓ Still works!
console.log("Shallow freeze gotcha:", shallowFrozen.nested);     // { value: 999 }


// ─────────────────────────────────────────────────────────────────────────────
// 2.5 PROPERTY ACCESS - DOT vs BRACKET NOTATION
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Two ways to access object properties:
 *
 *   1. Dot notation     : obj.property      (clean, most common)
 *   2. Bracket notation : obj["property"]   (required for special keys)
 *
 * Use bracket notation when:
 *   - Property name has spaces or special characters
 *   - Property name starts with a number
 *   - Property name is stored in a variable
 */

console.log("\n--- Property Access ---");

class Employee {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this["home-address"] = address;                          // Special character requires brackets
        this["2024-salary"] = 50000;                             // Starts with number
    }
}

const emp = new Employee("Nag", 36, "Chennai");

// Dot notation (standard)
console.log("Name (dot):", emp.name);                            // Nag
console.log("Age (dot):", emp.age);                              // 36

// Bracket notation (required for special keys)
console.log("Address (bracket):", emp["home-address"]);          // Chennai
console.log("Salary (bracket):", emp["2024-salary"]);            // 50000

// Dynamic property access using variable
const propName = "name";
console.log("Dynamic access:", emp[propName]);                   // Nag

// Both notations work for standard properties
console.log("Name (bracket):", emp["name"]);                     // Nag


// ─────────────────────────────────────────────────────────────────────────────
// 2.6 OBJECT LITERALS (Quick Object Creation)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Object literals provide a concise way to create objects without classes.
 * Ideal for configuration objects, data structures, and one-off objects.
 */

console.log("\n--- Object Literals ---");

// Basic object literal
const trainer = {
    name: "Nag",
    age: 36,
    skills: ["JavaScript", "React", "Node.js"],
    
    // Method shorthand (ES6)
    teach() {
        console.log(`${this.name} is teaching ${this.skills.join(", ")}`);
    },
    
    // Getter
    get profile() {
        return `${this.name} (${this.age})`;
    }
};

console.log("Trainer:", trainer.profile);
trainer.teach();

// ES6 Enhanced object literals
const skill = "JavaScript";
const level = "Expert";

const certification = {
    skill,                                                       // Shorthand: skill: skill
    level,                                                       // Shorthand: level: level
    ["cert-" + skill.toLowerCase()]: true,                       // Computed property name
    validate() {                                                 // Method shorthand
        return this.level === "Expert";
    }
};

console.log("Certification:", certification);


// ─────────────────────────────────────────────────────────────────────────────
// 2.7 TYPE CHECKING
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Various ways to check types in JavaScript:
 *
 *   typeof        - Returns type as string (limited for objects)
 *   instanceof    - Checks prototype chain
 *   Array.isArray - Specifically for arrays
 *   constructor   - Checks constructor function
 */

console.log("\n--- Type Checking ---");

const arr = [1, 2, 3];
const obj = { a: 1 };
const fn = function() {};
const date = new Date();

// typeof operator
console.log("typeof 42:", typeof 42);                            // "number"
console.log("typeof 'str':", typeof "str");                      // "string"
console.log("typeof true:", typeof true);                        // "boolean"
console.log("typeof undefined:", typeof undefined);              // "undefined"
console.log("typeof null:", typeof null);                        // "object" (bug!)
console.log("typeof []:", typeof arr);                           // "object"
console.log("typeof {}:", typeof obj);                           // "object"
console.log("typeof fn:", typeof fn);                            // "function"

// instanceof operator
console.log("\ninstanceof checks:");
console.log("arr instanceof Array:", arr instanceof Array);       // true
console.log("obj instanceof Object:", obj instanceof Object);     // true
console.log("date instanceof Date:", date instanceof Date);       // true
console.log("p1 instanceof Person:", p1 instanceof Person);       // true

// Array.isArray (safest way to check for arrays)
console.log("\nArray.isArray:");
console.log("Is array?", Array.isArray(arr));                    // true
console.log("Is array?", Array.isArray(obj));                    // false


// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                              SUMMARY                                        │
// └─────────────────────────────────────────────────────────────────────────────┘
/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                         KEY TAKEAWAYS                                      │
 * ├────────────────────────────────────────────────────────────────────────────┤
 * │                                                                            │
 * │  PRIMITIVES (7 types)                                                      │
 * │  • Stored by VALUE - changes to copies don't affect originals              │
 * │  • Immutable - operations create new values                                │
 * │  • undefined, null, string, number, boolean, bigint, symbol                │
 * │                                                                            │
 * │  REFERENCE TYPES                                                           │
 * │  • Stored by REFERENCE - multiple variables can point to same object       │
 * │  • Mutable - changes affect all references                                 │
 * │  • Objects, Arrays, Functions, Date, RegExp, etc.                          │
 * │                                                                            │
 * │  BEST PRACTICES                                                            │
 * │  • Use const by default, let when reassignment needed                      │
 * │  • Prefer template literals for string building                            │
 * │  • Use === for comparisons (avoids type coercion)                          │
 * │  • Use ES6 class syntax for OOP                                            │
 * │  • Use Object.freeze() for true constants                                  │
 * │  • Use Array.isArray() for array type checking                             │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */

console.log("\n" + "═".repeat(60));
console.log("           END OF DATA TYPES MODULE");
console.log("═".repeat(60));