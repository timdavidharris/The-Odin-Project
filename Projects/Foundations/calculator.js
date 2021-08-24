const clearButton = document.querySelector('#clear-btn');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
const percent = document.querySelector('#percent');
const display = document.querySelector('#display');

display.textContent = 0;

const allBtns = document.querySelectorAll('button');
allBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clear();
        } else if (isNaN(+button.id)) {
            console.log('You pressed the an operation button');
        } else {
            console.log(+ button.id);
            display.textContent = button.id;
        }

    });
});

function clear() {
    display.textContent = 0;
}