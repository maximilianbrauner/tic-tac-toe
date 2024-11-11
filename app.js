const Gameboard = () => {
  const rows = 3;
  const board = [];
  const columns = 3;

  for (let row = 0; row < rows; row++) {
    board[row] = [];
    for (let column = 0; column < columns; column++) {
      board[row][column] = "";
    }
  }
  const getBoard = () => board;

  const setMove = (row, column, symbol) => {
    if (board[row][column] === "") {
      board[row][column] = symbol;
      if (game.checkWinner(symbol)) {
        console.log(`${symbol} hat gewonnen!`);
      }
      return true;
    }
    return false;
  };
  return { getBoard, setMove };
};

const gameController = (gameboard) => {
  const winningCombinations =  [
    // Rows
    [[0, 0], [0, 1], [0, 2]], 
    [[1, 0], [1, 1], [1, 2]],  
    [[2, 0], [2, 1], [2, 2]],  
    // Columns
    [[0, 0], [1, 0], [2, 0]], 
    [[0, 1], [1, 1], [2, 1]], 
    [[0, 2], [1, 2], [2, 2]], 
    // Diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]], 
  ];

  const checkWinner = (player) => {
    const board = gameboard.getBoard();
    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];
      let isWinner = true;

      for (j = 0; j < combination.length; j++) {
        const [row, column] = combination[j];
        if (board[row][column] != player) {
          isWinner = false;
          break;
        }
      }
      if (isWinner) {
        return true;
      }
    }
    return false;
  };
  return { checkWinner };
};

const gameboard = Gameboard();  // Erstelle das Gameboard
const game = gameController(gameboard);  // Erstelle den Gamecontroller und übergebe das Board

gameboard.setMove(0, 0, "X");
gameboard.setMove(0, 1, "X");

console.log(gameboard.getBoard());

if (game.checkWinner("X")) {
  console.log("X hat gewonnen!");
} else {
  console.log("Kein Gewinner noch.");
}
