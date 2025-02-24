import { Post } from "./Post.js";

export class Author {
  constructor(authorName) {
    this.authorName = authorName;
  }
  createPost(title, description) {
    return new Post(title, description, this.authorName);
  }
}
