var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    mongoose     = require("mongoose")

//Connect Mongoose
mongoose.connect("mongodb://localhost/yelp_camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(    
//     {
//     name: "Estes Park", 
//     image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
//     }, function(err, campground){
//     if(err){
//         console.log("ERROR!");
//     } else {
//         console.log("CAMPGROUND CREATED: ");
//         console.log(campground);
//     }
// });


// const campgrounds = [
//     {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
//     {name: "Lake Wellington", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
//     {name: "Estes Park", image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"}
// ];

app.get("/", function(req, res){
    res.render("landing")
});

//This is the campgrounds page, with the constant campgrounds. We will be adding to it with the campgrounds post route
app.get("/campgrounds", function(req, res){
    //Get all camgrounds from DB, and render DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log("Error!");
        } else {
            res.render("campgrounds", {campgrounds:allCampgrounds});
        }
    });
});

app.post("/campgrounds", function(req, res){
    //Get data from form and add to the campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = {name: name, image: image};
    //Create a new campground and save it to the DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //Redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3000, function(){
    console.log("=======================================")
    console.log("The YelpCamp server is listening")
    console.log("=======================================")
});