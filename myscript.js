
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
    
    let isEqual = playerSelection.toLowerCase();
    if (isEqual === computerSelection){
        return "Tie Game!"
    }
    if (computerSelection === paper){
        return "You Lose! Paper beats Rock!"
    }
    if (computerSelection === scissors){
        return "You Win! Rock beats Scissors!"
    }


}

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
