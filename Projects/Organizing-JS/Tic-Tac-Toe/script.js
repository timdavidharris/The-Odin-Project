const gameBoardSection = document.getElementById('Game-Board-Section');
const player1Turn = document.getElementById('player-1-turn');
const player2Turn = document.getElementById('player-2-turn');
player1Turn.textContent = "Player 1 (X's): GO";
player2Turn.textContent = "Player 2 (O's): WAIT";

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

const onClickGameSquares = (() => {
    let gameSquares = document.querySelectorAll('.game-square');
    let turnCounter = 0;
    gameSquares.forEach((div) => {
        div.addEventListener('click', () => {
            if (turnCounter % 2 === 0) {
                div.textContent = "x";
            } else {
                div.textContent = "o"
            }
            turnCounter++;
            updateTurnText();
            console.log(turnCounter)
        });
    });
    function updateTurnText() {
        if (player1Turn.textContent === "Player 1 (X's): GO") {
            player1Turn.textContent = "Player 1 (O's): WAIT";
            player2Turn.textContent = "Player 2 (X's): GO";
        } else {
            player1Turn.textContent = "Player 1 (X's): GO";
            player2Turn.textContent = "Player 2 (O's): WAIT";
        }
    };    
})();


// ----------------------------------------------------------------------
// const playARound = (playerX, playerO) => {
//     let turnCounter = 0;
//     playerX = (turn, marker) => {
//         console.log(playerX);
//         if (turnCounter % 2 === 0){
//         this.turn = null; 
//         } else {
//             this.turn = true;
//         }
//         this.marker = "x";
//         turnCounter++;
//         return this.turn, this.marker;
//     };
//     playerO = (turn, marker) => {
//         console.log(playerO);
//         if (turnCounter % 2 !== 0){
//         this.turn = true;
//         } else {
//             this.turn = null;
//         }
//         turnCounter++;
//         this.marker = "o";
//         return this.turn, this.marker;
//     };
// };
