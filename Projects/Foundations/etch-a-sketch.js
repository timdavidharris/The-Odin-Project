const mainContainer = document.querySelector('main');

// create a webpage with a 16x16 grid of square divs -- 256 divs in total
function addADiv(input) {
    for (let i = 0; i < input; i++) {
        let div = document.createElement('div');
        mainContainer.appendChild(div);
    }
}

addADiv(256);