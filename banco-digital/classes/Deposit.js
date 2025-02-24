import dayjs from "dayjs";
dayjs.locale(`pt-br`);

export class Deposit {
  #value = 0;
  #createdAt;
  constructor(value = 0) {
    this.#value = value;
    this.#createdAt = dayjs();
  }

  get createdAt() {
    return this.#createdAt.format(`DD/MM/YYYY hh:mm:ss`);
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    if (value <= 0) {
      throw new Error(
        `Impossível fazer depósito com valor menor ou igual que zero`
      );
    } else {
      console.log(`Depósito realizado com suceso`);
      this.#value = value;
    }
  }
}
