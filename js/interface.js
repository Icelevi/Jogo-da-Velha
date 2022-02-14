//[x]Sistema que alterna entre o "X" e o "O", a cada nova "jogada". e não mude, continue no mesmo lugar.

//[]Sistema que verifica se o jogador conseguiu fazer uma sequência de 3, tanto na vertical como 
//na horizontal


import * as game from "./game.js"


const elements = {
    gameInteractiveBlocks: document.querySelectorAll("[data-block]"),
    btnResetTheGame: document.querySelector("#btnResetTheGame"),
    player0points: document.getElementById("player-0-points"),
    player1points: document.getElementById("player-1-points"),
    btnResetPoints: document.getElementById("btnResetPoints"),
    xIcon: "x",
    circleIcon: "o"
}

elements.gameInteractiveBlocks.forEach(block => {
    block.addEventListener("click", () => {
        if(game.gameOver == false){
            game.player.addSymbolInInteractiveBlock( block)
            game.player.update(block)
        }
    })
})

elements.btnResetTheGame.addEventListener("click", ()=>{
    game.player.resetTheGame()
})
elements.btnResetPoints.addEventListener("click", ()=>{
    game.player.resetPoints()
})
export { elements };