var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = num.length -1; i >= 0; i--) {
     console.log(num[i]);
}

//isUniform()
//write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical

function isUniform (list) {
    var firstItem = list[0];
    for (var i = 0; i < list.length; i++){
        if (firstItem === list[i]) {
            console.log("True");
        } else {
            console.log("False");
        };
    };
}

isUniform(['a','a','a'])

function isUniform(list) {
    var firstItem = []
}