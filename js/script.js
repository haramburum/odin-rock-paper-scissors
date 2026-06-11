const buttons = document.querySelectorAll("button");
const gameInfo = document.querySelector(".gameInfo");
const humanScoreDom = document.querySelector(".humanScore");
const computerScoreDom = document.querySelector(".computerScore");
const gameWinner = document.querySelector(".gameWinner");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    clearWinner();
    let humanChoice = e.target.getAttribute("data-btn");
    playRound(humanChoice);
    updateScore();
    defineWinner();
  });
});

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    gameInfo.textContent = `Tie!`;
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    gameInfo.textContent = `You win! ${humanChoice} beat ${computerChoice}`;
  } else {
    computerScore++;
    gameInfo.textContent = `You lose! ${computerChoice} beat ${humanChoice}`;
  }
}

function defineWinner() {
  if (computerScore === 5) {
    gameWinner.textContent = `The winner of the game is COMPUTER`;
    clearScore();
  } else if (humanScore === 5) {
    gameWinner.textContent = `The winner of the game is HUMAN`;
    clearScore();
  }
}

function updateScore() {
  humanScoreDom.textContent = humanScore;
  computerScoreDom.textContent = computerScore;
}

function clearScore() {
  computerScore = 0;
  humanScore = 0;
}

function clearWinner() {
  if (gameWinner.textContent !== "") {
    gameWinner.textContent = "";
  }
}
