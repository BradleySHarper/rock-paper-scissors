
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
        return "Tie Game!"
    }
    if (player === rock && computerSelection === paper){
        return "You Lose! Paper beats Rock!"
    }
    if (player === rock && computerSelection === scissors){
        return "You Win! Rock beats Scissors!"
    }
    if (player === paper && computerSelection === rock){
        return "You Win! Paper beats Rock!"
    }
    if (player === paper && computerSelection === scissors){
        return "You Lose! Scissors beats Paper!"
    }
    if (player === scissors && computerSelection === rock){
        return "You Lose! Rock beats Scissors!"
    }
    if (player === scissors && computerSelection === paper){
        return "You Win! Scissors beats Paper!"
    }

}

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function game(){

    for(let i=0; i < 5; i++){
        playRound(playerSelection, computerSelection);


    }

}