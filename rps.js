function getComputerChoice() {
    let  options = ['Rock', 'Paper', 'Scissors'];
    let num = Math.floor(Math.random() * 3);
    return options[num];
}

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
    const re = /[rR][oO][cC][kK]$|[pP][aA][pP][eE][rR]$|[sS][cC][iI][sS][sS][oO][rR][sS]$/;
    if (re.test(playerSelection) && re.test(computerSelection)) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        switch (playerSelection) {
            case 'rock':
                switch (computerSelection) {
                    case 'rock':
                        return 'Tie.. play again'
                    case 'paper':
                        return 'You lose! Paper beats Rock'
                    case 'scissors':

                        return 'You win! Rock beats Scissors'
                }
                break;
             case 'paper':
                switch (computerSelection) {
                    case 'rock':
                        return 'You win! Paper beats Rock'
                    case 'paper':
                        return 'Tie.. play again'
                    case 'scissors':
                        return 'You lose! Scissors beats Paper'
                }
                break;
            case 'scissor':
                switch (computerSelection) {
                    case 'rock':
                        return 'You lose! Rock beats paper'
                    case 'paper':
                        return 'You win! Scissors beats Paper'
                    case 'scissors':
                        return 'Tie.. play again'
                }       
            default:
                break;
        }
    } else {
        return "Incorrect input..."
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let previousRoundTie = false;
    for (let i = 0; i < 5; i++) {
        if (previousRoundTie) {
            i--;
        }
        const playerSelection = prompt("Type your choice : ");
        const computerSelection = getComputerChoice();
        let gameResult = playRound(playerSelection, computerSelection);
        console.log(gameResult);
        if (gameResult.includes('win')) {
            playerScore++;
            previousRoundTie = false;
        } else if (gameResult.includes('lose')){
            computerScore++;
            previousRoundTie = false;
        } else {
            previousRoundTie = true;
        }
        console.log(`Score:\nYou = ${playerScore}\nComputer = ${computerScore}`);
    }
    console.log('Game over\n');
    if (playerScore > computerScore) {
        console.log('You win! Congrats');
    } else {
        console.log('You lose.. better luck next time');
    }
}

game();
