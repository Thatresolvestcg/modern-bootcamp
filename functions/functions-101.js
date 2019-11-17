// function - input, code, output

let greetUser = function () {
    console.log('Welcome User')
};

greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

console.log(square(3));
console.log(square(10));

// Challenge Area
// create a convertFahrenheitToCelsius
// call it a few times (32 goes to 0) (68 goes to 20)
// print the converted values

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));