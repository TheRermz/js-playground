import { Spaceship } from "./export.ts";
import * as lodash from "lodash";

interface BattleSpaceship extends Spaceship {
  weapons: number;
}

let xwing: BattleSpaceship = {
  name: `X-Wing`,
  pilot: `Luke Skywalker`,
  speed: 50,
  weapons: 4,
};
