import { Character, defaultCharacters } from './../src/character.js';


describe('Character', function() {

  let testCharacter = null;
  beforeEach(function() {
    testCharacter = new Character({name: "Something", hp: 10, powers: ["sword", "whip"]});

  });

  it('should create a character with default values', function() {
    expect(testCharacter.name).toEqual("Something");
    expect(testCharacter.maxHP).toEqual(10);
    expect(testCharacter.currentHP).toEqual(10);
    expect(testCharacter.powers).toEqual(["sword", "whip"]);
  });

  it('should create default character from existing hash values', function() {
    defaultCharacters.forEach(function(charac){
      const testCharacter1 = new Character(charac);
      expect(testCharacter1.name).toEqual(charac.name);
      expect(testCharacter1.maxHP).toEqual(charac.hp);
      expect(testCharacter1.powers).toEqual(charac.powers);
    });
  });

  it('should be able to record a character taking damage', function() {
    expect(testCharacter.currentHP).toEqual(10);
    testCharacter.changeHP(4);
    expect(testCharacter.currentHP).toEqual(6);
    expect(testCharacter.maxHP).toEqual(10);
  });

  it('should be able to tell when a character is reduced to 0 or lower hp', function() {
    expect(testCharacter.isDead()).toEqual(false);
    testCharacter.changeHP(12);
    expect(testCharacter.isDead()).toEqual(true);
  });

  it('should be able to reset current HP of character back to max on battle over', function(){
      testCharacter.changeHP(4);
      testCharacter.resetHP();
      expect(testCharacter.currentHP).toEqual(10);
  });
});
