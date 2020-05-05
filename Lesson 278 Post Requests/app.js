var express = require("express");
var app = express();

//Set the view engine to ejs
app.set("view engine", "ejs");

//Define the root director
app.get("/", function(req, res){
    res.render("home");
});

//Create a post route -- this is used any time we want to add something to the database
app.post("/addfriend", function(req, res){
    console.log(req.body);
    res.send("You have reached the post route!");
});

//Create a "friends" page
app.get("/friends", function(req, res){
    var friends = ["Ryan", "Shaun", "Blake", "Erika", "Ryan", "Griffin", "Austin", "Kathryn", "Chris"];
    res.render("friends", {friends: friends});
});

//Create the 404 page
app.get("*", function(req, res){
    res.send("You have hit a 404");
});










app.listen(3000, function(){
console.log("=========================");
console.log("Server listening!");
console.log("=========================");
});