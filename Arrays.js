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

// console.log(fav_colors);

// console.log(fav_colors[2]);

// '.at(index)' returns the element at the specified index
// Supports positive indices (0 for first element) and negative indices (-1 for last element)
// Does not modify the original array, returns the element or undefined if index is out of bounds
console.log(fav_colors.at(2)); // Outputs: "yellow", element at index 2
console.log(fav_colors.at(fav_colors.length - 1)); // Outputs: "pink", last element
console.log(fav_colors.at(-1)); // Outputs: "pink", last element using negative index

// '.join(separator)' creates a string by concatenating all array elements, separated by 'separator'
// If no separator is provided, defaults to comma (,)
// Does not modify the original array, returns the resulting string
console.log(fav_colors.join(" ")); // Outputs: "black red yellow blue pink", joins elements with a space

// '.splice(start, deleteCount, ...items)' modifies the array by removing, replacing, or adding elements
// 'start' is the index to begin, 'deleteCount' is the number of elements to remove, '...items' are elements to add
// Modifies the original array, returns an array of removed elements (empty if none removed)
fav_colors.splice(2, 0, "carrot"); // Inserts "carrot" at index 2, removes 0 elements
console.log(fav_colors); // Outputs: ["black", "red", "carrot", "yellow", "blue", "pink"]
// Example: fav_colors.splice(1, 1, "carrot"); // Would remove 1 element at index 1, insert "carrot"

// '.slice(start, end)' returns a shallow copy of a portion of the array from 'start' to 'end' (end not included)
// If 'end' is omitted, copies until the end of the array
// Does not modify the original array, returns the new array
console.log(fav_colors.slice(2, 5)); // Outputs: ["carrot", "yellow", "blue"], copies elements from index 2 to 4

// '.reverse()' reverses the order of elements in the array
// Modifies the original array, returns the reversed array
console.log(fav_colors.reverse()); // Outputs: ["pink", "blue", "yellow", "carrot", "red", "black"]

// '.indexOf(searchElement, fromIndex)' returns the first index of 'searchElement' in the array
// Optional 'fromIndex' specifies where to start searching (defaults to 0)
// Returns -1 if the element is not found, uses strict equality (===)
console.log(fav_colors.indexOf("red")); // Outputs: 4, first occurrence of "red"
console.log(fav_colors.indexOf("red", 3)); // Outputs: 4, searches from index 3, finds "red"

// '.lastIndexOf(searchElement, fromIndex)' returns the last index of 'searchElement' in the array
// Optional 'fromIndex' specifies where to start searching backward (defaults to array.length - 1)
// Returns -1 if the element is not found, uses strict equality (===)
console.log(fav_colors.lastIndexOf("red")); // Outputs: 4, last occurrence of "red"
console.log(fav_colors.lastIndexOf("red", 3)); // Outputs: -1, no "red" found searching backward from index 3
