// code goes here

// set up board
var gameTable = ['', '', '', '', '', '', '', '', '']
var currentPlayer = 'x'
var gameStatus = true;

// set up click listeners
var cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', cellClicked));
document.querySelector('.reset').addEventListener('click', resetClicked);

// click function
function cellClicked(event) {
  if(!gameStatus) {
    return;
  }
  // get index of clicked target
  var id = event.target.getAttribute('id');
  // console.log('clicked', id);
  if(gameTable[id] !== '') {
    return;
  }
  gameTable[id] = currentPlayer;
  event.target.innerHTML = currentPlayer;
  checkWinner();
}

// change player function
function changePlayer() {
  if(currentPlayer === 'x') {
    currentPlayer = 'o';
  } else {
    currentPlayer = 'x';
  }
  document.querySelector('.turn').innerHTML = 'current player turn: ' + currentPlayer;
}

// check winner function
function checkWinner() {
    // add col checkers
    for(var i = 0; i < 3; i++) {
      if(gameTable[i] === 'x' && gameTable[i+3] === 'x' && gameTable[i+6] === 'x' ||
        gameTable[i] === 'o' && gameTable[i+3] === 'o' && gameTable[i+6] === 'o' ) {
        // break out of loop, game over
        gameStatus = false;
        document.querySelector('.result').innerHTML = 'result: ' + currentPlayer;
      } else {
        continue;
      }
    }
    // add row checkers
    for(var i = 0; i < 7; i += 3) {
      if(gameTable[i] === 'x' && gameTable[i+1] === 'x' && gameTable[i+2] === 'x' ||
        gameTable[i] === 'o' && gameTable[i+1] === 'o' && gameTable[i+2] === 'o' ) {
        // break out of loop, game over
        gameStatus = false;
        document.querySelector('.result').innerHTML = 'result: ' + currentPlayer;
      } else {
        continue;
      }
    }
    // add diag checkers
    if(gameTable[0] === 'x' && gameTable[4] === 'x' && gameTable[8] === 'x' ||
      gameTable[0] === 'o' && gameTable[4] === 'o' && gameTable[8] === 'o' ) {
        // break out of loop, game over
        gameStatus = false;
        document.querySelector('.result').innerHTML = 'result: ' + currentPlayer;
      }
    if(gameTable[2] === 'x' && gameTable[4] === 'x' && gameTable[6] === 'x' ||
      gameTable[2] === 'o' && gameTable[4] === 'o' && gameTable[6] === 'o' ) {
        // break out of loop, game over
        gameStatus = false;
        document.querySelector('.result').innerHTML = 'result: ' + currentPlayer;
      }

    // if no more moves and no winners, then we have a tie
    var count = 0;
    for(var i = 0; i < 9; i++) {
      if(gameTable[i] === '') {
        count++;
      }
    }
    if (count === 0) {
      document.querySelector('.result').innerHTML = 'result: TIE';
    }
  // only change player if game is NOT over
  changePlayer();
}

// click function for reset
function resetClicked() {
  currentPlayer = 'x';
  gameTable = ['', '', '', '', '', '', '', '', ''];
  gameStatus = true;
  cells.forEach(cell => cell.innerHTML = '[]')
  document.querySelector('.result').innerHTML = 'result: ';
}