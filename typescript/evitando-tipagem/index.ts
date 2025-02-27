const sendSpaceship = (spaceship: { pilot: string; copilot?: string }) => {
  //...
};

sendSpaceship({ pilot: `Han solo`, copilot: `Chewbacca` });

sendSpaceship({ pilot: `Luke` });

let input: unknown;
input = `Test`;
input = 20;
input = [];

// forma mais radical de todas

let input2: any; // o tipo any é como se tivesse trabalhando com JS normal, ele "desabilita" as funções to TS

//-------------

const verification = (test) => {
  if (test) {
    //...
  } else {
    let _check: never;
    return _check;
  }
};
