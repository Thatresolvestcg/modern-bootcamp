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

let getTip = function (billTotal, tipPercent = .2) {
    total = billTotal * tipPercent;
    return `The total tip amount would be ${total}`;
}

console.log(getTip(100))
console.log(getTip(50, .5))
console.log(getTip(100, 1))