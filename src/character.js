export const defaultCharacters =
[ {name: "Djordanne", hp: 10, powers: ["sword", "whip"]},
  {name: "Vortex", hp: 15, powers: ["spinner", "hammer"]}
]
export const level1Powers = ["batbite", "triple corn"];
export const level2Powers = ["supersonic blade", "missile swarm"];

export class Character {
  constructor(params) {
    this.name = params.name;
    this.maxHP = params.hp;
    this.currentHP = params.hp;
    this.powers = params.powers;
    this.level = 0;
  }

  changeHP(damage) {
    this.currentHP -= damage;
  }

  isDead() {
    return this.currentHP <= 0
  }

  resetHP() {
    this.currentHP = this.maxHP;
  }

  levelUp(nextLevelPowers) {
    this.powers = this.powers.concat(nextLevelPowers);
    this.level++;
  }
}
