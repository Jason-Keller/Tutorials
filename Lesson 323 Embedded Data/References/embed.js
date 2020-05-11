const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//USER - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
    email: "Lucy@brown.edu",
    name: "Lucy Granger"
});

newUser.posts.push({
    title: "How to Make Pumpkin Pie",
    content: "Just kidding, go to a baking class!"
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

const newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious."
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

User.findOne({name: "Lucy Granger"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        // Push the user's post into the array
        user.posts.push({
            title: "Three Things I really hate",
            Content: "That blockhead Charlie Brown!"
        });
        // Save the user's post with user.save. The second 'user' has the new post
        user.save( function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});