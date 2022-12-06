const choices = ['rock', 'paper', 'scissors'];

function capitalize(str) {
    if (str.length == 0) return str;
    return str[0].toUpperCase() + str.substr(1);
}

function getComputerChoice() {
    const ind = Math.floor(Math.random() * 3);
    return choices[ind];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if (!choices.includes(player) || !choices.includes(computer)) {
        throw new Error("Please input a correct option! Either 'Rock', 'Paper', or 'Scissors'.");
    }

    const plInd = choices.indexOf(player);
    const compInd = choices.indexOf(computer);
    if ((plInd + 2) % 3 == compInd) {
        console.log(`You Win! ${capitalize(player)} beats ${capitalize(computer)}.`);
        return 1;
    } else if ((plInd + 1) % 3 == compInd) {
        console.log(`You Lose! ${capitalize(computer)} beats ${capitalize(player)}.`);
        return -1;
    } else {
        console.log(`You Draw! ${capitalize(player)} ties with ${capitalize(computer)}.`);
        return 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection =  prompt("Choose Rock, Paper, or Scissors! Or type 'Exit' to leave.");
        if (playerSelection.toLowerCase() == "exit") {
            console.log("Bye!");
            return;
        }
        while (!choices.includes(playerSelection.toLowerCase())) {
            playerSelection = prompt("Please input a correct option! Either 'Rock', 'Paper', 'Scissors', or 'Exit'.");
        }
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        if (result == 1) {
            playerScore++;
        } else if (result == -1) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You won! Final score is: You ${playerScore} - ${computerScore} Computer.`);
    } else if (playerScore < computerScore) {
        console.log(`You lost! Final score is: You ${playerScore} - ${computerScore} Computer.`);
    } else {
        console.log(`You tied! Final score is: You ${playerScore} - ${computerScore} Computer.`);
    }
}

game();