// Primitive Data Types
// Primitive data types are the most basic types in JavaScript.
// They store single, immutable values (the actual data, not references).
// The main primitive data types are: string, number, boolean, null, and undefined.

// ----------------------
// String: a sequence of characters enclosed in quotes

var x = "hello world"; // double quotes - valid string
var y = "hello world"; // single quotes - also valid string
var z = `hello world`; // backticks (template literals) - useful for embedding expressions with ${}

// ----------------------
// Number: represents both integer and floating-point numbers

var a = 123; // integer value
var b = 1.23; // floating-point (decimal) number

// ----------------------
// Boolean: represents logical values - either true or false

var isIndian = true; // boolean true
var isAlien = false; // boolean false

// ----------------------
// Undefined: means a variable has been declared but has not been assigned a value

var myName; // 'myName' is declared but not initialized
console.log(myName); // output: undefined

// ----------------------
// Null: represents the intentional absence of any value or object

var yourName = null; // 'yourName' is explicitly set to have no value
console.log(yourName); // output: null

// Reference Data Types in JavaScript
// These are complex data types that can hold collections of values or more complex entities.
// Unlike primitive types, reference types store references (memory addresses) to the actual data.

// The main reference data types are: Object, Array, Function

// ----------------------
// Object: a collection of key-value pairs

var person = {
  name: "John",
  age: 30,
  isStudent: false,
};
console.log(person); // prints the whole object
console.log(person.name); // access value by key => "John"

// ----------------------
// Array: an ordered list of values (indexed collection)

var colors = ["red", "green", "blue"];
console.log(colors); // prints the array => ["red", "green", "blue"]
console.log(colors[1]); // access by index => "green"

// ----------------------
// Function: a reusable block of code

function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice")); // calls the function => "Hello, Alice"
console.log(greet("Arihant")); // calls the function => "Hello, Alice"

// ----------------------
// Differences between primitive and reference types:
// - Primitive types are stored directly in the variable.
// - Reference types store a reference (or address) to the actual object in memory.

// Example showing reference behavior:
var original = { language: "JavaScript" };
var copy = original;

copy.language = "Python"; // changing 'copy' also affects 'original'

console.log(original.language); // Output: "Python" (because both variables point to the same object)

// ===============================
// JavaScript Assignment: Practice Primitive & Reference Data Types
// ===============================

// ----------- PART 1: PRIMITIVE DATA TYPES -----------
// 1. Declare variables using each of the following primitive data types:
//    a. A string for a favorite movie
//    b. A number for your birth year
//    c. A boolean indicating if you like pizza
//    d. A variable declared but not initialized (undefined)
//    e. A variable explicitly assigned null

// 2. Log all the variables to the console

// 3. Use the typeof operator to print the type of each variable

// ----------- PART 2: REFERENCE DATA TYPES -----------
// 4. Create an object representing a book with properties: title, author, and numberOfPages

// 5. Log the whole object and access each property using dot notation

// 6. Create an array of your 3 favorite fruits

// 7. Log the array and access the second fruit using its index

// 8. Write a function called greetUser that takes a name as a parameter and returns a greeting string

// 9. Call the function with your name and log the result

// ----------- BONUS TASKS -----------
// 10. Create two variables that reference the same object.
//     Modify one and observe the change in the other (to demonstrate reference behavior)

// 11. Try reassigning a constant declared with a primitive value (e.g., a string)
//     Observe and comment on the error that occurs

// 12. Explain the difference between primitive and reference data types in your own words using comments

// ===============================
// Submit your completed assignment by pasting your code below each task comment.
// Make sure your console logs match the expected behavior for both types.
// ===============================
