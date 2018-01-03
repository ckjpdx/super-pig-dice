var PigDice = require('./../js/pig-dice.js').pigDiceModule;

describe('rollDice', function() {

  it('should test to see if a random number is generated', function() {
    var pigDice = new PigDice;
    var numberToCheck =
    expect(pigDice.rollDice()).toEqual(jasmine.any(Number));
  });
});
