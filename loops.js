// // fill and empty water (0 ml) bottle of 1000 ml capacity, every time you pour water in it is (100 ml)

// for(var wl = 0; wl <= 1000 ; wl+= 100){
//     // code to be excuted if the condition is true
//     console.log(wl)
// }

// for(var wl = 1000; wl >= 0 ; wl-= 100){
//     // code to be excuted if the condition is true
//     console.log(wl)
// }




// for(var i = 1 ; i <= 100; i+=1){
//    if (i % 2 == 0){
//     console.log(i)
//    }
// }




//================ WHILE LOOP

// SYNTAX

// var i = 0 // initialization
// while(condition){
// code to executed
// i+=1
// }


// var i = 11
// while(i <= 60){
//    console.log(i)7
//    i+=1


// for (var i = 1; i <= 100 ; i+=1){
//    if(i % 2 == 0){
//       console.log(i)
//    }
// }





// collect mobile number from a user
// make sure the number has exactly 10 digits
// if the number are more or less , keep asking for correct number

// var mobile = prompt("Enter your number : ")
// while (mobile.length < 10 || mobile.length > 10){
//     mobile = prompt("Enter correct number (10 digits) : ")
// }

// console.log("Correct" , parseInt(mobile))



// create a variable called stored_password to store a user's password into it
// ask the user to enter his password , make sure to keep on asking for correct password
// till not matches

// var stored_password = "helloworld"
// var pass = prompt("Enter your password : ")
// while (pass != stored_password){
//    pass = prompt("Enter correct password : ")
// }

// console.log("Correct password" , pass)

// Prompt the user to enter a 4-digit PIN
// Ensure the input is exactly 4 digits long and contains only numbers
// Keep asking until a valid PIN is provided
// Log the valid PIN as a number


// var pin = prompt("Enter your 4 digit pin : ")
// while (pin.length !== 4 || isNaN(pin)){
//     pin = prompt("Enter your 4 digit pin : ")
// }

// console.log("Valid Pin" , parseInt(pin))


// let number = prompt("enter a positive even number");

// while (isNaN(number) || number <= 0 || number % 2 !== 0) {
//   number = prompt("enter a valid positive even number");
// }
// console.log("correct", parseInt(number));

// var email = prompt("Enter your email : ")
// while (!email.includes("@") || !email.includes(".")){
//    email = prompt("Enter your email (must include @ and .) : ")
// }

// console.log("valid email",email)