// Require necessary NPM modules
const express = require("express");
const bodyParser = require("body-parser"); // Middleware to parse request bodies
const date = require(__dirname + "/date.js"); // Custom module to get the date

// Initialize express app
const app = express();

// Array to store user input tasks
const userInputs = [];

// Middlewares
app.use(bodyParser.urlencoded({extended: true})); // Parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from 'public' directory

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Handle GET request to the root route
app.get("/", (req, res) => {
  const currentDate = date.getDate(); // Get current date
  // Render 'list' template with today's date and the list of user tasks
  res.render("list", {listTitle: currentDate, newListItem: userInputs});
});

// Handle POST request to add a new task
app.post("/", (req, res) => {
  // Create a new task object with text and checked properties
  const userInput = { text: req.body.newItem, checked: false };
  userInputs.push(userInput); // Add new task to the tasks array
  console.log("User added: " + userInput.text); // Log added task
  res.redirect("/"); // Redirect to the root route
});

// Handle POST request to toggle the checked state of a task
app.post("/check", (req, res) => {
  const itemIndex = req.body.itemIndex; // Get index of the task to toggle
  userInputs[itemIndex].checked = !userInputs[itemIndex].checked; // Toggle the checked state
  res.redirect("/"); // Redirect to the root route
});

// Start the server on port 3000
app.listen(3000, () => { 
  console.log("The server is up and running at port 3000"); 
});
