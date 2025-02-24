class Vehicle {
  move() {
    console.log("O veículo está se movendo");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está se movendo");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`O avião está voando a ${speed} km/h`);
  }
}

const deLorean = new Car();
const titanic = new Ship();
const concorde = new Aircraft();

// deLorean.move();
// titanic.move();
// concorde.move(1000);

function start(vehicle) {
  console.log(`Iniciando um veículo`);
  vehicle.move();
}

start(deLorean);
start(titanic);
start(concorde);
