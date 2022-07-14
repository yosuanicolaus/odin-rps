const playerScore = document.getElementById("player-score");
const playerName = document.getElementById("player-name");
const AIScore = document.getElementById("AI-score");
const AIName = document.getElementById("AI-name");

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
