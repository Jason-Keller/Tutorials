const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");

//This is the campgrounds page, with the constant campgrounds. We will be adding to it with the campgrounds post route
//REST - INDEX route
router.get("/", function(req, res){
    //Get all campgrounds from DB, and render DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log("Error!");
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

//REST - CREATE route
router.post("/", isLoggedIn, function(req, res){
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

//REST - SHOW FORM (NEW ROUTE) to create new campground
router.get("/new", isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

//SHOW - shows more infor about one campground
router.get("/:id", function(req, res){
    //Find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground);
            //Render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

//MIDDLEWARE
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;