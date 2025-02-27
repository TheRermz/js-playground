const spaceships: Array<{
  name: string;
  pilot: string;
  crewLimit: number;
  crew: Array<string>;
  inMission: boolean;
}> = [];

const addSpaceship = (newSpaceship: {
  name: string;
  pilot: string;
  crewLimit: number;
  crew?: Array<string>;
}) => {
  if (!newSpaceship.name.trim()) {
    alert(`Preencha o nome da nave corretamente`);
    return;
  }
  if (!newSpaceship.pilot.trim()) {
    alert(`Preencha o nome do piloto corretamente`);
    return;
  }

  const spaceshipData = {
    name: newSpaceship.name,
    pilot: newSpaceship.pilot,
    crewLimit: newSpaceship.crewLimit,
    crew: newSpaceship.crew,
    inMission: false,
  };

  alert(`${newSpaceship.name} adicionado com sucesso`);
  return spaceships.push(spaceshipData);
};

const addCrewToSpaceship = (spaceShipName: string, newCrew: Array<string>) => {
  const spaceshipFound = spaceships.find((ship) => ship.name === spaceShipName);

  if (!spaceshipFound) {
    alert(`Nenhuma nave encontrada com esse nome.`);
    return;
  }

  if (spaceshipFound.crew.length + newCrew.length > spaceshipFound.crewLimit) {
    alert(`Você não pode extrapolar o tamanho da tripulação!`);
    return;
  }

  spaceshipFound.crew.push(...newCrew);

  alert(
    `Tripulação adicionada à nave ${spaceshipFound.name}: ${newCrew.join(`, `)}`
  );
};

const sendShipToMission = (spaceship: { name: string }) => {
  const spaceshipFound = spaceships.find(
    (ship) => ship.name === spaceship.name
  );
  if (!spaceshipFound) {
    console.log(`Nenhuma nave encontrada com esse nome.`);
    return;
  }

  if (spaceshipFound.crew.length < spaceshipFound.crew.length / 3) {
    alert(
      `A tripulação da nave precisa estar preenchida em pelo menos um terço para ser enviada para uma missão.`
    );
  }

  spaceshipFound.inMission = true;
  alert(`Nave ${spaceshipFound.name} foi enviada para uma missão`);
};

const spaceshipStatus = () => {
  spaceships.forEach((ship) => {
    console.log(
      `Nome: ${ship.name}.\nPiloto: ${
        ship.pilot
      }.\nTripulação: ${ship.crew.join(`, `)}\nStatus: ${
        ship.inMission ? `Em missão` : `Atracado`
      }`
    );
  });
};
