//challenge area
// create an area of todos, five different todos
// print a message that includes the length (how many todos, where x is the actual length)
// print the first and second to last items --> todo: actual todo text 

const toDoList = ['Learn React', 'Start using Nightwatch', 'Implement TDD', 'Learn more about Javascript', 'Console log errors']

// console.log(`You have ${toDoList.length} todos, the first todo: is ${toDoList[0]} and the second to last todo: is ${toDoList[toDoList.length - 2]}`)

// delete the third item
// add a new item at the end - can be anything
// remove the first item from the list 


// 1. the first item
// 2. the second item

// toDoList.splice(2, 1)
// toDoList.push('new item for a lazy dude')
// toDoList.shift()
// console.log(toDoList)


toDoList.forEach(function (item, index) {
    const num = index + 1;
    console.log(`${num}. ${item}`)
})

// print the items in order for the whole array

for (let count = 0; count < toDoList.length; count++) {
    console.log(toDoList[count]);
}

