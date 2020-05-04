var express = require("express");
var app = express();

app.listen(3000, function(){
    console.log("=============================");
    console.log("Server is listening!");
    console.log("=============================");
});

//This will tell express to serve the CSS file in "public"
app.use(express.static("public"));
//Will expect files served to be EJS files
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Jason"},
    ]
    res.render("posts", {posts: posts});
});