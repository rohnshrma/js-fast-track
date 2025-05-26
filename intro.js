// Variables are empty containers used to store data.
// Each variable has a label known as the variable name or identifier.

// The value stored in a variable can be changed later (mutable).

// How to create a variable:
// Use the "var" keyword (older way of declaring variables in JavaScript).

var hello; // Declaration: 'hello' is declared as a variable but not assigned a value yet.
hello = 23; // Initialization: now 'hello' is assigned the value 23.

var age = 23; // Declaration and initialization together: 'age' is declared and assigned the value 23.

console.log(age); // Prints the current value of 'age' to the console => 23
console.log(hello); // Prints the current value of 'hello' to the console => 23

age = 2345; // Reassigning a new value to the existing variable 'age'

console.log(age); // Prints the updated value of 'age' => 2345

// The value assigned to a constant cannot be changed (constants are immutable)
const myName = "arihant"; // Declare and initialize a constant named 'myName' with value "arihant"
console.log(myName); // Prints the value of 'myName' => "arihant"

myName = "john doe";
// Error! Trying to change the value of a constant throws a TypeError in JavaScript

console.log(myName);
// This line will not execute due to the error above

// Constants must be initialized when declared

// const add; // This would throw an error: SyntaxError: Missing initializer in const declaration
// add = 123; // This line would never be reached due to the error above
