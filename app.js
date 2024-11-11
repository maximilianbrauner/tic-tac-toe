const Gameboard = (() => {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let row = 0; row < rows; row++) {
    board[row] = [];
    for (let column = 0; column < columns; column++) {
      board[row][column] = "";
    }
  }

  const getBoard = () => board;

  const setMove = (row, column, symbol) => {
    if (
      row >= 0 &&
      row < rows &&
      column >= 0 &&
      column < columns &&
      board[row][column] === ""
    ) {
      board[row][column] = symbol;
      return true;
    }
    return false;
  };

  return { getBoard, setMove };
})();

const gameController = () => {
  const gameboard = Gameboard;

  const winningCombinations = [
    [0, 1, 2], // Rows
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], // Columns
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6] 
  ];
  const checkWinner = (player) => {
    const board = gameboard.getBoard();

    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];
      let isWinner = true;
      for (let j = 0; j < combination.length; j++) {
        const [row, column] = combination[j];
        if (board[row][column] !== player) {
          isWinner = false;
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

const game = gameController();

Gameboard.setMove(0, 0, "X");
Gameboard.setMove(0, 1, "X");
Gameboard.setMove(0, 2, "X");

if (game.checkWinner("X")) {
  console.log("X hat gewonnen!");
} else {
  console.log("Kein Gewinner");
}

console.log(Gameboard.getBoard());
