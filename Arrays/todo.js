//challenge area
// 1. convert array to array of objects -> text , completed (true, false)
// 2. create function to remove a todo by text value  

const todos = [{
    text: 'Learn React',
    completed: true
}, {
    text: 'use cypress',
    completed: false
}, {
    text: 'Implement TDD',
    completed: true
}, {
    text: 'Console log errors',
    completed: false
}]

const deleteToDo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)

    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed

    })
}

//challenge 

console.log(getThingsToDo(todos))