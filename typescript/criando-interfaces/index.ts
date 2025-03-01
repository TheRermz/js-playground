interface CelestialBody {
  name: string;
  mass: number;
}

interface Star extends CelestialBody {
  age: number;
  planets: Planet[];
}

interface Planet extends CelestialBody {
  pop: number;
  createSatellite: (name: string) => void;
}

let sun: Star = {
  name: "Sol",
  mass: 1.989e30,
  age: 4.6e9,
  planets: [],
};

class MilkwayPlanet implements Planet {
  name: string;
  mass: number;
  pop: number;

  constructor(name: string, mass: number, pop: number) {
    this.name = name;
    this.mass = mass;
    this.pop = pop;
  }

  createSatellite(name: string) {
    //...
  }
}
