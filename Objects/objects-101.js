let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'


console.log(`${myBook.title} by ${myBook.author}`)

// challenge area
// create a person object, name, age and location 
// make a string that says person is age and lives in location
// then increase age by one and print message again

let myPerson = {
    name: 'Ashley',
    age: 31,
    location: 'Manchester'
}

console.log(`${myPerson.name} is ${myPerson.age} years old and lives in ${myPerson.location}.`)

myPerson.age++

console.log(`${myPerson.name} is ${myPerson.age} years old and lives in ${myPerson.location}.`)
