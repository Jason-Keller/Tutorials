// var button = document.querySelector("button")
// button.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple"
//         isPuprle = true
//     }
//     // If white, make it purple
//         // Make it purple
//     // Else
//         // Make it white 
//     isPurple = !isPurple;
// });

var button = document.querySelector("button")
var isPurple = false;

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});