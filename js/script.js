const buttons = document.querySelectorAll("button");
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
