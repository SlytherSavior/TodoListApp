const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

const workItems = [];
const userInputs = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req,res) => { 

  const currentDate = date.getDate()
 
  
  res.render("list", {listTitle: currentDate, newListItem: userInputs});

})

app.post("/", (req,res) => { 
   const userInput = req.body.newItem ; 
   userInputs.push(userInput);
   console.log("User added: " + userInput);
   res.redirect("/");
})



app.listen(3000, () => { 
  console.log("The server is up and running at port 3000"); 
})

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItem: workItems});
})

app.post("/work", function(req,res){ 
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})
