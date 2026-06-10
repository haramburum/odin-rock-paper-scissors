function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let humanChoice = prompt('Enter value: ', '');
    return humanChoice;
}

console.log(getHumanChoice());