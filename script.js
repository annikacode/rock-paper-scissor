function getComputerChoice() {
    // A random number between 0, 1 and 2 is generated
    const randomNUm = Math.floor(Math.random() * 3);

    // The random numbers are mapped to either rock, paper or scissors

    switch (randomNUm) {
        case 0:
            return 'Rock';
        case 1: 
            return 'Paper';
        case 2: 
            return 'Scissors'
    }
}

const computerChoice = getComputerChoice();
console.log("Computer's choice:" + " " + computerChoice);

//Add function to play single round of rock, paper, scissors
function playRound(playerSelection, computerChoice) {

// Selection is made case-insensitive
playerSelection = playerSelection.toLowerCase();

// Check for a tie 
 if (playerSelection === computerChoice) {
    return "It's a tie! Try again."
 }

 // If the player wins 
if (
    (playerSelection === 'rock' && computerChoice === 'scissors') ||
    (playerSelection === 'paper' && computerChoice === 'rock') ||
    (playerSelection === 'scissors' && computerChoice === 'paper')
    ) {
    return 'You win! ${playerSelection} beats ${computerChoice}';
    }

// If player loses 
return 'You lose! ${computerChoice} beats ${playerSelection}'

}

const playerSelection = 'Rock'

console.log(playRound(playerSelection, computerChoice))