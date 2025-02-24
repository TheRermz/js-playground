import { Character } from "./Character.js";

export class Thief extends Character {
  constructor(name, hp, atk, def) {
    super(name, hp, atk, def);
  }

  attack(target) {
    let damage = this.atk - target.def;
    if (damage > 0) {
      target.hp -= damage * 2;
    }
  }
}
