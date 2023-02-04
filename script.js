/* 
The goal of the game function is to play multiple Rock, Paper, Scissors games.
Best of 5 rules, if nobody has won 3 times in 5 games, its a draw.
Code currently doesn't look for situations where draw is inevitable.
*/

const rps = ["Rock", "Paper", "Scissors"]
let getComputerChoice = () => rps[Math.floor(Math.random() * rps.length)];
let playerScore = 0;
let computerScore = 0;
let round = 0;

function playRps(playerSelection, computerSelection) {   
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

function isGameComplete() {
    if (playerScore === 3 || computerScore === 3 || round === 5){
        gameComplete();
    }
}

function gameComplete () {
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


function game() {
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        playRps(playerSelection, computerSelection);
        isGameComplete();
        if (playerScore === 3 || computerScore === 3 || round ===5){
            break;
        }
    }
}
game();