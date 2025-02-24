export class Character {
  constructor(name, hp, atk, def) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
  }

  attack(target) {
    let damage = this.atk - target.def;
    if (damage > 0) {
      target.hp -= damage;
    }
  }
}
