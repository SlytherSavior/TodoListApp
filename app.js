const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var userInputs = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req,res) => { 

  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: "long"
  };

  let date = today.toLocaleDateString("en-US", options);
 
  
  res.render("list", {kindOfDay: date, newListItem: userInputs});

})

app.post("/", (req,res) => { 
   let userInput = req.body.newItem ; 
   userInputs.push(userInput);
   console.log("User added: " + userInput);
  res.redirect("/");
})



app.listen(3000, () => { 
  console.log("The server is up and running at port 3000"); 
})