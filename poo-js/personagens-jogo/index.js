import { Thief } from "./classes/Thief.js";
import { Mage } from "./classes/Mage.js";
import { Warrior } from "./classes/Warrior.js";

const gamon = new Warrior(`Gamon`, 100, 20, 10, 5);
const garona = new Thief(`Garona`, 80, 20, 5, 10);
const medivh = new Mage(`Medivh`, 60, 10, 5, 20);

gamon.switchStance(`defense`);
console.log(`Garona ataca gamon`);
garona.attack(gamon);
console.log(`Medivh ataca garona`);
medivh.attack(garona, 12);
garona.attack(medivh);
garona.attack(medivh);

console.log(gamon);
console.log(garona);
console.log(medivh);
