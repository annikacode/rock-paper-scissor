function getComputerChoice() {
    // A random number between 0, 1 and 2 is generated
    const randomNUm = Math.floor(math.random() * 3)

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