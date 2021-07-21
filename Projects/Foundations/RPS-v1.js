// Goal: play rock paper scissors against the computer
// see full instructions here:
// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors

let choice = ['rock', 'paper', 'scissors'];
let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');

rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log(`It's a tie!`);
        return `It's a tie!`;
    } else if ((playerChoice == 'rock' && computerChoice == 'paper') || 
                (playerChoice == 'scissors' && computerChoice == 'rock') ||
                (playerChoice == 'paper' && computerChoice == 'scissors')) {
        keepScore('computer');
        console.log(`The computer won.`);
        return `The computer won.`;
    } else {
        keepScore();
        console.log(`Yay, you won.`);
        return `Yay, you won.`;
    }
  }

function keepScore(score) {
    if (score === 'computer') {
        computerScore+=1;
    } else {
        playerScore+=1;
    }
}

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
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
<<<<<<< HEAD
}
=======
}

let choice = ['rock', 'paper', 'scissors'];
let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;

// game();
>>>>>>> e66746a8cc78f65560ec0d79c9fd22536a0162a3
