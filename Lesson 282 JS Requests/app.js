//Make a request from node
var request = require("request");

request("https://api.nationalize.io/?name=michael", function(error, response, body) {
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData);
    } 
});