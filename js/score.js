// DOM Elements
const playerOneScore = document.getElementById("player-1-score");
const playerTwoScore = document.getElementById("player-2-score");

// Game Variables
let p1Score = 0;
let p2Score = 0;

// Functions
const setScores = (p1Score, p2Score) => {
    playerOneScore.innerText = p1Score
    playerTwoScore.innerText = p2Score;
}

const updateScore = (winner) => {
    if(winner === 1){
        p1Score++;
    }else{
        p2Score++;
    }

    setScores(p1Score, p2Score);
}

const resetScores = () => {
    p1Score = 0;
    p2Score = 0;
}

setScores(p1Score, p2Score)