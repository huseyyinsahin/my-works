const playerTurn = document.getElementById("playerTurn");
const playerScore = document.getElementById("playerScore");
const computerTurn = document.getElementById("computerTurn");
const computerScore = document.getElementById("computerScore");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const allGameIcons = document.querySelectorAll(".icon");

let computerChoice = "";

function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  console.log(computerChoiceNumber);

  if (computerChoiceNumber < 0.3) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.65) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 1) {
    computerChoice = "scissors";
  }
}

function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerTurn.textContent = " --- Taş";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerTurn.textContent = " --- Kağıt";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerTurn.textContent = " --- Makas";
      break;
  }
}

function checkResult() {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
}

function select(playerChoice) {
  // console.log(playerChoice)

  checkResult();

  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerTurn.textContent = " --- Taş";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerTurn.textContent = " --- Kağıt";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerTurn.textContent = " --- Makas";
      break;
  }
}
