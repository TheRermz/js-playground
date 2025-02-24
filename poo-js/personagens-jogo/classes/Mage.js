import { Character } from "./Character.js";

export class Mage extends Character {
  constructor(name, hp, atk, def, mp) {
    super(name, hp, atk, def);
    this.mp = mp;
  }

  attack(target, mp) {
    let damage = this.atk + mp - target.def;
    if (damage > 0) {
      target.hp -= damage;
    }
    this.mp -= mp;
  }
}
