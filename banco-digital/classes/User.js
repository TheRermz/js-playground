import dayjs from "dayjs";
dayjs.locale(`pt-br`);

export class User {
  #account;
  constructor(fullname, email, account) {
    this.fullname = fullname;
    this.email = email;
    this.#account = account;
  }

  get account() {
    return this.#account;
  }
}
