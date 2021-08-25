// const clearButton = document.querySelector('#clear-btn');
// const divide = document.querySelector('#divide');
// const multiply = document.querySelector('#multiply');
// const minus = document.querySelector('#minus');
// const add = document.querySelector('#add');
// const equals = document.querySelector('#equals');
// const percent = document.querySelector('#percent');
// const display = document.querySelector('#display');

let userInput = [];

display.textContent = 0;
let i = 0;
let inputObjects = {};

let num1 = null;
let num2 = null;

const allBtns = document.querySelectorAll('button');
allBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearAll();
        } else if (isNaN(+button.id)) {
            display.textContent = button.id;
            inputObjects.operator = button.id;
            i++;
            // operate(button.id);
        } else {
            display.textContent = button.id;
            inputObjects.num = button.id;
            i++;
            // operate(button.id);
        }
    });
});

function clearAll() {
    display.textContent = 0;
    userInput = '';
    mathOperator = '';
    i = 0;
    inputObjects = {};
}

function add(num1, num2) {
    let sum = num1 + num2;
    display.textContent = sum;
    console.log(sum);
}

function subtract(num1, num2) {
    let sum = num1 - num2;
    display.textContent = sum;
    console.log(sum);
}

function multiply(num1, num2) {
    let sum = num1 * num2;
    display.textContent = sum;
    console.log(sum);
}

function divide(num1, num2) {
    let sum = num1 / num2;
    display.textContent = sum;
    console.log(sum);
}

// function operate(array) {
//     array.forEach((item) => {
//         if (item === '+') {
//             add(num1, num2);
//         } else if (item === '-') {
//             subtract(num1, num2);
//         } else if (item === '/') {
//             divide(num1, num2);
//         } else if (item === '*') {
//             multiply(num1, num2);
//         } else if (item === 'percent') {
//             sum = num1 / num2;
//             console.log(sum);
//         } else if (item === '.') {
//             sum = num1.num2;
//             console.log(sum);
//         } else if (item === '=') {
//             sum = num1 * num2;
//             console.log(sum);
//         }
//     });
// }
