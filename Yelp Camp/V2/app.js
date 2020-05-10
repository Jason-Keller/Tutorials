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
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(    
//     {
//     name: "Estes Park", 
//     image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
//     description: "Stunning wildlife and access to local scenery. Beautiful."
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
//REST - INDEX route
app.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB, and render DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log("Error!");
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

//REST - CREATE route
app.post("/campgrounds", function(req, res){
    //Get data from form and add to the campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const desc = req.body.description;
    const newCampground = {name: name, image: image, description: desc};
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

//REST - SHOW FORM to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//SHOW - shows more infor about one campground
app.get("/campgrounds/:id", function(req, res){
    //Find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //Render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, function(){
    console.log("=======================================")
    console.log("The YelpCamp server is listening on port 3000");
    console.log("=======================================")
});