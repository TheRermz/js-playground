import { Author } from "./classes/Author.js";
// import { Comment } from "./classes/Comment.js";
// import { Post } from "./classes/Post.js";

const john = new Author("John Doe");
const newPost = john.createPost("Hello World", "Hello World");
newPost.addComment("Jane Doe", "Nice post!");
newPost.addComment("John Doe", "Thanks!");
newPost.addComment("Jane Doe", "You're welcome!");

console.log(newPost);
