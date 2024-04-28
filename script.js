let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // A random number between 0, 1, and 2 is generated
    const randomNum = Math.floor(Math.random() * 3);

    // The random numbers are mapped to either rock, paper, or scissors
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Function to include rounds and accept playerSelection as a parameter
function playRound(playerSelection, computerSelection) {
    const resultDisplay = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');

    // Check for a tie
    if (playerSelection === computerSelection) {
        resultDisplay.textContent = "It's a tie! Try again.";
    }

    // If the player wins
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }

    // If player loses
    else {
        resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    }

    // Update the display of the score
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    // Check if computer or player has reached 5 points
    if (playerScore === 5) {
        resultDisplay.textContent = "Congratulations! You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultDisplay.textContent = "You lost! Try again?";
        disableButtons();
    }
}

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});

// Function to disable buttons when the game is over
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}
