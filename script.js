// HTML Elements
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');

// How can we simplify the code by only using the current player?
  // Check the current player
  // if the current player is X
    // switch the current player text content to O
  // else the current player is O
    // Change the current player to X
function switchPlayer() {
  if (currentPlayer.textContent === 'X') {
    currentPlayer.textContent = 'O';
  } else {
    currentPlayer.textContent = 'X';
  }
}

// How can we use the currentPlayer and switchPlayer function to simplify our code?
function playTurn(event) {
  // Get the div that was clicked with the event target
  const square = event.target;
  console.log('Event Square:', square);

  // If the square text content is empty the play the current player
    // SET THE CLICKED SQUARE's TEXT CONTENT TO CURRENT PLAYER
  if (square.textContent === '') {
    square.textContent = currentPlayer.textContent;
  }
    // Use the switch player function
  switchPlayer()
  console.log(switchPlayer)
  console.log(currentPlayer)
}

// Event Listeners
for (const square of squares) {
  square.addEventListener('click', playTurn)
}

function resetGame() {
    for (const square of squares) {
        square.textContent = "";
        currentPlayer.textContent = "X";
    }
}

resetButton.addEventListener("click", resetGame)