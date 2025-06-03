// Arithmetic Operators: Used to perform mathematical operations on numeric values

var a = 12;
var b = 3;

// '+' adds two numbers, returns their sum
console.log(a + b); // Outputs: 15, sum of 12 and 3

// '-' subtracts the second number from the first, returns the difference
console.log(a - b); // Outputs: 9, difference of 12 and 3

// '*' multiplies two numbers, returns their product
console.log(a * b); // Outputs: 36, product of 12 and 3

// '/' divides the first number by the second, returns the quotient
console.log(a / b); // Outputs: 4, quotient of 12 divided by 3

// '%' returns the remainder after dividing the first number by the second
console.log(a % b); // Outputs: 0, remainder of 12 divided by 3

// '**' raises the first number to the power of the second, returns the exponential result
console.log(a ** b); // Outputs: 1728, 12 raised to the power of 3 (12^3)

// Assignment Operators: Assign values to variables or modify them based on operations

var x = 23; // '=' assigns a value to a variable

// '+=' adds a value to the variable and assigns the result
console.log((x += 10)); // Outputs: 33, adds 10 to 23, x is now 33

// '-=' subtracts a value from the variable and assigns the result
console.log((x -= 10)); // Outputs: 23, subtracts 10 from 33, x is now 23

// '*=' multiplies the variable by a value and assigns the result
console.log((x *= 10)); // Outputs: 230, multiplies 23 by 10, x is now 230

// '/=' divides the variable by a value and assigns the result
console.log((x /= 10)); // Outputs: 23, divides 230 by 10, x is now 23

// '%=' computes the remainder after division and assigns the result
console.log((x %= 2)); // Outputs: 1, remainder of 23 divided by 2, x is now 1

// '**=' raises the variable to a power and assigns the result
console.log((x **= 2)); // Outputs: 1, 1 raised to the power of 2, x is now 1

// Comparison Operators: Compare values and return a boolean (true or false)

// '==' (loose equality) compares values for equality, ignoring data types (performs type coercion)
console.log(12 == "12"); // Outputs: true, 12 and "12" are equal after type coercion
console.log(1 == true); // Outputs: true, 1 is coerced to true
console.log(0 == false); // Outputs: true, 0 is coerced to false

// '===' (strict equality) compares both value and data type, no type coercion
console.log(12 === "12"); // Outputs: false, different types (number vs string)
console.log(1 === true); // Outputs: false, different types (number vs boolean)
console.log(0 === false); // Outputs: false, different types (number vs boolean)
console.log(0 === 0); // Outputs: true, same value and type (number)

// '!=' (loose inequality) checks if values are not equal, ignoring data types (performs type coercion)
// console.log(12 != "12"); // Outputs: false, 12 and "12" are equal after coercion
// console.log(1 != true); // Outputs: false, 1 is coerced to true
// console.log(0 != false); // Outputs: false, 0 is coerced to false
// console.log(0 != 2); // Outputs: true, 0 and 2 are not equal

// '!==' (strict inequality) checks if values or types are not equal, no type coercion
// console.log(12 !== "12"); // Outputs: true, different types (number vs string)
// console.log(1 !== true); // Outputs: true, different types (number vs boolean)
// console.log(0 !== false); // Outputs: true, different types (number vs boolean)
// console.log(0 !== 0); // Outputs: false, same value and type

// Logical Operators: Combine or modify boolean expressions

// '&&' (logical AND) returns true if all operands are true, false otherwise
console.log(12 > 10 && 10 < 12); // Outputs: true, both conditions (true && true) are true
console.log(12 > 10 && 10 > 12); // Outputs: false, one condition is false (true && false)
console.log(12 < 10 && 10 > 12); // Outputs: false, both conditions are false (false && false)

// '||' (logical OR) returns true if at least one operand is true, false otherwise
console.log(12 > 10 || 10 < 12); // Outputs: true, both conditions are true (true || true)
console.log(12 > 10 || 10 > 12); // Outputs: true, one condition is true (true || false)
console.log(12 < 10 || 10 > 12); // Outputs: false, both conditions are false (false || false)

// '!' (logical NOT) reverses the boolean value of its operand
console.log(!(12 > 10)); // Outputs: false, reverses true to false
console.log(!true); // Outputs: false, reverses true to false
console.log(!false); // Outputs: true, reverses false to true
