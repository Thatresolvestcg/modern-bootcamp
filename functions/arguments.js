// multiple arguments
let add = function (a, b, c) {
    return a + b + c;
};

let result = add(10, 1, 9)
console.log(result)

// default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// challenge area
// create a new function for tip calculator getTip
// takes two arguments, total, tipPercent - default could be .2 (20%)

let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on a $${total} would be $${tip}`
}

console.log(getTip(100))
console.log(getTip(50, .5))
console.log(getTip(100, 1))