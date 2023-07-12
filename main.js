const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

const playerMoveDisplay = document.getElementById("player-move");
const computerMoveDisplay = document.getElementById("computer-move");
const winnerDisplay = document.getElementById("winner-value");

const gameCounter = document.getElementById("game-count");

rockButton.addEventListener("click", async () => {
    const result = await submitPlayerMove(1);

    playerMoveDisplay.innerText = result.playerMove;
    computerMoveDisplay.innerText = result.computerMove;
    winnerDisplay.innerText = result.winner;
    gameCounter.innerText = Number(gameCounter.innerText) + 1;
});

paperButton.addEventListener("click", async () => {
    const result = await submitPlayerMove(2);
    
    playerMoveDisplay.innerText = result.playerMove;
    computerMoveDisplay.innerText = result.computerMove;
    winnerDisplay.innerText = result.winner;
    gameCounter.innerText = Number(gameCounter.innerText) + 1;
});

scissorsButton.addEventListener("click", async () => {
    const result = await submitPlayerMove(3);
    
    playerMoveDisplay.innerText = result.playerMove;
    computerMoveDisplay.innerText = result.computerMove;
    winnerDisplay.innerText = result.winner;
    gameCounter.innerText = Number(gameCounter.innerText) + 1;
});


const submitPlayerMove = async (playerMove) => {
    const url = ``; // Create env variable solution to prevent pushing URLs to source control

    const response = await fetch(url);
    const matchData = await response.json();

    console.log(matchData);

    return matchData;
}