import { Spaceship } from "./export.ts";

interface BattleSpaceship extends Spaceship {
  weapons: number;
}

let xwing: BattleSpaceship = {
  name: `X-Wing`,
  pilot: `Luke Skywalker`,
  speed: 50,
  weapons: 4,
};
