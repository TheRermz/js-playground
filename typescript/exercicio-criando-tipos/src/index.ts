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

const root = document.querySelector(`.root`);

const renderPlanets = (planet: {
  name: string;
  coord: [Number, Number, Number, Number];
  situation: PlanetSituation;
  satellites?: Array<string>;
}) => {
  const article = document.createElement(`article`);
  article.classList.add(`planet-article`);

  const h1 = document.createElement(`h1`);
  h1.classList.add(`planet-name`);
  h1.textContent = planet.name;

  const pCoord = document.createElement(`p`);
  pCoord.classList.add(`planet-coord`);
  pCoord.textContent = planet.coord.toString();

  const pSituation = document.createElement(`p`);
  pSituation.classList.add(`planet-situation`);
  pSituation.textContent = planet.situation;

  const pSatellites = document.createElement(`p`);
  pSatellites.classList.add(`planet-satellites`);
  pSatellites.textContent = planet.satellites.join(", ");

  article.append(h1, pCoord, pSituation, pSatellites);
  root.appendChild(article);
};

addPlanet({
  name: `Terra`,
  coord: [2, 3, 6, 7],
  situation: "Habitado",
  satellites: [`Lua`],
});
addPlanet({
  name: `Venus`,
  coord: [2, 3, 6, 7],
  situation: "Inabitável",
  satellites: [],
});

document.addEventListener(`DOMContentLoaded`, () => {
  planets.forEach(renderPlanets);
});

const form = document.querySelector(`form`);

const processCoordinateInput = (input: string) => {
  const numbers = input.split(",").map((num) => Number(num.trim()));

  if (numbers.length !== 4 || numbers.some(isNaN)) {
    console.warn("Entrada inválida! Digite 4 números separados por vírgula.");
    return null;
  }

  return numbers;
};

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const planetName = document.querySelector(`#planet-name`) as HTMLInputElement;
  const planetCoord = document.querySelector(`#coord`) as HTMLInputElement;
  const planetSituation = document.querySelector(
    `#situation`
  ) as HTMLInputElement;
  const planetSatellites = document.querySelector(
    `#satellites`
  ) as HTMLInputElement;

  const newPlanet = {
    name: planetName.value,
    coord: processCoordinateInput(planetCoord.value) as [
      number,
      number,
      number,
      number
    ],
    situation: planetSituation.value as PlanetSituation,
    satellites: planetSatellites.value.split(",").map((s) => s.trim()),
  };

  planets.push(newPlanet);
  planetName.value = "";
  planetCoord.value = "";
  planetSatellites.value = "";
  renderPlanets(newPlanet);
});
