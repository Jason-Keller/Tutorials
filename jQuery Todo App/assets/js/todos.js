//Check off specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //Grabbing new todo text from input
        const todoText = $(this).val();
        $(this).val("");
        //Create new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});