//Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
function isEven(num){
    if(num % 2 === 0){
        return "Even";
    }
    else {
        return "False";
    }
}
//Write a function factorial() which takes a single numeric argument and returns the factorial of that number
function factorial(num){
    return (num != 1) ? num * factorial (num-1) :1;
}

//Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
//Basically, replace "-" with "_"s

function kebabToSnake(str){
    var myString = str.replace(/-/g, "_");
    return myString;
}