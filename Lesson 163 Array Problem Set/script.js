var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printReverse(arr){
for (var i = num.length -1; i >= 0; i--) {
     console.log(num[i]);
    }
}

//isUniform()
//write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
function isUniform (arr){
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

//sumArray()
//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
function sumArray(arr){
    var result = 0;
    arr.forEach(function(element){
        result += element;
    });
return result;
}

//max()
//Write a function max() that accepts an array of numbers and returns the maximum number in the array
function max(arr){
    var max = arr[0];
        for(var i = 1; i < arr.length; i++){
            if(arr[i] < max){
                max = arr[i];
            }
        }
    return max;
}