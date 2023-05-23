const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const finalDiv = document.querySelector('.finalDiv');

player.innerHTML = 0;
computer.innerHTML = 0;
let playerScore = 0;
let computerScore = 0;


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
    if (playerScore === 5 || computerScore === 5){
        playerScore = 0;
        computerScore = 0;
        finalDiv.innerHTML = "";
        player.innerHTML = `${playerScore = 0}`;
        computer.innerHTML= `${computerScore = 0}`;
    }


    if (playerSelection === computerSelection){
        output.innerHTML = "It's a draw.";
        
    }
    if (playerSelection === rock && computerSelection === paper){
        output.innerHTML = "You Lose! Paper beats Rock!";
        computer.innerHTML = `${computerScore += 1}`
        
    }
    if (playerSelection === rock && computerSelection === scissors){
        output.innerHTML = "You Win! Rock beats Scissors!";
        player.innerHTML = `${playerScore += 1}`
        
    }
    if (playerSelection === paper && computerSelection === rock){
        output.innerHTML = "You Win! Paper beats Rock!";
        player.innerHTML = `${playerScore += 1}`
        
    }
    if (playerSelection === paper && computerSelection === scissors){
        output.innerHTML = "You Lose! Scissors beats Paper!";
        computer.innerHTML = `${computerScore += 1}`
        
    }
    if (playerSelection === scissors && computerSelection === rock){
        output.innerHTML = "You Lose! Rock beats Scissors!";
        computer.innerHTML = `${computerScore += 1}`
        
    }
    if (playerSelection === scissors && computerSelection === paper){
        output.innerHTML = "You Win! Scissors beats Paper!";
        player.innerHTML = `${playerScore += 1}`
        
    }
    

}

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
//let playerSelection = "rock";
const computerSelection = getComputerChoice();

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = `${button.className}`;
        playRound(playerSelection, computerSelection)
        checkScore(playerScore, computerScore);
    
    })
})

function checkScore(playerScore, computerScore){
    if (playerScore === 5){ 
        finalDiv.innerHTML = `Congratulations! You Won ${playerScore} to ${computerScore}!!!`
        computerScore = 0;
        playerScore = 0;
        
    }
    if (computerScore === 5){
        finalDiv.innerHTML = `Try Again, You Lose ${playerScore} to ${computerScore}.`
        computerScore = 0;
        playerScore = 0;
        
    }
    else return;
}





