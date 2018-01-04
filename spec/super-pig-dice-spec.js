var PigDice = require('./../js/pig-dice.js').pigDiceModule;

describe('PigDice', function() {

  it('should test to see if a random number is generated', function() {
    var pigDice = new PigDice();
    pigDice.rollDice();
    expect(pigDice.roll).toEqual(jasmine.any(Number));
  });

  it('should pass a test', function(){
    expect(5).toEqual(5);
  });

});
