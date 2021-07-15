// Goal: play rock paper scissors against the computer
// see full instructions here:
// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
                (playerSelection === 'scissors' && computerSelection === 'rock') ||
                (playerSelection === 'paper' && computerSelection === 'scissors')) {
        keepScore('computer');
        return `The computer won.`;
    } else {
        keepScore();
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

function playerSelectionPrompt() {
    let playerChoicePrompt = '';
    playerChoicePrompt = prompt("Please select your weapon of choice; " + 
    "rock, paper, or scissors:'")
    if ((playerChoicePrompt === 'rock') ||
        (playerChoicePrompt === 'paper') ||
        (playerChoicePrompt === 'scissors')){
    let playerSelection = playerChoicePrompt.toLowerCase();
    return playerSelection;
    } else {
        alert("Sorry, I did not understand your input, " + 
                "please try again")
        playerSelectionPrompt();
    }
}

function game() {
for (let i = 0; i < 5; i++) {
    let playerSelection = playerSelectionPrompt();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (i === 4) {
        return finalScoreReadout();
    }
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

let choice = ['rock', 'paper', 'scissors'];
let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;

game();
