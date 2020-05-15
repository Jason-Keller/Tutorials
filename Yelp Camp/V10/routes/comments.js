const express = require("express");
const router = express.Router({mergeParams: true});
const Campground = require("../models/campground");
const Comment = require("../models/comment");

//COMMENTS - NEW
router.get("/new", isLoggedIn, function(req, res){
    //find campground by ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

//COMMENTS - CREATE
router.post("/", function(req, res){
    //Lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, function(err, comment ){
                if(err){
                    console.log(err);
                } else {
                    //Add username and ID to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                   console.log("New comments username will be " + req.user.username)
                    //Save comment
                    campground.comments.push(comment);
                    campground.save();
                    comment.save();
                    console.log(comment);
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

router.get("/:comments_id/edit", function(req, res){
    comment.findById(req.params.commen_id, function(err, foundComment){
        if(err){
            res.redirect("back")
        } else {
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
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