// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// function isIsogram(word){
//     var isogram = word.split("")
//     console.log(isogram);
//     for (var i = 0; i < isogram.length; i++){
//         if (isogram[i] !== isogram[i]){
//             console.log("True, this is an isogram.");
//         } else if (isogram[i] === isogram[i]) {
//             console.log("False, this is not an isogram.");
//         }
//     }
// }

// function isIsogram(word){
//     const isogram = word.toLowerCase().split("");
//     console.log(isogram);
//     for (var i = 0; i < isogram.length; i++){

//     }
// }


function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i) {
      for(j = i + 1; j < str.length; ++j) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
 }