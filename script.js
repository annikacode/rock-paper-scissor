function getComputerChoice() {
    // A random number between 0, 1 and 2 is generated
    const randomNum = Math.floor(Math.random() * 3);

    // The random numbers are mapped to either rock, paper or scissors

    switch (randomNum) {
        case 0:
            return 'Rock';
        case 1: 
            return 'Paper';
        case 2: 
            return 'Scissors'
    }
}

//Add function to play single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {

// Selection is made case-insensitive
playerSelection = playerSelection.toLowerCase();

// Check for a tie 
 if (playerSelection === computerSelection) {
    return "It's a tie! Try again."
 }

 // If the player wins 
if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
    }

// If player loses 
return `You Lose! ${computerSelection} beats ${playerSelection}.`;

}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));