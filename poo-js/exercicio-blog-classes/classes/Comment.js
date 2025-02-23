import { Author } from "./Author.js";

export class Comment {
  constructor(author, message) {
    this.author = new Author(author);
    this.message = message;
  }
}
