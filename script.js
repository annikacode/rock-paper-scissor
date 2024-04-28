let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // A random number between 0, 1, and 2 is generated
    const randomNum = Math.floor(Math.random() * 3);

    // The random numbers are mapped to either rock, paper, or scissors
    switch (randomNum) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

// Add function to play a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    // Selection is made case-insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Check for a tie
    if (playerSelection === computerSelection) {
        return "It's a tie! Try again.";
    }

    // If the player wins
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    // If player loses
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// New function to create game rounds until player quits
function game() {
    let continuePlaying = true;

    while (continuePlaying) {
        const playerSelection = prompt("Rock, Paper, Scissor? Type 'quit' to end the game.");

        // Check if the player wants to quit
        if (playerSelection.toLowerCase() === 'quit') {
            continuePlaying = false;
            break; // Exit the loop
        }

        const computerSelection = getComputerChoice();

        console.log(`You chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Update scores as game progresses
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }
}
// To determine the winner after 5 rounds of gameplay
if (playerScore > computerScore) {
    console.log("Congratulations! You win!")
} else if (playerScore < computerScore) {
    console.log("You lose!")
} else {
    console.log("No winner, it's a tie!")
}

// game function is called to start the game 
game();