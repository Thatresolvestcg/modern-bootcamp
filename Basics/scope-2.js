// we can define the same variable only once per scope
// this is variable shadowing 

let name = 'Ashley'

if (true) {
    let name = 'Mickey'
    if (true) {
        name = 'Barry'
        console.log(name);
    }
}

if (true) {
    console.log(name)
}