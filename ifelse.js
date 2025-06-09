// 'if' statement evaluates a condition inside parentheses
// If the condition is true, the code block inside { } executes
// If the condition is false, the code block is skipped

// 'if-else' statement provides an alternative code block to execute if the 'if' condition is false
// Only one block (if or else) executes based on the condition

// 'prompt()' displays a dialog box to take user input as a string
// 'parseInt()' converts the string input to an integer
// var age = parseInt(prompt("Enter your age : "));
// Checks if 'age' is greater than 18
// if (age > 18) {
  // console.log("Eligible"); // Executes if age > 18, outputs: "Eligible"
// } else {
  // console.log("Not Eligible"); // Executes if age <= 18, outputs: "Not Eligible"
// }

// 'if-else if-else' allows checking multiple conditions in sequence
// The first true condition's block executes; if none are true, the 'else' block executes
// Only one block executes, and subsequent conditions are skipped once a true condition is found

// var month = parseInt(prompt("Enter the month number (1-12) : "));
// // Checks 'month' against each condition in order
// if (month == 1) {
//   console.log("January"); // Outputs: "January" if month is 1
// } else if (month == 2) {
//   console.log("February"); // Outputs: "February" if month is 2
// } else if (month == 3) {
//   console.log("March"); // Outputs: "March" if month is 3
// } else if (month == 4) {
//   console.log("April"); // Outputs: "April" if month is 4
// } else if (month == 5) {
//   console.log("May"); // Outputs: "May" if month is 5
// } else if (month == 6) {
//   console.log("June"); // Outputs: "June" if month is 6
// } else if (month == 7) {
//   console.log("July"); // Outputs: "July" if month is 7
// } else if (month == 8) {
//   console.log("August"); // Outputs: "August" if month is 8
// } else if (month == 9) {
//   console.log("September"); // Outputs: "September" if month is 9
// } else if (month == 10) {
//   console.log("October"); // Outputs: "October" if month is 10
// } else if (month == 11) {
//   console.log("November"); // Outputs: "November" if month is 11
// } else if (month == 12) {
//   console.log("December"); // Outputs: "December" if month is 12
// } else {
//   console.log("Invalid Month"); // Outputs: "Invalid Month" if no condition is true
// }

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




// nested conditions
var salary = parseInt(prompt("Enter your salary"))
var creditScore = prompt("Do Your Have Good Credit Score (Yes | No) : ").toLowerCase()


// Check if the variable 'creditScore' is exactly equal to the string "yes"
if (creditScore === "yes") {
    // If creditScore is "yes", check if the 'salary' is greater than or equal to 50000
    if (salary >= 50000) {
        // If salary is 50000 or more, print this message to the console
        console.log("Eligible to loan upto 100000");
    } else {
        // If salary is less than 50000, print this message to the console
        console.log("Eligible to loan upto 50000");
    }
} else {
    // If creditScore is not "yes", print this message to the console
    console.log("No Eligible For Loan");
}


// Task 1: Car Insurance Eligibility
// - Prompt user to enter their age
// - Prompt user to enter number of years they've held a driver's license
// - Check eligibility for car insurance:
//   - Must be at least 18 years old
//   - If 18 or older and license held for 2+ years, eligible for "Full Coverage"
//   - If 18 or older but license held for less than 2 years, eligible for "Basic Coverage"
//   - Otherwise, "Not Eligible"
// - Output the result to console

 // Prompt user for age and convert the string input to an integer
var age = parseInt(prompt("Enter your age : "));
// Prompt user for years of license held and convert the string input to an integer
var years_license_hold = parseInt(prompt("Enter number of years they've held a driver's license:  "));

// Check if age is greater than or equal to 18
if (age >= 18) {
    // If age is 18 or older, check if years of license held is 2 or more
    if (years_license_hold >= 2) {
        // If license held for 2+ years, print "Full Coverage" to console
        console.log("Full Coverage");
    } else {
        // If license held for less than 2 years, print "Basic Coverage" to console
        console.log("Basic Coverage");
    }
} else {
    // If age is less than 18, print "Not Eligible" to console
    console.log("Not Eligible");
}




// Task 2: Movie Ticket Pricing
// - Prompt user to enter their age
// - Prompt user if they are a student ("Yes" or "No")
// - Calculate ticket price based on rules:
//   - Age under 12: $5
//   - Age 12 to 18: $8 if not a student, $6 if a student
//   - Age above 18: $10 if not a student, $8 if a student
// - Display the ticket price to console


// Prompt user for age and convert the string input to an integer
var age = parseInt(prompt("Enter your age : "));
// Prompt user if they are a student, convert response to lowercase for consistent comparison
var isStudent = prompt("Are you a student :  ", "Yes or No").toLowerCase();

// Check if age is less than 12
if (age < 12) {
    // If age is under 12, ticket price is $5, print to console
    console.log("$5");
} else if (age >= 12 && age < 18) {
    // If age is between 12 and 18 (inclusive of 12, exclusive of 18), check student status
    if (isStudent == "yes") {
        // If user is a student, ticket price is $6, print to console
        console.log("$6");
    } else {
        // If user is not a student, ticket price is $8, print to console
        console.log("$8");
    }
} else {
    // If age is 18 or older, check student status
    if (isStudent == "yes") {
        // If user is a student, ticket price is $8, print to console
        console.log("$8");
    } else {
        // If user is not a student, ticket price is $10, print to console
        console.log("$10");
    }
}





// Task 3: Shipping Cost Calculator
// - Prompt user to enter weight of package in kg
// - Prompt user for shipping destination ("Domestic" or "International")
// - Determine shipping cost:
//   - Domestic: $5 if weight <= 2kg, $10 if weight > 2kg
//   - International: $15 if weight <= 2kg, $25 if weight > 2kg
//   - If weight is negative, output "Invalid"
// - Output the shipping cost to console



// Prompt user for package weight in kg and convert the string input to an integer
var weight = parseInt(prompt("Enter weight in kg's : "));
// Prompt user for shipping destination, convert to lowercase for consistent comparison
var destination = prompt("Enter Shipping destination (Domestic | International) : ").toLowerCase();

// Check if weight is less than or equal to 0
if (weight <= 0) {
    // If weight is negative or zero, print "Invalid" to console
    console.log("Invalid");
} else if (destination === "domestic") {
    // If destination is "domestic", check weight
    if (weight <= 2) {
        // If weight is 2kg or less, shipping cost is $5, print to console
        console.log("$5");
    } else {
        // If weight is more than 2kg, shipping cost is $10, print to console
        console.log("$10");
    }
} else if (destination === "international") {
    // If destination is "international", check weight
    if (weight <= 2) {
        // If weight is 2kg or less, shipping cost is $15, print to console
        console.log("$15");
    } else {
        // If weight is more than 2kg, shipping cost is $25, print to console
        console.log("$25");
    }
}


// Task 4: Grade Evaluation
// - Prompt user to enter exam score (0-100)
// - Prompt user to enter attendance percentage (0-100)
// - Determine grade based on rules:
//   - Score >= 90 and attendance >= 80: "A"
//   - Score >= 70 and attendance >= 80: "B"
//   - Score >= 50 and attendance >= 80: "C"
//   - Otherwise: "Fail"
// - Display the grade to console

// Task 5: Discount Eligibility
// - Prompt user to enter total purchase amount
// - Prompt user if they are a member ("Yes" or "No")
// - Calculate discount eligibility:
//   - Members: 20% discount if purchase >= $100, 10% if purchase < $100
//   - Non-members: 5% discount if purchase >= $150, no discount otherwise
// - Output the discount percentage or "No Discount" to console