import * as Board from "./Gameboard.js";


const restartBtn = document.querySelector(".restart-btn")
const overheadBtn = document.querySelector(".name-btn")
const nameInput = document.querySelector(".name")
const overhead = document.querySelector(".overhead")


export let playerName;
overheadBtn.addEventListener("click",()=>{
    playerName = nameInput.value
    Board.startGame();
    overhead.remove()
})




restartBtn.addEventListener("click",Board.restartGame)




