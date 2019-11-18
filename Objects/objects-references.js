// challenge area 
// addIncome, (which account)
// reset account (make the expenses and income to zero, (which account)) - static zero
// getAccountSummary - prints current balance 
// for example, ashley has 900, 1000 in income and 100 in expenses

let myAccount = {
    name: 'Ashley',
    expenses: 0,
    income: 0
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let getAccountSummary = function (account) {
    let total = (account.income - account.expenses)
    return `The account for ${account.name} has a total of £${total} as it has £${account.income} for income and £${account.expenses} for expenses`
}

let resetAccount = function (account) {
    account.income = 0,
        account.expenses = 0
}

addIncome(myAccount, 2000)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
addIncome(myAccount, 900)
console.log(getAccountSummary(myAccount))
