const mySpaceship = {
  name: `x-wing`,
  speed: 0,
};

const accelarate = (
  spaceship: { name: string; speed: number },
  speed: number
) => {
  spaceship.speed = speed;
};

accelarate(mySpaceship, 50);
