import { Person } from "./Person.js";
// import { Address } from "./Address.js";

// const addr = new Address("Rua 1", 123, "Bairro 1", "Cidade 1", "Estado 1");
const person = new Person(
  "Fulano",
  "Rua 1",
  123,
  "Bairro 1",
  "Cidade 1",
  "Estado 1"
);

console.log(person);
console.log(person.address.fullAddress());
