const gameBoardSection = document.getElementById('Game-Board-Section');

const makeGameBoard = (() => {
    i = 0;
    while (i < 9) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', `game-square`);
        newDiv.setAttribute('data', `data-square-${i + 1}`)
        newDiv.textContent = "";
        gameBoardSection.appendChild(newDiv);
        i++;
    }   
})();

const playARound = (() => {
    let turnCounter = 0;
    const playerX = (turn, marker) => {
        if (turnCounter % 2 === 0){
        this.turn = null; 
        } else {
            this.turn = true;
        }
        this.marker = "x";
        turnCounter++;
        return this.turn, this.marker;
    };
    const playerO = (turn, marker) => {
        if (turnCounter % 2 !== 0){
        this.turn = true;
        } else {
            this.turn = null;
        }
        turnCounter++;
        this.marker = "o";
        return this.turn, this.marker;
    };
})();

const clickOnGameSquares = (() => {
    let gameSquares = document.querySelectorAll('.game-square');
    gameSquares.forEach((div) => {
        div.addEventListener('click', () => {
            if (div.textContent === "o") {
            div.textContent = "x";
            } else {
                div.textContent = "o"
            }
        });
    });
})();