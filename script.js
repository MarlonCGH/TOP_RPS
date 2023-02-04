/* 

*/

let rps = ["Rock", "Paper", "Scissors"]

let getComputerChoice = () => rps[Math.floor(Math.random() * rps.length)];

function playRps(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Scissors" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Rock")) {
        console.log("You win!");
    }
    else if (playerSelection === computerSelection){
        console.log("Draw.");
    }
    else {
        console.log("You lose!");
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();

playRps(playerSelection, computerSelection);

// function game() {
//     for (let i=0; i<5; i++){
//         playRps(playerSelection, computerSelection);
//     }
// }
// game();