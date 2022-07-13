let playerScore = 0;
let computerScore = 0;
let tie = 0;

const container = document.querySelector(".container");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const displayDiv = document.createElement("div");
const tieDiv = document.createElement("div");
const cwDiv = document.createElement("div");
const pwDiv = document.createElement("div");
const winnerDiv = document.createElement("div");
const headerDiv = document.createElement("div")


rockBtn.id = "rock";
rockBtn.textContent = "Rock Yeah!";
paperBtn.id = "paper";
paperBtn.textContent = "Paper Me!";
scissorsBtn.id = "scissors";
scissorsBtn.textContent = "Scissors Ho!";
displayDiv.classList.add("displayDiv");
displayDiv.textContent = "Greetings Professor Falken.  Shall We Play A Game?";
tieDiv.classList.add("tieDiv");
tieDiv.textContent = `Ties: ${tie}`;
cwDiv.classList.add("cwDiv");
cwDiv.textContent = `Computer: ${computerScore}`;
pwDiv.classList.add("pwDiv");
pwDiv.textContent = `Player: ${playerScore}`;
winnerDiv.classList.add("winnerDiv");
headerDiv.classList.add("headerDiv");
headerDiv.append(pwDiv, cwDiv, tieDiv);
container.append(
  headerDiv,
  displayDiv,
  rockBtn,
  paperBtn,
  scissorsBtn,
  winnerDiv
);
//create function to select choice for computer
function computerPlay() {
  let num = Math.floor(Math.random() * 3) + 1;

  if (num == 1) {
    return "rock";
  } else if (num == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//create function that declares winner of the round and keeps score
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  playerSelection = playerSelection;

  if (computerSelection === playerSelection) {
    tie++;
    displayDiv.textContent = "It's a tie!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    displayDiv.textContent = "Rock smashes Scissors, Computer Wins!";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    displayDiv.textContent = "Paper covers Rock, You win!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    displayDiv.textContent = "Paper covers Rock, Computer Wins!";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore++;
    displayDiv.textContent = "Scissors cut Paper, You win!";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore++;
    displayDiv.textContent = "Rock smashes Scissors, You win!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    displayDiv.textContent = "Scissors cut Paper, Computer Wins!";
  }
  tieDiv.textContent = `Ties: ${tie}`;
  cwDiv.textContent = `Computer: ${computerScore}`;
  pwDiv.textContent = `Player: ${playerScore}`;
}

const rockButton = document.getElementById("rock");

rockButton.addEventListener("click", (e) => {
  playRound(e.target.id, computerPlay);

  if (computerScore === 5) {
    winnerDiv.textContent = "Computer Wins Game!";
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    tieDiv.textContent = `Ties: ${tie}`;
    cwDiv.textContent = `Computer: ${computerScore}`;
    pwDiv.textContent = `Player: ${playerScore}`;
  } else if (playerScore === 5) {
    winnerDiv.textContent = "Player Wins Game!";
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    tieDiv.textContent = `Ties: ${tie}`;
    cwDiv.textContent = `Computer: ${computerScore}`;
    pwDiv.textContent = `Player: ${playerScore}`;
  } else if (tie === 5) {
    tieDiv.textContent = "It's a Tie Game!";
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    tieDiv.textContent = `Ties: ${tie}`;
    cwDiv.textContent = `Computer: ${computerScore}`;
    pwDiv.textContent = `Player: ${playerScore}`;
  }
});

const paperButton = document.getElementById("paper");

paperButton.addEventListener("click", (e) => {
  playRound(e.target.id, computerPlay);

  if (computerScore === 5) {
    winnerDiv.textContent = "Computer Wins Game!";
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    tieDiv.textContent = `Ties: ${tie}`;
    cwDiv.textContent = `Computer: ${computerScore}`;
    pwDiv.textContent = `Player: ${playerScore}`;
  }
  if (playerScore === 5) {
    winnerDiv.textContent = "Player Wins Game!";
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    tieDiv.textContent = `Ties: ${tie}`;
    cwDiv.textContent = `Computer: ${computerScore}`;
    pwDiv.textContent = `Player: ${playerScore}`;
  } else if (tie === 5) {
    tieDiv.textContent = "It's a Tie!";
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    tieDiv.textContent = `Ties: ${tie}`;
    cwDiv.textContent = `Computer: ${computerScore}`;
    pwDiv.textContent = `Player: ${playerScore}`;
  }
});

const scissorsButton = document.getElementById("scissors");

scissorsButton.addEventListener("click", (e) => {
  playRound(e.target.id, computerPlay);

  if (computerScore === 5) {
    winnerDiv.textContent = "Computer Wins Game!";
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    tieDiv.textContent = `Ties: ${tie}`;
    cwDiv.textContent = `Computer: ${computerScore}`;
    pwDiv.textContent = `Player: ${playerScore}`;
  }
  if (playerScore === 5) {
    winnerDiv.textContent = "Player Wins Game!";
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    tieDiv.textContent = `Ties: ${tie}`;
    cwDiv.textContent = `Computer: ${computerScore}`;
    pwDiv.textContent = `Player: ${playerScore}`;
  } else if (tie === 5) {
    tieDiv.textContent = "It's a Tie!";
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    tieDiv.textContent = `Ties: ${tie}`;
    cwDiv.textContent = `Computer: ${computerScore}`;
    pwDiv.textContent = `Player: ${playerScore}`;
  }
});
