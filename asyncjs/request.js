// Create a new XMLHttpRequest object, which is like a tool to send requests to a server and get data back
const request = new XMLHttpRequest();

// Add an event listener to listen for changes in the request's state (like a waiter checking if your order is ready)
// The "readystatechange" event fires every time the request's state changes
request.addEventListener("readystatechange", () => {
    // Inside this function, we check the request's progress
    // request.readyState tells us the current stage of the request (1 to 4, where 4 means complete)
    // request.status is the HTTP status code (like 200 for success, 404 for not found, etc.)
    
    // If readyState is 4 (request is complete) AND status is 200 (success), print the response (the joke)
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText); // Print the joke data received from the server
    }
    // If readyState is 4 (request is complete) but status is NOT 200, something went wrong
    if (request.readyState === 4 && request.status !== 200) {
        console.log("Failed to fetch joke"); // Print an error message
    }
});

// Set up the request: "GET" means we want to fetch data, and the URL is where we're getting the joke from
// The URL points to a joke API that gives us a random two-part joke, avoiding NSFW or racist content
request.open("GET", "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist&type=twopart");

// Send the request to the server, like pressing "send" on a message
request.send();



// ===============================
// What’s Happening in the Code?
// This code uses JavaScript to fetch a random two-part joke from an online API (a service that provides data). It uses the XMLHttpRequest object, which is a built-in JavaScript tool for making requests to a server (like asking a librarian for a specific book). Here's a beginner-friendly breakdown of why each part is needed and the order of execution.


// Order of Execution

// Line 1: Create the XMLHttpRequest object
// const request = new XMLHttpRequest();
// This creates a new "request" tool that will handle communication with the server.
// Think of it like setting up a phone to make a call—you haven't dialed yet, but the phone is ready.

// Line 4: Add an event listener
// request.addEventListener("readystatechange", () => { ... });
// This sets up a "listener" that watches for changes in the request's status.
// Why do we need an event listener? Sending a request to a server takes time (like waiting for a reply to a text). The readystatechange event fires every time the request moves through different stages (e.g., starting, receiving data, done). The listener lets us react when something happens, like when the data finally arrives.

// Lines 6-12: Check the request's status
// Inside the event listener, we check request.readyState and request.status.
// readyState is a number from 1 to 4:
// 1: Request is set up.
// 2: Request is sent.
// 3: Receiving data.
// 4: Request is complete.
// We only care about readyState === 4 (when the request is done).
// status is the HTTP status code:
// 200 means the request was successful (we got the joke!).
// Anything else (like 404 or 500) means an error occurred.
// If both readyState === 4 and status === 200, we print the joke (request.responseText).
// If readyState === 4 but status !== 200, we print an error message.

// Line 15: Set up the request
// request.open("GET", "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist&type=twopart");
// This tells the request what to do: use the "GET" method (to fetch data) and where to get it (the joke API URL).
// The URL includes options to avoid inappropriate jokes (blacklistFlags=nsfw,racist) and to get two-part jokes (type=twopart).

// Line 17: Send the request
// request.send();
// This actually sends the request to the server, like clicking "send" on an email.
// After this, the request starts, and the event listener waits for updates.
// Why Do We Need the Event Listener?
// The event listener is crucial because fetching data from a server is asynchronous, meaning it doesn’t happen instantly. When you send the request, JavaScript doesn’t wait for the server to respond—it moves on to the next line of code. The event listener acts like a notification system: it "listens" for updates on the request and runs the code inside it whenever the request’s state changes. This way, we can handle the response (or errors) as soon as the server replies.

// How It Works Together
// You create a request tool (XMLHttpRequest).
// You set up a listener to watch for updates on the request’s progress.
// You tell the request what to do (fetch a joke from a specific URL).
// You send the request.
// The listener waits for the server to respond, then checks if the request was successful and prints the result.
// Example Analogy
// Imagine you’re ordering food delivery:

// Create XMLHttpRequest: You open a food delivery app.
// Add event listener: You tell the app to notify you when the food is on its way, being prepared, or delivered.
// Set up the request (open): You choose a restaurant and select a dish (the URL and "GET" method).
// Send the request (send): You place the order.
// Event listener reacts: The app notifies you when the food is delivered (success) or if the restaurant is closed (error).
// This code follows the same idea, but instead of food, you’re fetching a joke from a server!

// What Will Happen When You Run This Code?
// If the server responds successfully, you’ll see a joke printed in the console (e.g., a JSON object with a setup and punchline).
// If there’s an error (e.g., no internet or the API is down), you’ll see "Failed to fetch joke" in the console.