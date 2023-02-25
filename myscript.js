
function getComputerChoice(){

    let rand = Math.floor(Math.random() * 3);
    if (rand === 0){
        return rock;
    }
    if (rand === 1){
        return paper;
    }
    if (rand === 2){
        return scissors;
    }

} 

function playRound(playerSelection, computerSelection){
    
    let player = playerSelection.toLowerCase();
    if (player === computerSelection){
        console.log("Tie Game!");
        return 0; 
    }
    if (player === rock && computerSelection === paper){
        console.log("You Lose! Paper beats Rock!");
        return -1;
    }
    if (player === rock && computerSelection === scissors){
        console.log("You Win! Rock beats Scissors!");
        return 1;
    }
    if (player === paper && computerSelection === rock){
        console.log("You Win! Paper beats Rock!");
        return 1;
    }
    if (player === paper && computerSelection === scissors){
        console.log("You Lose! Scissors beats Paper!");
        return -1;
    }
    if (player === scissors && computerSelection === rock){
        console.log("You Lose! Rock beats Scissors!");
        return -1;
    }
    if (player === scissors && computerSelection === paper){
        console.log("You Win! Scissors beats Paper!");
        return 1;
    }
    else {
        console.log("Input Error, try again")
        return 3;
    }

}

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let playerSelection = "rock";
const computerSelection = getComputerChoice();



function game(){

    let score = 0;

    for(let i=0; i < 5; i++){
        let input = prompt("Choose your weapon!");
        let round = playRound(input, getComputerChoice());
        if (round === 3){
            i--;
            continue;
        }
        score += round;
        console.log(score);

    }

    if (score === 0){
        console.log("The game resulted in a tie.");
    }

    if (score < 0){
        console.log("You are a loser!!!");
    }

    if (score > 0) {
        console.log("You are a winner!!!")
    }

}

console.log(game());
