const mainContainer = document.querySelector('main');

// create a webpage with a 16x16 grid of square divs = 256 divs in total
function addTheDivContainer(input) {
    for (let i = 0; i < input; i++) {
        let div = document.createElement('div');
        div.textContent = `|||X||`;
        div.setAttribute('id','div');
        mainContainer.appendChild(div);
    }
}

addTheDivContainer(256);

let divList = document.querySelectorAll('div');
div.onmouseover = changeColor();
div.onmouseout = changeColor();

function changeColor() {
    theDiv.style.cssText = 'background-color: yellow;';
}
