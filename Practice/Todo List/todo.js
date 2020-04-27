document.querySelector(".begin").addEventListener("click", function(){
    responder();
});


function responder() {
    var response = window.prompt("Please enter your name")
    console.log("Hello, " + response + ". Shall we begin?")
    $(".responder").text("Hello, " + response + ". Shall we begin?");
    return response
}
