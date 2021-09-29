const resetBtn = document.getElementById('reset-btn');
const runningWinsP1 = document.getElementById('running-wins-p1');
const runningWinsP2 = document.getElementById('running-wins-p2');
const numberOfTies = document.getElementById('number-of-ties');
const gameBoardSection = document.getElementById('Game-Board-Section');
const player1Turn = document.getElementById('player-1-turn');
const player2Turn = document.getElementById('player-2-turn');
player1Turn.textContent = "Player 1 (X's): GO";
player2Turn.textContent = "Player 2 (O's): WAIT";

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
        board: gameBoard,
    }
}();

gameBoardSetup.board();

onClickGamePlay = function() {
    let player1Name = "Player 1";
    let player2Name = "Player 2";
    let tieCounter = 0;
    let player1WinCount = 0;
    let player2WinCount = 0;
    let gamesPlayed = 0;
    runningWinsP1.textContent = `${player1Name} Has Won ${player1WinCount} Games`;
    runningWinsP2.textContent = `${player2Name} Has Won ${player2WinCount} Games`;
    numberOfTies.textContent = `${player1Name} and ${player2Name} have had ${tieCounter} ties`;
    let turnOnClickListener = function (){
        let gameSquares = document.querySelectorAll('.game-square');
        let turnCounter = 0;
        gameSquares.forEach((div) => {
            div.addEventListener('click', () => {
                if (div.textContent === '') {
                    if (turnCounter % 2 === 0) {
                        div.textContent = "x";
                        turnCounter++;
                        updateTurnText();
                        checkWinCondition();
                    } else {
                        div.textContent = "o";
                        turnCounter++;
                        updateTurnText();
                        checkWinCondition();
                    }
                }
            });
        });
    };
    return {
        listener: turnOnClickListener,
    }
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
                xWinMessage();
            } else if (gameBox3 === 'o') {
                oWinMessage();
            }
        }
        // Middle row win condition
        if ((gameBox4 === gameBox5) && 
            (gameBox5 === gameBox6)) {
                if (gameBox6 === 'x') {
                    xWinMessage();
                } else if (gameBox6 === 'o') {
                    oWinMessage();

                }
        }
        // bottom row win condition
        if ((gameBox7 === gameBox8) && 
            (gameBox8 === gameBox9)) {
                if (gameBox9 === 'x') {
                    xWinMessage();
                } else if (gameBox9 === 'o') {
                    oWinMessage();
 
                }
        }
        // left column win condition
        if ((gameBox1 === gameBox4) && 
            (gameBox4 === gameBox7)) {
            if (gameBox7 === 'x') {
                xWinMessage();
            } else if (gameBox7 === 'o') {
                oWinMessage();
            }
        }
        // middle column win condition
        if ((gameBox2 === gameBox5) && 
            (gameBox5 === gameBox8)) {
            if (gameBox8 === 'x') {
                xWinMessage();
            } else if (gameBox8 === 'o') {
                oWinMessage();
            }
        }
        // right column win condition
        if ((gameBox3 === gameBox6) && 
            (gameBox6 === gameBox9)) {
            if (gameBox9 === 'x') {
                xWinMessage();
            } else if (gameBox9 === 'o') {
                oWinMessage();
            }
        }
        // top left to bottom right diagonal win condition
        if ((gameBox1 === gameBox5) && 
            (gameBox5 === gameBox9)) {
            if (gameBox9 === 'x') {
                xWinMessage();
            } else if (gameBox9 === 'o') {
                oWinMessage();
            }
        }
        // top right to bottom left diagonal win condition
        if ((gameBox3 === gameBox5) && 
            (gameBox5 === gameBox7)) {
            if (gameBox7 === 'x') {
                xWinMessage();
            } else if (gameBox7 === 'o') {
                oWinMessage();
            }
        }
        // Checks for tie condition
        if ((gameBox1 !== '') && 
            (gameBox2 !== '') &&
            (gameBox3 !== '') &&
            (gameBox4 !== '') &&
            (gameBox5 !== '') &&
            (gameBox6 !== '') &&
            (gameBox7 !== '') &&
            (gameBox8 !== '') &&
            (gameBox9 !== '')) {
                tieMessage();
            }
    }
    function oWinMessage() {
        player1Turn.textContent = "Player 1 (X's) LOSES";
        player2Turn.textContent = "Player 2 (O's) WINS";
        let winnerO = 'o';
        endOfGame(winnerO);
    }
    function xWinMessage() {
        player1Turn.textContent = "Player 1 (X's) WINS";
        player2Turn.textContent = "Player 2 (O's) LOSES";
        let winnerX = 'x';
        endOfGame(winnerX);
    }
    function tieMessage() {
        player1Turn.textContent = "IT'S A TIE";
        player2Turn.textContent = "";
        let winnerTie = 'tie';
        endOfGame(winnerTie);
    }
    function endOfGame(winner) {
        let winnerInput = winner;
        if (gamesPlayed === 0){
                player1Name = prompt('Player 1, Please Type in Your Name');
                player2Name = prompt('Player 2, Please Type in Your Name');
        }
        if (winnerInput === 'x') {
            ++player1WinCount;
            runningWinsP1.textContent = `${player1Name} Has Won ${player1WinCount} Games`;
            runningWinsP2.textContent = `${player2Name} Has Won ${player2WinCount} Games`;
            numberOfTies.textContent = `${player1Name} and ${player2Name} have had ${tieCounter} ties`;
            winnerSymbolInAllSquares(winnerInput);
        } else if (winnerInput === 'o') {
            ++player2WinCount;
            runningWinsP2.textContent = `${player2Name} Has Won ${player2WinCount} Games`;
            runningWinsP1.textContent = `${player1Name} Has Won ${player1WinCount} Games`;
            numberOfTies.textContent = `${player1Name} and ${player2Name} Have Had ${tieCounter} Ties`;
            winnerSymbolInAllSquares(winnerInput);
        } else if (winnerInput === 'tie') {
            ++tieCounter;
            runningWinsP2.textContent = `${player2Name} Has Won ${player2WinCount} Games`;
            runningWinsP1.textContent = `${player1Name} Has Won ${player1WinCount} Games`;
            numberOfTies.textContent = `${player1Name} and ${player2Name} have had ${tieCounter} tie(s)`;
            winnerSymbolInAllSquares(winnerInput);
        }
        function winnerSymbolInAllSquares(winner) {
            resetBtn.style.display = '';
            let whoWon = winner;
            let gameBoxes = document.querySelectorAll('.game-square');
            if (whoWon === 'x') {
                gameBoxes.item(0).textContent = 'x';
                gameBoxes.item(1).textContent = 'x';
                gameBoxes.item(2).textContent = 'x';
                gameBoxes.item(3).textContent = 'x';
                gameBoxes.item(4).textContent = 'x';
                gameBoxes.item(5).textContent = 'x';
                gameBoxes.item(6).textContent = 'x';
                gameBoxes.item(7).textContent = 'x';
                gameBoxes.item(8).textContent = 'x';
            } else if (whoWon === 'o') {
                gameBoxes.item(0).textContent = 'o';
                gameBoxes.item(1).textContent = 'o';
                gameBoxes.item(2).textContent = 'o';
                gameBoxes.item(3).textContent = 'o';
                gameBoxes.item(4).textContent = 'o';
                gameBoxes.item(5).textContent = 'o';
                gameBoxes.item(6).textContent = 'o';
                gameBoxes.item(7).textContent = 'o';
                gameBoxes.item(8).textContent = 'o';
            } else {
                gameBoxes.item(0).textContent = 'o';
                gameBoxes.item(1).textContent = 'x';
                gameBoxes.item(2).textContent = 'o';
                gameBoxes.item(3).textContent = 'x';
                gameBoxes.item(4).textContent = 'o';
                gameBoxes.item(5).textContent = 'x';
                gameBoxes.item(6).textContent = 'o';
                gameBoxes.item(7).textContent = 'x';
                gameBoxes.item(8).textContent = 'o';
            }
        }
            resetBtn.addEventListener('click', () => {
                let gameDivs = document.querySelectorAll('div');
                gameDivs.forEach((div) => {
                    div.remove();
            });
            gameBoardSetup.board();
            onClickGamePlay.listener();
            ++gamesPlayed;
        });
    }
}();

onClickGamePlay.listener();
