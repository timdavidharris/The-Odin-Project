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
    runningWinsP1.textContent = `${player1Name} Has Won ${player1WinCount} Games`;
    runningWinsP2.textContent = `${player2Name} Has Won ${player2WinCount} Games`;
    numberOfTies.textContent = `${player1Name} and ${player2Name} have had ${tieCounter} ties`;
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
                            checkWinCondition.winner();
                        }
                        updateText.updateTurnText();
                    } else {
                        div.textContent = "o";
                        turnCounter++;
                        if (turnCounter > 3) {
                            checkWinCondition.winner();
                        }
                        updateText.updateTurnText();
                    }
                }
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
        } else {
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
            runningWinsP1.textContent = `${player1Name} Has Won ${player1WinCount} Games`;
            runningWinsP2.textContent = `${player2Name} Has Won ${player2WinCount} Games`;
            numberOfTies.textContent = `${player1Name} and ${player2Name} have had ${tieCounter} ties`;
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
            });
            gameBoardSetup.gameBoard();
            turnOnClickListener.clickListener();
            ++gamesPlayed;
            player1Turn.textContent = "Player 1 (X's): GO";
            player2Turn.textContent = "Player 2 (O's): WAIT";
        });
    };
    return {
        end: endOfGame,
    }
}();

winnerMessages = function() {
    let oWinMessage = function() {
        player1Turn.textContent = "Player 1 (X's) LOSES";
        player2Turn.textContent = "Player 2 (O's) WINS";
        let winnerO = 'o';
        gameOver.end(winnerO);
    }
    let xWinMessage = function() {
        player1Turn.textContent = "Player 1 (X's) WINS";
        player2Turn.textContent = "Player 2 (O's) LOSES";
        let winnerX = 'x';
        gameOver.end(winnerX);
    }
    let tieMessage = function() {
        player1Turn.textContent = "IT'S A TIE";
        player2Turn.textContent = "";
        let winnerTie = 'tie';
        gameOver.end(winnerTie);
    }
    return {
        oWon: oWinMessage,
        xWon: xWinMessage,
        tie: tieMessage,
    }
}();

checkWinCondition = function() {
    let whoWon = function() {
        let gameBoxes = document.querySelectorAll('.game-square');
        let gameBoxArray = Array.from(gameBoxes);
            for (let i = 0; i < 10; i++) {
                if ((gameBoxArray[i].textContent === gameBoxArray[i + 1].textContent) && 
                    (gameBoxArray[i + 1].textContent === gameBoxArray[i + 2].textContent)) {
                        if (gameBoxArray[i].textContent === 'x') {
                            return winnerMessages.xWon();
                        } if (gameBoxArray[i].textContent === 'o') {
                            return winnerMessages.oWon();
                        } else {
                            return checkForTie();
                        }
                } if ((gameBoxArray[0].textContent === gameBoxArray[4].textContent) && 
                      (gameBoxArray[4].textContent === gameBoxArray[8].textContent)) {
                        if (gameBoxArray[i].textContent === 'x') {
                            return winnerMessages.xWon();
                        } if (gameBoxArray[i].textContent === 'o') {
                            return winnerMessages.oWon();
                        } else {
                            return checkForTie();
                        }
                } if ((gameBoxArray[2].textContent === gameBoxArray[4].textContent) && 
                      (gameBoxArray[4].textContent === gameBoxArray[6].textContent)) {
                        if (gameBoxArray[i].textContent === 'x') {
                            return winnerMessages.xWon();
                        } if (gameBoxArray[i].textContent === 'o') {
                            return winnerMessages.oWon();
                        } else {
                            return checkForTie();
                        }
                }
            function checkForTie() {
                 if ((gameBoxArray[0].textContent !== '') &&
                           (gameBoxArray[1].textContent !== '') &&
                           (gameBoxArray[2].textContent !== '') &&
                           (gameBoxArray[3].textContent !== '') &&
                           (gameBoxArray[4].textContent !== '') &&
                           (gameBoxArray[5].textContent !== '') &&
                           (gameBoxArray[6].textContent !== '') &&
                           (gameBoxArray[7].textContent !== '') &&
                           (gameBoxArray[8].textContent !== '') ) {
                    return winnerMessages.tie();
                           }
             }
        }
     } 
    return {
        winner: whoWon,
    }
}();
