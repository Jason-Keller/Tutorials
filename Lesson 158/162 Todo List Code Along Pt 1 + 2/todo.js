var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");

while(input !== "quit") {
    //handle input
    if(input === "list") {
        listTodos();
    } else if(input === "new") {
        addToDo();
    } else if(input === "delete"){
        deleteToDo();
    }
    //ask again for new input
    var input = prompt("What would you like to do?");
}
console.log("Okay, you quit the app");




function listTodos(){
    console.log("**********")
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**********")
}

function addToDo(){
      //ask for new todo
      var newTodo = prompt("Enter new todo");
      //add to todos array
      todos.push(newTodo);
      console.log("Added todo");
}

function deleteToDo(){
    //ask for index of todo to be delete
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice()
    todos.splice(index, 1);
    console.log("Deleted todo");
}