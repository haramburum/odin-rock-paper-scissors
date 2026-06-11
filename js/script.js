const buttons = document.querySelectorAll("button");
const gameInfo = document.querySelector('.gameInfo');
let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let humanChoice = e.target.getAttribute('data-btn');
    playRound(humanChoice);
  });
});

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      humanScore++;
      gameInfo.textContent = `You win! ${humanChoice} beat ${computerChoice}`;
    } else if (computerChoice === "scissors") {
      computerScore++;
      gameInfo.textContent = `You lose! ${computerChoice} beat ${humanChoice}`;
    }
    if (computerChoice === "rock") {
      gameInfo.textContent = "Tie!";
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
    if (computerChoice === "paper") {
      gameInfo.textContent = "Tie!";
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
    if (computerChoice === "scissors") {
      gameInfo.textContent = "Tie!";
    }
  }
}
