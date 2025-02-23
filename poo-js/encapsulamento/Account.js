export class Account {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
    this.balance = 0;
  }
}

export class PrivateAccount {
  #balance = 0;
  #password;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    }
    return "Credenciais inválidas";
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "morlo@fuscher.com",
  password: "123456",
};

console.log("Sem atributos privados");
const myAccount = new Account(user);
console.log(myAccount);
// Account { email: 'morlo@fuscher.com', password: '123456', balance: 0 }

myAccount.balance = 1000;
console.log(myAccount);
// Account { email: 'morlo@fuscher.com', password: '123456', balance: 1000 }
console.log("Com atributos privados");

const myPrivateAccount = new PrivateAccount(user);
console.log(myPrivateAccount);

// myPrivateAccount.#balance = 1000;
// Property '#balance' is not accessible outside class 'PrivateAccount' because it has a private identifier.ts(18013)
console.log(myPrivateAccount.getBalance(user.email, user.password));
