//SETTING UP PACKAGES ==========================================================
const express               = require("express"),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      LocalStrategy         = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose"),
      User                  = require("./models/user")
//SETTING UP PACKAGES ==========================================================

mongoose.connect("mongodb://localhost/auth_demo_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "Erika is the best and cutest girl in the world",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==========================================
//ROUTES
//==========================================

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

//==========================================
//AUTH ROUTES
//==========================================

//SHOW SIGN UP FORM
app.get("/register", function(req, res){
    res.render("register");
});

//HANDLING USER SIGN UP
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        //LOG IN THE USER
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

//LOGIN ROUTES
//RENDER LOGIN FORM
app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
});

app.get("/logout", function(req, res){  
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function(){
    console.log("=====================================================");
    console.log("Authentication server listening on port 3000");
    console.log("=====================================================");
});