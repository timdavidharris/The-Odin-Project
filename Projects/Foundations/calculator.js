display.textContent = 0;
let i = 0;
let inputArray = [];

const allBtns = document.querySelectorAll('button');
allBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearAll();
        } else if (button.id === '=') {
            operate(inputArray);
        } else if (isNaN(+button.id)) {
            inputArray[i] = button.id;
            display.textContent = inputArray.join('');
            i++;
        } else {
            inputArray[i] = +button.id;
            display.textContent = inputArray.join('');
            i++;
        }
    });
});

function clearAll() {
    display.textContent = 0;
    i = 0;
    inputArray = [];
}

function add(num1, num2) {
    let sum = +num1 + num2;
    display.textContent = Math.round(sum * 100) / 100;
    runningTotal(sum);
}

function subtract(num1, num2) {
    let sum = +num1 - num2;
    display.textContent = Math.round(sum * 100) / 100;
    runningTotal(sum);
}

function multiply(num1, num2) {
    let sum = +num1 * num2;
    display.textContent = Math.round(sum * 100) / 100;
    runningTotal(sum);
}

function divide(num1, num2) {
    let sum = +num1 / num2;
    display.textContent = Math.round(sum * 100) / 100;
    runningTotal(sum);
}

// 1) consolidate double digit numbers
// 2) check the operator
// 3) set up the items as num1 & num2
function operate(inputArray) {
    if (isNaN(inputArray[1]) && inputArray.length < 4) {
        num1 = inputArray[0];
        operator = inputArray[1];
        num2 = inputArray[2];
        checkOperatorType(operator);
    } else if (inputArray.length < 3) {
        display.textContent = 'ERROR';
    } else if ((inputArray[1] === 'number') ||
        (isNaN(inputArray[0])) ||
        (isNaN(inputArray[2]))) {
        newFirstArrayNum = inputArray[0].toString() + inputArray[1].toString();
        inputArray.shift();
        inputArray.shift();
        inputArray.unshift(newFirstArrayNum);
        operate(inputArray);
    } else {
        display.textContent = 'ERROR';
    }
}

function checkOperatorType(operator) {
    if (operator === '+') {
        add(num1, num2);
    } else if (operator === '-') {
        subtract(num1, num2);
    } else if (operator === '/') {
        divide(num1, num2);
    } else if (operator === '*') {
        multiply(num1, num2);
    }
}

function runningTotal(sum) {
    inputArray = [];
    inputArray[0] = Math.round(sum * 100) / 100;
    i = 1;
}
