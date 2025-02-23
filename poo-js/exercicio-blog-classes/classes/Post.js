import { Author } from "./Author.js";

export class Post {
  constructor(title, description, authorName, comments = []) {
    this.title = title;
    this.description = description;
    this.author = new Author(authorName);
    this.comments = comments;
  }

  addComment(author, message) {
    this.comments.push({ author, message });
  }
}
