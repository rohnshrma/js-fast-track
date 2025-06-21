fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist&type=twopart")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });





// TOPIC: What is this code doing?
// This code uses the `fetch` function to request a joke from a website (an API called JokeAPI).
// It asks for a clean (non-offensive), two-part joke (like a question and answer).
// The code handles the response step-by-step, prints the joke if successful, or shows an error if something fails.
// Think of it like ordering a burger at a fast-food restaurant: you place the order, wait for it to be ready,
// unwrap it to check it’s correct, and eat it. If something goes wrong (like no burgers left), you’re told why.

// TOPIC: What is an API?
// An API (Application Programming Interface) is like a menu at a restaurant. It’s a way for your code (you)
// to ask a website (the kitchen) for something specific (like a joke) and get it back in a standard format.
// Here, the JokeAPI gives us jokes in JSON format (a way to organize data, like a neatly packed burger).

// TOPIC: What is asynchronous programming?
// JavaScript runs code line-by-line, but some tasks (like fetching data from a website) take time.
// Instead of waiting and freezing your app, JavaScript uses asynchronous programming to say,
// “Start this task, and let me know when it’s done.” It’s like ordering a burger and doing something else
// (like checking your phone) while the kitchen prepares it, instead of staring at the counter.
// Promises are JavaScript’s way of handling these “wait and notify” tasks.

// TOPIC: What is a Promise?
// A Promise is an object that represents a task that hasn’t finished yet (like fetching a joke).
// It’s like getting a receipt when you order a burger. The receipt “promises” you’ll get your burger
// (success) or be told if something went wrong (failure). A Promise has three states:
// 1. Pending: The kitchen is cooking (request is in progress).
// 2. Resolved (Fulfilled): You got your burger (request succeeded).
// 3. Rejected: No burgers left (request failed, like a network error).
// Promises let us handle asynchronous tasks without blocking our code.

// TOPIC: What is `fetch`?
// `fetch` is a browser function that sends a request to a website (like an API) and gets data back.
// It’s like placing an order at the restaurant counter. `fetch` returns a Promise, so we can use
// `.then()` to handle the response when it’s ready or `.catch()` if something goes wrong.

// Start of the code: Making the API request
fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist&type=twopart")
// The `fetch` function sends a request to the JokeAPI (like ordering a burger).
// The URL specifies what we want:
// - "https://v2.jokeapi.dev/joke/Any": Get any random joke.
// - "?blacklistFlags=nsfw,racist": Don’t include offensive jokes (like saying “no spicy sauce”).
// - "&type=twopart": We want a two-part joke (like a question and answer).
// `fetch` returns a Promise, which is like the receipt the cashier gives you.
// The Promise is “pending” while the API processes our request.

// TOPIC: What is `.then()`?
// `.then()` is a method you call on a Promise. It runs a function when the Promise resolves (succeeds).
// It’s like hearing your order number called and going to pick up your burger tray.
// The function inside `.then()` gets the result of the Promise (e.g., the API’s response).
// You can chain multiple `.then()` calls to handle steps one after another.

  .then((response) => {
// When the Promise from `fetch` resolves (the API responds), this function runs.
// It’s like picking up your tray when the restaurant calls your order.
// `response` is an object containing the API’s reply (like the tray with your burger).
// The `response` isn’t the joke yet—it’s raw data, like a wrapped burger we need to unwrap.
// The `response` object has details like:
// - status: Was the request successful? (e.g., 200 means OK, 404 means not found)
// - headers: Extra info about the response (like the restaurant’s branding on the tray).
// We need to “unwrap” the response to get the actual joke, which is in JSON format.

// TOPIC: What is JSON?
// JSON (JavaScript Object Notation) is a way to store and send data, like a neatly packed burger.
// It’s a text format that looks like a JavaScript object (e.g., { "setup": "Why did...", "delivery": "Because..." }).
// APIs often send data as JSON because it’s easy for computers and humans to read.
// `response.json()` converts the raw response data into a JavaScript object we can use.

// TOPIC: Why nested `.then()`?
// `response.json()` is another asynchronous task (like unwrapping the burger to check it’s correct).
// It returns a new Promise, so we need another `.then()` to handle the result.
// Nested `.then()` happens when one Promise leads to another, like:
// 1. Get the tray (first `.then()`).
// 2. Unwrap the burger (second `.then()`).
// This is why we have a `.then()` inside another `.then()`.

    response.json().then((data) => {
// `response.json()` converts the raw response to a JavaScript object (the joke).
// It returns a Promise, so we use another `.then()` to handle the result.
// This is like unwrapping the burger to see what’s inside (e.g., a cheeseburger).
// `data` is the actual joke, like:
// { "setup": "Why did the scarecrow become a motivational speaker?",
//   "delivery": "Because he was outstanding in his field!" }
// It’s a JavaScript object we can now use.

      console.log(data);
// `console.log(data)` prints the joke object to the browser’s console (like showing your burger to friends).
// The console is a tool in browsers (open it with F12) where developers see output or errors.
// Here, you’d see the joke’s setup and delivery printed as an object.
    });
// Closing the nested `.then()`.
// This block runs only after `response.json()` finishes and gives us the joke data.
  })
