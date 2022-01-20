let rps = [`Rock`, `Paper`, `Scissors`];
let result = [`Lose`, `Win`, `Tie`];
let playerScore = 0;
let computerScore = 0;
let r;

let playerSelection = rps[0]; //for now, let's just hardcode this. later- make function that asks for input in console.
let computerSelection = computerPlay();

function computerPlay(){
    let randNum = Math.floor(Math.random() * 3);
    return rps[randNum];
}

function playRound(playerSelection, computerSelection, r){
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
    }
    if (r == result[0]) {computerScore += 1}
    else if (r == result[1]) {playerScore += 1}

    return `Player - ${playerSelection} vs ${computerSelection} - Computer \nResult : ${r}\nScoreboard : Player ${playerScore} || ${computerScore} Computer\n`;
}

function game(playerSelection, computerSelection){
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection, computerSelection));
    }

    //check who wins
    if (playerScore > computerScore) return `You Win`
    else if (computerScore > playerScore) return 'You lose'
    else return `Tie`
}


console.log(game(playerSelection, computerSelection));