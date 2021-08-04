const mainContainer = document.querySelector('main');

// create a webpage with a 16x16 grid of square divs = 256 divs in total
function addTheDivContainer(input) {
    for (let i = 0; i < input; i++) {
        let div = document.createElement('div');
        div.textContent = `||||||||||||`;
        div.setAttribute('id','div');
        mainContainer.appendChild(div);
    }
}

addTheDivContainer(256);

function changeColor() {
    const divElements = document.querySelectorAll('#div');
    divElements.forEach((item) => {
        // item.count = 0;
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
}

changeColor();
