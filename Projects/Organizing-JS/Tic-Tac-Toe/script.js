const resetBtn = document.getElementById('reset-btn');
const runningWinsP1 = document.getElementById('running-wins-p1');
const runningWinsP2 = document.getElementById('running-wins-p2');
const numberOfTies = document.getElementById('number-of-ties');
const gameBoardSection = document.getElementById('Game-Board-Section');
const player1Turn = document.getElementById('player-1-turn');
const player2Turn = document.getElementById('player-2-turn');
let player1Name = "Player 1";
let player2Name = "Player 2";
let tieCounter = 0;
let player1WinCount = 0;
let player2WinCount = 0;
let gamesPlayed = 0;

(initialTextContent = function() {
    player1Turn.textContent = "Player 1 (X's): GO";
    player2Turn.textContent = "Player 2 (O's): WAIT";
    runningWinsP1.textContent = `${player1Name} Has Won ${player1WinCount} Game(s)`;
    runningWinsP2.textContent = `${player2Name} Has Won ${player2WinCount} Game(s)`;
    numberOfTies.textContent = `${player1Name} and ${player2Name} have had ${tieCounter} tie(s)`;
})();

gameBoardSetup = function() {
    let gameBoard = function() {
        for (let i = 0; i < 9; i++) {
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', `game-square`);
            newDiv.setAttribute('data-square', `${i + 1}`);
            newDiv.textContent = "";
            gameBoardSection.appendChild(newDiv);
        }
        resetBtn.style.display = 'none';
    }
    return {
        gameBoard,
    }
}();
gameBoardSetup.gameBoard();

turnOnClickListener = function() {
    let clickListener = function() {
        let gameSquares = document.querySelectorAll('.game-square');
        let turnCounter = 0;
        gameSquares.forEach((div) => {
            div.addEventListener('click', () => {
                if (div.textContent === '') {
                    if (turnCounter % 2 === 0) {
                        div.textContent = "x";
                        turnCounter++;
                        if (turnCounter > 3) {
                            checkWinCondition.whoWon();
                        }
                    } else {
                        div.textContent = "o";
                        turnCounter++;
                        if (turnCounter > 3) {
                            checkWinCondition.whoWon();
                        }
                    }
                }
                updateText.updateTurnText();
            });
        });
    }
    return {
        clickListener
    }
}();
turnOnClickListener.clickListener();

updateText = function() {
    let updateTurnText = function() {
        if (player1Turn.textContent === "Player 1 (X's): GO") {
            player1Turn.textContent = "Player 1 (X's): WAIT";
            player2Turn.textContent = "Player 2 (O's): GO";
        } else if (player1Turn.textContent === "Player 1 (X's): WAIT") {
            player1Turn.textContent = "Player 1 (X's): GO";
            player2Turn.textContent = "Player 2 (O's): WAIT";
        }
    }; 
    return {
        updateTurnText,
    }
}();

gameOver = function() {
    let endOfGame = function(winner) {
        let winnerInput = winner;
        if (gamesPlayed === 0){
                player1Name = prompt('Player 1, Please Type in Your Name');
                player2Name = prompt('Player 2, Please Type in Your Name');
                if (player1Name === null) {
                    player1Name = "Player 1";
                } if (player2Name === null) {
                    player2Name = "Player 2";
                }
        }
        if (winnerInput === 'x') {
            ++player1WinCount;
            updateWinCountText();
            winnerSymbolInAllSquares(winnerInput);
        } else if (winnerInput === 'o') {
            ++player2WinCount;
            updateWinCountText();
            winnerSymbolInAllSquares(winnerInput);
        } else if (winnerInput === 'tie') {
            ++tieCounter;
            updateWinCountText();
            winnerSymbolInAllSquares(winnerInput);
        }
        function updateWinCountText() {
            runningWinsP1.textContent = `${player1Name} Has Won ${player1WinCount} Game(s)`;
            runningWinsP2.textContent = `${player2Name} Has Won ${player2WinCount} Game(s)`;
            numberOfTies.textContent = `${player1Name} and ${player2Name} have had ${tieCounter} tie(s)`;
        }
        function winnerSymbolInAllSquares(winner) {
            resetBtn.style.display = '';
            let whoWon = winner;
            let gameBoxes = document.querySelectorAll('.game-square');
            if (whoWon === 'x') {
                gameBoxes.forEach((box) => {
                    box.textContent = 'x';
                });
            } else if (whoWon === 'o') {
                gameBoxes.forEach((box) => {
                    box.textContent = 'o'
                })
            } else {
                let i = 0;
                gameBoxes.forEach((box) => {
                    if (i % 2 === 0) {
                        box.textContent = 'o';
                    } else {
                        box.textContent = 'x';
                    }
                    ++i;
                })
            }
        }
            resetBtn.addEventListener('click', () => {
                let gameDivs = document.querySelectorAll('div');
                gameDivs.forEach((div) => {
                    div.remove();
                    player1Turn.textContent = "Player 1 (X's): GO";
                    player2Turn.textContent = "Player 2 (O's): WAIT";
            });
            gameBoardSetup.gameBoard();
            turnOnClickListener.clickListener();
            ++gamesPlayed;
        });
    };
    return {
        endOfGame,
    }
}();

