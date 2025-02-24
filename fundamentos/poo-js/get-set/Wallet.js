class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100;
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    if (typeof newUsername === `string`) {
      this.#username = newUsername;
    } else {
      console.error(`Username must be a string`);
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount); // 100.99
myWallet.username = 32;
console.log(myWallet.username); // John
