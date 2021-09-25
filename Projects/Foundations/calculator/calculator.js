display.textContent = 0;
let i = 0;
let inputArray = [];
NaNButtons = 0;
secondOperator = null;

const allBtns = document.querySelectorAll('button');
allBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearAll();
        } else if (button.id === '=') {
            operate(inputArray);
        } else if (isNaN(+button.id)) {
            NaNButtons++;
            if (NaNButtons > 1) {
                secondOperator = button.id;
                operate(inputArray);
            } else {
            inputArray[i] = button.id;
            display.textContent = inputArray.join('');
            i++;
            }
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
    NaNButtons = 0;
    secondOperator = null;
}

function add(num1, num2) {
    let sum = num1 + num2;
    display.textContent = Math.round(sum * 100) / 100;
    runningTotal(sum);
}

function subtract(num1, num2) {
    let sum = num1 - num2;
    display.textContent = Math.round(sum * 100) / 100;
    runningTotal(sum);
}

function multiply(num1, num2) {
    let sum = num1 * num2;
    display.textContent = Math.round(sum * 100) / 100;
    runningTotal(sum);
}

function divide(num1, num2) {
    if (num2 === 0) {
        return display.textContent = 'You ask the impossible';
    }
    let sum = num1 / num2;
    display.textContent = Math.round(sum * 100) / 100;
    runningTotal(sum);
}

// - consolidate double digit numbers
// - check the operator
// - set up the items as num1 & num2
function operate(inputArray) {
    if (inputArray.length < 3) {
        display.textContent = 'ERROR';
    // checks for num1 operator num2 situation
    } else if (isNaN(inputArray[1]) && inputArray.length < 4) {
        num1 = inputArray[0];
        operator = inputArray[1];
        num2 = inputArray[2];
        checkOperatorType(operator);
    // checks for 2 digit num1 situation
    } else if ((inputArray.length > 3) && 
               (isNaN(inputArray[inputArray.length - 2]))) {
        newFirstArrayNum = inputArray[0].toString() + inputArray[1].toString();
        inputArray.shift();
        inputArray.shift();
        inputArray.unshift(+newFirstArrayNum);
        operate(inputArray);
    // checks for 2 digit num2 situation
    } else if ((inputArray.length > 3) && 
               (!isNaN(inputArray[inputArray.length - 2]))) {
        newLastArrayNum = inputArray[inputArray.length - 2].toString() + inputArray[inputArray.length - 1].toString()
        inputArray.pop();
        inputArray.pop();
        inputArray.push(+newLastArrayNum);
        operate(inputArray);
    }
    else {
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
    if (secondOperator !== null) {
        inputArray[1] = secondOperator;
        display.textContent = inputArray.join('');
        i = 2;
    } else {
        i = 1;
        NaNButtons = 0;
    }
    secondOperator = null;
}
