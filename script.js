const rps = ["Rock", "Paper", "Scissors"]
let getComputerChoice = () => rps[Math.floor(Math.random() * rps.length)];
let playerScore = 0;
let computerScore = 0;
let round = 0;

function playRoundOfRps(playerSelection, computerSelection) {   
    round++
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Scissors" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Rock")) {
        console.log("Success!");
        return playerScore++;
    }
    else if (playerSelection === computerSelection){
        console.log("Draw.");
    }
    else {
        console.log("Failure");
        return computerScore++;
    }
}

function playGameOfRps() {
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        playRoundOfRps(playerSelection, computerSelection);
        isGameComplete();
        if (playerScore === 3 || computerScore === 3 || round ===5){
            break;
        }
    }
}

function isGameComplete() {
    if (playerScore === 3 || computerScore === 3 || round === 5){
        completeGame();
    }
}

function completeGame () {
    if (playerScore > computerScore) {
        console.log("Winner!");
    }
    else if (playerScore < computerScore) {
        console.log("Loser...");
    }
    else {
        console.log("No victor has been determined.");
    }
}
playGameOfRps();


// Future potential additions:
// Validation for playerSelection
// Force draw if winning or losing is not an option