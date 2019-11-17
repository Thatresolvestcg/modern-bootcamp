// students score, total possible score
// 15/20 would be a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59 


let examResult = function (studentScore, totalPossible) {
    let percentage = studentScore * 100 / totalPossible
    // return percentage;
    if (percentage >= 90 && percentage <= 100) {
        letterGrade = 'A'
    } else if (percentage >= 80 && percentage <= 89) {
        letterGrade = 'B'
    } else if (percentage >= 70 && percentage <= 79) {
        letterGrade = 'C'
    } else if (percentage >= 60 && percentage <= 69) {
        letterGrade = 'D'
    } else if (percentage >= 0 && percentage <= 59) {
        letterGrade = 'F'
    } else {
        console.log('I am not sure about that, could you resubmit your score?')
    }
    console.log(`Congratulations you got an ${letterGrade} with a total score of ${percentage}%`)
}

examResult(9, 10);
examResult(2, 10);
examResult(6, 10);
examResult(80, 10);
