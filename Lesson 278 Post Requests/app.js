var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
//Set the view engine to ejs
app.set("view engine", "ejs");

var friends = ["Ryan", "Shaun", "Blake", "Erika", "Ryan", "Griffin", "Austin", "Kathryn", "Chris"];

//Define the root director
app.get("/", function(req, res){
    res.render("home");
});

//Create a post route -- this is used any time we want to add something to the database
app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
    console.log(req.body.newfriend);
});

//Create a "friends" page
app.get("/friends", function(req, res){
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