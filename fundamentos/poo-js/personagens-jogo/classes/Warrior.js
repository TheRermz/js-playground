import { Character } from "./Character.js";

export class Warrior extends Character {
  constructor(name, hp, atk, def, sp, pos = `` /* attack or defense */) {
    super(name, hp, atk, def);
    this.sp = sp;
    this.pos = pos;
  }

  switchStance(pos) {
    if (pos.toLowerCase() === `attack` || pos.toLowerCase() === `ataque`) {
      this.pos = `attack`;
    } else if (
      pos.toLowerCase() === `defense` ||
      pos.toLowerCase() === `defesa`
    ) {
      this.pos = `defense`;
      this.def += this.sp;
    } else {
      console.log(`Posição inválida`);
    }
  }

  attack(target) {
    if (this.pos === `attack` || this.pos === `ataque`) {
      let damage = this.atk - target.def;
      if (damage > 0) {
        target.hp -= damage;
      }
    } else {
      console.log(`Impossível atacar na posição atual`);
    }
  }
}
