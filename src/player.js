import { Character } from './../src/character.js';

export class Player{
  constructor (name){
    this.name = name;
    this.character;
  }
  
  addCharacter(characterParams) {
    this.character = new Character(characterParams);
  }

}
