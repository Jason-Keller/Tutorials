//NODE STUFF================================================
const randomWords = require('random-words');
//NODE STUFF================================================
//SELECTOR STUFF============================================
const button = document.getElementById('#button');
//SELECTOR STUFF============================================
const correctWord = randomWords(1);
const answerArray = [];
const failure = 10;
const wrongGuess = 0;

console.log(correctWord);


const guess = window.prompt("Please guess make a guess");
if (guess.split('') ===! correctWord) {
    console.log('your correct letters were ' + guess);
}










// if (guess.length > 1) {
//     guess = window.prompt("Please guess a SINGLE letter");
// } else {
//     for (var i = 0; i < correctWord.length; i++) {
//         if (guess[i] !== correctWord[i]){
//             wrongGuess++;
//         } else {
//             if (guess[i] === correctWord[i]) {
//                 answerArray.Array.push(guess[i]);
//             } else {
//                 if (answerArray === correctWord) {
//                     console.log("Congrats you won!");
//                 } else {
//                     if (wrongGuess === failure) {
//                         console.log("You failed!");
//                     }
//                 }
//             }
//         }
//     }
// }


