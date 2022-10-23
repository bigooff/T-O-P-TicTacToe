import * as Controller from "./displayController.js"
import { playerName } from "./main.js"
const boardCells = document.querySelectorAll(".board-cell")
const outputBox = document.querySelector(".statusBox")
const userName = document.querySelector(".username")

let gameBoardState = ["","","","","","","","",""];
let currentPlayer = "X";
let isRunning = false;
let winCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

export function startGame(){
    isRunning = true;
    userName.textContent = playerName
    boardCells.forEach((cell)=>{
        cell.addEventListener("click", () => {
            if(gameBoardState[cell.getAttribute("data-cell")] !== "" || !isRunning){return}
            updateCell(cell,cell.getAttribute("data-cell"))
            checkWin()

            })
        })

        Controller.updateOutput(currentPlayer);
        

    }

    function updateCell(cell,index){
        gameBoardState[index] = currentPlayer
        cell.textContent = currentPlayer
    }


    function checkWin(){
        let hasWon = false;

        for (let i = 0; i < winCondition.length; i++) {
            const tempCondition = winCondition[i]
            const first = gameBoardState[tempCondition[0]]
            const second = gameBoardState[tempCondition[1]]
            const third = gameBoardState[tempCondition[2]]

            if(first === "" || second === "" || third === ""){
                continue;
            } 
            if(first === second && second === third){
                hasWon = true
                break;
            }
        }
        if(hasWon){
            outputBox.textContent = `${currentPlayer} has won!`   
            isRunning = false; 
        } else if(!gameBoardState.includes("")){
            outputBox.textContent = `its a draw`
            isRunning = false; 
        } else {
            changePlayer()
        }
    }


    function changePlayer(){
        if(currentPlayer === "X"){
            currentPlayer = "O";
        } else if(currentPlayer === "O"){
            currentPlayer = "X";
        }
        Controller.updateOutput(currentPlayer);
    }
    


export   function restartGame(){
        gameBoardState = ["","","","","","","","",""];
        currentPlayer = "X";
        Controller.updateOutput(currentPlayer);
        boardCells.forEach(cell=>{
            cell.textContent = ""
        })
        isRunning = true;
    }






