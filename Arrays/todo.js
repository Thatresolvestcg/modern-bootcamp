//challenge area
// create an area of todos, five different todos
// print a message that includes the length (how many todos, where x is the actual length)
// print the first and second to last items --> todo: actual todo text 

const toDoList = ['Learn React', 'Start using Nightwatch', 'Implement TDD', 'Learn more about Javascript', 'Console log errors']

// console.log(`You have ${toDoList.length} todos, the first todo: is ${toDoList[0]} and the second to last todo: is ${toDoList[toDoList.length - 2]}`)


// delete the third item
// add a new item at the end - can be anything
// remove the first item from the list 


toDoList.splice(2, 1)
console.log(toDoList)
toDoList.push('new item for a lazy dude')
console.log(toDoList)
toDoList.shift()
console.log(toDoList)

