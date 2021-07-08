// Goal: play rock paper scissors against the computer
// see full instructions here:
// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors
// the computer will pick their weapon randomly
// see steps below

// First) create an array with the possible options
// 1) the user will be asked to input what weapon they want
// 2) computer will pick a weapon randomly
// 3) the code will analyze which weapon won
// 3a)
// rock > scissors
// paper > rock
// scissors > paper
// if they're the same, declare a tie
// 4) the console log will declare the winner

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You played ${playerSelection} and the computer played ${computerSelection}.`;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
                (playerSelection === 'scissors' && computerSelection === 'rock') ||
                (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore+=1;
        return `You played ${playerSelection} and the computer played ${computerSelection}. The computer won.`;
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore+=1;
        return `You played ${playerSelection} and the computer played ${computerSelection}. Yay, you won.`;
    } else {
        return `Sorry, I did not recognize "${playerSelection}".`;
    }
  }

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * 3);
    return choice[randomChoice];
}

function game() {
for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Please select your weapon of choice; \
                                    rock, paper, or scissors:').toLowerCase();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (i === 4) {
        if (playerScore > computerScore) {
            console.table(`%c You win! You scored ${playerScore} and the computer scored ${computerScore}`, `background:black;color:green`);
        } else if (computerScore > playerScore) {
            console.table(`%c You lose! You scored ${playerScore} and the computer scored ${computerScore}`, `background:black;color:red`);
        } else {
            console.table(`%c You tie! You scored ${playerScore} and the computer scored ${computerScore}`, `background:black;color:yellow`);
        }
    }
}
}

let choice = ['rock', 'paper', 'scissors'];
let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;

game();
