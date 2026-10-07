// HTML Elements
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');
const playerWon = document.querySelector('#player-won');
let gameOver = false;

const winningLines = [
  [0, 1, 2],
  [2, 4, 6],
  [0, 4, 8],
  [1, 4, 7],
  [6, 7, 8],
  [3, 4, 5],
  [0, 3, 6],
  [2, 5, 8],
];

function switchPlayer() {
  if (currentPlayer.textContent === 'X') {
    currentPlayer.textContent = 'O';
  } else {
    currentPlayer.textContent = 'X';
  }
}

function checkWinner() {
  for (const line of winningLines) {
    const first = squares[line[0]].textContent;
    const second = squares[line[1]].textContent;
    const third = squares[line[2]].textContent;

    if (first !== '' && first === second && first === third) {
      playerWon.textContent = `${first} Won!!`;
      gameOver = true; 
      return;
    }
  }
}

function playTurn(event) {
  const square = event.target;

  if (square.textContent !== '' || gameOver) {
    return;
  }

  square.textContent = currentPlayer.textContent;
  checkWinner();

  if (!gameOver) {
    switchPlayer();
  }
}

function resetGame() {
  for (const square of squares) {
    square.textContent = '';
  }
  playerWon.textContent = '';
  currentPlayer.textContent = 'X';
  gameOver = false; 
}

for (const square of squares) {
  square.addEventListener('click', playTurn);
}

resetButton.addEventListener('click', resetGame);