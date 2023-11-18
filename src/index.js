// write your code here
function welcomeToFlatburger(){
console.log('Welcome to Flatburger!')
}

const getSum = (num1, num2) => num1 + num2


    function getSumString(num1, num2, sum){
        return `${num1} + ${num2} = ${sum(num1, num2)}`

    }
let burgerNames = [ "Flatburger", "Maple Bacon Burger", "Mushroom Burger", "Avocado Bun Burger", "Ramen Burger"]
function printBurgerNames(list){
    let burgerNamesArray = []
    for(let i = 0; i < list.length; i++){
         burgerNamesArray.push(list[i])  

        }
        return burgerNamesArray
}
console.log(printBurgerNames(burgerNames))

