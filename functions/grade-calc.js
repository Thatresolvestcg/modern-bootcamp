// students score, total possible score
// 15/20 would be a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59 


let examResult = function (studentScore, totalPossible) {
    percentage = studentScore * 100 / totalPossible
    // return percentage;
    if (percentage >= 90 && percentage <= 100) {
        console.log(`Congratulations you got an A with a total score of ${percentage}%`)
    } if (percentage >= 80 && percentage <= 89) {
        console.log(`Congratulations you got an B with a total score of ${percentage}%`)
    } if (percentage >= 70 && percentage <= 79) {
        console.log(`Congratulations you got an C with a total score of ${percentage}%`)
    } if (percentage >= 60 && percentage <= 69) {
        console.log(`Congratulations you got an D with a total score of ${percentage}%`)
    } if (percentage >= 0 && percentage <= 59) {
        console.log(`Congratulations you got an F with a total score of ${percentage}%`)
    }
}

examResult(9, 10);
examResult(2, 10);
examResult(6, 10);
examResult(8, 10);
