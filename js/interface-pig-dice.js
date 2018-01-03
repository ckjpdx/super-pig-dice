// FRONT END
var pigDice = require('./../js/pig-dice.js').pigDiceModule;

$(function(){ // greater function
  var pigDice = {};
  var hallOfFame = [];
  $("button#play-button").click(function(){
    var player1Name = $("#player-1-name-input").val();
    var player2Name = $("#player-2-name-input").val();
    $('span#player-1-name-span').text(player1Name);
    $('span#player-2-name-span').text(player2Name);
    pigDice = new PigDice(player1Name, player2Name); // creates grandpooba object (in the greater function scope) to collect game info (as properties) so it can carry them into functions and change stuff
    pigDice.coinToss();
    var currPlayer = pigDice.turn;
    $('#current-player-span').text(pigDice[currPlayer].name);
    $("#gameplay-div").slideDown();
    $("#player-info-div").slideUp();
    $("#victory-div").slideUp();
  });
  $("button").click(function(){
    if ($(this).attr("id") === "roll-button") {
      pigDice.action = "roll";
    } else if ($(this).attr("id") === "hold-button"){
      pigDice.action = "hold";
    }
    pigDice = playGame(pigDice);
    $('#player-1-score-span').text(pigDice.player1.score);
    $('#player-2-score-span').text(pigDice.player2.score);
    $('#temp-score-span').text(pigDice.tempScore);
    var currPlayer = pigDice.turn;
    $('#current-player-span').text(pigDice[currPlayer].name);
    $('#current-roll-span').text(pigDice.roll);
    if (pigDice.player1.score >= 24 || pigDice.player2.score >= 24){
      if (pigDice.player1.score >= 24) {
        var winner = 'player1';
        var loser = 'player2';
      } else {
        var winner = 'player2';
        var loser = 'player1';
      }
      $("#victory-div").slideDown();
      var victoryMessage = pigDice[winner].name + " wins by " + String(pigDice[winner].score - pigDice[loser].score) + " points!";
      $("#victory-name").text(victoryMessage);
      $("#player-info-div").slideDown();
      $("#gameplay-div").slideUp();
      var hallOfFameWinner = new HallOfFameWinner(pigDice, winner);
      hallOfFame.push(hallOfFameWinner);
      $("#hall-of-fame-names").empty();
      hallOfFame.forEach(function(winner){
        $("#hall-of-fame-names").append(winner.name + " scored " + winner.score + "<br>");
      });
    }
  });
});
