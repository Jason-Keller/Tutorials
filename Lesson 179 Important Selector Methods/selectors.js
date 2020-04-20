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

// document.getElementById("first")
// <p id="first" class="special">

// document.querySelector("#first");
// <p id="first" class="special">

// document.getElementsByClassName("special")[0]
// <p id="first" class="special">

// document.querySelector(".special");
// <p id="first" class="special">

// document.querySelectorAll(".special")[0];
// <p id="first" class="special">

// document.getElementsByTagName("p")[0]
// <p id="first" class="special"></p>