var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(res, res){
    console.log("Someone made a request to /dog");
    res.send("MEOW!");
});

// Tell express to listen to requests (start server)

app.listen(3000, function(){
    console.log("Server has started!")
});

app.get("*", function(req, res){
    res.send("You are a star");
});