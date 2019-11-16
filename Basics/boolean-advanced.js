let isAccountLocked = false;
let userRole = 'user'

if (isAccountLocked) {
    console.log('Account is locked');
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome!')
}


//challenge area

let temp = 45;

// cold, hot, fine for going out 
// else if to hit all three scenarios
// 31 cold, 120 hot, anything else to be fine 


if (temp <= 32) {
    console.log('It is too cold outside.');
} else if (temp >= 110) {
    console.log('It is too hot outside.')
} else {
    console.log('Looks great out!')
}