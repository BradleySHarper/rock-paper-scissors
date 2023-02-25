
function getComputerChoice(){
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
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
console.log(getComputerChoice());
