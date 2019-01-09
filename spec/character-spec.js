import { Character } from './../src/character.js'

describe('Character', function() {
  it('should create a character with default values', function() {
    const testCharacter = new Character({name: "Something", hp: 10});
    expect(testCharacter.name).toEqual("Something");
    expect(testCharacter.maxHP).toEqual(10);
    expect(testCharacter.currentHP).toEqual(10);
  });
});
