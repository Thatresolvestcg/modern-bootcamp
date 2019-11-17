// students score, total possible score
// 15/20 would be a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59 


let examResult = function (studentScore, totalPossible) {
    let percentage = studentScore * 100 / totalPossible
    // return percentage;
    if (percentage >= 90 && percentage <= 100) {
        letterGrade = 'A'
    } else if (percentage >= 80 && percentage < 90) {
        letterGrade = 'B'
    } else if (percentage >= 70 && percentage < 80) {
        letterGrade = 'C'
    } else if (percentage >= 60 && percentage < 70) {
        letterGrade = 'D'
    } else if (percentage >= 0 && percentage < 60) {
        letterGrade = 'F'
    }
    return (`Congratulations you got an ${letterGrade} with a total score of ${percentage}%`)
}


console.log(examResult(90, 100));
console.log(examResult(2, 10));
console.log(examResult(6, 10));
console.log(examResult(8, 10));
