import dayjs from "dayjs";
import { Installment } from "./Installment.js";
dayjs.locale(`pt-br`);

export class Loan {
  #loan = 0;
  #createdAt;
  #duration;

  constructor(loan = 0, duration = 0) {
    this.#loan = loan;
    this.#createdAt = dayjs();
    this.#duration = duration;
    this.installment = new Installment(
      `pendente`,
      this.calculateInstallment(),
      duration
    );
  }

  static #fees = 1.5;

  get duration() {
    return this.#duration;
  }

  set duration(value) {
    if (value < 0) {
      throw new Error(`Impossível fazer empréstimo com duração negativa`);
    }
    return (this.#duration = value);
  }

  get createdAt() {
    return this.#createdAt.format(`DD/MM/YYYY hh:mm:ss`);
  }

  get loan() {
    return this.#loan;
  }

  set loan(value) {
    if (value <= 0) {
      throw new Error(`Impossível fazer empréstimo negativo`);
    }
    this.#loan = value;
  }

  static showBaseFee() {
    return Loan.#fees;
  }

  static set newFee(value) {
    if (value <= 0) {
      throw new Error(`Impossível fazer juros negativo`);
    }
    Loan.#fees = value;
  }
  static get newFee() {
    return Loan.#fees;
  }

  calculateInstallment() {
    const totalAmount = this.#loan * (1 + (Loan.#fees / 100) * this.#duration);
    return Math.ceil((this.installment = totalAmount / this.#duration));
  }
}
