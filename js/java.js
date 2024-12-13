const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.currentTarget.id;
    userChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['rock', 'scissors', 'paper'];
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.textContent = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lose!';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lose!';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lose!';
    }
    resultDisplay.textContent = result;
}
