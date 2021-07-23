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
    displayScore();
});

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
}

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function checkForWinner() {
    if (playerScore === 5 || computerScore === 5) {

    }
}

function finalScoreReadout() {
    if (playerScore > computerScore) {
        console.table(`%c You win! You scored ${playerScore}` + 
        ` and the computer scored ${computerScore}`, `background:black;color:green`);
    } else if (computerScore > playerScore) {
        console.table(`%c You lose! You scored ${playerScore}` +
        ` and the computer scored ${computerScore}`, `background:black;color:red`);
    } else {
        console.table(`%c You tie! You scored ${playerScore}` + 
        ` and the computer scored ${computerScore}`, `background:black;color:yellow`);
    }
}
