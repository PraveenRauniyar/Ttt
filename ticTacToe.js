
let counter = 0;
const getSign = function(id) {
  counter++;
  if (counter % 2 == 0) {
    moveForX.push(id);
    return 'X';
  }
  moveForO.push(id);
  return "O";
}

let winningConditions = [
  [1, 2, 3],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
  [3, 5, 7]
];


let moveForX = [];
let moveForO = [];

const hasPlayerXWon = function() {
  let isWinningSet = isSubset.bind(null, moveForX);
  return (winningConditions.some(isWinningSet));
};

const hasPlayerOWon = function() {
  let isWinningSet = isSubset.bind(null, moveForO);
  return (winningConditions.some(isWinningSet));
};

const displayResult = function() {
  let text = ""
  if (hasPlayerXWon()) {
    text = (" Congratulation! player X has won ");
  };
  if (hasPlayerOWon()) {
    text = (" Congratulation! player O has won ");
  };
  if (counter == 9 && !hasAnyPlayerWon()) {
    text = ("Match Draw");
  }
  document.getElementById("winner").innerText = text;
  return;
};

const hasAnyPlayerWon = function() {
  return (hasPlayerOWon() || hasPlayerXWon());
};

const isValidMove = function() {
  return (counter <= 9);
};

const execution = function(id) {
  if (isValidMove(moveForX, moveForO)) {
    getSignInBox (id);
  }
  if (hasAnyPlayerWon()|| counter == 9) {
    displayResult(moveForX, moveForO);
    stopGame();
  }
}

let idList = [];
const getSignInBox  = function(id) {
  if (!idList.includes(id)) {
    idList.push(id);
    document.getElementById(id).innerText = getSign(id);
  } else {
    alert("wrong move");
    return;
  }
};

const stopGame = function(){
  for (var i = 1; i < 10; i++) {
    document.getElementById(i).id = 0;
  }
}


const isSubset = function(playersMove, winningConditions) {
  return winningConditions.every(function(playerMove) {
    return playersMove.includes(playerMove)
  });
};
