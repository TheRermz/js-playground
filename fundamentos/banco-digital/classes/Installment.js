import dayjs from "dayjs";
dayjs.locale(`pt-br`);

export class Installment {
  #status;
  #installmentValue;
  #installmentNumber;

  constructor(status, installmentValue, installmentNumber) {
    this.#status = status;
    this.#installmentValue = installmentValue;
    this.#installmentNumber = installmentNumber;
  }

  get status() {
    return this.#status;
  }

  set status(value) {
    if (
      value.toLowerCase() == `pendente` ||
      value.toLowerCase() == `paga` ||
      value.toLowerCase() == `atrasada`
    ) {
      this.#status = value;
    } else {
      throw new Error(`Status inválido`);
    }
  }

  get installmentValue() {
    return this.#installmentValue;
  }

  set installmentValue(value) {
    this.#installmentValue = value;
  }

  get installmentNumber() {
    return this.#installmentNumber;
  }

  set installmentNumber(value) {
    this.#installmentNumber = value;
  }
}
