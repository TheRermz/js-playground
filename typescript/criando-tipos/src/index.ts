let literal: `Hello World`;
let pi: 3.14159;

/*-------------------------- */

let option: "Yes" | "No";
let option2: Number | Boolean;
let planet:
  | `Mercúrio`
  | `Venus`
  | `Terra`
  | `Marte`
  | `Júpiter`
  | `Saturno`
  | `Urano`
  | `Netuno`
  | `Plutão`;
/*-------------------------- */

type Planet =
  | `Mercúrio`
  | `Venus`
  | `Terra`
  | `Marte`
  | `Júpiter`
  | `Saturno`
  | `Urano`
  | `Netuno`
  | `Plutão`;

let planeta: Planet;

let homePlanet: Planet = "Terra";

const checkPlanet = (planet: Planet) => {
  //...
};

/*-------------------------- */

type GreetingCallback = (name: string) => void;

const greet = (callbackfn: GreetingCallback) => {
  let name = `Murilo`;
  callbackfn(name);
};
