var age = prompt("How old are you? Please enter a number");

if(age < 18) {
    alert("Sorry, you are not old enough to enter");
}

else if(age < 21) {
    alert("You can enter, but you cannot drink");
}

else {
    alert("Come on in. You can drink");
}