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
        newDiv.setAttribute('data-square', `${i + 1}`);
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
            if (div.textContent === '') {
                if (turnCounter % 2 === 0) {
                    div.textContent = "x";
                    updateTurnText();
                    turnCounter++;
                    checkWinCondition();
                } else {
                    div.textContent = "o"
                    updateTurnText();
                    turnCounter++;
                    checkWinCondition();
                }
            }
        });
    });
    function updateTurnText() {
        if (player1Turn.textContent === "Player 1 (X's): GO") {
            player1Turn.textContent = "Player 1 (X's): WAIT";
            player2Turn.textContent = "Player 2 (O's): GO";
        } else {
            player1Turn.textContent = "Player 1 (X's): GO";
            player2Turn.textContent = "Player 2 (O's): WAIT";
        }
    };   
    function checkWinCondition() {
        let gameBoxes = document.querySelectorAll('.game-square');
        let gameBox1 = gameBoxes.item(0).textContent;
        let gameBox2 = gameBoxes.item(1).textContent;
        let gameBox3= gameBoxes.item(2).textContent;
        let gameBox4 = gameBoxes.item(3).textContent;
        let gameBox5 = gameBoxes.item(4).textContent;
        let gameBox6 = gameBoxes.item(5).textContent;
        let gameBox7 = gameBoxes.item(6).textContent;
        let gameBox8 = gameBoxes.item(7).textContent;
        let gameBox9 = gameBoxes.item(8).textContent;
        // Middle row win condition
        if ((gameBox4 === gameBox5) && 
              (gameBox4 === gameBox6)) {
                if (gameBox4 === 'x') {
                    console.log('Player 1 (X\'s) Wins!')
                } else if (gameBox4 === 'o') {
                    console.log('Player 2 (O\'s) Wins')
                }
        } else if ((gameBox7 === gameBox8) && 
                   (gameBox7 === gameBox9)) {
                if (gameBox7 === 'x') {
                    console.log('Player 1 (X\'s) Wins!')
                } else if (gameBox7 === 'o') {
                    console.log('Player 2 (O\'s) Wins') 
                }
        // top row win condition
        } else if ((gameBox1 === gameBox2) && 
                    (gameBox1 === gameBox3)) {
                if (gameBox1 === 'x') {
                    console.log('Player 1 (X\'s) Wins!')
                } else if (gameBox1 === 'o') {
                    console.log('Player 2 (O\'s) Wins')
            }
        }
    }
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
