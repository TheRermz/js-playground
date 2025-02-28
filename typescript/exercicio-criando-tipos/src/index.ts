type PlanetSituation = `Habitado` | `Habitável` | `Inabitável` | `Inexplorado`;
const planets: Array<{
  name: string;
  coord: [Number, Number, Number, Number];
  situation: PlanetSituation;
  satellites: Array<string>;
}> = [];

const addPlanet = (planet: {
  name: string;
  coord: [Number, Number, Number, Number];
  situation: PlanetSituation;
  satellites?: Array<string>;
}) => {
  const newPlanet = {
    name: planet.name,
    coord: planet.coord,
    situation: planet.situation,
    satellites: planet.satellites ?? [],
  };

  planets.push(newPlanet);
};

const updateSituation = (planet: {
  name: string;
  situation: PlanetSituation;
}) => {
  const planetExists = planets.find(
    (p) => p.name.toLowerCase() === planet.name.toLowerCase()
  );
  if (!planetExists) {
    console.warn(`Planeta Não encontrado`);
    return;
  }

  planetExists.situation = planet.situation;
};

const addSatellite = (planet: { name: string; satellite: Array<string> }) => {
  const planetExists = planets.find(
    (p) => p.name.toLowerCase() === planet.name.toLowerCase()
  );
  if (!planetExists) {
    console.warn(`Planeta Não encontrado`);
    return;
  }
  console.log(planetExists);
  planetExists.satellites.push(...planet.satellite);
};

const removeSatellite = (planet: { name: string; satelliteName: string }) => {
  const planetExists = planets.find(
    (p) => p.name.toLowerCase() === planet.name.toLowerCase()
  );
  if (!planetExists) {
    console.warn(`Planeta Não encontrado`);
    return;
  }

  const indexOfSatellite = planetExists.satellites.indexOf(
    planet.satelliteName
  );
  if (indexOfSatellite === -1) {
    console.warn(`Satélite não encontrado no planeta ${planet.name}.`);
    return;
  }
  planetExists.satellites.splice(indexOfSatellite, 1);
  console.log(
    `Satélite "${planet.satelliteName}" removido do planeta ${planet.name}.`
  );
};

const listPlanets = () => {
  console.warn(`Planetas:`);
  planets.forEach((p) => {
    console.log(`Nome: ${p.name}.`);
    console.log(`Coordenadas: ${p.coord}.`);
    console.log(`Situação: ${p.situation}.`);
    console.log(`Satélites: ${p.satellites.join(`, `)}`);
  });
};

/**
 * TODO --> FAZER A PARTE DE MOSTRAR NO INDEX.HTML
 */
