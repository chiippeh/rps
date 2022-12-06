const runningDiv = document.querySelector('.running');
const gameOverDiv = document.querySelector('.game-over');
const buttons = document.querySelectorAll('.rps-button');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const messageElement = document.querySelector('.msg');
const bothSelectionsDiv = document.querySelector('.current-selections');
const pSelectionImg = document.querySelector('.pSelection');
const cSelectionImg = document.querySelector('.cSelection');
const winResultDiv = document.querySelector('.result');
const playAgainButton = document.querySelector('.play-again');
let playerSelection;
let playerScore = 0;
let computerScore = 0;
gameOverDiv.classList.add('gg');


function getComputerChoice() {
    let  options = ['Rock', 'Paper', 'Scissors'];
    let num = Math.floor(Math.random() * 3);
    return options[num];
}

function playRound() {
    let computerSelection = getComputerChoice();
    // below is the pattern used for regex input validation (left over from text input)
    const re = /[rR][oO][cC][kK]$|[pP][aA][pP][eE][rR]$|[sS][cC][iI][sS][sS][oO][rR][sS]$/;
    if (re.test(playerSelection) && re.test(computerSelection)) { //if selections pass validation
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        switch (playerSelection) {
            case 'rock':
                pSelectionImg.src = './images/rock.svg'
                switch (computerSelection) {
                    case 'rock':
                        cSelectionImg.src = './images/rock.svg'
                        messageElement.textContent = 'Draw, play again'
                        break;
                    case 'paper':
                        computerScore+= 1;
                        cSelectionImg.src = './images/paper.svg'
                        messageElement.textContent = 'Paper beats rock, you lose..'
                        computerScoreElement.textContent = computerScore;
                        break;
                    case 'scissors':
                        playerScore+= 1;
                        cSelectionImg.src = './images/scissors.svg'
                        messageElement.textContent = 'Rock beats scissors, you win..'
                        playerScoreElement.textContent = playerScore;
                        break;
                }
                break;
             case 'paper':
                pSelectionImg.src = './images/paper.svg'
                switch (computerSelection) {
                    case 'rock':
                        playerScore+=1;
                        cSelectionImg.src = './images/rock.svg'
                        messageElement.textContent = 'Paper beats rock, you win..'
                        playerScoreElement.textContent = playerScore;
                        break;
                    case 'paper':
                        cSelectionImg.src = './images/paper.svg'
                        messageElement.textContent = 'Draw, play again'
                        break;
                    case 'scissors':
                        computerScore+=1;
                        cSelectionImg.src = './images/scissors.svg'
                        messageElement.textContent = 'Scissors beats paper, you lose..'
                        computerScoreElement.textContent = computerScore;
                        break;
                }
                break;
            case 'scissors':
                pSelectionImg.src = './images/scissors.svg'
                switch (computerSelection) {
                    case 'rock':
                        computerScore+=1;
                        cSelectionImg.src = './images/rock.svg'
                        messageElement.textContent = 'Rock beats scissors, you lose..'
                        computerScoreElement.textContent = computerScore;
                        break;
                    case 'paper':
                        playerScore+=1;
                        cSelectionImg.src = './images/paper.svg'
                        messageElement.textContent = 'Scissors beats paper, you win..'
                        playerScoreElement.textContent = playerScore;
                        break;
                    case 'scissors':
                        cSelectionImg.src = './images/scissors.svg'
                        messageElement.textContent = 'Draw, play again'
                        break;
                }       
            default:
                break;
        }
    } else {
        return "Incorrect input..."
    }
}

function game() {
    if (playerScore < 5 && computerScore < 5) {
        playRound();
    } else if (playerScore > computerScore) {
        winResultDiv.textContent = 'WINNER!'
        runningDiv.classList.add('gg');
        gameOverDiv.classList.remove('gg');
    } else {
        winResultDiv.textContent = 'YOU LOST :('
        runningDiv.classList.add('gg');
        gameOverDiv.classList.remove('gg');
    }

}

function buttonClicked(e) {
    pSelectionImg.style.display = 'flex'; //unhide images
    cSelectionImg.style.display = 'flex';
    playerSelection = this.classList[1]; //extract the selection from the object
    game();
}

function start() {
    playerScore = 0;
    computerScore = 0
    messageElement.textContent = 'Make your CHOICE.'
    pSelectionImg.style.display = 'none'; //hide images when there is no src
    cSelectionImg.style.display = 'none';
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    runningDiv.classList.remove('gg');
    gameOverDiv.classList.add('gg');
}

//listen for button click event 
buttons.forEach(button => button.addEventListener('click', buttonClicked))

//listen for play again button
playAgainButton.addEventListener('click', start);

start();
