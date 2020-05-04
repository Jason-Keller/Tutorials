function average(scores){
        //Add scores together
        var total = 0;
        scores.forEach(function(score){
            total += score;
        });
        var avg = total/scores.length;
        return Math.round(avg);
    }
console.log("Average score for environmental science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));
console.log("Average score for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));