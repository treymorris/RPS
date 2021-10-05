let playerScore = 0;
let computerScore = 0;
let tie = 0;




//create function to select choice for computer
function computerPlay() {

    let num = Math.floor(Math.random() * 4) + 1;

    if (num == 1) {
        return  "rock";

    } else if (num == 2) {
    return "paper";

    } else  {
    return "scissors";
    }
}

//create function that declares winner of the round and keeps score
function playRound(playerSelection, computerSelection) {

 computerSelection = computerPlay();

 playerSelection = playerSelection; 

    
    if (computerSelection === playerSelection) {
        tie++;
        return "It's a tie!";

    }   else if (computerSelection === "rock" && playerSelection === "scissors") {
            computerScore++;
            return "Rock smashes Scissors, Computer Wins!";

    }   else if (computerSelection === "rock" && playerSelection === "paper") {
            playerScore++;
            return "Paper covers Rock, You win!";

    }   else if (computerSelection === "paper" && playerSelection === "rock") {
            computerScore++;
            return "Paper covers Rock, Computer Wins!";

    }   else if (computerSelection === "paper" && playerSelection === "scissors") {
            playerScore++;
            return "Scissors cut Paper, You win!";

    }   else if (computerSelection === "scissors" && playerSelection === "rock") {
            playerScore++;
            return "Rock smashes Scissors, You win!";

    }   else if (computerSelection === "scissors" && playerSelection === "paper") {
            computerScore++;
            return "Scissors cut Paper, Computer Wins!";

}


}

const rockButton = document.getElementById('rock');

rockButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
    console.log("Computer: ", computerScore);
    console.log("Player:   ", playerScore);
    console.log("Tie:      ", tie);
    if (computerScore >= 3) {
        console.log("Computer Wins Game!");
    }
    if (playerScore >= 3) {
        console.log("Player Wins Game!");
    }
});

const paperButton = document.getElementById('paper');

paperButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
    console.log("Computer: ", computerScore);
    console.log("Player:   ", playerScore);
    console.log("Tie:      ", tie);
    if (computerScore >= 3) {
        console.log("Computer Wins Game!");
    }
    if (playerScore >= 3) {
        console.log("Player Wins Game!");
    }
});

const scissorsButton = document.getElementById('scissors');

scissorsButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
    console.log("Computer: ", computerScore);
    console.log("Player:   ", playerScore);
    console.log("Tie:      ", tie);
    if (computerScore >= 3) {
        console.log("Computer Wins Game!");
    }
    if (playerScore >= 3) {
        console.log("Player Wins Game!");
    }
});