winnerMessages = function() {
    let oWon = function() {
        player1Turn.textContent = "Player 1 (X's) LOSES";
        player2Turn.textContent = "Player 2 (O's) WINS";
        let winnerO = 'o';
        gameOver.endOfGame(winnerO);
    }
    let xWon = function() {
        player1Turn.textContent = "Player 1 (X's) WINS";
        player2Turn.textContent = "Player 2 (O's) LOSES";
        let winnerX = 'x';
        gameOver.endOfGame(winnerX);
    }
    let tie = function() {
        player1Turn.textContent = "IT'S A TIE";
        player2Turn.textContent = "";
        let winnerTie = 'tie';
        gameOver.endOfGame(winnerTie);
    }
    return {
        oWon,
        xWon,
        tie,
    }
}();

checkWinCondition = function() {
    let whoWon = function() {
        let gameBoxes = document.querySelectorAll('.game-square');
        let gameBox1 = gameBoxes.item(0).textContent;
        let gameBox2 = gameBoxes.item(1).textContent;
        let gameBox3 = gameBoxes.item(2).textContent;
        let gameBox4 = gameBoxes.item(3).textContent;
        let gameBox5 = gameBoxes.item(4).textContent;
        let gameBox6 = gameBoxes.item(5).textContent;
        let gameBox7 = gameBoxes.item(6).textContent;
        let gameBox8 = gameBoxes.item(7).textContent;
        let gameBox9 = gameBoxes.item(8).textContent;
             // top row win condition
        if ((gameBox1 === gameBox2) && 
            (gameBox2 === gameBox3)) {
                if (gameBox3 === 'x') {
                    winnerMessages.xWon();
                } else if (gameBox3 === 'o') {
                    winnerMessages.oWon();
                } // Middle row win condition
        } if ((gameBox4 === gameBox5) && 
              (gameBox5 === gameBox6)) {
                if (gameBox6 === 'x') {
                    winnerMessages.xWon();
                } else if (gameBox6 === 'o') {
                    winnerMessages.oWon();
                }// bottom row win condition
        } if ((gameBox7 === gameBox8) && 
              (gameBox8 === gameBox9)) {
                if (gameBox9 === 'x') {
                    winnerMessages.xWon();
                } else if (gameBox9 === 'o') {
                    winnerMessages.oWon();
                } // left column win condition
        } if ((gameBox1 === gameBox4) && 
              (gameBox4 === gameBox7)) {
                if (gameBox7 === 'x') {
                    winnerMessages.xWon();
                } else if (gameBox7 === 'o') {
                    winnerMessages.oWon();
                } // middle column win condition
        } if ((gameBox2 === gameBox5) && 
              (gameBox5 === gameBox8)) {
                if (gameBox8 === 'x') {
                    winnerMessages.xWon();
                } else if (gameBox8 === 'o') {
                    winnerMessages.oWon();
                } // right column win condition
        } if ((gameBox3 === gameBox6) && 
              (gameBox6 === gameBox9)) {
                if (gameBox9 === 'x') {
                    winnerMessages.xWon();
                } else if (gameBox9 === 'o') {
                    winnerMessages.oWon();
                } // top left to bottom right diagonal win condition
        } if ((gameBox1 === gameBox5) && 
              (gameBox5 === gameBox9)) {
                if (gameBox9 === 'x') {
                    winnerMessages.xWon();
                } else if (gameBox9 === 'o') {
                    winnerMessages.oWon();
                } // top right to bottom left diagonal win condition
        } if ((gameBox3 === gameBox5) && 
              (gameBox5 === gameBox7)) {
                if (gameBox7 === 'x') {
                    winnerMessages.xWon();
                } else if (gameBox7 === 'o') {
                    winnerMessages.oWon();
                } // Checks for tie condition
        } if ((gameBox1 !== '') && 
              (gameBox2 !== '') &&
              (gameBox3 !== '') &&
              (gameBox4 !== '') &&
              (gameBox5 !== '') &&
              (gameBox6 !== '') &&
              (gameBox7 !== '') &&
              (gameBox8 !== '') &&
              (gameBox9 !== '')) {
                winnerMessages.tie();
                }
        }
    return {
        whoWon,
    }
}();
