const clearButton = document.querySelector('#clear-btn');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
const percent = document.querySelector('#percent');
const display = document.querySelector('#display');

let userInput = [];
let i = -1;

display.textContent = 0;

const allBtns = document.querySelectorAll('button');
allBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearAll();
        } else if (isNaN(+button.id)) {
            display.textContent = button.id;
        } else {
            ++i;
            userInput[i] = +button.id;
            display.textContent = button.id;
            if (!isNaN(userInput[1])) {
                checkMathOperation(button.id, userInput[0], userInput[1]);
            }
        }

    });
});

function clearAll() {
    display.textContent = 0;
    userInput = '';
    mathOperator = '';
}

function readOutNum(input) {
    console.log(input);
}

function checkMathOperation(button, num1, num2) {
    if (button.id === '+') {
        let sum = num1 + num2;
        display.textContent = sum;
        console.log(sum);
    } else if (button.id === '-') {
        sum = num1 - num2;
        console.log(sum);
    } else if (button.id === '/') {
        sum = num1 / num2;
        console.log(sum);
    } else if (button.id === '.') {
        sum = num1.num2;
        console.log(sum);
    } else if (button.id === '*') {
        sum = num1 * num2;
        console.log(sum);
    } else if (button.id === 'percent') {
        sum = num1 / num2;
        console.log(sum);
    } else if (button.id === '=') {
        sum = num1 * num2;
        console.log(sum);
    }
}