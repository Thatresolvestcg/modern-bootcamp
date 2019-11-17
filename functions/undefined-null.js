// undefined for variable

let name;
name = 'Ashley'

if (name === undefined) {
    console.log('Please provide a name!')
} else {
    console.log(name)
}

// undefined for function
// undefined as function return default value 
let square = function (num) {
    console.log(num)
}

let result = square();
console.log(result);

// null as assigned value
let age = 31
age = null
console.log(age);