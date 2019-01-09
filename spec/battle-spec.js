import { Character } from './../src/character.js';
import { Player } from './../src/player.js';
import { Battle } from './../src/battle.js';

describe('Battle', function(){
  let testBattle = null;
  beforeEach(function() {
    const testPlayer1 = new Player("Jack");
    testPlayer1.addCharacter({name: "Something1", hp: 10, powers: ["sword", "whip"]});
    const testPlayer2 = new Player("Michael");
    testPlayer2.addCharacter({name: "Something2", hp: 15, powers: ["spinner", "hammer"]});
    testBattle = new Battle(testPlayer1, testPlayer2);
  });

  it('should test whether battle has players and their respective characters', function(){
    expect(testBattle.playerOne.name).toEqual("Jack");
    expect(testBattle.playerTwo.name).toEqual("Michael");
    expect(testBattle.currentPlayer.name).toEqual("Jack");
    expect(testBattle.nextPlayer.name).toEqual("Michael");
    // expect(testBattle.playerOneCharacter.name).toEqual("Something1");
    // expect(testBattle.playerTwoCharacter.name).toEqual("Something2");
  });

  it('should switch whose turn it is when instructed', function() {
    expect(testBattle.currentPlayer.name).toEqual("Jack");
    expect(testBattle.nextPlayer.name).toEqual("Michael");
    testBattle.changeTurn();
    expect(testBattle.currentPlayer.name).toEqual("Michael");
    expect(testBattle.nextPlayer.name).toEqual("Jack");
  });

  it('should reduce life of other player when the current player invokes their power', function(){
    testBattle.invokePower("sword");
    expect(testBattle.currentPlayer.character.currentHP).toEqual(13);
    testBattle.invokePower("hammer");
    testBattle.invokePower("sword");
    testBattle.invokePower("hammer");
    testBattle.invokePower("sword");
    testBattle.invokePower("hammer");
    expect(testBattle.currentPlayer.name).toEqual("Michael");
  });
});
