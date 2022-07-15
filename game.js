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

const rockSVG = "assets/circle.svg";
const scissorSVG = "assets/scissors.svg";
const paperSVG = "assets/square.svg";

DOMplayerName.textContent = localStorage.getItem("playerName");
DOMAIName.textContent = localStorage.getItem("AIName");
let playerScore = 0;
let AIScore = 0;
let AILevel = Number(localStorage.getItem("AIName").slice(-1));
let playerChoice = "r";

// for debugging
document.onkeydown = (e) => {
  if (e.key === "f") {
    console.log("switch display");
    switchDisplay();
  }
};

function switchDisplay() {
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

btnRock.onclick = () => {
  playerChoice = "r";
  battle();
};

btnPaper.onclick = () => {
  playerChoice = "p";
  battle();
};

btnScissor.onclick = () => {
  playerChoice = "s";
  battle();
};

function battle() {
  let AIChoice = generateAIChoice(AILevel, playerChoice);
  compareChoice(playerChoice, AIChoice);
  updateCard(playerCard, playerCardName, playerChoice);
  updateCard(AICard, AICardName, AIChoice);
  switchDisplay();
}

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

function compareChoice(playerChoice, AIChoice) {
  if (playerChoice === "r") {
    if (AIChoice === "r") {
      draw();
    } else if (AIChoice === "p") {
      lose();
    } else if (AIChoice === "s") {
      win();
    }
  } else if (playerChoice === "p") {
    if (AIChoice === "r") {
      win();
    } else if (AIChoice === "p") {
      draw();
    } else if (AIChoice === "s") {
      lose();
    }
  } else if (playerChoice === "s") {
    if (AIChoice === "r") {
      lose();
    } else if (AIChoice === "p") {
      win();
    } else if (AIChoice === "s") {
      draw();
    }
  }
}

function updateCard(card, cardName, choice) {
  if (choice === "r") {
    card.src = rockSVG;
    cardName.textContent = "Rock";
  } else if (choice === "p") {
    card.src = paperSVG;
    cardName.textContent = "Paper";
  } else if (choice === "s") {
    card.src = scissorSVG;
    cardName.textContent = "Scissor";
  }
}

function draw() {}

function lose() {}

function win() {}
