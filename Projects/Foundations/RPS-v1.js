// Goal: play rock paper scissors against the computer
// see full instructions here:
// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors

let choice = ['rock', 'paper', 'scissors'];
let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');

const computerScoreDisplay = document.querySelector('#computer-score');
const playerScoreDisplay = document.querySelector('#player-score');
const tieScoreDisplay = document.querySelector('#tie-score');
const resetBtn = document.querySelector('#reset');

computerScoreDisplay.textContent = `Computer Score: 0`;
playerScoreDisplay.textContent = `Player Score: 0`;
tieScoreDisplay.textContent = `Number of ties: 0`

rock.addEventListener('click', () => {
    let computerSelection = computerPlay();
    playRound('rock', computerSelection);
    displayScore();
});

paper.addEventListener('click', () => {
    let computerSelection = computerPlay();
    playRound('paper', computerSelection);
    displayScore();
});

scissors.addEventListener('click', () => {
    let computerSelection = computerPlay();
    playRound('scissors', computerSelection);
    displayScore();
});

resetBtn.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    tieScore = 0;
    resetTextColor();
    displayScore();
});

function resetTextColor() {
    playerScoreDisplay.style.color = 'black';
    computerScoreDisplay.style.color = 'black';
    tieScoreDisplay.style.color = 'black';
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        keepScore();
        return `It's a tie!`;
    } else if ((playerChoice == 'rock' && computerChoice == 'paper') || 
                (playerChoice == 'scissors' && computerChoice == 'rock') ||
                (playerChoice == 'paper' && computerChoice == 'scissors')) {
        keepScore('computer');
        return `The computer won.`;
    } else {
        keepScore('player');
        return `The player won.`;
    }
  }

function keepScore(score) {
    if (score === 'computer') {
        computerScore+=1;
        return computerScore;
    } else if (score === 'player') {
        playerScore+=1;
        return playerScore;
    } else {
        tieScore+=1;
        return tieScore;
    }
}

function displayScore() {
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    tieScoreDisplay.textContent = `Number of ties: ${tieScore}`;
    checkForWinner();
}

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function checkForWinner() {
    if (playerScore === 5) {
        playerScoreDisplay.textContent = 'You win! Click "reset" to start over.';
        playerScoreDisplay.style.color = 'green';
    } else if (computerScore === 5) {
        computerScoreDisplay.textContent = 'The computer won. Click "reset" to start over.'
        computerScoreDisplay.style.color = 'red';
    } else if (tieScore === 5) {
        tieScoreDisplay.style.color = 'orange';
    }
}