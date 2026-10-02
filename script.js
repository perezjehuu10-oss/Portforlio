console.log("Hello World!!");

// HTML Elements
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const square = document.querySelector('.square');
const squares = document.querySelectorAll('.square');

// Tracking Variables
let counter = 0;

// Functions
function count() {
  counter = counter + 1;
  console.log('Count: ' + counter);
}

// 2. Create a function to change the Text to an X
function changeToX() {
  square.textContent = 'X';
  currentPlayer.textContent = 'O';
}

// Change to 0
function changeToO() {
  square.textContent = '0'
  currentPlayer.textContent = 'X';
}

// Change SquareValue, depending on what's inside
// function changeSquareValue(event) {
//   let square = event.target;
//   let squareValue = square.textContent;
//   if (squareValue === 'X') {
//     changeToO();
//   } else {
//     changeToX();
//   }
// }
//
function changeSquare(event) {
  console.log('Click event:', event)
  const square = event.target;
  console.log('Square', square);
  square.textContent = 'X';
}

// Event Listeners
resetButton.addEventListener('click', count);
// squares.addEventListener('click', changeSquareValue);



for (const square of squares) {
  square.addEventListener('click', changeSquare)
}