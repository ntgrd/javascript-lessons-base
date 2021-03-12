'use strict';

//Task1

function numberToObject(number) {
    if (number < 0 || number > 999 || Number.isNaN(number)) {
        console.log('число не входит в заданный диапозон');
        return {};
    } else {

        return {
            units: number % 10,
            dozen: Math.floor(number / 10) % 10,
            hundreds: Math.floor(number / 100)
        };
    }
}
console.log(numberToObject(123))

//Task2

const cart = [
    {
        type: 'shirt',
        amount: 5,
        price: 500
    },
    {
        type: 'sweeter',
        amount: 10,
        price: 1000
    },
    {
        type: 'trousers',
        amount: 20,
        price: 1500
    }
];

function countCartPrice(cart) {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {

        total += cart[index].amount * cart[index].price;
    }
    return total;
}

console.log(countCartPrice(cart));

