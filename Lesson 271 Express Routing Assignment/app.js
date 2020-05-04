//INSTRUCTIONS:
//1. Create a Express app from scratch
//2. Create a package.json using npm init and add express as a dependency
//3. Add three routes in the app.js:

//1. Visiting '/' should print "Hi there and welcome to my assignment!"
//2. Visiting "/speak/pig should print "The pig says oink


var express = require("express");
var app = express();

// Tell express to listen to requests (start server)
app.listen(3000, function(){
    console.log("=========================================================")
    console.log("The server has started!")
    console.log("=========================================================")
});

//Speak =========================================================
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof woof!",
        cat: "I hate you, human",
        goldfish: "...."
    }
    var animal = req.params.animal.toLocaleLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says: " + sound);
});
//Speak =========================================================

//Message =========================================================
app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = ""

    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});
//Message =========================================================






//This is the homepage
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

//Catch all traffic not going to the right place
app.get("*", function(req, res){
    res.send("404 not found... What are you doing with your life?");
});