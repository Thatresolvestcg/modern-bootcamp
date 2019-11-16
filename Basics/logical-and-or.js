let temp = 65;

if (temp >= 60 && temp <= 90) {
    console.log('it is pretty nice out.')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside.')
} else {
    console.log('it seems fine.')
}


// challenge area

/* restaurant simulator
are both guests vegan - if so only offer vegan food
at least one guest is vegan - offer up both food options
if no vegan - offer up any option on menu
*/

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan menu')
} else if (isGuestTwoVegan || isGuestTwoVegan) {
    console.log('Offer something from each menu.')
} else {
    console.log('Offer full menu')
}