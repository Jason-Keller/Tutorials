var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//Add a new cat to the DB

// var george = new Cat({
//     name: "Tito",
//     age: 1,
//     temperament: "Shy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong");
//     } else {
//         console.log("We just saved a cat to the database");
//         console.log(cat);
//     }
// });

//Retrieve all cats from the DB

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no!");
        console.log(err);
    } else {
        console.log("ALL THE CATS...");
        console.log(cats);
    }
});

