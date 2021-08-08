const mainContainer = document.querySelector('main');
const h1 = document.querySelector('h1');
const resetBtn = document.createElement('button');

resetBtn.textContent = 'RESET'
h1.appendChild(resetBtn);
resetBtn.addEventListener('click', () => {
    clearScreen();
});

// create a webpage with a 16x16 grid of square divs = 256 divs in total
function addTheDivContainer(input) {
    for (let i = 0; i < input; i++) {
        let div = document.createElement('div');
        div.setAttribute('id','div');
        div.textContent = '||||||||||||||||||';
        mainContainer.appendChild(div);
    }
    changeColor();
    setGrid((Math.sqrt(input)));
}

addTheDivContainer(256);

function setGrid(userNumber) {
    let column = userNumber
    mainContainer.style.display = 'grid';
    mainContainer.style.martin = '.5em .5em .5em .5em'
    mainContainer.style.justifyItems = 'center';
    mainContainer.style.gridTemplateColumns = `repeat(${column}, 1fr)`
}

function changeColor() {
    let divElements = document.querySelectorAll('#div');
    divElements.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
}

function clearScreen() {
    let divElements = document.querySelectorAll('#div');
    divElements.forEach((item) => {
            item.style.backgroundColor = 'white';
    });
    changeColor();
    newDimensions();
}

function newDimensions() {
    let userNumber = prompt('Choose a new layout size that is 20 by 20 or less:')
        if (userNumber > 20) {
            alert('Sorry, I didn\'t understand you input. Try again.')
            newDimensions();
        } 
    let newLayout = userNumber * userNumber;
    clearOldLayout();
    addTheDivContainer(newLayout);
}

function clearOldLayout() {
    let divElements = document.querySelectorAll('#div');
    divElements.forEach((item) => {
            item.remove();
    });
}
