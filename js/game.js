
import * as script from './interface.js';



let board = ["", "", "", "", "", "", "", "", ""]
let symbols = ["x", "o"]
const sequencesToWin = [[0, 1, 2,],
[3, 4, 5], [6, 7, 8], [0, 3, 6],
[1, 4, 7], [2, 5, 8], [0, 4, 8,],
[2, 4, 6]]
let CurretlyPlayer = 0
let gameOver = false

const player = {

  update(currentlyBlock) {
    this.addToBoard(currentlyBlock)
    this.verifyWinState(sequencesToWin)

  },
  addToBoard(currentlyBlock) {
    if (this.validateIfHaveASymbolInTheBlock(currentlyBlock) && CurretlyPlayer == 0) {
      board[currentlyBlock.id] = symbols[CurretlyPlayer];
      CurretlyPlayer = 1
      console.log(CurretlyPlayer)
    }
    else if (this.validateIfHaveASymbolInTheBlock(currentlyBlock) && CurretlyPlayer == 1) {
      board[currentlyBlock.id] = symbols[CurretlyPlayer];
      CurretlyPlayer = 0
      console.log(CurretlyPlayer)
    }
  },
  addSymbolInInteractiveBlock(currentlyBlock) {
    if (this.validateIfHaveASymbolInTheBlock(currentlyBlock)) {
      currentlyBlock.dataset.block = symbols[CurretlyPlayer];
    }
  },
  validateIfHaveASymbolInTheBlock(currentlyBlock) {
    if (board[currentlyBlock.id] !== "") {
      return false
    }
    else {
      return true
    }
  },
  verifyWinState(sequencesToWin) {
    for (let currentlySequence of sequencesToWin) {
      let position1 = currentlySequence[0]
      let position2 = currentlySequence[1]
      let position3 = currentlySequence[2]
      if (board[position1] == board[position2] && board[position1] == board[position3] && board[position1] !== "") {
        gameOver = true
        this.addPointsToScoreBoard(CurretlyPlayer)
      }
    }
  },
  resetTheGame() {
    board = ["", "", "", "", "", "", "", "", ""]
    CurretlyPlayer = 0
    gameOver = false
    for (let EachBlock of script.elements.gameInteractiveBlocks) {
      EachBlock.dataset.block = ""
    }
  },
  addPointsToScoreBoard(CurretlyPlayer) {
    if (CurretlyPlayer == 1) {
      let currentlyPoints = script.elements.player0points.innerHTML
      script.elements.player0points.innerText = parseInt(currentlyPoints) + 1
      setTimeout(() => {
        alert(`O jogador 0 foi o campeão`)
      }, 10);
    }
    else {
      let currentlyPoints = script.elements.player1points.innerHTML
      script.elements.player1points.innerText = parseInt(currentlyPoints) + 1
      setTimeout(() => {
        alert(`O jogador 1 foi o campeão`)
      }, 10);
    }
  }
}


export { player, gameOver, board, CurretlyPlayer };
