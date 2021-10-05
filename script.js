//create game that plays against computer
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


//create function for input from user for their choice
function playerPlay() {

    let x = prompt("Rock, Paper, or Scissors?");

    return x.toLowerCase();
   
}

//create function that declares winner of the round
function playRound(playerSelection, computerSelection) {

 computerSelection = computerPlay();

 playerSelection = playerSelection; 

    
    if (computerSelection === playerSelection) {
        return "It's a tie!";

    }   else if (computerSelection === "rock" && playerSelection === "scissors") {
        
            return "Rock smashes Scissors, Computer Wins!";

    }   else if (computerSelection === "rock" && playerSelection === "paper") {
        
            return "Paper covers Rock, You win!";

    }   else if (computerSelection === "paper" && playerSelection === "rock") {
        
            return "Paper covers Rock, Computer Wins!";

    }   else if (computerScore === "paper" && playerSelection === "scissors") {
        
            return "Scissors cut Paper, You win!";

    }   else if (computerSelection === "scissors" && playerSelection === "rock") {
        
            return "Rock smashes Scissors, You win!";

    }   else if (computerSelection === "scissors" && playerSelection === "paper") {
        
            return "Scissors cut Paper, Computer Wins!";

}

}

const rockButton = document.getElementById('rock');

rockButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
});

const paperButton = document.getElementById('paper');

paperButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
});

const scissorsButton = document.getElementById('scissors');

scissorsButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
});

//create function that collects win data to keep score and declare winner or loser of five games
let playerScore = 0;
let computerScore = 0;
let tie = 0;

function game() {

    
    result = playRound();
    
    console.log(result);





    if (result === "It's a tie!") {
        tie++;
    }   else if (result === "Rock smashes Scissors, Computer Wins!") {
        computerScore++;

    }   else if (result === "Paper covers Rock, You win!") {
        playerScore++;

    }   else if (result === "Paper covers Rock, Computer Wins!") {
        computerScore++;

    }   else if (result ==="Scissors cut Paper, You win!") {
        playerScore++;

    }   else if (result === "Rock smashes Scissors, You win!") {
        playerScore++;

    }   else if(result === "Scissors cut Paper, Computer Wins!") {
        computerScore++;
    }

    if (computerScore >= 3) {
        console.log("Computer Wins Game!");
        return;
    }
    
    if (playerScore >= 3) {
        console.log("Player Wins Game!");
        return;
    }

    
}
    
//create ui that allows player to click buttons for choice
    
/*const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    alert("You choose ROCK!");
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("You choose PAPER!");
});


const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert("You choose Scissors");
});*/



//game();
console.log("Computer: ", computerScore);
console.log("Player:   ", playerScore);
console.log("Tie:      ", tie);
/*game();
console.log("Computer: ", computerScore);
console.log("Player:   ", playerScore);
console.log("Tie:      ", tie);
game();
console.log("Computer: ", computerScore);
console.log("Player:   ", playerScore);
console.log("Tie:      ", tie);
game();
console.log("Computer: ", computerScore);
console.log("Player:   ", playerScore);
console.log("Tie:      ", tie);
game();
console.log("Computer: ", computerScore);
console.log("Player:   ", playerScore);
console.log("Tie:      ", tie);*/