function getComputerChoice(){
    const randomNumber = Math.random();

    if (randomNumber < 0.33){
        return "Rock";}
    else if(randomNumber < 0.66){
            return "Paper";}
    else{
        return "Scissors";}
}
console.log(getComputerChoice())

function getHumanChoice(){
    const choice = prompt("Rock, Paper, or Scissors?");
    return choice.trim().toLowerCase();
}
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.trim().toLowerCase();
    computerChoice = computerChoice.trim().toLowerCase();

    if(computerChoice === humanChoice){
        return "Tie!";
    }
    else if(
        (computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper")){
        computerScore++;
        return "Computer Wins, You Lose!";
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        return "Computer Loses, You Win!";
    }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice))
console.log("Scores:", "You:", humanScore, "Computer:", computerScore);