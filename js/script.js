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
    humanScoreDom.textContent = humanScore;
    computerScoreDom.textContent = computerScore;
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
  }
  
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      gameInfo.textContent = `You win! ${humanChoice} beat ${computerChoice}`;
    } else if (computerChoice === "paper") {
      computerScore++;
      gameInfo.textContent = `You lose! ${computerChoice} beat ${humanChoice}`;
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      gameInfo.textContent = `You win! ${humanChoice} beat ${computerChoice}`;
    } else if (computerChoice === "scissors") {
      computerScore++;
      gameInfo.textContent = `You lose! ${computerChoice} beat ${humanChoice}`;
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      gameInfo.textContent = `You win! ${humanChoice} beat ${computerChoice}`;
    } else if (computerChoice === "rock") {
      computerScore++;
      gameInfo.textContent = `You lose! ${computerChoice} beat ${humanChoice}`;
    }
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

function clearScore() {
  computerScore = 0;
  humanScore = 0;
}

function clearWinner() {
  if (gameWinner.textContent !== '') {
    gameWinner.textContent = '';
  }
}
