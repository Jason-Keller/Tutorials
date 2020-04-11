//print all numbers between -10 and 19
var num = -10;

while(num < 20) {
    console.log(num);
    num++
}

//Print all even numbers between 10 and 40
var evenNum = 10;

while(evenNum <= 40) {
    console.log(evenNum);
    evenNum+=2;
}

//Print all odd numbers between 300 and 333
var oddNum = 300;

while(oddNum <= 333) {
    if(oddNum % 2 !== 0) {
        console.log(oddNum);
    }
    oddNum+=1;
}

//Print all numbers divisble by 5 and 3 between 5 and 50
var divs = 5;

while(divs < 50) {
    if(divs % 3 === 0 && divs % 5 === 0) {
        console.log(divs);
    }
    divs+=1;
}