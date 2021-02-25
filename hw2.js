/*Task1
        var a = 1, b = 1, c, d;
        c = ++a; alert(c);           // 2 // префиксная форма инкремента увеличивает переменную на единицу и возвращает новое значение
        d = b++; alert(d);           // 1 // постфиксная форма инкремента увеличивает переменную на единицу, но возвращает старое значение
        c = (2+ ++a); alert(c);      // 5 // работает как с = (2 + 3), т.к. предыдущее значение а увеличено на единицу (двойка становится тройкой до выполнения)
        d = (2+ b++); alert(d);      // 4 // работает как d = (2 + 2), для b применено значение b++=2, но после выполнения b уже приобретает значение 3
        alert(a);                    // 3 // стало 3 на 8 строке
        alert(b);                    // 3 // стало 3 на 9 строке после выполнения
    */

/*Task2
    var a = 2;
    var x = 1 + (a *= 2) // x = 5, т.к. а *= 2 работает как а = а * 2
*/

// Task3
function getRandomNumber() {
    return Math.floor(Math.random() * 100 * 2 - 100);
}

let a = getRandomNumber();
let b = getRandomNumber();
if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    console.log(a + b);
}

// Task4
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function showNumberSequence(a) {
    switch (a) {
        case 0:
            console.log(a++);
        case 1:
            console.log(a++);
        case 2:
            console.log(a++);
        case 3:
            console.log(a++);
        case 4:
            console.log(a++);
        case 5:
            console.log(a++);
        case 6:
            console.log(a++);
        case 7:
            console.log(a++);
        case 8:
            console.log(a++);
        case 9:
            console.log(a++);
        case 10:
            console.log(a++);
        case 11:
            console.log(a++);
        case 12:
            console.log(a++);
        case 13:
            console.log(a++);
        case 14:
            console.log(a++);
        case 15:
            console.log(a);
            break;
        default:
            console.log('Invalid argument');
    }
}

const min = 0, max = 15;
const a = getRandomInRange(min, max);
showNumberSequence(a);

// Task5
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result);

function subtraction(a, b) {
    return a - b;
}

result = subtraction(4, 2);
console.log(result);

function multiplication(a, b) {
    return a * b;
}

result = multiplication(3, 2);
console.log(result);

function division(a, b) {
    return a * b;
}

result = division(3, 2);
console.log(result);


// Task6
function mathOperation(a, b, operation) {
    switch (operation) {
        case 'sum':
            return sum(a, b);
        case 'subtraction':
            return subtraction(a, b);
        case 'multiplication':
            return multiplication(a, b);
        case 'division':
            return division(a, b);
        default:
            return null;
    }
}

result = mathOperation(1, 2, 'division');
console.log(result);

/* Task7
null > 0; // false, т.к. операторы сравнения >< приводят null к Number(null)=0
null == 0; // false, данный оператор не приводит null к 0
null >= 0; // true, здесь null также приводится к 0
0 - это переменная в значении типа Number, а null-это отсутствие значения, но в обоих случаях переменная существует.
 */

// Task8
function power(val, pow) {
    return (pow == 1) ? val : (val * power(val, pow - 1));
}

result = power(3, 2);
console.log(result);

