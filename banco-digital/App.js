import dayjs from "dayjs";
import { Account } from "./classes/Account.js";
import { User } from "./classes/User.js";

dayjs.locale(`pt-br`);

export class App {
  static users = [];

  static createUser(fullname, email) {
    const emailExists = App.users.some((u) => u.email === email);
    if (emailExists) {
      throw new Error(`O email já está em uso`);
    } else {
      const newUser = new User(fullname, email, new Account());
      App.users.push(newUser);
      return newUser;
    }
  }

  static findUserByEmail(email) {
    return App.users.find((u) => u.email === email);
  }

  static newDeposit(value, email) {
    const user = App.findUserByEmail(email);
    if (user) {
      user.account.newDeposit(value);
    } else {
      throw new Error(`Email não encontrado`);
    }
  }

  static newTransfer(value, senderEmail, recipientEmail) {
    const sender = App.findUserByEmail(senderEmail);
    const recipient = App.findUserByEmail(recipientEmail);
    sender.account.newTransfer(value, sender.account, recipient.account);
  }

  static newLoan(value, duration, email) {
    const user = App.findUserByEmail(email);
    if (user) {
      user.account.newLoan(value, duration);
    } else {
      throw new Error(`Email não encontrado`);
    }
  }
}
