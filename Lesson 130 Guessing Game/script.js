//Create secret number
var secretNumber = 4;

//Ask user for guess
var guess = Number(prompt("Guess a number"));

//Check if guess is correct
if(guess === secretNumber) {
    alert("You got it right!");
}

//check if guess is higher
else if(guess > secretNumber) {
    alert("Too high! Guess again!");
}

//Otherwise you got it wrong
else {
    alert("This number is too small");
}