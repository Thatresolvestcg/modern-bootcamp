let num = 103.941

// specify decimals - in this case, to two places for the above.
console.log(num.toFixed(2))

//to round
console.log(Math.round(num)) // to nearest
console.log(Math.floor(num)) // round down 
console.log(Math.ceil(num)) // round up 

const min = 10
const max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1))
// math.random gives a number between 0 and .999999 
// now we can show between 0-10 

console.log(randomNum)

// challenge area
// create a function that takes in a guess, single argument then generate a random number 
// guess between 1-5, true if correct false if incorrect


let makeGuess = function (guess) {
    const min = 1
    const max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1))

    return guess === randomNum
}


console.log(makeGuess(3))