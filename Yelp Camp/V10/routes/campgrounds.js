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
    const author = {
        id: req.user._id,
        username: req.user.username
    }
    const newCampground = {name: name, image: image, description: desc, author: author};
    //Create a new campground and save it to the DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //Redirect back to campgrounds page
            console.log(newlyCreated);
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

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", function(req, res){
    //Is user logged in at all
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                res.redirect("/campgrounds")
            } else {
                //Does user own the campground
                if(foundCampground.author.id.equals(req.user._id)) {
                    res.render("campgrounds/edit", {campground: foundCampground});
                } else {
                    res.send("YOU DO NOT HAVE PERMISSION TO DO THAT");
                }
            }
        });
    } else {
        console.log("You need to be logged in to do that");
        res.send("You need to be logged in to do that!")
    }
        //Otherwise redirect
    //If not redirect
});

//UPDATE CAMPGROUND ROUTE
router.put("/:id", function(req, res){
    //Find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    //Redirect somewhere(show page)
});

//DESTROY CAMPGROUND ROUTE
router.delete("/:id", function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
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