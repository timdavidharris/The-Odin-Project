const clearButton = document.querySelector('#clear-btn');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
const percent = document.querySelector('#percent');
const display = document.querySelector('#display');

let userInput = '';
let mathOperator = '';

display.textContent = 0;

const allBtns = document.querySelectorAll('button');
allBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearAll();
        } else if (isNaN(+button.id)) {
            checkMathOperation(button.id);
            display.textContent = button.id;
        } else {
            userInput = +button.id;
            operate(userInput);
            display.textContent = button.id;
        }

    });
});

function clearAll() {
    display.textContent = 0;
    userInput = '';
    mathOperator = '';
}

// function operate(input) {

// }

function checkMathOperation(string) {
    if (button.id === '+') {

    } else if (button.id === '-') {

    } else if (button.id === '/') {

    } else if (button.id === '=') {

    } else if (button.id === '.') {

    } else if (button.id === '*') {

    } else if (button.id === 'percent') {

    }
}