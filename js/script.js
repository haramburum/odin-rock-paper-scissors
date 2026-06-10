let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let humanChoice = prompt("Enter value: ", "");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      humanScore++;
      console.log(`You win! ${humanChoice} beat ${computerChoice}`);
    } else if (computerChoice === "scissors") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
    }
    if (computerChoice === "rock") {
      console.log("Tie!");
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      console.log(`You win! ${humanChoice} beat ${computerChoice}`);
    } else if (computerChoice === "scissors") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
    }
    if (computerChoice === "paper") {
      console.log("Tie!");
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      console.log(`You win! ${humanChoice} beat ${computerChoice}`);
    } else if (computerChoice === "rock") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
    }
    if (computerChoice === "scissors") {
      console.log("Tie!");
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
