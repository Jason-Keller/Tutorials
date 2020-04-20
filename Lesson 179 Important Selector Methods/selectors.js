var tag = document.getElementById("highlighted");
var tags = document.getElementsByClassName("bolded");
var tagert = document.getElementsByTagName("li");
console.log(tagert[0])
console.log(tags[0]) 


//querySelector
//Returns the first element that matches a given CSS-style selecotr
//Will give you the VERY FIRST match. Always just returns one element
var tagin = document.querySelector(".bolded");
//Can also take in a tag name and return the first match

//querySelectorAll
//Returns a list of elements that matches a given CSS-style selector
var e = document.querySelectorAll(".bolded");