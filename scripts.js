// PARA PROBAR SI ESTA EN EL BRACNH

// Declare SCORES
let computerScore = 0
let humanScore = 0

function getComputerChoice() { // function to randomly generate rock, paper or scissors 
    let a = Math.random()
    let b
    if (a <= 0.33) {
        b = "Rock"
    } else if (a >= 0.331 && a <= 0.66) {
        b = "Paper"
    } else {
        b = "Scissors"
    }
    return b
}

function getHumanChoice() { // function to ask the user for a number to play the game
    let answer = prompt("Type: 1 for Rock, 2 for Paper or 3 for scissors")
    let choice

    if (answer == 1) {
        choice = "Rock"
    } else if (answer == 2) {
        choice = "Paper"
    } else if (answer == 3) {
        choice = "Scissors"
    } else {
        alert("U have to type a number from 1 to 3!!!")
    }
    return choice
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "Rock" && computerChoice == "Rock") || (humanChoice == "Paper" && computerChoice == "Paper") || (humanChoice == "Scissors" && computerChoice == "Scissors")) {
        console.log("It's a Tie!!")
        
    } else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
        console.log("HUMAN WINS!!")
        humanScore += 1
    } else if ((computerChoice == "Rock" && humanChoice == "Scissors") || (computerChoice == "Paper" && humanChoice == "Rock") || (computerChoice == "Scissors" && humanChoice == "Paper")) {
        console.log("COMPUTER WINS!!")
        computerScore += 1
    }
}


function playGame() {
    for (i = 0 ; i < 5 ; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        console.log("Human: " , humanSelection)
        console.log("Computer: " , computerSelection)

        playRound(humanSelection, computerSelection)

        console.log("Human Score: ", humanScore)
        console.log("Computer Score: ", computerScore)
        console.log("-----------------------")
    }

    if (humanScore > computerScore) {
        console.log("HUMAN WON")
    } else if (humanScore < computerScore) {
        console.log("COMPUTER WON")
    } else {
        console.log("FINAL TIE")
    }
}

playGame()