// Lexical Scope (static scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope or in any parent/ancestor scope

// Global scope (varOne)
// Local scope (varTwo) and its child (varFour)
// local scope (varThree) is a sibling of (varTwo)

let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo'
    console.log(varTwo);

    if (true) {
        let varFour = 'varFour'
    }

}

if (true) {
    let varThree = 'varThree'
}