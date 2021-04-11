// DOM Elements
const boxes = grid.querySelectorAll(".box");
const modal = document.getElementById("modal");
const modalText = document.querySelector("#modal p");
const newGameButton = document.getElementById("new-game")
const resetGameButton = document.getElementById("reset-game")

//  Game Variables
const playerMarks = ["X", "O"]
const initialBoxValues = ["", "", "", "", "", "", "", "", ""];
let checkedBoxes = [...initialBoxValues];

let currentPlayer = 1;
let gameStarted = false;

// Functions
const checkForWinner = (mark) => {
    for(let i = 0; i < 3; i++){
        let rowCount = 0;
        let colCount = 0;

        for(let j = 0; j < 3; j++){
            if(checkedBoxes[j + 3*i] === mark){
                rowCount++;
            }

            if(checkedBoxes[3*j + i] === mark){
                colCount++;
            }
        }

        if(rowCount === 3){
            if(mark === playerMarks[0]){
                return 1;
            }else{
                return 2;
            }
        }

        if(colCount === 3){
            if(mark === playerMarks[0]){
                return 1;
            }else{
                return 2;
            }
        }
    }

    if(
        (checkedBoxes[0] === mark && checkedBoxes[4] === mark && checkedBoxes[8] === mark) ||
        (checkedBoxes[2] === mark && checkedBoxes[4] === mark && checkedBoxes[6] === mark)
    ){
        if(mark === playerMarks[0]){
            return 1;
        }else{
            return 2;
        }
    }

    return null;
}

const move = (e) => {
    if(!gameStarted){
        return;
    }

    let index = parseInt(e.target.id.split("-")[1])

    if(checkedBoxes[index] === ""){
        let boxElement = document.querySelector(`#box-${index} span`);
        boxElement.innerText = playerMarks[currentPlayer - 1];

        if(currentPlayer === 2){
            boxElement.classList.add("dark-blue-text");
        }

        checkedBoxes[index] = playerMarks[currentPlayer - 1];

        let winner = checkForWinner(playerMarks[currentPlayer - 1]);

        if(winner){
            gameStarted = false;

            updateScore(winner)

            modalText.innerText = "Player " + winner + " wins!";
            modal.style.display = "flex"

            setTimeout(() => {
                modalText.innerText = "";
                modal.style.display = "none"
            }, 1500)
        }

        let emptyBoxIndex = checkedBoxes.findIndex(box => box === "");

        if(emptyBoxIndex === -1){
            gameStarted = false;
            return;
        }

        if(currentPlayer === 1){
            currentPlayer = 2;
        }else{
            currentPlayer = 1;
        }
    }
}

const startNewGame = () => {
    if(gameStarted){
        let confirm = window.confirm("Are you sure you want to start a new game?");

        if(confirm){
            gameStarted = false;
            startNewGame()
        }
    }

    currentPlayer = 1;
    checkedBoxes = [...initialBoxValues];
    resetScores();
    gameStarted = true;
    resetGridValues()
}

const resetGame = () => {
    if(gameStarted){
        return;
    }

    gameStarted = true;
    currentPlayer = 1;
    checkedBoxes = [...initialBoxValues];
    resetGridValues()
}

// Listeners
boxes.forEach(box => {
    box.addEventListener("click", move)
})

newGameButton.addEventListener("click", startNewGame)
resetGameButton.addEventListener("click", resetGame)