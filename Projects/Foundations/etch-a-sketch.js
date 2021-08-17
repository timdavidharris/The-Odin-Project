const mainContainer = document.querySelector('main');
const h1 = document.querySelector('h1');
const resetBtn = document.createElement('button');

addTheDivContainer(256);

resetBtn.textContent = 'RESET'
h1.appendChild(resetBtn);
resetBtn.addEventListener('click', () => {
    clearScreen();
});

function addTheDivContainer(input) {
    for (let i = 0; i < input; i++) {
        let div = document.createElement('div');
        div.setAttribute('class','div');
        div.textContent = '+';
        mainContainer.appendChild(div);
    }
    changeColor();
    setStyles((Math.sqrt(input)));
}

function changeColor() {
    let divElements = document.querySelectorAll('.div');
    divElements.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
}

function setStyles(userNumber) {
    let inputNum = userNumber
    mainContainer.style.display = 'grid';
    mainContainer.style.margin = '.5em .5em .5em .5em'
    mainContainer.style.justifyItems = 'center';
    mainContainer.style.gridTemplateColumns = `repeat(${inputNum}, 1fr)`
    if (inputNum < 38) {
        let divElements = document.querySelectorAll('.div');
        divElements.forEach((item) => {
            item.style.padding = '60% 60% 60% 60%';
        });
    } else {
        let divElements = document.querySelectorAll('.div');
        divElements.forEach((item) => {
            item.style.padding = '30% 30% 30% 30%';
        });
    }
}

function clearScreen() {
    let divElements = document.querySelectorAll('.div');
    divElements.forEach((item) => {
        item.remove();
    });
    changeColor();
    newDimensions();
}

function newDimensions() {
    let userNumber = prompt('Choose a new layout size that is 64 by 64 or less:')
        if (userNumber > 64) {
            alert('Sorry, I didn\'t understand you input. Try again.')
            return newDimensions();
        } 
    let newLayout = userNumber * userNumber;
    addTheDivContainer(newLayout);
}
