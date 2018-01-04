var PigDice = require('./../js/pig-dice.js').pigDiceModule;
var Player = require('./../js/pig-dice.js').playerModule;

describe('PigDice', function() {

  var pigDice = new PigDice('gg', 'jack');
  it('should test to see if a random number is generated', function() {
    pigDice.rollDice();
    expect(pigDice.roll).toEqual(jasmine.any(Number));
  });

  it('should test to check user name is showing', function(){
    expect(pigDice.player1.name).toEqual('gg');
    expect(pigDice.player2.name).toEqual('jack');
  });

});
