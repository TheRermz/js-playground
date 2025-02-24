import dayjs from "dayjs";
import { Deposit } from "./Deposit.js";
import { Loan } from "./Loan.js";
import { Transfer } from "./Transfer.js";
dayjs.locale(`pt-br`);

export class Account {
  #balance;
  #deposits = [];
  #transfers = [];
  #loans = [];

  constructor(balance = 0, deposits = [], transfers = [], loans = []) {
    this.#balance = balance;
    this.#deposits = deposits;
    this.#transfers = transfers;
    this.#loans = loans;
  }

  get balance() {
    return this.#balance;
  }

  get deposits() {
    return this.#deposits;
  }

  newDeposit(value) {
    const deposit = new Deposit(value);
    this.#balance += deposit.value;
    this.#deposits.push(deposit);
  }

  get loans() {
    return this.#loans;
  }

  newLoan(value, duration) {
    const loan = new Loan(value, duration);
    this.#loans.push(loan);
    this.#balance += value;
  }

  newTransfer(value, sender, recipient) {
    const transfer = new Transfer(value, sender, recipient);

    if (sender === this) {
      if (this.#balance < value) {
        throw new Error(`Saldo insuficiente.`);
      }
      this.#balance -= value;
      recipient.#balance += value;
    }
    if (recipient === this) {
      this.#balance += value;
    }
    this.#transfers.push(transfer);
  }
}
