const li = document.querySelectorAll("li");
const exit = document.querySelectorAll("span");
const parent = document.getElementById("myList");
const input = document.querySelector("input");
const newListItem = document.getElementById(".new-list");

for(var i = 0; i < li.length; i++){
    li[i].addEventListener("click", function(){
        console.log("Hello");
        this.classList.toggle("completed");
    });
}

for(var i = 0; i < exit.length; i++){
    exit[i].addEventListener("click", function(e){
        e.stopPropagation();
        var thisLi = document.querySelector("li");
        thisLi.remove([i]);
        console.log("Deleted " + thisLi.textContent);
    });
}

input.addEventListener("keyup", function(){
    const keyPress = event.keyCode;
    const toDoText = this.value;
    if (keyPress == 13){
        console.log(toDoText);
        this.value = "";
        parent.insertAdjacentHTML("beforeend", "<li><span>X</span> " + toDoText + "</li>");
    }
});

// listItemFactory(content) 
//  element = doc.createElement(li)
//  element.addEventListener
//  element.innerHTML = content
//  return element