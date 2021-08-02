const mainContainer = document.querySelector('main');

// create a webpage with a 16x16 grid of square divs = 256 divs in total
function addTheDivContainer(input) {
    for (let i = 0; i < input; i++) {
        let div = document.createElement('div');
        div.textContent = `|||${i}||`;
        div.setAttribute('id','div');
        mainContainer.appendChild(div);
    }
}

addTheDivContainer(256);

