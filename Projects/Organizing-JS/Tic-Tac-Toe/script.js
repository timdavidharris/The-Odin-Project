const resetBtn = document.getElementById('reset-btn');
const runningWinsP1 = document.getElementById('running-wins-p1');
const runningWinsP2 = document.getElementById('running-wins-p2');
const numberOfTies = document.getElementById('number-of-ties');
const gameBoardSection = document.getElementById('Game-Board-Section');
const player1Turn = document.getElementById('player-1-turn');
const player2Turn = document.getElementById('player-2-turn');
player1Turn.textContent = "Player 1 (X's): GO";
player2Turn.textContent = "Player 2 (O's): WAIT";
let player1Name = "Player 1";
let player2Name = "Player 2";
let tieCounter = 0;
let player1WinCount = 0;
let player2WinCount = 0;
let gamesPlayed = 0;
runningWinsP1.textContent = `${player1Name} Has Won ${player1WinCount} Games`;
runningWinsP2.textContent = `${player2Name} Has Won ${player2WinCount} Games`;
numberOfTies.textContent = `${player1Name} and ${player2Name} have had ${tieCounter} ties`;

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
