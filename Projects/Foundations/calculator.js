// const clearButton = document.querySelector('#clear-btn');
// const divide = document.querySelector('#divide');
// const multiply = document.querySelector('#multiply');
// const minus = document.querySelector('#minus');
// const add = document.querySelector('#add');
// const equals = document.querySelector('#equals');
// const percent = document.querySelector('#percent');
// const display = document.querySelector('#display');

display.textContent = 0;
let i = 0;
let inputArray = [];

const allBtns = document.querySelectorAll('button');
allBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearAll();
        } else if (button.id === '=') {
            console.log('The equals sign button was pressed');
            operate(inputArray);
        } else if (isNaN(+button.id)) {
            inputArray[i] = button.id;
            display.textContent = inputArray.join('');
            i++;
            checkArrayLength(inputArray.length);
        } else {
            inputArray[i] = +button.id;
            display.textContent = inputArray.join('');
            i++;
            checkArrayLength(inputArray.length);
        }
    });
});

function checkArrayLength(array) {
    arrayLength = array;    
    if (arrayLength >=3 ) {
        console.log('Array length is >= 3');
    }
}

function clearAll() {
    display.textContent = 0;
    i = 0;
    inputArray = [];
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

// 1) consolidate double digit numbers
// 2) check the operator
// 3) set up the items as num1 & num2
function operate(inputArray) {
    inputArray.forEach((item) => {
        inputArray.join('');
        switch(item) {
            case '+':
                operateArray.split('+');
            case '-':
                operateArray.split('-');
            case '/':
                operateArray.split('/');
            case '*':
                operateArray.split('*');
        }
    });
    console.log(operateArray);
}

// array.forEach((item) => {
//     if (item === '+') {
//         add(num1, num2);
//     } else if (item === '-') {
//         subtract(num1, num2);
//     } else if (item === '/') {
//         divide(num1, num2);
//     } else if (item === '*') {
//         multiply(num1, num2);
//     } else if (item === 'percent') {
//         sum = num1 / num2;
//         console.log(sum);
//     } else if (item === '.') {
//         sum = num1.num2;
//         console.log(sum);
//     } else if (item === '=') {
//         sum = num1 * num2;
//         console.log(sum);
//     }
// });
