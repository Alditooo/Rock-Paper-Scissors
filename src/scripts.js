const rockBtn = document.querySelector("#rockButton")
const paperBtn = document.querySelector("#paperButton")
const scissorsBtn = document.querySelector("#scissorsButton")

// Declare SCORES
let computerScore = 0
let humanScore = 0

function getComputerChoice() { // function to randomly generate rock, paper or scissors 
    let a = Math.random()
    let b
    if (a <= 0.33) {
        b = "rock"
    } else if (a >= 0.331 && a <= 0.66) {
        b = "paper"
    } else {
        b = "scissors"
    }
    return b
}

function playRound(humanChoice, computerChoice) {
    
    if ((humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "scissors")) {
        console.log("It's a Tie!!")
        
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("HUMAN WINS!!")
        humanScore += 1
        document.querySelector("#human-points").textContent = humanScore;
    } else if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")) {
        console.log("COMPUTER WINS!!")
        computerScore += 1
        document.querySelector("#computer-points").textContent = computerScore
    }
    checkWinner()
}

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()))
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()))

function checkWinner() {
    if(humanScore == 5) {
        console.log("HAS GANADO")
        resetGame()
    } else if(computerScore == 5) {
        console.log("TE HAN GANADO")
        resetGame()
    }
}

function resetGame() {
    humanScore = 0
    computerScore = 0
    document.querySelector("#human-points").textContent = 0
    document.querySelector("#computer-points").textContent = 0
}