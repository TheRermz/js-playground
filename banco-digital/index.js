import { App } from "./App.js";

App.createUser(`Marcos Noronha`, `mnoronha@gmail.com`);
App.newDeposit(2000, `mnoronha@gmail.com`);
console.log(App.findUserByEmail(`mnoronha@gmail.com`));
console.log(
  App.users.map((u) => ({
    name: u.fullname,
    email: u.email,
    accountBalance: u.account.balance,
  }))
);
