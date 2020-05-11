const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Post = require("./models/post");
const User = require("./models/user");

Post.create({
    title: "How to cook the best burger pt. 4",
    content: "Put it on the fuckin grill"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
          } 
    });
});

//Find User
//Find all posts of user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });


// User.create({
//    email: "bob@gmail.com",
//    name: "Bob Belcher" 
// });