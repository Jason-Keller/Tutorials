// Here's the new way of making requests with the key:

// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 

// So everything is exactly the same as Colt explains in the following videos, except you must append &apikey=thewdb to the end of your url.

// http://www.omdbapi.com/?s=star&apikey=thewdb
//=============================================================================================

var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});


app.get("/results", function(req, res){
    const query = req.query.search
    const url = "http://www.omdbapi.com/?s="
    const key = "&apikey=thewdb"
    request(url + query + key, function(error, response, body){
        if(!error && response.statusCode == 200){
            const data = JSON.parse(body)
            res.render("results",  {data: data});
        }
    });
});

app.listen(3000, function(){
    console.log("=====================================")
    console.log("Server is listening")
    console.log("=====================================")
});