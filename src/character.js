export const defaultCharacters =
[ {name: "Djordanne", hp: 10, powers: ["sword", "whip"]},
  {name: "Vortex", hp: 15, powers: ["spinner", "hammer"]}
]


export class Character {
  constructor(params) {
    this.name = params.name;
    this.maxHP = params.hp;
    this.currentHP = params.hp;
    this.powers = params.powers;
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
}
