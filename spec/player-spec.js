import { Player } from './../src/player.js';
import { Character } from './../src/character.js';

describe('Player', function() {
  it('should test whether player has a name', function() {
    const testPlayer = new Player("Jack");
    expect(testPlayer.name).toEqual("Jack");
  });
  
  it('should be able to create a new character based on inputted parameters', function() {
    const testPlayer = new Player("Jack");
    testPlayer.addCharacter({name: "Something", hp: 10, powers: ["sword", "whip"]});
    expect(testPlayer.character.name).toEqual("Something");
    expect(testPlayer.character.maxHP).toEqual(10);
    expect(testPlayer.character.currentHP).toEqual(10);
  });
});
