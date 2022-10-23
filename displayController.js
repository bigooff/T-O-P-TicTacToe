
const outputBox = document.querySelector(".statusBox")


export function updateOutput(player){
    outputBox.textContent = `Current player's turn: ${player}`
}

