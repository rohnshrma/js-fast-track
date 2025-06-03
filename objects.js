// Objects in JavaScript are reference (complex) data types used to store key-value pairs
// Keys are strings (or Symbols), and values can be any data type (e.g., strings, numbers, arrays, objects)
// Objects are created using curly braces { }, with key-value pairs separated by commas

// Creates an object 'arihant' with properties: name, gender, age, nationality, and skills (an array)
var arihant = {
  name: "Arihant",
  gender: "Male",
  age: 34,
  nationality: "Indian",
  skills: ["Figma", "html", "Css"],
};

// Logs the entire 'arihant' object to the console
console.log(arihant); // Outputs: { name: "Arihant", gender: "Male", age: 34, nationality: "Indian", skills: ["Figma", "html", "Css"] }

// Accessing object properties can be done using dot notation (object.property) or bracket notation (object["property"])
// '.skills' accesses the 'skills' property using dot notation, returns the array ["Figma", "html", "Css"]
console.log(arihant.skills); // Outputs: ["Figma", "html", "Css"]

// '["skills"]' accesses the same 'skills' property using bracket notation
// Bracket notation is useful for dynamic keys or keys with special characters
console.log(arihant["skills"]); // Outputs: ["Figma", "html", "Css"]

// Modifying object properties can be done using dot notation
// Changes the 'name' property from "Arihant" to "Rohan"
// Modifies the original object
arihant.name = "Rohan";
console.log(arihant); // Outputs: { name: "Rohan", gender: "Male", age: 34, nationality: "Indian", skills: ["Figma", "html", "Css"] }

// Modifying object properties can also be done using bracket notation
// Changes the 'name' property from "Rohan" to "suman"
// Modifies the original object
arihant["name"] = "suman";
console.log(arihant); // Outputs: { name: "suman", gender: "Male", age: 34, nationality: "Indian", skills: ["Figma", "html", "Css"] }

// Adding new properties to an object can be done using dot or bracket notation
// Adds a new property 'isHuman' with the value true
// Modifies the original object
arihant["isHuman"] = true;
console.log(arihant); // Outputs: { name: "suman", gender: "Male", age: 34, nationality: "Indian", skills: ["Figma", "html", "Css"], isHuman: true }
