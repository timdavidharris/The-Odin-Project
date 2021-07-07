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
// Tie situation below
    if (playerSelection === computerSelection) {
        // alert(`It's a tie! You played ${playerSelection} and \
        // the computer played ${computerSelection}.`);
        return `It's a tie! You played ${playerSelection} and the computer played ${computerSelection}.`;
// Computer win situations below
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
                (playerSelection === 'scissors' && computerSelection === 'rock') ||
                (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore+=1;
        return `You played ${playerSelection} and the computer played ${computerSelection}. The computer won.`;
// Player win situations below
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore+=1;
        return `You played ${playerSelection} and the computer played ${computerSelection}. Yay, you won.`;
// In the case of an input error
    } else {
        return `Sorry, I did not recognize "${playerSelection}".`;
    }
  }

// randomly selects a weapon for the computer's choice
function computerPlay() {
    const randomChoice = Math.floor(Math.random() * 3);
    return choice[randomChoice];
}

function game() {
for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Please select your weapon of choice; \
                                    rock, paper, or scissors:').toLowerCase();
    // setting how we will have the computer pick a weapon
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    // reading the game results out to the console log
    console.log(playRound(playerSelection, computerSelection));
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

// array of possible options
let choice = ['rock', 'paper', 'scissors'];
// player selection and
// making the selection lower case to compare
// let playerSelection = prompt('Please select your weapon of choice; \
// rock, paper, or scissors:').toLowerCase();
// setting how we will have the computer pick a weapon
let computerSelection = computerPlay();
// to keep track of who wins
let computerScore = 0;
let playerScore = 0;

game();
