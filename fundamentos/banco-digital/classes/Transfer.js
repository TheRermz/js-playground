import dayjs from "dayjs";
dayjs.locale(`pt-br`);

export class Transfer {
  #value = 0;
  #userSent;
  #userReceived;
  #createdAt;

  constructor(value = 0, userSent, userReceived) {
    this.#value = value;
    this.#userSent = userSent;
    this.#userReceived = userReceived;
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
      throw new Error(`Impossível fazer transferência menor ou igual a zero`);
    }
    return true;
  }

  get userSent() {
    return this.#userSent;
  }

  set userSent(userSent) {
    this.#userSent = userSent;
  }

  get userReceived() {
    return this.#userReceived;
  }

  set userReceived(userReceived) {
    this.#userReceived = userReceived;
  }
}