// Closing the first `.then()`.
// This block runs only after `fetch` succeeds and gives us the response.

// TOPIC: What is `.catch()`?
// `.catch()` is a method you call on a Promise to handle errors if the Promise is rejected (fails).
// It’s like the restaurant saying, “Sorry, we’re out of burgers” if something goes wrong.
// If any Promise in the chain fails (e.g., `fetch` or `response.json`), `.catch()` runs.
// The `err` parameter tells us what went wrong (like “NetworkError: Failed to fetch”).
// Without `.catch()`, errors would fail silently, like waiting forever for a burger that never comes.

// TOPIC: Why handle errors?
// Errors can happen for many reasons, like:
// - No internet (can’t reach the API).
// - The API is down (like the restaurant being closed).
// - The response isn’t valid JSON (like getting a salad instead of a burger).
// Handling errors with `.catch()` helps us debug and make our app user-friendly.

  .catch((err) => {
// If anything goes wrong in the Promise chain (e.g., `fetch` fails or `response.json` fails),
// this function runs. It’s like the cashier explaining why you didn’t get your burger.
// `err` is an error object with details about the problem (e.g., “TypeError: Failed to fetch”).
// It’s like the cashier saying, “Our grill is broken, no burgers today.”

    console.log(err);
// `console.log(err)` prints the error to the console, so we know what went wrong.
// This is like writing down the cashier’s explanation to tell your friends why you’re hungry.
// In a real app, you might show a message to the user, like “Oops, can’t get a joke right now!”
  });
// Closing the `.catch()`.
// This block runs only if an error occurs in the Promise chain.

// TOPIC: Why chain `.then()` and `.catch()`?
// Promises let us chain `.then()` and `.catch()` to handle asynchronous tasks step-by-step.
// It’s like a clear process at the restaurant:
// 1. Place order (fetch).
// 2. Pick up tray when ready (first `.then()`).
// 3. Unwrap burger (nested `.then()`).
// 4. Handle problems if they arise (`.catch()`).
// Chaining keeps our code organized and ensures each step happens in order.

// TOPIC: What happens when this code runs?
// 1. `fetch` sends the request to JokeAPI (order placed).
// 2. If the request succeeds, the first `.then()` gets the response (tray picked up).
// 3. `response.json()` converts the response to a joke object (burger unwrapped).
// 4. The nested `.then()` prints the joke (burger shown to friends).
// 5. If anything fails (no internet, bad response), `.catch()` prints the error (cashier explains problem).
// The code runs asynchronously, so it doesn’t freeze the app while waiting for the API.

// TOPIC: What is the console?
// The console is a tool in browsers (open with F12 > Console tab) where developers print messages.
// `console.log` is like writing a note to yourself or others about what’s happening in the code.
// Here, we print the joke or error to see the result in the console.

// TOPIC: Could we write this code differently?
// Yes! Modern JavaScript offers `async/await`, which is a simpler way to handle Promises.
// It’s like saying, “Wait for my burger, then give it to me,” instead of using receipts and callbacks.
// Example (not used here but for reference):
// async function getJoke() {
//   try {
//     const response = await fetch("...");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// `async/await` is just a cleaner way to do the same thing as `.then()` and `.catch()`.

// TOPIC: Why is this code useful?
// This code shows how to:
// - Fetch data from an API (like getting jokes for a website).
// - Handle asynchronous tasks with Promises.
// - Process data (convert JSON to usable objects).
// - Handle errors gracefully.
// It’s a foundation for building apps that talk to the internet, like joke apps, weather apps, or social media.

// TOPIC: What could go wrong?
// Possible issues include:
// - Network errors (no internet, like the restaurant being unreachable).
// - API errors (server down, like the kitchen being closed).
// - Invalid JSON (bad response, like getting a taco instead of a burger).
// - Rate limits (API says “too many requests,” like the restaurant saying “come back later”).
// `.catch()` helps catch these issues, but in a real app, you’d also check `response.ok`
// in the first `.then()` to ensure the response status is 200 (OK).