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
