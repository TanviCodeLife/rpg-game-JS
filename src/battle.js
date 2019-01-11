import { Character } from './../src/character.js';
import { Player } from './../src/player.js';

export class Battle {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer = playerOne;
    this.nextPlayer = playerTwo;
    // this.playerOnePos = "pos1";           
    // this.playerTwoPos = "pos2";
    // this.playerOneCurr = "";
    // this.playerTwoCurr = "";
    // this.playerOneCharacter = this.playerOne.character;
    // this.playerTwoCharacter = this.playerTwo.character;
  }


  changeTurn() {
    if(this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
      this.nextPlayer = this.playerOne;
    } else {
      this.currentPlayer = this.playerOne;
      this.nextPlayer = this.playerTwo;
    }
  }

  invokePower(power) {
    if(this.currentPlayer.character.powers.includes(power)){
      switch(power) {
        case "sword":
        this.nextPlayer.character.changeHP(2);
        break;
        case "whip":
        this.nextPlayer.character.changeHP(1);
        break;
        case "spinner":
        this.nextPlayer.character.changeHP(3);
        break;
        case "hammer":
        this.nextPlayer.character.changeHP(4);
        break;
      }
      if(!this.nextPlayer.character.isDead()) {
        this.changeTurn();
      } else {
        this.playerOne.character.resetHP();
        this.playerTwo.character.resetHP();
        return "Battle Over!"
      }
    }
  }


}
