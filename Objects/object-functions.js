let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}


let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// challenge area 
// create function take fahrenheit in, return object with fahrenheit, kelvin and celsius
// call the function and dump in console.


let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: (fahrenheit),
        celsius: Math.floor((fahrenheit - 32) * (5 / 9)),
        kelvin: Math.floor((fahrenheit + 459.67) * (5 / 9))
    }
}

let temps = convertFahrenheit(74)
console.log(`Your value in fahrenheit was ${temps.fahrenheit} which converts to ${temps.celsius} celsius or ${temps.kelvin} kelvin`)
