const DOMplayerScore = document.getElementById("player-score");
const DOMplayerName = document.getElementById("player-name");
const DOMAIName = document.getElementById("AI-name");
const DOMAIScore = document.getElementById("AI-score");

const cardPage = document.getElementById("card-page");
const battlePage = document.getElementById("battle-page");
const STATES = ["CHOOSE", "BATTLE"];
let state = STATES[0];

const btnRock = document.getElementById("b-rock");
const btnPaper = document.getElementById("b-paper");
const btnScissor = document.getElementById("b-scissor");

const playerCard = document.getElementById("player-card");
const playerCardName = document.getElementById("player-card-name");
const AICard = document.getElementById("AI-card");
const AICardName = document.getElementById("AI-card-name");
const battleInfo = document.getElementById("battle-info");
const btnNextRound = document.getElementById("next-round");

DOMplayerName.textContent = localStorage.getItem("playerName");
DOMAIName.textContent = localStorage.getItem("AIName");
let playerScore = 0;
let AIScore = 0;
let AILevel = Number(localStorage.getItem("AIName").slice(-1));

// for debugging
document.onkeydown = (e) => {
  if (e.key === "f") {
    console.log("switch display");
    if (state === "CHOOSE") {
      state = STATES[1];
      cardPage.style.display = "none";
      battlePage.style.display = "block";
    } else if (state === "BATTLE") {
      state = STATES[0];
      cardPage.style.display = "block";
      battlePage.style.display = "none";
    }
  }
};

function randomChoice() {
  const r = Math.random();
  if (r < 1 / 3) {
    return "r";
  } else if (r < 2 / 3) {
    return "p";
  } else {
    return "s";
  }
}

function getWinChoice(playerChoice) {
  switch (playerChoice) {
    case "r":
      return "p";
    case "p":
      return "s";
    case "s":
      return "r";
  }
}

function getLoseChoice(playerChoice) {
  switch (playerChoice) {
    case "r":
      return "s";
    case "p":
      return "r";
    case "s":
      return "p";
  }
}

function generateAIChoice(AILevel, playerChoice) {
  switch (AILevel) {
    case 0:
      if (Math.random() > 0.5) {
        return getLoseChoice(playerChoice);
      } else {
        return randomChoice();
      }
    case 1:
      return randomChoice();
    case 2:
      if (Math.random() > 0.75) {
        return getWinChoice(playerChoice);
      } else {
        return randomChoice();
      }
    case 3:
      return getWinChoice(playerChoice);
  }
}
