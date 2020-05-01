const li = document.querySelectorAll("li");
const exit = document.querySelectorAll("span");
const parent = document.getElementById("my-list");

for(var i = 0; i < li.length; i++){
    li[i].addEventListener("click", function(){
        console.log("Hello");
        this.classList.toggle("completed");
    });
}

for(var i = 0; i < li.length; i++){
    exit[i].addEventListener("click", "li", function(e){
        e.stopPropagation();
        console.log("Hello");
        this.classList.toggle("completed");
    });
}