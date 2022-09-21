const choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
            computerScore += 1;
        } else if (computerSelection == 'scissors') {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
            playerScore += 1;
        } else {
            console.log(`You Tied!`);
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
            computerScore += 1;
        } else if (computerSelection == 'rock') {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
            playerScore += 1;
        } else {
            console.log(`You Tied!`);
        }
    } else {
        if (computerSelection == 'rock') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
            computerScore += 1;
        } else if (computerSelection == 'paper') {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
            playerScore += 1;
        } else {
            console.log(`You Tied!`);
        }
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        var playerChoice = prompt('Choose "rock", "paper", or "scissors": ').toLowerCase();
        playRound(playerChoice, getComputerChoice());
    }
    if (playerScore > computerScore) {
        console.log(`You won the game! ${playerScore} to ${computerScore}.`);
    } else {
        console.log(`You lost the game! ${computerScore} to ${playerScore}.`)
    }
}

game();