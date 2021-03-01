'use strict'

// Task1
let simpleNumber = 2
while (simpleNumber <= 100) {
    let number = true
    let min = 2
    while (simpleNumber > min) {
        if (simpleNumber % min == 0) {
            number = false;
            break;
        }
        min++;
    }
    if (number) {
        console.log(simpleNumber)
    }
    simpleNumber++;
}

//Task2

const cart = [
    ['product1', 5, 153],
    ['product2', 7, 153],
    ['product3', 12, 32],
    ['product4', 30, 78],
    ['product5', 71, 481],
    ['product6', 125, 540]
];
let total = 0
function countCartPrice(cart) {
    for (let i = 0; i < cart.length; i++) {
        total += cart[i][1] * cart[i][2];
    }
    return total;
}

console.log(countCartPrice(cart));

//Task3

for (let i = 0; i <= 9; console.log(i++));

//Task4

for (let i = ''; i.length <= 20; i += 'x'){
    console.log(i);
}