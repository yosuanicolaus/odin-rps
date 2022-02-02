let rps = [`Rock`, `Paper`, `Scissors`];
let result = [`Lose`, `Win`, `Tie`];
let playerScore = 0;
let computerScore = 0;
let r;

let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('button');
const text = document.querySelector('div');

const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');

function computerPlay(){
    let randNum = Math.floor(Math.random() * 3);
    return rps[randNum];
}

function capitalConvert(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(buttonID, computerSelection, r){
    playerSelection = rps[buttonID];
    computerSelection = computerPlay();

    if (playerSelection == rps[0]){
        if (computerSelection == rps[0]) {r = result[2]}
        else if (computerSelection == rps[1]) {r = result[0]}
        else if (computerSelection == rps[2]) {r = result[1]}
    } else if (playerSelection == rps[1]){
        if (computerSelection == rps[0]) {r = result[1]}
        else if (computerSelection == rps[1]) {r = result[2]}
        else if (computerSelection == rps[2]) {r = result[0]}
    } else if (playerSelection == rps[2]){
        if (computerSelection == rps[0]) {r = result[0]}
        else if (computerSelection == rps[1]) {r = result[1]}
        else if (computerSelection == rps[2]) {r = result[2]}
    } else return "error, please try again."

    if (r == result[0]) {computerScore += 1}
    else if (r == result[1]) {playerScore += 1}

    d1.textContent = `Player - ${playerSelection} vs ${computerSelection} - Computer`;
    d2.textContent = `Result : ${r}`;
    d3.textContent = `Scoreboard : Player ${playerScore} || ${computerScore} Computer`;

    return `Player - ${playerSelection} vs ${computerSelection} - Computer \r\nResult : ${r}\r\nScoreboard : Player ${playerScore} || ${computerScore} Computer\n`;
}

function game(playerSelection, computerSelection){
    //keep playing the game until either player or computer reach 3 score.
    for(playerScore, computerScore; playerScore < 3 && computerScore < 3; playerScore, computerScore){
        console.log(playRound(playerSelection, computerSelection));
    }

    //check who wins
    let finalResult;
    (playerScore > computerScore) ? finalResult = `You Win` : finalResult = `You Lose`

    return `Final Result : ${finalResult}`
}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    })});
