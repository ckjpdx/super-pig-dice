function Player(playerName){
  this.name = playerName;
  this.score = 0;
}

function PigDice(player1Name, player2Name){
  this.tempScore = 0;
  this.player1 = new Player(player1Name); // new is a command that creates a new oject from Player Constructor
  this.player2 = new Player(player2Name);
  this.action = '';
}

function HallOfFameWinner(pigDice, winner){
  this.name = pigDice[winner].name;
  this.score = pigDice[winner].score;
}

PigDice.prototype.coinToss = function () {
  var toss = Math.random();
  if (toss > 0.5) {
    this.turn = 'player1';
  } else {
    this.turn = 'player2';
  }
};

PigDice.prototype.rollDice = function () {
    this.roll = Math.floor(Math.random() * 6) + 1; // (0 - 0.9999999) * 6
};
// function rollDice(pigDice){
//   pigDice.roll = Math.floor(Math.random() * 6) + 1; // (0 - 0.9999999) * 6
//   return pigDice;
// }

function endTurn(pigDice){
  if (pigDice.turn === 'player1'){
    pigDice.turn = 'player2';
  } else {
    pigDice.turn = 'player1';
  }
  return pigDice;
}

function playGame(pigDice){
  if (pigDice.action === 'roll') {
    pigDice.rollDice();
    if (pigDice.roll > 1) {
      pigDice.tempScore += pigDice.roll;
    } else {
      pigDice.tempScore = 0;
      pigDice = endTurn(pigDice);
    }
  }
  if ( pigDice.action === 'hold') {
    var currPlayer = pigDice.turn;
    pigDice[currPlayer].score += pigDice.tempScore;
    pigDice.tempScore = 0;
    pigDice = endTurn(pigDice);
  }
  return pigDice;
}
exports.pigDiceModule = pigDice;
