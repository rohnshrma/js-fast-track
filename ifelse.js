// 'if' statement evaluates a condition inside parentheses
// If the condition is true, the code block inside { } executes
// If the condition is false, the code block is skipped

// 'if-else' statement provides an alternative code block to execute if the 'if' condition is false
// Only one block (if or else) executes based on the condition

// 'prompt()' displays a dialog box to take user input as a string
// 'parseInt()' converts the string input to an integer
var age = parseInt(prompt("Enter your age : "));
// Checks if 'age' is greater than 18
if (age > 18) {
  console.log("Eligible"); // Executes if age > 18, outputs: "Eligible"
} else {
  console.log("Not Eligible"); // Executes if age <= 18, outputs: "Not Eligible"
}

// 'if-else if-else' allows checking multiple conditions in sequence
// The first true condition's block executes; if none are true, the 'else' block executes
// Only one block executes, and subsequent conditions are skipped once a true condition is found

var month = parseInt(prompt("Enter the month number (1-12) : "));
// Checks 'month' against each condition in order
if (month == 1) {
  console.log("January"); // Outputs: "January" if month is 1
} else if (month == 2) {
  console.log("February"); // Outputs: "February" if month is 2
} else if (month == 3) {
  console.log("March"); // Outputs: "March" if month is 3
} else if (month == 4) {
  console.log("April"); // Outputs: "April" if month is 4
} else if (month == 5) {
  console.log("May"); // Outputs: "May" if month is 5
} else if (month == 6) {
  console.log("June"); // Outputs: "June" if month is 6
} else if (month == 7) {
  console.log("July"); // Outputs: "July" if month is 7
} else if (month == 8) {
  console.log("August"); // Outputs: "August" if month is 8
} else if (month == 9) {
  console.log("September"); // Outputs: "September" if month is 9
} else if (month == 10) {
  console.log("October"); // Outputs: "October" if month is 10
} else if (month == 11) {
  console.log("November"); // Outputs: "November" if month is 11
} else if (month == 12) {
  console.log("December"); // Outputs: "December" if month is 12
} else {
  console.log("Invalid Month"); // Outputs: "Invalid Month" if no condition is true
}

// Practice Tasks for if, else, and else if Statements
// No loops or functions are used, focusing on conditional logic

// Task 1: Voting Eligibility
// Prompt the user for their age and store it in a variable using parseInt.
// If the age is 18 or greater, log "You can vote".
// Otherwise, log "You cannot vote".

// Task 2: Temperature Check
// Prompt the user for the current temperature (as a number).
// If the temperature is greater than 30, log "It's hot".
// If the temperature is between 15 and 30 (inclusive), log "It's pleasant".
// Otherwise, log "It's cold".

// Task 3: Grade Evaluation
// Prompt the user for a test score (0-100).
// If the score is 90 or above, log "Grade: A".
// If the score is 80-89, log "Grade: B".
// If the score is 70-79, log "Grade: C".
// If the score is 60-69, log "Grade: D".
// Otherwise, log "Grade: F".

// Task 4: Day of the Week
// Prompt the user for a day number (1-7).
// If the number is 1, log "Monday".
// If the number is 2, log "Tuesday".
// If the number is 3, log "Wednesday".
// If the number is 4, log "Thursday".
// If the number is 5, log "Friday".
// If the number is 6, log "Saturday".
// If the number is 7, log "Sunday".
// Otherwise, log "Invalid day".

// Task 5: Number Sign Check
// Prompt the user for a number.
// If the number is positive, log "Positive".
// If the number is negative, log "Negative".
// If the number is zero, log "Zero".

// Task 6: Traffic Light
// Prompt the user for a traffic light color ("red", "yellow", or "green").
// If the color is "red", log "Stop".
// If the color is "yellow", log "Prepare to stop".
// If the color is "green", log "Go".
// Otherwise, log "Invalid color".

// Task 7: Discount Eligibility
// Prompt the user for their membership status ("premium" or "regular").
// If the status is "premium", log "You get a 20% discount".
// Otherwise, log "No discount available".

// Task 8: Time of Day
// Prompt the user for the current hour (0-23).
// If the hour is less than 12, log "Morning".
// If the hour is
