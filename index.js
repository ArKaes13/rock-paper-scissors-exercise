const choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    var outcomeText = document.createElement('p');
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            outcomeText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore += 1}`;
        } else if (computerSelection == 'scissors') {
            outcomeText.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
            document.querySelector('#playerScore').textContent = `Player Score: ${playerScore += 1}`;
        } else {
            outcomeText.textContent = `You Tied!`;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            outcomeText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore += 1}`;
        } else if (computerSelection == 'rock') {
            outcomeText.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
            document.querySelector('#playerScore').textContent = `Player Score: ${playerScore += 1}`;
        } else {
            outcomeText.textContent = `You Tied!`;
        }
    } else {
        if (computerSelection == 'rock') {
            outcomeText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore += 1}`;
        } else if (computerSelection == 'paper') {
            outcomeText.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
            document.querySelector('#playerScore').textContent = `Player Score: ${playerScore += 1}`;
        } else {
            outcomeText.textContent = `You Tied!`;
        }
    }
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            outcomeText.textContent = `You won the game! Refresh to start again.`;
        } else {
            outcomeText.textContent = `You lost the game! Refresh to start again.`;
        }
    }
    document.querySelector('.scrollBox').appendChild(outcomeText);
}

const buttons = document.querySelectorAll('.btn');
for (button of buttons) {
    button.addEventListener('click', (event) => {
        playRound(event.srcElement.id, getComputerChoice());
    })
}


