// Strings in JavaScript are sequences of characters (letters, numbers, special symbols, or whitespace)
// Strings can be enclosed in single quotes ('), double quotes ("), or backticks (`)
var myName = "john doe"; // Declares a variable 'myName' and assigns it the string "john doe" using double quotes
var userName = "rohn11shrma@rmail.com"; // Declares a variable 'userName' and assigns it an email string using double quotes
var user_name = `rohn11shrma@rmail.com`; // Declares a variable 'user_name' and assigns it the same email string using backticks
// Backticks allow for template literals, which support multi-line strings and variable interpolation (explained later)

// ========================

// The 'typeof' operator is used to check the data type of a value or variable
console.log(typeof myName); // Outputs: "string", indicating that 'myName' is a string data type

// ========================

// The '.length' property returns the number of characters in a string (including spaces and special characters)
console.log(myName.length); // Outputs: 8, as "john doe" has 8 characters (j,o,h,n, ,d,o,e)

// ========================

// NOTE: The 'prompt' function takes user input as a string by default
// The input can be converted to other data types (e.g., number) using functions like 'parseInt' or 'parseFloat'

// ========================

// String concatenation combines two or more strings using the '+' operator
var fName = prompt("Enter your first name : "); // Prompts the user to enter their first name and stores it as a string
var lName = prompt("Enter your last name : "); // Prompts the user to enter their last name and stores it as a string
var age = parseInt(prompt("Enter your age :")); // Prompts the user to enter their age, converts the string input to an integer using 'parseInt'

console.log(typeof fName, typeof lName, typeof age); // Outputs: "string string number", showing the data types of the variables

// Concatenates strings and variables to form a sentence
console.log(
  "hello world my name is " +
    fName +
    " " +
    lName +
    " and i am " +
    age +
    " years old."
); // Outputs: e.g., "hello world my name is John Doe and i am 25 years old."
// The '+' operator combines the strings and variable values, with " " adding a space between words

console.log("hello" + "world"); // Outputs: "helloworld", concatenating two strings without a space
console.log(123 + 123); // Outputs: 246, as '+' performs arithmetic addition for numbers
console.log(123 + "123"); // Outputs: "123123", as '+' concatenates when one operand is a string

// ========================

// Template literals (or string literals) are created using backticks (`) and allow embedding variables using ${}
console.log(
  `hello world my name is ${fName} ${lName} and i am ${age} years old`
); // Outputs: e.g., "hello world my name is John Doe and i am 25 years old"
// Template literals make string creation cleaner and more readable compared to concatenation
// Variables inside ${} are evaluated and inserted into the string

// ========================

// Indexing in strings refers to accessing individual characters using their position (index)
// Indexes start at 0 for the first character
// Positive indexing: 0, 1, 2, ..., length-1
// Negative indexing (supported by some methods): -1 (last character), -2, ..., -length

// Example string: "hello"
// Positive indexes: h(0), e(1), l(2), l(3), o(4)
// Negative indexes: h(-5), e(-4), l(-3), l(-2), o(-1)
// Last character is at index 'string.length - 1'

var txt = "hello world this is john doe"; // Declares a variable 'txt' and assigns it a string

console.log(txt[0]); // Outputs: "h", accessing the first character using positive indexing
console.log(txt[txt.length - 1]); // Outputs: "e", accessing the last character (length-1 = 27-1 = 26)

// ========================
// String Methods: Built-in functions to manipulate or inspect strings

// '.charAt(index)' returns the character at the specified positive index
console.log(txt.charAt(0)); // Outputs: "h", the character at index 0
console.log(txt.charAt(txt.length - 1)); // Outputs: "e", the character at the last index
// Note: '.charAt' does not support negative indexing

// '.at(index)' returns the character at the specified index (supports both positive and negative indexing)
console.log(txt.at(0)); // Outputs: "h", the character at index 0
console.log(txt.at(txt.length - 1)); // Outputs: "e", the character at the last index
console.log(txt.at(-1)); // Outputs: "e", the last character using negative indexing

// '.toLowerCase()' converts all characters in the string to lowercase
console.log(txt.toLowerCase()); // Outputs: "hello world this is john doe"

// '.toUpperCase()' converts all characters in the string to uppercase
console.log(txt.toUpperCase()); // Outputs: "HELLO WORLD THIS IS JOHN DOE"
// Note: These methods do not modify the original string; they return a new string

// '.indexOf(searchString, startPosition)' returns the index of the first occurrence of 'searchString'
// If 'startPosition' is provided, search begins at that index (inclusive)
// Returns -1 if the string is not found
console.log(txt.indexOf("i")); // Outputs: 13, the index of the first "i" (in "this")
console.log(txt.indexOf("i", 15)); // Outputs: 18, the index of the next "i" (in "is") starting from index 15

// '.lastIndexOf(searchString)' returns the index of the last occurrence of 'searchString'
// Returns -1 if the string is not found
console.log(txt.lastIndexOf("i")); // Outputs: 18, the index of the last "i" (in "is")

// '.slice(start, end)' extracts a portion of the string from 'start' (inclusive) to 'end' (exclusive)
console.log(txt.slice(6, 11)); // Outputs: "world", characters from index 6 to 10
// '.substring(start, end)' is similar to '.slice' but does not support negative indexes
console.log(txt.substring(6, 11)); // Outputs: "world", characters from index 6 to 10

// '.startsWith(searchString, startPosition)' checks if the string starts with 'searchString' at 'startPosition' (default 0)
// Returns true or false
console.log(txt.startsWith("hel")); // Outputs: true, as the string starts with "hel"
console.log(txt.startsWith("hel", 6)); // Outputs: false, as index 6 starts with "w"
console.log(txt.startsWith("wo", 6)); // Outputs: true, as index 6 starts with "wo"

// '.endsWith(searchString, endPosition)' checks if the string ends with 'searchString' at 'endPosition' (exclusive)
// If 'endPosition' is provided, checks if the substring up to 'endPosition' ends with 'searchString'
// Returns true or false
console.log(txt.endsWith("oe")); // Outputs: true, as the string ends with "oe"
console.log(txt.endsWith("hel", 6)); // Outputs: false, as the substring up to index 6 ("hello ") does not end with "hel"
console.log(txt.endsWith(" ", 6)); // Outputs: true, as the substring up to index 6 ("hello ") ends with a space

// '.split(separator)' splits the string into an array based on the 'separator'
// If no separator is provided, the entire string is returned as a single-element array
console.log(txt.split()); // Outputs: ["hello world this is john doe"]
console.log(txt.split("")); // Splits at each character, outputs: ['h', 'e', 'l', 'l', 'o', ' ', ... , 'e']
console.log(txt.split(" ")); // Splits at each space, outputs: ['hello', 'world', 'this', 'is', 'john', 'doe']
console.log(txt.split("i")); // Splits at each "i", outputs: ['hello world th', 's ', 's john doe']
