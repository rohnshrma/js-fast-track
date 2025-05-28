// Arrays in JavaScript are reference (complex) data types used to store multiple values
// Arrays can hold values of similar or different data types (e.g., numbers, strings, objects)
// Arrays are created using square brackets [ ], with items separated by commas
var myMarks = [234, 345, 35, 3, 5, 35, 3, 5, 36]; // Declares an array 'myMarks' containing 9 numbers
var fav_colors = ["red", "green", "blue"]; // Declares an array 'fav_colors' containing 3 strings

// The '.length' property returns the number of items in an array
console.log(myMarks.length); // Outputs: 9, as 'myMarks' has 9 elements

// Indexing in arrays refers to accessing or modifying elements using their position (index)
// Indexes start at 0 for the first element, 1 for the second, and so on
// Last element is at index 'array.length - 1'
console.log(fav_colors[1]); // Outputs: "green", accessing the element at index 1
fav_colors[1] = "yellow"; // Modifies the element at index 1, changing "green" to "yellow"
console.log(fav_colors); // Outputs: ["red", "yellow", "blue"], showing the updated array

// Array Methods: Built-in functions to manipulate arrays

// '.push(...items)' adds one or more items to the end of an array
// Modifies the original array and returns the new length
fav_colors.push("pink", "violet"); // Adds "pink" and "violet" to the end of 'fav_colors'
console.log(fav_colors); // Outputs: ["red", "yellow", "blue", "pink", "violet"]

// '.unshift(...items)' adds one or more items to the start of an array
// Modifies the original array and returns the new length
fav_colors.unshift("grey", "black"); // Adds "grey" and "black" to the start of 'fav_colors'
console.log(fav_colors); // Outputs: ["grey", "black", "red", "yellow", "blue", "pink", "violet"]

// '.pop()' removes the last item from an array and returns the removed item
// Modifies the original array
fav_colors.pop(); // Removes "violet" from the end of 'fav_colors'
console.log(fav_colors); // Outputs: ["grey", "black", "red", "yellow", "blue", "pink"]

// '.shift()' removes the first item from an array and returns the removed item
// Modifies the original array
fav_colors.shift(); // Removes "grey" from the start of 'fav_colors'
console.log(fav_colors); // Outputs: ["black", "red", "yellow", "blue", "pink"]

// '.includes(searchElement)' returns true if the array contains 'searchElement', false otherwise
// Performs a strict equality check (===) for the element
console.log(fav_colors.includes("pink")); // Outputs: true, as "pink" is in the array
