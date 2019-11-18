let name = 'Ashley Knox'
let nameToTrim = '  Ashley Knox   '
// length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case 
console.log(name.toLowerCase())

// includes method - could be useful to check strength of password
let password = 'abc123098'
console.log(password.includes('password'))

// trim - useful for sanitising data
console.log(nameToTrim.trim())

// challenge
// isValidPassword - it validates a password
// returns true if a password is valid, false is not
// length needs to be more than 8, doesn't contain the word password 

let isValidPassword = function (password) {
    return password.length < 8 || password.includes('password')
}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('afdsdbc133!"'))
console.log(isValidPassword('asdasfdsdpassword'))